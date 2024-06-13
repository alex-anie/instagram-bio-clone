import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";

export default function Brands() {
  console.log("Brands component rendered");
  const brandsInfo = useLoaderData();

  return (
    <>
      <main className="brands">
        <section>
          <swiper-container
            navigation-next-el=".custom-next-button"
            navigation-prev-el=".custom-prev-button"
            slides-per-view="5"
            space-between="10"
          >
            {brandsInfo.map((brand) => (
              <swiper-slide key={brand.id}>
                <Link to="" className="brands-logo">
                  <span>x</span>
                  <div className="logo-wrapper">
                    <img src={brand.logo_url} alt={brand.brand_name} />
                  </div>
                  <h3>{brand.brand_name}</h3>
                  <p>{brand.about}</p>
                  <div className="btn-wrapper">
                    <button>Follow</button>
                  </div>
                </Link>
              </swiper-slide>
            ))}
          </swiper-container>

          <div className="nav-btn custom-prev-button">
            <ArrowLeft />
          </div>

          <div className="nav-btn custom-next-button">
            <ArrowRight />
          </div>
        </section>
      </main>
    </>
  );
}

//loader function
export const brandsLoader = async () => {
  const response = await fetch("http://localhost:5173/src/api/brands.json");
  return response.json();
};
