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
                this.toggleSidebar = this.toggleSidebar.bind(this);
            }

            componentDidMount() {
                if (window.innerWidth < 1450) {
                    this.props.store.clientStore.toggleSidebar(false);
                }
            }

            toggleSidebar() {
                if (this.props.store.clientStore.sidebarOpen) {
                    this.props.store.clientStore.toggleSidebar(false);
                } else {
                    this.props.store.clientStore.toggleSidebar(true);
                }
            }

            render() {
                return (
                    <div id="sidebarContainer" style={{ flex: this.props.store.clientStore.sidebarOpen ? "240px 0 0" : "50px 0 0" }}>
                        {this.props.store.clientStore.sidebarOpen && (
                            <div id="sidebar">
                                <div className="topbar">
                                    <Header />
                                    <Divider />
                                    <NavButton
                                        icon="dashboard"
                                        label="Dashboard"
                                        path="/newpage"
                                        onClick={() => {
                                            this.props.store.clientStore.setCurrentScreen(0);
                                        }}
                                    />
                                    <Divider />
                                </div>
                                <div className="bottombar">
                                    {this.props.store.userStore.currentOrganization !==
                                    undefined && <ProjectList />}
                                </div>
                                <div className="footer">
                                    <Divider />
                                    {/*{this.props.store.userStore.currentOrganization !== undefined &&*/}
                                    <NavButton
                                        icon="tune"
                                        label="Settings"
                                        onClick={() => {
                                            this.props.store.clientStore.setCurrentScreen(3);
                                        }}
                                    />
                                    {/*}*/}
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
                        {!this.props.store.clientStore.sidebarOpen && <SmallSideBar onClick={this.toggleSidebar} />}
                    </div>
                );
            }
        }
    )
);

export default SideBar;
