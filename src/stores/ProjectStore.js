import { observable, action, decorate } from 'mobx'

class ProjectStore{
    //All values that are stored in the project store
    id = 0;
    name = "";
    companyId = 0;
    users = {};
    sprints = {};
    workItems = {};

    //All actions that are used to modify the store

    //Loads a new project into the store
    loadProjectIntoStore = (data) => {
        this.id = data.id;
        this.name = data.name;
        this.companyId = data.companyId;
        this.users = data.users;
        this.sprints = data.sprints;
        this.workItems = data.workItems;
    }

    //Updates the currently loaded project 
    updateStore = (response) => {
        let foundSprint;

        switch (response.type) {
            case 'updateSprint':
                const tempArray = this.sprints;
                foundSprint = tempArray.find(sp => sp.sprintId === response.data.sprintId);
                if(foundSprint)
                    tempArray[tempArray.indexOf(foundSprint)] = response.data;
                else
                    tempArray.push(response.data)
                
                    this.sprints = tempArray;
                break;
            case 'removeSprint':
                this.sprints = this.sprints.filter(sp => sp.sprintId !== response.data.id);
                break;
            case 'updateLane':
                foundSprint = this.sprints.find(sp => sp.sprintId === response.id);
                if (foundSprint){ 
                    const tempArray = foundSprint.lanes;
                    const foundLane = tempArray.find(ln => ln.laneId === response.data.laneId);
                    if(foundLane)
                        tempArray[tempArray.indexOf(foundLane)] = response.data;
                    else
                        tempArray.push(response.data)

                    this.sprints[this.sprints.indexOf(foundSprint)].lanes = tempArray;
                }
                else{
                    throw Error("Sprint not found")
                }
                break;
            case 'removeLane':
                foundSprint = this.sprints.find(sp => sp.sprintId === response.id);
                if (foundSprint){ 
                    this.sprints[this.sprints.indexOf(foundSprint)].lanes = foundSprint.lanes.filter(ln => ln.laneId !== response.data.id);
                }
                break;
        
            default:
                    throw Error("Response type not found")
        }
    }

    
    getProject = (projectId) => {
        //TODO: Request project from socket using provided projectId
        throw Error("Not implemented");
    }

    
    getWorkItem = (workItemId) => {
        //TODO: Request workItem from socket using provided workItemId
        throw Error("Not implemented");
    }

    
    addSprint = (title) => {
        //TODO: Send add sprint to socket using provided sprint title
        throw Error("Not implemented");
    }

    
    addLane = (name) => {
        //TODO: Send add lane to socket using provided lane name
        throw Error("Not implemented");
    }

    
    addWorkItem = (workItem) => {
        //TODO: Send add workItem to socket using provided workItem object
        throw Error(Error("Not implemented"));
    }

    
    updateSprintTitle = (sprintId, title) => {
        //TODO: Send update sprint to socket using provided sprintId and title
        throw Error("Not implemented");
    }

    
    updateLaneName = (laneId, name) => {
        //TODO: Send update lane to socket using provided laneId and name
        throw Error("Not implemented");
    }

    
    updateWorkItem = (workItemId, workItem) => {
        //TODO: Send update workItem to socket using provided workItemId and workItem object
        throw Error("Not implemented");
    }

    
    removeSprint = (sprintId) => {
        //TODO: Send remove sprint to socket using provided sprintId
        throw Error("Not implemented");
    }

    
    removeLane = (laneId) => {
        //TODO: Send remove lane to socket using provided laneId
        throw Error("Not implemented");
    }

    
    removeWorkItem = (workItemId) => {
        //TODO: Send remove workItem to socket using provided workItemId
        throw Error("Not implemented");
    }
}

decorate(ProjectStore, {
    id: observable,
    name: observable,
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
})

export default new ProjectStore();;