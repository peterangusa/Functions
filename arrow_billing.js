
const bill  = (transactionCharge, amountTendered) => {
//This is the percentage that determines the transaction charge

console.log("This is what the billed amount is (less transaction charges);");
return (amountTendered-transactionCharge*amountTendered);

}

console.log(bill(.025,10000));
