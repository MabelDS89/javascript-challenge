// TO MAKE TABLE VIEWABLE ON SITE

// From data.js
var tableData = data;

// // Print data in the console
// console.log(tableData)

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

// TO MAKE TABLE ON SITE INTERACTIVE WITH SEVERAL FILTERS

// Select the all the list elements with the "filter list-group-item" class
var filter = d3.selectAll(".filter");

// Create a change event function
filter.on("change", createChange);

inputdict = {}

function createChange() {
    var filteredData = tableData
    var inputselect = d3.select(this).select("input");
    var selectedInput = inputselect.property("value");
    var idselect = inputselect.attr("id");

    inputdict[idselect] = selectedInput;
    console.log(inputdict);

    Object.entries(inputdict).forEach(([key, value]) => {
        filteredData = filteredData.filter(x => x[key] === value);

        console.log(filteredData);

        if (filteredData != 0) {
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
        else {
            alert("No results found")
        }
    })
};