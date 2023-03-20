// get the table element
const scorecard = document.getElementById('scorecard');

// add event listener for table cell edits
scorecard.addEventListener('input', calculateTotals);

// function to calculate totals
function calculateTotals() {
  // loop through each row in the table
  for (let i = 1; i < scorecard.rows.length; i++) {
    let total = 0;
    // loop through each cell in the row (except for the first and last cells)
    for (let j = 1; j < scorecard.rows[i].cells.length - 1; j++) {
      let score = parseInt(scorecard.rows[i].cells[j].textContent);
      if (!isNaN(score)) {
        total += score;
      }
    }
    // set the value of the total cell in the row
    scorecard.rows[i].cells[scorecard.rows[i].cells.length - 1].textContent = total;
  }
}
