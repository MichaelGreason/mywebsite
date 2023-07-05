import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const phoneNumber = "919-500-9582";
  const email = "mgreason18@gmail.com";
  const gitHub = "https://github.com/MichaelGreason";
  const linkedIn = "https://www.linkedin.com/in/michaelgreason/";

  return (
    <>
      <div>
        <div className="text-center font-serif text-6xl mt-10">
          Contact <br />
          Michael Greason
        </div>
        <div className="flex flex-col text-center mt-20">
          <div className="mb-2">
            <PhoneIcon /> &nbsp;{" "}
            <a href={`tel: ${phoneNumber}`} className=" text-blue-700">
              {phoneNumber}
            </a>
          </div>
          <div className="mb-2">
            <EmailIcon /> &nbsp;{" "}
            <a href={`mailto: ${email}`} className=" text-blue-700">
              {email}
            </a>
          </div>
          <div className="mb-2">
            <GitHubIcon /> &nbsp;{" "}
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-700"
            >
              {gitHub}
            </a>
          </div>
          <div>
            <LinkedInIcon /> &nbsp;{" "}
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-700"
            >
              {linkedIn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
