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
          <td>${pitch.date}</td>
          <td>${pitch.time}</td>
          <td>${pitch.batter}</td>
          <td>${pitch.balls}</td>
          <td>${pitch.strikes}</td>
          <td>${pitch.outs}</td>
          <td>${pitch.pitchCall}</td>
          <td>${pitch.korBB}</td>
          <td>${pitch.relSpeed}</td>
          <td>${pitch.spinRate}</td>
          <td>${pitch.spinAxis}</td>
      `;
  });
}

fetchPitchData();