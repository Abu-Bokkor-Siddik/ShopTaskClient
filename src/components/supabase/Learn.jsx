// app/products/page.js
import { createClient } from "@supabase/supabase-js";

// ⚠️ You must use server-side env vars, not NEXT_PUBLIC
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const Productes = async () => {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    return <div>Failed to load products</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-4 my-2">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Productes;
