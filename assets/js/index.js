
document.querySelector("#go").addEventListener("click", go)

function go(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "https://ca5b-180-16-188-28.jp.ngrok.io", true);
xhttp.send();
}
