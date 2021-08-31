const uuid = require('uuid/v1');

class Transaction {
    constructor({senderWallet, receipent, amount}) {
        this.id = uuid();
        this.outputMap = this.createOutPutMap({ senderWallet, receipent, amount});
    }
    createOutPutMap({ senderWallet, receipent, amount}) {
        const outputMap = {};

        outputMap[receipent] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;

        return outputMap;
    }
}
module.exports = Transaction;