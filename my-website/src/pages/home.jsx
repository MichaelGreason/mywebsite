import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import axios from "axios";

export default function Home() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/images")
      .then((response) => {
        console.log(response);
        setImages(response.data[0].image);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (images)
    return (
      <>
        <div>
          <div className="flex w-3/5 font-serif ml-10 mt-10 text-3xl">
            <div>
              Hello, welcome to the beautiful website made by, and for, Michael
              Greason. Michael Greason is a Software Developer, Audio Engineer,
              Musician, Server, and lover of all things. Feel free to navigate
              the site using the "Go To" menu at the top right, enjoy!
            </div>
          </div>
          <div>{images && <img src={images} alt="image" />}</div>
        </div>
      </>
    );
}
