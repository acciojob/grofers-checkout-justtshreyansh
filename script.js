const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


  const getSum = () => {
    const priceCells = document.querySelectorAll('td.price');

    let total = 0;
    priceCells.forEach(cell => {
      total += parseFloat(cell.textContent) || 0;
    });

    // Display total inside #ans element
    const ansDiv = document.getElementById('ans');
    if(ansDiv) {
      ansDiv.textContent = `Total Price: Rs ${total.toFixed(2)}`;
    } else {
      // fallback: add a total row if #ans not found
      const existingTotalRow = document.querySelector('tr.total-row');
      if (existingTotalRow) existingTotalRow.remove();

      const table = document.querySelector('table');
      const totalRow = document.createElement('tr');
      totalRow.classList.add('total-row');
      const totalCell = document.createElement('td');
      totalCell.colSpan = 2;
      totalCell.style.fontWeight = 'bold';
      totalCell.style.textAlign = 'right';
      totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;
      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);
    }
  };

  getSumBtn.addEventListener("click", getSum);
