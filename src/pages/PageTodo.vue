<template>
  <q-page>
    <!-- <p>Todo Page</p> -->

    <div class="q-pa-md absolute full-width full-height column">

      <div class="q-mb-lg row">
          <search/>
          <sort/>          
      </div>

      <p 
        v-if="search 
        && !Object.keys(tasksTodo).length 
        && !Object.keys(tasksCompleted).length">
          No search Results.🥲
      </p>

    
      <q-scroll-area class="q-scroll-area-tasks">
        <no-tasks
          v-if="!Object.keys(tasksTodo).length != 0 && !search"></no-tasks>

        <tasks-todo
          v-if="Object.keys(tasksTodo).length"
         :tasksTodo="tasksTodo"/>
        
        <tasks-completed
          v-if="Object.keys(tasksCompleted).length != 0"
         :tasksCompleted="tasksCompleted"
         class="q-mb-lg"/>

      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn
          @click="showAddTask= true"
          round
          color="primary"
          size="24px"
          icon="add"
        />
      </div>
    </div>
    <!-- when the showAddTask is true then the <add-task/> will appear -->
    <q-dialog v-model="showAddTask">
      <add-task @close='showAddTask = false' />
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data(){
    return{
      showAddTask:false
    }
  },
  mounted(){
    this.$root.$on('showAddTask',()=>{
      this.showAddTask=true
    })
  },
  computed:{
    ...mapGetters('tasks',['tasksTodo','tasksCompleted']),
    ...mapState('tasks',['search'])
  },
  components:{
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    'tasks-todo': require('components/Tasks/TasksTodo.vue').default,
    'tasks-completed': require('components/Tasks/TasksCompleted.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default,
    'search': require('components/Tasks/Tools/Search.vue').default,
    'sort':require('components/Tasks/Tools/Sort.vue').default
  }
}
</script>

<style>
  .q-scroll-area-tasks{
    display: flex;
    flex-grow: 1;
  }
</style>
