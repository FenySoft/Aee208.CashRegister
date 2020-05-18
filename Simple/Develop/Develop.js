function DownloadMenu(AFunction, AName, ADiv)
{
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function()
  {
    if ((this.readyState == 4) && (this.status == 200))
      CreateMenu(AName, ADiv, this.responseText);
  };

  var sessionId = SessionIdGet();
  xhttp.open("POST", "/" + AFunction, true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send("SessionId=" + sessionId);
}

function CreateMenu(AName, ADiv, AResponseText)
{
  //Create and append select list
  var selectList = document.createElement("select");
  //selectList.id = AName;
  selectList.name = AName;
  console.log(AResponseText);
  var response = JSON.parse(AResponseText);
  var menus = response.Result;

  //Create and append the options
  for (var i = 0; i < menus.length; i++)
  {
    var option = document.createElement("option");
    option.value = i;
    option.text = menus[i];
    selectList.appendChild(option);
  }

  document.getElementById(ADiv).innerHTML = selectList.outerHTML;
}