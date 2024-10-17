import { useId } from "react";
import { useDispatch } from "react-redux";

import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const findPersonId = useId();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <label htmlFor={findPersonId}>Find contacts by name</label>
      <input
        type="text"
        id={findPersonId}
        onChange={handleChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
