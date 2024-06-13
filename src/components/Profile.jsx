import ChainIcons from "../icons/ChainIcons";
import ThreadIcon from "../icons/ThreadIcon";
import VerifiedIcon from "../icons/VerifiedIcon";
import { Link } from "react-router-dom";
import randoms from "../images/randoms.png";

export default function Profile() {
  return (
    <>
      <main className="profile">
        <section>
          {/* profile logo */}
          <aside className="profile-logo">
            <div className="instagram-ring">
              <div className="img-wrapper">
                <img src={randoms} alt="Randoms logo" />
              </div>
            </div>
          </aside>

          {/* Profile info */}
          <aside className="profile-info">
            {/* Interact */}
            <div className="interact">
              <p>
                <span>randoms</span> <VerifiedIcon />
              </p>
              <button>Follow</button>
              <button>Message</button>
            </div>

            {/* Posts */}
            <div className="posts">
              <p>618 posts</p>
              <p>98.6K followers</p>
              <p>944 following</p>
            </div>

            {/* Details */}
            <div className="details">
              <p>Randoms</p>

              <p className="thread">
                <ThreadIcon />
                <span>randoms</span>
              </p>

              <p className="info">
                <span className="community">Community</span>
                <span>
                  A NYC brand that makes sneakers, masks, & friends unlike any
                  other. Sometimes art & chai too. Ethically made in South
                  Korea.
                </span>
              </p>

              <p className="links">
                <ChainIcons />
                <Link>randoms.xix/products/001-black</Link>
              </p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
