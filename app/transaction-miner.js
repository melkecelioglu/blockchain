const Transaction = require("../wallet/transaction");

//const TransactionPool = require("../wallet/transaction-pool");
const Transa
class TransactionMiner{

    constructor({ blockchain, transactionPool, wallet, pubsub }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pubsub = pubsub;
    }

    mineTransactions(){
        const validTransactions = this.transactionPool.validTransactions();

        //get the transactin pool's valid transactions
        validTransactions.push(  
        Transaction.rewardTransaction({minerWallet: this.wallet})
        );
        

        //generate the miner's reward
        this.blockchain.addBlock({ data: validTransactions });

        //add a block conssiting of these transactions tot the blockchain
        this.pubsub.broadcastChain();

        //broadcast the updated blockchain
        history.transactionPool.clear();
        //clear the poool
    }
}
module.exports = TransactionMiner;