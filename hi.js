const fs = require("fs");
const csv = require("csv-parser");
const ObjectsToCsv = require("objects-to-csv");

let final = [];

const readCsv = (path) => {
  return new Promise((res, rej) => {
    let results = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on("error", (err) => {
        console.error(err);
        rej(err);
      })
      .on("data", (data) => results.push(data))
      .on("end", () => {
        res(results);
      });
  });
};

const getDataFromCsv = async () => {
  try {
    const data1 = await readCsv("motor_makemodel.csv");
    const data2 = await readCsv("VehicleMasterjan21.csv");

    let results = [];

    /* console.log(data1[0], data2[0]);
    console.log(data2[0]); */

    /* console.log(data2[0]); */

    /* data2.forEach((element) => {
      if (element["Variant"].trim() === "35TDI Premium+ with Sunroof")
        console.log(element);
    }); */

    /* data1.forEach((element) => {
      if (element["variant_desc"].trim() === "35 TDI PREMIUM PLUS + SUNROOF")
        console.log(element);
    }); */

    console.log(data2.length);

    let c = 0;

    data1.forEach((element1) => {
      data2.forEach((element2, index) => {
        if (
          element2["Make"].toLowerCase().trim() ===
            element1["make_desc"].toLowerCase().trim() &&
          element2["Model"].toLowerCase().trim() ===
            element1["model_desc"].toLowerCase().trim() &&
          element2["Variant"].toLowerCase().trim() ===
            element1["variant_desc"].toLowerCase().trim() &&
          element2["Body Type"].toLowerCase().trim() ===
            element1["segment_desc"].toLowerCase().trim()
        ) {
          /* console.log(element1); */
          /* if (element2["Make"].toLowerCase().trim() === "audi")
            console.log(element1, element2); */

          if (element2["Make"].toLowerCase().trim() === "aprilia")
            console.log(element1, element2);
          

          results.push(element2);
          /* data2.splice(index, 1); */
        }
      });
    });

    (async () => {
      const csv = new ObjectsToCsv(results);

      // Save to file:
      await csv.toDisk("./test123.csv");
    })();

    console.log(data2.length);
  } catch (error) {
    console.error(error);
  }
};

getDataFromCsv();
