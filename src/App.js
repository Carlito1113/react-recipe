import './App.css';
import ApiButton from './components/ApiButton'
import Form from './components/Form';
import RecipesComponent from './components/RecipesComponent'

function App() {
  return (
    <div className="App">
      <h1>Recipe Lads</h1>
      <ApiButton />
      <Form />
      <RecipesComponent />
    </div>
  );
}

export default App;
