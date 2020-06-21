//CHAPTER NO :21-25:



//Task#1:

/*
var  first_name =  prompt("Enter your first name");
var  last_name =  prompt("Enter your last name");
var full_name = alert(first_name+last_name);
*/



//Task#2:

/*
var mobile = prompt("Enter favourite moble phone model");
document.write("My favourite phone is : " +mobile+ " <br>Length of string: "  +mobile.length);
*/


//Task#3:

/*
var string = "Pakistani";
var index = string.indexOf("n");
document.write("String : " +string+ "<br> Index of \'n\' : " +index);
*/



//Task#4:

/*
var string = "Hello World";
var index = string.lastIndexOf("l");
document.write("String : " +string+ "<br> Index of \'l\' : " +index);
*/




//Task#5:

/*
var string = "Pakistani";
var index = string.charAt(3);
document.write("String : " +string+ "<br> Character of index 3 : " +index);
*/



//Task#6:

/*
var  first_name =  prompt("Enter your first name");
var  last_name =  prompt("Enter your last name");
var full_name = first_name.concat(last_name);
alert(full_name);
*/



//Task#7:


/*
var city = "Hyderabad";
var replace = city.replace("Hyderabad" , "Islamabad");
document.write("City : " +city+ "<br> After replacement : " +replace);
*/



//Task#8:

/*
var message = " Ali and Sami are best friends They play cricket and football together" ; 
var replace = message.replace(/and/g , "&");
document.write(message+ "<br> " +replace);
*/


//Task#9:

/*
var value = "472";
document.write("Value: " +value+ "<br> Type : " );
document.write( typeof("value") ,"<br>");
var value = 472;
document.write("Value: " +value+ "<br> Type : " );
document.write( typeof(value));
*/


//Task#10:

/*
var value = prompt("Enter a value");
alert(value.toUpperCase());
*/



//Task#11:

/*
var name = prompt("Please enter");
var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
document.write("User input :  "+name+ "<br> title case : " + nameCapitalized);

*/




//Task#12:

/*
var num = 35.36;
num = num.toString();
var string = num.replace(".","");
document.write("Number : " +num+ "<br> Result : " +string);
*/




//Task#13

/*
var b = prompt("Enter an alphabet");
var a = b.charCodeAt(b);
if (a == 33 || a == 64 || a == 44 || a == 46 ){
	alert("Please enter a valid user name");
}
else{
	alert(b);
}
*/


//Task#14

/*
var A = ["cake","apple pie", "cookies", "chips", "patties"];
var B = prompt("Welcome to ABC Bakery. What do you want to orser sir/,ma\'maam?");
B = B.toLowerCase();

for (var i = 0; i < B.length; i++){
	
if(B === A[i]){
	
	document.write(B + " is avalaible at index " +i);
	break;
}
}

if (B != A[i]) {
	    document.write("We are sorry " + B + " is <b>not available</b> in our bakery");
}
*/

//Task#16:
/*
var a = "unversity of karachi";
var spilt = a.split("");
for (var i = 0; i < spilt.length; i++)
document.write(spilt[i]+ "<br>");

*/


//Task#17:


/*
var a = prompt("Please Enter");
var b= a.slice(-1);
document.write("User input : " +a+ "<br> Last character of input : " +b);
*/


//Task#18:

/*
var c = "the";

var a ="The quick brown fox jumps over the lazy dog";
var b = a.toLowerCase();
b= b.split(" ");
var count = 0;
for(var i=0;i<b.length;i++)
{
	if( c=== b[i]){
		count++;
	}

}
document.write(a+ "<br> there are  " +count+ " occurance(s) of word " +c );


*/



//CHAPTER NO :26-30:


//Task#1:


/*
var a = prompt("enter a positive integer number");
 var round =Math.round(a);
 var floor =Math.floor(a);
 var ceil =Math.ceil(a)
 document.write("Number : " +a+ "<br> round of value : " +round+ "<br> floor value : " +floor+ "<br> ceil value : " +ceil);  
*/




//Task#2:


/*
var a = prompt("enter a negative integer number");
 var round =Math.round(a);
 var floor =Math.floor(a);
 var ceil =Math.ceil(a)
 document.write("Number : " +a+ "<br> round of value : " +round+ "<br> floor value : " +floor+ "<br> ceil value : " +ceil);  

*/



//Task#3:
/*
document.write("Absolute value of -4 is " + Math.abs(-4));  
*/



//Task#4:
/*
var random = Math.random(4); 
document.write("Random dice value : " + random ); 
*/


//Task#5:


/*
var random = Math.floor(Math.random() * 2) +1;

if( random === 1){
   document.write("1 <br> Random coin value : Heads");
 }else{
   document.write("2 <br> Random coin value : Tails");
}
*/


//Task#6:

/*
var random = Math.floor(Math.random() * 100) +1;
document.write(" random number between 1 and 100 : "+random);
*/

//Task#7:

/*
var a = prompt("enter your weight in kilogram");
a = parseFloat(a);
document.write("the weight of user is " +a+ " kilogram");
*/





//Task#8:

/*
var a = 9;
var b = prompt("Enter a Number");
var b=Math.floor(Math.random() * 10) +1;
if( a === b){
   document.write("Congrulation!");
 }else{
   document.write("Try again!");
}

*/



//CHAPTER 31---34

//TASK1
 var date = new Date();
        document.write("<h3>" + date + "</h3>");

 //TASK2//
  var  month = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"]; 
        var date = new Date();
        var currentMonth = date.getMonth();
        alert(month[currentMonth]);


    //TASK3
     var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var date = new Date();
        var currentDay = date.getDay();
        alert("Today is " + days[currentDay]);

        //TASK4



         var msg = "It's Fun day";
        var date = new Date();
        var currentDay = date.getDay();
        if(currentDay === 0 || currentDay === 6) {
            alert(msg);
        }
        else {
            alert("Today's Working Day");
        }

        //TASK5

         var date = new Date();
        var currentDate = date.getDate();
        if (currentDate <= 15) {
            alert("First Fifteen Days of the Month");
        }
        else {
            alert("Last Days of the Month");
        }


        //TASK6

         var current = new Date();
        var getMilliseconds = current.getTime();
        var getMinutes = getMilliseconds/(59*59);
        document.write("<h3>Current Date: " + current + "</h3>" );
       document.write("<h3> Elapsed Milliseconds Since january 1, 1970: " + getMilliseconds +"</h3>" );
        document.write("<h3>Elapsed Minutes Since january 1, 1970: " + getMinutes + "</h3>");
    

    //TASK7


     var date = new Date();
        var hours = date.getHours();
        if (hours >= 0 && hours <12) {
            alert("It's AM");
        }
        else {
            alert("It's PM");
        }

        //TASK8

          var laterDate = new Date(2020, 11, 31);
        alert(laterDate); 

        //TASK9


         var current = new Date();
        var pastRamadan = new Date("aprail 25, 2020");
        var currentTime = current.getTime();
        var ramadanTime = pastRamadan.getTime();
        var days = Math.floor(((currentTime-ramadanTime)/ 1000) / (59 * 59 *24));
        document.write("<h3>Current Date: " + current + "<br />" +
        "Ramadan Date: " + pastRamadan + "<br />" +
        days + " Days have passed since 1st Ramadan 2020</h3>"); 


        //TASK10

         var date = new Date();
        var refDate = new Date("December 18, 2019");
        var a = date.getTime();
        var b = refDate.getTime();
        var mathExp = a - b;
        document.write("<h3>"+"On Reference Date"+refDate+"</h3"+"<br/>");
        document.write("<h3>" + Math.floor(mathExp / (1000*59)) + " Seconds Passed Since Beginning of 2020</h3>");

        //TASK11

         var current = new Date();
        var time = current.toString();
        current.setHours(current.getHours()-1)
        document.write("<h3>Current Date: " + time + "<br /><br/>" + "1 Hour ago It was " + current.toString() + "</h3>");

        //TASK12
         var current = new Date();
        var time = current.toString();
        var yearAgo = current.setFullYear(1920);
        document.write("<h3>Current Date: " + time + "<br /><br />" + "100 Years Back it Was " + current.toString() + "</h3>");


        //TASK13
 var userInput = prompt("Enter your Age?");
        userInput = parseInt(userInput);
        var year = 2020 - userInput;
        document.write("<h3>User Age is " + userInput + "<br /><br />" +
        "User born in the " + year + "</h3>");

        

        //TASK14


         var name = prompt("Enter Customer Name?");
        name = name.toUpperCase();
        var month = prompt("Enter Current Month?");
        month = month.toUpperCase();
        var unit = prompt("Enter Number of Units?");
        unit = Number(unit);
        var charges = prompt("Enter Charges Per Units?");
        charges = Number(charges);
        var net = unit * charges;
        var late = 350;
        var latePay = net + late;
        document.write("<h2>Customer Name: " + name + "<br />" +
        "Current Month: " + month + "<br />" +
        "Number of Units: " + unit + "<br />" +
        "Charges Per Unit: " + charges + "<br />" +
        "Net Amount Payable (Within Due Date): " + net + "<br />" +
        "late Payment Surharge: " + late + "<br />" +
        "Gross Amount Payable (After Due Date): " + latePay + "</h2>"); 


        //CHAPTER:35---38

        //TASK1

                function today(){
        var date = new Date();
        document.write("<h3>" + date + "</h3>");
        }
        today();

        //TASK2

        function sadia(){
        var firstName = prompt("Enter your First Name?");
   var lastName = prompt("Enter your Last Name?");
   var fullName = firstName + lastName;
   fullName = fullName.toUpperCase();
   document.write(" Your Ful Name" ,"<br>"+fullName );
        }
        sadia();

///TASK3

 function sadia(){
        document.write("<br><br><b>ADDiTION</b>");
var num1 = prompt(" ADDITION...\n\nENTER FIRST NUMBER");
var num2 = prompt("ENTER SECOND NUMBER");

var sum = ((+num1)+(+num2));
document.write("<br>sum of "+num1+" & "+num2+" is "+sum);
        }
        sadia();

 ///TASK4
  function sadia(){
        var num1 = prompt("Enter First Number?");
num1 = Number(num1);
var num2 = prompt("Enter Second Number?");
num2 = Number(num2);
var operator = prompt("Enter operator?");
var result;
switch(operator) {
    case "+" :
        result = num1 + num2;
        alert(result);
        break;
    case "-" :
        result = num1 - num2;
        alert(result);
        break;
    case "*" :
        result = num1 * num2;
        alert(result);
        break;
    case "/" :
        result = num1 / num2;
        alert(result);
        break;
    default :
        alert("Invlid");
}
        }
       sadia();



   ///TASK5
   
    function squareIt() {
         var number= prompt("Enter any number to check square?");

document.write("Square Of the Number: "+Math.pow(number,2));
        }
         squareIt()
                  
///TASK6

             function Factorial(n) { 
                 var n=prompt("Enter a number Will You chek factorial");
            var ans=1;   
            for (var i = 2; i <= n; i++) 
                ans = ans * i; 
            document.write("<h2>"+"Factorial of " + n +" is :" + ans +"</h2>");
        } 


        //TASK7


      function count(){
        var junaid =prompt("enter any string do you count the Start end ")
        var n=junaid.length;
        document.write("<h3>"+"Length of the string: Start to End", "<br>"+n);
        }
        count();
        

      ///TASK8
      

       function sadia(){
        var hyp;
        var base= prompt("Enter any number to Base?");
        var pre=prompt("Enter a number prepedicluer ?")
        hyp=base*base+pre*pre;
        document.write("<h3>"+" Hypotenuse2 is perpendicluer and base: "+hyp,"<br>");
        document.write(" Hypotenuse is Square root: "+Math.sqrt(hyp)+"<h3>")
        }
        sadia(); 


        //TASK9

         var width = prompt("Enter a whole number for the width of your rectangle.");
        var height = prompt("Enter a whole number for the height of your rectangle.");
        function area(width, height) {
            return width * height;
        }
        function perimeter(width, height) {
            return 2*( width * height);
        }
        
        document.writeln("<h2>"+'The area of your rectangle is ' + area(width, height)+"<br>");         
        document.writeln('The perimeter of your rectangle is ' + perimeter(width, height));


//TASK10

   function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
// Check whether the string is empty or not
	if(cstr==="") {
		document.write("Nothing found!");
		return false;
	}
// Check if the length of the string is even or odd 
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
// If the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			document.write("Entry is a palindrome."+"<br>");
			return true;
		} else {
// If the length of the string is odd ignore middle character
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			document.write("Entry is not a palindrome."+"<br>");
			return false;
		}
	}
	document.write("The entry is a palindrome."+"<br>");
	return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');    



///TASK11//

 function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("<h2>"+"Example String: 'the quick brown fox'"+"<br>")
document.write("Expexted Output :  "+uppercase("the quick brown fox"));
    



    //TASK12

      function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("<h2>"+"Example String:'Web development tutorial'"+"<br>");
document.write("Expexted Output :  "+find_longest_word('Web Development Tutorial'));


//TASK13


 function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("Sample arguments: "+char_count('JSResourceS.com', 'o'));



//TASK14


 function calcCircumference(radius) {
  var circumference = (Math.PI * 2) * radius;
  var area = (Math.pow(radius, 2)) * Math.PI;
 
  document.write("<h2>"+"The circumference of a circle with a radius of " + radius + " is " + circumference + 
  ".The area for this circle is " + area + "."+"</h2>")
}
calcCircumference(37)
calcCircumference(10);
    





//////////////CHAPTER21-------38///////////////////////////
//////////////////COMPLETE ASSIGNMENT//////////////////////////

///////////////////SADIA SIDDIQUE/////////////////////////////