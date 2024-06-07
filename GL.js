function addData() {
    // Get the input data from the form
    var inputData = document.getElementById("gldata").value;

    // Get the table body
    var tableBody = document.getElementById("tableBody");

    var newRow = tableBody.insertRow();
    var cell = newRow.insertCell(0);
    cell.innerHTML = inputData;

    // Clear the form input
    document.getElementById("gldata").value = "";
}

document.getElementById("gldata").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addData();
    }
});