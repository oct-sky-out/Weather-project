import React from "react";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";

function OtherCity({ city, onRemove }) {
  const { cityName, id } = city;
  return (
    <div className="OtherCity">
      <Link to={`/${cityName}`} exact="true" className="city-link">
        {cityName}
      </Link>
      <VscTrash
        onClick={() => {
          onRemove(id);
        }}
      />
    </div>
  );
}

export default React.memo(OtherCity);
