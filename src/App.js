import React from "react";
import "./App.css";
import ReviewSection from "./components/review-section";

function App() {
  return (
    <div className="App">
      <h1 className="page-title text-center">Reviews</h1>
      <hr />
      <ReviewSection />
    </div>
  );
}

export default App;
