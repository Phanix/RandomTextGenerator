
let text = document.getElementById("randomText");

text.addEventListener("click", () =>{
    changeText();
})

//Word list
var words = `
ability,
able,
aboriginal,
abortion,
about,
above,
abraham,
abroad,
abs,
absence,
absent,
absolute,
absolutely,
absorption,
abstract,
abstracts,
abu,
abuse,
`;
var wordsArray = words.split(",");

function changeText(){
    text.innerHTML = wordsArray[Math.floor(Math.random() *  wordsArray.length -1)];
}



