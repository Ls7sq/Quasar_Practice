import {firebaseAuth} from 'boot/firebase'
import { LocalStorage } from 'quasar'
const state = {
	loggedIn: false
}

const mutations = {
	setLoggedIn(state, value){
		state.loggedIn = value
	}
}

const actions = {
	registerUser({},payload){
		firebaseAuth.createUserWithEmailAndPassword(
			payload.email, payload.password).then(response=>
			{
				console.log('response: ', response)
			}).catch(error=>{
				console.log('error message: ', error.message)
			})
	},
	loginUser({},payload){
		firebaseAuth.signInWithEmailAndPassword(
			payload.email, payload.password).then(response=>
			{
				console.log('response: ', response)
			}).catch(error=>{
				console.log('error message: ', error.message)
			})
	},
	logoutUser({},payload){
		firebaseAuth.signOut()
	},
	// handleAuthStateChange({ commit, dispatch }) {
 //    firebaseAuth.onAuthStateChanged(user => {
 //        Loading.hide()
	//         if (user) {
	//         commit('setLoggedIn', true)
	//         LocalStorage.set('loggedIn', true)
	//         this.$router.push('/').catch(err => {})
	//         dispatch('tasks/fbReadData', null, { root: true })
	//         }
	//         else {
	//         commit('tasks/clearTasks', null, { root: true })
	//         commit('tasks/setTasksDownloaded', false, { root: true })
	//         commit('setLoggedIn', false)
	//         LocalStorage.set('loggedIn', false)
	//         this.$router.replace('/auth').catch(err => {})
	//         }
	//     })
	// }
	handleAuthStateChange({commit}){
		firebaseAuth.onAuthStateChanged(user=> {
		
		if (user) {
		    commit('setLoggedIn',true)
		    LocalStorage.set('loggedIn', true)
		    this.$router.push('/').catch(err=>{
		    	console.log('error message: ', err.message)
		    })
		    //dispatch('tasks/fbReadData', null, {root : true}))
		}else{
			commit('setLoggedIn',false)
			LocalStorage.set('loggedIn', false)
			this.$router.replace('/auth').catch(err=>{
		    	console.log('error message: ', err.message)
		    	})
			}
		});
	}
}

const getters = {

}

export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}