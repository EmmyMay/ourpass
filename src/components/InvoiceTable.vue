<template>

  <div>
    <div class="table__header row justify-between">
      <div class="gt-xs">
        <h6 class="q-ma-none q-mb-xs">Item Detail</h6>
        <p class=" q-ma-none text-common">Type Item for Hours Item</p>
      </div>
      <div class="lt-sm">
        <h6 class="q-ma-none text-body2 q-mb-xs">Item Detail</h6>
        <p class="subtitle q-ma-none text-caption text-common">Type Item for Hours Item</p>
      </div>
      <q-btn label="Customize" class=" gt-xs q-py-sm-sm text-weight-bold" size="1rem"
        style="border-radius: .8rem; text-transform: capitalize;" text-color="primary" unelevated color="positive"
        icon="sort"></q-btn>
      <q-btn label="Customize" class="cta-customize lt-sm text-weight-bold" size=".7rem"
        style="border-radius: .8rem; text-transform: capitalize;" text-color="primary" unelevated color="positive"
        icon="sort"></q-btn>
    </div>
    <q-table flat class="q-mt-lg" :rows="rowData" :hidePagination="true" :columns="cols" row-key="name">
      <template #header-cell="props">
        <q-th class="text-common text-subtitle2" :props="props">
          {{ props.col.label }}
        </q-th>
      </template>
      <template #body-cell-itemName="props">
        <q-td :props="props">
          <q-input dense v-model="rowData[props.rowIndex].itemName" label="Description" rounded>
          </q-input>
        </q-td>
      </template>
      <template #body-cell-hours="props">
        <q-td :props="props">
          <q-input type="number" @change="updateLineTotal(props.rowIndex)" dense v-model="rowData[props.rowIndex].hours"
            :label="props.col.label" rounded></q-input>
        </q-td>
      </template>
      <template #body-cell-ratePerHr="props">
        <q-td :props="props">
          <q-input type="number" @change="updateLineTotal(props.rowIndex)" v-model="rowData[props.rowIndex].ratePerHr"
            prefix="$" dense :label="props.col.label" rounded>
          </q-input>
        </q-td>
      </template>
      <template #body-cell-tax="props">
        <q-td :props="props">
          <q-input type="number" @change="sumTaxes()" v-model="rowData[props.rowIndex].tax" prefix="$" dense
            :label="props.col.label" rounded>
          </q-input>
        </q-td>
      </template>
      <template #body-cell-lineTotal="props">
        <q-td :props="props">
          <q-input type="number" v-model="rowData[props.rowIndex].lineTotal" prefix="$" dense :label="props.col.label"
            rounded>
          </q-input>
        </q-td>
      </template>
      <template #body-cell-action="props">
        <q-td v-if="rowData[props.rowIndex].action" :props="props">
          <q-btn @click="addNewField" round class="text-white" color="primary" icon="add" />
        </q-td>
      </template>
    </q-table>
    <div class="row-md items-center">
      <InvoicePaymentMethod class="col-5"></InvoicePaymentMethod>
      <q-space></q-space>
      <InvoiceSummary class="col-5" :report="report"></InvoiceSummary>
    </div>
  </div>

</template>

<script>
const columns = [
  {
    name: 'itemName',
    label: 'Item Name',
    align: 'left',
    field: 'itemName',
    format: val => `${val}`,

  },
  { name: 'hours', align: 'center', label: 'Hours', field: 'hours', },
  { name: 'ratePerHr', label: 'Rate/hr', field: 'ratePerHr', },
  { name: 'tax', label: 'Tax', field: 'tax' },
  { name: 'lineTotal', label: 'Line Total', field: 'lineTotal' },
  { name: 'action', label: '', field: 'action' },

]

const rows = [
  {
    itemName: '',
    hours: '',
    ratePerHr: '',
    tax: '',
    lineTotal: '',
    action: true,
  },

]
import { ref } from 'vue'
import InvoicePaymentMethod from 'src/components/InvoicePaymentMethod.vue'
import InvoiceSummary from 'src/components/InvoiceSummary.vue'
export default {
  components: {
    InvoicePaymentMethod,
    InvoiceSummary
  },
  setup() {
    const cols = ref(columns)
    const rowData = ref(rows)
    const subTotal = ref(0)
    const tax = ref(0)

    const subTotalSum = () => {
      subTotal.value = 0
      rowData.value.forEach(row => {
        if (row.lineTotal) {
          subTotal.value += +row.lineTotal
        }
      });
    }
    // updating the taxes via the change event instead of using a watcher
    const sumTaxes = () => {
      tax.value = 0
      rowData.value.forEach(row => {
        if (row.tax) {
          tax.value += +row.tax
        }
      });
    }

    const updateLineTotal = (rowIndex) => {
      if (rowData.value[rowIndex].hours && rowData.value[rowIndex].ratePerHr) {
        rowData.value[rowIndex].lineTotal = +rowData.value[rowIndex].hours * +rowData.value[rowIndex].ratePerHr
        subTotalSum()
      }
    }

    const addNewField = () => {
      const newField = { itemName: '', hours: '', ratePerHr: '', tax: '', lineTotal: '' }
      rowData.value.push(newField)
    }

    const report = {
      subTotal,
      tax
    }

    return {
      cols,
      rowData,
      updateLineTotal,
      sumTaxes,
      addNewField,
      report,

    }
  }
}
</script>

<style scoped>
@media (max-width: 375px) {
  .cta-customize {
    max-height: 3rem;
    line-height: 1.3em;
  }

  .subtitle {
    max-width: 4rem;
  }
}
</style>
