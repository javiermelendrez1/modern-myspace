import './App.css';
//import my components
import NavigationBar from './components/NavigationBar/NavigationBar';
import SignForm from './components/SignForm/SignForm';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <SignForm/>
    </div>
  );
}

export default App;
