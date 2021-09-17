<template>
	<div row class="q-mb-sm">
	  <!-- @input used to return back to AddTask -->
	  <q-input 
	    outlined 
	    :value="name"
	    label="Task Name" 
	    class="col"
	    @input="$emit('update:name',$event)" 
	    :rules="[val => !!val || 'Field is required']"
	    ref="name"
	    autofocus
	    v-select-all>             
	      <template v-slot:append>
	        <q-icon
	          v-if="name" 
	          name="close" 
	          @click="$emit('update:name', '')" 
	          class="cursor-pointer" />
	      </template>
	    </q-input> 
	</div>
</template>

<script>
	import {selectAll} from'src/directives/directive-select-all'
	export default{
		props:['name'],
		directives:{
			selectAll
		}
	}
</script>