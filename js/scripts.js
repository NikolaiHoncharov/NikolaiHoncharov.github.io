var deg = 0, deg1 = 0, deg2 = 0, deg3 = 0, deg4 = 0;
function methodName (elem, deg) {
    elem.addEventListener('click', ()=>{
        elem.style.cssText = `transform: rotate(${deg+=90}deg);`
    });
    elem.addEventListener('mouseover', ()=>{
        elem.style.cssText = `transform: rotate(${deg+=90}deg);`
    });
}
methodName (document.querySelector('.color1'), deg);
methodName (document.querySelector('.color2'), deg1);
methodName (document.querySelector('.color3'), deg2);
methodName (document.querySelector('.color4'), deg3);
methodName (document.querySelector('.color5'), deg4);