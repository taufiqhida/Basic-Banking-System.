const rupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(value);
}

const myDisplayerSaldo = (value) => {
    value = rupiah(value);

    document.getElementById("saldo").innerHTML = value;
}

class bankAccount {
    constructor() {
        this.saldo =0;
    }
    deposit(ammount){
        return new Promise((resolve, reject)=>{
            ammount = +ammount;
            if(isNaN(ammount)){return reject("Bukan Angka");}
            if(ammount<0){return  reject("Usahakan Lebih dari 0");}
            setTimeout(()=> {
                this.saldo += ammount;
                myDisplayerSaldo(this.saldo)
            resolve({
                message: "Deposit Berhasil",
                ammount : ammount,
                saldo: this.saldo,
            });
            },2000);
        });
    }
    withDraw(ammount){
        return new Promise((resolve, reject)=>{

            ammount = +ammount;
            if(isNaN(ammount)){return reject("Bukan Angka");}
            if(ammount<0){return  reject("Usahakan Lebih dari 0");}
            setTimeout(()=> {
                this.saldo -= ammount;
                myDisplayerSaldo(this.saldo)
                resolve({
                    message: "withDraw Berhasil",
                    ammount : ammount,
                    saldo: this.saldo,
                });
            },2000);
        });
    }
}
