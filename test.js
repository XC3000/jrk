const motors = require("./motor_makemodel.json");
const vehicles = require("./VehicleMasterjan21.json");
var fs = require("fs");

/* for (let i = 0; i < vehicle.length; i++) {
  for (let j = 0; j < motor.length; j++) {
      if() {}
  }
} */

/* motor.forEach((moto) => {
  if (
    moto["make_desc"].toLowerCase().trim() === "aston martin" &&
    moto["model_desc"].toLowerCase().trim() === "dbs"
  ) {
    console.log(moto);
  }
}); */

console.log("motors", motors.length);
console.log("vehicles", vehicles.length);

console.log(typeof motors[0]["make_desc"]);

let results = [];

/* motors.forEach((motor) => {
  console.log(motor);
  console.log(typeof motor["variant_desc"]);
  console.log(motor["variant_desc"].toLowerCase().trim());
}); */

/* motors.forEach((motor) => {
  vehicles.forEach((vehicle, index) => {
    if (
      vehicle["Make"]
        .toLowerCase()
        .trim()
        .includes(motor["make_desc"].toLowerCase().trim()) &&
      toString(vehicle["Model"]).toLowerCase().trim() ===
        toString(motor["model_desc"]).toLowerCase().trim() &&
      toString(vehicle["Variant"])
        .toLowerCase()
        .trim()
        .includes(toString(motor["variant_desc"]).toLowerCase().trim()) &&
      vehicle["Body Type"].toLowerCase().trim() ===
        motor["segment_desc"].toLowerCase().trim()
    ) {
      results.push(vehicle);
      vehicles.splice(index, 1);
    }
  });
}); */

vehicles.forEach((vehicle) => {
  motors.forEach((motor, index) => {
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
        .includes(toString(motor["variant_desc"]).toLowerCase().trim()) &&
      vehicle["Body Type"].toLowerCase().trim() ===
        motor["segment_desc"].toLowerCase().trim()
    ) {
      results.push(motor);
      motors.splice(index, 1);
    }
  });
});

fs.writeFile("common.json", JSON.stringify(results, null, 2), function (err) {
  if (err) throw err;
  console.log("complete");
});

console.log("common", results.length);
