import projectStore from './ProjectStore'

function getRandomId(){
    return parseInt(Math.random() * 10000)
}

it('loads data without crashing', () => {
    const testData = {
        id: getRandomId(),
        name: "TestProjectName",
        companyId: getRandomId(),
        users: [{
            userId: getRandomId(),
            userName: "TestUserName1",
            userEmail: "testemail1@email.com"
        },{
            userId: getRandomId(),
            userName: "TestUserName2",
            userEmail: "testemail2@email.com"
        }],
        sprints: [{
            sprintId: getRandomId(),
            sprintName: "testSprint1",
            lanes: [{
                laneId: getRandomId(),
                laneTitle: "testLaneTitle1"
            },{
                laneId: getRandomId(),
                laneTitle: "testLaneTitle2"
            }]
        },{
            sprintId: getRandomId(),
            sprintName: "testSprint2",
            lanes: [{
                laneId: getRandomId(),
                laneTitle: "testLaneTitle1"
            },{
                laneId: getRandomId(),
                laneTitle: "testLaneTitle2"
            }]
        }],
        workItems: [{
            workItemId: getRandomId(),
            workItemTitle: "TestWorkItem1",
            workItemDescription: "This is a workitem test.",

        },{
            workItemId: getRandomId(),
            workItemTitle: "TestWorkItem2",
            workItemDescription: "This is another workitem test.",

        }]
    }

    projectStore.loadProjectIntoStore(testData);
});
