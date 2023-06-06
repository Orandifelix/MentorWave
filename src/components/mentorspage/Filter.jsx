import React from "react";

const Filter = () => {
  return (
    <div className="ui segment">
      <h2>Filter Mentors By:</h2>
      <div className="flex container">
        <label htmlFor="expertise" className="ui header">
          Expertise:
        </label>
        <select
          name="expertise"
          id="select"
          multiple=""
          className="ui select dropdown custom-select">
          <option value="" hidden>
            {" "}
            Select
          </option>
          <option value="" className="ui button">
            All
          </option>
          <option value="accounting" className="ui button">
            Accounting and Finance
          </option>
          <option value="data-science" className="ui button">
            Data Science
          </option>
          <option value="software" className="ui button">
            Software Engineering
          </option>
          <option value="sales" className="ui button">
            Sales
          </option>
          <option value="startup" className="ui button">
            StartUp
          </option>
        </select>
        <label htmlFor="industry" className="ui header">
          Industry:
        </label>
        <select
          name="industry"
          id="select"
          multiple=""
          className="ui select dropdown custom-select">
          <option value="" hidden>
            {" "}
            Select
          </option>
          <option value="" className="ui button">
            All
          </option>
          <option value="accounting" className="ui button">
            Accounting/Tax services
          </option>
          <option value="data-science" className="ui button">
            Data Science
          </option>
          <option value="software" className="ui button">
            Computer services/information technology
          </option>
          <option value="sales" className="ui button">
            Business consulting/coaching
          </option>
          <option value="startup" className="ui button">
            Digital marketing/e-commerce
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
