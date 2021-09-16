<template>
	<q-item 
        v-ripple
        clickable
        @click="updateTask({id: id, updates:{completed: !task.completed}})"
        :class="!task.completed ? 'bg-orange-2' : 'bg-green-2' "
      >
        <q-item-section side top>
          <q-checkbox 
          	:value="task.completed"
          	class="no-pointer-events" />
        </q-item-section>

        <q-item-section>
          <q-item-label 
            :class="{'text-strike': task.completed}">
            {{task.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section 
          side 
          v-if="task.dueDate">
          <div class="row">   
            <div class="column justify-center">
              <q-icon 
              name="event"
              size='18px'
              class="q-mr-xs"/>
            </div>   

            <div class="column">
              <q-item-label 
                caption
                class="row justify-end">
                {{task.dueDate}}
              </q-item-label>

              <q-item-label 
                caption
                class="row justify-end">
                <small>{{task.dueTime}}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>

        <q-item-section side>
        	<q-btn
        		@click.stop="promptToDelete(id)" 
        		flat 
        		round
        		dense 
        		color='red' 
        		icon="delete"/>
        	
        </q-item-section>
      </q-item>
</template>

<script>
import {mapActions}from 'vuex'
import { Dialog } from 'quasar'

export default{
	props:['task','id'],

  //pass to the store-tasks actions and mutations
	methods:{
	...mapActions('tasks',['updateTask', 'deleteTask']),
	promptToDelete(id){
	      Dialog.create({
	        title: 'Confirm',
	        message: 'Really delete?',
	        ok:{push:true},
	        cancel: {color:'negative'},
	        persistent: true
	      }).onOk(() => {
	        this.deleteTask(id)
	      })		
	  }
	}
}
</script>

<style>
	
</style>