
import './App.css';
import Child1 from './Child1';

function App() {
  return (
    <div className="App" style={{backgroundColor:"lightBlue", color:'red'}}>
      <h3> Iam parent component</h3>
      <Child1> </Child1>
      <h1> Hi This is my first react app</h1>
      <h2> Hello everyone </h2>
    </div>
  );
}

export default App;
