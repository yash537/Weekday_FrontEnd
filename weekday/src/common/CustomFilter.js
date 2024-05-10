import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../common/CustomFilter.css";

const CustomerFilter = ({ filter, handleChange, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilter = (selectedOptions) => {
    handleChange(selectedOptions, placeholder);
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
