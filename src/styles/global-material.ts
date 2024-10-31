import { createTheme, Theme } from "@mui/material/styles";
import { colors, typography } from "../design";

// export type UConnGlobalTheme = typeof globalTheme

export const globalTheme: Theme = createTheme({
  // status: {
  //   danger: orange[500],
  // },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          ...typography.body02,
          border: `1px solid ${colors.veraGray4}`,
          textTransform: "capitalize",
          padding: "12px",
          margin: "12px",
          color: colors.veraGray4,
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...typography.body02,
          border: `1px solid ${colors.veraGray4}`,
          textTransform: "capitalize",
          padding: "12px",
          margin: "12px",
          color: colors.veraGray4,
          borderRadius: 0,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        groupedHorizontal: {
          "&:not(:first-child)": {
            borderLeft: `1px solid ${colors.veraGray4}`,
          },
        },
      },
    },
  },
});
