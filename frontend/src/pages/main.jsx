import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-6xl font-bold">Main</div>
      <Link to="/a">
        <button className="bg-pink-400 text-white px-4 py-2 rounded-lg mt-8">
          A page
        </button>
      </Link>
    </div>
  );
};

export default Main;
