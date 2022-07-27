<template>
  <!-- Wrapper classes makes it easier to debug elements in devtools -->
  <div class="Navlink">
    <q-item class="item q-py-md-lg  custom-fit" clickable :to="path" exact>
      <q-item-section class="text-common q-px-none" v-if="icon" avatar>
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

<style scoped>
.q-item__section--avatar {
  min-width: 2.5rem;
}

.item {
  margin-right: 3rem;
}
</style>
