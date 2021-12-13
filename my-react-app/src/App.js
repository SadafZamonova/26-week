import './App.css';
import Hero from './components/hero';


let heroes = [{
  person: "Супермен",
  universe: "DC Comics",
  activity: "борец за справедливость",
  superpowers: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  src: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
},

{
  person: "Железный человек",
  universe: "Marvel Comics",
  activity: "гений, миллиардер, плейбой, филантроп",
  superpowers: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  src: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
},
{
  person: "Чудо-женщина",
  universe: "DC Comics",
  activity: "супергероиня, секретарь-референт",
  superpowers: "сверхчеловеческая сила искорость, выносливость, полет",
  src: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
}
];

function App() {
  return (
    <div className="App">
      <h1 className="hero-card">Супергерои</h1>

      {
       heroes.map((hero)=>
       <Hero person={hero.person} universe={hero.universe} activity={hero.activity} superpowers={hero.superpowers}></Hero>
       )
      }
    </div>
  );
}

export default App;
