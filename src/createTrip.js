const $formulario = document.getElementById('tripForm');
const $nameNewTrip = $formulario.querySelector('.tripName');

const trip = {
  tripName: "New Trip",
  clientName: "",
  travelDate: "2025-05-24 to 2025-07-22",
  totalAmount: 13959.49,
  status: "Quoting"
};

function formatName() {
  const nameNewTrip = $nameNewTrip.value;
  if (typeof nameNewTrip !== "string") return false;
  return { ...trip, tripName: nameNewTrip };
}

function validateNewName(tripWithNewName) {
  const validatedTrip = validateTrip(tripWithNewName);
  if (validatedTrip !== true) {
    console.warn("Errores:", validatedTrip);
    return false;
  }
  console.log("Trip válido:", tripWithNewName);
  return true;
}

$formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const tripWithNewName = formatName();
  if (!tripWithNewName) return;

  if (validateNewName(tripWithNewName)) {
      addTrip(tripWithNewName);
      renderTrips();
  }
});
