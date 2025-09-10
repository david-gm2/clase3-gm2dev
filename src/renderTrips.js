function renderTrips() {
  const trips = getTrips();
  const $tbody = document.getElementById("tripsTableBody");
  $tbody.innerHTML = "";

  trips.forEach(trip => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${trip.tripName}</td>
      <td>${trip.clientName}</td>
      <td>${trip.travelDate}</td>
      <td>${trip.penaltyDate || "-"}</td>
      <td>${trip.totalAmount}</td>
      <td>${trip.commission || "-"}</td>
      <td>${trip.status}</td>
      <td>
      <button data-id="${trip.id}">❌</button>
      <button data-id="${trip.id}">📝</button>
      </td>
    `;
    $tbody.append(tr);
  });
}
