function getTrips() {
  const stored = localStorage.getItem("trips");
  return stored ? JSON.parse(stored) : [];
}

function addTrip(trip) {
  const trips = getTrips();
  if (trips.some(t => t.tripName === trip.tripName)) return false;
  trips.push(trip);
  localStorage.setItem("trips", JSON.stringify(trips));
  return true;
}

function deleteTrip(id) {
  const trips = getTrips().filter(t => t.id !== id);
  localStorage.setItem("trips", JSON.stringify(trips));
}


