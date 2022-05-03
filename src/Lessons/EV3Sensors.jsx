import { Container } from "react-bootstrap";

export const lessonEV3Sensors = <Container>
<div className="theory-card std-shadow5">
  <h5 className="header-definitions std-shadow2">Ultrazvukový senzor</h5>
  <p>Ultrazvukový senzor pracuje na bázi <b>ultrazvukových vln</b> a samotný senzor je sestaven z vysílače a přijímače.</p>
  <img src={process.env.PUBLIC_URL + "/images/robot/UZ-sensor.png"} alt="UZ sensor" width={"40%"}></img>
  <p><img src={process.env.PUBLIC_URL + "/images/ev3class/ico-UZ.PNG"} alt="UZ sensor icon"></img> Robot pracuje v specifických senzorových blocích. Jeho výstupem je <b>vzdálenost od zachycené překážky</b>.
  </p>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-definitions std-shadow2">Optický senzor</h5>
  <p>
    Optický senzor dává robotu výstup okolním světle.</p>
    <img src={process.env.PUBLIC_URL + "/images/robot/color-sensor.png"} alt="Color sensor" width={"40%"}></img>
    <p><img src={process.env.PUBLIC_URL + "/images/ev3class/ico-color.PNG"} alt="Color sensor icon"></img> Poskytuje nám různá data na základě 3 režimů, ve kterých pracuje:</p>
    <ol className="basic-listing">
      <li><b>Color mode</b> – barevný režim, ve kterém senzor umí rozlišovat 7 druhů barev. 
        V barevném režimu pracují bloky, umožňující robotu reagovat na <b>konkrétní barvu</b> ze seznamu. Tento seznam je předem definovaný: <b>žádná barva - 0, černá - 1, modrá - 2, zelená 3, žlutá - 4, červená - 5, bílá - 6, hnědá - 7</b></li>
      <li><b>Reflected light intensity mode</b> – režim rozeznání intenzity barvy povrchu. Senzor pomocí led diody <b>nasvěcuje</b> 
      oblast před sebou a <b>zaznaméná</b>, kolik <b>světla</b> se odrazí zpěte <b>odráží zpět</b>. Výsledná hodnota je v rozsahu 0-100. <b>Nižší hodnota</b> reprezentuje 
      <b> tmavý povrch</b> a naopak <b>vyšší</b> říká, že měřený <b>povrch je světlý</b>.</li>
      <li><b>Ambient light intensity mode</b> – senzor rozeznává intenzitu okolního světla (bez nasvícení).</li>
    </ol>
    <p>
    V rámci programu jednotlivé <b>režimy</b> senzoru <b>nevybíráme</b>. Avšak bloky, jenž s nimi pracují, mají specifický <b>výstup daný režimem</b>, v kterém senzor pracuje.
    </p>
</div>
</Container>;

export const tasksEV3Sensors = [
  <div>
    <h5>Měřič vzdáleností</h5>
    <p>Vašim úkolem je robota využít k <b>měření vzdálenosti</b> mezi <b>dvěma objekty</b>. Je důležité aby oba objekty <b>stáli na zemi a měli rovné hrany</b> (např. stůl, zeď)</p>
    <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/extension-uz.PNG"} alt="Tab UZ extension"></img></div>
    <p>Program bude fungovat následovně:</p>
      <ol>
        <li>Robot bude umístěn mezi dvě překážky, směřujíc k jedné z nich</li> 
        <li>Přiblíží se na 15cm k první překážce, otočí a přijede do stejné vzdálenosti i k druhé překážce</li>
        <li>Po tom, co robot překoná trasu mezi překážkami, vypíše na displej celkovou vzdálenost mezi nimi.</li>
      </ol>
      <p><i>Vymyslete, jak zaznamenat a přepočítat ujetou vzdálenost. V rámci měření nezapomeňte započítat všechny délky, zasahující do tohoto způsobu měření.</i>
      </p>
  </div>, 
    <div>
      <h5>Pohyb v rámci úseku</h5>
      <p>Vytvořte program, který umožní robotu se autonomně <b>pohybovat ve vyznačené dráze</b>. <b>Dráha</b> bude představovat <b>souvislý úsek</b> libovolného 
        materiálu <b>černé barvy</b> (například černá páska na podlaze) ve dvou pruzích, dostatečně daleko od sebe.</p>
      <p>Robot se tedy bude <b>pohybovat rovně</b>, dokud snímač intenzity nezačne <b>snímat černou barvu</b> z vyznačeného kraje. V momentě, kdy robot <b>ztratí nit</b>, musí se navrátit zpět do rozmezí vyznačeného úseku. Jak docílit, aby se mu nepovedlo omylem dostat mimo dráhu?</p>
      <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/extension-color.PNG"} alt="Tab color extension"></img></div>
      <p>Pro tento úkol budete potřebovat vybavit robota barevným senzorem podle vzoru z modelu <b>Color Sensor Down - Driving Base</b></p>
    </div>  
  ];