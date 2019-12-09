import {action, decorate, observable} from 'mobx';

const testUser = {
    userId: 420,
    name: 'Kaulo Rens',
    email: 'kaulorens@shemail.com',
    projects: [{
        projectId: 123456789,
        projectName: 'Rens de schuld geven van alle problemen in de wereld',
    },{
        projectId: 69,
        projectName: 'Het goedmaken met Rens omdat ie me low-key wel hard carryt',
    },{
        projectId: 1234,
        projectName: 'RIP JUICE WRLD',
    },{
        projectId: 4321,
        projectName: 'KUT NS',
    },{
        projectId: 5678,
        projectName: 'i need professional help',
    },{
        projectId: 8765,
        projectName: 'get me outta here',
    },{
        projectId: 1010,
        projectName: 'nog meer testprojecten',
    },{
        projectId: 1221,
        projectName: 'I have no clue what im doing',
    }]
}

class UserStore{
    //Values stored in user store
    userId = 0;
    name = "";
    email = "";
    projects = [];

    constructor() {
        this.updateStore({ type: "updateUser", id: testUser.userId, data: testUser })
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

export default new UserStore();