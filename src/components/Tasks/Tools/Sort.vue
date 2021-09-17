<template>
	<q-select
		class="col q-ml-sm" 
		v-model="model"
		filled 
		:options="options" 
		label="Sort by" 
		stack-label 
		/>
</template>

<script>
	export default {
  data () {
    return {
      model: null,

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle',
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