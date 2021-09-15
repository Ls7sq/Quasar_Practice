<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome ToDo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :icon="nav.icon"
          :label="nav.label"
          :to="nav.to"
          />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>

<!--         <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          clickable
          :to="nav.to"
          exact
          class="text-grey-4"
          >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  //import EssentialLink from 'components/EssentialLink.vue'

  // const linksData = [
  //     {
  //       title: 'TODO',
  //       icon: 'list',
  //       link: '/'
  //     },
  //     {
  //       title: 'Settings',
  //       icon: 'settings',
  //       link: '/settings'
  //     }
  //   ]
  export default {
    name: 'MainLayout',
    //components: { EssentialLink },
    data () {
      return {
        leftDrawerOpen: false,
        //essentialLinks: linksData
        navs:[
          {
            label: 'Todo',
            icon: 'list',
            to: '/'
          },
          {
            label: 'Settings',
            icon: 'settings',
            to: '/settings'
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width:  768px){
    .q-footer{
      display: none;
    }   
  }
  .q-drawer{
       .q-router-link--exact-active{
            color:  white !important;     
     }
   }
</style>
