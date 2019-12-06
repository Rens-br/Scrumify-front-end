import { observable, decorate } from 'mobx'

import projectStore from './ProjectStore'
import userStore from './UserStore';

class RootStore{
    projectStore = projectStore;
    userStore = userStore;

    //TODO: add other stores to rootStore
}

decorate(RootStore, {
    projectStore: observable,
    userStore: observable
})

const rootStore = window.store = new RootStore();

export default rootStore;