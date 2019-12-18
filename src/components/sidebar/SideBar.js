import React from "react";
import NavButton from "./NavButton";
import Divider from "./Divider";
import "../../css/bootstrap.min.css";
import "./SideBar.css";
import Header from "./Header";
import ProjectList from "./ProjectList";
import SmallSideBar from "./SmallSideBar";
import { inject, observer } from "mobx-react";

const SideBar = inject("store")(
  observer(
    class SideBar extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isDesktop: true
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
      }

      componentDidMount() {
        if (window.innerWidth < 1450) {
          this.setState({ isDesktop: false });
          document.getElementById("sidebarContainer").style.flex = "50px 0 0";
        }
      }

      toggleSidebar() {
        if (this.state.isDesktop) {
          this.setState({
            isDesktop: false
          });
          document.getElementById("sidebarContainer").style.flex = "50px 0 0";
        } else {
          this.setState({
            isDesktop: true
          });
          document.getElementById("sidebarContainer").style.flex = "240px 0 0";
        }
      }

      changeCurrentScreen() {
        this.props.store.clientStore.setCurrentScreen(0);
      }

      render() {
        const isDesktop = this.state.isDesktop;
        return (
          <div id="sidebarContainer" style={{ flex: "240px 0 0" }}>
            {isDesktop && (
              <div id="sidebar">
                <div className="topbar">
                  <Header />
                  <Divider />

                  <NavButton
                    icon="dashboard"
                    label="Dashboard"
                    path="/newpage"
                    onClick={() => {
                      this.changeCurrentScreen();
                    }}
                  />
                  <Divider />
                </div>
                <div className="bottombar">
                  <ProjectList />
                </div>
                <div className="footer">
                  <Divider />
                  <NavButton icon="tune" label="Settings" />
                  <Divider />
                  <NavButton
                    style={{ fontSize: "40px" }}
                    icon="navigate_before"
                    label="Minimize sidebar"
                    onClick={this.toggleSidebar}
                  />
                </div>
              </div>
            )}
            {!isDesktop && <SmallSideBar onClick={this.toggleSidebar} />}
          </div>
        );
      }
    }
  )
);

export default SideBar;
