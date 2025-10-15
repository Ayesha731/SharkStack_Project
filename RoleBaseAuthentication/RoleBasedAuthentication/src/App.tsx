import "./App.css";
import { useAuth } from "./components/AuthProvider";
import { Link } from "react-router-dom";

function App() {
  const { authToken, handleLogin, handleLogout } = useAuth();
  return (
    <>
      <div className="flex flex-col m-5">
        <h1 className="text-2xl font-bold border-2 border-amber-600 p-5 my-5">
          Role Base Authentication
        </h1>
        <Link to="/protected" className="underline">
          Protected Route
        </Link>
        {authToken ? (
          <button
            onClick={handleLogout}
            className="bg-gradient-to-bl bg-red-900 text-white w-1/4 p-2 cursor-pointer rounded mt-5"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-gradient-to-bl bg-red-900 text-white w-1/4 p-2 cursor-pointer rounded mt-5"
          >
            Login
          </button>
        )}
      </div>
    </>
  );
}

export default App;
