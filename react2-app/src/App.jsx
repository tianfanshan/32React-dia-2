import './App.css';
import Funcional from './components/Funcional/Funcional';
// import TypeClass from './components/TypeClass/TypeClass'

function App() {
  return (
    <div className="App">
      <Funcional initialValue={7}/>
      <Funcional initialValue={2}/>
      <Funcional initialValue={1}/>
      {/* <TypeClass initialValue={0}/> */}
    </div>
  );
}

export default App;
