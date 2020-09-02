$(document).ready(function () {
    $('.carousel').carousel();
});

async function load_home() {
    content.innerHTML = await (await fetch('home.html#home')).text();
}


function tampilkanDataHome() {
    let homeData = document.querySelectorAll('#pagehome');
    homeData.innerHTML += ` <div class="row home">
        <div class="col col s12 m6">
            <h1>
                Hy There<span> I'm Rizwan</span>
            </h1>
            <p class="linetext">i am a front end web developer based in
                West Borneo</p>
            <a href="index.html#contact" class="btn waves-effect waves-light">Hire me</a>
        </div>
        <div class="col col s12 m6">
            <img src="img/backgorundrizwan.png" width="580px" alt="imgbg" class="responsive-img imgbg" />
        </div>
    </div>`;
}


function loadHome() {
    if ('cache' in window) {
        caches.match(standings).then(response => {
            if (response) {
                response.json().then(data => {
                    console.log(data);
                    tampilkanDataHome(data);
                })
            }
        })
    }
    fetchAPI(standings)
        .then(data => {
            console.log(data);
            standingData(data);
        })
        .catch(error => {
            console.log(error)
        })
}