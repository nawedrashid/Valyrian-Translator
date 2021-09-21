var btntrans = document.querySelector("#btn-translate");
var input = document.querySelector("#input-txt");
var output = document.querySelector("#output-txt");

var serverURL="https://api.funtranslations.com/translate/valyrian.json"
function getTanslationURL(text){
    return serverURL+"?" + "text="+ text;
}
function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something went wrong")
}
function clickHandler(){
    var inputText=input.value;
    fetch(getTanslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var Translatedtext = json.contents.translated;
        output.innerText = Translatedtext;
    })
    .catch(errorHandler);
}
btntrans.addEventListener("click",clickHandler);