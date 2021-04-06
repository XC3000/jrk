const motors = require("./motor_makemodel.json");
const vehicles = require("./VehicleMasterjan21.json");
var fs = require("fs");

let results = [];

console.log(motors.length, vehicles.length);

vehicles.forEach((vehicle) => {
  motors.forEach((motor, index) => {
    console.log(
      vehicle["Make"].toLowerCase().trim(),
      motor["make_desc"].toLowerCase().trim(),

      /* toString().toLowerCase().trim(), */
      vehicle["Model"],
      "i think",
      motor["model_desc"].toLowerCase().trim(),
      toString(motor["model_desc"]).toLowerCase().trim(),
      toString(vehicle["Variant"]).toLowerCase().trim(),
      toString(motor["variant_desc"]).toLowerCase().trim()
    );

    if (
      vehicle["Make"]
        .toLowerCase()
        .trim()
        .includes(motor["make_desc"].toLowerCase().trim()) &&
      toString(vehicle["Model"])
        .toLowerCase()
        .trim()
        .includes(toString(motor["model_desc"]).toLowerCase().trim()) &&
      toString(vehicle["Variant"])
        .toLowerCase()
        .trim()
        .localeCompare(toString(motor["variant_desc"]).toLowerCase().trim()) !==
        0
    ) {
      results.push(motor);
    }
  });
});

console.log("uncommon", results.length);

fs.writeFile("input.json", JSON.stringify(results, null, 2), function (err) {
  if (err) throw err;
  console.log("complete");
});
