const userInputEl = document.querySelector("#userInput");
const btnTranslateEl = document.querySelector("#btnTranslate");
const translationResultEl = document.querySelector('#translationResult');

async function fetchData(userInput) {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${userInput}&langpair=en|cs`
      );
      const data = await response.json();
      console.log(data);
      translationResultEl.innerHTML = data.responseData.translatedText;
      
      let history = [];
      const historyLS = localStorage.getItem('history');
      if(historyLS){
        history = JSON.parse(historyLS);
      }

      history.push(data.responseData.translatedText);
      localStorage.setItem('history', JSON.stringify(history));

    } catch (error) {
      console.error(error);
    }
  }

btnTranslateEl.addEventListener("click", (event) => { 
    const userInput = encodeURIComponent(userInputEl.value);

    fetchData(userInput);
    /*
    fetch(`https://api.mymemory.translated.net/get?q=${userInput}&langpair=en|cs`)
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        console.log(data);
        translationResultEl.innerHTML = data.responseData.translatedText;
    })
    .catch(error => console.error(error));
    */
    

});

