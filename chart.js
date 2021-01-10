/* this is an external code from chartjs 
source: https://www.chartjs.org/docs/latest/
which there is some modification to the code to prevent plagrism issues */
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['01/12', '02/12', '03/12'],
        datasets: [{
            label: 'Expenses ',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [0, 10, 5]
        },{
            label: 'Given allowance',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [0, 20, 30]
            }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title:{
            display:true,
            text:"Tracking Expenses for December",
            position:'top'
        }
    }
});
/* allow user to add new data to the charts
   source code is from: https://www.chartjs.org/docs/latest/developers/updates.html */
function addData(chart) {
    chart.data.labels.push(document.getElementById("dat").value);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(document.getElementById("exp").value * 1);
        dataset.data.push(document.getElementById("tot").value * 1);
    });
    alert("New Data has been added successfully.")
    chart.update();
}
/* allow user to delete the data from the exisitng localstorage array
   source code is from: https://www.chartjs.org/docs/latest/developers/updates.html
   reference from : https://www.youtube.com/watch?v=S-H7XRPgc_4&ab_channel=TrentMcMillan */
function removeData(chart) {
    let labelindex = chart.data.labels.indexOf(document.getElementById("dat").value);
    chart.data.labels.pop(labelindex);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop(labelindex);
    });
    alert("Data has been deleted successfully.")
    chart.update();
}
/* allows user to update the data to the localstorage.
   source code is from: https://www.chartjs.org/docs/latest/developers/updates.html
   reference from https://www.youtube.com/watch?v=S-H7XRPgc_4&ab_channel=TrentMcMillan */
function updateData(chart){
    let labelindex = chart.data.labels.indexOf(document.getElementById("dat").value);
    chart.data.datasets[0].data[labelindex] = document.getElementById("exp").value * 1 ;
    chart.data.datasets[1].data[labelindex] = document.getElementById("tot").value * 1 ;
    alert("Updated Data Has been added successfully.")
    chart.update();
}
/* allows user to switch between light and darkmode.
   source code is from: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp */
$("#toggle").click(function(e){
    e.preventDefault();
    var element = document.body;
    element.classList.toggle("dark-mode");
})
/* allows user to switch the exisitng chart to barchart 
   source code is from: https://www.chartjs.org/docs/latest/charts/bar.html*/
$("#barchart").click(function(e){
    e.preventDefault();
    var chartData = chart.data;
    chart.destroy();
    chart = new Chart(ctx, {
        type: "bar",
        data: chartData
    });
    chart.update();
})
/* allows user to switch the exisitng chart to piechart 
   source code is from: https://www.chartjs.org/docs/latest/charts/doughnut.html*/
$("#piechart").click(function(e){
    e.preventDefault();
    var chartData = chart.data;
    chart.destroy();
    chart = new Chart(ctx, {
        type: "pie",
        data: chartData
    });
    chart.update();
})
/* external code from https://repl.it/@Gina49JH/wk0x-jquery-localstorage-obj-v3#index.html
   this is reference from the week 7 exercise on localstorage exercise minor modification.*/                    
   $(document).ready(function () {
    // display the localstorage data in a table format 
    displayTrackingExpenses()

    // creating a button event listener
    $("#btn-submit").on("click",function (e) {
      e.preventDefault();
      let DailyExp = $('#exp').val();
      let DailyTot = $('#tot').val();
      let DailyDat = $('#dat').val();
      let Daily = new DailyP(DailyExp,DailyTot,DailyDat)
  
      // create an empty array.
      let DailyList = [];
  
      //Retrieve items from localStorage first
      if(localStorage.getItem('DailyList')){
        DailyList = JSON.parse(localStorage.getItem('DailyList'));
      }
  
      //Push obj into array
      DailyList.push(Daily);
  
      //alert message after user clicked on the submit button.
      alert("New Data has been added to the localstorage")
      //store into the localstorage
      localStorage.setItem('DailyList', JSON.stringify(DailyList));
      // display the localstorage data in a table format 
      displayTrackingExpenses();
    })
    /* updates the data and append into the list in localstorage.
       Reference code is from this website but there is a minor modification to the code.
       https://javascriptio.com/view/2775231/how-to-append-data-to-localstorage-item-through-onclick-event
    /  https://stackoverflow.com/questions/37931905/javascript-jquery-localstorage-append-items-to-an-array */
    $("#update").on("click",function(e){
       e.preventDefault();
       let DailyExp = $('#exp').val();
       let DailyTot = $('#tot').val();
       let DailyDat = $('#dat').val();
       var newdata ={
       DaiDat: DailyDat,
       DaiExp: DailyExp,
       DaiTot: DailyTot,
    };
    updatelist= JSON.parse(localStorage.getItem('DailyList'));  
    updatelist.push(newdata);
    localStorage.setItem("DailyList",JSON.stringify(updatelist));
     // display the localstorage data in a table format 
    displayTrackingExpenses();
  })
  /* allow the users to delete the records from the localstorage
     source code is from: https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage */
  $("#delete").on("click",function(e){
      e.preventDefault();
      let localstored = JSON.parse(localStorage.getItem('DailyList'));
      let DailyDat = $('#dat').val();
      localstored.splice(DailyDat, 1);
      localStorage.setItem('DailyList', JSON.stringify(localstored));
      // display the localstorage data in a table format 
      displayTrackingExpenses();
  })
});
// create base template for the objects.
function DailyP(DailyExp, DailyTot,DailyDat) {
    this.DaiDat = DailyDat;
    this.DaiExp = DailyExp;
    this.DaiTot = DailyTot;
    this.datetrack = Date.now();
}
/* display the localstorage data in a table format 
   source code is from: https://repl.it/@Gina49JH/wk0x-jquery-localstorage-obj-v3#index.html  */
function displayTrackingExpenses(){
    // create empty variable 
    let ExpensesInfo = "";
    // retrive from localstorage
    let localstored = JSON.parse(localStorage.getItem('DailyList'));
    // check if the localstorage is empty and length more than 0
    if(localstored != null && localstored.length > 0){
        // create a variable to check the entire list from localstorage
        for(let Track of localstored){
        // using a variable in the localstorage to display output
            ExpensesInfo += `<tr><td>${Track.datetrack}</td><td>${Track.DaiDat}</td><td>${Track.DaiExp}
        </td><td>${Track.DaiTot}</td></tr>`;
    }
    // display the output to the table
    $('#localstorage-info').html(ExpensesInfo);
    // if the records cannot be found on a localstorage array.
    }else{
      $('#localstorage-info').html('No Records found');
    }
}
