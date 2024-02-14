import React from "react";

function SearchQuery(props) {
  return (
    <div className="SearchQuery" id="SearchQuery">
      <div className="SearchQuery__Block">
        <input
          name={props.name}
          autoComplete={props.autoComplete}
          value={props.value || ""}
          onChange={(e) => props.change_handler(e)}
          required
          className="SearchQuery__Input"
          type="text"
          placeholder="Фильм"
        />
        <button
          type="submit"
          className="SearchQuery__Button"
          onClick={props.subm_handle}
        >
          Найти
        </button>
      </div>
    </div>
  );
}

export default SearchQuery;
