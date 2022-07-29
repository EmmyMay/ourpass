<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { getInvoice } from 'src/services/invoiceService'
import { getAccount } from 'src/services/accountService'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    onMounted(() => {
      getInvoice()
      getAccount()
    })
  }
})
</script>
