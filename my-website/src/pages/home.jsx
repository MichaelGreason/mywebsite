import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen">
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={100}
              className=""
              size=""
            ></TextField>
          </Box>
        </div>
      </div>
    </>
  );
}
