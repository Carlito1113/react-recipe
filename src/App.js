import './App.css';
import RecipesComponent from './components/RecipesComponent';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <RecipesComponent />
    </div>
  );
}

export default App;
