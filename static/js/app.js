// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

var tbody = d3.select("tbody");
var inputValue = "";

//filter by date function
function filterDate(date){
    //Test
    console.log("I am filtering a date")
    return date.datetime === inputValue;
}

//Load the table for from the data file
data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//detect the button using id
var button = d3.select("#filter-btn");
//console.log(button)

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);

    //wl - clear the table body => tbody
    tbody.html("");

    //@note wl - get the input text
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    inputValue = inputElement.property("value");

    //Test
    console.log(inputValue);

    var filteredRows = tableData.filter(filterDate);
    //Test
    console.log("filteredRows")
    console.log(filteredRows);

    //Load the table for from the filtered date array
    filteredRows.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  }

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);



