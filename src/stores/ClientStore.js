import { observable, action, decorate } from 'mobx';

class ClientStore{
	isWorkItemOpen = false;
	currentWorkItem = undefined;

	rootStore = null;

	constructor(root){
		this.rootStore = root;
	}

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
	openWorkItem: action
});

export default ClientStore;