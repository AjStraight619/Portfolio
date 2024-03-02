import { experiencesData } from "@/lib/data";
import { Separator } from "./separator";

const VerticalTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="timeline-container">
        {experiencesData.map((experience, index) => (
          <div key={index} className="grid grid-cols-3 items-center gap-4">
            {index % 2 !== 0 && (
              <div className="col-span-1 text-right pr-4">
                <h3>{experience.title}</h3>
                <p>{experience.location}</p>
                <p>{experience.description}</p>
                <p>{experience.date}</p>
              </div>
            )}

            <div className="col-span-1">
              <Separator orientation="vertical" />
            </div>

            {index % 2 === 0 && (
              <div className="col-span-1 pl-4">
                <h3>{experience.title}</h3>
                <p>{experience.location}</p>
                <p>{experience.description}</p>
                <p>{experience.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
