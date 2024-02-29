import "../src/styles/index.scss";
import RoutesMain from "../routes/RoutesMain.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  );
};

export default App;
