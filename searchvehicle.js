const vehicles = require("./VehicleMasterjan21.json");

vehicles.forEach((vehicle) => {
  if (
    vehicle["Make"].toLowerCase().trim() === "aprilia" &&
    vehicle["Model"].toLowerCase().trim() === "sr"
  )
    console.log(vehicle);
});
