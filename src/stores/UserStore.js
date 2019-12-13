import {action, decorate, observable} from 'mobx';

class UserStore{
    //Values stored in user store
    userId = 0;
    name = "";
    email = "";
    projects = [];

    rootStore = null;

    constructor(root) {
        this.rootStore = root;
    }
    updateStore = (response) => {
        //TODO: write function to update user store.

        switch(response.type){
            case 'updateUser': 
                this.userId = response.data.userId;
                this.name = response.data.name;
                this.email = response.data.email;
                this.projects = response.data.projects;
                break;
            case 'updateProject':
                let foundProject = this.projects.find(proj => proj.projectId === response.id);
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
    }

    updateUser = (user) => {
        //TODO: Write function to update user/profile information.
        throw Error('Not implemented!');
    } 

    leaveProject = (projectId) => {
        //TODO: Write function to leave a project.
        throw Error('Not implemented!');
    }
}

decorate(UserStore, {
    userId: observable,
    name: observable,
    email: observable,
    projects: observable,
    updateStore: action,
    updateUser: action,
    leaveProject: action,
});

export default UserStore;