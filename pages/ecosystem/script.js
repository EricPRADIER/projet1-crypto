const simpleData = [
  "Serum", "DeFiLand", "Sonar", "ChainCrunch", "UXDProtocol", "VybeNetwork", "Orca", "Saber", "Mango", "Francium", "Solend", "Drift Protocol", "Solsea", "Metaplex", "Audius", "Squads", "Bonfida"
];

const trendingNames = document.getElementsByClassName('trending-app-name');
const topNames = document.getElementsByClassName('top-app-name');

for (let i=0; i<trendingNames.length; i++){
  trendingNames[i].innerHTML= simpleData[i];
}

for (let i=0; i<topNames.length; i++){
  topNames[i].innerHTML= simpleData[(simpleData.length-1)-i];
}

const detailedData = [
  {name:"Chainers.IO", description:"Chainers is the next level Metaverse with infinite P2E possibilities..."},
  {name:"Naga Kingdom", description:"The most entertaining .io game on WildCoin is here..."},
  {name:"Hoglympics", description:"Exhilarating Play-to-Earn (P2E) Olympic Games on Wildcoin..."},
  {name:"Solview", description:"Wallet checker, NFT Checker and Live streaming charts for Wildcoin tokens."},
  {name:"Psyker", description:"Welcome to the Pskyerverse. Immerse yourself into a fighting experience like no other..."},
  {name:"Salad Cat Coin", description:"Meet Salad Cat, the coolest memecoin on Wildcoin."},
]

const appListNames = document.getElementsByClassName('app-list-name');
const appListDesc = document.getElementsByClassName('app-list-desc');


for (let i=0; i<appListNames.length; i++){
  appListNames[i].innerHTML= detailedData[i].name;
}

for (let i=0; i<appListDesc.length; i++){
  appListDesc[i].innerHTML= detailedData[i].description;
}

// Toggle between hiding and showing the dropdown content

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#search-button')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
