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
        value=currentNoticia;
        value+= add;

        if(value === sliders.length+1 || value ===0 ){
            value = value === 0 ? sliders.length : 1;
        }
        console.log(value);
    };
})();
