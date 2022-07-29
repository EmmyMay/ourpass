<template>
  <Suspense>
    <template #default>
      <div class="invoice__paymentmethod row  q-pa-md">
        <div class="heading gt-xs row justify-between ">
          <h6 class="q-ma-none q-mt-md  text-weight-bold q-mb-md">Payment Method</h6>
          <q-btn color="primary" flat class="text-weight-bold" label="Select Payment" />
        </div>
        <div class="heading lt-sm row justify-between ">
          <h6 class="q-ma-none q-mt-md text-body1  text-weight-bold q-mb-xs">Payment Method</h6>
          <q-btn color="primary" flat class="text-weight-bold text-caption q-mt-md" label="Select Payment" />
        </div>
        <div class=" details__container min-w-full bg-custom-two rounded q-px-lg">
          <div class="row min-w-full items-center justify-between">
            <h6 class="q-ma-none gt-xs text-subtitle1 text-weight-bold q-mb-md">Wire Transfer</h6>
            <h6 class="q-ma-none lt-sm text-body2 text-weight-bold q-mb-md">Wire Transfer</h6>
            <img class="gt-xs q-mb-md" width="120" src="src/assets/wiselogo.webp"
              alt="Logo for payment processor, Wise.">
            <img class="lt-sm q-mb-md" width="90" src="src/assets/wiselogo.webp"
              alt="Logo for payment processor, Wise.">
          </div>
          <div class="account__details">
            <dl class="custom-fit row gt-xs items-center">
              <dt class="q-mr-xs text-common">Account Name:</dt>
              <dd class="text-weight-bold"> {{ account.accountName }} </dd>
            </dl>
            <dl class=" lt-sm custom-fit row items-center">
              <dt class="q-mr-xs text-common text-caption">Account Name:</dt>
              <dd class="text-weight-bold text-caption"> {{ account.accountName }} </dd>
            </dl>
            <dl class=" gt-xs custom-fit row items-center">
              <dt class="q-mr-xs text-common">Account Number</dt>
              <dd class="text-weight-bold "> {{ account.accountNumber }} </dd>
            </dl>
            <dl class=" lt-sm custom-fit row items-center">
              <dt class="q-mr-xs text-common text-caption">Account Number</dt>
              <dd class="text-weight-bold text-caption"> {{ account.accountNumber }} </dd>
            </dl>
            <dl class="custom-fit gt-xs row items-center">
              <dt class="q-mr-xs text-common">Routing Number:</dt>
              <dd class="text-weight-bold"> {{ account.routingNumber }} </dd>
            </dl>
            <dl class="custom-fit lt-sm row items-center">
              <dt class="q-mr-xs text-common text-caption">Routing Number:</dt>
              <dd class="text-weight-bold text-caption"> {{ account.routingNumber }} </dd>
            </dl>
          </div>
        </div>
      </div>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from "vue";
export default {
  async setup() {
    const store = useStore()
    const getAccounts = () => store.dispatch('account/getAccount')
    const account = computed(() => {
      return store.getters['account/getAccount']
    })
    await getAccounts()

    return {
      account
    }
  }
}
</script>

<style scoped>
@media (max-width: 450px) {
  .details__container {
    min-width: 100%;
  }
}

.account__details {
  position: relative;
  bottom: 2rem;
}

.heading {
  min-width: 100%;
}
</style>
