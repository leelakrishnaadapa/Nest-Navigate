/* eslint-disable no-unused-vars */
import { Contact } from "./Contact";
import { Listings } from "./Listings";
import { Home } from "./Home";
import { Box } from "@chakra-ui/react";
import { useChakraStyleMerge } from "../../styleComponents/use-chakra-style-merge";
export const GlobalNav = () => {
  const chakraStyles = useChakraStyleMerge();
  return (
    <>
      <Box>
        <Home />
        <Listings />
        <Contact />
      </Box>
    </>
  );
};
