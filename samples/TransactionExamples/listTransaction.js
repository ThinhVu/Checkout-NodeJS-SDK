'use strict';

/**
 * PayPal Node JS SDK dependency
 */
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

/**
 * PayPal HTTP client dependency
 */
const payPalClient = require('../Common/payPalClient');

async function listTransaction(debug = true) {
  const query = {
    start_date: '2020-05-01T00:00:00-0700',
    end_date: '2020-05-30T23:59:59-0700',
  };
  const request = new checkoutNodeJssdk.transactions.TransactionsGetRequest(query);
  const response = await payPalClient.client().execute(request);
  if (debug) {
    console.log(response)
  }
}

module.exporst = {
  listTransaction: listTransaction
};
