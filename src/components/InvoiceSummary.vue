<template>
  <div class="invoicesummary border q-pa-md">
    <dl class=" row justify-between items-center">
      <dt class="q-mr-xs text-weight-bold">Sub Total</dt>
      <!-- Could be improved with a formatter package -->
      <dd class="text-weight-bold"> ${{ report.subTotal }}.00 </dd>
    </dl>
    <dl class=" row justify-between items-center">
      <dt class="q-mr-xs text-common">Discount</dt>
      <dd class="text-weight-bold"> $0.00 </dd>
    </dl>
    <dl class=" row justify-between items-center">
      <dt class="q-mr-xs text-common">Total Tax</dt>
      <dd class="text-weight-bold"> ${{ report.tax }}.00 </dd>
    </dl>
    <q-separator></q-separator>
    <dl class=" row justify-between items-center">
      <dt class="q-mr-xs text-common text-subtitle1">Total Amount</dt>
      <dd class="text-weight-bold"> ${{ total }}.00 </dd>
    </dl>

  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    report: {
      type: Object,
    },
  },

  setup(props) {
    const total = ref(0)

    watch(() => props.report, (newValue) => {
      total.value = [newValue.subTotal.value, newValue.tax.value].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
    }, { deep: true })

    return {
      total
    }
  }
}
</script>

<style scoped>
@media (min-width: 600px) {
  .invoicesummary {
    max-width: 80%;
  }
}
</style>
