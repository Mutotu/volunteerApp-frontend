import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navSchools = () => {
    return navigate("/schools");
  };

  const navVolunteerLogging = () => {
    return navigate("/volunteer");
  };


  return (
    <div className="home-container">
      <div className="volunteers">
        <div onClick={navSchools} className="volunteer-children">
          <div>Find Volunteer Opportunites</div>
        </div>
        <div onClick={navVolunteerLogging}className="volunteer-children">Log Volunteer hours</div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
