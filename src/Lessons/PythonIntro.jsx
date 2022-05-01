import { Container } from "react-bootstrap";
import CodeBlock from "../Components/Code-Block";

//#region Kódy
const codeHelloWorld = String.raw
`import sys
print('\n ahoj světe \n')`;

const codeIO = String.raw
`import sys

print("Něco napište:") #vypíše hodnotu v závorkách na terminál

textVstupu = input() #načte text a jako výsledek vrátí jeho hodnotu

print("Napsali jste: {textVstupu}") #způsob vložení proměnné do textu`;

const codeIfElse =  String.raw
`if delka == 1:
    print("jedna")
else:
    print("delsi nez jedna")`;

const codeElIf = String.raw
`if delka == 1:
    print("jedna")
elif delka == 2:
    print("dva")
else:
    print("delsi nez dva")`;

const codeCombCondition = String.raw
`if (delka >= 3) and (delka <= 6): #závorkami oddělíme dílčí podmínky
    print("3-6")

if (delka == 1) or (delka == 2):
    print("jedna nebo dva")

if not (delka == 0):
    print("nenulová délka")`;

const codeStrings = String.raw
`#textem je cokoliv, co vepíšeme do konzole
text = input()

#pokud chceme zapsat text přímo
veta = "Ahoj, nejsem doma."

slovo = "jablko" #skládá se ze 6 znaků

print(slovo[0]) #vypíše 'j'
print(slovo[5]) #vypíše 'p'
#znaky jablka jsou uloženy v rozsahu 0-5

#zkuste, co vypíší následující
print(slovo[0:5]) 
print(slovo[2:])
print(slovo[:-1])`;

const codeStrFind = String.raw
`text = "horolezec"

#vypíše první pozici řetězce 'l'
print(text.find("l")) #výsledek 4
#pokud je více stejných řetězců, vypíše první
print(text.find("o")) #výsledek 1

#vyzkoušejte
print(text.find("zec"))
slabika = "le"
print(text.find(slabika))
print(text.find(text))
print(text.find("x"))
`;

const codeStringConc = String.raw
`#vyzkoušejte
text = "soutěžící"
cislo = 2

prvni_vypis = f"{text} č. {cislo}"
druhy_vypis = text + " č. " + cislo
print(prvni_vypis);
print(druhy_vypis);`;

//#endregion Kódy



export const lessonPythonIntro = 
    <Container>        
        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Co je Python</h5>
            <p><b>Python</b> je <b>moderní programovací jazyk</b>. Vyznačuje se <b>čitelným zápisem</b> s jednoduchou syntaxí 
            (pozn. syntaxe je soubor pravidel, podle kterých program zapisujeme). V dnešní době má velice <b>významné zastoupení</b>, jak při výuce, 
            v akademickém prostoru, tak i v komerčním prostoru. Oproti jazyku EV3 je Python tzv. <b>kódový programovací jazyk</b>.</p>
            <p>Informace obsažené na této stránce jsou pouze strohým základem. Pro zájemce je <b>doporučeno</b> se podívat přímo 
            na <a href="https://docs.python.org/" target="_blank" rel="noreferrer"><b>oficiální stránky Python</b></a>. Obsahují <b>technickou dokumentaci</b> s
             popisem veškeré funkcionality, která se v Pythonu nachází.</p>          
            </div>
            <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Rozdíly vizuální a kódový programovací jazyk</h5>
            <p>Jelikož přecházíme z programovacího jazyka vizuálního na kódový, budeme si muset zvyknout na nový zápis programu.</p>
            <div className='dw-card'><img src={process.env.PUBLIC_URL + "/images/vscode/Comparison.PNG"} alt="" width={580}></img></div>
            <p>Na obrázku vidíme krátký (nepříliš smysluplný) program zapsaný v Python a EV3. Všimněte si, jak <b>jednoduše</b> v Pythonu <b>definujeme proměnou</b> a
             jakým stylem používáme funkce.<br></br>
             <b>len(</b>pozdrav<b>)</b> je funkce, která vydá za výsledek <b>délku proměnné pozdrav</b>, tedy <b>počet písmen</b> ve slově pozdrav.</p>
            </div>
            <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Kde a jak budeme programovat</h5>
            <p>K programování využijeme prostředí <b>Visual Studio Code</b> (zkratka VSCode). Jedná se o vývojové prostředí, určené pro práci v 
                různorodých programovacích jazycích.</p>
            <p></p>
        </div>

        <div className="theory-card std-shadow5">
            <h5 className="header-examples std-shadow2">První program</h5>
            <p>Za účelem programování si budeme muset vytvořit a pojmenovat složku (repozitář). V rámci této složky vytvoříme <b>spustitelný programový
                soubor</b> s příponou <b>'.py'</b></p>
            <p><img src={process.env.PUBLIC_URL + "/images/vscode/Infographic.PNG"} alt="" width={380}></img></p>
            <p>Spouštění programu probíhá pomocí klávesy <b>F5</b>. Při prvním spuštění musíme vybrat, v jakém prostředí a který soubor chceme spustit. Vyberte prostředí Python</p>
            <p><img src={process.env.PUBLIC_URL + "/images/vscode/Program-mode.PNG"} alt="" width={270}></img></p>
            <p> a spuštění Python souboru.</p>
            <p><img src={process.env.PUBLIC_URL + "/images/vscode/Program-file.PNG"} alt="" width={340}></img></p>
            <p>Aby program po spuštění něco vykonal, skopírujte do něj následující 2 řádky kódu.</p>
            <CodeBlock code={codeHelloWorld}/>
            <p>Výsledek programu se nám vypíše do terminálu ve spodní části editoru VSCode.</p>
            <p><i>V případě, že vytváříte nový program, zároveň vytvořte (alespoň prozatím) nový <b>.py</b> soubor pro Váš program.</i></p>
            </div>
            
            <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Proměnné a základní operátory:</h5>
            <p>Použití proměnné jste mohli spatřit už v ukázce srovnání programů. Proměnnou vytvoříme jednoduše zvolením názvu a přiřazením hodnoty.</p>
            <p>Termín operátor si můžeme pamatovat z lekce 1. V rámci Pythonu najdeme využití pro stejné operátory, jako tomu bylo v diagramech 
                FlowChart. Pro připomenutí:</p>
            <p>
                <ul style={{textAlign:"left", marginLeft:10}}>
                <li><b>= přiřazení</b> - slouží k nastavení hodnoty do nějaké proměnné</li>
                <li><b>+ - * / % matematické</b> - známé matematické operátory</li>
                <li><b>== != {"< <= > =>"} rovnosti</b> - slouží k porovnávání hodnot 2 výrazů</li>
                </ul>
            </p>
            <p><b>Poznámka: Výrazem</b> rozumíme určitou část kódu programu, která se vyhodnotí do jedné hodnoty. Například <b><i>(cislo + 10) / 2</i></b> je
                výraz, který po vyhodnocení vrátí jednu hodnotu.</p>
        </div>        

        <div className="theory-card std-shadow5">
            <h5 className="header-examples std-shadow2">Výstup a Vstup</h5>
            <p>Abychom mohli s programem <b>komunikovat</b>, potřebujeme mít způsob, jakým <b>informace dostat do programu</b> a následně <b>z programu ven</b>. V prvním 
                programu jsme vyzkoušeli pracovat s tzv. <b>konzolí</b> (nebo také <b>terminál</b>). Ten nám bude na dalších několik lekcí. Poskytuje jednoduchý a užitečný
                <b>textový vstup/výstup</b> programu. Mezi základní funkce patří.</p>
            <CodeBlock code={codeIO}/>
            <p><i>V kódu si můžete všimnout popisků začínající symbolem <b>#</b>. Jedná se o tzv. <b>komentáře</b>. Symbol <b>#</b> zapříčiní, že znaky napsané na řádku za tímto symbolem budou v průběhu programu ignorovány.</i></p>
        </div>

        <div className="theory-card std-shadow5">
            <h5 className="header-examples std-shadow2">Podmínky</h5>
            <p>Jednoduchou podmíněnou konstrukcí <b>if</b> jste mohli vidět použitou v ukázce. Nyní si ukážeme použití složitějších konstrukcí. 
                Nejdříve známá <b>if-else</b>:</p>
                <CodeBlock code={codeIfElse}/>
            <p><i>Všimněte si odsazení, které provází podmíněný kód. Odsazení je nutná součást kódu, aby byl odlišen kód, který je ještě součástí <b>if-else</b> a ten který už do konstrukce podmínky nepatří. Odsazení vytvoříte pomocí klávesy <b>Tab</b> (tabulátor).</i></p>
            <p>Klíčové slovo <b>elif</b> představuje situaci další specifický případ (podmínku), která se vyhodnotí. Konstrukce <b>elif </b> 
                je v ukázce použita pouze jednou, může se ale vyskytovat v libovolném počtu. Lehce bychom tedy vytvořili porovnání pro situaci, kdy délka je 3.</p>
                <CodeBlock code={codeElIf}/>
            <p>Podmínky takto složené pomocí <b>if</b> a <b>elif</b> jsou vzájemně vyloučené, pokud jedna platí, nebudou se vyhodnocovat další.
            Tedy pokud by délka byla 1, podmínka na délku 2 by se nezkoušela vyhodnotit.</p>
        </div>

        <div className="theory-card std-shadow5">
            <h5 className="header-examples std-shadow2">Složené podmínky</h5>
            <p>Pro skládání dílčích podmínek použijeme stejných prostředků jako v EV3.</p>
            <CodeBlock code={codeCombCondition}/>           
        </div>

        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Knihovny</h5>
            <p>Základem každého programovacího jazyka je <b>poskytnout funkcionalitu</b>, která nám umožní vytvářet náš program. V Pythonu je určitá základní 
                funkcionalita dostupná, hned po vytvoření programového souboru. Pokud se náš program zaměřuje <b>specificky</b> na určitý obor, např. budeme
                pracovat s textem, různě jej zpracovávat, budeme <b>potřebovat specifickou funkcionalitu</b>.</p>
            <p> Jednotkou nástrojů, které poskytují specifickou funkcionalitu, je <b>knihovna</b>. Tu jsme již mohli vidět použitou. Jednalo
                se o využití knihovny <b>sys</b> v ukázkovém příkladu. Tím, že knihovnu použijeme, program se o ni rozšíří. To s sebou přináší chtěnou funkcionalitu,
                pokud opravdu chceme knihovnu využít. Pokud je nám ale k ničemu, je vhodné ji vůbec nepoužít. Proto není v programovém souboru hned nachystána
                veškerá funkcionalita (všechny knihovny), ale je na programátorovi použít jen ty knihovny, které jsou opravdu
                pro program potřeba. A tím ušetřit velikost výsledného programu.</p>
            <p></p>
        </div>
    </Container>;

export const tasksPythonIntro = [
    <div>
        <h5>Funkce signum</h5>
        <p>Vaším úkolem bude vytvořit program, který bude bude vykonávat roli funkce signum. Program vypíše hlášku <span className="nowrap">"Zadejte číslo"</span>, načte
            vstup, který uživatel zadá a poté:</p>
        <ul>
            <li>Pokud je číslo menší než nula, vypíše se hodnota -1</li>
            <li>Pokud je číslo nula, vypíše se nula</li>
            <li>Pokud je číslo větší než nula, vypíše se hodnota 1</li>
        </ul>
        <p><i>Jelikož vstup z konzole je ve výchozím stavu brán jako text, musíte z něj udělat číslo. To lze pro proměnnou <b>vstup</b> docílit jako <b>int(vstup)</b></i></p>
    </div>,    
    <div>
        <h5>Skládání textu</h5>
        <p>Pro situace, kdy chceme složit text z více hodnot, jako například jiné texty anebo čísla využijeme jednu ze dvou možností:</p>
        <CodeBlock code={codeStringConc}/>
        <p>Vytvořte program, který si vyžádá do konzole zadat <b>jméno</b> a poté na základě vstupního jména provede personalizovaný pozdrav.</p>
    </div>,
    <div>
        <h5>Cvičení s textem</h5>
        <p>Text nebo také anglicky <b>String</b> je řetězec znaků. Můžeme jej získat mnoha způsoby:</p>        
        <CodeBlock code={codeStrings}/>
        <p>Pokud chceme v rámci textu hledat konkrétní řetězec:</p>
        <CodeBlock code={codeStrFind}/>
    </div>,
    <div>
        <h5>Odstranění přípony</h5>
        <p>Vaším úkolem bude odstranění přípony souboru. Do konzole bude vepsán název souboru.
            Ten bude tvořen písmeny a číslicemi + příponou. Přípona může být např.: <b>.exe, .jpeg, .7z</b>
        </p>
        <p>Výstupem Vašeho programu by měl být název souboru bez přípony. Pokud přípona v názvu souboru nebyla,
            vypište hlášku "není soubor".
        </p>
        <p>Pro získání délky zadaného textu, například proměnná <b>text</b> můžete využít funkce <b>len(text)</b>.
        Výsledkem této funkce je počet znaků v textu.</p>
        <h6>Bonus</h6>
        <p>Zamyslete se, jak byste zjistili, že v názvu se vyskytuje více než jedna tečka, čistě s pomocí funkce <b>find</b>. Své řešení otestujte.</p>
    </div>
  ];