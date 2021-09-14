<template>
	<li> 
	 <div><slot></slot>{{index_out}}</div> 
	 <small>{{task_out.dueDate}} @ {{task_out.dueTime}}</small>
	 <button @click="deleteTask(index_out)">delete</button>
	</li>
</template>

<script type="">
	export default{
		props:['task_out','index_out']
	}
	
</script>

<style type="text/css">
	
</style>