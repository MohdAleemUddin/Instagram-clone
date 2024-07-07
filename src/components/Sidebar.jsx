import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../assets/constents";

const Sidebar = () => {
  return (
    <Box position={"sticky"} bg={"black"} h={"full"} w={"full"}>
      <Flex direction={"column"}>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={3}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>
      <Flex direction={"column"}>
        
      </Flex>
    </Box>
  );
};

export default Sidebar;
