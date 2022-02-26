import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">PaySe</Link>
      </Heading>
      <p>
        <Link href="/dashboard">&nbsp; &nbsp; &nbsp; Dashboard</Link>
      </p>
      <div>
        <Link href="/listofbank">&nbsp; &nbsp; &nbsp; List of Bank</Link>
      </div>
      &nbsp; &nbsp; &nbsp;
      <div>
        <Link href="/bills"> Bills</Link>
      </div>
      <Box marginLeft="auto">
        <Button>Logout</Button>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;

// import { Box, Flex, Heading } from "@chakra-ui/react";
// import Link from "next/link";
// import { Button } from "@chakra-ui/react";
// import { useContext } from "react";
// import { AuthContext } from "../../auth/AuthContext";

// import ThemeToggle from "./ThemeToggle";

// const Header = () => {
//   const { logout } = useContext(AuthContext);
//   return (
//     <Flex as="header" width="full" align="center">
//       <Heading as="h1" size="md">
//         <Link href="/">PaySe</Link>
//       </Heading>

//       <Box marginLeft="auto">
//       <Button onClick={logout}>Logout</Button>
//         <ThemeToggle />
//       </Box>
//     </Flex>
//   );
// };

// export default Header;
