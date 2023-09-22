import React from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function MenuList() {
    const { restaurantId } = useParams()
    const [menus, setMenus] = React.useState([]);
    const baseUrl = 'http://localhost:5000';
  
    React.useEffect(() => {
      axios.get( `${baseUrl}/api/menus/${restaurantId}`)
        .then((response) => {
          setMenus(response.data);
        })
        .catch((error) => {
          console.error('Error fetching menus:', error);
        });
    }, [restaurantId]);
  
    return (
      <div>
        <h2>Menu List</h2>
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link to={`/items/${menu.id}`}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default MenuList;
