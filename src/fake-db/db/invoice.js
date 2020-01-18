import Mock from "../mock";
import shortid from "shortid";

const invoiceDB = {
  invoices: [
    {
      id: shortid.generate(),
      orderNo: "232",
      status: "pending",
      date: new Date(),
      currency: "$",
      vat: 10,
      buyer: {
        name: "Schoen, Conn and Mills",
        address:
          "rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170"
      },
      seller: {
        name: "UI Lib",
        address:
          "sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170"
      },
      item: [
        {
          name: "Item 1",
          unit: 9,
          price: 200
        },
        {
          name: "Item 2",
          unit: 15,
          price: 300
        }
      ]
    },
    {
      id: shortid.generate(),
      orderNo: "233",
      status: "processing",
      date: new Date(),
      currency: "$",
      vat: 10,
      buyer: {
        name: "New Age Inc.",
        address:
          "this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153"
      },
      seller: {
        name: "UI Lib",
        address:
          "sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170"
      },
      item: [
        {
          name: "Item 1",
          unit: 3,
          price: 2000
        },
        {
          name: "Item 2",
          unit: 2,
          price: 4000
        }
      ]
    },
    {
      id: shortid.generate(),
      orderNo: "234",
      status: "delivered",
      date: new Date(),
      currency: "$",
      vat: 10,
      buyer: {
        name: "Predovic, Schowalter and Haag",
        address:
          "linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999"
      },
      seller: {
        name: "UI Lib",
        address:
          "sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170"
      },
      item: [
        {
          name: "Item 1",
          unit: 5,
          price: 1000
        },
        {
          name: "Item 2",
          unit: 2,
          price: 4000
        }
      ]
    },
    {
      id: shortid.generate(),
      orderNo: "235",
      status: "delivered",
      date: new Date(),
      currency: "$",
      vat: 10,
      buyer: {
        name: "Hane PLC",
        address:
          "nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131"
      },
      seller: {
        name: "UI Lib",
        address:
          "sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170"
      },
      item: [
        {
          name: "Item 1",
          unit: 3,
          price: 4000
        },
        {
          name: "Item 2",
          unit: 1,
          price: 5000
        }
      ]
    }
  ]
};

Mock.onGet("/api/invoices/all").reply(config => {
  return [200, invoiceDB.invoices];
});

Mock.onGet("/api/invoices").reply(config => {
  const id = config.data;
  const response = invoiceDB.invoices.find(invoice => invoice.id === id);
  return [200, response];
});

Mock.onPost("/api/invoices/delete").reply(config => {
  let invoice = JSON.parse(config.data);
  let index = { i: 0 };
  invoiceDB.invoices.forEach(element => {
    if (element.id === invoice.id) {
      return [200, invoiceDB.invoices.splice(index.i, 1)];
    }
    index.i++;
  });
  return [200, invoiceDB.invoices];
});

Mock.onPost("/api/invoices/update").reply(config => {
  let invoice = JSON.parse(config.data);
  let index = { i: 0 };
  invoiceDB.invoices.forEach(element => {
    if (element.id === invoice.id) {
      invoiceDB.invoices[index.i] = invoice;
      return [200, invoiceDB.invoices];
    }
    index.i++;
  });
  return [200, invoiceDB.invoices];
});

Mock.onPost("/api/invoices/add").reply(config => {
  let invoice = JSON.parse(config.data);
  invoiceDB.invoices.push(invoice);
  return [200, invoiceDB.invoices];
});
