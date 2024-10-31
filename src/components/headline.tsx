// import React from "react";
// import { graphql, StaticQuery, useStaticQuery } from "gatsby";
// import { createStyles, makeStyles } from "@mui/material/styles";

// import { typography } from "../design/typography";
// import { colors } from "../design/colors";
// import { globalTheme } from "../styles/global-material";

// export function Headline() {
//   //   const allIndexDataJson = {
//   //     nodes: [
//   //       {
//   //         parent: { modifiedTime: "today" },
//   //         primaryHeadline: "big headline",
//   //         primaryStat: "stat1",
//   //         secondaryHeadline: "headline2",
//   //         bodyText: "body Text",
//   //         tertiaryHeadline: "3rd headline",
//   //       },
//   //     ],
//   //   };

//   //   = useStaticQuery(graphql`
//   //     query headlineQuery {
//   //       allIndexDataJson {
//   //         nodes {
//   //           primaryHeadline
//   //           primaryStat
//   //           secondaryHeadline
//   //           bodyText
//   //           tertiaryHeadline {
//   //             primaryText
//   //             primaryStat
//   //             secondaryText
//   //             secondaryStat
//   //             tertiaryText
//   //           }
//   //           parent {
//   //             ... on File {
//   //               modifiedTime(formatString: "LLL z")
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `)

//   return (
//     <div className={classes.rootHeadline}>
//       <div className={classes.topContainer}>
//         <div className={classes.primaryHeadline}>{primaryHeadline}</div>
//         <div className={classes.primaryStat}>{primaryStat}</div>
//         <div className={classes.secondaryHeadline}>{secondaryHeadline}</div>
//       </div>
//       <div>
//         <span className={classes.tertiaryText}>
//           {tertiaryHeadline.primaryText}
//         </span>
//         <span className={classes.tertiaryStats}>
//           {tertiaryHeadline.primaryStat}
//         </span>
//         <span className={classes.tertiaryText}>
//           {tertiaryHeadline.secondaryText}
//         </span>
//         <span className={classes.tertiaryStats}>
//           {tertiaryHeadline.secondaryStat}
//         </span>
//         <span className={classes.tertiaryText}>
//           {tertiaryHeadline.tertiaryText}
//         </span>
//       </div>
//       <div>
//         <span className={classes.updatedPrimaryText}>Updated: </span>
//         <span className={classes.updatedSecondaryText}>{modifiedTime}</span>
//       </div>
//       <VerticalActionBar />
//       <div className={classes.bodyText}>{bodyText}</div>
//     </div>
//   );
// }

// const useStyles = makeStyles(
//   (theme) =>
//     createStyles({
//       rootHeadline: {
//         display: "grid",
//         justifyItems: "center",
//         textAlign: "center",
//         padding: "60px 0 20px 0",
//         rowGap: "20px",
//         [theme.breakpoints.down("md")]: {
//           padding: "40px 0px 10px 0px",
//           margin: "0px 10px !important",
//           rowGap: "16px",
//           maxWidth: "100vw !important",
//         },
//       },
//       topContainer: {
//         display: "grid",
//         justifyItems: "center",
//       },
//       primaryHeadline: {
//         ...typography.heading02,
//         color: colors.veraGray4,
//         [theme.breakpoints.down("md")]: {
//           ...typography.heading04,
//         },
//       },
//       primaryStat: {
//         ...typography.heading01,
//         color: colors.veraRed,
//         [theme.breakpoints.down("md")]: {
//           ...typography.heading03,
//         },
//       },
//       secondaryHeadline: {
//         ...typography.heading02,
//         color: colors.veraGray4,
//         [theme.breakpoints.down("md")]: {
//           ...typography.heading04,
//         },
//       },
//       tertiaryText: {
//         ...typography.heading05,
//         color: colors.veraGray4,
//         [theme.breakpoints.down("md")]: {
//           ...typography.heading06,
//         },
//       },
//       tertiaryStats: {
//         ...typography.heading05,
//         color: colors.veraRed,
//         [theme.breakpoints.down("md")]: {
//           ...typography.heading06,
//         },
//       },
//       updatedPrimaryText: {
//         ...typography.heading08,
//         color: colors.veraGray4,
//       },
//       updatedSecondaryText: {
//         ...typography.heading08,
//         color: colors.veraGray3,
//       },
//       bodyText: {
//         ...typography.body01,
//         color: colors.veraGray4,
//         maxWidth: "40%",
//         textAlign: "center",
//         [theme.breakpoints.down("md")]: {
//           maxWidth: "100%",
//         },
//       },
//     }),
//   {
//     defaultTheme: globalTheme,
//   }
// );
