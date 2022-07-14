import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>login JWT starter</h1>
      <p className="text-2xl">try to..</p>
      <ol className="text-2xl border m-10">
        <li className="list-decimal text-left">send a register request</li>
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
      <p className="text-2xl">
        for a starting point, look at the requests from the server's "jwt.http"
        file
      </p>
      <Login />
      <Register />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
