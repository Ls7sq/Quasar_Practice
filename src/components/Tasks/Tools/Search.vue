<template v-slot:append>
  
      <q-input 
      	outlined
      	v-model="searchFiled" 
      	label="Search" 
      	>
        <template v-slot:append>
          <q-icon 
          	v-if="searchFiled !== ''" 
          	name="close" 
          	@click="searchFiled = ''" 
          	class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	
	export default{
		computed: {
			...mapState('tasks',['search']),
			searchFiled:{
				get(){
					return this.search
				},
				set(value){
					this.setSearch(value)
				}
			}
		},
		methods:{
			...mapActions('tasks',['setSearch'])
		}
	}
</script>