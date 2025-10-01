import { useCookies } from 'react-cookie';

export default function Cookies() {
  const [cookies, setCookie, removeCookie] = useCookies(['itemList']);

  const handleSetCookie = (item) => {
    setCookie('itemList', item, { path: '/', maxAge: 3600 }); // path and maxAge are optional
  };

  const handleRemoveCookie = () => {
    removeCookie('itemList');
  };

  return (
    <div>
      <p>Current cookie value: {cookies.myCookieName}</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>
    </div>
  );
}