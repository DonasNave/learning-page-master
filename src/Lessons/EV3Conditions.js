import { Container } from "react-bootstrap";
import Download from "../Components/Download-card";

export const lessonEV3Conditions = <Container>
<div className="theory-card std-shadow5">
  <h5 className="header-definitions std-shadow2">Podmíněné konstrukce v EV3</h5>
<p><b>Standartní situace</b>, která může v programu nastat je <b>podmíněný běh kódu</b>. To znamená, že určitá část programu <b>se vykoná pouze</b> 
  když <b>je splněná</b> nadefinovaná <b>podmínka</b>. Stejně jako tomu bylo u diagramů FlowChart</p>
<p><b>Podmíněné konstrukce</b> v prostředí EV3 jsou <b>bloky</b> nacházející se <b>v sekci kontrol</b>. V <b>hlavičce</b> bloku <b>definujeme podmínku</b>, 
  která v případě, že je splněna, zařídí další spuštění programu dle funkce podmínky.</p>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Konstrukce s přímou podmínkou</h5>
<p>Tyto konstrukce mají <b>pevnou podmínku</b> přímo v hlavičce bloku. Definujeme pouze dodatečně <b>vstupní parametr</b>.</p>
<dl>
    <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-wait.PNG"} alt="Wait block"></img></dt>
    <dd><b>Zastaví</b> provedení dalších operací ve stacku na <b>zvolené množství sekund</b>.</dd>
    <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-repeatX.PNG"} alt="Repeat x times block"></img></dt>
    <dd>Tato konstrukce, jako několik dalších, je odlišná tím, že <b>do ní lze umístit další posloupnost bloků</b>.
        Takto vložená <b>posloupnost bloků</b> se vykoná <b>tolikrát, kolik zadáme</b> v hlavičce Repeat. Poté program pokračuje dalším blokem ve stacku.</dd>
    <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-forever.PNG"} alt="Forever block"></img></dt>
    <dd>Obdobně jako reapeat, tato konstrukce <b>opakuje vloženou posloupnost bloků</b>. Opakování bude však probíhat neustále, dokud nevypneme program (nebo tento stack nebude zastaven).</dd>
</dl>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Vlastní podmínka</h5>
<p>Vlastní <b>podmínku</b> vytváříme pomocí spefických bloků, jenž poznáte dle špičatých 
  zakončení<img src={process.env.PUBLIC_URL + "/images/ev3class/block-condition.PNG"} alt="Condition block"></img> Podmínka popisuje určitou situaci např. zde: jeli proměnná <b>cislo</b> menší 
  než 100. Výstupem podmínky je hodnota <b>true</b> nebo <b>false</b> podle toho, zda je splněna nebo ne.</p>
<p><b>Skládání podmínky</b> využíváme v situaci, kdy je průběh našeho programu závislý na <b>více okolnostech</b>. Při skládání podmínek budeme 
využívat 3 <b>speciální bloky</b>, do nichž budeme <b>vkládat dílčí podmínky</b>:</p>
<ul className="left-ulist">
    <li><b>AND</b> - Výsledek této složené podmínky je pravda, pokud, obě dílčí podmínky jsou pravdivé.<br></br>(př. <b>cislo</b> je v rozsahu <b>21-99</b>)
                    <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/block-AND.PNG"} alt="AND condition block"></img></div> </li>
    <li><b>OR</b> - Pokud alespoň jedna dílčí podmínka je splněna, výsledek je pravdivý.<br></br>(př. <b>heslo</b> je číslo <b>1234</b> nebo <b>2222</b>)
                  <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/block-OR.PNG"} alt="OR condition block"></img></div> </li>
    <li><b>NOT</b> - Otočí chování vložené podmínky, pokud je splněna (pravdivá), vydá nepravdu. Pokud je podmínka nepravdivá, vydá pravdu.<br></br>(př. <b>slovo není kratší</b> než <b>6</b> písmen. Je tedy dlouhé 6 písmen nebo delší)
                  <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/block-NOT.PNG"} alt="NOT condition block"></img></div> </li>
  </ul>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Konstrukce s vlastní podmínkou</h5>
  <p>Následující podmíněné konstrukce využívají <b>vlastní podmínky</b> pro zjištění průběhu programu.</p>
  <dl>
      <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-wait-until.PNG"} alt="Wait until block"></img></dt>
      <dd>Konstrukce <b>zastaví</b> chod programu, <b>dokud není splněna</b> zadaná podmínka (true).</dd>
      <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-repeat-until.PNG"} alt="Repeat until block"></img></dt>
      <dd><b>Opakuje</b> kód <b>do splnění</b> podmínky. (Přesný opak podmínky výše)</dd>
      <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-if.PNG"} alt="If block"></img></dt>
      <dd><b>Pokud</b> je <b>splněna</b> zadaná podmínka, <b>provede</b> se vložený program.</dd>
      <dt><img src={process.env.PUBLIC_URL + "/images/ev3class/block-ifelse.PNG"} alt="If else block"></img></dt>
      <dd>Při <b>splnění</b> podmínky je <b>proveden</b> program vložený v <b>první</b> části konstrukce (hned po then).
      Pokud podmínka <b>není splněna</b> (false), provede se program <b>v druhé části</b> (za else).</dd>
  </dl>
</div>
</Container>;

export const tasksEV3Conditions = [
    <div>
    <h5>Posloupnosti</h5>
    <p>Vaším úkolem bude vypsat prvních <b>10 čísel posloupností</b>. Každý člen posloupnosti musí být vypočten pomocí <b>předpisu</b> (je zakázáno pouze 10x vypsat už výslednou hodnotu).</p>
    <p>Jednotlivé členy vypište na displej EV3 na řádky 1-10. Začněte 1. členem posloupnosti a postupujte dále.</p>
    <p>
      <ul>
        <li><b>Aritmetická</b> posloupnost - čísla 1, 2, 3, 4, ...</li>
        <li><b>Geometrická</b> posloupnost - čísla 2, 4, 8, 16, ... Každé další číslo je dvojnásobkem předchozího čísla.</li>
        <li><b>Fibonacciho</b> posloupnost - čísla 0, 1, 1, 2, 3, 5, ... Tato posloupnost začíná členy 0 a 1 a každý další člen se vypočte jako součet předchozích 2 členů.</li>
      </ul>
    </p>
    </div>,
    <div>
    <h5>Kód vypnutí bzučáku</h5>
    <p>Úkolem bude vrátit se k programu bzučáku a pomocí nových bloků upravit program. Nově při zadání vámi zvolené kombinace alespoň 3 tlačítek se "alarm" vypne.</p>
    </div>,
    <div>
    <h5>Největší společný dělitel</h5>
    <p>Sestrojte program, který provede známý úkon, a to vypočítá <b>největšího společného dělitele</b> dvou čísel. Čísla budou zadána do proměnných přímo v programu a jednotka výsledek vypíše na displej.</p>
    <p>Při počítání budete potřebovat získat zbytek po dělení dvou čísel. Ten získáte pomocí <b>bloku modulo</b> <img src={process.env.PUBLIC_URL + "/images/ev3class/block-modulo.PNG"} alt="Modulo block"></img> (př. takto využitý blok vrátí <b>2</b>, jelikož <span className="nowrap">14 : 4 = 3 zb. 2</span>)</p>
    </div>,
    <div>
      <h5>Stopky</h5>
      <p>Sestavte konstrukci <b>podle plánu</b> níže a připojte střední motor do jednotky. Vaším úkolem bude <b>vytvořit akční stopky</b>. Po 
      zmáčknutí <b>prostředního</b> tlačítka začne robot na displeji <b>počítat čas</b>. Zároveň se bude <b>pohybovat ručička</b>.</p>
      <a href={process.env.PUBLIC_URL + "/models/Stopky-model.pdf"} download><Download name={"Model stopek"} /></a>
      <p>Přidejte funkcionalitu tak, aby při dalším zmáčknutí <b>dolního</b> tlačítka se časomíra zastavila (stejně tak i ručička).</p>
      <p>Doplňte program tak, aby po zmáčknutí tlačítka <b>nahoru</b> se měření stopek <b>obnovilo</b>. Doplňte program, aby zmáčknutí prostředního tlačítka stopky <b>resetovalo</b> (zpět na 0) a ručička <b>se vrátila</b> zpět na výchozí pozici.</p>
    </div>
  ];