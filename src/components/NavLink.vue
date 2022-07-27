<template>
  <!-- Wrapper classes makes it easier to debug elements in devtools -->
  <div class="Navlink">
    <q-item clickable :to="path" exact>
      <q-item-section class="text-common" v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      default: '/',
    },

    icon: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
</style>
