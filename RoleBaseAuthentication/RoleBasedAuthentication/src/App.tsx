import "./App.css";
import { useAuth } from "./components/AuthProvider";
import { Link } from "react-router-dom";

function App() {
  const { authToken, handleLogin, handleLogout } = useAuth();
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Cosden Solutions</h1>
        <Link to="/protected">Protected Route</Link>
        {authToken ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </>
  );
}

export default App;
