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
    
})();
