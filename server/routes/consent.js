const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const dateNow = new Date();
const expiry = new Date(dateNow.getTime() + 600000);

router.post("/createconsent", async (req, res) => {
  try {
    const {
      loanamount,
      number,
      consentMode,
      consentTypes,
      FIDataRangefrom,
      FIDataRangeto,
      Frequencyvalue,
      Frequencyunit,
    } = req.body;
    const consentobj = {
      Detail: {
        consentStart: dateNow.toISOString(),
        consentExpiry: expiry.toISOString(),
        Customer: {
          id: number + "@onemoney",
        },
        FIDataRange: {
          from: new Date(FIDataRangefrom).toISOString(),
          to: new Date(FIDataRangeto).toISOString(),
        },
        consentMode: consentMode,
        consentTypes: [consentTypes],
        fetchType: "PERIODIC",
        Frequency: {
          value: Frequencyvalue,
          unit: Frequencyunit,
        },
        DataFilter: [
          {
            type: "TRANSACTIONAMOUNT",
            value: loanamount,
            operator: ">=",
          },
        ],
        DataLife: {
          value: 1,
          unit: "MONTH",
        },
        DataConsumer: {
          id: "setu-fiu-id",
        },
        Purpose: {
          Category: {
            type: "string",
          },
          code: "101",
          text: "Loan underwriting",
          refUri: "https://api.rebit.org.in/aa/purpose/101.xml",
        },
        fiTypes: ["DEPOSIT"],
      },
      redirectUrl: "http://localhost:3000/dashboard",
    };
    //console.log(consentobj);
    const response = await fetch(`https://fiu-uat.setu.co/consents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": "04504f40-0ec0-4f4a-b3cf-65fe2353787f",
        "x-client-secret": "498e05ea-2790-475a-8fb6-47fdfb4b2585",
      },
      body: JSON.stringify(consentobj),
    });
    const json = await response.json();
    console.log(json);
    res.json(json);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/getconsent/:id", async (req, res) => {
  try {
    //check for all pending object id if completed then update
    const response = await fetch(
      `https://fiu-uat.setu.co/consents/${req.params.id}`,
      {
        method: "GET",
        headers: {
          "x-client-id": "04504f40-0ec0-4f4a-b3cf-65fe2353787f",
          "x-client-secret": "498e05ea-2790-475a-8fb6-47fdfb4b2585",
        },
      }
    );
    const json = await response.json();
    //console.log(json);
    res.json(json);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/createconsent", async (req, res) => {
  try {
    const {
      id,
      Detail
    } = req.body;
    const obj = {
      consentId:id,
      DataRange:Detail.FIDataRange,
      format: "json"
    };
    console.log(obj);
    const response = await fetch(`https://fiu-uat.setu.co/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": "04504f40-0ec0-4f4a-b3cf-65fe2353787f",
        "x-client-secret": "498e05ea-2790-475a-8fb6-47fdfb4b2585",
      },
      body: JSON.stringify(obj),
    });
    const json = await response.json();
    console.log(json);
    res.json(json);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
module.exports = router;
