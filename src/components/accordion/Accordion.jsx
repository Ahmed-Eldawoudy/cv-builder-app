/* eslint-disable react/prop-types */
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//
//
export default function Accordion(props) {
  //
  // Accordion State
  const [accordionIsActive, setAccordionIsActive] = useState(props.opened);
  function handleAccordion() {
    setAccordionIsActive(!accordionIsActive);
  }
  //
  //
  return (
    <div className="rounded-lg bg-cyan-800 p-4">
      <div className="accordion-item">
        <div
          className="flex cursor-pointer select-none items-center justify-between text-2xl font-bold"
          onClick={handleAccordion}
        >
          <div>{props.title}</div>
          {accordionIsActive ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </div>
        {accordionIsActive && props.children}
      </div>
    </div>
  );
}
