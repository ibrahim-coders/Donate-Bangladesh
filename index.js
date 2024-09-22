function totalAmount(amount) {
  return parseFloat(document.getElementById(amount).innerText);
}

document.getElementById('noakhali-btn').addEventListener('click', function () {
  const noakhaliDonate = parseFloat(
    document.getElementById('noakhali-donate').value
  );
  document.getElementById('noakhali-donate').value = '';

  const noakhaliAmount = parseFloat(
    document.getElementById('noakhali-amount').innerText
  );

  const noakhaliTotalAmount = noakhaliAmount + noakhaliDonate;
  document.getElementById('noakhali-amount').innerText =
    noakhaliTotalAmount.toFixed(2);

  const currentTotalAmount = totalAmount('total-amount');
  const newTotalAmount = currentTotalAmount - noakhaliDonate;
  document.getElementById('total-amount').innerText = newTotalAmount.toFixed(2);

  // showModal
  document.getElementById('my_modal_1').showModal();
});

// -- Donate feni -->

document.getElementById('feni-btn').addEventListener('click', function () {
  const feniDonate = parseFloat(document.getElementById('feni-donate').value);
  document.getElementById('feni-donate').value = '';

  const feniAmount = parseFloat(
    document.getElementById('feni-amount').innerText
  );
  const feniTotalAmount = feniAmount + feniDonate;
  document.getElementById('feni-amount').innerText = feniTotalAmount.toFixed(2);
  const currentTotalAmount = totalAmount('total-amount');
  const newTotalAmount = currentTotalAmount - feniDonate;
  document.getElementById('total-amount').innerText = newTotalAmount.toFixed(2);

  // / showModal
  document.getElementById('my_modal_1').showModal();
});

// Quota Movement
document
  .getElementById('students-injured-btn')
  .addEventListener('click', function () {
    const studentsInjuredDonate = parseFloat(
      document.getElementById('students-injured-donate').value
    );
    document.getElementById('students-injured-donate').value = '';

    const studentsInjuredAmount = parseFloat(
      document.getElementById('students-injured-amount').innerText
    );
    const studentsTotalAmount = studentsInjuredAmount + studentsInjuredDonate;

    document.getElementById('feni-amount').innerText =
      studentsTotalAmount.toFixed(2);
    const currentTotalAmount = totalAmount('total-amount');
    const newTotalAmount = currentTotalAmount - studentsInjuredDonate;
    document.getElementById('total-amount').innerText =
      newTotalAmount.toFixed(2);

    // showModal
    document.getElementById('my_modal_1').showModal();
  });


// history button and donation button
const history = document.getElementById('history');
const donation = document.getElementById('donation');

// history button
history.addEventListener('click', function () {
  history.classList.add('bg-primary');

  donation.classList.remove('bg-primary');
  document.getElementById('main').classList.add('hidden');
  document.getElementById('history-content').classList.remove('hidden');
});

//donation button
donation.addEventListener('click', function () {
  donation.classList.add('bg-primary');
  history.classList.remove('bg-primary');
  document.getElementById('main').classList.remove('hidden');
  document.getElementById('history-content').classList.add('hidden');
});
