import React, { Component, FunctionComponent } from "react";
import classes from "./Layout.scss";

// console.log(classes);

import Aux from "../Auxiliary/Auxiliary";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Lay from "../lay/lay";

class Layout extends Component<{}, FunctionComponent> {
  render() {
    return (
      <Aux>
        <div className={classes["background"]}></div>
        <div className={classes["layout__container"]}>
          <div className={classes["layout__navigation"]}>
            <Navigation />
            {/* <Lay /> */}
          </div>

          <main className={classes["layout__content"]}>
            {this.props.children}
          </main>

          <div className={classes["layout__footer"]}>
            <Footer />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Layout;

//"@teamsupercell/typings-for-css-modules-loader": "^2.4.0"
