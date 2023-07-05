import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Projects() {
  function goBash() {
    window.open("https://bash-events.netlify.app/");
  }

  function goBashGitHub() {
    window.open("https://github.com/MichaelGreason/potluck");
  }

  return (
    <>
      <div className="my-10 flex justify-center font-serif text-6xl">
        Projects
      </div>
      <div className=" flex justify-center">
        <Card className=" m-auto w-1/2 text-center my-10 border-2 border-black p-4">
          <div className=" font-serif text-2xl">Bash</div>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ objectFit: "contain", height: 500 }}
            image="/src/assets/images/bashimage.png"
          />
          <CardContent>
            <p>
              Bash is a modern and easy to use party planning application. Bash
              allows individuals to register for an account, create events,
              invite their friends (by public link, or by email), and plan
              collaboratively. Bash is future rich, including: Setting event
              details and time, automatic email invitations, interface with
              Spotify API to create collaborative playlists, request items to be
              brought to a party or event, reserve items as guests that you plan
              to bring. A user can also post updates or comments on events and
              duplicate old events. There is also a notification feature that
              notifies the user when changes to an event occur.{" "}
            </p>
          </CardContent>
          <CardActions className=" justify-around">
            <Button size="small" onClick={goBash}>
              Go to Bash
            </Button>
            <Button size="small" onClick={goBashGitHub}>
              GitHub
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
