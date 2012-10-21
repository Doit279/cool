var win = Ti.UI.currentWindow;  
var customFont = 'Herc'; // use the friendly-name on iOS
if(Ti.Platform.osname=='android') {
   // on Android, use the "base name" of the file (name without extension)
   customFont = 'Harabara';
} 
 
//-- We set the background here since this wont change
//-- win.backgroundImage = '../imagess/bg_main.png';  
var square = Ti.UI.createView({
    top:352,
    backgroundColor:'#999eb5',
    opacity:0.34, 
    height:98,
    width:420
	});
	win.add(square);  
	

var square = Ti.UI.createView({
    top:450,
    opacity: 0.68,
    backgroundColor: '#999eb5',
    zIndex: 1000,
    height:50,
    width:420
	});
	win.add(square); 
	
var label1 = Titanium.UI.createLabel({
   text:'Welcome User',
   font:{
   fontSize:30,
   fontFamily: customFont,    
   },
   textAlign:'center',
   top:458,
   right: 70,
   zIndex: 2000,
   width:'auto'
   });
   win.add(label1);
	
//-- ScreenSaver Button
var button1 = 
	Ti.UI.createButton({
	backgroundImage:'../imagess/homebutton.png',
	top:461, left:70,
	zIndex:2000,
	height:27, width:110
	});

var splash = Ti.UI.createWindow({
        background:'#999eb5'
});
 
button1.addEventListener('click',function(e){
    splash.open();  
});
 
win.add(button1);
splash.open();

//-- Include the date
//-- Ti.include('../includes/date.js')

//-- Include the time
//-- Ti.include('../includes/clock.js')

