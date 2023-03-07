
import './App.css';

function App() {
  const products=[
    {
      "id": 111,
      "img":"../images/soap.jpg",
      "title": "Soap",
      "desc":"A Soap for Bathing",
      "price": 50
     },
    {
      "id": 112,
      "img":"../images/soap.jpg",
      "title": "Soap",
      "desc":"A Soap for Bathing",
      "price": 50
    },
    {
      "id": 113,
      "img":"../images/soap.jpg",
      "title": "Soap",
      "desc":"A Soap for Bathing",
      "price": 50
    }
  ]
  return (
    <div>
      {
      products.map(p=>{
        return(
          <div key={p.id} className="product">  
            {/* <img src={p.img} alt={p.title} > </img> */}
            <h1> {p.title} </h1>
            <p>  {p.desc}  </p>
            <h2> {p.price} </h2>
          </div>
        )
      })
      }
    </div>

  );
}

export default App;
