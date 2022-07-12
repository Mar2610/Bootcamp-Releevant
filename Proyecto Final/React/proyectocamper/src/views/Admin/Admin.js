import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import BookList from "../../Components/List/BookList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [users, setUsers] = useState();

  const columns = [
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "surname", headerName: "Apellidos", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phoneNumber", headerName: "Teléfono", width: 130 },
    { field: "userName", headerName: "Nombre de usuario", width: 150 },
  ];

  useEffect(function () {
    async function getUsers() {
      const response = await fetch("http://localhost:3001/getUsers");
      const data = await response.json();

      setUsers(data);
    }
    getUsers();
  }, []);

  const rows = users?.map((user) => ({
    id: user.idUsers,
    widht: 150,
    name: user.name,
    surname: user.surname,
    phoneNumber: user.phoneNumber,
    email: user.email,
    userName: user.userName,
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "success", backgroundColor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Usuarios registrados" {...a11yProps(0)} />
          <Tab label="Listado de reservas" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
          <DataGrid
            rows={rows ?? []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            sx={{ height: 400, border: 1 }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <BookList/>
      </TabPanel>
    </Box>
  );
}
