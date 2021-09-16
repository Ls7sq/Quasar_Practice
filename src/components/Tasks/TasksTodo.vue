<template>
	<q-list v-if="Object.keys(tasksTodo).length != 0" bordered separator>
      <task
        v-for='(task, key) in tasksTodo'
        :key="key"
        :task='task'
        :id='key'>          
      </task>      
    </q-list>
</template>

<script>
	export default{
		props:['tasksTodo'],

		components:{
    		'task': require('components/Tasks/Task.vue').default,
		}
	}
</script>