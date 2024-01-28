import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
        }}
      >
        <li style={{ margin: "0 1rem" }}>
          <ChakraLink
            as={Link}
            to="/"
            data-testid="home-page"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Student Portal
          </ChakraLink>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <ChakraLink
            as={Link}
            to="/student"
            data-testid="student-page"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            All Students
          </ChakraLink>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <ChakraLink
            as={Link}
            to="/add"
            data-testid="add-page"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Add Student
          </ChakraLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
