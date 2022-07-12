import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "../../Components/Link";
import { useAuthContext } from "../../Contexts/LoginContext";
import LogoutIcon from '@mui/icons-material/Logout';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Logo4 from "../../Images/Logo4.png";

const pages = [
  { label: "Home", linkTo: "/" },
  { label: "Van", linkTo: "/vans" },
  { label: "Haz tu reserva", linkTo: "/booking" },
];
const settings = [
  { label: "Inicio de sesión", linkTo: "/login" },
  { label: "Mi perfil", linkTo: "/profile" },
  { label: "Regístrate", linkTo: "/form" },
];

export default function Navbar() {
  const { setAuth, auth } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const MY_AUTH_APP = "MY_AUTH_APP";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const logout = useCallback(
    function () {
      window.localStorage.removeItem(MY_AUTH_APP);
      setAuth(null);
      navigate("/");
    },
    [MY_AUTH_APP, navigate, setAuth]
  );

  const admin = () => {
    navigate("/admin");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex"},
              fontFamily: "monospace",
              fontWeight: 100,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img alt="logo" src={Logo4} height="50px" width="300px" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{color: "black"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem alignItem="center" key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.linkTo}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 1, color: "black", display: "block" }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img alt="logo" src={Logo4} width="80px" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.linkTo}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}    v
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr:2 }}>
                <Avatar alt="Remy Sharp" sx={{ bgcolor: "#fb8c00" }}></Avatar>
              </IconButton>
            </Tooltip>
            {auth && (
              <Tooltip title="Logout">
                <IconButton onClick={logout} sx={{ color: "black" }}>
                  <LogoutIcon sx={{mr: 1}} fontSize="large"></LogoutIcon>
                </IconButton>
              </Tooltip>
            )}
            {auth && auth.rol === 1 && (
              <Tooltip title="Admin">
                <IconButton onClick={admin} sx={{ color: "#66bb6a" }}>
                  <AdminPanelSettingsIcon fontSize="large"></AdminPanelSettingsIcon>
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                  <Link to={setting.linkTo}>
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                    <Typography sx={{color: "black"}} textAlign="center">{setting.label}</Typography>
                </MenuItem>
                  </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
