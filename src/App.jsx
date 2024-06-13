import BrandsList from "./components/BrandsList";
import Followers from "./components/Followers";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Followers />
      <Posts />
      <BrandsList />
    </>
  );
}

export default App;
