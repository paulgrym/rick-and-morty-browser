import { Loader } from "../Loader";
import { Error } from "../Error";

export const StatusChecker = ({ status, children }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loader />;

    case "error":
      return <Error />;

    case "success":
      return children;

    default:
      throw new Error("incorrect status");
  }
};
