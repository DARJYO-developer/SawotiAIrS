let moistureLevel = 50;
let watering = false;

function updateMoistureLevel(level) {
  moistureLevel = level;
  document.querySelector("#moisture-level").innerHTML = moistureLevel;
}

function waterGarden() {
  if (!watering) {
    watering = true;
    document.querySelector("#water-garden").disabled = true;
    document.querySelector("#stop-watering").disabled = false;

    // Code to activate watering system here

    const intervalId = setInterval(() => {
      updateMoistureLevel(moistureLevel + 1);
      if (moistureLevel >= 70) {
        clearInterval(intervalId);
        watering = false;
        document.querySelector("#water-garden").disabled = false;
        document.querySelector("#stop-watering").disabled = true;
      }
    }, 1000);
  }
}

function stopWatering() {
  clearInterval(intervalId);
