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
        error.innerText = 'Please enter a number!';
        input.value = "";
        main.innerHTML = "";
    } else if (inputValue <= 0) {
        error.innerText = 'Please enter a positive number!';
        input.value = '';
        main.innerHTML = "";
    } else {
        main.innerHTML = "";
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardDisplay(data.cards))

        input.value = '';
        error.innerHTML = '';
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
          <h5 class="card-title">${card.suit}</h5>
          <p class="card-text">${card.code}</p>
          <button href="#" class="btn btn-success">See Details</button>
        </div>
      </div>
            `;
        main.appendChild(div);

    }
}