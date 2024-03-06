import "./App.css";

const Header = () => <h1>Product Page</h1>

const Body = ({products}) => {
  console.log(products)
  return (
    <>
      <h2>{products.name}</h2>
      <div>
        <img src={products.img}/>
      </div>
      <p><strong>Price: </strong>{products.price}</p>
      <p><strong>Color: </strong>{products.color}</p>
      <p><strong>Description: </strong>{products.description}</p>
      <p><strong>{products.status}</strong></p>
    </>
  )
}

const Footer = () => <p>&copy; 2024 Apple Inc.</p>

export default function App() {
  const products = {
    name: 'iPhone 15 Pro',
    img: 'https://via.placeholder.com/150',
    price: 499,
    color: 'Midnight Green',
    description: 'The latest flag ship smartphone from Apple',
    status: 'In Stocks'
  }
  return (
    <>
      <Header/>
      <main>
        <Body products={products}/>
      </main>
      <Footer/>
    </>
  );
}
