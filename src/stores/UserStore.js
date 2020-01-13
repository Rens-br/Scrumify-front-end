import {action, decorate, observable, toJS} from "mobx";

class UserStore {
  //User registration
  registered = false;
  registerMessage = "";

  //User login
  loggedIn = false;
  loginCode = 0;
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

    console.log(toJS(response));

    switch (response.type) {
      case "authenticateUser":
        this.loggedIn = response.data.succes;
        this.loginMessage = response.data.message;
        this.loginCode = response.data.code;

        console.log(response.data.code)

        if(response.data.code === 7 || response.data.code === 5){
          this.rootStore.clientStore.stopLoading();
        }

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
        if(response.data.organizations !== undefined || response.data.organizations.length !== 0) this.rootStore.clientStore.stopLoading();

        this.currentOrganization = response.data.organizations  !== undefined && response.data.organizations.length !== 0 ? response.data.organizations[0].id : undefined;
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
