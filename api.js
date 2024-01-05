

function fetchFact(){
    fetch('https://catfact.ninja/fact')

    .then(response => response.json())
    .then(arr2 => {
        document.querySelector(".nameDis").innerHTML = `${arr2.fact}`
    })
        .catch(err => console.log('Request Failed', err));


}

function fetchBreeandCountry(){
    var rNumber = Math.floor(Math.random() * 12 );
    fetch('https://catfact.ninja/breeds')

    .then(response => response.json())
    .then(arr2 => {
        document.querySelector(".nameDis2").innerHTML = "Breed:" + ' ' + `${arr2.data[rNumber].breed}` + `<br>` + 'Country of origin:' + ' ' +`${arr2.data[rNumber].country}`
    })
        .catch(err => console.log('Request Failed', err));


 
}




