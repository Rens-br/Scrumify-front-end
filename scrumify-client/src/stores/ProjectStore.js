import { observable, action } from 'mobx'

class ProjectStore{
    //All values that are stored in the project store
    @observable
    id = 0;
    @observable
    name = "";
    @observable
    companyId = 0;
    @observable
    users = [];
    @observable
    sprints = [];
    @observable
    workItems = [];

    //All actions that are used to modify the store

    //Loads a new project into the store
    @action
    loadProjectIntoStore = (data) => {
        this.id = data.id;
        this.name = data.name;
        this.companyId = data.companyId;
        this.users = data.users;
        this.sprints = data.sprints;
        this.workItems = data.workItems;
    }

    //Updates the currently loaded project 
    @action
    updateStore = (data) => {
        //TODO: Recieve data from socket and update store
        throw "Not implemented";
    }

    @action
    getProject = (projectId) => {
        //TODO: Request project from socket using provided projectId
        throw "Not implemented";
    }

    @action
    getWorkItem = (workItemId) => {
        //TODO: Request workItem from socket using provided workItemId
        throw "Not implemented";
    }

    @action
    addSprint = (title) => {
        //TODO: Send add sprint to socket using provided sprint title
        throw "Not implemented";
    }

    @action
    addLane = (name) => {
        //TODO: Send add lane to socket using provided lane name
        throw "Not implemented";
    }

    @action
    addWorkItem = (workItem) => {
        //TODO: Send add workItem to socket using provided workItem object
        throw "Not implemented";
    }

    @action
    updateSprintTitle = (sprintId, title) => {
        //TODO: Send update sprint to socket using provided sprintId and title
        throw "Not implemented";
    }

    @action
    updateLaneName = (laneId, name) => {
        //TODO: Send update lane to socket using provided laneId and name
        throw "Not implemented";
    }

    @action
    updateWorkItem = (workItemId, workItem) => {
        //TODO: Send update workItem to socket using provided workItemId and workItem object
        throw "Not implemented";
    }

    @action
    removeSprint = (sprintId) => {
        //TODO: Send remove sprint to socket using provided sprintId
        throw "Not implemented";
    }

    @action
    removeLane = (laneId) => {
        //TODO: Send remove lane to socket using provided laneId
        throw "Not implemented";
    }

    @action
    removeWorkItem = (workItemId) => {
        //TODO: Send remove workItem to socket using provided workItemId
        throw "Not implemented";
    }
}

const projectStore = new ProjectStore();

export default projectStore;