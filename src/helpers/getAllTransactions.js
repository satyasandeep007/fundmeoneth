export default (myaccount, provider) => {
  const endBlockNumber = provider.blockNumber();
  const startBlockNumber = endBlockNumber - 1000;

  const transactions = [];

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = provider.getBlockWithTransactions(i);
    if (block != null && block.transactions != null) {
      block.transactions.forEach(function (e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          transactions.push(e);
        }
      });
    }
  }

  return transactions;
};
