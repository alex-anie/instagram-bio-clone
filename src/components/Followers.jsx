import followers from "../api/followers.json";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";

export default function Followers() {
  return (
    <>
      <main className="slider-main-container followers">
        <swiper-container
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          slides-per-view="7"
          space-between="30"
        >
          {followers.map((slide) => (
            <swiper-slide key={slide.user_id}>
              <img src={slide.profile_picture} alt={slide.username} />
              <p className="username">{slide.username}</p>
            </swiper-slide>
          ))}
        </swiper-container>

        <div className="nav-btn custom-prev-button">
          <ArrowLeft />
        </div>

        <div className="nav-btn custom-next-button">
          <ArrowRight />
        </div>
      </main>
    </>
  );
}
