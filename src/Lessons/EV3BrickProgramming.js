import { Container } from "react-bootstrap";
import Download from "../Components/Download-card";

export const lessonEV3Brick = <Container>
<div className="theory-card std-shadow5">
  <h5 className="header-definitions std-shadow2">Programová konstrukce - blok (stack)</h5>          
  <p>Nyní si popíšeme a v některých případech připomeneme, s čím jsme se minule seznámili. <b>Programový stack</b> je <b>seskupení</b> 
  jednotlivých <b>funkčních bloků</b>. Vždy <b>začíná</b> specifickým <b>událostním blokem</b>, na jehož základě se <b>spouští</b> 
  (připomíná krajní puzzle).</p>  
  <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/block-start.PNG"} alt="Start block"></img></div>
  <p>V ukázce je uveden blok, který se spustí <b>při zapnutí programu</b>, ale jsou k dispozici bloky s <b>různými</b> podmínkami spuštění. 
  Všechny startovní bloky najdeme v kategorii <b>Events</b>.</p>
  <p><b>Vykonávání bloků</b> ve stacku poté probíhá <b>lineárně</b> shora dolů. <b>Posledním</b> blokem ve stacku by měl být <b>ukončovací blok</b>.
   <img src={process.env.PUBLIC_URL + "/images/ev3class/Block-end.PNG"} alt="End block"></img> V rámci ukončovacího bloku můžeme zvolit, zda chceme ukončit tento konkrétní stack, všechny ostatní nebo celý program.</p>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-definitions std-shadow2">Druhy bloků</h5>
  <p>Pro úplnost si zmíníme všechny dostupné kategorie bloků a jejich použití:</p>
  <dl>
    <dt><span class="dot" style={{backgroundColor: "#0090f5"}}></span>Motory (Motors)</dt>
    <dd>Manipulují s konkrétním motorem skrz port v kterém je připojen.</dd>
    <dt><span class="dot" style={{backgroundColor: "#fb59ce"}}></span>Pohyb (Movement)</dt>
    <dd>Pohybují s celým robotem. Klíčové je sestavení robota, tak aby všechny pohybové motory byly stejného typu, zapojeny ve stejném směru a zvoleny jako pohybové motory v unikátním pohybovém bloku.</dd>
    <dt><span class="dot" style={{backgroundColor: "#f5c400"}}></span>Události (Events)</dt>
    <dd>Spouštějí programový stack na základě specifické události. Součástí jsou také bloky pro zasílání zpráv.</dd>
    <dt><span class="dot" style={{backgroundColor: "#935df5"}}></span>Zobrazení (Display)</dt>
    <dd>Pracují s displejem kontrolní jednotky EV3 Brick. Umožňují sdílet informace v průběhu programu. Příklad operací: rozsvícení kontrolního světla ve zvolené barvě, výpis textu na řádek,… </dd>
    <dt><span class="dot" style={{backgroundColor: "#bf70e7"}}></span>Zvuky (Sound)</dt>
    <dd>Obdobně jak bloky zobrazení. Vhodné pro sdělení jednoduché informace, případně pro výukové účely. Příklad operací: spušťení/zastavení zvoleného zvuku, nastavení hlasitosti,… </dd>
    <dt><span class="dot" style={{backgroundColor: "#ffb515"}}></span>Dohled (Control)</dt>
    <dd>Korigují průběh programu podmíněným vykonáváním kódu. Mohou obsahovat vlastní podmínku, případně slot na podmíněný programový blok.</dd>
    <dt><span class="dot" style={{backgroundColor: "#00b94d"}}></span>Operátory (Operators)</dt>
    <dd>Korigují průběh programu podmíněným vykonáváním kódu. Mohou obsahovat vlastní podmínku, případně slot na podmíněný programový blok.</dd>
  </dl>            
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2"><span class="dot" style={{backgroundColor: "#ff9835"}}></span>Proměnné</h5>
  <p>Abychom mohli v jazyce EV3 využívat proměnné, potřebujeme si je nejdříve definovat. To se dělá pomocí 
    tlačítka <img src={process.env.PUBLIC_URL + "/images/ev3class/make-var.PNG"} alt="Make a variable"></img> v kategorii Variables. Následně vás čeká vyskakovací okno, v
    kterém zadáte název proměnné. Po definování proměnné byste měli uvidět nové bloky. <img src={process.env.PUBLIC_URL + "/images/ev3class/var-value.PNG"} alt="Variable value"></img> představuje 
    hodnotu uložennou v proměnné. Pomocí <img src={process.env.PUBLIC_URL + "/images/ev3class/set-var.PNG"} alt="Set variable"></img> lze nastavit hodnotu do proměnné. A v 
    neposlední řadě <img src={process.env.PUBLIC_URL + "/images/ev3class/change-var.PNG"} alt="Change variable"></img> umožňuj proměnnou modifikovat.</p>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Zprávy</h5>          
  <p>Pokud budeme chtít <b>spustit stack</b> ve specifický moment (v průběhu programu), budeme muset využít tzv. <b>zprávy</b>. Jedná se o 
    <b> komunikační nástroj</b> uvnitř programu. Sestává ze 2 částí, <b>odesilatele</b> a <b>příjemce</b>. <b>Odesilatelem</b> je blok zasílající označenou 
    zprávu.<img src={process.env.PUBLIC_URL + "/images/ev3class/bcast-send.PNG"} alt="Broadcast message sending"></img> <b>Příjemcem</b> je blok, který na tuto zprávu vyčkává a 
    po obdržení spustí stack.</p>
    <img src={process.env.PUBLIC_URL + "/images/ev3class/bcast-recieve.PNG"} alt="Broadcast message recieve"></img>          
</div>
<div className="theory-card std-shadow5">
        <h5 className="header-definitions std-shadow2">Kontaktní senzor</h5>
        <p>Kontaktní senzor je jedno z příslušenství robota. Umožňuje rozpoznat <b>2 základní stavy</b>: <b>zmáčnkutý </b>(pressed) a <b>uvolněný </b> 
            (released). Připojení probíhá pomocí kabelu a je možné jej připojit do portu <b>1-4</b>. Bloky pracující s kontaktním senzorem poznáme <span className="nowrap">pomocí značky <img src={process.env.PUBLIC_URL + "/images/ev3class/ico-contact.PNG"} alt="Contact sensor icon"></img></span></p>
        <img src={process.env.PUBLIC_URL + "/images/robot/contact-sensor.png"} alt="Contact sensor" width={"40%"}></img>
    </div>
</Container>;

export const tasksEV3Brick = [ 
    <div>
      <h5>Vykreslení za pomocí tlačítek</h5>
      <p>Vytvořte program v EV3, který nám bude <b>zobrazovat na displeji jednotky Brick číslo</b>. To bude ve <b>výchozím stavu 0</b>. <b>Levé tlačítko</b> bude sloužit k <b>snížení hodnoty čísla o 1</b>, <b>pravé naopak k zvýšení o 1</b>.</p>
    </div>,
    <div>
      <h5>Bzučák</h5>
      <p>Vaším úkolem bude <b>vytvořit program</b> a <b>rozšířit</b> jednotu <b>Brick</b> tak, aby byla chráněna před odcizení. Pro tento účel 
      budete muset <b>připojit kontaktní</b> sezor k jednotce, dle následujícího plánu:</p>
      <p><a href={process.env.PUBLIC_URL + "/models/Bzucak-model.pdf"} download><Download name={"Model bzučáku"} /></a></p>
      <p>Porgram bude fungovat takto:
        <ul>
          <li>Po spuštění reaguje program na 2 stavy: pokud je kontaktní senzor zmáčknutý, robot pouze zobrazuje status "Zzz" na displeji.</li>
          <li>Pokud senzor zmáčknutý není, zobrazí se "eyes/sleeping" a po 2 vteřinách se přehraje na vteřinu vámi vybraný zvuk (alarm).</li>
          <li>Po další vteřině se změní displej na "eyes/awake" a na 2 vteřiny přehraje alarm.</li>
          <li>Po další vteřinové prodlevě, se nastaví "eyes/angry" a začne hrát nepřetržitě alarm.</li>
          <li>V kterékoli fázi musí položení robota zrušit zvukové projevy.</li>
          <li>Hlasitost (volume) alarmu by bylo vhodné postupně stupňovat. Nepřekračujte však hranici 15%.</li>
        </ul>
        Pro <b>vyčkání</b> časového úseku v programu použijte blok:</p>
        <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/block-wait.PNG"} alt="Wait block"/></div>
    </div>, 
    <div>
      <h5>Klavír</h5>
      <p>Vaším úkolem bude sestrojit program, který <b>zahraje</b> lidovou píseň <b>Skákal pes</b>. Pro hraní jednotlivých najdete blok <b>Play beep</b>. V rámci tohoto bloku, můžete zadat číselnou hodnotu, která přestavuje konkrétní notu (s výběrem pomůže interaktivní klavír).</p>
      <p>Noty písně: 
        <ul>
          <li>1 Část: <b>GG E GG E GG A GG F</b></li>
          <li>2 Část: <b>FF D FF D FF G FF E</b></li>
        </ul>
      </p>
      <p>Využijte <b>noty</b> v rozsahu <b>60-72</b>. Pokuste se využít známé prostředky a vytvořit co <b>nejefektivnější program</b>. Ideální program, by měl schopen píseň zahrát také v hluboké (48-60) a vysoké (72-84) tónině, pouze s malou úpravou.</p>
    </div>,
  ];