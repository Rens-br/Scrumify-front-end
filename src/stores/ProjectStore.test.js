import projectStore from "./ProjectStore";

//Test objects used when testing the project store
const testData = {
  projectId: 123456789,
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
};

const newSprint = {
  sprintId: 9861981,
  sprintTitle: "new sprint title"
};

const updatedSprint = {
  sprintId: 9861981,
  sprintTitle: "updated sprint title"
};

const newLane = {
  laneId: "567891",
  laneTitle: "new lane title"
};

const updatedLane = {
  laneId: "567891",
  laneTitle: "updated lane title"
};

const newWorkItem = {
  workItemId: 3216874,
  workItemTitle: "new work item",
  workItemDesc: "This is a workitem",
  workItemOwner: testData.users[0].userId,
  workItemCategory: 'Epic',
  workItemLane: testData.sprints[0].lanes[0].laneId,
  workItemStatus: 'todo',
  workItemStoryPoints: 10
};

const updatedWorkItem = {
  workItemId: 3216874,
  workItemTitle: "updated work item",
  workItemDesc: "This is an updated workitem",
  workItemOwner: testData.users[1].userId,
  workItemCategory: 'Task',
  workItemLane: testData.sprints[0].lanes[1].laneId,
  workItemStatus: 'done',
  workItemStoryPoints: 20
};

//Tests
it("loads data without crashing", () => {
  projectStore.loadProjectIntoStore(testData);
  expect(projectStore).toEqual(testData);
});

describe("testing updateStore", () => {
  beforeAll(() => {
    projectStore.loadProjectIntoStore(testData);
  });

  it("adds a lane without crashing", () => {
    projectStore.updateStore({
      type: "updateLane",
      id: testData.sprints[0].sprintId,
      data: newLane
    });
    expect(projectStore.sprints[0].lanes).toContainEqual(newLane);
  });

  it("updates an existing lane without crashing", () => {
    projectStore.updateStore({
      type: "updateLane",
      id: testData.sprints[0].sprintId,
      data: newLane
    });
    expect(projectStore.sprints[0].lanes).toContainEqual(newLane);

    projectStore.updateStore({
      type: "updateLane",
      id: testData.sprints[0].sprintId,
      data: updatedLane
    });
    expect(projectStore.sprints[0].lanes).toContainEqual(updatedLane);
  });

  it("removes an existing lane without crashing", () => {
    projectStore.updateStore({
      type: "updateLane",
      id: testData.sprints[0].sprintId,
      data: newLane
    });
    expect(projectStore.sprints[0].lanes).toContainEqual(newLane);

    projectStore.updateStore({
      type: "removeLane",
      id: testData.sprints[0].sprintId,
      data: {
        id: newLane.laneId
      }
    });
    expect(projectStore.sprints[0].lanes).not.toContainEqual(newLane);
  });

  it("adds a sprint without crashing", () => {
    projectStore.updateStore({
      type: "updateSprint",
      id: testData.id,
      data: newSprint
    });
    expect(projectStore.sprints[2]).toEqual(newSprint);
  });

  it("updates an existing sprint without crashing", () => {
    projectStore.updateStore({
      type: "updateSprint",
      id: testData.id,
      data: newSprint
    });
    expect(projectStore.sprints[2]).toEqual(newSprint);

    projectStore.updateStore({
      type: "updateSprint",
      id: testData.id,
      data: updatedSprint 
    });
    expect(projectStore.sprints[2]).toEqual(updatedSprint);
  });

  it("removes an existing sprint without crashing", () => {
    projectStore.updateStore({
      type: "updateSprint",
      id: testData.id,
      data: newSprint
    });
    expect(projectStore.sprints).toContainEqual(newSprint);

    projectStore.updateStore({
      type: "removeSprint",
      id: testData.id,
      data: {
        id: newSprint.sprintId
      }
    });
    expect(projectStore.sprints).not.toContainEqual(newSprint);
  });

  it("adds a workitem without crashing", () => {
    projectStore.updateStore({
      type: "updateWorkItem",
      id: testData.id,
      data: newWorkItem
    });
    expect(projectStore.workItems).toContainEqual(newWorkItem);
  });

  it("updates an existing workitem without crashing", () => {
    projectStore.updateStore({
      type: "updateWorkItem",
      id: testData.id,
      data: newWorkItem
    });
    expect(projectStore.workItems).toContainEqual(newWorkItem);

    projectStore.updateStore({
      type: "updateWorkItem",
      id: testData.id,
      data: updatedWorkItem
    });
    expect(projectStore.workItems).toContainEqual(updatedWorkItem);
  });

  it("removes an existing workitem without crashing", () => {
    projectStore.updateStore({
      type: "updateWorkItem",
      id: testData.id,
      data: newWorkItem
    });
    expect(projectStore.workItems).toContainEqual(newWorkItem);

    projectStore.updateStore({
      type: "removeWorkItem",
      id: testData.id,
      data: {id: newWorkItem.workItemId}
    });
    expect(projectStore.workItems).not.toContainEqual(newWorkItem);
  });

  it("updates the project without crashing", () => {
    projectStore.updateStore({
      type: "updateProject",
      id: testData.id,
      data: {name: "newName"}
    });
    expect(projectStore.name).toEqual('newName');
  });
});