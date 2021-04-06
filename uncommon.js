const motors = require("./motor_makemodel.json");
const vehicles = require("./VehicleMasterjan21.json");
var fs = require("fs");

let results = [];

console.log(motors.length, vehicles.length);

motors.forEach((motor) => {
  vehicles.forEach((vehicle, index) => {
    if (
      vehicle["Make"].toLowerCase().trim() !==
      motor["make_desc"].toLowerCase().trim()
    ) {
      console.log(
        vehicle["Make"].toLowerCase().trim(),
        motor["make_desc"].toLowerCase().trim()
      );
      results.push(vehicle);
    }
  });
});

console.log("uncommon", results.length);

fs.writeFile("input.json", JSON.stringify(results, null, 2), function (err) {
  if (err) throw err;
  console.log("complete");
});
