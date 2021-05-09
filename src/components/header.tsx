import React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  useTheme,
  Grid,
} from "@material-ui/core";
import { GitHub, Home } from "@material-ui/icons";
import { IconButton as GatsbyIconButton } from "gatsby-material-ui-components";
import GithubCorner from "react-github-corner";

interface HeaderProps {
  siteMetadata: {
    title?: string;
    subtitle?: string;
    repo?: string;
  };
  pathname?: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const theme = useTheme();
  // console.log("path", props.pathname);
  return (
    <Box mx="auto" textAlign="center" my={4}>
      <GithubCorner
        href={props.siteMetadata.repo}
        bannerColor={theme.palette.success.main}
      />

      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            color="secondary"
            component={GatsbyLink}
            to="/"
            style={{ textDecoration: "none" }}
          >
            {props.siteMetadata.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary">
            {props.siteMetadata.subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
    //   <AppBar position="static" color="primary">
    //     <Toolbar>
    //       <Typography
    //         variant="h4"
    //         component={GatsbyLink}
    //         to="/"
    //         style={{ color: "inherit", textDecoration: "none" }}
    //       >
    //         {props.siteTitle}
    //       </Typography>
    //       <Box flexGrow={1} />

    //       {props.pathname && (
    //         <Tooltip title="Home">
    //           <GatsbyIconButton aria-label="admin" color="inherit" to="/">
    //             <Home />
    //           </GatsbyIconButton>
    //         </Tooltip>
    //       )}
    //       <Tooltip title="Github Repo">
    //         <IconButton
    //           color="inherit"
    //           aria-label="github"
    //           href={props.repo}
    //           target="blank"
    //           rel="noopener"
    //         >
    //           <GitHub />
    //         </IconButton>
    //       </Tooltip>
    //     </Toolbar>
    //   </AppBar>
  );
};

export default Header;
