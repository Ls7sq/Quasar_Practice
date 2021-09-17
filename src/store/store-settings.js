import { LocalStorage } from 'quasar'

const state = {
	settings:{
		show12HourTimeFormat:false,
		showTasksInOneList:false
	}
}

const mutations = {
	setShow12HourTimeFormat(state, value){
		state.settings.show12HourTimeFormat = value
	},
	setShowTaskInOneList(state, value){
		state.settings.showTasksInOneList = value
	},

}

const actions = {
	setShow12HourTimeFormat({commit, dispatch}, value){
		commit('setShow12HourTimeFormat',value)
		dispatch('saveSettings')
	},
	setShowTaskInOneList({commit, dispatch}, value){
		commit('setShowTaskInOneList',value)
		dispatch('saveSettings')
	},
	saveSettings({state}){
		LocalStorage.set('settings',state.settings)
	}
}

const getters = {
	settings:state=>{
		return state.settings
	}
}

export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}