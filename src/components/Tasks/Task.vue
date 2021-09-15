<template>
	<q-item 
        v-ripple
        clickable
        @click="updateTask({id: id, updates:{completed: !task.completed}})"
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
</template>

<script>
	import {mapActions}from 'vuex'

	export default{
		props:['task','id'],

		methods:{
			...mapActions('tasks',['updateTask'])
		}
	}
</script>

<style>
	
</style>