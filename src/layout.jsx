import { Image, Box } from "@chakra-ui/react";
import image from "./assets/homepage.jpg";
import { GlobalNav } from "./pages/Header/GlobalNav";
import { Divider } from "primereact/divider";
export const Layout = () => {
  return (
    <>
      <GlobalNav />
      <Divider align="center">
        <span className="p-tag">{"Nest Navigate"}</span>
      </Divider>
      <Box>
        <Image src={image} sx={{ maxWidth: "300%" }} />
      </Box>
    </>
  );
};
