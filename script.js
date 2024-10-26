let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body'); // Corrected typo
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    // Add expense to the array
    const expense = { category, amount, date };
    expenses.push(expense);

    // Update total amount
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Insert a new row into the table
    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // Fill row data
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteCell.appendChild(deleteBtn);

    // Delete button functionality
    deleteBtn.addEventListener('click', function() {
        // Remove the expense from the array
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
        }

        // Subtract the deleted amount from total
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        // Remove the row from the table
        expensesTableBody.removeChild(newRow);
    });
});
