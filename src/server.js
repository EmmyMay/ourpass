import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      invoice: Model,
      account: Model,
    },

    seeds(server) {
      server.create('invoice', {
        name: 'Dipa House',
        email: 'hello@dipahouse.com',
        location: {
          street: 'Ijen Boulevard Street 101',
          cityWithPostCode: 'Malang City, 6515',
          country: 'East Java, Indonesia',
        },
        invoice: {
          invoiceNumber: 'INV-2022-010',
          dateIssued: '11 Jan 2022',
          dueDate: '18 Jan 2022',
          billedTo: 'Zaky Grizzly',
          companyName: 'Moonlight Agency LTD',
          location: 'New York, USA',
        },
      })
      server.create('account', {
        accountName: 'Barly Vallendito',
        accountNumber: '9700 0023 4200 2900',
        routingNumber: '084005919',
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/invoices', schema => {
        return schema.invoices.all()
      })
      this.get('/accounts', schema => {
        return schema.accounts.all()
      })
    },
  })

  return server
}
