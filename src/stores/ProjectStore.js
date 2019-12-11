import {action, decorate, observable} from 'mobx'
import SocketStore from './SocketStore';

class ProjectStore{
    //All values that are stored in the project store
    projectId = undefined;
    projectName = "";
    companyId = 0;
    users = {};
    sprints = {};
    workItems = {};

    rootStore = null;

    constructor(root){
        this.rootStore = root;
    }

    //All actions that are used to modify the store

    //Loads a new project into the store
    loadProjectIntoStore = (data) => {
        console.log(data)
        this.projectId = data.projectId;
        this.projectName = data.projectName;
        this.companyId = data.companyId;
        this.users = data.users;
        this.sprints = data.sprints;
        this.workItems = data.workItems;
    };

    //Updates the currently loaded project 
    updateStore = (response) => {
        let foundSprint;
        let foundWorkItem;

        switch (response.type) {
            case 'updateProject':
                this.projectName = response.data.projectName;
                break;

            case 'updateWorkItem':
                const tempWorkItems = this.workItems;
                foundWorkItem = tempWorkItems.find(wi => wi.workItemId === response.data.workItemId);
                if(foundWorkItem)
                    tempWorkItems[tempWorkItems.indexOf(foundWorkItem)] = response.data;
                else
                    tempWorkItems.push(response.data);
                    this.sprints = tempWorkItems;
                break;

            case 'removeWorkItem':
                this.workItems = this.sprints.filter(wi => wi.workItemId !== response.data.projectId);
                break;

            case 'updateSprint':
                const tempArray = this.sprints;
                foundSprint = tempArray.find(sp => sp.sprintId === response.data.sprintId);
                if(foundSprint)
                    tempArray[tempArray.indexOf(foundSprint)] = {...foundSprint, ...response.data};
                else
                    tempArray.push(response.data);

                    this.sprints = tempArray;
                break;

            case 'removeSprint':
                this.sprints = this.sprints.filter(sp => sp.sprintId !== response.data.projectId);
                break;

            case 'updateLane':
                foundSprint = this.sprints.find(sp => sp.sprintId === response.sprintId);
                if (foundSprint){ 
                    const tempArray = foundSprint.Lanes;
                    const foundLane = tempArray.find(ln => ln.laneId === response.data.laneId);
                    if(foundLane)
                        tempArray[tempArray.indexOf(foundLane)] = response.data;
                    else
                        tempArray.push(response.data);

                    this.sprints[this.sprints.indexOf(foundSprint)].Lanes = tempArray;
                }
                else{
                    throw Error("Sprint not found")
                }
                break;

            case 'removeLane':
                foundSprint = this.sprints.find(sp => sp.sprintId === response.sprintId);
                if (foundSprint){ 
                    this.sprints[this.sprints.indexOf(foundSprint)].Lanes = foundSprint.Lanes.filter(ln => ln.laneId !== response.data.laneId);
                }
                break;
        
            default:
                    throw Error("Response type not found")
        }
    };

    
    getProject = (projectId) => {
        this.rootStore.socketStore.getProject(projectId)
    };

    
    getWorkItem = (workItemId) => {
        //TODO: Request workItem from socket using provided workItemId
        throw Error("Not implemented");
    };

    
    addSprint = (title) => {
        this.rootStore.socketStore.createSprint(this.projectId, title);
    };

    
    addLane = (sprintId, title) => {
        this.rootStore.socketStore.createLane(this.projectId, sprintId, title)
    };


    addWorkItem = (workItem) => {
        //TODO: Send add workItem to socket using provided workItem object
        throw Error(Error("Not implemented"));
    };

    
    updateSprintTitle = (sprintId, title) => {
        this.sprints.find(x => x.sprintId === sprintId).sprintTitle = title;
        this.rootStore.socketStore.updateSprint(this.projectId, sprintId, title)
    };

    
    updateLaneName = (sprintId, laneId, title) => {
        this.sprints.find(x => x.sprintId === sprintId).Lanes.find(x => x.laneId === laneId).laneTitle = title;
        this.rootStore.socketStore.updateLane(this.projectId, laneId, title)
    };

    
    updateWorkItem = (workItemId, workItem) => {
        let oldItem = this.workItems.find(x => x.workItemId === workItemId);
        this.workItems[this.workItems.indexOf(oldItem)] = {...oldItem, ...workItem};
        //TODO: Send update workItem to socket using provided workItemId and workItem object
    };

    
    removeSprint = (sprintId) => {
        //TODO: Send remove sprint to socket using provided sprintId
        throw Error("Not implemented");
    };

    
    removeLane = (laneId) => {
        //TODO: Send remove lane to socket using provided laneId
        throw Error("Not implemented");
    };

    
    removeWorkItem = (workItemId) => {
        //TODO: Send remove workItem to socket using provided workItemId
        throw Error("Not implemented");
    }
}

decorate(ProjectStore, {
    projectId: observable,
    projectName: observable,
    companyId: observable,
    users: observable,
    sprints: observable,
    workItems: observable,
    loadProjectIntoStore: action,
    updateStore: action,
    getProject: action,
    getWorkItem: action,
    addSprint: action,
    addLane: action,
    addWorkItem: action,
    updateSprintTitle: action,
    updateLaneName: action,
    updateWorkItem: action,
    removeSprint: action,
    removeLane: action,
    removeWorkItem: action,
});

export default ProjectStore;