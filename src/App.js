import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
