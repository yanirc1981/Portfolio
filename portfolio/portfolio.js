let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("NodeJs");
        habilidades[2].classList.add("React");
        habilidades[3].classList.add("PostgresSQL");
        habilidades[4].classList.add("HTML");
        habilidades[5].classList.add("CSS");
        habilidades[6].classList.add("GitHub");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("resolucion");
        habilidades[11].classList.add("desarrollo");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("disciplina");
        
        
        
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
//envio de mensajes a email

const form = document.getElementById("form");
const sendMail = document.getElementById("emailA");

function handleSendEmail(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const emailInput = document.getElementById("email");

  const name = nameInput.value;
  const message = messageInput.value;
  const email = emailInput.value;

  sendMail.setAttribute(
    'href',
    `mailto:yanicorc@gmail.com?subject=${encodeURIComponent(name)}&body=Nombre: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMensaje: ${encodeURIComponent(message)}`
  );

  sendMail.click();

  nameInput.value = "";
  messageInput.value = "";
  emailInput.value="";
}

form.addEventListener("submit", handleSendEmail);
