let container = document.getElementById('container')

let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "../img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "../img/scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "../img/barbara-ramos-graphic-designer.jpg"
    }
]


for (i=0; i<team.length; i++) {
    let member = team[i];

    let cards = document.createElement('div')
    cards.classList.add('card');
    container.append(cards);
/*     let img = member.immagine 
    console.log(img) */
        let img = `<img src="./img/${member.immagine}">`
        let name = `<div class="nome-cognome">${member.nome}</div>` 
        let role = `<div class="ruolo">${member.ruolo}</div>`

        cards.innerHTML += img;
        cards.innerHTML += name; 
        cards.innerHTML += role;
}
