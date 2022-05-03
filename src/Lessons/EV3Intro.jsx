import { Container } from "react-bootstrap";
import Download from "../Components/Download-card";

export const lessonEV3Intro = <Container>
    <div className="theory-card std-shadow5">
    <h5 className="header-definitions std-shadow2">Stavebnice LEGO MINDSTORMS</h5>
    <p>Jedná se o stavebnici od firmy <b>LEGO</b> určenou pro rozvoj a <b>nauku robotiky a programování</b>. Stavebnice se skládá  z obyčejných <b>dílků ze 
        série LEGO TECHNIC</b>, <b>3 servomotorů</b> (2 velkých, 1 střední), <b>4 senzorů</b> (gyroskopický, ultrazvukový, světelný, kontaktní), kabelů, dalšího příslušenství a 
        hlavní řídící <b>jednotky Brick.</b></p>
    </div>
    <div className="theory-card std-shadow5">
    <h5 className="header-definitions std-shadow2">EV3 Brick</h5>
    <p>Jedná se o <b>kontrolní jednotku stavebnice</b>. <b>Brick</b> je <b>mikropočítač</b>, který provádí uživatelem zadaný program. Je poháněn bateriovým 
        modulem, který může být osazen buď 6xAA bateriemi nebo proprietární dobíjecí baterií. K propojení robota s okolím slouží porty:</p>
    <ul style={{textAlign:"left", marginLeft:10}}>
        <li><b>A až D</b> jsou označeny pro připojení motorů</li>
        <li><b>1 až 4</b> slouží pro připojení senzorů</li>
        <li><b>MicroUSB</b> port pro připojení robota k počítači</li>
        <li><b>USB A</b> pro připojení proprietárních zařízení</li>
        <li><b>Slot na SD kartu</b> kterým lze spustit na robotovi jiný systém</li>
    </ul>
    <img src={process.env.PUBLIC_URL + "/images/robot/brick.png"} width="30%" alt="EV3 Brick"></img>
    </div>
    <div className="theory-card std-shadow5">
        <h5 className="header-definitions std-shadow2">Ovládání jednotky Brick</h5>
        <p>Základní úkony, které budeme provádět fyzicky přes tlačítka jednotky budou přinejmenším <b>vypnutí </b> a <b>zapnutí</b>.
        Zapnutí jednotky Brick probíhá pomocí <b>prostředního tlačítka</b>. Vypnutí probíhá pomocí <b>levého horního tlačítka</b> 
        (pod displejem) po potvrzení volbou fajfky. 
        </p>
    </div>
    <div className="theory-card std-shadow5">
    <h5 className="header-definitions std-shadow2">Prostředí EV3 Classroom</h5>
    <p><b>EV3 Classroom</b> je prostředí, respektive <b>aplikace</b>, která umožňuje vytváření programu pro robota EV3. Navíc zde jsou zprostředkovává plány 
        ke stavbě různých robotů a výukové lekce s úkoly.</p>
    <img src={process.env.PUBLIC_URL + "/images/ev3class/Classroom-overview.png"} alt="Classroom overview" width={"90%"}></img>
    <p><i>Úvodní obrazovka EV3 Classroom</i></p>
    </div>
    <div className="theory-card std-shadow5">
    <h5 className="header-examples std-shadow2">Připojení jednotky</h5>
    <p>Nyní naším úkolem bude uvěřit, zda-li je jednotka robota funkční, tedy jestli komunikuje s počítačem. Za tímto účelem otevřeme 
        program Lego EV3 Classroom. Na úvodní obrazovce zvolte tlačítko <b>START</b> a následující dlaždici.</p>          
    <p><img src={process.env.PUBLIC_URL + "/images/ev3class/Connection-tab.PNG"} alt="Connection tab" width={"50%"}></img></p>
    <br></br>
    <p>Postupujte podle instrukcí, než budete vyzváni k připojení jednotky.</p>
    <p><img src={process.env.PUBLIC_URL + "/images/ev3class/Connection-button.PNG"} alt="Connection button" width={"40%"}></img></p>
    <p>Zde je potřeba vybrat patřičnou <b>formu připojení</b>. V případě <b>připojení</b> jednotky <b>kabelem</b>, stačí, aby Vaše jednotka <b>Brick byla spuštěná a připojena USB kabelem do PC</b>. 
    V případě <b>připojení</b> pomocí <b>BlueTooth</b>, je potřeba <b>zapnout</b> tuto funkcionalitu <b>na obou zařízeních</b> a <b>v EV3 Classroom</b> zvolit konkrétní jednotku k připojení.</p>
    <p><img src={process.env.PUBLIC_URL + "/images/ev3class/Connection-indicator.PNG"} alt="Connection indicator" width={40}/>Pokud vidíte stejný indikátor ve vašem editoru EV3, podařilo se vám úspěšně připojit vašeho robota k počítači. Ve zbylé částí návodu budete navedeni 
        k vytvoření prvního programu a jeho následném spuštění na jednotce.</p>
    </div>
    <div className="theory-card std-shadow5">
    <h5 className="header-examples std-shadow2">Vytváření programu</h5>
    <p>Tvorba programu v rámci EV3 Classroom probíhá pomocí takzvaného <b>vizuálního programovacího jazyka</b>. Jak už název napovídá (nebo jste si mohli všimnout v testu připojení), 
        tento druh programovacího jazyka využívá <b>vizuálních komponent</b>. To bude mít v případě jazyka EV3, 
        který budeme využívat, podobu <b>funkčních bloků</b>.</p>
    <p><img src={process.env.PUBLIC_URL + "/images/ev3class/Editor-program.PNG"} alt="Editor program" width={"90%"}/></p>
    <p>Jednotlivé <b>bloky skládáme do sebe</b> jako puzzle, spojujeme je ve větší celky programovacích 
        bloků, tzv. <b>stacky</b>. Každý jednotlivý blok ve stacku vykonává nějaký úkol.</p>
    </div>
    <div className="theory-card std-shadow5">
    <h5 className="header-examples std-shadow2">Spuštění programu</h5>
    <p>Aby mohl <b>robot</b> nachystaný <b>program vykonat</b>, musí se dostat do jeho <b>paměti</b>. Náš program si <b>uložíme</b> a <b>pojmenujeme</b>, 
        tak abychom jej jednoduše poznali. Poté <b>zmáčkneme tlačítko pro spuštění</b>, které přenese soubor programu do jednotky robota.</p>
    <div className="dw-card"><img src={process.env.PUBLIC_URL + "/images/ev3class/Editor-launch-buttons.PNG"} alt="Launch buttons"/></div>
    <p>Program lze v EV3 rovněž <b>pouze stáhnout</b> do jednotky. Poté najdeme v první kartě menu <b>stejnojmenný soubor</b> a po zvolení jej můžeme <b>spustit</b> prostředním tlačítkem.</p>
    </div>
    <div className="theory-card std-shadow5">
    <h5 className="header-definitions std-shadow2">Motory</h5>
    <p>Základním příslušenstvím pro připojení do jednotky EV3 Brick jsou <b>servomotory</b>. Dělí se na <b>2 druhy</b>:</p>
    <h6>Velký servomotor</h6>
    <p>Je určený pro <b>náročnější</b> pohybové úkony. <b>Není</b> až tak <b>přesný</b> při vykonávání zadaného počtu/stupňů otočení, zato ale disponuje <b>větším výkonem</b>.</p>
    <p><img src={process.env.PUBLIC_URL + "/images/robot/big-servo.png"} alt="Big servomotor" width={"50%"}/></p>
    <h6>Střední servomotor</h6>
    <p><b>Přesnější</b> motor určený pro méně vytěžující úkony.</p>
    <p><img src={process.env.PUBLIC_URL + "/images/robot/medium-servo.png"} alt="Medium servomotr" width={"50%"}/></p>
    
    <p>Oba motory jsou vybaveny základními otvory pro přípojení stavebních dílků, jak pro umístění, tak pro otáčení. Pro oba motory platí, že k jejich připojení slouží porty <b>A-D</b>. Napojení rotoru je u obou motorů označeno červeně. Pro manipulaci využíváme bloky z kategorie <b>Motors</b>.</p>
    </div>
</Container>;

export const tasksEV3Intro = [
    <div>
      <h5>Oprava programu</h5>
      <p>Následující program nefunguje úplně dobře, Vaším úkolem je opravit jej. Při stisknutí zvoleného tlačítka (nahoru, vlevo, vpravo), by měl Brick na 2 sekundy zobrazit správně nasměrované oči a poté pro jistotu vypsat směr.</p>
      <div className="dw-card"><a href={process.env.PUBLIC_URL + "/program_files/Ukol 3-1.lmsp"} download><Download name={"Program 3.1"} /></a></div>
    </div>,       
    <div>
      <h5>Robotické rameno</h5>         
      <p>Sestavte podle rameno podle návodu. Vaším úkolem bude po sestavení zapojit <b>velký servomotor</b> do portu <b>A</b> a <b>střední servomotor</b> do portu <b>B</b>.</p>
      <div className="dw-card"><a href={process.env.PUBLIC_URL + "/models/Rameno-model.pdf"} download><Download name={"Model ramene"} /></a></div>
      <p>V následující části úlohy vytvoříte program pro robotické rameno. Základem tohoto programu bude program z úlohy 3.1. Po zmáčknutí příslušného tlačítka se otočí jeden z motorů v takovém směru, aby rameno kopírovalo směr zmáčknutého tlačítka.</p>
      <p>V poslední části budeme chtít využít prostřední tlačítko. K práci s motory máme k dispozici také oválný blok... představující hodnotu (stupně), o které se daný motor otočil. Po zmáčknutí prostředního tlačítka program provede vrácení motorů do výchozí pozice.</p>
    </div>
    
  ];