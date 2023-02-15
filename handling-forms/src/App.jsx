import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from './components/Form4';
import "./app.css";

function App() {

  return (
    <div className="app">
      <div className="form-section "><Form1/></div>

      <div className="form-section "><Form2/></div>

      <div className="form-section "><Form3/></div>

      <div className="form-section "><Form4/></div>
    </div>
  );
}

export default App;
