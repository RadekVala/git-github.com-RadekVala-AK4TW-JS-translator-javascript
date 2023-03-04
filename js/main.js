const userInputEl = document.querySelector("#userInput");
const btnTranslateEl = document.querySelector("#btnTranslate");
const translationResultEl = document.querySelector('#translationResult');

btnTranslateEl.addEventListener("click", (event) => { 
    const userInput = encodeURIComponent(userInputEl.value);

    fetch(`https://api.mymemory.translated.net/get?q=${userInput}&langpair=en|cs`)
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        console.log(data);
        translationResultEl.innerHTML = data.responseData.translatedText;
    })
    .catch(error => console.error(error));


});

