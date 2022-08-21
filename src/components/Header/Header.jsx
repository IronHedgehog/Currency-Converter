import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Header({ UAH, EUR, USD }) {
  //   console.log(typeof UAH);
  //   console.log(typeof EUR);
  //   console.log(typeof USD);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            USD: {USD.toFixed(3)}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UAH: {UAH.toFixed(3)}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EUR: {EUR.toFixed(3)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  UAH: PropTypes.number.isRequired,
  EUR: PropTypes.number.isRequired,
  USD: PropTypes.number.isRequired,
};
