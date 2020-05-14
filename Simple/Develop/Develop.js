function AeeGet(AFunction)
{
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function()
  {
    if ((this.readyState == 4) && (this.status == 200))
      return this.responseText;
  };

  var sessionId = document.getElementById("SessionId").Value;
  xhttp.open("POST", "/" + AFunction, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("SessionId=" + sessionId);
}

function ArrayToSelect(AName, AArray)
{
  //Create and append select list
  var selectList = document.createElement("select");
  //selectList.id = AName;
  selectList.name = AName
  myParent.appendChild(selectList);

  //Create and append the options
  for (var i = 0; i < AArray.length; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = AArray[i];
    selectList.appendChild(option);
  }
  
  return selectList;
}