import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import flag from "../asset/flag.svg";
import flag2 from "../asset/flag2.png";
import flag3 from "../asset/flag3.png";
import flag4 from "../asset/flag4.png";
import flag5 from "../asset/flag5.png";
import "./Selectlabels.css";

export default function SelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        style={{ height: "40px", border: "none", outline: "none" }}
      >
        <MenuItem
          value=""
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={flag} alt="flag" style={{ width: "20px" }}></img>
        </MenuItem>
        <MenuItem
          value={10}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={flag2} alt="flag" style={{ width: "20px" }}></img>
        </MenuItem>
        <MenuItem
          value={20}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={flag3} alt="flag" style={{ width: "20px" }}></img>
        </MenuItem>
        <MenuItem
          value={30}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={flag4} alt="flag" style={{ width: "20px" }}></img>
        </MenuItem>
        <MenuItem
          value={40}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={flag5} alt="flag" style={{ width: "20px" }}></img>
        </MenuItem>
      </Select>
    </div>

  );
}
