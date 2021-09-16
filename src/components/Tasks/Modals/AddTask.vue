<template>
  <q-card>
    <model-header>Add Task</model-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        
        <!-- :name = "taskToSubmit.name" used to pass to the child ModelTaskName, and :name.sync to get back the data from child-->
        <model-task-name 
          :name.sync = "taskToSubmit.name"/>

        <model-due-date
          :dueDate.sync = "taskToSubmit.dueDate"
          @clear="clearDueDate"/>

        
        <div row class="q-mb-sm" v-if="taskToSubmit.dueDate">
          <q-input 
            outlined
            label="Due time" 
            class='col'
            v-model="taskToSubmit.dueTime" >
            <template v-slot:append>
              <q-icon
                  v-if="taskToSubmit.dueTime" 
                  name="close" 
                  @click="taskToSubmit.dueTime = '' " 
                  class="cursor-pointer" />

              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          label="Save" 
          color="primary"
          type="submit" 
           />
      </q-card-actions>

      <pre>{{taskToSubmit}}</pre>
    </form>
</q-card>
</template>

<script>

  import{ mapActions }from 'vuex'

  export default{
    data(){
      return{
        taskToSubmit:{
            name: '',
            dueDate:'',
            dueTime:'',
            completed: false
        }
      }
    },
    methods:{
      //Here can trigger the anction called addTask in store-tasks.js
      ...mapActions('tasks',['addTask']),

      submitForm(){
        this.$refs.name.validate()
        //console.log(this.$refs.name)
        if (!this.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask(){
        this.addTask(this.taskToSubmit)

        //triger the event in PageTodo.vue at <add-task/>
        this.$emit('close')      
      },
      clearDueDate(){
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
      }
    },
    components:{
      'model-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,

      'model-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,

      'model-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default
    
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