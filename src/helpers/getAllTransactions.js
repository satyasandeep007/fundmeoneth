export const getTransactions = async (myaccount, provider) => {
  const endBlockNumber = await provider.getBlockNumber();
  const startBlockNumber = 0;
  const toTransactions = [];
  const fromTransactions = [];
  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = await provider.getBlockWithTransactions(i);
    if (block != null && block.transactions != null) {
      block.transactions.forEach(function (e) {
        if (myaccount == e.to && toTransactions.length< 5) {
          toTransactions.push(e);
        }
        if (myaccount == e.from && fromTransactions.length< 5) {
          fromTransactions.push(e);
        }

        if( toTransactions.length>=5 && fromTransactions.length>=5){
          return { toTransactions, fromTransactions };
        }
      });
    }
  }

  return { toTransactions, fromTransactions };
};
