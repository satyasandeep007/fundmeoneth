export default (myaccount, provider) => {
  const endBlockNumber = provider.blockNumber();
  const startBlockNumber = endBlockNumber - 1000;

  const toTransactions = [];
  const fromTransactions = [];

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = provider.getBlockWithTransactions(i);
    if (block != null && block.transactions != null) {
      block.transactions.forEach(function (e) {
        if (myaccount == e.to) {
          toTransactions.push(e);
        }
        if (myaccount == e.from) {
          fromTransactions.push(e);
        }
      });
    }
  }

  return { toTransactions, fromTransactions };
};
