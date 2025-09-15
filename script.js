const translations = {
  de: {
    anfang: "Anfang",
    text_anfang: "Der Kanton Bern wurde 1353 Teil der Alten Eidgenossenschaft. Er entwickelte sich rasch zu einem bedeutenden Mitglied des Bundes und spielte eine zentrale Rolle in der politischen Geschichte der Schweiz. Heute ist Bern ein Bindeglied zwischen der deutsch- und französischsprachigen Schweiz und zeichnet sich durch seine kulturelle Vielfalt aus.",
    geographie: "Geographie",
    text_geographie: "Bern ist mit rund 6.000 km² der zweitgrößte Kanton der Schweiz. Die Landschaft reicht vom Jura im Westen über das Mittelland bis zu den Hochalpen im Süden. Bekannte Gebiete sind das Berner Oberland mit Eiger, Mönch und Jungfrau sowie die Seen Thunersee und Brienzersee. Durch seine vielfältige Natur ist Bern ein beliebtes Ziel für Tourismus, Wandern und Wintersport.",
    bevoelkerung: "Bevölkerung",
    text_bevoelkerung: "Im Kanton Bern leben über 1 Million Menschen. Die Mehrheit spricht Deutsch, während in den Bezirken Jura bernois und Biel/Bienne auch Französisch Amtssprache ist. Damit ist Bern offiziell zweisprachig. Die Bevölkerung ist kulturell vielfältig, mit einem starken Bezug zu Traditionen, aber auch einer weltoffenen Ausrichtung.",
    politik: "Verfassung und Politik",
    text_politik: "Der Kanton Bern verfügt über eine eigene Verfassung, die die Grundlagen von Staat und Gesellschaft regelt. Das Parlament, der Grosse Rat, besteht aus 160 Mitgliedern und ist das gesetzgebende Organ. Die Exekutive bildet der Regierungsrat mit sieben Mitgliedern. Politisch ist Bern vielfältig geprägt, mit Vertretungen von bürgerlichen, linken und regionalen Parteien. Als Bundesstadt hat Bern zudem eine besondere Stellung im politischen Leben der Schweiz.",
    footer: "© 2025 Projekt über Kanton Bern von Mykhailo Bondar"
  },
  en: {
    anfang: "Introduction",
    text_anfang: "The Canton of Bern became part of the Old Swiss Confederacy in 1353. It quickly developed into an important member of the confederation and played a central role in Swiss political history. Today, Bern serves as a bridge between the German- and French-speaking regions of Switzerland and is known for its cultural diversity.",
    geographie: "Geography",
    text_geographie: "With an area of about 6,000 km², Bern is the second-largest canton in Switzerland. Its landscape stretches from the Jura mountains in the west across the Swiss Plateau to the high Alps in the south. Famous areas include the Bernese Oberland with the Eiger, Mönch and Jungfrau, as well as Lake Thun and Lake Brienz. Thanks to this diversity, Bern is a popular destination for tourism, hiking and winter sports.",
    bevoelkerung: "Population",
    text_bevoelkerung: "The canton is home to more than 1 million people. The majority speak German, while French is also an official language in the Jura bernois and in Biel/Bienne. This makes Bern officially bilingual. The population combines strong traditional roots with an open and cosmopolitan outlook.",
    politik: "Constitution and Politics",
    text_politik: "The Canton of Bern has its own constitution, which sets out the basic principles of state and society. The parliament, known as the Grand Council, has 160 members and serves as the legislative body. The executive power lies with the seven-member Government Council. Politically, Bern is diverse, with representation from conservative, progressive and regional parties. As Switzerland’s federal city, Bern holds a unique position in the country’s political life.",
    footer: "© 2025 Project about the Canton of Bern by Mykhailo Bondar"
  },
  fr: {
    anfang: "Introduction",
    text_anfang: "Le canton de Berne a rejoint l’Ancienne Confédération suisse en 1353. Il s’est rapidement développé en tant que membre important et a joué un rôle central dans l’histoire politique de la Suisse. Aujourd’hui, Berne constitue un pont entre la Suisse alémanique et la Suisse romande et se distingue par sa diversité culturelle.",
    geographie: "Géographie",
    text_geographie: "Avec une superficie d’environ 6 000 km², Berne est le deuxième plus grand canton de Suisse. Le paysage s’étend du Jura à l’ouest au Plateau suisse, jusqu’aux hautes Alpes au sud. Parmi les régions célèbres, on trouve l’Oberland bernois avec l’Eiger, le Mönch et la Jungfrau, ainsi que le lac de Thoune et le lac de Brienz. Grâce à cette diversité, le canton de Berne est une destination prisée pour le tourisme, la randonnée et les sports d’hiver.",
    bevoelkerung: "Population",
    text_bevoelkerung: "Le canton compte plus d’un million d’habitants. La majorité parle allemand, tandis que le français est également langue officielle dans le Jura bernois et à Bienne. Berne est donc officiellement bilingue. La population reflète un fort attachement aux traditions, tout en restant ouverte et cosmopolite.",
    politik: "Constitution et politique",
    text_politik: "Le canton de Berne dispose de sa propre constitution, qui fixe les bases de l’État et de la société. Le parlement, appelé Grand Conseil, compte 160 membres et exerce le pouvoir législatif. Le pouvoir exécutif est assumé par le Conseil-exécutif composé de sept membres. Politiquement, Berne est marquée par une grande diversité, avec la présence de partis bourgeois, progressistes et régionaux. En tant que ville fédérale, Berne occupe une place particulière dans la vie politique de la Suisse.",
    footer: "© 2025 Projet sur le canton de Berne par Mykhailo Bondar"
  }
};

function switchLanguage(lang) {
  document.querySelector("#anfang h2").textContent = translations[lang].anfang;
  document.querySelector("#anfang p").textContent = translations[lang].text_anfang;

  document.querySelector("#geographie h2").textContent = translations[lang].geographie;
  document.querySelector("#geographie p").textContent = translations[lang].text_geographie;

  document.querySelector("#bevoelkerung h2").textContent = translations[lang].bevoelkerung;
  document.querySelector("#bevoelkerung p").textContent = translations[lang].text_bevoelkerung;

  document.querySelector("#politik h2").textContent = translations[lang].politik;
  document.querySelector("#politik p").textContent = translations[lang].text_politik;

  document.querySelector("footer p").textContent = translations[lang].footer;
}

// язык по умолчанию
switchLanguage("de");

function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
window.addEventListener("DOMContentLoaded", () => {
  showSection("anfang");
});

let carouselIndex = 0;
const carouselImages = [
  "img/bern1.jpg",
  "img/bern2.jpg",
  "img/bern3.jpg"
];
const body = document.body;

const bgImg = document.createElement("img");
bgImg.src = carouselImages[carouselIndex];
bgImg.style.position = "fixed";
bgImg.style.top = "0";
bgImg.style.left = "0";
bgImg.style.width = "100vw";
bgImg.style.height = "100vh";
bgImg.style.objectFit = "cover";
bgImg.style.zIndex = "-1";
bgImg.style.transition = "opacity 0.5s";
bgImg.style.opacity = "1";
body.insertBefore(bgImg, body.firstChild);

function showBackgroundImage(index) {
  bgImg.style.opacity = "0";
  setTimeout(() => {
    bgImg.src = carouselImages[index];
    bgImg.style.opacity = "1";
  }, 250);
}

function updateDots() {
  const dots = document.getElementById("carousel-dots");
  dots.innerHTML = "";
  carouselImages.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === carouselIndex ? " active" : "");
    dot.onclick = () => {
      carouselIndex = i;
      showCarouselImage(carouselIndex);
    };
    dots.appendChild(dot);
  });
}

function showCarouselImage(index) {
  showBackgroundImage(index);
  updateDots();
}

function prevSlide() {
  carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
  showCarouselImage(carouselIndex);
}

function nextSlide() {
  carouselIndex = (carouselIndex + 1) % carouselImages.length;
  showCarouselImage(carouselIndex);
}

// авто-прокрутка
setInterval(() => {
  nextSlide();
}, 4000);

updateDots();
