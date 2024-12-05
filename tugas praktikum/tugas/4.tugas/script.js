document.getElementById("addItemButton").addEventListener("click", function () {
    const itemText = document.getElementById("itemInput").value;
    if (itemText.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      document.getElementById("itemList").appendChild(listItem);
      document.getElementById("itemInput").value = ""; // Clear input field
    } else {
      alert("Please enter a valid item.");
    }
  });
  