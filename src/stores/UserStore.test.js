import UserStore from './UserStore';
import { italic } from 'ansi-colors';
import expectExport from 'expect';

const testUser = {
    userId: 420,
    name: 'Kaulo Rens',
    email: 'kaulorens@shemail.com',
    projects: [{
        projectId: 123456789,
        projectName: 'Joe Mama',
    },{
        projectId: 69,
        projectName: 'Road to global elite',
    }]
}

const updatedName = {
    userId: 420,
    name: 'Minder Kaulo Rens',
    email: 'kaulorens@shemail.com',
    projects: [{
        projectId: 123456789,
        projectName: 'Joe Mama',
    },{
        projectId: 69,
        projectName: 'Road to global elite',
    }]
}

const newProject = {
    projectId: 42069,
    projectName: "Stinking neuken in 1v1 LoL",
}

describe("Testing userStore.js", () => {
    it("loads a user without crashing", () => {
        UserStore.updateStore({ type: "updateUser", id: testUser.userId, data: testUser });

        expect(UserStore).toEqual(testUser);
    })

    beforeEach(() => {
        UserStore.updateStore({ type: "updateUser", id: testUser.userId, data: testUser });
    })
    
    it("updates name without crashing", () => {
        expect(UserStore.name).toEqual(testUser.name);

        UserStore.updateStore({ type: "updateUser", id: testUser.userId, data: { name: updatedName.name } });
        expect(UserStore.name).toEqual(updatedName.name);
    })

    it("Adds project to store without crashing", () => {
        UserStore.updateStore({ type: "updateProject", id: newProject.projectId, data: newProject });

        expect(UserStore.projects).toContainEqual(newProject);
    })

    it("Updates project without crashing", () => {
        UserStore.updateStore({ type: "updateProject", id: testUser.projects[0].projectId, data: { projectName: "nieuw kanker project" } });

        expect(UserStore.projects[0].projectName).toEqual("nieuw kanker project");
    })

    it("Remove project without crashing", () => {
        UserStore.updateStore({ type: "removeProject", id: testUser.projects[0].projectId });

        expect(UserStore.projects).not.toContainEqual(testUser.projects[0]);
    })
})