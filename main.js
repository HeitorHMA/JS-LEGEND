//Universal Information //
let userName;
let userClass;
let userLevel = 0;
let userCON;
let userSTR;
let userAGL;
let userDEX;
let userINT;

//Main Menu Function//

function mainMenu(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu")

    const mainTitle = document.createElement("h1");
    mainTitle.innerHTML = "JavaScript Legends";
    mainTitle.classList.add("main-menu-title")
    gameContent.appendChild(mainTitle);

    const newGameButton = document.createElement("div");
    newGameButton.innerHTML = "NEWGGA GAME";
    newGameButton.classList.add("new-game-button");
    gameContent.appendChild(newGameButton);
    newGameButton.addEventListener("click",function(){
        gameContent.innerHTML = "";
        characterCreation();
    }
    )

    const continueButton = document.createElement("div");
    continueButton.innerHTML = "CONTINIGGA";
    continueButton.classList.add("continue-button");
    gameContent.appendChild(continueButton);

    const exitButton = document.createElement("div");
    exitButton.innerHTML = "EXITIGGA";
    exitButton.classList.add("exit-button");
    gameContent.appendChild(exitButton);


    

}
mainMenu();

//Character Creation Page//

function characterCreation(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu")

    const classTitle = document.createElement("h1");
    classTitle.innerHTML = "Choose your name:";
    classTitle.classList.add("class-choosing-title");
    gameContent.appendChild(classTitle);

    const userNameInput = document.createElement("input");
    userNameInput.setAttribute("type","text");
    gameContent.appendChild(userNameInput);
    const userNameButton = document.createElement("button");
    const userNameButtonPlaceholder = document.createTextNode("Create Character");
    userNameButton.appendChild(userNameButtonPlaceholder);
    userNameButton.addEventListener("click",function(){
        userName = userNameInput.value;
        gameContent.innerHTML = "";
        chooseYourClass();
    });
    gameContent.appendChild(userNameButton);
}

//Choose your Class Page//

function chooseYourClass(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu");

    const classTitle = document.createElement("h1");
    classTitle.innerHTML = `${userName} , what will be your class ? `;
    classTitle.classList.add("class-choosing-title");
    gameContent.appendChild(classTitle);


    const classChoosingDiv = document.createElement("div");
    classChoosingDiv.classList.add("class-choosing-div");

    const warriorClass = document.createElement ("img");
    warriorClass.src = '/imgs/warriorClass.jpeg';
    warriorClass.style.height = '150px';
    warriorClass.style.width = '150px';
    warriorClass.addEventListener("click",function(){
        userClass = "Warrior";
        console.log(userClass);
        gameContent.innerHTML = "";
        checkUserInfo();
    });

    const mageClass = document.createElement ("img");
    mageClass.src = '/imgs/mageClass.jpeg';
    mageClass.style.height = '150px';
    mageClass.style.width = '150px';
    mageClass.addEventListener("click",function(){
        userClass = mage;
    });


    const assasinClass = document.createElement ("img");
    assasinClass.src = '/imgs/assasinClass.jpg';
    assasinClass.style.height = '150px';
    assasinClass.style.width = '150px';
    assasinClass.addEventListener("click",function(){
        userClass = assasin;
    });


    classChoosingDiv.appendChild(warriorClass);

    classChoosingDiv.appendChild(mageClass);

    classChoosingDiv.appendChild(assasinClass);

    gameContent.appendChild(classChoosingDiv);
}
// Choose Atributes //


// Check user Info //
 
function checkUserInfo(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu");

    const infoQuestion = document.createElement("h1");
    infoQuestion.classList.add("info-question");
    infoQuestion.innerHTML = `
    Your name is: ${userName} <br>
    Your class is: ${userClass} <br>
    Is it right ? <br>`;
    gameContent.appendChild(infoQuestion);

    const continueButton = document.createElement("button");
    const continueButtonPlaceholder = document.createTextNode("Yes");
    continueButton.appendChild(continueButtonPlaceholder);
    continueButton.addEventListener("click",function(){
        gameContent.innerHTML = "";
        const memeText = document.createElement("h1");
        memeText.innerHTML = "Jõao não terminou ainda kkkkk";
        gameContent.appendChild(memeText);
    })
    gameContent.appendChild(continueButton);

    const resetButton = document.createElement("button");
    const resetButtonPlaceholder = document.createTextNode("No");
    resetButton.appendChild(resetButtonPlaceholder);
    resetButton.addEventListener("click",function(){
        gameContent.innerHTML = "";
        characterCreation();
    })
    gameContent.appendChild(resetButton);



}




