import { Container, Table } from "react-bootstrap";

export const lessonAlgoritmy = 
    <Container>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Algoritmus</h5>
          <p>Představuje <b>posloupnost dílčích kroků potřebných pro vyřešení konkrétní úlohy</b>. To znamená, že algoritmem rozumíme nějaký postup, pro vyřešení zadaného problému. Skládá se z <b>jednotlivých kroků</b>, které jsou <b>postupně vykonány</b>. Proto, aby algoritmus mohl <b>vyřešit problém</b>, musí dostat nějaký <b>vstup</b>. Vstupem nazýváme <b>hodnoty, pro které má algoritmus problém vyřešit</b>. 
          <br></br><i>Například algoritmus, který vypočte obsah kruhu, tedy provede výpočet rovnice <i>π&middot;r<sup>2</sup></i>, potřebuju mít zadaný konkrétní poloměr kruhu.</i>
          <br></br><b>Krokem rozumíme jednoduchou činnost.</b><i> (Například sečtení dvou čísel, nakreslení úsečky atd.)</i>. <b>Algoritmus</b> může mít v praxi jakoukoli podobu, od úseku komplexního kódu počítačového programu, až po jednoduchý slovní návod na to, jak si uvařit čaj.</p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Vlastnosti algoritmů</h5> 
          <p>
          <ul style={{textAlign:"left", marginLeft:10}}>
            <li><b>Elementárnost</b> - <b>skládá se z určitého počtu jednoduchých (elementárních) kroků.</b></li>
            <li><b>Konečnost</b> - <b>počet kroků v algoritmu je konečný.</b> To znamená, že počet jednotlivých kroků není neomezený. Jednotlivé kroky, se ale můžou opakovat. 
                <br></br><i>Například: Jako platný algoritmus počítáme popis funkčnosti semaforů na železničním přejezdu. Ty čekají na signál, že jede vlak. Pokud ho obdrží, dají dolů závory a změní světla, kterými blikají, na červené. Poté, co obdrží signál, že vlak odjel, zvednou závory a změní světla zpět na bílé. Nakonec se dostanou do výchozího stavu a znovu čekají na signál, že jede vlak.</i>
                <br></br>Takový algoritmus nikdy nekončí, ale počet jeho kroků konečný je.</li>
            <li><b>Obecnost</b> - <b>algoritmus řeší určitý typ úlohy (obecnou třídu problémů)</b>, neřeší jeden konkrétní případ úlohy.
                <br></br><i>Například posloupnost kroků, kterou vypočítáme 4+5 není algoritmem (kroky: vezmi 4, přičti 5, součet je výsledek). Algoritmem by, ale byla posloupnost kroků, pro sečtení dvou čísel (kroky: vezmi první číslo, přičti druhé, součet je výsledek).</i></li>
            <li><b>Výstup</b> - jelikože je algoritmus "návodem" k řešení určitého typu úloh, <b>musí být výsledkem algoritmu řešení zadané úlohy.</b></li>
            <li><b>Determinovanost</b> - <b>pro každý stejný vstup vrátí algoritmus stejný výstup (výsledek).</b></li>
            <li><b>Determinismus</b> - <b>každý krok algoritmu je jednoznačný.</b> Tedy deterministický algoritmus nemůže mít </li>
          </ul>
          Né každý algoritmus, ale splňuje všechny vlastnosti.</p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Počítačový program</h5>
          <p><b>Soubor instrukcí, popisující, jak má být provedena určitá činnost (algoritmus) v rámci výpočetního zařízení.</b></p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Flowchart</h5>
          <p>FlowChart je druh <b>diagramu</b>, který <b>slouží k popisu</b> jednotlivých kroků <b>algoritmu</b>. Je <b>složen z obrazců</b>, představující dílčí kroky v rámci algoritmu, <b>a spojnic</b> ukončených šipkou, které udávají směr vývoje algoritmu.</p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Druhy obrazců:</h5>
          <Table striped bordered hover size="sm" className="std-table">
            <thead>
              <tr>
                <th>Obrazec</th>
                <th>Popis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={process.env.PUBLIC_URL + "/images/flowchart/Connector.png"} alt="Spojnice"></img></td>
                <td>Spojuje jednotlivé obrazce diagramu. Její směr udává postup kroků algoritmu.</td>
              </tr>
              <tr>
                <td><img src={process.env.PUBLIC_URL + "/images/flowchart/Process.png"} alt="Proces"></img></td>
                <td>Představuje dílčí krok algoritmu. Mělo by se jednat o jednoduchou a srozumitelnou operaci.</td>
              </tr>
              <tr>
                <td><img src={process.env.PUBLIC_URL + "/images/flowchart/Terminal.png"} alt="Terminál"></img></td>
                <td>Reprezentuje počátek nebo konec algoritmu.</td>
              </tr>
              <tr>
                <td><img src={process.env.PUBLIC_URL + "/images/flowchart/Decision.png"} alt="Rozhodnutí"></img></td>
                <td>Obrazec rozhodnutí znázorňuje podmíněnou operaci, tj. takový krok algoritmu, ve kterém se ptáme na nějakou 
                  situaci s odpovědí ANO/NE (pravda/nepravda). Pro obě odpovědi musí z rozhodnutí vést další kroky.</td>
              </tr>
              <tr>
                <td><img src={process.env.PUBLIC_URL + "/images/flowchart/IO.png"} alt="Vstup vystup"></img></td>
                <td>Představuje krok, ve kterém do algoritmu vstupují data anebo z něj vystupují. Například v algoritmu bankomatu by <b>vstupem </b>
                    mohlo být přečtení dat z karty nebo také načtení pinu z karty. Datovým <b>výstupem</b> by pak byl výpis na displeji 
                    o úspěšné transakci.</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="theory-card std-shadow5">
        <h5 className="header-examples std-shadow2">Ukázka diagramu</h5>
          <p>Algoritmus stučně řeší závěrečnou fázi vytvoření interneové objednávky. Nejdříve vypíše cenu nákupu. Pokud se zákazník rozhodne 
            platit předem, provede se platba a následně je zákazník informován o zaplacení. Pokud ovšem platit předem nechce, přičte se 
            k ceně nákupu poplatek. Nakonec se vytvoří objednávka a algoritmus končí.</p>
          <img src={process.env.PUBLIC_URL + "/images/flowchart/Example1.png"} alt="Ukazka flowchart" width={"80%"}></img>
          <p><i>Poznámka: Všimněte si, jak jednotlivé části diagramu odpovídají zadání.</i></p>
          <p>Zápis diagramu se standartně vyvíjí shora dolů.</p>
        </div>

        <div className="theory-card std-shadow5">
        <h5 className="header-definitions std-shadow2">Standart zápisu algoritmu</h5>
          <p>V rámci ukázkového diagramu jste si rovněž mohli všimnout různých způsobu zápisu konkrétní logiky algoritmu. Jedná se o standart, který budeme dodržovat. Díky tomu zajistíme čitelnost a přehlednost diagramu.</p>
          <ul style={{textAlign:"left", marginLeft:10}}>
            <li><b>Činnost (FUNKCE)</b> - Pokyn programu. Musí se jednat o jednoduchou činnost, tedy mělo by se jednat o zřejmý krok. Zapíšeme velkými písmeny název dané činnosti 
                <br></br><i>Například: VYPIŠ, VYTVOŘ, PŘIČTI</i></li>
            <li><b>Proměnná</b> - Slouží k uložení hodnoty v algoritmu. Tímto způsobem budeme udržovat data k dalšímu použití. Zapíšeme malými písmeny, pro název proměnné využijeme stručný avšak dostatečně zřejmý popis hodnoty, která v ní bude uložena. Pokud potřebujeme víceslovný název, jednotlivé slova oddělíme poddržítkem.
                <br></br><i>Například: objednávka, cena, slavnostní_čepice</i></li>
            <li><b>Přiřazení</b> - Znaménko přiřazení <b>'='</b>, pomocí kterého v algoritmu uložíme hodnotu do proměnné. Proměnnou zapíšeme na levé straně od znaménka a hodnota k uložení napravo.
                <br></br><i>Například: nazev = "Těžká váha", nebo také v ukázce: odpoved = tip (v tomto případě ukládáme hodnotu z proměnné tip, do proměnné odpoved)</i></li>
            <li><b>Porovnání</b> - Porovnání dvou hodnot se stejně jako v matematice dělí na jednotlivé varianty. Při porovnávání pomocí znamének: <b>'&lt;' '&lt;=' '&gt;' '=&gt;'</b> je zápis stejný jako v matematice. Avšak jinak zapisujeme rovnost, tedy že se dvě hodnoty rovnají. Pro rovnost použijeme dvojitého rovnítka, tedy <b>'=='</b>. Jiný zápis má také nerovnost dvou hodnot. Tu zapíšeme zapisujeme nerovnost a to <b>!=</b> <br></br>
            <i>Například: zápis <b>cena == 200</b> říká, že hodnota uložená v proměnné cena je 200. Což může být pravda, ale také nemusí.</i></li>
            <li><b>Matematické znaménka</b> - pro metametické operace používáme znanémka: <b>'+'</b> pro součet, <b>'-'</b> odčítání, <b>'*'</b> násobení a <b>'/'</b> dělení. Speciálním případem bude znaménko <b>'%'</b> tzv. modulo, které nám vrátí zbytek po dělení (např. 3 % 2 = 1; 13 % 5 = 3)</li>
          </ul>
        </div>             
      </Container>;

export const tasksAlgoritmy = [
    <div>
      <h5>První jednoduchý diagram</h5>
      <p>Vytvořte pro následující zadání FlowChart diagramy. Diagramy budou pospisovat algoritmy řešící jednotlivé problémy.</p>      
    </div>,
    <div>
      <h5>Opakování</h5>
      <p>Vytvořte pro následující zadání FlowChart diagramy. Diagramy budou pospisovat algoritmy řešící jednotlivé problémy.</p>      
    </div>,
    <div>
      <h5>Příprava na počasí</h5>
      <p><i>Utvořte diagram FlowChart dle zadání:</i></p>
      <p>Tereza se rozhoduje, jak se připraví na cestu ven. Nejdříve se podívá, jak venku je. Pokud je venku hezky, chce si vzít sluneční brýle. 
        Pokud venku prší vezme si deštník. Ale pokud   škaredě, ale neprší, vezme si pro každý případ brýle i deštník.</p>
    </div>,    
    <div>
      <h5>Rozšíření objednávky</h5>
      <p>Vraťte se k ukázkovému diagramu. Pouhé slovo výhra není dostatečnou motivací. Upravte diagram tak, aby v případě výhry vydal určitou částku. Pro zajímavost můžete vymyslet systém, který výherní částku upraví dle toho, jaké číslo bylo výherní.</p>
    </div>,
    <div>
      <h5>Největší společný dělitel</h5>
      <p>Utvořte diagram euklidovského algoritmu na výpočet GCD (největšího společného dělitele) dvou zadaných čísel.</p>
      <p>Algoritmus funguje tak, že:</p>
      <ol style={{textAlign:"left", marginLeft:10, marginTop:"2vh"}}>
        <li>Vezmeme dvě zadaná čísla a <b>vydělíme větší číslo menším</b></li>
        <li>Pokud <b>nezůstává zbytek</b> po dělení, největší společný násobek je <b>dělitel</b></li>
        <li>Pokud <b>zbytek</b> po dělení <b>zůstane</b>, pokračujeme krokem <b>1</b> a <b>nová dvojice</b> sestává z <b>dělitele</b> a <b>výsledku</b></li>
      </ol>
    </div>
  ];
