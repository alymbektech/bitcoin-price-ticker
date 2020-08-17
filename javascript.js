var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function parseJson(json) {
      var usdValue = "1 BTC = $" + json["bpi"]["USD"]["rate"];
      document.getElementById("data").innerHTML =  usdValue;
    }