
const Filter = ({
  selectedExpertise,
  selectedIndustry,
  expertiseSort,
  industrySort,
}) => {
  return (
    <div className="ui segment">
      <h2>Filter Mentors By:</h2>
      <div className="flex container">
        <label htmlFor="expertise" className="ui header">
          <br/>
          Expertise:
        </label>
        <select
          name="expertise"
          value={selectedExpertise}
          onChange={(e) => expertiseSort(e.target.value)}
          className="ui select dropdown custom-select">
          <option value="" hidden>
            {" "}
            Select
          </option>
          <option value="All" className="ui button">
            All
          </option>
          <option value="accounting" className="ui button">
            Accounting and Finance
          </option>
          <option value="data science" className="ui button">
            Data Science
          </option>
          <option value="software engineering" className="ui button">
            Software Engineering
          </option>
          <option value="sales" className="ui button">
            Sales
          </option>
          <option value="startup" className="ui button">
            Startup
          </option>
        </select>
        <label htmlFor="industry" className="ui header">
          Industry:
        </label>
        <select
          name="industry"
          value={selectedIndustry}
          onChange={(e) => industrySort(e.target.value)}
          className="ui select dropdown custom-select">
          <option value="" hidden>
            {" "}
            Select
          </option>
          <option value="All" className="ui button">
            All
          </option>
          <option value="accounting" className="ui button">
            Accounting/Tax services
          </option>
          <option value="Data Science" className="ui button">
            Data Science
          </option>
          <option value="Computer services" className="ui button">
            Computer services/information technology
          </option>
          <option value="Business consulting" className="ui button">
            Business consulting/coaching
          </option>
          <option value="Digital marketing" className="ui button">
            Digital marketing/e-commerce
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
