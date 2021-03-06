import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import '../UserManagement/UserManagement.css';

import EnhancedTable from "./UserTable"

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function UserManagement(props) {
  const { classes } = props;
  return (
    
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary" className="card-header">
            <h4 className={classes.cardTitleWhite}>User Management</h4>
          </CardHeader>
          <CardBody>
            <EnhancedTable/>
          </CardBody>
        </Card>
      </GridItem>
   
  );
}

export default withStyles(styles)(AgentManagement);
