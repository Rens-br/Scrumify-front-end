import { observable, action, decorate } from 'mobx';

class ClientStore{
	isWorkItemOpen = false;
	currentWorkItem = undefined;
	currentProjectIndex = undefined;

	rootStore = null;

	constructor(root){
		this.rootStore = root;
	}

	setCurrentProjectIndex = (index) => {
		this.currentProjectIndex = index;
	};

	openWorkItem = (workItemId) => {
		this.currentWorkItem = workItemId;
		this.rootStore.projectStore.getWorkItem(workItemId);
		this.isWorkItemOpen = true;
	};

	closeWorkItem = () => {
		this.isWorkItemOpen = false;
		this.currentWorkItem = undefined;
	};
}

decorate(ClientStore, {
	isWorkItemOpen: observable,
	currentProjectIndex: observable,
	setCurrentProjectIndex: action,
	openWorkItem: action
});

export default ClientStore;