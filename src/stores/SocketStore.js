import {action, decorate, observable, toJS} from 'mobx';
import io  from 'socket.io-client';

class SocketStore {
	socket = null;
	rootStore = null;

	constructor(root) {
		this.rootStore = root;
		this.connect();
	}

	connect = () => {
		this.socket = io.connect(process.env.REACT_APP_API_URL, {reconnectionDelay: 100});

		this.socket.on('connect', () => {
			this.sendSession();
		});

		this.socket.on('authentication', (response) => {
			this.rootStore.userStore.updateStore({type: 'authenticateUser', data: response})
		});

		this.socket.on('registration', (response) => {
			this.rootStore.userStore.updateStore({type: 'userRegistration', data: response})
		});

		this.socket.on("error", (error) => console.log(error));

		this.socket.on('receiveUserData', (userObject) => {
			this.rootStore.userStore.updateStore({type: 'updateUser', id: userObject.id, data: userObject});
		});

		this.socket.on('updateUser', (userObject) => {
			console.log(userObject)
			this.rootStore.userStore.updateStore(userObject);
		});

		this.socket.on('receiveProjectData', (projectObject) => {
			console.log(projectObject);
			this.rootStore.projectStore.loadProjectIntoStore(projectObject);
		});

		this.socket.on('updateProject', (updateObject) => {
			console.log(updateObject);
			this.rootStore.projectStore.updateStore(updateObject);
		})
	};

	disconnect = () => {
		this.socket.disconnect();
		console.log('disconnected');
	};

	sendLogin = (credentials) => {
		this.socket.emit('login', credentials);
	};

	sendRegister = (credentials) => {
		console.log(credentials);
		this.socket.emit('register', credentials);
	};

	sendSession = () => {
		let oldSession = sessionStorage.getItem('sessionId');

		if (oldSession !== '' && oldSession !== undefined) {
			this.socket.emit('restoreSession', oldSession);
		}
		else {
			this.rootStore.clientStore.stopLoading();
		}

		sessionStorage.setItem('sessionId', this.socket.id);
	};

	getUser = (userId) => {
		this.socket.emit('getUser', userId);
	};

	getProject = (projectId) => {
		console.log(projectId)
		this.socket.emit('getProject', projectId);
	};

	getWorkItem = (projectId, workItemId) => {
		this.socket.emit('getWorkItem', {ProjectId: projectId, WorkItemId: workItemId});
	};

	createSprint = (projectId, title) => {
		this.socket.emit('createSprint', {ProjectId: projectId, title: title});
	};

	createLane = (projectId, sprintId, title) => {
		console.log(sprintId, title);
		this.socket.emit('createLane', {ProjectId: projectId, SprintId: sprintId, title: title});
	};

	updateLane = (projectId, laneId, title) => {
		this.socket.emit('updateLane', {ProjectId: projectId, LaneId: laneId, title: title});
	};

	updateSprint = (projectId, sprintId, title) => {
		this.socket.emit('updateSprint', {ProjectId: projectId, SprintId: sprintId, title: title});
	};

	updateWorkItem = (projectId, workItemId, workItem) => {
		console.log(workItem)
		this.socket.emit('updateWorkItem', {ProjectId: projectId, WorkItemId: workItemId, data: workItem});
	};

	removeSprint = (projectId, sprintId) => {
		this.socket.emit('removeSprint', {ProjectId: projectId, SprintId: sprintId});
	};

	removeLane = (projectId, laneId) => {
		this.socket.emit('removeLane', {ProjectId: projectId, LaneId: laneId});
	};

	removeWorkItem = (projectId, workItemId) => {
		this.socket.emit('removeWorkItem', {ProjectId: projectId, WorkItemId: workItemId});
	};

	addWorkItem = (projectId, laneId, title) => {
		this.socket.emit('createWorkItem', {ProjectId: projectId, LaneId: laneId, title: title});
	};

	createProject = (projectId, title, organizationId) => {
		this.socket.emit('createProject', {ProjectId: projectId, title: title, OrganizationId: organizationId});
	};

	updateProject = (projectId, title) => {
		this.socket.emit('updateProject', {ProjectId: projectId, title: title});
	};

	removeProject = (projectId) => {
		this.socket.emit('removeProject', {ProjectId: projectId});
	};

	createOrganization = (userId, organizationName) => {
		this.socket.emit('createOrganizationBasic', {UserId: userId, OrganizationName: organizationName});
	};

	getOrganization = (organizationId) => {
		this.socket.emit('getOrganization', {OrganizationId: organizationId});
	};

	updateOrganization = (organizationId, organizationName) => {
		console.log(organizationName);
		this.socket.emit('changeOrganizationName', {
			OrganizationId: organizationId,
			OrganizationName: organizationName
		});
	};

	AddOrganizationUser = (organizationId, userId) => {
		this.socket.emit('addOrganizationName', {OrganizationId: organizationId, UserId: userId});
	};

	RemoveOrganizationUser = (organizationId, userId) => {
		this.socket.emit('removeOrganizationUser', {OrganizationId: organizationId, UserId: userId});
	};

	removeProjectUser = (projectId, userId) => {
		this.socket.emit('removeProjectUser', {ProjectId: projectId, UserId: userId})
	};

	addProjectUser = (projectId, email) => {
		this.socket.emit('addProjectUser', {ProjectId: projectId, UserEmail: email, UserRoleId: 2})
	};
}

decorate(SocketStore, {
	socket: observable,
	io: observable,
	getUser: action,
	getProject: action,
	createSprint: action,
	createOrganization: action
});

export default SocketStore;