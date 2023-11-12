import { useState } from "react";
import CvPreview from "./CvPreview";
import DataCollector from "./DataCollector";
import { v4 as uuidv4 } from "uuid";
import { usePDF } from "react-to-pdf";

export default function CvBuilder() {
  //
  //
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    careerObjective: "",
  });
  //
  const [educationList, setEducationList] = useState([
    {
      id: uuidv4(),
      degree: "Sally Carr",
      university: "capto@besav.tj",
      year: "50",
    },
    {
      id: uuidv4(),
      degree: "Cory Morris",
      university: "pelfezfek@wawa.ie",
      year: "33",
    },
  ]);
  //
  //
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf" });
  //
  return (
    // Not Responsive yet
    <main className="flex min-h-screen w-full flex-col gap-8 bg-cyan-950 p-8 font-mono text-cyan-50 lg:flex-row">
      {/* Data Collector Side */}
      <section className="w-full lg:w-1/3">
        <button
          className="mb-4 w-full rounded-lg bg-red-400 p-4 text-xl font-bold active:bg-red-300"
          onClick={() => toPDF()}
          type="button"
        >
          Save as PDF
        </button>
        <DataCollector
          personalInfo={personalInfo}
          onPersonalInfoChange={setPersonalInfo}
          educationList={educationList}
          onEducationListChange={setEducationList}
        />
      </section>
      {/* Cv Preview Side */}
      <section className="w-full lg:w-2/3" ref={targetRef}>
        <CvPreview personalInfo={personalInfo} educationList={educationList} />
      </section>
    </main>
  );
}
