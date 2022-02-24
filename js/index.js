//get input value
//button event handler
//error handling for string value
const searchButton = () => {
    console.log('button clicked')
    const input = document.getElementById('input-value');
    let inputValue = input.value;
    const error = document.getElementById('error');
    if (isNaN(inputValue) || inputValue == '') {
        error.innerText = 'Please enter a number!'
        input.value = '';
    } else if (inputValue <= 0) {
        error.innerText = 'Please enter a positive number!';
        input.value = '';
    }
}