<template>
	<q-select
		class="col q-ml-sm" 
		v-model="sortBy"
		filled
		:options="options" 
		label="Sort by" 
		stack-label
		emit-value
		 
		/>
</template>

<script>
	export default {
  data () {
    return {
      sortBy: null,

      options: [
        {
        	label:'Name',
        	value:'name'
        },
        {
        	label:'Date',
        	value:'dueDate'
        }
      ]
    }
  }
}
</script>

<style scoped>
	.q-select{
		flex: 0 0 112px;
	}
</style>