import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import Navigation from "../Navigation/Navigation";
import "./Blogs.css";
const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

function Blog() {
  const [blogData, getBlogData] = useState([]);
  function getBlog(id) {
    return blogData.map((blogs) => blogs.find((blog) => blog.id === id));
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
  let { blogId } = useParams();
  const blogDatas = getBlog(blogId);
  return (
    <>
      <StyleRoot>
        <div style={styles.fadeIn}>
          <div>
            <div className="blogPage">
              <Navigation />
              <div className="blogWrapper">
              {blogDatas.map((blogPage) => (
                <>
                <div className="blogPageTitle">{blogPage.title}</div>
                <div className="blogPageBox">
                <div><img className="blogPageImage" src={blogPage.image} /></div>
                <div> <p className="blogPageText">{blogPage.description}</p></div>
                </div>
                </>

              ))}
            </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
}

export default Blog;
