<template>
  <q-page padding>
    <ul>
      <task v-for = "(task, index) in tasks"
      :key='task.id'
      :task_out='task'
      :index_out='index'>{{task.name}} </task>
    </ul>
  </q-page>
</template>

<script>
export default {
  data(){
    return {
      tasks: [
        {
          id:1,
          name:'Go to shop',
          dueDate:'2021/09/14',
          dueTime:'12:00'
        },
        {
          id:2,
          name:'Get bananas',
          dueDate:'2021/09/15',
          dueTime:'14:00'
        },
        {
          id:3,
          name:'Get apples',
          dueDate:'2021/09/16',
          dueTime:'16:00'
        },
      ]
    }
  },
  methods:{
    deleteTask(index){
      this.tasks.splice(index,1)
    }
  },
  components:{
    'task':require('components/Task.vue').default
  }
}
</script>

</style>
