import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 flex justify-between py-6 text-white">
        <Link to="/" className="text-3xl font-medium">
          Oxygen
        </Link>
        <h1>Login</h1>
      </div>
    </div>
  );
};

export default AppBar;
