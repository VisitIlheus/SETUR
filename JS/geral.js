const menuToggle = document.querySelector(".menu-toggle");
const menuText = document.querySelector(".menu-text");
const nav = document.querySelector("nav");
const body = document.body;
const langButton = document.querySelector(".lang-toggle");
const langOptions = document.querySelectorAll(".lang-dropdown a");
const header = document.querySelector("header");

// Função para abrir/fechar o menu
function toggleMenu() {
  body.classList.toggle("menu-open");
  const lang = localStorage.getItem("selectedLanguage") || 'pt';

  if (body.classList.contains("menu-open")) {
    menuText.textContent = translations[lang].closeMenu;
    menuToggle.innerHTML = "&times;";
    header.classList.add("header-shadow");
  } else {
    menuText.textContent = translations[lang].menu;
    menuToggle.innerHTML = "&#9776;";
    header.classList.remove("header-shadow");
  }
}

// Eventos para abrir/fechar menu
menuToggle.addEventListener("click", toggleMenu);
menuText.addEventListener("click", toggleMenu);

// Fechar ao clicar fora do menu
document.addEventListener("click", (event) => {
  if (
    body.classList.contains("menu-open") &&
    !nav.contains(event.target) &&
    !menuToggle.contains(event.target) &&
    !menuText.contains(event.target) &&
    !document.querySelector(".language-selector").contains(event.target)
  ) {
    toggleMenu();
  }
});

// Alterar idioma
function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(element => {
    let key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });

  // Atualiza texto do menu
  const isMenuOpen = body.classList.contains("menu-open");
  menuText.textContent = isMenuOpen ? translations[lang].closeMenu : translations[lang].menu;

  // Atualiza bandeira
  const selectedOption = document.querySelector(`.lang-dropdown a[data-lang="${lang}"]`);
  if (selectedOption) {
    const flag = selectedOption.querySelector(".flag").innerHTML;
    langButton.innerHTML = flag;
  }

  // Salva idioma
  localStorage.setItem("selectedLanguage", lang);
}

// Eventos de clique para mudança de idioma
document.querySelectorAll(".lang-dropdown a").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    changeLanguage(this.getAttribute("data-lang"));
  });
});

// Traduções atualizadas
const translations = {
  pt: {
    menu: "Menu",
    closeMenu: "Fechar",
    place: "Onde Ir",
    events: "Eventos e Festividades",
    blog: "Blog",
    agenda: "Agenda",
    agendatex: "Agenda da Cidade",
    agendatex2: "Saiba de tudo que está acontecendo em Ilhéus.",
    agendatex3: "Espaço Cultural",
    agendatex4: 'Se é "para onde ir" é aqui que você encontra.',
    icontext1: "100 km Praias",
    icontext2: "Rota do Chocolate",
    icontext3: "História e Cultura",
    icontext4: "Gastronomia",
    icontext5: "Turismo Náutico",
    icontext6: "Afroturismo",
    icontext7: "Eu Visitei",
    icontext8: "Turismo Sustentável",
    icontext9: "Esporte e Lazer",
    icontext10: "Porto e Aeroporto",
    icontext11: "Etnoturismo",
    titleh2: "Receba Folder Turístico de Ilhéus gratuitamente.",
    formname: "Seu Nome",
    fomrpaís: "País",
    fomremail: "Seu E-mail",
    fomrnumero: "Seu Número",
    enviar:"Enviar",
    h3title: "Experiências em Ilhéus",
    visitext:"Siga nossa rede social: @VisitIlheus"

  },
  en: {
    menu: "Menu",
    closeMenu: "Close",
    place: "Where to go",
    events: "Events and Festivities",
    blog: "Blog",
    agenda: "Agenda",
    agendatex: "City Agenda",
    agendatex2: "Find out everything that's happening in Ilhéus",
    agendatex3: "Cultural Space",
    agendatex4: "If it's 'where to go' this is where you'll find it.",
    icontext: "Beach", 
    icontext1: "100 km Beaches",
    icontext2: "Chocolate Road",
    icontext3: "History and Culture",
    icontext4: "Gastronomy",
    icontext5: "Nautical Tourism",
    icontext6: "Afrotourism",
    icontext7: "I Visited",
    icontext8: "Sustainable Tourism",
    icontext9: "Sports and Leisure",
    icontext10: "Port and Airport",
    icontext11: "Ethnotourism",
    titleh2: "Receive Ilhéus Tourist Folder for free.",
    formname: "Your Name",
    formcidade: "City",
    formpaís: "Country",
    formemail: "Your Email",
    formnumero: "Your Number",
     enviar:"Send",
     h3title: "Experiences in Ilhéus",
    visitext:"Follow our social media: @VisitIlheus"
  },
  es: {
    menu: "Menú",
    closeMenu: "Cerrar",
    place: "A dónde ir",
    events: "Eventos y festividades",
    blog: "Blog",
    agenda: "Orden del día",
    agendatex: "Agenda de la cuidad",
    agendatex2: "Entérate de todo lo que se pasa en Ilhéus",
    agendatex3: "Espacio cultural",
    agendatex4: 'Si lo que buscas es "dónde ir", aquí es donde lo encontrarás.',
    icontext1: "100 km Playas",
    icontext2: "Ruta del Chocolate",
    icontext3: "Historia y Cultura",
    icontext4: "Gastronomía",
    icontext5: "Turismo Náutico",
    icontext6: "Afroturismo",
    icontext7: "Yo Visité",
    icontext8: "Turismo Sostenible",
    icontext9: "Deporte y Ocio",
    icontext10: "Puerto y Aeropuerto",
    icontext11: "Etnoturismo",
    titleh2: "Reciba la Carpeta Turística de Ilhéus gratuitamente.",
    formformname: "Su Nombre",
    formcidade: "Ciudad",
    formpaís: "País",
    formemail: "Su Correo Electrónico",
    formnumero: "Su Número",
    enviar:"Enviar",
    h3title: "Experiencias en Ilhéus",
    visitext:"Siga nuestra red social: @VisitIlheus"
    

  },
  fr: {
    menu: "Menu",
    closeMenu: "Fermer",
    place: "Où aller", 
    events: "Evénements et festivités",
    blog: "Blog",
    agenda: "Ordre du jour",
    agendatex: "Agenda de la ville",
    agendatex2: "Découvrez tout ce qui passe à Ilhéus",
    agendatex3: "Espace culturel",
    agendatex4: "Si c'est où aller, c'est ici que vous le trouverez.",
    icontext1: "100 km Plages",
    icontext2: "Route du Chocolat",
    icontext3: "Histoire et Culture",
    icontext4: "Gastronomie",
    icontext5: "Tourisme Nautique",
    icontext6: "Afrotourisme",
    icontext7: "J'ai Visité",
    icontext8: "Tourisme Durable",
    icontext9: "Sport et Loisirs",
    icontext10: "Port et Aéroport",
    icontext11: "Ethnotourisme",
    titleh2: "Recevez le Dossier Touristique d'Ilhéus gratuitement.",
    formname: "Votre Nom",
    formcidade: "Ville",
    formpaís: "Pays",
    formemail: "Votre E-mail",
    formnumero: "Votre Numéro",
    enviar:"Envoyer",
    h3title: "Expériences à Ilhéus",
    visitext:"Suivez notre réseau social: @VisitIlheus"

  },
  de: {
    menu: "Menü",
    closeMenu: "Schließen",
    place: "Wohin gehen",
    events: "Veranstaltungen und Feste",
    blog: "Der Blog",
    agenda: "Agenda",
    agendatex: "Stadtagenda",
    agendatex2: "Informieren Sie sich über alle Neuigkeiten aus Ilhéus.",
    agendatex3: "Kultureller Raum",
    agendatex4: "Wenn Sie wissen möchten, wohin Sie gehen sollen, werden Sie hier fündig.",
    icontext1: "100 km Strände",
    icontext2: "Schokoladenstraße",
    icontext3: "Geschichte und Kultur",
    icontext4: "Gastronomie",
    icontext5: "Nautischer Tourismus",
    icontext6: "Afrotourismus",
    icontext7: "Ich habe besucht",
    icontext8: "Nachhaltiger Tourismus",
    icontext9: "Sport und Freizeit",
    icontext10: "Hafen und Flughafen",
    icontext11: "Ethnotourismus",
    titleh2: "Erhalten Sie den Ilhéus Touristenordner kostenlos.",
    formname: "Ihr Name",
    formcidade: "Stadt",
    formpais: "Land",
    formemail: "Ihre E-Mail",
    formnumero: "Ihre Nummer",
    enviar:"Senden",
    h3title: "Erlebnisse in Ilhéus",
    visitext:"Folgen Sie unserem sozialen Netzwerk: @VisitIlheus"

  } 
};

// Função para alterar o idioma
function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(element => {
    let key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });

  // Atualiza o título
  const isMenuOpen = body.classList.contains("menu-open");
  menuText.textContent = isMenuOpen ? translations[lang].closeMenu : translations[lang].menu;

  // Atualiza os placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
    const placeholderKey = element.getAttribute("data-translate-placeholder");
    if (translations[lang][placeholderKey]) {
      element.setAttribute("placeholder", translations[lang][placeholderKey]);
    }
  });

  // Atualiza a bandeira
  const selectedOption = document.querySelector(`.lang-dropdown a[data-lang="${lang}"]`);
  if (selectedOption) {
    const flag = selectedOption.querySelector(".flag").innerHTML;
    langButton.innerHTML = flag;
  }

  // Salva o idioma selecionado no localStorage
  localStorage.setItem("selectedLanguage", lang);
}

// Carrega o idioma salvo no localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "pt";
  changeLanguage(savedLang);
});
// form
document.addEventListener("DOMContentLoaded", function () {
  const contactContainer = document.querySelector(".contact-container");
  const closeButton = document.querySelector("#close"); // Botão de fechar
  const form = document.querySelector(".contact-left"); // Seleciona o formulário

  // Exibe o formulário após 10s
  setTimeout(() => {
      contactContainer.style.display = "flex";
  }, 10000);

  // Fecha o formulário ao clicar no botão #close
  if (closeButton) {
      closeButton.addEventListener("click", function () {
          contactContainer.style.display = "none";
      });
  }

  // Envio do formulário
  if (form) {
      form.addEventListener("submit", function (event) {
          event.preventDefault(); // Impede o reload da página

          const formData = new FormData(form);

          fetch(form.action, {
              method: "POST",
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  alert("Formulário enviado com sucesso!");
                  contactContainer.style.display = "none"; // Fecha o formulário após o envio
              } else {
                  alert("Erro ao enviar o formulário. Tente novamente.");
              }
          })
          .catch(error => {
              console.error("Erro:", error);
              alert("Ocorreu um erro ao enviar o formulário.");
          });
      });
  }
});
function toggleSlider() {
  const slider = document.querySelector('.meu-slider');
  if (window.innerWidth <= 465) {
      slider.style.display = 'none';
  } else if (window.innerWidth >= 768) {
      slider.style.display = 'flex';
  }
}

window.addEventListener('resize', toggleSlider);
window.addEventListener('load', toggleSlider);
