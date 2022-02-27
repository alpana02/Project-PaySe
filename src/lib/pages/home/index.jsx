import { Box } from "@chakra-ui/react";
import Login from "../login/index";

import SomeImage from "../../components/samples/SomeImage";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Login />
    </Box>
  );
};

export default Home;
