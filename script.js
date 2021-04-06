const csv = require("csv-parser");
const fs = require("fs");

fs.createReadStream("motor.csv")
  .pipe(csv())
  .on("data", (row) => {
    console.log(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });

/* fs.createReadStream("vehicle.csv")
  .pipe(csv())
  .on("data", (row) => {
    console.log(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  }); */
