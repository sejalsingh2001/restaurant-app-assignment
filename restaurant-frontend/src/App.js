import React, {useState} from 'react';
import { BrowserRouter ,  Route,  Link, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList'
import MenuList from './components/MenuList';
import ItemDetails from './components/ItemDetails';


function App() {
const [data,setData] = useState([]);

  return (
    <BrowserRouter>
     <div className="App"> 
    <Routes>
          <Route path="/" exact element={<RestaurantList/>} />
          <Route path="/menus/:restaurantId" element={ <MenuList/>} />
          <Route path="/items/:menuId" element={ <ItemDetails />} />    
    </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
