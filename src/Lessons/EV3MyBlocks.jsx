import { Container } from "react-bootstrap";

export const lessonEV3MyBlocks = <Container>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">Tvorba <b>vlastních bloků</b></h5>
  <p>Vlastní bloky představují elegantní možnost, jak vytvořit část programu, která je <b>pojmenovaná</b>, lze ji <b>znovu použít</b>. Tato definice ve své podstatě 
    odpovídá <b>funkcím</b>, které jsme využívali v diagramech FlowChart. Vlastní blok vytvoříte v záložce <b>My blocks</b> pomocí tlačítka <b>Make a block</b>.</p>
    <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/make-a-block.PNG"} alt="Custom block creation" width={500}></img></div>
  <p>V rámci vytváření bloku musíte zvolit <b>pojmenování</b> nového bloku. Dále si můžete vybrat, zdali budete bloku <b>předávát nějakou hodnotu nebo podmínku</b>.</p>
  <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/block-custom-def.PNG"} alt="Custom block definition"></img></div>
  <p>V ukázce se nachází definovaný blok <b>Otocit</b>. Blok přijímá jednu hodnotu, pojmenovanou <b>Stupne</b> 
  (Takto přijímaná hodnota se nazývá parametr). V rámci speciální stacku <b>define Otocit(Stupne)</b> vkládáme program, který se provede v jiné části programu, po použití bloku <b>Otocit</b>. </p>
</div>
<div className="theory-card std-shadow5">
  <h5 className="header-examples std-shadow2">List</h5>
  <p>Pro <b>uložení více hodnot</b> je v EV3 Classroom k dispozici tzv. <b>list</b>. Vytváří se v rámci záložky <b>Variables</b>, pomocí tlačítka <b>Make a List</b>.</p>
  <p><b>S listem pracujeme následovně:</b></p>
  <ul className="basic-listing">
    <li>Pojmenovaná hodnota představuje celý list, př. <img src={process.env.PUBLIC_URL + "/images/ev3class/list-val.PNG"} alt="Var of list"></img>Oproti proměnné se liší tmavějším, oranžovým zbarvením.</li>
    <li>Délku <b>listu</b> získáte pomocí bloku <img src={process.env.PUBLIC_URL + "/images/ev3class/list-length.PNG"} alt="Length of list"></img></li>
    <li><img src={process.env.PUBLIC_URL + "/images/ev3class/list-add.png"} alt="Adding to list"></img> vloží text jablko a hruška do listu ovoce</li>
    <li>Pro získání hodnoty z listu na určité pozici (číselné pořadí) <img src={process.env.PUBLIC_URL + "/images/ev3class/list-item.PNG"} alt="Item of list"></img></li>
    <li>Přepsání hodnoty v listu <img src={process.env.PUBLIC_URL + "/images/ev3class/list-replace.PNG"} alt="Replacing value in list"></img></li>
  </ul>
</div>
</Container>;

export const tasksEV3MyBlocks = [
    <div>
      <h5>Vylepšení klavíru</h5>
      <p>Vraťte se k programu z úlohy <b>klavír</b>. Vaším úkolem bude s pomocí <b>vlastních bloků</b> a <b>listu</b> Váš původní program vylepšit. 
      Výsledný program, by měl <b>volat</b> pro <b>zahrání</b> (první části) melodie Skákal pes <b>Vámi definovaný blok</b>.</p>
    </div>,
     <div>
     <h5>Stavba robota</h5>
     <p>Nastal čas postavit konkrétní podobu robota a otestovat jeho plný potenciál. Stavět budete model <b>Driving Base</b>. Návod k jeho sestavení se nachází <b>v EV3 Classroom</b> v záložce <b>build</b>.</p>
     <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/ev3class/driving-base.PNG"} alt="Drive base"></img></div>
     <p>Po sestavení robota jej zkuste rozpohybovat pomocí bloků, ze sekce <b>movement</b>. Vaším úkolem bude <b>otočit</b> robota na 
     místě <b>o 180°</b>. A to tak, aby se robot při otočení <b>nepohnul z původního místa</b>.</p>
     </div>,
     <div>
      <h5>Pohyb v obrazci</h5>
      <p>Vaším úkolem je vytvořit <b>vlastní bloky</b>, které budou reprezentovat <b>jednotlivé pohyby</b>, jenž robot vykoná. Každý pohyb bude 
      mít <b>tvar obrazce</b> a <b>skončí ve výchozí pozici</b>. Bloky:</p>
      <ul>
        <li><b>Kruh</b> - robot po jeho zavolání pohybem obkrouží prostor.</li>
        <li><b>Čtverec (argument stupně)</b> - po zavolání robot vykoná pohyb kopírující čtverec. Délka jeho hrany bude určena parametrem stupně.</li>
        <li><b>Obdélník (2x argument stupně)</b> - robot svým pohybem bude kopírovat obdélník s délkami stran zadanými jako stupně.</li>        
      </ul>
    </div>  
  ];