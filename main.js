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
        const userName = userNameInput.value;
        gameContent.innerHTML = "";
        chooseYourClass();
    });
    gameContent.appendChild(userNameButton);
}

//Choose your Class Page//

function chooseYourClass(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu")

    const classChoosingDiv = document.createElement("div");
    const warriorClass = document.createElement ("img");
    warriorClass.src("")
    gameContent.appendChild(classChoosingDiv);
}