const $formulario = document.getElementById("tripForm");
const $nameNewTrip = $formulario.querySelector(".tripName");

const defaultTrip = {
  tripName: "New Trip",
  clientName: "",
  travelDate: "2025-05-24 to 2025-07-22",
  totalAmount: 13959.49,
  status: "Quoting"
};

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const tripWithNewName = { ...defaultTrip, id: Date.now().toString(), tripName: $nameNewTrip.value };

  const validated = validateTrip(tripWithNewName);
  if (validated === true) {
    addTrip(tripWithNewName);
    renderTrips();
    $formulario.reset();
  } else {
    console.warn("Errores:", validated);
  }
});
