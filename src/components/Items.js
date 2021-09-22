import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div>
      <Link
        to={{
          pathname: `/info/${props.id}`,
          state: {
            name: props.name,
            email: props.email,
            phnum: props.phone,
          },
        }}
      >
        <h1>{props.name}</h1>
      </Link>
    </div>
  );
};

export default Items;
