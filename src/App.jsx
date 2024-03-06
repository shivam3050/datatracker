import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Dataentry from "./Dataentry";
import Home from "./Home";
// we have to import layout file as well as all those files which
// we want to be render in the outlet
// also we have to give path here
function App() {

  return (
    <div className="xyz bg-orange-500 w-12/12">
  <BrowserRouter>
  <Routes>
    {/* route containing "/" is for first page  */}
        <Route path="/" element={
            <div className="bg-gradient-to-t from-rose-500 to-white h-full "> 
            <Layout />
            <Outlet />
            </div>
      }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dataentry" element={<Dataentry />} />

        </Route>
  </Routes>
</BrowserRouter>
</div>
);
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
