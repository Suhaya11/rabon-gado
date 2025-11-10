import { Form } from "./components/form";
import Navbar from "./components/navBar";
import "./css/index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-Cornflowerblue-dark-8 mt-xl text-White content-center d-f">
        <Form />
      </div>
    </>
  );
}

export default App;
