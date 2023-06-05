// Function to add a new expense
function addExpense() {
    var name = document.getElementById("expense-name").value;
    var amount = parseFloat(document.getElementById("expense-amount").value);
  
    if (name === "" || isNaN(amount)) {
      alert("Please enter valid expense details");
      return;
    }
  
    var expenseItem = document.createElement("li");
    expenseItem.textContent = name + ": $" + amount.toFixed(2);
  
    document.getElementById("expenses").appendChild(expenseItem);
  
    updateTotalExpenses(amount);
  
    // Clear input fields
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
  }
  
  // Function to update total expenses
  function updateTotalExpenses(amount) {
    var totalExpenses = parseFloat(document.getElementById("total-expenses").textContent.split(": ")[1]);
    totalExpenses += amount;
    document.getElementById("total-expenses").textContent = "Total Expenses: $" + totalExpenses.toFixed(2);
  }
  