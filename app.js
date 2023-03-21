



const dictionary = new Dictionary;
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    const input = document.querySelector('input');
    let value = input.value;
    console.log(value)
   
    dictionary.getWord(value)
        .then(data => {
            document.querySelector('.error').style.display = `none`;

            document.querySelector('.word').innerText= data.translate[0].word;
            document.querySelector('.dictionary-body').classList.remove('d-none');

            document.querySelector('.definition').innerText = data.translate[0].meanings[0].definitions[0].definition;
            document.querySelector('a').href = data.translate[0].sourceUrls[0];
            document.querySelector('a').style.display = 'block';

            document.querySelector('.speech').innerText = data.translate[0].meanings[0].partOfSpeech;
            document.querySelector('.speech').style.display='block'
            
            if (data.translate[0].meanings[0].definitions[0].example !== undefined) {
                document.querySelector('.example').style.display = 'block';
                document.querySelector('.example').innerText = data.translate[0].meanings[0].definitions[0].example;

            } else {
                document.querySelector('.without-example').style.display='block'
                const example = document.querySelector('.example');
                example.style.display = 'none';
                setTimeout(alertExample, 4000);
                function alertExample() {
                    document.querySelector('.without-example').style.display='none';

                }

            }
            
            
            
        })
        .catch(() => { 
            document.querySelector('.error').style.display = `inline`;
            
            document.querySelector('.dictionary-body').classList.add('d-none');

        });
       

    e.preventDefault();
    
});
