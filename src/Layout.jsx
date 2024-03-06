import { Link } from "react-router-dom";
const Layout = () => {
    return (
        // this is will be present all the time on screen
        <div className="mb-5">
            <div className="navbar bg-zinc-50 text-xl font-serif min-h-14 font-medium flex justify-around sm:justify-end sm:gap-10 px-5 bg-white shadow-slate-900 shadow-md">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="dataentry">Data</Link>
            </div>
        </div>
    );
  };
  
  export default Layout;