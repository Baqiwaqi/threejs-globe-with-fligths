function main() {

   console.log("Hello World");
   fetch("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json").then(function (response) {
      return response.json();
   }).then(function (json) {
      const arr = Object.keys(json).map(function (key) {
         return json[key];
      });

      const array = []

      for (let i = 0; i < 1000; i++) {
         const randomOrigin = arr[Math.floor(Math.random() * arr.length)];
         const randomDestiantion = arr[Math.floor(Math.random() * arr.length)];
         const obj = {
            type: "flight",
            order: i,
            from: randomOrigin.iata,
            to: randomDestiantion.iata,
            flightCode: randomOrigin.name,
            date: "Mar 23, 2020",
            status: true,
            startLat: randomOrigin.lat,
            startLng: randomOrigin.lon,
            endLat: randomDestiantion.lat,
            endLng: randomDestiantion.lon,
            arcAlt: 0.25
         }
         array.push(obj)
      }
      console.log(array)
      // create a JSON string file
      const jsonStr = JSON.stringify(array);
      // write JSON string to a file
      const fs = require('fs');
      fs.writeFile('data.json', jsonStr, function (err) {
         if (err) throw err;
         console.log('complete');
      })


   })

}

main()