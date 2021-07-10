let text = "Zakeer Mohammad";
let currentText = 0;

// function write(){
    
//     const animatedText = document.querySelector(".animation_text");
//     animatedText.innerHTML = text.substring(0, currentText);
//     currentText++;

//     setTimeout(write, 100);
// }

// write();

function write(text){
    let currentText = 0;

    function loop(){
        const animatedText =document.querySelector(".animation_text");
        animatedText.innerHTML = text.substring(0, currentText);

        if(currentIndex === Text.length){
            return;
        }

        currentIndex++;

        setTimeout(loop, 100);
    }

    loop();
}