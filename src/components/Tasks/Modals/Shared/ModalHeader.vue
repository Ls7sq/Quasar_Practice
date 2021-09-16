<template>
	<q-card-section class="row">
							<!-- slot used to real-time reflect the Title -->
	  <div class="text-h6"><slot></slot></div>
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
</template>

<script>
	export default{

	}
</script>