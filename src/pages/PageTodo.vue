<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list bordered separator>
      
      <q-item 
        v-ripple
        clickable
        v-for='task in tasks'
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-2' : 'bg-green-2' "
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label 
            :class="{'text-strikethrough': task.completed}">
            {{task.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
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


      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data(){
    return{
        tasks:[
        {
          id: 1,
          name: 'Go to shop',
          completed: false,
          dueDate:'2021/09/14',
          dueTime:'21:30'
        },
        {
          id: 2,
          name: 'Get bananas',
          completed: false,
          dueDate:'2021/09/15',
          dueTime:'18:30'
        },
        {
          id: 3,
          name: 'Get apples',
          completed: false,
          dueDate:'2021/09/16',
          dueTime:'20:30'
        }
      ]
    } 
  }
}
</script>

</style>
