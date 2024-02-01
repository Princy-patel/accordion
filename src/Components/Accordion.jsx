import { useReducer } from "react";
import data from "../Data/data";

const reducer = function (state, action) {
  switch (action.type) {
    case "FIRSTACCORDION":
    case "SECONDACCODIAN":
    case "THIRDACCORDIAN":
      return state.map((item) => ({
        ...item,
        isOpen: item.type === action.type ? !item.isOpen : false,
      }));

    default:
      return state;
  }
};

function Accordion() {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <div className="accordion-container">
      {state.map((data) => (
        <div
          key={data.title}
          className={`accordion-item ${data.isOpen ? "active" : ""}`}
        >
          <h2
            onClick={() => dispatch({ type: `${data.type}` })}
            className="accordion-header"
          >
            {data.title}
          </h2>
          {data.isOpen && <p className="accordion-content">{data.info}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
