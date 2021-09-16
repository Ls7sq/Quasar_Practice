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
	    autofocus>             
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
	export default{
		props:['name']
	}
</script>