const currency = document.querySelectorAll('.currency');
console.log(currency);
const convertBtn = document.getElementById('convert-btn');
const num = document.getElementById('num');
const ans = document.getElementById('ans');

fetch('https://api.frankfurter.app/currencies')
    .then((response)=>response.json())
    .then((data) => {
        console.log(data)
        display(data);
    });

function display(data){
    const entries = Object.entries(data);
    for(var i = 0; i < entries.length; i++){
        currency[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        currency[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}
convertBtn.addEventListener('click', () =>{
    let currency1 = currency[0].value;
    let currency2 = currency[1].value;
    let value = num.value;
    convert(currency1,currency2,value);
})
function convert(currency1, currency2, value){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${value}
    &from=${currency1}&to=${currency2}`)
        .then((val)=> val.json())
        .then((val) => {
            ans.value = Object.values(val.rates)[0];
        })

}