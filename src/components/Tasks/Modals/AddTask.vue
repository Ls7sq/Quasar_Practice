<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space/>
      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close"
        />

      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div row class="q-mb-sm">
        <q-input 
          outlined 
          v-model="taskToSubmit.name" 
          label="Task Name" 
          class="col" /> 
      </div>

      <div row class="q-mb-sm">
        <q-input 
          outlined
          label="Due date" 
          v-model="taskToSubmit.dueDate">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.dueDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div row class="q-mb-sm">
        <q-input 
          outlined
          label="Due time" 
          v-model="taskToSubmit.dueTime" >
          <template v-slot:append>
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
      <q-btn flat label="Save" color="primary" v-close-popup />
    </q-card-actions>
</q-card>

</template>

<script>
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
    }

  }
</script>

<style>
  
</style>