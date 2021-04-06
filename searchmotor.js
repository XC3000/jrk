const motors = require("./motor_makemodel.json");

motors.forEach((motor) => {
  if (
    motor["make_desc"].toLowerCase().trim() === "aprilia" &&
    motor["model_desc"].toLowerCase().trim() === "sr"
  )
    console.log(motor);
});
