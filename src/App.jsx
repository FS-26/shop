import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    await axios
      .get(`http://localhost:8000/api/products`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(({ response: { data } }) => {});
  };
  return (
    <>
      <h2>Product List</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Label</th>
            <th scope="col">Qte</th>
            <th scope="col">Price</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => {
            return (
              <tr key={key}>
                <th scope="row">{product.id}</th>
                <td>{product.label}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.photo} width="50px" alt={product.label} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
