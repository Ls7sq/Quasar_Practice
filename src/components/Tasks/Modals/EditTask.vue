<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        
        <!-- :name = "taskToSubmit.name" used to pass to the child ModelTaskName, and :name.sync to get back the data from child-->
        <modal-task-name 
          :name.sync = "taskToSubmit.name"
          ref='modalTaskName'/>

        <modal-due-date
          :dueDate.sync = "taskToSubmit.dueDate"
          @clear="clearDueDate"/>

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync = "taskToSubmit.dueTime"/>

      </q-card-section>

      <modal-buttons/>
    </form>
</q-card>
</template>

<script>

  import{ mapActions }from 'vuex'
  import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

  export default{
    mixins:[mixinAddEditTask],
    //get the task and id then pass to the store-tasks to execute the updateTask method
    props:['task', 'id'],
    data(){
      return{
        taskToSubmit:{}
      }
    },
    methods:{
      //Here can trigger the anction called updateTask in store-tasks.js
      ...mapActions('tasks',['updateTask']),

      submitTask(){
        //the updateTask signature is required id and updates parameter
        this.updateTask({
          id:this.id,
          updates:this.taskToSubmit
        })

        //triger the event in Task.vue at <edit-task/>
        this.$emit('close')      
      },
    },
    //mounted the existing data to the taskToSubmit object
    created(){
      this.taskToSubmit = Object.assign({}, this.task)
    }


    // directives:{
    //   autofocus:{
    //     inserted(el){
    //       el.focus()
    //     }
    //   }
    // }
  }
</script>

<style>
  
</style>