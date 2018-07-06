function requestMethod(method, url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onreadystatechange = function() {
       if(this.readyState == 4 && this.status == 200) {
          resolve(this.response);
       }
     };
     request.send();   
    });  
}

export default requestMethod;



