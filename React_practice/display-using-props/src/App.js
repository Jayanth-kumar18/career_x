
import './App.css';
import ProductList from './ProductList';
function App() {
  const products=[
    {
      "id": 101,
      "img":"../images/soap.jpg",
      "title": "Detergent Powder",
      "desc":"A detergent powder for Top-Load Washing Machine",
      "price": 776
    },
    {
      "id": 102,
      "img":"../images/soap.jpg",
      "title": "Detergent Powder",
      "desc":"A detergent powder for Top-Load Washing Machine",
      "price": 776
    },
    {
      "id": 103,
      "img":"../images/soap.jpg",
      "title": "Detergent Powder",
      "desc":"A detergent powder for Top-Load Washing Machine",
      "price": 776
    }
  ];
  return (
    <div >{
<ProductList prds={products}> </ProductList>
}
    </div>
  );
}

export default App;
