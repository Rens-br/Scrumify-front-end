import { action, decorate, observable } from "mobx";

class UserStore {
  //User registration
  registered = false;
  registerMessage = "";

  //User login
  loggedIn = false;
  loginMessage = "";

  //Values stored in user store
  userId = 0;
  name = "";
  email = "";
  projects = [];
  workItems = [];
  organizations = [];
  currentOrganization = undefined;

  rootStore = null;

  constructor(root) {
    this.rootStore = root;
  }

  updateStore = response => {
    switch (response.type) {
      case "authenticateUser":
        this.loggedIn = response.data.succes;
        this.loginMessage = response.data.message;

        if (response.data.userId !== undefined) {
          this.userId = response.data.userId;
          this.rootStore.socketStore.getUser(this.userId);
        }

        break;
      case "userRegistration":
        this.registered = response.data.succes;
        this.registerMessage = response.data.message;
        alert(response.data.message);
        break;
      case "updateUser":
        this.userId = response.data.userId;
        this.name = response.data.name;
        this.email = response.data.email;
        this.projects = response.data.projects;
        this.organizations = response.data.organizations;
        this.workItems = response.data.workitems;
        break;
      case "updateProject":
        let foundProject = this.projects.find(
          proj => proj.projectId === response.projectId
        );
        if (foundProject)
          this.projects[this.projects.indexOf(foundProject)] = {
            ...foundProject,
            ...response.data
          };
        else this.projects.push(response.data);
        break;
      case "removeProject":
        this.projects = this.projects.filter(
          pr => pr.projectId !== response.id
        );
        break;
      default:
        throw Error("Response type not found ;)");
    }
  };

  setLoginWarning = msg => {
    this.loginMessage = msg;
  };

  updateUser = user => {
    //TODO: Write function to update user/profile information.
    throw Error("Not implemented!");
  };

  leaveProject = projectId => {
    //TODO: Write function to leave a project.
    throw Error("Not implemented!");
  };

  setCurrentOrganization = id => {
    this.currentOrganization = id;
    console.log(id);
  };
}

decorate(UserStore, {
  userId: observable,
  name: observable,
  email: observable,
  projects: observable,
  organizations: observable,
  currentOrganization: observable,
  loggedIn: observable,
  loginMessage: observable,
  updateStore: action,
  updateUser: action,
  leaveProject: action,
  workItems: observable
});

export default UserStore;
