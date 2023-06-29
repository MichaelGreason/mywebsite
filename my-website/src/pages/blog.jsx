import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function Blog() {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/blog-post", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  });

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
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen">
          <TextField
            id="fullWidth"
            multiline
            rows={8}
            maxRows={100}
            className=" w-2/3"
          ></TextField>
        </div>
      </div>
    </>
  );
}
