<template>
	<div>
		<list-header>Completed</list-header>

		<q-list v-if="Object.keys(tasksCompleted).length != 0" bordered separator>
	      <task
	        v-for='(task, key) in tasksCompleted'
	        :key="key"
	        :task='task'
	        :id='key'>          
	      </task>      
	  </q-list>
	</div>
</template>

<script>
	export default{
		props:['tasksCompleted'],

		components:{
    		'task': require('components/Tasks/Task.vue').default,
    		'list-header': require('components/Shared/ListHeader.vue').default
		}
	}
</script>