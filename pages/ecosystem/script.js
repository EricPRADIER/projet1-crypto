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
  {name:"Chainers.IO", description:"Chainers is the next level Metaverse with infinite P2E possibilities in the unique pixeled 3D packaging"},
  {name:"Naga Kingdom", description:"The most entertaining .io game on WildCoin"},
  {name:"Hoglympics", description:"Exhilarating Play-to-Earn (P2E) Olympic Games on Solana - easy to pick up yet hard to master"},
  {name:"Solview", description:"Wallet checker, NFT Checker and Live streaming charts for Wildcoin tokens"},
  {name:"Psyker", description:"Welcome to the Pskyerverse. Immerse yourself into a fighting experience like no other, blending science-fiction and post-apocalyptic themes"},
  {name:"Salad Cat Coin", description:"Meet Salad Cat, the coolest memecoin on Wildcoin"},
]

