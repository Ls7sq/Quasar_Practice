import {firebaseAuth} from 'boot/firebase'

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
	handleAuthStateChange({commit}){
		firebaseAuth.onAuthStateChanged(user=> {
		  if (user) {
		    commit('setLoggedIn',true)
		    this.$router.push('/').catch(err=>{
		    	console.log('error message: ', err.message)
		    })
		}else{
			commit('setLoggedIn',false)
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