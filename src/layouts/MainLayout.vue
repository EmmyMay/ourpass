<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white q-py-lg q-py-md-none row-md justify-md-start">
        <q-btn class="text-primary lt-md" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="logo text-primary col max-custom-fit"> Paypay </q-toolbar-title>
        <div class="flex sth">
          <NavLink class=" gt-sm" v-for="(link, i) in NavLinks" :key="i" v-bind="link" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="lt-md" v-model="leftDrawerOpen">
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

<style scoped>
@media (min-width: 1024px) {}



.sth {
  margin: 0 auto;
}
</style>
