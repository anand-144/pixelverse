import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function TooltipProvider({ children }) {
  return (
    <>
      {children}
      <Tooltip id="global-tooltip" />
    </>
  );
}

export default TooltipProvider;
