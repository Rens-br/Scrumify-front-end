import { observable } from 'mobx'

import projectStore from './ProjectStore'

class RootStore{
    @observable
    projectStore = projectStore;

    //TODO: add other stores to rootStore
}

const rootStore = window.store = new RootStore();

export default rootStore;