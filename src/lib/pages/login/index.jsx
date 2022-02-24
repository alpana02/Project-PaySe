import { useContext } from "react";
import { Box, HStack, Button } from "@chakra-ui/react";
import { AuthContext } from "../../auth/AuthContext";

function Authentication() {
  const { login, logout } = useContext(AuthContext);
  return (
    <Box>
      <HStack>
        <Button onClick={login}>Login</Button>
        <Button onClick={logout}>Logout</Button>
      </HStack>
    </Box>
  );
}

export default Authentication;
