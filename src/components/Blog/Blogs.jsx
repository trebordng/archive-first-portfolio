import React, { useEffect, useState } from "react";
import axios from "axios";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import { Link, Outlet } from "react-router-dom";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Blogs() {
  const [blogData, getBlogData] = useState([]);
  function axiosAPI() {
    axios
      .get("https://61ed54c4f3011500174d23cc.mockapi.io/Post")
      .then((res) => {
        res.data.map((blog) => {
          getBlogData([...blogData, blog]);
        });
        console.log(blogData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axiosAPI();
  }, []);
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="blog">
          {blogData.map((blog) => {
            <p>{blog.title}</p>;
          })}
        </div>
      </div>
    </StyleRoot>
  );
}

export default Blogs;
