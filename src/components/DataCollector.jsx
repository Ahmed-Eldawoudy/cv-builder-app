/* eslint-disable react/prop-types */
import PersonalInfo from "./personal info/PersonalInfo";
import Education from "./education/Education";

export default function DataCollector({
  personalInfo,
  onPersonalInfoChange,
  educationList,
  onEducationListChange,
}) {
  //
  //
  //
  return (
    <div className="space-y-4">
      {/* Personal Info. Section */}
      <section className="shadow-lg">
        <PersonalInfo
          personalInfo={personalInfo}
          onPersonalInfoChange={onPersonalInfoChange}
        />
      </section>
      {/* Education Section */}
      <section className="shadow-lg">
        <Education
          educationList={educationList}
          onEducationListChange={onEducationListChange}
        />
      </section>
    </div>
  );
}
