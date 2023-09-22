// components/VerticalStepper.js

import React from "react";
import VerticalLine from "./VerticalLine";
import Step from "./Step";
// import "./VerticalStepper.css"; // Import your CSS for styling

function VerticalStepper() {
  return (
    <main className="">
      <Step
        left={"Hackathon Announcement"}
        leftt={
          " The getlinked tech hackathon 1.0 is formally announcedto the general public and teams begin to get ready to register "
        }
        right={"November 18, 2023"}
        top={"Hackathon Announcement"}
        rightt={""}
        num={"1"}
      />
      <Step
        leftt={""}
        left={"November 18, 2023"}
        date={"November 18, 2023"}
        right={"Teams Registration begins"}
        rightt={
          "Interested teams can now show their interest in thegetlinked tech hackathon 1.0 2023 by proceeding to register"
        }
        num={"2"}
      />
      <Step
        left={"Teams Registration ends"}
        leftt={"Interested Participants are no longer Allowed toregister"}
        right={"November 18, 2023"}
        top={"Teams Registration ends"}
        rightt={""}
        num={"3"}
      />
      <Step
        leftt={""}
        left={"November 18, 2023"}
        date={"November 18, 2023"}
        right={"Announcement of the accepted teams and ideas"}
        rightt={
          "All teams whom idea has been accepted into getlinked techhackathon 1.0 2023 are formally announced"
        }
        num={"4"}
      />
      <Step
        left={"Getlinked Hackathon 1.0 Offically Begins"}
        leftt={
          "Accepted teams can now proceed to build theirground breaking skill driven solutions"
        }
        right={"November 18, 2023"}
        top={"Getlinked Hackathon 1.0 Offically Begins"}
        rightt={""}
        num={"5"}
      />
      <Step
        leftt={""}
        left={"November 18, 2023"}
        date={"November 18, 2023"}
        right={"Demo Day"}
        rightt={
          "Teams get the opportunity to pitch their projects to judges.The winner of the hackathon will also be announced on this day"
        }
        num={"6"}
      />
    </main>
  );
}

export default VerticalStepper;
