import React from "react";

// import { Header } from "../header";
// import { Footer } from "../footer";
// import { BreadCrumbs } from "../breadcrumbs/breadcrumbs";
// import { globalTheme } from "../../styles/global-material";
import { Box } from "@mui/material";
import { Header } from "./header";

interface Props {
  children: React.ReactNode;
}

/**
 * Renders the Layout component which aids in consistency and de-duplication
 * across the site.
 */
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: "grid",
          justifyItems: "center",
          //   [theme.breakpoints.down("md")]: {
          //     // margin: "0px 10px",
          //     maxWidth: "100vw",
          //     width: "100vw",
          //   },
        }}
      >
        <Box
          sx={{
            maxWidth: "1520px",
            width: "100vw",
          }}
        >
          {children}
        </Box>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};
