import {action, decorate, observable} from 'mobx'

class ProjectStore{
    //All values that are stored in the project store
    projectId = undefined;
    projectName = "";
    companyId = 0;
    users = {};
    sprints = {};
    workItems = [];

    rootStore = null;

    constructor(root){
        this.rootStore = root;
    }

    //All actions that are used to modify the store

    //Loads a new project into the store
    loadProjectIntoStore = (data) => {
        this.projectId = data.projectId;
        this.projectName = data.projectName;
        this.companyId = data.companyId;
        this.projectUsers = data.projectUsers;
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
                if(foundWorkItem){
                    tempWorkItems[tempWorkItems.indexOf(foundWorkItem)] = {...foundWorkItem, ...response.data};
                } else{
                    tempWorkItems.push(response.data);
                }
                    this.workItems = tempWorkItems;
                break;

            case 'removeWorkItem':
                this.workItems = this.workItems.filter(wi => wi.workItemId !== response.data.workItemId);
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
                this.sprints = this.sprints.filter(sp => sp.sprintId !== response.data.sprintId);
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
        if(projectId === this.projectId) return;
        this.rootStore.socketStore.getProject(projectId)
    };

    
    getWorkItem = (workItemId) => {
        this.rootStore.socketStore.getWorkItem(this.projectId, workItemId);
    };

    
    addSprint = (title) => {
        this.rootStore.socketStore.createSprint(this.projectId, title);
    };

    
    addProject = (title, organizationId) => {
        this.rootStore.socketStore.createProject(this.projectId, title, organizationId);
    };


    addLane = (sprintId, title) => {
        this.rootStore.socketStore.createLane(this.projectId, sprintId, title);
    };


    addWorkItem = (laneId, workItem) => {
        this.rootStore.socketStore.addWorkItem(this.projectId, laneId, workItem);
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
        console.log(workItem)
        this.rootStore.socketStore.updateWorkItem(this.projectId, workItemId, workItem);
    };
    
    removeSprint = (sprintId) => {
        this.rootStore.socketStore.removeSprint(this.projectId, sprintId);
    };
    
    removeLane = (laneId) => {
        this.rootStore.socketStore.removeLane(this.projectId, laneId);
    };
  };

  getProject = projectId => {
    this.rootStore.socketStore.getProject(projectId);
  };

  getWorkItem = workItemId => {
    this.rootStore.socketStore.getWorkItem(this.projectId, workItemId);
  };

  addSprint = title => {
    this.rootStore.socketStore.createSprint(this.projectId, title);
  };

  addProject = (title, organizationId) => {
    this.rootStore.socketStore.createProject(
      this.projectId,
      title,
      organizationId
    );
  };

  addLane = (sprintId, title) => {
    this.rootStore.socketStore.createLane(this.projectId, sprintId, title);
  };

  addWorkItem = (laneId, workItem) => {
    this.rootStore.socketStore.addWorkItem(this.projectId, laneId, workItem);
  };

  updateSprintTitle = (sprintId, title) => {
    this.sprints.find(x => x.sprintId === sprintId).sprintTitle = title;
    this.rootStore.socketStore.updateSprint(this.projectId, sprintId, title);
  };

  updateLaneName = (sprintId, laneId, title) => {
    this.sprints
      .find(x => x.sprintId === sprintId)
      .Lanes.find(x => x.laneId === laneId).laneTitle = title;
    this.rootStore.socketStore.updateLane(this.projectId, laneId, title);
  };

  updateWorkItem = (workItemId, workItem) => {
    let oldItem = this.workItems.find(x => x.workItemId === workItemId);
    this.workItems[this.workItems.indexOf(oldItem)] = {
      ...oldItem,
      ...workItem
    };
    console.log(workItem);
    this.rootStore.socketStore.updateWorkItem(
      this.projectId,
      workItemId,
      workItem
    );
  };

  removeSprint = sprintId => {
    this.rootStore.socketStore.removeSprint(this.projectId, sprintId);
  };

  removeLane = laneId => {
    this.rootStore.socketStore.removeLane(this.projectId, laneId);
  };

  removeWorkItem = workItemId => {
    this.rootStore.socketStore.removeWorkItem(this.projectId, workItemId);
  };
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
  removeWorkItem: action
});

export default ProjectStore;
