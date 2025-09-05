import { getSession } from "../session.js";

export async function authenticateUser(req, res, next) {
  const session = await getSession(req); // Reads and verifies the session token from cookies
  // console.log('session',session)

  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid or expired session' });
  }

  // Attach user info to request
  req.user = {
    id: session.userId,
  };

  next(); // proceed to the next middleware or route handler
}
