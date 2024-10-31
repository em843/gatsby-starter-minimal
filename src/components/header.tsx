import React from "react";
import { Link } from "gatsby";
// import Hidden from "@mui/material/core/Hidden";
// import MuiAppBar from "@mui/material/core/AppBar";
// import MuiToolbar from "@mui/material/core/Toolbar";
import { makeStyles } from "@mui/material/styles";

import { colors } from "../design/colors";
import { typography } from "../design/typography";
// import WhiteVeraLogo from "../static/vera-logo-white.svg";
import { colorTransition } from "../design/transitions";
// import { Geocoder } from "../geocoder/geocoder";
import { AppBar, Box, Hidden, Toolbar } from "@mui/material";

/**
 * Renders the Header component
 */
export const Header = () => {
  //   const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: `${colors.veraRed} !important`,
          display: "flex",
          alignItems: "center",
          "& .MuiToolbar-gutters": {
            padding: {
              lg: "0 80px 0 80px",
              md: "0 40px 0 40px",
              sm: "0 20px 0 20px",
            },
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "1520px",
            width: "90%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <a href="https://www.vera.org/" data-testid="header.logo">
              {/* <WhiteVeraLogo /> */}
            </a>

            <Hidden smDown>
              <Box
                component={Link}
                to="/"
                sx={{
                  color: colors.veraWhite,
                  textDecoration: "none",
                  transition: colorTransition,

                  "&:hover": {
                    color: colors.veraRed,
                  },
                }}
                data-testid="header.title"
              >
                <Box
                  sx={{
                    ...typography.heading06,
                    marginLeft: "1rem",
                  }}
                >
                  UConn App
                </Box>
              </Box>
            </Hidden>
          </Box>
          {/* <Box className={classes.actionGroup}><Geocoder /></Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
