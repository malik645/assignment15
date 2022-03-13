import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import { formData } from "./components/FormData";
function App() {
  return (
    <div className="App">
     <Form data = {formData}/>
    </div>
  );
}

export default App;
