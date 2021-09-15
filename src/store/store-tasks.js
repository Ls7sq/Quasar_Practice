const state = {
	tasks:{
		'ID1':{
		  name: 'Go to shop',
		  completed: false,
		  dueDate:'2021/09/14',
		  dueTime:'21:30'
		},
		'ID2':{
		  name: 'Get bananas',
		  completed: false,
		  dueDate:'2021/09/15',
		  dueTime:'18:30'
		},
		'ID3':{
		  name: 'Get apples',
		  completed: false,
		  dueDate:'2021/09/16',
		  dueTime:'20:30'
		}
	}
}

const mutations = {
	updateTask(state, payload){
		Object.assign(state.tasks[payload.id], payload.updates)
	}
}

const actions = {
	updateTask({ commit }, payload){
		// console.log('updateTask action')
		// console.log('payload: ', payload)
		commit('updateTask', payload)
	}
}

const getters = {
	tasks: (state)=>{
		return state.tasks
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}