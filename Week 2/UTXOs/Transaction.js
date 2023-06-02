class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.input = [...inputUTXOs];
        this.output = [...outputUTXOs]
    }
    execute() {
        if(this.input.some((x)=>(x.spent))) {
            throw error("Can't double spend");
        }
    }
}

module.exports = Transaction;