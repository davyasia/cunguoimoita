import React from 'react';
import { Grid, Button }  from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Images } from "../../common";
import * as Styles from "./styles";

const NavbarComponent = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container justifyContent="space-between" alignItems="center" css={Styles.containerStyle}> 
      <Grid item>
        <img src={Images.Logo} alt="Logo"/>
      </Grid>
      <Grid item>
        {false && downSm && ( // Todo: Will implement menu later
          <Button css={Styles.menuButtonStyle}>
            <MenuIcon />
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export const Navbar = React.memo(NavbarComponent);
