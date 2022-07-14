import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="m-10 p-10">
        <h1>login JWT starter</h1>
        <p className="text-2xl">
          (for a starting point, look at the requests from the server's
          "jwt.http" file)
        </p>
      </div>
      <ol className="text-2xl border m-10 p-10">
        <p className="text-2xl">try to..</p>
        <li className="list-decimal text-left">
          let the user register ( send a POST to auth/register )
        </li>
        <li className="list-decimal text-left">
          let the user login ( send a POST to auth/login )
        </li>
        <li className="list-decimal text-left">
          show logged in user a "profile" component with their email if they're
          logged in{" "}
        </li>
        <li className="list-decimal text-left">
          show the user register and login form if not logged in
        </li>
        <li className="list-decimal text-left">
          add react-router to organise the app into /login /profile etc.
        </li>
        <li className="list-decimal text-left">
          save the JWT token in the browser somehow (cookies, localstorage,
          google it)
        </li>
      </ol>
      <div className="border m-10 p-10">
        <h1> google suggestions </h1>
        <h2>server stuff</h2>
        <p>( to read POST JSON from the request object )</p>
        "how to read JSON in express" or "how to read form data in express"
        <p>( to let react talk to server )</p>
        "how to enable cors express"
        <h2>frontend stuff</h2>
        <p>( to send the jwt token to the server )</p>
        "how to send authorization header in fetch"
        <p>( to send the jwt token to the server )</p>
        "where to store JWT in react app"
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
