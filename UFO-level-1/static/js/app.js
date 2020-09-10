// TO MAKE TABLE VIEWABLE ON SITE

// From data.js
var tableData = data;

// Print data in the console
console.log(tableData)

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each data object
tableData.forEach(function (UFOs) {
    console.log(UFOs);
    var row = tbody.append("tr");

// Use `Object.entries` to console.log each data value
    Object.entries(UFOs).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// TO MAKE TABLE ON SITE INTERACTIVE

// Select the "Filter Table" button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the "Filter Table" button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

// Prevent the page from refreshing
    d3.event.preventDefault();

// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

// Get the value property of the input element
    var inputValue = inputElement.property("value");

// Print the value to the console
    console.log(inputValue);

// Filter the table by the input datetime
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

// Remove any children from the tbody
    tbody.html("");

// Use d3 to append one table row `tr` for each data object
    filteredData.forEach(function (UFOs) {
        console.log(UFOs);
        var row = tbody.append("tr");

// Use `Object.entries` to console.log each data value
        Object.entries(UFOs).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}