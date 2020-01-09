import React from "react";
import "../css/bootstrap.min.css";
import "./TopNavBar.css";
import MaterialIcon from "@material/react-material-icon";
import "@material/react-material-icon/dist/material-icon.css";
import { NextHighlight } from "../ThemeProvider";
import CustomDropDown from "./CustomDropDown";
import { inject, observer } from "mobx-react";

const TopNavBar = inject('store')(observer(class TopNavBar extends React.Component{
  cycleColor(){
    NextHighlight();
  }

  logOut(){
    sessionStorage.setItem("sessionId", "");
    this.props.store.socketStore.disconnect();
    window.location.reload();
  }

      render() {
        return (
          <div className="TopNavBar">
            <CustomDropDown />
            <div className="profileButton">
              <div onClick={this.logOut.bind(this)} className="profileButton">
                <MaterialIcon
                  icon="exit_to_app"
                  style={{ fontSize: "40px" }}
                  className="profileIcon"
                />
              </div>
              <div onClick={NextHighlight} className="profileButton">
                <MaterialIcon
                  icon="color_lens"
                  style={{ fontSize: "40px" }}
                  className="profileIcon"
                />
              </div>
            </div>
<<<<<<< HEAD
            <div onClick={this.cycleColor} className="profileButton">
              <MaterialIcon icon="color_lens" style={{ fontSize: '40px' }} className="profileIcon"/>
            </div></div>
        </div>
    );
  }
}
));
=======
          </div>
        );
      }
    }
  )
);
>>>>>>> cbb43f150ce9bf6546a6d35cd9e737a772c93584

export default TopNavBar;
