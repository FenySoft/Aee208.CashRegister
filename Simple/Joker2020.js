function Back()
{
  window.history.back();
}

function Back2()
{
  window.history.go(-2);
}

function SessionIdGet()
{
  return IdGet("SessionId");
}

function SessionIdSet(AValue)
{
  IdSet("SessionId", AValue);
}

function IdGet(AIdName)
{
  return sessionStorage.getItem(AIdName);
}

function IdSet(AIdName, AIdValue)
{
  sessionStorage.setItem(AIdName, AIdValue);
}

function IdToForm(AIdName)
{
  var x = document.getElementsByName(AIdName);
  var i;

  for (i = 0; i < x.length; i++)
  {
    if (x[i].type == "hidden")
      x[i].value = IdGet(AIdName);
  }
}

function SessionIdToForm()
{
  IdToForm("SessionId");
}

function LazyIdToForm()
{
  IdToForm("LazyId");
}