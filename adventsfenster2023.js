function initialize() {

var calendar = [
{
'pos'     : new google.maps.LatLng(50.17975594829108, 6.626874550783409),
'name'    : 'Familie Vanreck',
'address' : 'Neustra&szlig;e 16',
'photoFull' : 'https://live.staticflickr.com/65535/53369123318_2f92e61d77_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53369123318_018e5bac2f_z.jpg',
'photoBy' : 'Rudi Benz'
}, 
{
'pos'     : new google.maps.LatLng(50.1752951091084, 6.6249406441505005),
'name'    : 'Daniela Peters',
'address' : 'M&uuml;rlenbacher Stra&szlig;e 6',
'photoFull' : 'https://live.staticflickr.com/65535/53369923757_ba567eea6c_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53369923757_45cda3f637_z.jpg',
'photoBy' : 'Rudi Benz'
},
{
'pos'     : new google.maps.LatLng(50.17823228499156, 6.622417057661863),
'name'    : 'Familie Simonis',
'address' : 'In der Kehrt 15',
'photoFull' : 'https://live.staticflickr.com/65535/53373107631_2aa3dd2ebe_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53373107631_357d19af86_z.jpg',
'photoBy' : 'Rudi Benz'
},
{
'pos'     : new google.maps.LatLng(50.19056361608636, 6.616951182514266),
'name'    : 'Familie Schifferings',
'address' : 'Vulkanhof',
'photoFull' : 'https://live.staticflickr.com/65535/53375882215_7a4973bbd9_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53375882215_efdda4fd0f_z.jpg',
'photoBy' : 'Rudi Benz'  
},
{
'pos'     : new google.maps.LatLng(50.18062299231784, 6.6254087419318815),
'name'    : 'Familie Schnieder',
'address' : 'B&uuml;desheimer Stra&szlig;e 38',
'photoFull' : 'https://live.staticflickr.com/65535/53378076955_8eb5daaa99_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53378076955_d46876bff7_z.jpg',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.178155850224435, 6.623370339032076),
'name'    : 'Familie Kohnen',
'address' : 'Birkenweg 16',
'photoFull' : 'https://live.staticflickr.com/65535/53379079117_c4b6d74f73_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53379079117_3c6b3a59eb_c.jpg',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.176767076635386, 6.6229655937149445),
'name'    : 'Familie Lorig',
'address' : 'Birkenweg 30',
'photoFull' : 'https://live.staticflickr.com/65535/53381210752_598e5815f2_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53381210752_bc1781b4c8_z.jpg',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.177612610594956, 6.630089192071052),
'name'    : 'Familie Schl&ouml;sser',
'address' : 'Michelbacher Stra&szlig;e 8',
'photoFull' : 'https://live.staticflickr.com/65535/53384405238_0360ec54b6_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53384405238_f689dc5af3_c.jpg',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.1799293892209, 6.6232720029195615),
'name'    : 'Familie Irsfeld',
'address' : 'In der Kehrt 8',
'photoFull' : 'https://live.staticflickr.com/65535/53386793570_e33bc12345_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53386793570_18837e59ac_c.jpg',
'photoBy' : 'Rudi Benz' 
}, 
{
'pos'     : new google.maps.LatLng(50.17742894117673, 6.618677165361083),
'name'    : 'Familie Junk',
'address' : 'Kopper Stra&szlig;e 42',
'photoFull' : 'https://live.staticflickr.com/65535/53389167255_5f88cfd29c_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53389167255_3a7338e49f.jpg',
'photoBy' : 'Rudi Benz' 
}, 
{
'pos'     : new google.maps.LatLng(50.17679656987223, 6.628551034050398),
'name'    : 'Jugendfeuerwehr Birresborn',
'address' : 'Bahnhofstra&szlig;e 26',
'photoFull' : 'https://live.staticflickr.com/65535/53391833794_0d52dc44d5_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53391833794_0041f403ea_z.jpg',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.17548817126219, 6.625359936047567),
'name'    : 'Familie Göres',
'address' : 'M&uuml;rlenbacher Stra&szlig;e 1',
'photoFull' : 'https://live.staticflickr.com/65535/53393924769_24bc3d34ee_o.jpg',
'photo'   : 'https://live.staticflickr.com/65535/53393924769_97627e529b_c.jpg',
'photoBy' : 'Rudi Benz' 
},
{  
'pos'     : new google.maps.LatLng(50.17358852313214, 6.620574260805694),
'name'    : 'Familie Bleses',
'address' : 'In der Noll 13',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.175856949000966, 6.6243416465825895),
'name'    : 'Physiotherapie Tina Br&uuml;ck',
'address' : 'Kopper Stra&szlig;e 7',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{  
'pos'     : new google.maps.LatLng(50.174802935158944, 6.624434754806541),
'name'    : 'Familie Bleses',
'address' : 'M&uuml;rlenbacher Stra&szlig;e 10',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.176283498437826, 6.623335844802905),
'name'    : 'Familie B&ouml;r&ouml;cz',
'address' : 'Kopper Stra&szlig;e 18',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.176029458153515, 6.624074715161486),
'name'    : 'Familie Stahl',
'address' : 'Kopper Stra&szlig;e 11',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.17764223899639, 6.624982933647776),
'name'    : 'Grundschule Birresborn',
'address' : 'Neustra&szlig;e 7',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.17567753516035, 6.624948532205393),
'name'    : 'B&auml;ckerei Blasius',
'address' : 'Kopper Stra&szlig;e 3',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.18198987655689, 6.630953780862615),
'name'    : 'Familie Becker',
'address' : 'Kalkweg 4',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png'
},
{
'pos'     : new google.maps.LatLng(50.17983777346937, 6.627750317704629),
'name'    : 'Familie Schmidt',
'address' : 'Neustrasse 21',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
}, 
{
'pos'     : new google.maps.LatLng(50.17456636534942, 6.624300448624867),
'name'    : 'Familie Thieltges',
'address' : 'Br&uuml;ckenstra&szlig;e 2 ',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.17709564526966, 6.6261124199518795),
'name'    : 'Familie Bitzigeio',
'address' : 'Gerolsteiner Stra&szlig;e 18',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
{
'pos'     : new google.maps.LatLng(50.17550476669239, 6.62444337238004),
'name'    : 'Ortsgemeinde Birresborn',
'address' : 'Altes Rathaus',
'photoFull' : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photo'   : 'https://live.staticflickr.com/65535/53335772043_4d0de202b0_o.png',
'photoBy' : 'Rudi Benz' 
},
];


var myLatlng = new google.maps.LatLng(50.17581834574783, 6.625217908998995); // Ortsmitte um die Karte zu zentrieren
var mapOptions = {
zoom: 17,
center: myLatlng,
scrollwheel: false
}
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// [url=https://flic.kr/p/2pfSb3h][img]https://live.staticflickr.com/65535/53333118524_b8066cf4ba_t.jpg[/img][/url][url=https://flic.kr/p/2pfSb3h]Adventsfenstericon[/url] by [url=https://www.flickr.com/photos/birresborn/]Gemeinde Birresborn[/url], on Flickr

let headline = document.getElementById('headline');
let familie = document.getElementById('announce');
let adresse = document.getElementById('addresse');
let fensterfoto = document.getElementById('fensterfoto');

let dateToday = new Date();

let runTo = calendar.length;
if (dateToday.getMonth() == 11) { //-- December is 11, stupid JS starts with January as 0
runTo = dateToday.getDate();
}



function setWindowMarker(d) {
map.panTo(calendar[d].pos);
var marker = new google.maps.Marker({
  icon: 'https://live.staticflickr.com/65535/53333118524_b8066cf4ba_t.jpg',
  position: calendar[d].pos,
  map: map,
  title: calendar[d].name,
  animation: google.maps.Animation.DROP
});

google.maps.event.addListener(marker, 'mouseover', function(event) {
    this.setIcon(calendar[d].photo);
    headline.innerHTML = (d+1) + ". Adventsfenster";
    familie.innerHTML = calendar[d].name + ' - ' + calendar[d].address;
    fotoby.innerHTML = calendar[d].photoBy;       
});
google.maps.event.addListener(marker, 'mouseout', function(event) {
    this.setIcon('https://live.staticflickr.com/65535/53333118524_b8066cf4ba_t.jpg');
});


headline.innerHTML = (d+1) + ". Adventsfenster";
familie.innerHTML = calendar[d].name + ' - ' + calendar[d].address;
fotoby.innerHTML = calendar[d].photoBy;
}

for (let c=0; c<runTo; c++) {
setTimeout(() => {
  setWindowMarker(c);
}, c * 2000);
}

}

google.maps.event.addDomListener(window, 'load', initialize);
