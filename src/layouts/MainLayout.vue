<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white q-py-lg">
        <q-btn class="bg-primary" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-primary"> Paypay </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label class="text-primary" header> Paypay </q-item-label>
        <q-separator />
        <NavLink v-for="(link, i) in NavLinks" :key="i" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavLink from 'src/components/NavLink.vue'


const linksList = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    path: '/',
  },
  {
    title: 'Invoices',
    icon: 'receipt',
    path: '/invoice',
  },
  {
    title: 'Wallet',
    icon: 'wallet',
    path: '/wallet',
  },
  {
    title: 'Activity',
    icon: 'bar_chart',
    path: '/activity',
  },
  {
    title: 'Help',
    icon: 'phone',
    path: '/help',
  },

]

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavLink,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      NavLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>
