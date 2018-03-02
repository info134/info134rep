function initMap() {
  var bergen = {lat: 60.392997, lng: 5.324128};
  var damsgard = {lat: 60.383356, lng: 5.302125};
  var festning = {lat: 60.400024, lng: 5.318670};
  var nordnes = {lat: 60.399679, lng: 5.303453};
  var fisketorget = {lat: 60.394905, lng: 5.325287};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: bergen
  });

var text = fs.readFileSync("toalett.json", "utf8");
console.log(text);

var jsons = JSON.parse($.getJSON({'url': "https://hotell.difi.no/api/json/bergen/dokart?", 'async': false}).responseText);
console.log(jsons);
function jsonload(){

  var obj = JSON.parse("\toalett.json");
  document.getElementById("toaletter").innerHTML = obj.herre;
  alert(mydata[0].herre);
var json3 = require('toalett.json');
console.log(json3);

function jsonload2(){
  $.ajax({
    url: "\toalett.json",
    success: function (data) {
        var obj = JSON.parse(data);
    }
});
}



function closem(){
  infowindow1.close()
  infowindow2.close()
  infowindow3.close()
  infowindow4.close()
  infowindow5.close()
}

var i2 = '<div>'+'<h8 id= googletittel' +
'<p><b> Damsgård Hovedgård</b> er en gammel bygning som ble brukt som feriehus, ' +
'i dag er det et museum der. Vi anbefaler det på det sterkeste</p>'+ '</div>';
var i1 = '<p> Bergen er en by og kommune i Hordaland; og et tidligere fylke (til 1972) på Norges vestkyst, omgitt av «De syv fjell», og omtalt som «Vestlandets hovedstad». Bergen ble grunnlagt av Olav Kyrre i 1070 med navnet Bjørgvin, som betyr «den grønne engen mellom fjellene».</p>'+
'<a href= "https://no.wikipedia.org/wiki/Bergen"> Les mer</a>';
var i3 = '<head><style> img{ float: right; width: 30%;}</style></head><body>'+
'<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bergenhus.2.JPG/270px-Bergenhus.2.JPG">'
+'<p> Bergenhus festning ligger i innseilingen til Vågen i Bergen. Dette er en av de eldste og best bevarte festningene i Norge faktisk.'
+' Den mest korrekte betegnelsen på Bergenhus er egentlig Bergenhus slott, siden det var kongebolig og administrasjonssentrum dengang Bergen var hovedstad i Norge. (Betegnelsen -hus betyr i slike tilfeller «befestet slott».)'
+ 'Festningsanlegget omfatter området mellom Koengen i øst, Bradbenken i sør, Festningskaien i vest og Bontelabo i nord.</p> </body>';
var i4 ='<p> Nordnes har en fin park og et fint akvarie</p>';
var i5 ='<p> Fisketorget er en turistperle og for noen en turistfelle</p>'+
'<iframe width="360" height="215" src="https://www.youtube.com/embed/AavHiWPryc0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var infowindow2 = new google.maps.InfoWindow({content: i2});
var infowindow1 = new google.maps.InfoWindow({content: i1});
var infowindow3 = new google.maps.InfoWindow({content: i3});
var infowindow4 = new google.maps.InfoWindow({content: i4});
var infowindow5 = new google.maps.InfoWindow({content: i5});
  var marker1 = new google.maps.Marker({
    position: bergen,
    map: map
      });
      marker1.addListener('click', function() {
        closem()
        infowindow1.open(map, marker1)
      });
  var marker2 = new google.maps.Marker({
    position: damsgard,
    map: map
  });
  marker2.addListener('click', function() {
    closem()
    infowindow2.open(map, marker2)
  });
    var marker3 = new google.maps.Marker({
    position: festning,
    map: map
  });
  marker3.addListener('click', function() {
    closem()
    infowindow3.open(map, marker3)
  });
    var marker4 = new google.maps.Marker({
    position: nordnes,
    map: map
  });
  marker4.addListener('click', function() {
    closem()
    infowindow4.open(map, marker4)
  });
    var marker5 = new google.maps.Marker({
    position: fisketorget,
    map: map
  });
  marker5.addListener('click', function() {
    closem()
    infowindow5.open(map, marker5)
  });
}
