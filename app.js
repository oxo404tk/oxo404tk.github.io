/**
 * 
 * @author : oxo404tk
 * @email : oxo404.tk@gmail.com
 * @Telegram : @oxo404tk
 * @Instagram : @oxo404tk
 * @GitHub : @oxo404tk
 * 
 */

const lastWorkLayout = 
`
    <a class="GSBot">
        <span class="name"><i class='bx bxs-bot'></i>Google Search Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="GTBot">
        <span class="name"><i class='bx bxs-bot'></i>Google Translate Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>
    <a class="GBBot" >
        <span class="name"><i class='bx bxs-bot'></i>Google Bard AI Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="RBBot" >
        <span class="name"><i class='bx bxs-bot'></i>Remove Background Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="SLBot" >
        <span class="name"><i class='bx bxs-bot'></i>Shorten Link Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="ITBot" >
        <span class="name"><i class='bx bxs-bot'></i>IP Tracker Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="WIBot" >
        <span class="name"><i class='bx bxs-bot'></i>Who Is Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="FGBot" >
        <span class="name"><i class='bx bxs-bot'></i>Favicon Generator Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="ADJMBot" >
        <span class="name"><i class='bx bxs-bot'></i>Auto Delete Join Message Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>
        
`

const body = document.querySelector("body")
const bodyMe = document.getElementById("bodyMe")   
const returnHome = document.getElementById("return") 
const lightDark = document.querySelector(".light-dark")                      

const homeLayout = document
                    .getElementById("bodyMe")
                        .cloneNode(true)

bodyMe.addEventListener("click", event => {

    if (event.target.id === "lastWork") {
        
        bodyMe.innerHTML = ""
        bodyMe.innerHTML = lastWorkLayout
        
        setTimeout(() => {
            returnHome.classList.add("view")
        }, 200)

    }

});

returnHome.addEventListener("click", ()=>{

        bodyMe.innerHTML = ""
        bodyMe.append(homeLayout)
    
        setTimeout(() => {
            returnHome.classList.remove("view");
        }, 300)
        
});


lightDark.addEventListener("click", ()=>{

    setTimeout(()=>{
        lightDark.querySelector(".bx").classList.toggle("bxs-moon")
        lightDark.querySelector(".bx").classList.toggle("bxs-sun")
        body.classList.toggle("light")
    }, 100)

});

