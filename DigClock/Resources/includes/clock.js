var time = Ti.UI.createLabel({  
    text:'',  
    font:{  
        fontFamily:'Harabara',  
        fontSize:30 
    },   
    textAlign:'center',  
    width:Ti.Platform.displayCaps.platformWidth,  
    height:35,  
    top:405,   
});  
function getFormattedTime()  
{  
    var amPM = '';  
    var d = new Date();
    var currentHour = d.getHours();  
    if (currentHour < 12)  
    {  
        amPM = 'AM';  
    }  
    else  
    
    {  
        amPM = 'PM';  
    }  
    if (currentHour == 0)  
    {  
        currentHour = 12;  
    }  
    if (currentHour > 12)  
    {  
        currentHour = currentHour - 12;  
    }  
    var currentMinute = d.getMinutes();  
    currentMinute = currentMinute + '';  
    if (currentMinute.length == 1)  
    {  
         currentMinute = '0' + currentMinute;  
    }  
    var currentSeconds = d.getSeconds();
    currentSeconds = currentSeconds + '';
    if (currentSeconds.length == 1)
   {
   	currentSeconds = '0' + currentSeconds;
   }
    
    time.text = "at " + currentHour + ':' + currentMinute + ':' + currentSeconds + ' '+ amPM;  
}  
var clockInterval = setInterval(getFormattedTime,1000);  
getFormattedTime();  
win.add(time);  