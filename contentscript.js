if (document.getElementsByName("tab_id")[0] != undefined)
{
  var id = document.getElementsByName("tab_id")[0].value;
  var url = "https://tabs.ultimate-guitar.com/tab/download?id=" + id
  window.open(url);
}
else if (document.getElementsByName("id")[0] != undefined){
  var id = document.getElementsByName("id")[0].value;
  var url = "https://tabs.ultimate-guitar.com/tab/download?id=" + id
  window.open(url);
}
