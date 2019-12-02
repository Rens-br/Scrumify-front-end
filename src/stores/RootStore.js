import { observable, decorate } from 'mobx'

import projectStore from './ProjectStore'

class RootStore{
    projectStore = projectStore;

    //TODO: add other stores to rootStore
}

decorate(RootStore, {
    projectStore: observable
})

const rootStore = window.store = new RootStore();

export default rootStore;