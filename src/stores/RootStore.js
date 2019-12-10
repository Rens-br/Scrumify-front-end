import { observable, decorate } from 'mobx';

import ProjectStore from './ProjectStore';
import userStore from './UserStore';
import SocketStore from './SocketStore';

class RootStore{
    projectStore = new ProjectStore(this);
    userStore = userStore;
    socketStore = new SocketStore(this);
}

decorate(RootStore, {
    projectStore: observable,
    userStore: observable,
    socketStore: observable
})

const rootStore = window.store = new RootStore();

export default rootStore;