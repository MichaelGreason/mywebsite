import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ body: "" });
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/blog-post", {
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
    axios
      .post("http://127.0.0.1:8000/blog-post", post, author, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setPosts([...posts, response.data]);
        setPost({ body: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  console.log(post);

  if (posts) {
    return (
      <>
        <div className=" my-8">
          <div>
            <div className=" text-center text-6xl font-serif">
              Visitors Blog
            </div>
            <div className="flex flex-col m-auto mt-10 text-center text-2xl font-serif w-4/12">
              Feel free to leave me a note! I'd love to hear constructive
              feedback, ideas for the site, or even just happy thoughts! Thank
              you for your time :)
            </div>
          </div>
          <div className="flex flex-col text-center my-2 justify-center items-center h-screen">
            {posts.map((p, index) => (
              <Card
                key={index}
                className="my-2 w-4/6 shadow-md shadow-black"
                variant="outlined"
              >
                <CardContent>
                  <div className=" text-sm">
                    {moment(p.created_at).format("MMMM Do, YYYY")}{" "}
                    <span> - </span>
                    {moment(p.time_created, "HH:mm").format("h:mm A")}{" "}
                  </div>
                  <div>{p.body}</div>
                </CardContent>
              </Card>
            ))}
            <div className="mt-4 w-8/12">
              <TextField
                id=""
                multiline
                rows={8}
                className="w-4/6"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
              ></TextField>
              <div>
                <TextField
                  id=""
                  variant="standard"
                  label="Author"
                  value={author.body}
                  onChange={(e) => setPost({ ...author, body: e.target.value })}
                ></TextField>
              </div>
              <div>
                <Button onClick={handlePost} variant="text">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
