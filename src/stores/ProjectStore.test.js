import projectStore from './ProjectStore';

const testData = {
  id: 123456789,
  name: "TestProjectName",
  companyId: 123456,
  users: [
    {
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
  sprints: [
    {
      sprintId: 1234567891,
      sprintName: "testSprint1",
      lanes: [
        {
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
      sprintName: "testSprint2",
      lanes: [
        {
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
  workItems: [
    {
      workItemId: 789123,
      workItemTitle: "TestWorkItem1",
      workItemDescription: "This is a workitem test."
    },
    {
      workItemId: 891234,
      workItemTitle: "TestWorkItem2",
      workItemDescription: "This is another workitem test."
    }
  ]
};

it('loads data without crashing', () => {
    projectStore.loadProjectIntoStore(testData);
    expect(projectStore).toEqual(testData);
});

describe('testing updateStore', () => {
    beforeAll(() => {
        projectStore.loadProjectIntoStore(testData);
    });

    it('adds a lane without crashing', () => {
      let newLane = {laneId: "567891", laneTitle: "new lane title"};

      projectStore.updateStore({type: 'updateLane', id: testData.sprints[0].sprintId, data: newLane});
      expect(projectStore.sprints[0].lanes[2]).toEqual(newLane);
    });

    it('updates an existing lane without crashing', () => {
        let newLane = {laneId: "567891", laneTitle: "new lane title"};
        let updatedLane = {laneId: "567891", laneTitle: "updated lane title"};

        projectStore.updateStore({type: 'updateLane', id: testData.sprints[0].sprintId, data: newLane});
        expect(projectStore.sprints[0].lanes[2]).toEqual(newLane);
        projectStore.updateStore({type: 'updateLane', id: testData.sprints[0].sprintId, data: updatedLane});
        expect(projectStore.sprints[0].lanes[2]).toEqual(updatedLane);
    });

    it('removes an existing lane without crashing', () => {
        let newLane = {laneId: "567891", laneTitle: "new lane title"};

        projectStore.updateStore({type: 'updateLane', id: testData.sprints[0].sprintId, data: newLane});
        expect(projectStore.sprints[0].lanes.some(ln => ln.laneId === newLane.laneId)).toBeDefined();
        projectStore.updateStore({type: 'removeLane', id: testData.sprints[0].sprintId , data: {id: newLane.laneId}});
        expect(projectStore.sprints[0].lanes.some(ln => ln.laneId === newLane.laneId)).toBe(false);
    });
});