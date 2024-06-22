const button = document.querySelector("body button");
const repairList = document.querySelector("ul.need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color,
  };
  return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "orange");
const skateboard = createVehicle("skateboard", 4, "yellow");

const myVehicles = [car, bike, skateboard];

// console.log(myVehicles);

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "";
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair == true;
  });
  // for (let vehicle of myVehicles) {
  //   if (vehicle.needsRepair == true) {
  //     vehicleRepairList.append(vehicle);
  //   }
  // }
  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type} </span> needs some 💜`;
    repairList.append(li);
  }
});
