import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function RestaurantList() {
  const [restaurants, setRestaurants] = React.useState([]);
  const baseUrl = 'http://localhost:5000';
  

  React.useEffect(() => {
    axios.get( `${baseUrl}/api/restaurants`)
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            
            <Link to={`/menus/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;