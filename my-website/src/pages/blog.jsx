import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ body: "" });
  const [author, setAuthor] = useState({ author: "" });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://mgreason-website.onrender.com/blog-post", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handlePost() {
    const postData = {
      author: author.author,
      body: post.body,
    };

    axios
      .post("https://mgreason-website.onrender.com/blog-post", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setPosts([...posts, response.data]);
        setPost({ body: "" });
        setAuthor({ author: "" });
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(
          "Please fill our both of the text fields to post. Thanks!"
        );
      });
  }
  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      handlePost();
    }
  }

  console.log(post);

  if (posts) {
    const reversedPosts = [...posts].reverse();

    return (
      <>
        <div className=" my-8">
          <div className="my-2">
            <div className=" text-center text-6xl font-serif">
              Visitors Blog
            </div>
            <div className="flex flex-col m-auto mt-10 text-center text-2xl font-serif w-4/12">
              Feel free to leave me a note! I'd love to hear constructive
              feedback, ideas for the site, or even just happy thoughts! Thank
              you for your time :)
            </div>
          </div>
          <div className="flex flex-col text-center my-2 justify-center items-center">
            <div className="mt-4 w-8/12">
              <TextField
                id=""
                multiline
                rows={8}
                className="w-4/6"
                value={post.body}
                onKeyDown={handleKeyDown}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
              ></TextField>
              <div>
                <TextField
                  id=""
                  variant="standard"
                  label="Author"
                  value={author.author}
                  onKeyDown={handleKeyDown}
                  onChange={(e) =>
                    setAuthor({ ...author, author: e.target.value })
                  }
                ></TextField>
              </div>
              {errorMessage && (
                <Alert className="my-2" severity="error">
                  {errorMessage}
                </Alert>
              )}
              <div>
                <Button onClick={handlePost} variant="text">
                  Post
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {reversedPosts.map((p, index) => (
                <Card
                  key={index}
                  className="my-2 w-4/6 shadow-md shadow-black font-serif"
                  variant="outlined"
                >
                  <CardContent>
                    <div className=" text-sm">
                      {moment(p.created_at).format("MMMM Do, YYYY")}{" "}
                      <span> - </span>
                      {moment(p.time_created, "HH:mm").format("h:mm A")}{" "}
                    </div>
                    <div>{p.body}</div>
                    <div className=" text-sm flex justify-end -mb-4">
                      {" "}
                      - {p.author}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
