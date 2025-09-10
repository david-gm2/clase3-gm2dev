function renderTrips(filter = "", status = "") {
    const trips = getTrips();
    const $tbody = document.getElementById("tripsTableBody");
    $tbody.innerHTML = "";

    const resultFilter = trips.filter(trip => {
    return (
    (trip.tripName.toLowerCase().includes(filter.toLowerCase()) ||
    trip.clientName.toLowerCase().includes(filter.toLowerCase()))
    &&
    (status === "" || trip.status === status)
);
});


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
      <label for="trip-eliminate" data-id="${trip.id}">elim</label>
      <button data-id="${trip.id}">📝</button>
      </td>
    `;
    $tbody.append(tr);
  });
}


const $search = document.getElementById("searchTrip");
const $status = document.getElementById("status-select");

function applyFilters() {
  renderTrips($search.value, $status.value);
}

$status.addEventListener("change", applyFilters);
$search.addEventListener("input", applyFilters);
