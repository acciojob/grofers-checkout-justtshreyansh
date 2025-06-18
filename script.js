const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };
const getSum = () => {
  // Remove existing total row if present
  const existingTotalRow = document.querySelector('tr.total-row');
  if (existingTotalRow) existingTotalRow.remove();

  // Select all price cells with class "price"
  const priceCells = document.querySelectorAll('td.price');

  // Calculate the sum of all prices
  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent) || 0;
  });

  // Select the table
  const table = document.querySelector('table');

  // Create a new row for total price
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  // Create a cell that spans two columns
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';
  totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;

  // Append the cell to the row and the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

