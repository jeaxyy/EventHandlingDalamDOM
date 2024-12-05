document.getElementById("inputField").addEventListener("keydown", function (event) {
    document.getElementById("keyMessage").textContent = `You pressed: ${event.key}`;
  });
  