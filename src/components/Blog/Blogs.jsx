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

  useEffect(() => {
    axios.get("https://61ed54c4f3011500174d23cc.mockapi.io/Post")
      .then((response) => {
        (response.data).map((blog) => {
          getBlogData([...blogData, { title: blog["title"], id: blog["id"] }]);
        });
      })

      .catch((err) => {
        console.log(err);
      });
    console.log(blogData);
  }, []);

  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="blog"></div>
      </div>
    </StyleRoot>
  );
}

export default Blogs;
