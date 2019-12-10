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
		});

		this.socket.on('receiveUserData', (userObject) => {
			console.log(userObject);
			this.rootStore.userStore.updateStore({ type: 'updateUser', id: userObject.id, data: userObject });
		})

		this.socket.on('receiveProjectData', (projectObject) => {
			this.rootStore.projectStore.updateStore({ type: 'updateProject', id: projectObject.projectId, data: projectObject });
		})
	};

	getUser = (userId) => {
		this.socket.emit('getUser', userId);
	};

	getProject = (projectId) => {
		this.socket.emit('getProject', projectId);
	}
}

decorate(SocketStore, {
	socket: observable,
	io: observable,
	getUser: action
});

export default SocketStore;