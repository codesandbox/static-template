var selectedRow = null

//A function for handling html form submission
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        resetForm();
    }
}


function readFormData() {
    var formData = {};
    formData["item"] = document.getElementById("item").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}
//A function to create a new record dynamically in html table
function insertNewRecord(data) {
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.item;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.quantity;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

//A function to reset the html form
function resetForm() {
    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
}

//A function to delete the created items
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("itemList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//Add validation to the items field
function validate() {
    isValid = true;
    if (document.getElementById("item").value == "") {
        isValid = false;
        document.getElementById("itemValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemValidationError").classList.contains("hide"))
            document.getElementById("itemValidationError").classList.add("hide");
    }
    return isValid;
}

