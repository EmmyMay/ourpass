<template>
  <q-page-container class="Invoice column items-center q-pl-md-xl">
    <q-page>
      <InvoiceBreadcrumb></InvoiceBreadcrumb>
      <section class="bg-white rounded-borders">

      </section>
    </q-page>
  </q-page-container>
</template>

<script>
import InvoiceBreadcrumb from "../components/InvoiceBreadcrumb.vue";

export default {
  components: { InvoiceBreadcrumb }
}
</script>

<style scoped>
</style>
