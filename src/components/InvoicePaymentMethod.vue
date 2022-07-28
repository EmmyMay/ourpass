<template>
  <div class="row  q-pa-md">
    <div class="heading row justify-between ">
      <h6 class="q-ma-none q-mt-md  text-weight-bold q-mb-md">Payment Method</h6>
      <q-btn color="primary" flat class="text-weight-bold" label="Select Payment" />
    </div>
    <div class="min-w-full bg-custom-two rounded q-px-lg">
      <div class="row min-w-full items-center justify-between">
        <h6 class="q-ma-none text-subtitle1 text-weight-bold q-mb-md">Wire Transfer</h6>
        <img width="150" src="src/assets/wiselogo.webp" alt="Logo for payment processor, Wise.">
      </div>
      <div class="account__details">
        <dl class="custom-fit row items-center">
          <dt class="q-mr-xs text-common">Account Name:</dt>
          <dd class="text-weight-bold"> Barly Vallendito </dd>
        </dl>
        <dl class="custom-fit row items-center">
          <dt class="q-mr-xs text-common">Account Number</dt>
          <dd class="text-weight-bold"> 9700 0023 4200 2900 </dd>
        </dl>
        <dl class="custom-fit row items-center">
          <dt class="q-mr-xs text-common">Routing Number:</dt>
          <dd class="text-weight-bold"> 084009519 </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.border {
  border: solid red 3px;
}

.account__details {
  position: relative;
  bottom: 2rem;
}

.heading {
  min-width: 100%;
}
</style>
