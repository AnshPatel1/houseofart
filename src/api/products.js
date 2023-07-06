import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/products?format=json');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchProducts;