<template>
	<q-item 
        v-ripple
        clickable
        @click="updateTask({id: id, updates:{completed: !task.completed}})"
        :class="!task.completed ? 'bg-orange-2' : 'bg-green-2' "
        v-touch-hold:1000.mouse="showEditTaskModal"
      >
        <q-item-section side top>
          <q-checkbox 
          	:value="task.completed"
          	class="no-pointer-events" />
        </q-item-section>

        <q-item-section>
          <q-item-label 
            :class="{'text-strike': task.completed}"
            v-html="$options.filters.searchHighlight(task.name, search)">
            
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
                {{task.dueDate | niceDate}}
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
          <div class="row">
          	<q-btn
          		@click.stop="showEditTaskModal" 
          		flat 
          		round
          		dense 
          		color='primary' 
          		icon="edit"/>
            <q-btn
              @click.stop="promptToDelete(id)" 
              flat 
              round
              dense 
              color='red' 
              icon="delete"/>
          </div>
        </q-item-section>
        
        <!-- when the showEditTask is true then the <edit-task/> will appear -->
        <q-dialog v-model="showEditTask">
          <edit-task 
            @close='showEditTask = false' 
            :task = "task"
            :id = "id"
          />
        </q-dialog>
        
      </q-item>
</template>

<script>
import {mapActions, mapState}from 'vuex'
import { Dialog } from 'quasar'
import{date} from 'quasar'

export default{
	props:['task','id'],

  data(){
    return{
      showEditTask : false
    }
  },
  computed:{
    ...mapState('tasks',['search'])
  },
  //pass to the store-tasks actions and mutations
	methods:{
	...mapActions('tasks',['updateTask', 'deleteTask']),
  showEditTaskModal(){
    this.showEditTask=true
  },
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
	},
  filters:{
    niceDate(value){
      return date.formatDate(value,'MMM D')
    },
    searchHighlight(value, search){
       // console.log('value', value)
       // console.log('search', search)
      if (search) {
        let searchRegExp = new RegExp(search,'ig')
        return value.replace(searchRegExp, (match)=>{
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
        // return value.replace(new RegExp(search,'i'),
        //   (match)=>{ return '<span class="bg-yellow-6">' + match + '</span>'})
      }
      return value
    }
  },
  components:{
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>

<style>
	
</style>