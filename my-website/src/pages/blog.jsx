import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Blog() {
  function handlePost() {}
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
