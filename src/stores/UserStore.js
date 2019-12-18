import {action, decorate, observable} from 'mobx';
import { Redirect } from 'react-router-dom';

class UserStore{
    loggedIn = false;
    loginMessage = '';

    //Values stored in user store
    userId = 0;
    name = "";
    email = "";
    projects = [];
    organizations = [];
    currentOrganization = 1;

    rootStore = null;

    constructor(root) {
        this.rootStore = root;
    }

    updateStore = (response) => {
        switch(response.type){
            case 'authenticateUser':
                this.loggedIn = response.data.succes;
                this.loginMessage = response.data.message;

                if(response.data.userId !== undefined){
                    this.userId = response.data.userId;
                    this.rootStore.socketStore.getUser(this.userId);
                }

                break;
            case 'updateUser': 
                this.userId = response.data.userId;
                this.name = response.data.name;
                this.email = response.data.email;
                this.projects = response.data.projects;
                this.organizations = response.data.organizations;
                break;
            case 'updateProject':
                let foundProject = this.projects.find(proj => proj.projectId === response.projectId);
                if(foundProject)
                    this.projects[this.projects.indexOf(foundProject)] = {...foundProject, ...response.data};
                else
                    this.projects.push(response.data);
                break;
            case 'removeProject':
                this.projects = this.projects.filter(pr => pr.projectId !== response.id);
                break;
            default: throw Error("Response type not found ;)");
        }
    };

    setLoginWarning = (msg) => {
        this.loginMessage = msg;
    };

    updateUser = (user) => {
        //TODO: Write function to update user/profile information.
        throw Error('Not implemented!');
    };

    leaveProject = (projectId) => {
        //TODO: Write function to leave a project.
        throw Error('Not implemented!');
    }

    setCurrentOrganization = (id) => {
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
});

export default UserStore;