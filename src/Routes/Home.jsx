import { useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleStudentsClick = () => {
    navigate("/student");
  };

  return (
    <Box>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
      Welcome to Student Portal
    </h1>
    <Button
      data-testid="student-btn"
      colorScheme="blue"
      size="lg"
      onClick={handleStudentsClick}
    >
      View All Students
    </Button>
    <Footer />
  </Box>
);
};

export default Home;
