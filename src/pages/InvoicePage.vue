<template>

  <div class="invoice__page q-pa-lg">
    <InvoiceBreadcrumb class="q-mb-sm"></InvoiceBreadcrumb>
    <div class="bg-white rounded q-px-lg q-pt-xs">


      <div class="company_info q-py-lg q-px-sm  row-sm column items-center justify-sm-between">
        <div class="row ">
          <q-icon style="color:#397cf9;" size="3rem" name="water_drop"></q-icon>
          <div>
            <h5 class="q-pa-none q-ma-none text-weight-bolder text-subtitle1">Dipa Inhouse</h5>
            <address>
              <a class="text-common text-subtitle2" href="mailto:hello@dipainhouse.com">hello@dipainhouse.com</a>
            </address>
          </div>
        </div>
        <address class="q-mt-lg text-common text-subtitle2 text-weight-medium">
          Ijen Boulevard Street 101 <br>
          Malang City, 65115 <br>
          East Java, Indonesia
        </address>
      </div>

      <InvoiceCard class="q-mt-xs"></InvoiceCard>
      <InvoiceTable class="q-mt-lg"></InvoiceTable>
    </div>
  </div>

</template>

<script>
import InvoiceBreadcrumb from "../components/InvoiceBreadcrumb.vue";
import InvoiceCard from "src/components/InvoiceCard.vue";
import InvoiceTable from "src/components/InvoiceTable.vue";
import { useStore } from 'vuex'
import { onMounted } from "vue";



export default {
  components: { InvoiceBreadcrumb, InvoiceCard, InvoiceTable },

  setup() {
    const store = useStore()

    const getInvoices = () => store.dispatch('invoice/getInvoice')
    onMounted(async () => {
      getInvoices()
    })

    return {

    }
  }
}
</script>

<style scoped>
address a {
  text-decoration: none;
}

@media (max-width: 1023px) {

  .company_info {
    min-width: 100%;
  }
}

@media (min-width: 1024px) {
  .invoice__page {
    max-width: 80%;
    margin-left: auto;
    margin-right: 12rem;
  }

}

@media (min-width: 2000px) {
  .invoice__page {
    max-width: 60%;
    margin: 0 auto;
  }

}

@media (max-width: 450px) {
  .company_info {
    align-items: flex-start;
  }
}
</style>
