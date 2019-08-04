var payload= ""
$.ajax({
	"url":"http://127.0.0.1:5000/output",
	success:function(result){
		console.log(result)
		payload=JSON.parse(result)
		createMap()
	},
	error:function(err){

	}
})

function createMap() {
 var mymap = L.map('mapid').setView([payload[0].latitude, payload[0].longitude], 5);
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5raXQxNjM3IiwiYSI6ImNqaDRlaGw3cDBtcjQzNGw1NHJvYWl6dDkifQ.psAylc4yX2KUApkacZn6aw'
}).addTo(mymap);

for (var i=0;i<400;i++){
var marker = L.marker([payload[i].latitude, payload[i].longitude]).addTo(mymap);
marker.bindPopup(payload[i].city_name=payload[i].city_name+"<br>"+payload[i].year+"<br>"+payload[i].toa).openPopup();
var circle = L.circle([payload[i].latitude, payload[i].longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);}
}