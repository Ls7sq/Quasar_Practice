<template>
    <div 
      row 
      class="q-mb-sm" 
      >
      <q-input 
        outlined
        label="Due time" 
        class='col'
        :value="dueTime" 
        @input="$emit('update:dueTime',$event)"
        :rules="[val => checkValidTime(val) || 'Please enter valid Time']">
        <template v-slot:append>
          <q-icon
              v-if="dueTime" 
              name="close" 
              @click="$emit('update:dueTime', '')" 
              class="cursor-pointer" />

          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time 
              	:value="dueTime"
              	@input="$emit('update:dueTime',$event)">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
</template>

<script>
	export default{
		props:['dueTime'],

    methods:{
        checkValidTime(dueTime){
        var re = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ 
        return re.test(dueTime)
      }
    }
	}
</script>