<template v-slot:append>
      <q-input 
      	class="col"
      	outlined
      	v-model="searchFiled" 
      	label="Search"
      	v-select-all 
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
	import {selectAll} from'src/directives/directive-select-all'
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
		},
		directives:{
			selectAll
		}
	}
</script>