import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../common/CustomFilter.css";

const CustomerFilter = ({ filter, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilter = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div className="Custom-filter">
      <Select
        isMulti
        options={filter}
        value={selectedOptions}
        onChange={handleFilter}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomerFilter;
