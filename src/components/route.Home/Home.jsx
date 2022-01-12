import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";
import Header from "../Header";
import { fetchTopReviews } from "../../utils/api";

export default function Home() {
  const [topReviews, setTopReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchTopReviews().then((res) => {
      setIsLoading(false);
      setTopReviews(res);
    });
  }, []);
  return (
    <div>
      <Header />
      <div>Main Image Here</div>
      <h1>Welcome to BGL!</h1>
      <Link to="/about">
        <button>About Us</button>
      </Link>
      <h2>Search</h2>
      <SearchBox />
      <h2>Top Voted Reviews</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {topReviews.map((review) => (
            <li key={review.review_id}>{review.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
