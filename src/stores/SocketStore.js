import {action, decorate, observable} from 'mobx';
import io  from 'socket.io-client';

class SocketStore{
	//Values stored in user store
	socket = null;

	constructor() {
		this.connect();
	}

	connect = () => {
		this.socket = io.connect('http://dev.api.scrumify.nl');

		console.log(this.socket)
	}

}

decorate(SocketStore, {
	socket: observable,
	io: observable,
});

export default new SocketStore();