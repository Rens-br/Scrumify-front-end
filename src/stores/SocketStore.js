import {action, decorate, observable} from 'mobx';
import io  from 'socket.io-client';

class SocketStore{
	socket = null;
	rootStore = null;

	constructor(root) {
		this.rootStore = root;
		this.connect();
	}

	connect = () => {
		this.socket = io.connect('https://dev.api.scrumify.nl',{reconnectionDelay: 100});

		this.socket.on('connect', () => {
			console.log('connected');

			this.getUser('1')
		});

		this.socket.on('receiveUserData', (userObject) => {
			this.rootStore.userStore.updateStore({ type: 'updateUser', id: userObject.id, data: userObject });
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

	getUser = (userId) => {
		this.socket.emit('getUser', userId);
	};

	getProject = (projectId) => {
		console.log(projectId)
		this.socket.emit('getProject', projectId);
	};

	getWorkItem = (projectId, workItemId) => {
		this.socket.emit('getWorkItem', {ProjectId: projectId, WorkItemId: workItemId})
	};

	createSprint = (projectId, title) => {
		this.socket.emit('createSprint', {ProjectId: projectId, title: title});
	};

	createLane = (projectId, sprintId, title) => {
		this.socket.emit('createLane', {ProjectId: projectId, SprintId: sprintId, title: title})
	};

	updateLane = (projectId, laneId, title) => {
		this.socket.emit('updateLane', {ProjectId: projectId, LaneId: laneId, title: title});
	};

	updateSprint = (projectId, sprintId, title) => {
		this.socket.emit('updateSprint', {ProjectId: projectId, SprintId: sprintId, title: title})
	};

	updateWorkItem = (projectId, workItemId, workItem) => {
		this.socket.emit('updateWorkItem', {ProjectId: projectId, WorkItemId: workItemId, data: workItem})
	};

	removeSprint = (projectId, sprintId) => {
		this.socket.emit('removeSprint', {ProjectId: projectId, SprintId: sprintId});
	};

	removeLane = (projectId, laneId) => {
		this.socket.emit('removeLane', {ProjectId: projectId, LaneId: laneId})
	};

	removeWorkItem = (projectId, workItemId) => {
		this.socket.emit('removeWorkItem', {ProjectId: projectId, WorkItemId: workItemId});
	};

	addWorkItem = (projectId, laneId, title) => {
		this.socket.emit('createWorkItem', {ProjectId: projectId, LaneId: laneId, title: title})
	};


}

decorate(SocketStore, {
	socket: observable,
	io: observable,
	getUser: action,
	getProject: action,
	createSprint: action
});

export default SocketStore;