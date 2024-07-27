import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Expenses from "./components/expenses";
import Form from "./components/form";
import History from "./components/history";

function App() {
  return (
    <div className="App">
      <Expenses></Expenses>
      <div id="component">
      <Form></Form>
      <History></History>
      </div> 
      
    </div>
  );
}

export default App;
