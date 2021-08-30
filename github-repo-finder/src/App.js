import './App.css';
import "@material-tailwind/react/tailwind.css";
import NavbarComponent from './components/NevbarComponent.jsx';
import Repo from './components/RepoComponent';
function App() {
  return (
    <div className="App">
    <div class="relative bg-white overflow-hidden">
      <div class='p-4 m-4 bg-green-600'>
        <NavbarComponent></NavbarComponent>
      </div>
      <div class='p-4 m-4 bg-green-300'>
        <Repo/>
      </div>
    </div>
    </div>
  );
}

export default App;
