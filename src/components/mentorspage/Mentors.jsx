import { useState } from "react";
import "./mentors.css";
import Mentorscard from "./Mentorscard";
import Mentordetails from "./Mentordetails";

const Mentors = () => {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return <Mentordetails handleClick={()=>(setShowDetails(false))} />;
  }
  return (
    <div className="ui raised segment ">
      <div className="ui inverted segment teal">
        <h1 className="ui header bold">Find Mentors and Connect</h1>
        <h3 className="ui text">
          We have sorted these search results based on your profile. If you see
          someone who looks like a good fit for you, reach out and send a
          message!
        </h3>
      </div>
      <div className="ui large fluid icon input">
        <input type="search" placeholder="Search for mentors........." />
        <i className="circular search link icon"></i>
      </div>
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
      <div className="ui four doubling stackable cards segment">
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
        <Mentorscard handleClick={() => setShowDetails(true)} />
      </div>
    </div>
  );
};

export default Mentors;
