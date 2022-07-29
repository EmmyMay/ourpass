<template>
  <div class="InvoiceCard row-sm justify-sm-between column items-center  q-px-xl q-py-md bg-custom text-white rounded">
    <div>
      <h6 class="q-ma-none text-subtitle2 q-mb-md">Invoice Number</h6>

      <p>{{ invoice?.invoiceNumber }}</p>

      <dl class="custom-fit row items-center ">
        <dt class="q-mr-xs text-common">Issued Date:</dt>
        <dd> <time datetime="2022-01-11"> {{ invoice?.dateIssued }} </time> </dd>
      </dl>
      <dl class="custom-fit row items-center">
        <dt class="q-mr-xs text-common">Due Date:</dt>
        <dd> <time datetime="2022-01-18"> {{ invoice?.dueDate }} </time> </dd>
      </dl>
    </div>
    <div class="column q-mt-lg q-mt-sm-none items-sm-end">
      <h6 class="q-ma-none text-subtitle2 q-mb-md">Billed to</h6>

      <p>{{ invoice?.billedTo }}</p>

      <div class="custom-fit row items-center">
        <p class="q-mr-xs">{{ invoice?.companyName }}</p>

      </div>
      <div class="custom-fit row items-center">
        <p class="q-mr-xs">{{ invoice?.location }}</p>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    invoice: {
      type: Object,
    },
  },
}
</script>

<style scoped>
@media (max-width: 450px) {
  .InvoiceCard {
    align-items: flex-start;
  }
}
</style>
