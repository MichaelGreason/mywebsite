import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import axios from "axios";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Home() {
  const [images, setImages] = useState(null);

  return (
    <>
      <div className="">
        <div className="flex w-3/5 font-serif ml-10 mt-10 text-3xl">
          <div>
            Hello, welcome to this beautiful website made by and for, Michael
            Greason. Michael Greason is a Software Developer, Audio Engineer,
            Musician, Server, and lover of all things. Feel free to navigate the
            site using the "Go To" menu at the top right, enjoy!
          </div>
        </div>
        <div
          className="relative -top-40 w-48 h-48 bg-yellow-100 rounded-full transform rotate-45 overflow-hidden"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            zIndex: "-1",
          }}
        />
        {/* <div className="flex ml-4">
          Scroll photos <ArrowRightAltIcon />
        </div> */}
        <div className=" h-screen flex overflow-scroll">
          <img
            src="https://michael-greasons-1st-bucket.s3.us-east-2.amazonaws.com/my-website-assets/tsa+coleman+memorial+%40saucewithspoons-30.JPG"
            className=" rounded-full ml-4 h-1/3 "
            alt="image"
          />
          {/* <img
            src="/src/assets/images/headshot 4.jpeg"
            className=" rounded-full -ml-10 h-1/3"
            alt="image"
          /> */}
          <img
            src="https://michael-greasons-1st-bucket.s3.us-east-2.amazonaws.com/my-website-assets/promo3.JPEG"
            className=" rounded-full -ml-10 h-1/3"
            alt="image"
          />
          <img
            src="https://michael-greasons-1st-bucket.s3.us-east-2.amazonaws.com/my-website-assets/mgandiwedding.JPG"
            className=" rounded-full -ml-10 h-1/3"
            alt="image"
          />
          <img
            src="https://michael-greasons-1st-bucket.s3.us-east-2.amazonaws.com/my-website-assets/tsapromomilestone1.jpg"
            className=" rounded-full -ml-10 h-1/3"
            alt="image"
          />
          <img
            src="https://michael-greasons-1st-bucket.s3.us-east-2.amazonaws.com/my-website-assets/mgandi.jpg"
            className=" rounded-full -ml-10 h-1/3"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
