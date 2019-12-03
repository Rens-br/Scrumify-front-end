import projectStore from './ProjectStore'

const testData = {
  id: 123456789,
  name: "TestProjectName",
  companyId: 123456,
  users: {
    "1234567": {
      userName: "TestUserName1",
      userEmail: "testemail1@email.com"
    },
    "12345678": {
      userName: "TestUserName2",
      userEmail: "testemail2@email.com"
    }
  },
  sprints: {
    "1234567891": {
      sprintName: "testSprint1",
      lanes: {
        "23456": {
          laneTitle: "testLaneTitle1"
        },
        "34567": {
          laneTitle: "testLaneTitle2"
        }
      }
    },
    "456789": {
      sprintName: "testSprint2",
      lanes: {
        "56789": {
          laneTitle: "testLaneTitle1"
        },
        "6789": {
          laneTitle: "testLaneTitle2"
        }
      }
    }
  },
  workItems: {
    "789123": {
      workItemTitle: "TestWorkItem1",
      workItemDescription: "This is a workitem test."
    },
    "891234": {
      workItemTitle: "TestWorkItem2",
      workItemDescription: "This is another workitem test."
    }
  }
};

test('loads data without crashing', () => {
    projectStore.loadProjectIntoStore(testData);
    expect(projectStore).toEqual(testData);
});