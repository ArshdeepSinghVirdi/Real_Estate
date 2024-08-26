import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import "./homePage.scss";
import { useContext } from "react";

function HomePage() {
  const {currentUser} = useContext(AuthContext)
  // console.log(currentUser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Welcome to Your Dream Home!
          Finding your perfect home has never been easier. Whether buying, selling, or exploring, our platform offers a seamless, tailored experience. With exclusive listings, expert guidance, and cutting-edge tools, we make real estate simple, transparent, and exciting. Start your journey with us today and turn your property dreams into reality.
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
