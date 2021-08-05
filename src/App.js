
import './App.css';
import GroceryList from './components/GroceryList/GroceryList';
import {GroceryContext} from './Contexts/context'

function App() {

  function showGroceryList(){
    return(
      <GroceryContext.Provider value={{yes: "true"}}>
        <GroceryList/>
      </GroceryContext.Provider>
    )
    
  }
  return (
    <div className="App">
      {showGroceryList()}
    </div>
  );
}

export default App;
