import PropTypes from "prop-types";

const FunctionalComponent = (props) => {
  return (
    <div>
      <div>
        <h2>Bio</h2>
        <p>name:{props.name}</p>
        <p>Dob:{props.dob}</p>
        <p>Email-id:{props.email}</p>
        <p>PhNum:{props.phnum}</p>
      </div>
    </div>
  );
};

FunctionalComponent.propTypes = {
  name: PropTypes.string,
  dob: PropTypes.string,
  email: PropTypes.string,
  phnum: PropTypes.number,
};

FunctionalComponent.defaultProps = {
  name: "vihal Vemula",
  dob: "12-feb-1999",
  email: "vihal@gmail.com",
  phnum: 1234567891,
};

export default FunctionalComponent;
