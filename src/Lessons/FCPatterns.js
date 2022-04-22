import { Container } from "react-bootstrap";

export const lessonFlowChart = <Container>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Opakování</h5>
  <p>V rámci algoritmu někdy nastanou situace, kdy potřebujeme <b>část kódu zopakovat</b> v určitém <b>počtu opakování</b>. Pro tyto situace se využívají tzv. <b>cykly</b>. Ty mají moho podob v různých stylech zápisu algoritmu, obzlášť tedy <b>v programovacích jazycích</b>. V těch, kvůli svému <b>častému využití</b>, mají <b>zjednodušený zápis</b>. Ve <b>FlowChart</b> si ale pro konkrétní počet opakování můžeme vystačit například s takovýmto diagramem.</p>
  <img src={process.env.PUBLIC_URL + "/images/flowchart/Example-cycle.png"} alt="" width={"100%"}></img>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-definitions std-shadow2">Pole</h5>
  <p>Pokud potřebujeme uložit více hodnot, které můžeme rozumně seskupit k sobě, můžeme využít tzv. <b>pole</b>. Jedná se o konstrukci, která uchovává jakékoliv množství seřazených hodnot.</p>
  <p><i>Příklad:<br></br>auta = [ "mazda", "audi", "bmw" ]</i></p>
  <p>Tímto zápisem jsme vytvořili <b>pole</b> uložené v proměnné <b>auta</b> o <b>délce 3</b>. Pokud chceme přistupovat k prvkům v poli, použijeme zápis <b>auta[i]</b>, kdy <b>i</b> představuje číslenou pozici (tzv. index) v poli. Tedy pokud bychom chtěli vypsat hodnotu audi, použijeme zápis:</p>
  <img src={process.env.PUBLIC_URL + "/images/flowchart/ListUse.png"} alt="" width={150}></img>
  <p><i>Hodnoty uložené v poli nazýváme prvky pole.</i></p>
  <p>Zároveň, abychom si ulehčili budoucí práci, stanovíme si pomocnou <b>funkci DÉLKA</b>, která nám dá počet prvků v poli.</p>
 </div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">True a false</h5>
<p>V rámci zápisu algoritmů jsme doteď v rozhodovacích blocích používají slovní odpověď ANO/NE. Nicméně abychom dodržovali určitý standart, který nám pak pomůže při programování, přejdeme na nové hodnoty. Ty vychází z anglických výrazů pravda <b>true</b> a lež <b>false</b>. Tedy když se teď budeme rozhodovat tak (viz obrázek) nově použijeme <b>true</b> namísto <b>ANO</b> a <b>false</b> místo <b>NE</b></p>
<img src={process.env.PUBLIC_URL + "/images/flowchart/TrueFalseDec.png"} alt="" width={"70%"}></img>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Navázání diagramu v jiném místě</h5>
  <p>V neposlední řadě si zpříjemníme zápis komplexních diagramů. Pokd nám v určité části diagramu dojde list, můžeme použít obrazec pro přesměrování. Tím je kolečko označené velkým písmenem. Nejenže nám to umožňí konstruovat rozsáhlejší diagram, můžeme pomocí logického rozdělení diagramu získat znovupoužitelné části.</p>
  <img src={process.env.PUBLIC_URL + "/images/flowchart/DiagConnection.png"} alt="" width={"100%"}></img>
</div>
</Container>;

export const tasksFlowChart = [
  <div>
    <h5>Připomínka nákupu</h5>
    <p>Vytvořte jednoduchý diagram, jenž postupně vypíše předměty k nakoupení. Předměty budou uloženy v rámci diagramu. Jedná se o <b>vejce, mléko a rohlíky. </b>
      Diagram vypíše všechny předměty nákupu, poté oznámí, že je hotovo a tím algoritmus končí.</p>
  </div>,
  <div>
    <h5>Chytrá domácnost</h5>
    <p>Vaším úkolem bude vytvořit algoritmus pro chytrou domácnost. Představte si, že máte počítač, nad kterým běží Váš algoritmus. 
      Ten by měl neustále běžet, dokud mu nepřijde příkaz vypnutí.</p>
    <p>Diagram by měl řešit:</p>
    <ul>
      <li>Každou hodinu je potřeba vyvětrat pomocí funkce <b>VYVĚTRAT</b></li>
      <li>Teplota musí být udržena na normě <b>21,0°</b>. Pokud je teplota nižší, spustí se <b>topení</b> příkazem <b>ZAPNI(topení)</b>.</li>
      <li>Pokud je teplota vyšší, domů reaguje ekonomicky. Nejdříve se pokusí vypnout topení příkazem <b>VYPNI(topení)</b>
        Pokud tuto možnost nemá předčasně dům vyvětrá</li>
    </ul>
    <div className="dw-card">
      <img src={process.env.PUBLIC_URL + "/images/flowchart/Smart-home.png"} alt="" width={150}></img>
    </div>
    <p>V rámci funkcí chytrého domova máte k dispozici proměné: <b>teplota</b> a <b>čas</b>. Teplota vrátí číselnou hodnotu současné teploty s 
    přesností na jednu dessetinou čárku. Čas má vazby a to: <b>čas.hodina</b> a <b>čas.minuta</b>, které představují číselné hodnoty současného času.</p>
  </div>,
    <div>
      <h5>Mincovník automatu</h5>
      <p>Úkolem bude <b>vytvořit algoritmus mincovníku</b> automatu na cukrovinky. V rámci automatu lze platit libovolnou částku mincemi 
      <b> v hodnotách 1, 2, 5, 10, 20, 50</b>. Přeplatek automat vyplatí taktéž pomocí mincí v těchto hodnotách.</p>
      <div className="dw-card">
        <img src={process.env.PUBLIC_URL + "/images/flowchart/Automata.svg"} alt="" width={250}></img>
      </div>
      <p>Algoritmus se v první fázi inicializuje, nastaví pole s druhy mincí, které bude vyplácet a jejich počet, který má k dispozici. Ten je v
        <b> počátečním stavu 10 kusů od každé mince</b>. Následně bude čekat na načtení <b>platby</b>, což bude pole obsahující výčet kolik, kterých
        mincí bylo vhozeno. Poté:</p>
      <ul>
        <li>Automat příkazem <b>SEČTI</b> spočítá hodnotu mincí v <b>platbě</b>. To stejné provede pro hodnotu vlastních mincí v zásobě. S těmito částkami provede
        porovnání, zda-li vůbec bude schopen <b>vrátit přeplatek</b>.</li>
        <li>Pokud ne, vrátí <b>platbu</b> příkazem <b>VYDEJ</b></li>
        <li>Pokud ano, přidá mince z platby do zásoby a do <b>proměnné suma</b> si uloží částku, kterou bude vracet.</li>
      </ul>
      <p>Následně automat zjistí, které mince použije k vydání. Snaží se vydat co nejméně mincí a začíná tedy mincemi s největší hodnotou. K výdeji použijte znovu příkaz <b>VYDEJ</b>.</p>
    </div>,    
  ];