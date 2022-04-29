import { Container } from "react-bootstrap";
import CodeBlock from "../Components/Code-Block";

//#region Zdrojové kódy
const codeLibs = String.raw
`from pybricks.hubs import EV3Brick
from pybricks.ev3devices import (Motor, TouchSensor, ColorSensor,
                                 InfraredSensor, UltrasonicSensor, GyroSensor)
from pybricks.parameters import Port, Stop, Direction, Button, Color
from pybricks.tools import wait, StopWatch, DataLog
from pybricks.robotics import DriveBase
from pybricks.media.ev3dev import SoundFile, ImageFile`;

const codeAttributes = String.raw
`ev3 = EV3Brick()

#Jednotlivé reprezentace částí jednotky skrz třídy
Motor
Button
Port #a mnoho dalších, viz importy

#použití speakeru na instanci ev3, konkrétně metody beep
ev3.speaker.beep()
`;

const codeHubs = String.raw
`ev3.screen #ovládání výpisu na obrazovce
ev3.speaker #správa reproduktoru
ev3.light #nastavení světelné diody

#jaké funkce mají jednotlivé sekce a jak 
#je použít v záložce hubs dokumentace
`;

const codeMelody = String.raw
`#melodie
['G4/3', 'G4/3', 'E4/3', 'G4/3', 'G4/3', 
'E4/3', 'G4/3', 'G4/3', 'A4/3', 'G4/3', 
'G4/3', 'F4/3']

#potřebné informace získáte v sekci hubs
`;
//#endregion Zdrojové kódy


export const lessonMicroPythonIntro = 
    <Container>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Nový systém</h5>
          <p>Cílem následujících lekcí bude zužitkovat znalosti v Pythonu a vyzkoušet programování více prakticky, ovládáním robota EV3 Mindstorm.</p>
          <p>Abychom však mohli spouštět nově tvořený kód na jednotce Brick, musíme nad ní spustit odlišný operační systém. </p>
          <p><b>Operační systém je program, který ovládá hardware počítačového zařízení (v tomto případě jednotky Brick). Umožňuje nám, uživatelům pohodlně a srozumitelně
            manipulovat s daným zařízením. Zároveň zprostředkovává potřebnou funkcionalitu na něm běžícím aplikacím.</b></p>
          <p>Pro spuštění systému musíme mít nachystanou MicroSD kartu s obrazem operačního systému EV3dev. Tu poté vložíme do vypnutého zařízení EV3 Brick a následně jej zapneme.
            Po zapnutí uvidíte nejdřív klasické logo EV3 a následně informační výpis s drobným písmem. Po jeho doběhnutí Vás přivítá menu nového systému a můžete s jednotkou pracovat.
          </p>
          <p><b>Po dobu běhu operačního systému EV3dev nechte MicroSD kartu se systémem vloženou v jednotce. Vypnutí probíhá obdobně, jako na starém systému (volba Power Off).</b></p>
          <p>Odteď, pokud budeme chtít pracovat s novým systémem, spustíme robota s vloženou kartou. Pokud cheme zpět starý systém, stačí kartu před zapnutím jednotky vyjmout.</p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Rozšíření EV3 MicroPython</h5>
          <p>Nyní budeme programovat ve varinatě Pythonu zvané MicroPython. Jedná se o obdobu Pythonu se zredukovanou funkcionalitou, určenou pro mikropočítačové zařízení,
            jako je například EV3Brick.</p>
          <p>Abychom mohli pro robota pohodlně vytvářet programy v MicroPython, využijeme stejnojmenné rozšíření. 
            Jeho ikonu <img src={process.env.PUBLIC_URL + "/images/vscode/MicroPython-Tab.PNG"} alt=""></img> byste měli vidět na Vašem panelu VSCode.
          </p>
          <p>Po kliknutí na rozšíření, byste měli vidět 3 položky: <b>Create a new project</b>, <b>Explore sample projects</b> a <b>Open user guide</b>.
          Zvolte první možnost, pojmenujte adresář pro nově vytvořený projekt a uložte jej na disk. Nyní byste se měli nacházet ve vašem novém adresáři. Ten obsahuje soubor <b>main.py</b> s předchystaným kódem.</p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-examples std-shadow2">Nástroje programování robota</h5>
          <p>Než budeme moci v rámci programu ovládat jednotlivé části robota, musíme si obstarat patřičnou funkcionalitu. Jak už víme, 
            ta se získá importováním knihoven. Pokud jste vytvořili Váš projekt pomocí rozšíření MicroPython, měl by Váš soubor main.py obsahovat
            potřebné knihovny. Pokud ne, jsou Vám k dispozici níže.
          </p>
          <CodeBlock code={codeLibs}/>
          <p>Můžete si všimnout jednotlivé importované sekce. Týkají se známe základní funkcionality, jako jsou motory, senzory, tlačítka apod.</p>
          <CodeBlock code={codeAttributes}/>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-examples std-shadow2">Spouštění programu</h5>
          <p>Pro spuštění programu na jednotce Brick, je v první řadě potřeba ji připojit do VSCode. Toho docílíme jednoduše pomocí sekce 
            <b> EV3DEV DEVICE BROWSER</b> v průzkumníku souborů prostředí.
          </p>
          <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/vscode/EV3DEV-device.PNG"} alt=""></img></div>
          <p>Nejdříve připojte Brick k počítači, stejnou formou, jakou jste doposud
            používali v EV3 Classroom. Je nutné aby byl Brick zapnutý a v systému EV3Dev. Poté klikněte na výzvu k připojení.</p>
            <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/vscode/EV3DEV-select.PNG"} alt=""></img></div>
          <p>Zobrazí se Vám nabídka připojených zařízení. Měli byste zde vidět Váš Brick.</p>
          <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/vscode/EV3DEV-connected.PNG"} alt=""></img></div>
          <p>Po zvolení Vašeho zařízení se vám v sekci <b>EV3DEV DEVICE BROWSER</b> zobrazí Vaše zařízení spolu s signalizací. Pokud svítí zeleně, 
          úspěšně jste připojili Brick do prostředí a můžete na něm spusti programový soubor pomocí klávesy <b>F5</b></p>
          <p>Pro vypnutí programu, pokud k němu nedojde samo (vykonáním programu) slouží kombinace kláves <b>shift + F5</b> anebo červený čtverec z 
            nástrojů</p> <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/vscode/EV3DEV-control.PNG"} alt=""></img></div>
          <p>Po propojení Vašeho vývojového prostředí a jednotky Brick vznikne v systému EV3Dev reprezentace Vašeho pracovního adresáře. Přes 
            výběr <b>File Browser</b> se dostanete do jeho struktury a můžete spouštět Vaše programové soubory přímo z jednotky.
          </p>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Práce s dokumentací</h5>
          <p>Narozdíl od klasického Pythonu, jak jste si mohli všimnout, zde není našeptávač. Našeptávač je nástroj, který v Pythonu radil při psaní
            kódu, jakou proměnnou, funkci, či jiné máme k dispozici, na základě rozepsaného slova. Abychom vynahradili tento nedostatek bude potřeba si
            pomoci jinak.</p>
          <p>Naštěstí je k dispozici dokumentace, která popisuje jak jednotku Brick nainstalovat, spustit a pracovat s ní.
            K dokumentaci se dostanece přes záložku <img src={process.env.PUBLIC_URL + "/images/vscode/MicroPython-Tab.PNG"} alt=""></img> a volbu <b>Open user guide</b>.
          </p>
          <p>Po kliknutí se Vám otevřou html stránky s dokumentací. V rámci něž je dostupný technický popis veškeré funkcionality a technických aspektů
            spolu s příklady. K dispozici je rovněž šikovné vyhledávání, které Vám poslouží pro rychlé získání potřebných informací. Na zkoušku si 
            vyhledejte sekci <b>Basic Movement</b> a spusťte ukázkový program v ní obsažen.
          </p>
        </div>
      </Container>;

export const tasksMicroPythonIntro = 
[
    <Container>
      <h5>Vstupy a výstupy</h5>
      <p>Vaším úkolem je využití dostupných prostředků a vytvořit program, který provede následující:</p>
      <ol>
        <li>Vypíše na displej Bricku "Hello " + hodnotu z proměnné, v niž bude zadané jméno.</li>
        <li>Při výpisu robot rovněž daný pozdrav vysloví.</li>
        <li>Po dobu 2 vteřin se od pozdravu se rozvítí notifikační světlo na oranžovou barvu.</li>
      </ol>
      <CodeBlock code={codeHubs}/>
    </Container>,
    <Container>
     <h5>Známá melodie</h5>
     <p>Pamatujete na melodie písně Skákal pes? Máte za úkol vytvořit program, který zahraje melodii první sloky. Využijte třetinkové noty.
       Nastavte hlasitost reproduktoru na méně než 10%!</p>
       <CodeBlock code={codeMelody}/>
     <h6>Ovládání melodie</h6>
     <p>Nyní program upravte tak, aby <b>na základě vstupů z tlačítek</b> se <b>změnilo</b> přehrávání melodie. Tlačítky <b>vlevo</b> a <b>vpravo</b> se bude
       <b> zpomalovat</b> a <b>zrychlovat</b> přehrávání melodie. Tlačítka <b>nahoru</b> a <b>dolů</b> budou mít funkci <b>zvýšení</b> a <b>snížení</b> hlasitosti. 
       A nakonec <b>prostřední</b> tlačítko melodii spustí.
     </p>
     <p>Informace o tlačítkách najdete rovněž v sekci <b>hubs</b>. Zjistěte, jak musíte reprezentovat konkrétní tlačítka a jak se dozvíte, 
       zda je zmáčklé konkrétní tlačítko.</p>
     <p><i>O změněné hodnotě nastavení přehrávání melodie, byste měli s každou změnou informovat. Rovněž byste měli kontrolovat, že zvolené 
       hodnoty jsou validní.</i></p>
    </Container>,
    <Container>
      <h5>Jízda na provázku</h5>
      <p>Cílem této úlohy bude vytvořit ovládání pohybu robota. Váš robot by se měl nacházet v <b>modelu</b> Drive Base. Domluvte se se spolusedícím 
        na vzájemné <b>výpujčce</b> kontaktních senzorů. Váš program bude počítat s využitím <b>dvou kontaktních senzorů</b> a bude fungovat následovně:
      </p>
      <ul>
        <li>Pokud jsou zmáčknuty oba senzory, oba zapojené motory jedou dopředu</li>
        <li>Pokud je zmáčknutý senzor umístěný vlevo (relativně vůči druhému senzoru), pohybuje se vpřed levý motor</li>
        <li>Pokud je zmáčnut pravý senzor, pohybuje se vpřed pravý motor</li>
        <li>Rychlost je na vlastním uvážení, doporučená hodnota je cca 200°/s</li>
      </ul>
      <p>Informace potřebné k vyřešení úlohy získáte ze sekce hubs a ev3devices dokumentace. Při zapojení kontaktních senzorů a následném pohybu s robotem,
        využijte nejdelších přpojovacích kabelů
      </p>
      <h6>Bonus</h6>
      <p>K robotu byste měli mít připojen i ultra-zvukový senzor. Pokud ne, připojte jej dle návodu z manuálu, případně EV3Classroom. Doplňte funkcionalitu tak,
        aby se robot zastavil a otočil zpět, pokud se přiblíží na 20cm k překážce.
      </p>
      <p>K otočení robota využijte <b>třídu</b> DriveBase z dokumentace. K jejímu použití se můžete nechat inspirovat příkladem zmíněným v textu lekce.</p>
    </Container>  
];