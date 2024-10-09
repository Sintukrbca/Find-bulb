const checkbox = document.querySelector('#i');
const options = document.querySelector('.checkbox__text--options');
checkbox.onclick = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    console.log(getRandomInt(500));
     const bulb = document.getElementsByClassName('bulb')[getRandomInt(500)];

    if (checkbox.checked) {
        alert(`Find bulb in celle no. ${getRandomInt(500)}`);
        bulb.style.opacity = 0.5;
        bulb.style.opacity = 1;
        bulb.style.backgroundColor = "#f00";  
        bulb.style.animation = 'bulb 0.5s ease-in-out infinite' ;
        bulb.style.boxShadow = 'inset 0 0 15px rgba(230, 90, 4, 0.82) , 0 0 15px rgba(229, 6, 6, 0.667), 0 0 15px rgba(228, 64, 5, 0.785), 0 0 15px rgba(225, 170, 4, 0.797), 0 0 15px rgba(225, 170, 4, 0.797), 0 0 15px rgba(225, 170, 4, 0.797)';
        } 


    }

