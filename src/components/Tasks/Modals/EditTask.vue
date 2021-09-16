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

      <pre>{{taskToSubmit}}</pre>
    </form>
</q-card>
</template>

<script>

  import{ mapActions }from 'vuex'

  export default{
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

      submitForm(){
        this.$refs.modalTaskName.$refs.name.validate()
        //console.log(this.$refs.name)
        if (!this.$refs.modalTaskName.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask(){
        //the updateTask signature is required id and updates parameter
        this.updateTask({
          id:this.id,
          updates:this.taskToSubmit
        })

        //triger the event in Task.vue at <edit-task/>
        this.$emit('close')      
      },
      clearDueDate(){
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
      }
    },
    components:{
      'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,

      'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,

      'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,

      'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,

      'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
    },
    //mounted the existing data to the taskToSubmit object
    mounted(){
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