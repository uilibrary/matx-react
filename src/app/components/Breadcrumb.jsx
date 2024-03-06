import { NavLink } from "react-router-dom";
import { Breadcrumbs, styled } from "@mui/material";
import { Home, NavigateNext } from "@mui/icons-material";

// STYLED COMPONENTS
const BreadcrumbRoot = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
});

const BreadcrumbName = styled("h4")(({ theme }) => ({
  margin: 0,
  fontSize: "16px",
  paddingBottom: "1px",
  verticalAlign: "middle",
  textTransform: "capitalize",
  [theme.breakpoints.down("xs")]: { display: "none" }
}));

const SubName = styled("span")(({ theme }) => ({
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

const Separator = styled("h4")(({ theme }) => ({
  margin: 0,
  marginLeft: 8,
  paddingBottom: "3px",
  color: theme.palette.text.hint,
  [theme.breakpoints.down("xs")]: { display: "none" }
}));

const StyledIcon = styled(Home)({
  marginLeft: 8,
  marginBottom: "4px",
  verticalAlign: "middle"
});

export default function Breadcrumb({ routeSegments }) {
  return (
    <BreadcrumbRoot>
      {routeSegments ? (
        <>
          <BreadcrumbName>{routeSegments[routeSegments.length - 1]["name"]}</BreadcrumbName>
          <Separator>|</Separator>
        </>
      ) : null}

      <Breadcrumbs
        separator={<NavigateNext sx={{ color: "text.hint" }} />}
        sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <NavLink to="/">
          <StyledIcon color="primary" />
        </NavLink>

        {routeSegments
          ? routeSegments.map((route, index) => {
              return index !== routeSegments.length - 1 ? (
                <NavLink key={index} to={route.path}>
                  <SubName>{route.name}</SubName>
                </NavLink>
              ) : (
                <SubName key={index}>{route.name}</SubName>
              );
            })
          : null}
      </Breadcrumbs>
    </BreadcrumbRoot>
  );
}
