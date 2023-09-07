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
    <a class="GSBot" href="https://t.me/GoogleYourTextToSpeechBot" >
        <span class="name"><i class='bx bxs-bot'></i>Google Text To Speech Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="GTBot" href="https://t.me/GoogleTranslatebyBot">
        <span class="name"><i class='bx bxs-bot'></i>Google Translate Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>
    <a class="GBBot" href="https://t.me/BardAIChatWithBot">
        <span class="name"><i class='bx bxs-bot'></i>Google Bard AI Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="RBBot" href="https://t.me/RemoveYourBackgroundImageBot">
        <span class="name"><i class='bx bxs-bot'></i>Remove Background Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="SLBot" href="https://t.me/shortYourLinkByBot">
        <span class="name"><i class='bx bxs-bot'></i>Shorten Link Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="ITBot" href="https://t.me/GetLocationWithPhoneNumberBot">
        <span class="name"><i class='bx bxs-bot'></i>Get Phone Number Location Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

     <a class="ITBot" href="https://t.me/DailyWIMBot">
        <span class="name"><i class='bx bxs-bot'></i>Daily WIM Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>
    
    <a class="ADJMBot" href="https://t.me/setavatarBot">
        <span class="name"><i class='bx bxs-bot'></i>Set Avatar Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="ADJMBot" href="https://t.me/YuGiOhCardStoreBot">
        <span class="name"><i class='bx bxs-bot'></i>Yu-Gi-Oh ! Card Store Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

     <a class="ITBot" href="https://t.me/byoxo404tk">
        <span class="name"><i class='bx bxs-bot'></i>IP Tracker Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="WIBot" href="https://t.me/byoxo404tk">
        <span class="name"><i class='bx bxs-bot'></i>Who Is Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>

    <a class="FGBot" href="https://t.me/byoxo404tk">
        <span class="name"><i class='bx bxs-bot'></i>Favicon Generator Bot</span>
        <span class="ico"><i class='bx bx-link-external'></i></span>
    </a>
    
    <a class="ADJMBot" href="https://t.me/byoxo404tk">
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

