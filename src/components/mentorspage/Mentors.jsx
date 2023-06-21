import { useState, useContext, useMemo } from "react";
import { AppContext } from "../../context/Context";
import "./mentors.css";
import Mentorscard from "./Mentorscard";
import Mentordetails from "./Mentordetails";
import Filter from "./Filter";


const Mentors = ({ handleLoginClick }) => {
  const { mentors } = useContext(AppContext);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const mentorsToDisplay = useMemo(() => {
    switch (true) {
      case search !== "" &&
        selectedIndustry === "All" &&
        selectedExpertise === "All":
        return mentors.filter((mentor) =>
          mentor.name.toLowerCase().includes(search.toLowerCase())
        );
      case selectedIndustry !== "All":
        return mentors.filter((mentor) =>
          mentor.industry.toLowerCase().includes(selectedIndustry.toLowerCase())
        );
      case selectedExpertise !== "All":
        return mentors.filter((mentor) =>
          mentor.expertise
            .toLowerCase()
            .includes(selectedExpertise.toLowerCase())
        );
      default:
        return mentors;
    }
  }, [mentors, search, selectedIndustry, selectedExpertise]);

  //function to display mentors profile on click
  if (selectedMentor) {
    return (
      <Mentordetails
        handleLoginClick={handleLoginClick}
        mentor={selectedMentor}
        key={selectedMentor.id}
        handleClick={() => setSelectedMentor(null)}
      />
    );
  }
  return (
    <div className="ui raised segment ">
      <div
        className="ui inverted segment"
        style={{ backgroundColor: "#16163F" }}>
        <h1 className="ui header bold">Find Mentors and Connect</h1>
        <h3 className="ui text">
          We have sorted these search results based on your profile. If you see
          someone who looks like a good fit for you, reach out and send a
          message!
        </h3>
      </div>
      <div className="ui large fluid icon input">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for mentors........."
        />
        <i
          className="circular search link icon"
          style={{ backgroundColor: "#16163F", color: "white" }}></i>
      </div>
      <Filter
        selectedExpertise={selectedExpertise}
        selectedIndustry={selectedIndustry}
        expertiseSort={setSelectedExpertise}
        industrySort={setSelectedIndustry}
      />
      <br></br>
      <div className="ui four doubling stackable cards segment">
        {mentorsToDisplay.length < 1 ? (
          <h1 className="ui red header">No mentors match your search</h1>
        ) : (
          mentorsToDisplay.map((mentor) => (
            <Mentorscard
              key={mentor.id}
              mentor={mentor}
              handleClick={() => setSelectedMentor(mentor)}
            />
          ))
        )}
      </div>
      <br></br>
    </div>
  );
};

export default Mentors;
