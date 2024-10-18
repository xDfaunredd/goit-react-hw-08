import { useDispatch } from "react-redux";

import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { TextField } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <TextField
        type="text"
        onChange={handleChange}
        id="standard-basic"
        label="Search your contact"
        variant="standard"
      />
    </div>
  );
};

export default SearchBox;
