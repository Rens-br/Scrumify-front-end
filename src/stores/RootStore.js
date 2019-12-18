import { observable, decorate } from 'mobx';

import ProjectStore from './ProjectStore';
import UserStore from './UserStore';
import SocketStore from './SocketStore';
import ClientStore from './ClientStore';

class RootStore{
    projectStore = new ProjectStore(this);
    userStore = new UserStore(this);
    socketStore = new SocketStore(this);
    clientStore = new ClientStore(this);
}

decorate(RootStore, {
    projectStore: observable,
    userStore: observable,
    socketStore: observable,
    clientStore: observable
});

const rootStore = window.store = new RootStore();

export default rootStore;