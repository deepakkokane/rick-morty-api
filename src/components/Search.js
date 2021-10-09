import React, { useState } from "react";

const Search = ({ setSearch }) => {
  const [value, setvalue] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setvalue(e.target.value);
  };
  return (
    <div className="row pt-4">
      <div className="col-lg-6 offset-5">
        <form className="d-flex align-items-center">
          <div>
            <input
              type="text"
              value={value}
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-warning ms-1" onClick={onsubmit}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
