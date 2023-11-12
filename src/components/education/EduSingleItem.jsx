import { useState } from "react";
//
//
export default function EduSingleItem({ onDeletEdu, onEduEdite, edu }) {
  //
  //
  const [isEditing, setIsEditing] = useState(false);
  //
  let eduItem;
  if (isEditing === false) {
    eduItem = (
      <div className="mb-2 space-y-1" key={edu.id}>
        <p className="text-xl font-bold">
          {edu.degree}, {edu.year}...
        </p>
        <div className="space-x-3">
          <button
            className="rounded-md bg-green-700 p-1 text-xs duration-150 active:bg-green-500"
            onClick={() => setIsEditing(true)}
          >
            Edite
          </button>
          <button
            className="rounded-md bg-red-700 p-1 text-xs active:bg-red-500"
            onClick={() => onDeletEdu(edu.id)}
          >
            Delete
          </button>
        </div>
        <hr />
      </div>
    );
    return eduItem;
    //
  } else {
    eduItem = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(false);
        }}
        className="space-y-3"
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
              onEduEdite({
                ...edu,
                degree: e.target.value,
              });
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
              onEduEdite({
                ...edu,
                university: e.target.value,
              });
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
              onEduEdite({
                ...edu,
                year: e.target.value,
              });
            }}
            className="w-full rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          />
        </fieldset>
        {/* Save Button */}
        <input
          type="submit"
          value="Save"
          className="cursor-pointer rounded-md bg-green-950 p-2 text-lg font-bold duration-150 hover:bg-green-500"
        />
        <hr />
      </form>
    );
    return eduItem;
  }
}
