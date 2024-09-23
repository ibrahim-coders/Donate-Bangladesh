function totalAmount(amount) {
  return parseFloat(document.getElementById(amount).innerText);
}

//  ⚠️nokhali value Invalid error
document
  .getElementById('noakhali-donate')
  .addEventListener('input', function () {
    const input = parseFloat(document.getElementById('noakhali-donate').value);

    if (input <= 0 || isNaN(input)) {
      document.getElementById('noakhali-Invalid').classList.remove('hidden');
      document.getElementById('noakhali-btn').classList.add('hidden');
    } else {
      document.getElementById('noakhali-Invalid').classList.add('hidden');
      document.getElementById('noakhali-btn').classList.remove('hidden');
    }
  });

// nokhali donatin

document.getElementById('noakhali-btn').addEventListener('click', function () {
  const noakhaliDonate = parseFloat(
    document.getElementById('noakhali-donate').value
  );

  // Clear input field
  document.getElementById('noakhali-donate').value = '';

  // Get current amount and calculate new total
  const noakhaliAmount = parseFloat(
    document.getElementById('noakhali-amount').innerText
  );

  // ⚠️ amount Error

  if (totalAmount('total-amount') < noakhaliDonate) {
    document.getElementById('amount-error').classList.remove('hidden');
    return;
  }

  const noakhaliTotalAmount = noakhaliAmount + noakhaliDonate;
  document.getElementById('noakhali-amount').innerText =
    noakhaliTotalAmount.toFixed(2);

  const currentTotalAmount = totalAmount('total-amount');
  const newTotalAmount = currentTotalAmount - noakhaliDonate;
  document.getElementById('total-amount').innerText = newTotalAmount.toFixed(2);

  // Show modal
  document.getElementById('my_modal_1').showModal();

  // History part
  const historyContent = document.getElementById('history-content');
  const historyDiv = document.createElement('div');

  historyDiv.className = 'w-full p-4 rounded-md shadow-custom my-4 px-10';

  historyDiv.innerHTML = `
    <h2 class="text-2xl font-bold text-secondary py-4">
      ${noakhaliDonate} Taka is Donated for famine-2024 at Noakhali, Bangladesh
    </h2>
    <p class="text-sm font-semibold text-secondary py-2">Date: ${new Date()}</p>
    `;

  historyContent.appendChild(historyDiv);
});

//  ⚠️feni value Invalid error
document.getElementById('feni-donate').addEventListener('keyup', function () {
  const feniInput = parseFloat(document.getElementById('feni-donate').value);

  if (feniInput <= 0 || isNaN(feniInput)) {
    document.getElementById('feni-Invalid').classList.remove('hidden');
    document.getElementById('feni-btn').classList.add('hidden');
  } else {
    document.getElementById('feni-Invalid').classList.add('hidden');
    document.getElementById('feni-btn').classList.remove('hidden');
  }
});

// -- Donate feni -->

document.getElementById('feni-btn').addEventListener('click', function () {
  const feniDonate = parseFloat(document.getElementById('feni-donate').value);
  document.getElementById('feni-donate').value = '';

  const feniAmount = parseFloat(
    document.getElementById('feni-amount').innerText
  );

  // ⚠️ amount Error

  if (totalAmount('total-amount') < feniDonate) {
    document.getElementById('amount-error').classList.remove('hidden');
    return;
  }

  const feniTotalAmount = feniAmount + feniDonate;
  document.getElementById('feni-amount').innerText = feniTotalAmount.toFixed(2);

  const currentTotalAmount = totalAmount('total-amount');
  const newTotalAmount = currentTotalAmount - feniDonate;

  document.getElementById('total-amount').innerText = newTotalAmount.toFixed(2);

  // / showModal
  document.getElementById('my_modal_1').showModal();

  // History part

  const historyContent = document.getElementById('history-content');
  const historyDiv = document.createElement('div');

  historyDiv.className = 'w-full p-4 rounded-md shadow-custom my-4 px-10';

  historyDiv.innerHTML = `
  <h2 class="text-2xl font-bold text-secondary py-4">
    ${feniDonate} Taka is Donated for famine-2024 at Feni, Bangladesh
  </h2>
  <p class="text-sm font-semibold text-secondary py-2">Date: ${new Date()}</p>
`;

  historyContent.appendChild(historyDiv);
});

// /  ⚠️feni value Invalid error
document
  .getElementById('students-injured-donate')
  .addEventListener('keyup', function () {
    const studentsInput = parseFloat(
      document.getElementById('students-injured-donate').value
    );

    if (studentsInput <= 0 || isNaN(studentsInput)) {
      document.getElementById('injured-Invalid').classList.remove('hidden');
      document.getElementById('students-injured-btn').classList.add('hidden');
    } else {
      document.getElementById('injured-Invalid').classList.add('hidden');
      document
        .getElementById('students-injured-btn')
        .classList.remove('hidden');
    }
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

    // ⚠️ amount Error

    if (totalAmount('total-amount') < studentsInjuredDonate) {
      document.getElementById('amount-error').classList.remove('hidden');
      return;
    }

    const studentsTotalAmount = studentsInjuredAmount + studentsInjuredDonate;

    document.getElementById('students-injured-amount').innerText =
      studentsTotalAmount.toFixed(2);

    const currentTotalAmount = totalAmount('total-amount');
    const newTotalAmount = currentTotalAmount - studentsInjuredDonate;
    document.getElementById('total-amount').innerText =
      newTotalAmount.toFixed(2);

    // showModal
    document.getElementById('my_modal_1').showModal();

    // History part

    const historyContent = document.getElementById('history-content');
    const historyDiv = document.createElement('div');

    historyDiv.className = 'w-full p-4 rounded-md shadow-custom my-4 px-10';

    historyDiv.innerHTML = `
 
  <h2 class="text-2xl font-bold text-secondary py-4">
    ${studentsInjuredDonate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
  </h2>
  <p class="text-sm font-semibold text-secondary py-2">Date: ${new Date()}</p>
  `;

    historyContent.appendChild(historyDiv);
  });

// history button and donation button
const history = document.getElementById('history');
const donation = document.getElementById('donation');

// history button
history.addEventListener('click', function () {
  history.classList.add('bg-primary');
  donation.classList.remove('bg-primary');
  document.getElementById('donation-tab').classList.add('hidden');
  document.getElementById('history-content').classList.remove('hidden');
});

//donation button
donation.addEventListener('click', function () {
  donation.classList.add('bg-primary');
  history.classList.remove('bg-primary');
  document.getElementById('donation-tab').classList.remove('hidden');
  document.getElementById('history-content').classList.add('hidden');
});
