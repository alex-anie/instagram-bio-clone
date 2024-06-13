import { NavLink } from "react-router-dom";
import PostsIcons from "../icons/PostsIcons";
import { useEffect, useRef, useState } from "react";
import CarouselIcon from "../icons/CarouselIcon";
import Heart from "../icons/Heart";
import Chart from "../icons/Chart";

export default function Posts() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(0);

  // Load more posts
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const abortControllerRef = useRef(null);

  // console.log(abortControllerRef);

  useEffect(() => {
    const postsData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(
          `http://localhost:5173/src/api/posts.json?page=${pages}`,
          {
            signal: abortControllerRef.current?.signal,
          }
        );
        const imageData = await response.json();
        setPosts(imageData);
        // console.log(imageData);
      } catch (e) {
        if (e.name === "AbortError") {
          // console.log("Aborted");
          return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    postsData();
  }, [pages]);

  if (error) {
    return <div>Something went wrong! Please try again</div>;
  }

  return (
    <>
      <main className="posts">
        <section>
          <aside>
            <div className="line"></div>
            <div>
              <NavLink className="post-navlink">
                <span>
                  <PostsIcons width={18} height={18} />
                </span>
                <span className="text"> POSTS</span>
              </NavLink>
            </div>

            <div>
              {!isLoading && (
                <div className="image-wrapper">
                  {posts.slice(0, visible).map((post) => {
                    return (
                      <div className="shoes" key={post.username}>
                        <span className="icons">
                          <CarouselIcon width={22} height={22} fill="white" />
                        </span>
                        <div className="like-chart-wrapper">
                          <span className="like">
                            <Heart width={24} height={24} fill="white" />
                          </span>
                          <span className="comment">
                            <Chart width={24} height={24} fill="white" />
                          </span>
                        </div>
                        <img key={post.username} src={post.photo} alt="" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="load-btn-wrapper">
              <button onClick={showMoreItems} className="load-more-btn">
                {isLoading ? "Loading..." : "Show more posts from randoms"}
              </button>
            </div>
          </aside>
          {/* {isLoading && <div className="spinner"></div> : Show more posts from randoms}  */}
        </section>
      </main>
    </>
  );
}
