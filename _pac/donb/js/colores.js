/*
Pablo Alvarez
@depadac
Portfolio en Construccion
*/
var colors = [
      "#7FDBFF",
      "#0074D9",
      "#01FF70",
      "#001F3F",
      "#39CCCC",
      "#3D9970",
      "#2ECC40",
      "#FF4136",
      "#85144B",
      "#FF851B",
      "#B10DC9",
      "#FFDC00",
      "#F012BE",
    ];
    function Shuffle(o) {
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    Shuffle(colors);
    // contrast function by http://stackoverflow.com/a/11868398
    function getContrastYIQ(hexcolor){
      hexcolor = hexcolor.substr(1);
      var r = parseInt(hexcolor.substr(0,2),16);
      var g = parseInt(hexcolor.substr(2,2),16);
      var b = parseInt(hexcolor.substr(4,2),16);
      var yiq = ((r*299)+(g*587)+(b*114))/1000;
      return (yiq >= 128) ? true : false;
    }
    var body = document.getElementsByTagName('body')[0];
    if ( getContrastYIQ(colors[0]) ) {body.className = 'dark'}
    body.style.background = colors[0];
    var s = document.createElement("style");
    s.innerText = '::selection{color:' + colors[0] + ';}::-moz-selection{color:' + colors[0]  + ';}';
    document.head.appendChild(s);

    var favicon = document.querySelector('#favicon');
    var iosicon = document.querySelector('#iosicon');

    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = "16";
    var ctx = canvas.getContext('2d');
    ctx.rect(0,0,16,16);
    ctx.fillStyle = colors[0];
    ctx.fill();
    
    favicon.href = canvas.toDataURL();
    iosicon.href = canvas.toDataURL();
