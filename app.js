console.log("this is external js");


// (Excercise of 19 oct)
// function studentdata() {
//     var name= "Ram";
//     var b= 5;
//     var address="xyz";

//     console.log("Student Name");
//     console.log(name);

//     console.log("Student Class");
//     console.log(b);

//     console.log("Student Address");
//     console.log(address);

// }
// studentdata();


// (Excercise of 20 oct)
var data = "Student Data by JS"
var studname="Ram";
var studclass ="5th";
var address = "XYZ";

document.querySelector("#StudData").innerHTML= data;
document.querySelector(".StudName").innerHTML= studname;
document.querySelector("#StudClass").innerHTML= studclass;
document.querySelector(".Address").innerHTML= address;

var result= document.getElementById('data').innerHTML;
alert("result "+result);

var a="shyam";
var b ="5th";
var c= "XYZ";


document.querySelector(".a").innerHTML= a;
document.querySelector("#b").innerHTML= b;
document.querySelector(".c").innerHTML= c;
