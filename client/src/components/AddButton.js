import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Event";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

const AddButton = props => {
  const { classes, add, color, onClick } = props;
  return (
    <div>
      <Fab
        color={color}
        aria-label="Add"
        className={classes.fab}
        onClick={onClick}
      >
        {add ? <AddIcon /> : <EditIcon />}
      </Fab>
    </div>
  );
};

AddButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddButton);
