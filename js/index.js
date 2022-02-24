//get input value
//button event handler
//error handling for string value
const main = document.getElementById('main');
const searchButton = () => {
    console.log('button clicked')
    const input = document.getElementById('input-value');
    let inputValue = parseInt(input.value);
    const error = document.getElementById('error');
    if (isNaN(inputValue) || inputValue == '') {
        error.innerText = 'Please enter a number!'
        input.value = '';
    } else if (inputValue <= 0) {
        error.innerText = 'Please enter a positive number!';
        input.value = '';
    } else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardDisplay(data.cards))
    }
}
const cardDisplay = cards => {
    for (const card of cards) {
        console.log(card);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
            `;
        main.appendChild(div);

    }
}