import { observable, action, decorate } from "mobx";

export const Screens = {
  DASHBOARD: 0,
  SPRINTS: 1,
  BACKLOG: 2,
  SETTINGS: 3
};

class ClientStore {
  isLoading = true;

  isWorkItemOpen = false;
  currentWorkItem = 789123;
  currentProjectIndex = undefined;
  currentScreen = 0;

  sidebarOpen = true;

  rootStore = null;

  constructor(root) {
    this.rootStore = root;
  }

  stopLoading = () => {
    this.isLoading = false;
  };

  setCurrentScreen = screen => {
    this.currentScreen = screen;
  };

  setCurrentProjectIndex = index => {
    this.currentProjectIndex = index;
  };

  openWorkItem = workItemId => {
    this.currentWorkItem = workItemId;
    this.rootStore.projectStore.getWorkItem(workItemId);
    this.isWorkItemOpen = true;
  };

  closeWorkItem = () => {
    this.isWorkItemOpen = false;
    this.currentWorkItem = undefined;
  };

  toggleSidebar = (bool) => {
    this.sidebarOpen = bool;
  }
}

decorate(ClientStore, {
  isLoading: observable,
  isWorkItemOpen: observable,
  sidebarOpen: observable,
  currentProjectIndex: observable,
  currentScreen: observable,
  setCurrentProjectIndex: action,
  setCurrentScreen: action,
  openWorkItem: action
});

export default ClientStore;
