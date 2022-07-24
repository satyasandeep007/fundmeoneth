export default (myaccount, startBlockNumber, endBlockNumber, provider) => {
  if (endBlockNumber == null) {
    endBlockNumber = provider.blockNumber();
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
  }

  const transactions = [];

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = provider.getBlock(i, true);
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
