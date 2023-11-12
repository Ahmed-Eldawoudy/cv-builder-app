/* eslint-disable react/prop-types */
//
export default function CvPreview({ personalInfo, educationList }) {
  //
  //
  //
  return (
    <>
      <div className="space-y-4 rounded-lg bg-white p-4 text-cyan-950 md:sticky md:top-0">
        {/* Personal Info. */}
        <section className="space-y-2">
          <h1 className="text-xl font-bold sm:text-3xl">
            {personalInfo.name === "" ? "Name" : personalInfo.name}
          </h1>
          <h2 className="text-lg font-bold italic sm:text-xl ">
            {personalInfo.jobTitle === "" ? "Job Title" : personalInfo.jobTitle}
          </h2>
          <div className="flex flex-wrap items-center justify-around text-xs sm:text-lg">
            <p className="flex items-center gap-1">
              <a href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone === ""
                  ? "Phone Number"
                  : personalInfo.phone}
              </a>
            </p>
            <p className="flex items-center gap-1">
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email === "" ? "Email" : personalInfo.email}
              </a>
            </p>
            <p className="flex items-center gap-1">
              {personalInfo.address === "" ? "Address" : personalInfo.address}
            </p>
          </div>
        </section>
        <hr />
        {/* Career Objective */}
        <section className="space-y-2">
          <h2 className="text-base font-bold italic underline sm:text-lg">
            Career Objective
          </h2>
          <p className="text-justify text-sm font-semibold sm:text-base">
            {personalInfo.careerObjective === ""
              ? "Your Career Objective."
              : personalInfo.careerObjective}
          </p>
        </section>
        {/* Education */}
        <section className="space-y-2">
          <h2 className="text-base font-bold italic underline sm:text-lg">
            Education
          </h2>
          <ul className=" ml-4 list-disc text-sm font-semibold sm:text-base">
            {educationList.map((edu) => (
              <li key={edu.id}>
                <p>{edu.degree}</p>
                <p className="text-sm">
                  {edu.university}
                  <span>, {edu.year}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
