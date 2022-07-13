import {Link as ReactRouterLink} from "react-router-dom";
import {styled} from "@mui/material";

const StyledLink = styled(ReactRouterLink)(() => ({
    textDecoration:"none",
    fontWeight: "bold"
  }));

export default function Link({to,children}) {
    return <StyledLink to={to}>{children}</StyledLink>
}