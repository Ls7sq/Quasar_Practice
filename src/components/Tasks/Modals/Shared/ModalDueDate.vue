<template>
		<div row class="q-mb-sm">
          <q-input 
            outlined
            label="Due date" 
            :value="dueDate"
            @input="$emit('update:dueDate',$event)"
            :rules="[val => checkValidDate(val) || 'Please enter valid Date']">
            <template v-slot:append>

              <q-icon
                  v-if="dueDate" 
                  name="close" 
                  @click="$emit('clear')" 
                  class="cursor-pointer" />      

              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date 
                  	:value="dueDate"
                  	@input="$emit('update:dueDate',$event)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>	
</template>

<script>
import {date} from 'quasar'

	export default{
		props:["dueDate"],

    methods:{
        checkValidDate(dueDate){
        return date.isValid(dueDate)
      }
    }
	}
</script>