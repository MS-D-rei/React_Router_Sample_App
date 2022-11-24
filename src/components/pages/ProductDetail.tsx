import { useParams } from 'react-router-dom';

function ProductDetail() {
  const params = useParams();

  console.log(params);

  return (
    <section>
      <h1>Product Detail</h1>
    </section>
  );
}

export default ProductDetail;
