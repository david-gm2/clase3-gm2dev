document.addEventListener("DOMContentLoaded", () => {
  renderTrips();

  document.getElementById("tripsTableBody").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      deleteTrip(e.target.dataset.id);
      renderTrips();
    }
  });
});
