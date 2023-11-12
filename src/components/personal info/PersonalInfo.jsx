/* eslint-disable react/prop-types */
import Accordion from "../accordion/Accordion";
//
//
export default function PersonalInfo({ personalInfo, onPersonalInfoChange }) {
  //
  //
  return (
    <Accordion title="Personal Information" opened={true}>
      <form className="space-y-3 rounded-lg py-4">
        {/* Full Name */}
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="full-name" className="text-lg font-semibold">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Ex: Gertrude James Holmes"
            value={personalInfo.name}
            id="full-name"
            onChange={(e) =>
              onPersonalInfoChange({ ...personalInfo, name: e.target.value })
            }
            className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          />
        </fieldset>
        {/* Job Title */}
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="job-title" className="text-lg font-semibold">
            Job Title
          </label>
          <input
            type="text"
            placeholder="Ex: Web Developer"
            value={personalInfo.jobTitle}
            id="job-title"
            onChange={(e) =>
              onPersonalInfoChange({
                ...personalInfo,
                jobTitle: e.target.value,
              })
            }
            className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          />
        </fieldset>
        {/* Adress */}
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="address" className="text-lg font-semibold">
            Address
          </label>
          <input
            type="text"
            placeholder="Ex: Cairo, Egypt"
            value={personalInfo.address}
            id="address"
            onChange={(e) =>
              onPersonalInfoChange({ ...personalInfo, address: e.target.value })
            }
            className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          />
        </fieldset>
        {/* Phone */}
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Ex: +201023456789"
            value={personalInfo.phone}
            id="phone"
            onChange={(e) =>
              onPersonalInfoChange({ ...personalInfo, phone: e.target.value })
            }
            className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          />
        </fieldset>
        {/* Email */}
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Ex: nostooku@goc.cv"
            value={personalInfo.email}
            id="email"
            onChange={(e) =>
              onPersonalInfoChange({ ...personalInfo, email: e.target.value })
            }
            className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          />
        </fieldset>
        {/* Carerr Objective */}
        <fieldset className="flex flex-col space-y-1">
          <label htmlFor="career-objective" className="text-lg font-semibold">
            Career Objective
          </label>
          <textarea
            id="career-objective"
            value={personalInfo.careerObjective}
            onChange={(e) =>
              onPersonalInfoChange({
                ...personalInfo,
                careerObjective: e.target.value,
              })
            }
            placeholder="Ex: Seeking an entry-level position to begin my career in a high-level professional environment."
            className="rounded-md p-2 font-semibold text-cyan-950 duration-150 placeholder:text-sm placeholder:text-cyan-600 placeholder:opacity-40 hover:bg-cyan-100 focus:outline focus:outline-cyan-400"
          ></textarea>
        </fieldset>
      </form>
    </Accordion>
  );
}

// {/* Full Name */}
// <fieldset>
// <label>Full Name</label>
// <input type="text" value="" placeholder="Ex: Ahmed Abdo Mohamed" />
// </fieldset>
// {/* Job Title */}
// <fieldset>
// <label>Job Title</label>
// <input type="text" value="" placeholder="Ex: Mechanical Engineer" />
// </fieldset>
// {/* Adress */}
// <fieldset>
// <label>Adress</label>
// <input type="text" value="" placeholder="Ex: Cairo, Egypt" />
// </fieldset>
// {/* Phone Number */}
// <fieldset>
// <label>Phone Number</label>
// <input type="tel" value="" placeholder="Ex: +201023456789" />
// </fieldset>
// {/* Email */}
// <fieldset>
// <label>Email</label>
// <input type="email" value="" placeholder="Ex: Ahmed123@gmail.com" />
// </fieldset>
