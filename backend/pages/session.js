import { SignJWT, jwtVerify } from 'jose';
import dotenv from 'dotenv';
dotenv.config(); 


// Use a secret from environment variables
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// Encrypt payload into JWT token
export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

// Decrypt and verify JWT token
export async function decrypt(token) {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session:', error.message);
    return null;
  }
}

// Set session cookie in Express response
export async function createSession(res,userId) {

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  
  const sessionToken = await encrypt({ userId, expiresAt });
 
  // Set cookie
  res.cookie('session', sessionToken, {
    httpOnly: true,
    secure: false, // ⚠️ Set to false for localhost/testing
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
 
}

// Read and verify session from Express request cookies
export async function getSession(req) {
  const sessionToken = req.cookies?.session;

  if (!sessionToken) return null;
  const payload = await decrypt(sessionToken);
  
  if (!payload) return null;

  // Optional: check expiration
  if (new Date(payload.expiresAt) < new Date()) return null;

  return payload;
}

