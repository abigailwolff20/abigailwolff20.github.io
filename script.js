function filterData(){
 event.preventDefault();
  
  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  
  // Get all rows in the table, skipping the header row
  var rows = document.querySelectorAll('#pitchTable tr:not(:first-child)');
  
  rows.forEach(row => {
      var dateCell = row.cells[1].innerText; // Assuming the date is in the second cell
      var rowDate = new Date(dateCell);
      
      // Check if the row's date is within the specified range
      if (rowDate >= startdate && rowDate <= enddate) {
          row.style.display = ''; // Show row
      } else {
          row.style.display = 'none'; // Hide row
      }
  });

async function fetchPitchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
      const data = await response.json();
      populateTable(data);
  } catch (error) {
      console.error('Error fetching the pitch data:', error);
  }
}

function populateTable(data) {
  const table = document.getElementById('pitchTable');

  data.forEach(pitch => {
      const row = table.insertRow();
      row.innerHTML = `
          <td><a href="details.html?id=${pitch.PitchNo}">Pitch ${pitch.PitchNo}</a></td>
          <td>${pitch.Date}</td>
          <td>${pitch.Time}</td>
          <td>${pitch.Batter}</td>
          <td>${pitch.Balls}</td>
          <td>${pitch.Strikes}</td>
          <td>${pitch.Outs}</td>
          <td>${pitch.PitchCall}</td>
          <td>${pitch.KorBB}</td>
          <td>${pitch.RelSpeed}</td>
          <td>${pitch.SpinRate}</td>
          <td>${pitch.SpinAxis}</td>
      `;
  });
}

fetchPitchData();