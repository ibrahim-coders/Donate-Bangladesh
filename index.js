function totalAmount() {
  return parseFloat(document.getElementById('total-amount').innerText);
}

document.getElementById('noakhali-btn').addEventListener('click', function () {
  const noakhaliDonate = parseFloat(
    document.getElementById('noakhali-donate').value
  );
 
  const noakhaliAmount = parseFloat(
    document.getElementById('noakhali-amount').innerText
  );

  const noakhaliTotalAmount = noakhaliAmount - noakhaliDonate;

  document.getElementById('noakhali-amount').innerText =
    noakhaliTotalAmount.toFixed(2);

  const currentTotalAmount = totalAmount();
  const newTotalAmount = currentTotalAmount + noakhaliDonate;

  document.getElementById('total-amount').innerText = newTotalAmount.toFixed(2);
   
});
