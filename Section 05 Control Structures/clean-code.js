main();

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  try {
    processTransactions(transactions);
  } catch (error) {
    showErrorMessage(error.message, error.item);
  }
}

function processTransactions(transactions) {
  validateTransactions(transactions);
  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function validateTransactions(transactions) {
  if (isEmpty(transactions)) {
    const error = new Error("No transactions provided!");
    throw error;
  }
}

function isEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function showErrorMessage(message, item = {}) {
  console.log(message);
  console.log(item);
}

function processTransaction(transaction) {
  try {
    validateTransaction(transaction);
    processWithProcessor(transaction);
  } catch (error) {
    showErrorMessage(error.message, error.item);
  }
}

function processWithProcessor(transaction) {
  const processors = getTransactionProcessor(transaction);

  if (isPayment(transaction)) {
    processors.payment(transaction);
  } else {
    processors.refund(transaction);
  }
}

function getTransactionProcessor(transaction) {
  let processors = {
    payment: null,
    refund: null,
  };
  if (useTransactionMethod(transaction, "CREDIT_CARD")) {
    processors.payment = processCreditCardPayment;
    processors.refund = processCreditCardRefund;
  } else if (useTransactionMethod(transaction, "PAYPAL")) {
    processors.payment = processPayPalPayment;
    processors.refund = processPayPalRefund;
  } else if (useTransactionMethod(transaction, "PLAN")) {
    processors.payment = processPlanPayment;
    processors.refund = processPlanRefund;
  }
  return processors;
}

function isOpen(transaction) {
  return transaction.status === "OPEN";
}

function validateTransaction(transaction) {
  if (!isOpen(transaction)) {
    const error = new Error("Invalid transaction type!");
    throw error;
  }

  if (!isPayment(transaction) && !isRefund(transaction)) {
    const error = new Error("Invalid transaction type!");
    error.item = transaction;
    throw error;
  }
}

function useTransactionMethod(transaction, method) {
  return transaction.method === method;
}

function isPayment(transaction) {
  return transaction.type === "PAYMENT";
}

function isRefund(transaction) {
  return transaction.type === "REFUND";
}

function processCreditCardPayment(transaction) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    "Processing credit card refund for amount: " + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log("Processing PayPal payment for amount: " + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log("Processing PayPal refund for amount: " + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log("Processing plan payment for amount: " + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log("Processing plan refund for amount: " + transaction.amount);
}
