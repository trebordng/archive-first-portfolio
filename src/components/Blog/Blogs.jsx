import React, { useEffect, useState } from "react";
import axios from "axios";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import { Link, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Blogs.css";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Blogs() {
  const [blogData, getBlogData] = useState([]);

  async function axiosAPI() {
    const test = [];
    await axios
      .get("https://61ed54c4f3011500174d23cc.mockapi.io/Post")
      .then((response) => {
        test.push(response.data);
      });
    getBlogData(test);
  }

  useEffect(() => {
    axiosAPI();
  }, []);
  useEffect(() => {}, []);

  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="blogs">
          <Navigation />
          <div id="blogLink">
            <h1 className="blogsTitle">Blog</h1>
          </div>
          <div className="blogWrapper row">
            {blogData.map((blogPage) =>
              blogPage.map((blog) => (
                <div className="blog col-lg-4">
                  <h2>{blog.title}</h2>
                  <img className="blogImage" src={blog.image} />
                  <p>{blog.shortDescription}</p>
                  <Link to={`/Blogs/${blog.id}`} key={blog.id}>
                    <button className="readMoreButton">
                      <span>Read More</span>
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
          <div></div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Blogs;
