/*
1. add event listener to deposit button
2. et deposit amount from the deposit input field
*/
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountSteing = depositField.value;
    // console.log(newDepositAmountSteing);
    const newDepositAount = parseFloat(newDepositAmountSteing);

    depositField.value = '';
    const depositeTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const newDepositTotal = previousDepositTotal + newDepositAount;
    depositeTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousTotalAmount + newDepositAount;
    balanceTotalElement.innerText = newBalanceTotal;

})