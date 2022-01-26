import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};


function Blog() {
  const [blogData, getBlogData] = useState([]);
  function getBlog(id) {
    return blogData.map((blogs)=> blogs.find((blog) => blog.id === id) );
  }

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
  let {blogId} = useParams();

  let blog = getBlog(blogId);
  console.log(blog);
  return (
    <>
      <StyleRoot>
      asdsad {blogId}
     
        <div style={styles.fadeIn}></div>
        asdasd
      </StyleRoot>
    </>
  );
}

export default Blog;
