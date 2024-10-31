// import loadable from "@loadable/component";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";

// import { SEO } from "../components/seo";
import { Layout } from "../components/layout";
// import { Headline } from "../components/headlines/headline";
// import { NationalMap } from "../components/map/national-map";
import { globalTheme } from "../styles/global-material";
import { Box } from "@mui/material";
// import { JailSection } from "../components/sections/index/jail";

//Load these async
// const GenderSection = loadable(() =>
//   import("../components/sections/index/gender")
// );
// const StatesIncarcerationSection = loadable(() =>
//   import("../components/sections/index/states-incarceration")
// );
// const RaceIncarcerationSection = loadable(() =>
//   import("../components/sections/index/race-incarceration")
// );
// const RaceUrbanicitySection = loadable(() =>
//   import("../components/sections/index/race-urbanicity")
// );
// const StatesCountyTableSection = loadable(
//   () => import("../components/sections/index/states-county-table"),
//   {
//     resolveComponent: (components) => components.StatesCountyTableSection,
//   }
// );

const IndexPage = () => {
  // const classes = useStyles();
  // const data: DeepNonNullable<
  //   DeepRequired<IndexPageQueryQuery>
  // > = useStaticQuery(graphql`
  //   query IndexPageQuery {
  //     #NOTE unused example of how we'd extract year from files, but now we get the years separately
  //     #mapJailAdmissionYears: allFile(
  //     #  filter: {
  //     #    sourceInstanceName: { eq: "data" }
  //     #    relativeDirectory: { eq: "map-jail-admissions" }
  //     #  }
  //     #) {
  //     #  edges {
  //     #    node {
  //     #      name
  //     #    }
  //     #  }
  //     #}
  //   }
  // `)

  //NOTE unused, get years from files returned from graphql
  // const mapJailAdmissionYears = useMemo(
  //   () => staticDataService.parseYearFromFileName(data.mapJailAdmissionYears),
  //   [data]
  // )

  return (
    <>
      <ThemeProvider theme={globalTheme}>
        {/* <SEO
          title="Incarceration Trends | Vera Institute of Justice"
          description="Incarceration trends for all states and counties since 1970: Examine jail and prison populations, incarceration rates, and racial disparities."
        /> */}
        <Layout>
          <>
            <Box
              sx={{
                display: "grid",
                justifyItems: "center",
                rowGap: "16px",
                width: "80%",
                margin: "0 auto",
                //TODO
                // [theme.breakpoints.down("md")]: {
                //   width: "100%",
                // },
              }}
            >
              {/* <Headline /> */}
              {/* <NationalMap />  */}
              <br />
              <br />
              <br />
              <br />
            </Box>
            {/* <div className={classes.chartSectionRoot}>
            <JailSection></JailSection>
          </div>
          <br />
          <br />
          <div className={classes.chartSectionRoot}>
            <StatesIncarcerationSection />
          </div>
          <br />
          <br />
          <div className={classes.chartSectionRoot}>
            <GenderSection />
          </div>
          <br />
          <br />
          <div className={classes.chartSectionRoot}>
            <RaceIncarcerationSection />
          </div>
          <br />
          <br />
          <div className={classes.chartSectionRoot}>
            <RaceUrbanicitySection />
          </div>
          <br />
          <br />
          <div className={classes.chartSectionRoot}>
            <StatesCountyTableSection />
          </div> */}
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
};

// export const useStyles = makeStyles(
//   (theme) => ({
//     headlineSectionRoot: {
//       display: "grid",
//       justifyItems: "center",
//       rowGap: "16px",
//       width: "80%",
//       margin: "0 auto",
//       [theme.breakpoints.down("md")]: {
//         width: "100%",
//       },
//     },
//     chartSectionRoot: {
//       display: "grid",
//       justifyItems: "center",
//       rowGap: "16px",
//     },
//   }),
//   {
//     defaultTheme: globalTheme,
//   }
// );
export default IndexPage;
