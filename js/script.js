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

    for(let key in member){
        let card = member[key]
        
        let element = document.createElement('div')
        element.classList.add('element');
        element.innerText = card
        cards.append(element);
    }
    
}

let cards = document.createElement('div')
cards.innerText = item_list
shoppinglist.append(cards);

