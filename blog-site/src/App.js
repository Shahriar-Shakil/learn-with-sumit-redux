import React from "react";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      {/* navigation */}
      <Header />
      {/* search */}
      <SearchBar />
      <Blogs />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
