if (window.XMLHttpRequest) {
  ObjectXMLHttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  ObjectXMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function getData(source, target) {
  if (ObjectXMLHttp) {
    var target = $("#" + target);
    ObjectXMLHttp.open("GET", source);
    ObjectXMLHttp.onreadystatechange = function () {
      if (ObjectXMLHttp.readyState == 4) {
        target.append(ObjectXMLHttp.responseText);
      }
    };
    ObjectXMLHttp.send(null);
  }
}
