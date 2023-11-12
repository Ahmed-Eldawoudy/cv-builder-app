/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Accordion from "../accordion/Accordion";
import AddEducation from "./AddEducation";
import EducationList from "./EducationList";

export default function Education({ onEducationListChange, educationList }) {
  //
  //xxxxxxxxx
  function handleDeleteEdu(eduId) {
    onEducationListChange(educationList.filter((edu) => edu.id !== eduId));
  }
  // editing
  function handleEduEdite(edu) {
    onEducationListChange(
      educationList.map((d) => {
        if (d.id === edu.id) {
          return edu;
        } else {
          return d;
        }
      }),
    );
  }
  //
  return (
    <Accordion title="Education" opened={false}>
      <div className="space-y-4 py-4">
        {/* Add New Degree */}
        <AddEducation
          onEducationListChange={onEducationListChange}
          educationList={educationList}
        />
        {/* Education List */}
        <EducationList
          educationList={educationList}
          onDeletEdu={handleDeleteEdu}
          onEduEdite={handleEduEdite}
        />
      </div>
    </Accordion>
  );
}
