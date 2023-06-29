import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);

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

  // function handlePost() {
  //   axios.post("http://127.0.0.1:8000/blog-post", {
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   })
  //   .then(((response) => {
  //     console.log(response)
  //   }));
  // }

  if (posts) {
    return (
      <>
        <div>
          <div className="flex flex-col text-center my-2 justify-center items-center h-screen">
            {posts.map((p, index) => (
              <Card key={index} className="my-2 w-4/6">
                <CardContent>
                  <div className=" text-sm">
                    {p.created_at}
                    {p.time_created}
                  </div>
                  <div>{p.body}</div>
                </CardContent>
              </Card>
            ))}
            <TextField id="" multiline rows={8} className=" w-4/6"></TextField>
            <div>
              <Button variant="text">Post</Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
