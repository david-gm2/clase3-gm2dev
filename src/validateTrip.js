function validateTrip(trip) {
  const errors = [];
  const validStatus = ["Traveled", "Quoting", "Active Booking"];

  if (typeof trip.tripName !== "string") errors.push("nombre de viaje no valido");
  if (typeof trip.clientName !== "string") errors.push("cliente no valido");
  if (typeof trip.totalAmount !== "number") errors.push("precio no valido");
  if (typeof trip.travelDate !== "string") errors.push("fecha no valida");
  if (!validStatus.includes(trip.status)) errors.push("status no valido");

  return errors.length === 0 ? true : errors;
}
