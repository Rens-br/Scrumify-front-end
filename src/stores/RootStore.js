import { observable, decorate } from 'mobx';

import projectStore from './ProjectStore';
import userStore from './UserStore';
import socketStore from './SocketStore';

class RootStore{
    projectStore = projectStore;
    userStore = userStore;
    socketStore = socketStore;
}

decorate(RootStore, {
    projectStore: observable,
    userStore: observable,
    socketStore: observable
})

const rootStore = window.store = new RootStore();

export default rootStore;