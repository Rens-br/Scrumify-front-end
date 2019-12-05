import { observable, action, decorate } from 'mobx'

class ProjectStore{
    //All values that are stored in the project store
    id = 0;
    name = "";
    companyId = 0;
    users = {};
    sprints = {};
    workItems = {};

    constructor(){
        this.loadProjectIntoStore({
            id: 123456789,
            name: "TestProjectName",
            companyId: 123456,
            users: [{
                userId: 1234567,
                userName: "TestUserName1",
                userEmail: "testemail1@email.com"
            },
                {
                    userId: 12345678,
                    userName: "TestUserName2",
                    userEmail: "testemail2@email.com"
                }
            ],
            sprints: [{
                sprintId: 1234567891,
                sprintTitle: "testSprint1",
                lanes: [{
                    laneId: 23456,
                    laneTitle: "testLaneTitle1"
                },
                    {
                        laneId: 34567,
                        laneTitle: "testLaneTitle2"
                    }
                ]
            },
                {
                    sprintId: 456789,
                    sprintTitle: "testSprint2",
                    lanes: [{
                        laneId: 56789,
                        laneTitle: "testLaneTitle1"
                    },
                        {
                            laneId: 6789,
                            laneTitle: "testLaneTitle2"
                        }
                    ]
                }
            ],
            workItems: [{
                workItemId: 789123,
                workItemTitle: "TestWorkItem1",
                workItemDescription: "This is a workitem test.",
                laneId: 23456
            },
                {
                    workItemId: 891234,
                    workItemTitle: "TestWorkItem2",
                    workItemDescription: "This is another workitem test.",
                    laneId: 23456
                },
                {
                    workItemId: 89121234,
                    workItemTitle: "TestWorkItem2",
                    workItemDescription: "This is another workitem test.",
                    laneId: 34567
                }
            ]
        });
    }

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
        let foundWorkItem;

        switch (response.type) {
            case 'updateProject':
                this.name = response.data.name;
                break;

            case 'updateWorkItem':
                const tempWorkItems = this.workItems;
                foundWorkItem = tempWorkItems.find(wi => wi.workItemId === response.data.workItemId);
                if(foundWorkItem)
                    tempWorkItems[tempWorkItems.indexOf(foundWorkItem)] = response.data;
                else
                    tempWorkItems.push(response.data)                
                    this.sprints = tempWorkItems;
                break;

            case 'removeWorkItem':
                this.workItems = this.sprints.filter(wi => wi.workItemId !== response.data.id);
                break;

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