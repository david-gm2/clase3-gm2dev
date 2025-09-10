// trips iniciales con id único
const trips = [
  {
    id:"trip-1",
    tripName: "New Trip",
    clientName: "",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Quoting"
  },
  {
    id: "trip-2",
    tripName: "Honeymoon Miami",
    clientName: "Bob Jones",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Active Booking"
  },
  {
    id: "trip-3",
    tripName: "Paris getaway",
    clientName: "",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Quoting"
  },
  {
    id: "trip-4",
    tripName: "Cancún Family",
    clientName: "",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Quoting"
  },
  {
    id: "trip-5",
    tripName: "Working Travel",
    clientName: "Lisa McFly",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Active Booking"
  },
  {
    id: "trip-6",
    tripName: "Family getaway",
    clientName: "Bob Jones",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Active Booking"
  },
  {
    id: "trip-7",
    tripName: "Honeymoon",
    clientName: "Bob McFee",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Traveled"
  },
  {
    id: "trip-8",
    tripName: "Caribbean for two",
    clientName: "Michael Snow",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Traveled"
  },
  {
    id: "trip-9",
    tripName: "Eurotrip",
    clientName: "Bob Jones",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Active Booking"
  },
  {
    id: "trip-10",
    tripName: "Honeymoon",
    clientName: "",
    travelDate: "2025-05-24 to 2025-07-22",
    totalAmount: 13959.49,
    status: "Quoting"
  }
];

// FLAG para inicializar una sola vez
if (!localStorage.getItem("init")) {
  const errores = [];
  const validados = [];

  trips.forEach(trip => {
    const result = validateTrip(trip);
    if (result === true) {
      validados.push(trip);
    } else {
      errores.push({ trip: trip.tripName, errores: result });
    }
  });

  localStorage.setItem("trips", JSON.stringify(validados));
  localStorage.setItem("init", "done");

  console.log("📦 Trips iniciales cargados:", validados.length);
  if (errores.length > 0) {
    console.warn("❌ Algunos trips no se cargaron:", errores);
  }
} else {
  console.log("⚠️ Trips ya estaban inicializados, no se duplican");
}
