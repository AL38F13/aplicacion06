// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$("#btnvibrar").on("tap",function(){
	navigator.vibrate(1000);}); 
//tap a btnvibrar
$("#btnbeep").on("tap",function(){
	navigator.beep(1);});
//tap a btnbeep
$("#Izquierda").on("swipeleft",function(){
	alert("Barrio a la Izquierda")
});
$("#Derecha").on("swiperight",function(){
	alert("Barrio a la Derecha")
});
  document.addEventListener("pause",function(){
	  $('#listado').append("<p> se pauso </p>");
  }); 
   document.addEventListener("resume",function(){
	   $('#listado').append("<p> se reinicio </p>");
   });
   $(window).on('orientationchange',function(e){
	   $('#listado').append("<p> orientation:" + e.orientation + "</p>");
   });
}); 
});