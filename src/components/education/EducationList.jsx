/* eslint-disable react/prop-types */
import EduSingleItem from "./EduSingleItem";
//
//
//
export default function EducationList({
  educationList,
  onDeletEdu,
  onEduEdite,
}) {
  //
  //
  return (
    <div>
      {educationList.map((edu) => (
        <EduSingleItem
          key={edu.id}
          edu={edu}
          onDeletEdu={onDeletEdu}
          onEduEdite={onEduEdite}
        />
      ))}
    </div>
  );
}
