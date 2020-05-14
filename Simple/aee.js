function DailyOpen(ACash)
{
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4)
    {
      document.getElementById("Status").innerHTML =
      this.responseText;
    }
  };
        
  var sessionId = document.getElementById("SessionId").Value;
  xhttp.open("POST", "DailyOpen", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("SessionId=" + sessionId + "&DocumentGeneral.Barcode=auto&DocumentGeneral.CopyCount=1&Payments[0].Amount=" + ACash + "&Payments[0].PaymentMediaIndex=0&Payments[0].Info=Befizetés");
}

function CashReport()
{
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4)
    {
      document.getElementById("Status").innerHTML =
      this.responseText;
    }
  };
        
  var sessionId = document.getElementById("SessionId").Value;
  xhttp.open("POST", "CashReport", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("SessionId=" + sessionId + "&DocumentGeneral.Barcode=auto&DocumentGeneral.CopyCount=1");
}
    
function DailyClose()
{
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4)
    {
      document.getElementById("Status").innerHTML =
      this.responseText;
    }
  };
        
  var sessionId = document.getElementById("SessionId").Value;
  xhttp.open("POST", "DailyClose", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("SessionId=" + sessionId + "&DocumentGeneral.Barcode=auto&DocumentGeneral.CopyCount=1");
}
