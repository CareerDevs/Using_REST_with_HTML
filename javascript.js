console.log("Print something to the console.")

function reqListener() {
    var result = this.responseText;

    var jsonResult = JSON.parse(result);

    var joke = jsonResult.value;

    //console.log(this.responseText);
    console.log(joke);

    //document.getElementById('joke').innerText(joke)
    updateJoke(joke)

    return console.log("It worked!")
}

function getJoke() {
    var url = "https://api.chucknorris.io/jokes/random"
    var request = new XMLHttpRequest();

    request.open("GET", url);
    request.addEventListener("load", reqListener);

    var result = request.send();
}

function updateJoke(jokeText) {
    document.getElementById('joke').innerHTML = jokeText
}

// loadJavaScript(url);