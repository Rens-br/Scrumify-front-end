import { observable, action, decorate } from "mobx";

export const Screens = {
  DASHBOARD: 0,
  SPRINTS: 1,
  BACKLOG: 2
};

class ClientStore {
  isWorkItemOpen = false;
  currentWorkItem = 789123;
  currentProjectIndex = undefined;
  currentScreen = 0;

  rootStore = null;

  constructor(root) {
    this.rootStore = root;
  }

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
}

decorate(ClientStore, {
  isWorkItemOpen: observable,
  currentProjectIndex: observable,
  currentScreen: observable,
  setCurrentProjectIndex: action,
  setCurrentScreen: action,
  openWorkItem: action
});

export default ClientStore;
