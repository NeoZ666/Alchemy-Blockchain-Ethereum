class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.input = [...inputUTXOs];
        this.output = [...outputUTXOs]
    }
    execute() {
        if(this.input.some((x)=>(x.spent))) {
            throw error("Can't double spend");
        }
        let total = 0;
        this.input.forEach((x) => {
            total += x.amount;
        })
        const inputTotal = total;
        total = 0;
        this.output.forEach((x)=>{
            total += x.amount;
        })
        if(inputTotal < total) {
            throw new error("Insuffficient balance")
        }
    }
}

module.exports = Transaction;