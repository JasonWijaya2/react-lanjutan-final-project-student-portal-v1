import { useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>404 | Not Found</h1>
      <Button onClick={handleGoBack} data-testid="back" colorScheme="red">
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
