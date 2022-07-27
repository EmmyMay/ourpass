<template>
  <q-page-container class="Invoice column items-center  q-pl-md-xl ">
    <q-page class=" q-pa-lg">
      <InvoiceBreadcrumb></InvoiceBreadcrumb>
      <section class=" row column items-center bg-white q-py-lg q-px-sm q-mt-sm rounded">
        <div class="company_info row justify-between">
          <div class=" row">
            <q-icon style="color:#397cf9;" size="3rem" name="water_drop"></q-icon>
            <div>
              <h5 class="q-pa-none q-ma-none">Dipa Inhouse</h5>
              <address>
                <a class="text-common text-subtitle2" href="mailto:hello@dipainhouse.com">hello@dipainhouse.com</a>
              </address>
            </div>
          </div>
          <address class="text-common text-subtitle1 text-weight-medium">
            Ijen Boulevard Street 101 <br>
            Malang City, 65115 <br>
            East Java, Indonesia
          </address>
        </div>
        <InvoiceCard class="q-mt-lg"></InvoiceCard>
      </section>
    </q-page>
  </q-page-container>
</template>

<script>
import InvoiceBreadcrumb from "../components/InvoiceBreadcrumb.vue";
import InvoiceCard from "src/components/InvoiceCard.vue";

export default {
  components: { InvoiceBreadcrumb, InvoiceCard }
}
</script>

<style scoped>
address a {
  text-decoration: none;
}

@media (max-width: 1023px) {
  .q-page {
    min-width: 100%;
  }


  .company_info {
    min-width: 100%;
  }
}

@media (min-width: 1024px) {
  .q-page {
    min-width: 70%;
  }
}
</style>
