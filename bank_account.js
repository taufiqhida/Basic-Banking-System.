let saldo = 10000;

document.getElementById(`saldo`).textContent= saldo;

const updateSaldo = (saldo)=>{
    document.getElementById(`saldo`).textContent= saldo;
}

const tambahSaldo = ()=>{
    let input = parseFloat(prompt("Masukkan Bilangan Bulat"));
    if(isNaN(input)){
        window.alert("Silahkan Coba lagi haap masukan bilangan bulat")
    }else{
        saldo += input;
        updateSaldo(saldo)
    }
}
const kurangiSaldo = ()=>{
    let input = parseFloat(prompt("Masukkan Bilangan Bulat"));
    if(isNaN(input)){
        window.alert("Silahkan Coba lagi haap masukan bilangan bulat")
    }else {
        if(saldo<input){
            window.alert("Saldo Kurang")
        }else{
            saldo -= input;
            updateSaldo(saldo)
        }
    }

}