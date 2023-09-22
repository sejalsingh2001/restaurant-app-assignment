import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ItemDetails() {
    const { menuId } = useParams()
    console.log('menuId ',menuId ) ;
    const [items, setItems] = React.useState([]);
    const baseUrl = 'http://localhost:5000';
  
    React.useEffect(() => {
      axios.get(`${baseUrl}/api/items/${menuId}`)
        .then((response) => {
         setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching items:', error);
        });
    }, [menuId]);
  
    return (
      <div>
        <h2>Item Details</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default ItemDetails;