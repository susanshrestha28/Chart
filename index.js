const chartProperties = {
  timeScale: {
    timeVisible: true,
    secondsVisible: false,
  }
}
document.getElementById('credits').title = 'Susan Shrestha'
// const domElement = document.getElementById('tvchart');
// const chart = LightweightCharts.createChart(domElement, chartProperties);
// const candleSeries = chart.addLineSeries();



//   candleSeries.update({ time, value });
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php', false ); // false for synchronous request
xmlHttp.send( null );
var names = new Array();
var addresses = new Array();
var descriptions = new Array();
var exchanges = new Array();
var latitudes = new Array();
var longitudes = new Array();
var symbols = new Array();
var sectors = new Array();
var subindustries = new Array();
var websites = new Array();
var financials = new Array();
var financialsyears = new Array();
var financialsearning = new Array();
var financialassets = new Array();
var financialliabilities = new Array();
var financialrevenues = new Array();
var jsondatas = JSON.parse(xmlHttp.responseText)
ul = document.createElement('ul');
  ul.id = 'ul'
function removetext() {
  console.log('clear')
  document.getElementById('inputfield').value = '';
}  
function Go() {
  ul.remove();
names.length = 0;
addresses.length = 0;
descriptions.length = 0;
exchanges.length = 0;
latitudes.length = 0;
longitudes.length = 0;
symbols.length = 0;
sectors.length;
subindustries.length;
websites.length = 0;
financials.length = 0;
financialrevenues.length = 0;

  var value = document.getElementById('inputfield').value;
  console.log(value)
  var data = search(value);
  showlist(data)
}
function search(value) {
   var filteredArray = [];
   for(var i = 0; i < jsondatas.length;i++) {
     value = value.toLowerCase()
     var name = jsondatas[i].name.toLowerCase();
     if(name.includes(value)) {
       filteredArray.push(jsondatas[i]);
     }
   }
   //console.log(filteredArray);
   return filteredArray;
}
function showlist(filtered) {
  filtered.map(datas => {
    names.push(datas.name);
    symbols.push(datas.symbol); 
    subindustries.push(datas.subindustry);
    addresses.push(datas.address);
    websites.push(datas.website);
    exchanges.push(datas.exchange);
    descriptions.push(datas.description);
    latitudes.push(datas.latitude)
    longitudes.push(datas.longitude);
    financials.push(datas.financials);
    //financialsyears.push(data.financials.years);
    //console.log(datas);
  });
  console.log(financials)
  //console.log(financialsyears);
  function Filter(event) {
    console.log(event.target.value);
    var result = [];
    for(var k = 0;k< names.length;k++) {
      if(names[k].indexOf(event.target.value) == 0);
      result.push(names[i]);
    }
    console.log(result)
    //return results;
  } 
  ul = document.createElement('ul');
  ul.id = 'ul'
  document.getElementById('listofcompanies').appendChild(ul);
  for(var i = 0 ;i < names.length;i++){
    li = document.createElement('li');
    p = document.createElement('p');
    li.appendChild(p);
    li.style.width = '15vw';
    //console.log(i)
    p.id = `${i}`;
   ul.appendChild(li);
  p.innerHTML = names[i];
  }
    
  
  
  setTimeout(() => {
    for(let j = 0;j < names.length;j++) {
      document.getElementById(`${j}`).addEventListener('click',()=> {
       // alert(document.getElementById(`${j}`).innerHTML);
       
        document.getElementById('middle_second_top_desc').innerHTML = `${symbols[j]},${names[j]},${subindustries[j]},${addresses[j]},${websites[j]},${exchanges[j]},${descriptions[j]}`
        document.getElementById('middle_second_top_img').src = `./logos/${symbols[j]}.svg`
        var companynamesymbol = `${names[j]},${symbols[j]}`
        window.localStorage.setItem('companynamesymbol', companynamesymbol);
        window.localStorage.setItem('desc', descriptions[j]);
        if(financials[j] == null){
            window.localStorage.setItem('assets1', 'N/A')
            window.localStorage.setItem('assets2', 'N/A')
            window.localStorage.setItem('assets3', 'N/A')
            window.localStorage.setItem('earning1', 'N/A')
            window.localStorage.setItem('earning2', 'N/A')
            window.localStorage.setItem('earning3', 'N/A')
            window.localStorage.setItem('liability1', 'N/A')
            window.localStorage.setItem('liability2', 'N/A')
            window.localStorage.setItem('liability3', 'N/A')
            window.localStorage.setItem('revenue1', 'N/A')
            window.localStorage.setItem('revenue2', 'N/A')
            window.localStorage.setItem('revenue3', 'N/A') 
        } else {
          window.localStorage.setItem('assets1', financials[j].assets[0])
            window.localStorage.setItem('assets2', financials[j].assets[1])
            window.localStorage.setItem('assets3', financials[j].assets[2])
            window.localStorage.setItem('earning1', financials[j].earnings[0])
            window.localStorage.setItem('earning2', financials[j].earnings[1])
            window.localStorage.setItem('earning3', financials[j].earnings[2])
            window.localStorage.setItem('liability1', financials[j].liabilities[0])
            window.localStorage.setItem('liability2', financials[j].liabilities[1])
            window.localStorage.setItem('liability3', financials[j].liabilities[2])
            window.localStorage.setItem('revenue1', financials[j].revenue[0])
            window.localStorage.setItem('revenue2', financials[j].revenue[1])
            window.localStorage.setItem('revenue3', financials[j].revenue[2])
        }
        //window.localStorage.setItem('year1',financials[j])
        const myLatLng = {lat: latitudes[j], lng: longitudes[j]};
        const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 4,
         center: myLatLng,
       });
       new google.maps.Marker({
         position: myLatLng,
         map,
         title: `${names[j]}`,
       });
      })
    }
  })
}

  
 
// console.log(names)
// function filter(names, index, letter) {
//   var filteredNames = names.filter(function(word) {
//      return word.charAt(index) === letter;
//   });
//   return filteredNames;
// }


//console.log(stockdatas);
// stockdatas.map(datas => {
//   console.log(datas);
// })