function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}

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
          <td><a href="details.html?id=${pitch.pitchNo}">Pitch ${pitch.pitchNo}</a></td>
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