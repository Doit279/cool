var date = Ti.UI.createLabel({  
    text:'',  
    font:{  
        fontFamily:'Verdana',  
        fontWeight:'bold',  
        fontSize:30  
    },   
    textAlign:'center',  
    width:Ti.Platform.displayCaps.platformWidth,  
    height:35,  
    top:375,   
});

function getFormattedTime()  
{
	var d = new Date();
	var currentMonth = d.getMonth() + 1;
	var currentYear = d.getFullYear();
	//day of the week
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	var currentDay = weekday[d.getDay()];
	//day of the month
	var month=new Array();
	month[0]="January";
	month[1]="February";
	month[2]="March";
	month[3]="April";
	month[4]="May";
	month[5]="June";
	month[6]="July";
	month[7]="August";
	month[8]="September";
	month[9]="October";
	month[10]="November";
	month[11]="December";
				
	var currentMonth = month[d.getMonth()]; 
	date.text = currentDay + ',' + currentMonth + ' ' + currentYear;  
}
var clockInterval = setInterval(getFormattedTime,1000);  
getFormattedTime();   
win.add(date);    