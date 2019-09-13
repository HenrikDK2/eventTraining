document.addEventListener('DOMContentLoaded', function(e){
    const ul = document.querySelector('ul');
    console.log(e.target)
    fetch('./assets/json/data.json').then(response => {
        return response.json();
    }).then(data =>{
        data.event.forEach(element => {
            ul.innerHTML += `
                <li>
                    <h2>${element.target+': '+element.result}</h2>
                    <h4>Hvordan: ${element.eventTarget}<h4>
                </li>`;
        });
    });
});
