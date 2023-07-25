function getHomeUrl(userId) {

  console.log("ENTRO IN AGREEMENT-REDIRECT.JS, qui ho gia fatto il login perche jho user id");

  const url = "http://10.11.13.100:8080/NewArchiboxWSBMW/WS/user/login";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", url); // false for synchronous request

  console.log("Chiamo l' audit in POST all' url: " + url);
  console.log("Ho l' userId, ma il token da dove lo recupero ???? ---> ", userId);
  xmlHttp.send('"FE_APPLICATION"');
  
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      console.log("Risposta dell'audit OK");
    } else {
      console.log("ERRORE AUDIT!!!! KO !!!");
    }
  }

	// Setting agreement acceptance
  var connector = remote.connect("alfresco");
  var result = connector.post("/keensoft/agreement/" + userId, '', "application/json");
  return url.context;
}

function main()
{
   model.redirectUrl = getHomeUrl(user.name);
}

main();
