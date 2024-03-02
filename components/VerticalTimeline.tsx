import { experiencesData } from "@/lib/data"; // Adjust the import path as necessary
import React from "react";
import { Separator } from "./separator"; // Adjust the import path as necessary

const VerticalTimeline = () => {
  return (
    <div className="grid grid-cols-3 gap-4 items-start justify-center">
      {experiencesData.map((experience, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 && (
            <div className="col-span-1 flex justify-end items-center">
              {/* Left side content here */}
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <span>{experience.date}</span>
              </div>
            </div>
          )}
          <div className="col-span-1 flex justify-center items-center">
            {/* Separator here */}
            <Separator orientation="vertical" />
          </div>
          {index % 2 !== 0 && (
            <div className="col-span-1 flex justify-start items-center">
              {/* Right side content here */}
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <span>{experience.date}</span>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default VerticalTimeline;
