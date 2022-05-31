const googleSearchButton = document.querySelector('#btn-google-search');
//ugyanúgy működk, mint a getElementById, csak bármit el tudok vele érni, pl class, id...

googleSearchButton.addEventListener('click', function (event){
    event.preventDefault();
    //megakadályozza a default működését az elemnek
    
    //console.log(event);

    const form = document.querySelector('#form-google-search');

    const serachTerm = form.querySelector('input[name="q"]').value;

    if(serachTerm === ''){
        alert('Írj be valamit!');
    }else{
        form.submit();
    }

});