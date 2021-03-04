var xmlHttp2 = new XMLHttpRequest();
xmlHttp2.open( "GET", 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=AMD', false); // false for synchronous request
xmlHttp2.send( null );
var stockdatas = JSON.parse(xmlHttp2.responseText);
//console.log(stockdatas);
var dates = [];
var opens = [];
var closes = [];
var highs = [];
var lows = [];
var  volumes = [];
let div1;
let div2;
let div3;

//opens = JSON.parse(window.localStorage.getItem('opens'));
//closes = JSON.parse(window.localStorage.getItem('closes'));
//highs = JSON.parse(window.localStorage.getItem('highs'));
//lows = JSON.parse(window.localStorage.getItem('lows'));
//volumes = JSON.parse(window.localStorage.getItem('volumes'));

stockdatas.map(datas=> {
    dates.push(datas.date);
    opens.push(Number(datas.open).toFixed(4));
    closes.push(Number(datas.close).toFixed(4));
    highs.push(Number(datas.high).toFixed(4));
    lows.push(Number(datas.low).toFixed(4));
    volumes.push(Number(datas.volume));
    
})
window.localStorage.setItem('dates',JSON.stringify(dates));
window.localStorage.setItem('opens',JSON.stringify(opens));
window.localStorage.setItem('closes',JSON.stringify(closes));
window.localStorage.setItem('highs',JSON.stringify(highs));
window.localStorage.setItem('lows',JSON.stringify(lows));
window.localStorage.setItem('volumes',JSON.stringify(volumes));

//console.log(volumes)
var avgopen = 0
var minopen = 0
var maxopen = 0

var avgclose = 0
var minclose = 0
var maxclose = 0

var avglow = 0
var minlow = 0
var maxlow = 0

var avghigh = 0
var minhigh = 0
var maxhigh = 0

var avgvolume = 0
var minvolume = 0
var maxvolume = 0



for(var i = 0; i < dates.length; i++) {
  div = document.createElement('div');
  div.className = 'middle_third_list';
  document.getElementById('stock_container').appendChild(div);  
  p1 = document.createElement('p');
  p2 = document.createElement('p');
  p3 = document.createElement('p');
  p4 = document.createElement('p');
  p5 = document.createElement('p');
  p6 = document.createElement('p');
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);     
  div.appendChild(p4);
  div.appendChild(p5);
  div.appendChild(p6);
  p1.innerHTML = dates[i];
  p2.innerHTML = opens[i];
  p3.innerHTML = closes[i];
  p4.innerHTML = lows[i];
  p5.innerHTML = highs[i];
  p6.innerHTML = volumes[i];
  
    avgopen = avgopen + Number(opens[i]);
    avgclose = avgclose + Number(closes[i]);
    avglow = avglow + Number(lows[i]);
    avghigh = avghigh + Number(highs[i]);
    avgvolume = avgvolume + Number(volumes[i]);
    
}

maxopen = Math.max.apply(Math, opens);
minopen = Math.min.apply(Math, opens);
avgopen = avgopen/opens.length;

maxclose = Math.max.apply(Math, closes);
minclose = Math.min.apply(Math, closes);
avgclose = avgclose/closes.length;

maxlow = Math.max.apply(Math, lows);
minlow = Math.min.apply(Math, lows);
avglow = avglow/lows.length;

maxhigh = Math.max.apply(Math, highs);
minhigh = Math.min.apply(Math, highs);
avghigh = avghigh/highs.length;

maxvolume = Math.max.apply(Math, volumes);
minvolume = Math.min.apply(Math, volumes);
avgvolume = avgvolume/volumes.length;

div = document.createElement('div');
document.getElementById('middle_third_bottom').appendChild(div)
p1 = document.createElement('p')
p2 = document.createElement('p')
p3 = document.createElement('p')
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
p1.innerHTML = avgopen.toFixed(3);
p2.innerHTML = minopen.toFixed(3);
p3.innerHTML = maxopen.toFixed(3);

div = document.createElement('div');
document.getElementById('middle_third_bottom').appendChild(div)
p1 = document.createElement('p')
p2 = document.createElement('p')
p3 = document.createElement('p')
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
p1.innerHTML = avgclose.toFixed(3);
p2.innerHTML = minclose.toFixed(3);
p3.innerHTML = maxclose.toFixed(3);

div = document.createElement('div');
document.getElementById('middle_third_bottom').appendChild(div)
p1 = document.createElement('p')
p2 = document.createElement('p')
p3 = document.createElement('p')
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
p1.innerHTML = avglow.toFixed(3);
p2.innerHTML = minlow.toFixed(3);
p3.innerHTML = maxlow.toFixed(3);

div = document.createElement('div');
document.getElementById('middle_third_bottom').appendChild(div)
p1 = document.createElement('p')
p2 = document.createElement('p')
p3 = document.createElement('p')
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
p1.innerHTML = avghigh.toFixed(3);
p2.innerHTML = minhigh.toFixed(3);
p3.innerHTML = maxhigh.toFixed(3);

div = document.createElement('div');
document.getElementById('middle_third_bottom').appendChild(div)
p1 = document.createElement('p')
p2 = document.createElement('p')
p3 = document.createElement('p')
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
p1.innerHTML = avgvolume.toFixed(3);
p2.innerHTML = minvolume;
p3.innerHTML = maxvolume;

function viewChart() {
    document.getElementById('middle').style.display = 'none';
    document.getElementById('chart').style.display = 'flex';
    document.getElementById('charts_left_above_header').innerHTML = window.localStorage.getItem('companynamesymbol'); 
    document.getElementById('charts_left_above_desc').innerHTML = window.localStorage.getItem('desc');
    
        div1 = document.createElement('div')
        div1.className = 'charts_left_below_div';
        document.getElementById('charts_left_below').appendChild(div1);
        p1 = document.createElement('p')
        p2 = document.createElement('p')
        p3 = document.createElement('p')
        p4 = document.createElement('p')
        p5 = document.createElement('p')
        div1.appendChild(p1)
        div1.appendChild(p2)
        div1.appendChild(p3)
        div1.appendChild(p4)
        div1.appendChild(p5)
        p1.innerHTML = '2019'
        p2.innerHTML = window.localStorage.getItem('assets1');
        p3.innerHTML = window.localStorage.getItem('earning1');
        p4.innerHTML = window.localStorage.getItem('liability1');
        p5.innerHTML = window.localStorage.getItem('revenue1');
        
       div2 = document.createElement('div')
        div2.className = 'charts_left_below_div';
        document.getElementById('charts_left_below').appendChild(div2);
        p1 = document.createElement('p')
        p2 = document.createElement('p')
        p3 = document.createElement('p')
        p4 = document.createElement('p')
        p5 = document.createElement('p')
        div2.appendChild(p1)
        div2.appendChild(p2)
        div2.appendChild(p3)
        div2.appendChild(p4)
        div2.appendChild(p5)
        p1.innerHTML = '2018'
        p2.innerHTML = window.localStorage.getItem('assets2');
        p3.innerHTML = window.localStorage.getItem('earning2');
        p4.innerHTML = window.localStorage.getItem('liability2');
        p5.innerHTML = window.localStorage.getItem('revenue2');  
        
       div3 = document.createElement('div')
        div3.className = 'charts_left_below_div';
        document.getElementById('charts_left_below').appendChild(div3);
        p1 = document.createElement('p')
        p2 = document.createElement('p')
        p3 = document.createElement('p')
        p4 = document.createElement('p')
        p5 = document.createElement('p')
        div3.appendChild(p1)
        div3.appendChild(p2)
        div3.appendChild(p3)
        div3.appendChild(p4)
        div3.appendChild(p5)
        p1.innerHTML = '2017'
        p2.innerHTML = window.localStorage.getItem('assets3');
        p3.innerHTML = window.localStorage.getItem('earning3');
        p4.innerHTML = window.localStorage.getItem('liability3');
        p5.innerHTML = window.localStorage.getItem('revenue3');
}
function Close() {
    document.getElementById('middle').style.display = 'flex';
    document.getElementById('chart').style.display = 'none';
    div1.remove();
    div2.remove();
    div3.remove();
}
function Speak() {
    let speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = window.localStorage.getItem('desc');
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;                
    
    window.speechSynthesis.speak(speech);
}
let labels4 = dates;
let myChart4 = document.getElementById("myChart4").getContext('2d');
let chart4 = new Chart(myChart4, {
    type: 'line',
    data: {
        labels: labels4,
        datasets: [ {
            label: 'open',
            data: opens,
            fill: true,
            borderColor: 'green',
            
        }, {
            label: 'close',
            data: closes,
            fill: true,
            borderColor: 'red',
        }, {
            label: 'low',
            data: lows,
            fill: true,
            borderColor: 'blue',
        }, {
            label: 'high',
            data: highs,
            fill: true,
            borderColor: 'yellow',
        }
    ],
    },
    options: {
        title: {
            text: 'name',
            display: true,
        }
    }
});


let myChart1 = document.getElementById("myChart1").getContext('2d');
let chart1 = new Chart(myChart1, {
    type: 'bar',
    data: {
        labels: labels4,
        datasets: [ {
            label: 'open',
            data: opens,
            fill: true,
            backgroundColor: 'green',
            
        }, {
            label: 'close',
            data: closes,
            fill: true,
            backgroundColor: 'red',
        }, {
            label: 'low',
            data: lows,
            fill: true,
            backgroundColor: 'blue',
        }, {
            label: 'high',
            data: highs,
            fill: true,
            backgroundColor: 'yellow',
        }
    ],
    },
    options: {
        title: {
            text: 'name',
            display: true,
        }
    }
});

let myChart2 = document.getElementById("myChart2").getContext('2d');
let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels4,
        datasets: [ {
            label: 'open',
            data: opens,
            fill: true,
            //backgroundColor: 'green',
            
        }, {
            label: 'close',
            data: closes,
            fill: true,
            //backgroundColor: 'red',
        }, {
            label: 'low',
            data: lows,
            fill: true,
           // backgroundColor: 'blue',
        }, {
            label: 'high',
            data: highs,
            fill: true,
           // backgroundColor: 'yellow',
        }
    ],
    },
    options: {
        title: {
            text: 'name',
            display: true,
        }
    }
});
