import Vue from 'vue'
import {uid} from 'quasar'
import {firebaseDb, firebaseAuth} from 'boot/firebase'

const state = {
	tasks:{
		// 'ID1':{
		//   name: 'Go to shop',
		//   completed: false,
		//   dueDate:'2021/09/14',
		//   dueTime:'21:30'
		// },
		// 'ID2':{
		//   name: 'Get bananas',
		//   completed: false,
		//   dueDate:'2021/09/15',
		//   dueTime:'18:30'
		// },
		// 'ID3':{
		//   name: 'Get apples',
		//   completed: false,
		//   dueDate:'2021/09/16',
		//   dueTime:'20:30'
		// }
	},
	search:'',
	sort:'name',
	tasksDownloaded: false
}

const mutations = {
	updateTask(state, payload){
		Object.assign(state.tasks[payload.id], payload.updates)
	},
	deleteTask(state, id){
		//console.log('delete id: ', id)
		//delete state.tasks[id]
		Vue.delete(state.tasks, id)
	},
	addTask(state, payload){
		Vue.set(state.tasks, payload.id, payload.task)
	},
	setSearch(state, value){
		state.search = value
	},
	setSort(state, value){
		state.sort = value
	},
	setTaskDownloaded(state, value){
		state.tasksDownloaded = value
	}

}

const actions = {
	updateTask({ dispatch }, payload){
		// console.log('updateTask action')
		// console.log('payload: ', payload)
		dispatch('fbUpdateTask', payload)
	},
	deleteTask({dispatch}, id){
		dispatch('fbDeleteTask', id)
	},
	addTask({dispatch}, task){
		let taskId = uid()
		let payload = {
			id : taskId,
			task: task
		}
		dispatch('fbAddTask',payload)
	},
	setSearch({commit}, value){
		commit('setSearch',value)
	},
	setSort({commit}, value){
		commit('setSort',value)
	},
	fbReadData({commit}){
		//console.log("start read the data from firebase")
		//console.log(firebaseAuth.currentUser)
		let userId = firebaseAuth.currentUser.uid

		let userTasks = firebaseDb.ref('tasks/' + userId)
		//console.log('userTasks: ',userTasks)

		//initial check for data
		userTasks.once('value', snapshot=>{
			commit('setTaskDownloaded', true)
		})

		//child added
		userTasks.on('child_added', snapshot=>{
			//console.log('snapshot', snapshot)
			let task = snapshot.val()
			//console.log('task', task)
			let payload = {
				id: snapshot.key,
				task:task
			}
			commit('addTask',payload)
		})
		//child changed
		userTasks.on('child_changed', snapshot=>{
			//console.log('snapshot', snapshot)
			let task = snapshot.val()
			//console.log('task', task)
			let payload = {
				id: snapshot.key,
				updates:task
			}
			commit('updateTask',payload)
		})
		//child removed
		userTasks.on('child_removed', snapshot=>{
			//console.log('snapshot', snapshot)
			let taskId = snapshot.key
			commit('deleteTask',taskId)
		})
	},
	fbAddTask({},payload){
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		//console.log('payload: ', payload)
		//console.log('taskRef: ', taskRef)
		taskRef.set(payload.task)
	},
	fbUpdateTask({}, payload){
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		//console.log('payload: ', payload)
		//console.log('taskRef: ', taskRef)
		taskRef.update(payload.updates)
	},
	fbDeleteTask({}, taskId){
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + taskId)

		taskRef.remove()
	}
}

const getters = {

	tasksSorted:(state)=>{
		let tasksSorted = {},
			keyOrdered = Object.keys(state.tasks)
		keyOrdered.sort((a,b)=>{
			let taskApro = state.tasks[a][state.sort].toLowerCase(),
			 	taskBpro = state.tasks[b][state.sort].toLowerCase()

			if (taskApro>taskBpro) return 1
			else if (taskApro<taskBpro) return -1
			else return 0
		})
		keyOrdered.forEach((key)=>{
			tasksSorted[key] = state.tasks[key]
		})
		return tasksSorted
	},

	tasksFiltered:(state,getters)=>{
		let tasksSorted = getters.tasksSorted,
			tasksFiltered = {}
		if (state.search) {
			Object.keys(tasksSorted).forEach(function(key)
			{
				let task = tasksSorted[key],
					taskNameLowerCase = task.name.toLowerCase(),
					searchLowerCase = state.search.toLowerCase()
				if (taskNameLowerCase.includes(searchLowerCase)) {
					tasksFiltered[key] = task
				}
			})
			return tasksFiltered
		}else{
			return tasksSorted
		}
	},
	//pass to the pagetodo.vue
	tasksTodo: (state, getters)=>{
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		Object.keys(tasksFiltered).forEach(function(key){
			let task = tasksFiltered[key]
			if (!task.completed) {
				tasks[key] = task
			}
		})
		return tasks
	},
	tasksCompleted: (state, getters)=>{
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		Object.keys(tasksFiltered).forEach(function(key){
			let task = tasksFiltered[key]
			if (task.completed) {
				tasks[key] = task
			}
		})
		return tasks
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}