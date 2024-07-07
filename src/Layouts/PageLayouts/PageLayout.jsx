import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "../../components/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  return (
    <>
      <Flex>
        {/* left hand-side */}
        {pathname !== "/auth" ? (
          <Box
            w={{ base: "70px", md: "270px" }}
            borderRight={"1px solid grey"}
            height={"100vh"}
          >
            <Sidebar />
          </Box>
        ) : null}

        {/* right hand-side */}
        <Box flex={1}>{children}</Box>
      </Flex>
    </>
  );
};

export default PageLayout;
