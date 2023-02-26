(function(){ 
    const sliders = [...document.querySelectorAll('.noticias_body')];
    console.log(sliders)
    const buttonSig = document.querySelector('#next');
    const buttonAtr = document.querySelector('#before');
    let value;

    buttonSig.addEventListener('click', ()=> {
        changePosition(1);
    });
    buttonAtr.addEventListener('click', ()=> {
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentNoticia = document.querySelector('.noticias_body--show').dataset.id;
        value= Number(currentNoticia);
        value+= add;
        sliders[Number(currentNoticia)-1].classList.remove('noticias_body--show');
    
        if(value === sliders.length+1 || value ===0 ){
            value = value === 0 ? sliders.length : 1;
        };
        sliders[value-1].classList.add('noticias_body--show');
    };
    const link = encodeURI(window.location.href);
    const msg = encodeURIComponent('He encontrado una empresa para mis servicios de la nube');
    const title = encodeURIComponent(document.querySelector('title').textContent)
    console.log([link, msg, title]);    

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.uniremington.edu.co%2F&amp;src=sdkpreparse`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=$https://www.uniremington.edu.co&text=${msg}&hashtags=javascript,programming`;

const linkedIn = document.querySelector('.linkedin');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=$https://www.uniremington.edu.co`;

})();
