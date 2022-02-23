import { Box } from "@chakra-ui/react";

import SomeImage from "../../components/samples/SomeImage";

const Dashboard = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeImage />
    </Box>
  );
};

export default Dashboard;
