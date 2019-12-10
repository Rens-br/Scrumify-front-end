import {action, decorate, observable} from 'mobx';
import io  from 'socket.io-client';

class SocketStore{
	//Values stored in user store
	socket = null;

	constructor() {
		this.connect();
	}

	connect = () => {
		this.socket = io.connect('https://dev.api.scrumify.nl');

		this.socket.on('connect', () => {
			console.log('connected')
		})
	}

}

decorate(SocketStore, {
	socket: observable,
	io: observable,
});

export default new SocketStore();