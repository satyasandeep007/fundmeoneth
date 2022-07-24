export const getTransactions = async (myaccount, provider) => {
  const endBlockNumber = await provider.getBlockNumber();
  const startBlockNumber = 0;
  const toTransactions = [];
  const fromTransactions = [];
  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = await provider.getBlockWithTransactions(i);
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
