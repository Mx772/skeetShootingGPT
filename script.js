// get the table element and number of stations input
const scorecard = document.getElementById('scorecard');
const numStationsInput = document.getElementById('num-stations');

// add event listener for number of stations input changes
numStationsInput.addEventListener('input', updateStations);

// function to update the number of stations
function updateStations() {
  const numStations = numStationsInput.valueAsNumber;
  const headerRow = scorecard.rows[0];
  // update header row with new number of stations
  for (let i = headerRow.cells.length - 2; i > 0; i--) {
    headerRow.deleteCell(i);
  }
  for (let i = 1; i <= numStations; i++) {
    const stationCell = document.createElement('th');
    stationCell.textContent = `Station ${i}`;
    headerRow.appendChild(stationCell);
  }
  // update shooter rows with new number of stations
  for (let i = 1; i < scorecard.rows.length; i++) {
    const shooterRow = scorecard.rows[i];
    for (let j = shooterRow.cells.length - 2; j > 0; j--) {
      shooterRow.deleteCell(j);
    }
    for (let j = 1; j <= numStations; j++) {
      const stationCell = document.createElement('td');
      stationCell.setAttribute('contenteditable', true);
      shooterRow.appendChild(stationCell);
    }
  }
  calculateTotals();
}

// get the number of shooters input and add shooter button
const numShootersInput = document.getElementById('num-shooters');
const addShooterButton = document.getElementById('add-shooter');

// add event listener for number of shooters input changes
numShootersInput.addEventListener('input', updateShooters);

// add event listener for add shooter button click
addShooterButton.addEventListener('click', addShooter);

// function to update the number of shooters
function updateShooters() {
  const numShooters = numShootersInput.valueAsNumber;
  const shooterNames = document.getElementById('shooter-names');
  const shooterRows = scorecard.tBodies[0].rows;
  // update shooter rows with new number of shooters
  while (shooterRows.length > numShooters) {
    scorecard.tBodies[0].deleteRow(shooterRows.length - 1);
  }
  while (shooterRows.length < numShooters) {
    const newRow = scorecard.tBodies[0].insertRow();
    const nameCell = newRow.insertCell();
    nameCell.textContent = `Shooter ${shooterRows.length}`;
    for (let i = 1; i <= numStationsInput.valueAsNumber; i++) {
      const stationCell = newRow.insertCell();
      stationCell.setAttribute('contenteditable', true);
    }
    const totalCell = newRow.insertCell();
    totalCell.classList.add('total-cell');
  }
  calculateTotals();
}

// function to add a shooter
function addShooter() {
  numShootersInput.valueAsNumber++;
  updateShooters();
}

// add event listeners for score cells
scorecard.addEventListener('input', calculateTotals);

// function to calculate the totals for each shooter
function calculateTotals() {
  const shooterRows = scorecard.tBodies[0].rows;
  for (let i = 0; i < shooterRows.length; i++) {
    const shooterRow = shooterRows[i];
    let total = 0;
    for (let j = 1; j < shooterRow.cells.length - 1; j++) {
      const cellValue = shooterRow.cells[j].textContent.trim();
      const score = cellValue === 'X' ? 1 : parseInt(cellValue);
      if (!isNaN(score)) {
        total += score;
      }
    }
    shooterRow.cells[shooterRow.cells.length - 1].textContent = total;
  }
}
