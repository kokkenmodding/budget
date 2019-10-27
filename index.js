// Initialization
$('#my-element').datepicker([options]);
// Access instance of plugin
$('#my-element').data('datepicker');


var startdate = document.getElementById("startdate").value;
var enddate = document.getElementById("enddate").value;

function minfunktion2(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("cdate").value=today;
}

function minfunktion3(){
    var today = new Date();
    today.setDate(today.getDate()-1);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("cdate").value=today;
}

function minfunktion4 () {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);

    document.getElementById("startdate").value=firstDay;
    document.getElementById("enddate").value=lastDay;

}

function minfunktion5 () {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m + 1, 1);
    var lastDay = new Date(y, m + 2, 0);

    document.getElementById("startdate").value=firstDay;
    document.getElementById("enddate").value=lastDay;

}


function minfunction () {
    var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
    var cdate = document.getElementById("cdate").value;
   
    var d = new Date();
    var n = d.getTime();
  
 // To set two dates to two variables 
 var date1 = new Date(startdate); 
 var date2 = new Date(enddate);
 var date3 = new Date(cdate);
   
 // To calculate the time difference of two dates 
 var Difference_In_Time = date2.getTime() - date1.getTime(); 
   
 // To calculate the no. of days between two dates 
 var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24))+1; 

 var rundatDatum = Math.round(Difference_In_Days);


 var budgeten = (document.getElementById("budget").value)/Difference_In_Days.toFixed(0);
 //ar rundadBudget = Math.round(budgeten);
 var rundadBudget = budgeten.toFixed(2);

 document.getElementById("numberdays").innerHTML=rundatDatum;
 document.getElementById("dagligbudget").innerHTML=rundadBudget;

 // To calculate the time difference of two dates 
 var Difference_In_Time2 = date3.getTime() - date1.getTime(); 
   
 // To calculate the no. of days between two dates 
 var Difference_In_Days2 = (Difference_In_Time2 / (1000 * 3600 * 24))+1;


var targetspend = budgeten*Difference_In_Days2.toFixed(0);
document.getElementById("tspend").innerHTML=targetspend.toFixed(2);

var pacingen = document.getElementById("currentspe").value/targetspend;
var ads = document.getElementById("currentspe").value/Difference_In_Days2;
var nds = ((document.getElementById("budget").value) - document.getElementById("currentspe").value)/ ((Difference_In_Days-Difference_In_Days2).toFixed(0));

document.getElementById("pacing").innerHTML = (pacingen*100).toFixed(2)+"%";
document.getElementById("ads").innerHTML=ads.toFixed(2);
document.getElementById("nds").innerHTML=nds.toFixed(2);

document.getElementById("budrem").innerHTML=(document.getElementById("budget").value) - document.getElementById("currentspe").value;
document.getElementById("dpassed").innerHTML=Difference_In_Days2;
document.getElementById("dremaining").innerHTML=(Difference_In_Days-Difference_In_Days2).toFixed(0);
}

// 