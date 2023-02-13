// Deposit =============================

document.getElementById("btn-deposit").addEventListener("click", function () {

    document.getElementById("enough-amount").style.display = 'none';
    const newDepositAmount = getInputFieldValueById("deposit-field");
    if (newDepositAmount > 0) {
        const previousDepositTotal = getElementValueById('deposit-total');
        const newDepositTotal = newDepositAmount + previousDepositTotal;
        setTextElementValueById('deposit-total', newDepositTotal);

        const previousBalanceTotal = getElementValueById('balance-total');
        const newBalanceTotal = previousBalanceTotal + newDepositAmount; setTextElementValueById('balance-total', newBalanceTotal);

        document.getElementById("positive-amount").style.display = 'none';
    }
    else {
        document.getElementById("positive-amount").style.display = 'block';
    }



});


// Withdraw ====================================

document.getElementById("btn-withdraw").addEventListener('click', function () {
    const newWithdrawtAmount = getInputFieldValueById("withdraw-field")
    if (newWithdrawtAmount > 0) {
        const previousWithdrawTotal = getElementValueById('withdraw-total');
        const previousBalanceTotal = getElementValueById('balance-total');
        if (newWithdrawtAmount < previousBalanceTotal) {
        const newWithdrawTotal = newWithdrawtAmount + previousWithdrawTotal;
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        const previousBalanceTotal = getElementValueById('balance-total');

            const newBalanceTotal = previousBalanceTotal - newWithdrawtAmount; setTextElementValueById('balance-total', newBalanceTotal);

            document.getElementById("enough-amount").style.display = "none";
        }
        else {
            document.getElementById("enough-amount").style.display = "block";
            
        }

        document.getElementById("positive-amount").style.display = 'none';
    }

    else {
        document.getElementById("positive-amount").style.display = 'block';
    }
})









