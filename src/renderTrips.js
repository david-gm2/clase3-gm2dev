function renderTrips(filter = "") {
    const trips = getTrips();
    const $tbody = document.getElementById("tripsTableBody");
    $tbody.innerHTML = "";

    const resultFilter = trips.filter(trip =>
        trip.tripName.toLowerCase().includes(filter.toLowerCase()) ||
        trip.clientName.toLowerCase().includes(filter.toLowerCase())
    );

    resultFilter.forEach(trip => {
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
      <button data-id="${trip.id}">❌</button>
      <lable data-id="${trip.id}">❌</lable>
      <button data-id="${trip.id}">📝</button>
      </td>
    `;
    $tbody.append(tr);
  });
}

