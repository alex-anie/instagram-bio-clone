import { Link, Outlet } from "react-router-dom";

export default function BrandsList() {
  console.log("BrandsList component rendered");
  return (
    <>
      <main>
        <section className="brands-list">
          <Link to="brands">See all brands</Link>
        </section>
        <Outlet />
      </main>
    </>
  );
}
