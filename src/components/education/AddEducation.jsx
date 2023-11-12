/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//
//
const emptyEduObject = {
  id: uuidv4(),
  degree: "",
  university: "",
  year: "",
  gpa: "",
};
//
export default function AddEducation({ onEducationListChange, educationList }) {
  //
  const [edu, setEdu] = useState({
    id: uuidv4(),
    degree: "",
    university: "",
    year: "",
    gpa: "",
  });
  //
  function handleAddition() {
    onEducationListChange([...educationList, { ...edu }]);
    setEdu({ ...emptyEduObject });
  }
  //
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddition();
      }}
      className="space-y-3 rounded-md bg-cyan-900 p-3"
    >
      {/* Degree */}
      <fieldset className="flex flex-col space-y-1">
        <label htmlFor="degree" className="text-lg font-semibold">
          Degree
        </label>
        <input
          type="text"
          placeholder="Ex: Bachelor Degree In Engineering"
          id="degree"
          value={edu.degree}
          onChange={(e) => {
            setEdu({ ...edu, degree: e.target.value });
          }}
          className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
        />
      </fieldset>
      {/* University */}
      <fieldset className="flex flex-col space-y-1">
        <label htmlFor="university" className="text-lg font-semibold">
          University
        </label>
        <input
          type="text"
          placeholder="Ex: Cairo University"
          id="university"
          value={edu.university}
          onChange={(e) => {
            setEdu({ ...edu, university: e.target.value });
          }}
          className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
        />
      </fieldset>
      {/* Year & GPA */}
      <fieldset className="flex flex-col space-y-1">
        <label htmlFor="year" className="text-lg font-semibold">
          Year
        </label>
        <input
          type="text"
          placeholder="Ex: 2019"
          id="year"
          value={edu.year}
          onChange={(e) => {
            setEdu({ ...edu, year: e.target.value });
          }}
          className="w-full rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
        />
      </fieldset>
      <input
        type="submit"
        value="Add"
        className="w-full cursor-pointer rounded-md bg-cyan-950 p-2 text-lg font-bold duration-150 hover:bg-cyan-500"
      />
    </form>
  );
}
