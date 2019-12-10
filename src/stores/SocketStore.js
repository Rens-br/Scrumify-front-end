import {action, decorate, observable} from 'mobx';
import io  from 'socket.io-client';

class SocketStore{
	//Values stored in user store
	socket = null;
	rootStore = null;

	constructor(root) {
		this.rootStore = root;
		this.connect();
	}

	connect = () => {
		this.socket = io.connect('https://dev.api.scrumify.nl',{reconnectionDelay: 100});
		console.log(this.socket);

		this.socket.on('connect', () => {
			console.log('connected');

			this.getUser('1')
		});

		this.socket.on('receiveUserData', (userObject) => {
			console.log(userObject);
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
		this.socket.emit('getProject', projectId);
	};

	createSprint = (projectId, title) => {
		this.socket.emit('createSprint', {ProjectId: projectId, title: title});
	};

	createLane = (projectId, sprintId, title) => {
		this.socket.emit('createLane', {ProjectId: projectId, SprintId: sprintId, title: title})
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