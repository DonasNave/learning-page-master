import { Container } from "react-bootstrap";

//#region Zdrojové kódy

//#endregion Zdrojové kódy


export const lessonMicroPythonControl = 
    <Container>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Programování... a co bude dál</h5>
          <p>Pokud Vás zaujala výuka, existuje spousta možností jak v programování pokračovat ve volném čase. I když zrovna doma nemáte stavebnici
            LEGO MINDSTORMS EV3.</p>
        </div>
    </Container>;

export const tasksMicroPythonControl = 
[
    <div>
      <h5>Barevná hra</h5>
      <p>Vašim úkolem je připojit barevný senzor tak, aby směřoval "před" robota. Následně vytvořte program, který po zmáčknutí prostředního tlačítka započne hru:</p>
      <ul>
        <li>Hra spočívá v <b>postupně se vyvíjejících kolech</b>. Začíná se kolem č.1. Na začátku kola se <b>náhodně vylosuje jedna z barev</b>: červená, modrá, žlutá, zelená</li>
        <li><b>Umístěním</b> bloku <b>odpovídající barvy před senzor</b> se kolo úspěšně <b>splní</b>.</li>
        <li>Pokud nestihnete umístit barvu před senzor, prohráváte. Umístění nesprávné barvy nemá roli na průběh hry.</li>
        <li>Čas pro první kolo je 10s, pro každé další o pětinu menší než čas pro přechozí kolo.</li>
        <li>Skóre začíná na 0 a počítá se jako: <span className="nowrap"><b>(11 - čas pro dané kolo) * 2</b></span></li>
        <li>Skóre se připočte za každé úspěšně absolvované kolo</li>
      </ul>
      <p>Výpis displeje bude mít následující podobu:</p>
      <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/help/display.PNG"} alt=""></img></div>
      <p>Displej bude zobrazovat informace důležité k současnému stavu hry.</p>
    </div>,
    <div>
      <h5>Hra na palivo</h5>
      <p>Vaším úkolem bude upravit program z minulé lekce <b>Jízda na provázku</b>. Nejdříve upravte robota tak, aby mě připojen barevný senzor ve stylu 
      modelu <b>Color Sensor Down</b>, který můžete najít v EV3 Classroom.</p>
      <p>V následující fázi připravte vodítko, které bude představovat souvislý úsek černého značení (nejlépe páska).</p>
      <p>Upravte program robota následovně:</p>
      <ul>
        <li>Robot neustále jede vpřed</li>
        <li>Po stisknutí levého nebo pravého kontaktního senzoru (dle úlohy 11.3) robot bude zatáčet vlevo nebo vpravo</li>
        <li>Robot neustále postupně zrychluje (200-700 °/s)</li>
        <li>V rámci programu se udržují body v počáteční hodnotě 5000.</li>
        <li>Pokud robot při jízdě snímá značené vodítko, jede bez problému dál.</li>
        <li>Pokud se při jízdě vodítko ztratí, spustí se časomíra, která měří dobu, po kterou robot jede mimo vodítko.</li>
        <li>Za každých 0.1 vteřin mimo vodítko, se odečte rychlost * 0.1 počet bodů.</li>
        <li>V momentě, kdy robot ztratil body, zastaví se a program končí.</li>
      </ul>
    </div>
  ];