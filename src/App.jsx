import { Form } from "./components/form";
import Navbar from "./components/navBar";
import "./css/index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-Blue-light-7 mt-xl  content-center d-f">
        <Form />
      </div>
    </>
  );
}

export default App;
