import './App.css';
import RecipesComponent from './components/RecipesComponent';
import Navbar from './components/Navbar/Navbar';
import Form from './components/SignupForm/Form';

function App() {
  return (
    <div className="App">
    <Navbar />
      <RecipesComponent />
      {/* <Form /> */}
    </div>
  );
}

export default App;
