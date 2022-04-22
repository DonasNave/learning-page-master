import { Container } from "react-bootstrap";

//#region Zdrojové kódy

//#endregion Zdrojové kódy


export const lessonMicroPythonControl = 
    <Container>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Programování... a co bude dál</h5>
          <p>Pokud Vás výuka zaujala, existuje spousta možností jak v programování pokračovat ve volném čase. I když zrovna doma nemáte stavebnici
            Mindsotrms EV3.</p>
          <p></p>
        </div>
    </Container>;

export const tasksMicroPythonControl = 
[
    <div>
      <h5>Barevná mrštnost</h5>
      <p>Vašim úkolem je připojit barevný senzor tak, aby směřoval "před" robota. Následně vytvořte program, který po zmáčknutí prostředního tlačítka započne hru:</p>
      <ul>
        <li>Hra spočívá v postupně se vyvíjejících kolech. Začíná se kolem č.1. Na začátku kola se náhodně vylosuje jedna z barev: červená, modrá, žlutá, zelená</li>
        <li>Umístěním bloku odpovídající barvy před senzor se kolo úspěšně absolvuje.</li>
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
      Hra na palivo
    </div>
  ];