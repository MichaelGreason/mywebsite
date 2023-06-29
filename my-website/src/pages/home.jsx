import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import axios from "axios";

export default function Home() {
  const [images, setImages] = useState(null);

  return (
    <>
      <div>
        <div className="flex w-3/5 font-serif ml-10 mt-10 text-3xl">
          <div>
            Hello, welcome to the beautiful website made by, and for, Michael
            Greason. Michael Greason is a Software Developer, Audio Engineer,
            Musician, Server, and lover of all things. Feel free to navigate the
            site using the "Go To" menu at the top right, enjoy!
          </div>
        </div>
        <div className=" w-2/5 ml-96 ">
          <img
            src="/src/assets/images/headshot 4.jpeg"
            className=" rounded-full"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
