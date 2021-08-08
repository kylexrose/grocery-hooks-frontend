
import './App.css';
import GroceryList from './components/GroceryList/GroceryList';
import {GroceryContext} from './Contexts/context'
import Axios from './components/utils';


function App() {
  let groceryList = [];

  useEffect(() => {
    
  }, [input])

  function showGroceryList(){
    return(
      <GroceryContext.Provider value={{}}>
        <GroceryList/>
      </GroceryContext.Provider>
    )
    
  }

  async function getAllGroceries(){
    try{
      allGroceries = await Axios.get('/api/groceries/get-all-groceries')
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="App">
      {showGroceryList()}
    </div>
  );
}

export default App;
