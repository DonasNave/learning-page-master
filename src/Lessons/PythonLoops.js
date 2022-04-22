import { Container } from "react-bootstrap";
import CodeBlock from "../Components/CodeBlock";

//#region Zdrojové kódy
const codeList1 = String.raw
`barvy = {"červená", "žlutá", "modrá"}`;

const codeList2 = String.raw
`barvy.add("zelená") #přidá zelenou
barvy.remove("žlutá") #odstraní žlutou
print(barvy) #vytiskne list

"žlutá" in barvy #vrátí True, pokud se žlutá
#vyskytuje v listu barvy`;

const codeArray1 = String.raw
`barvy = ["červená", "žlutá", "modrá"]`;

const codeArray2 = String.raw
`barvy[0] #je prvek na první pozici, tedy 'červená'
barvy[1] = "zelená" #nahraní 'žlutou' textem 'zelená'
print(barvy) #vytiskne pole

"zelená" in barvy #vrátí True, pokud se zelená
#vyskytuje v poli barvy`;

const codeFor = String.raw
`for barva in barvy: #pro každý záznam v poli, načten jako 'barva'
    print(barva) #se provede tisk

#funkce range(0, 5) vytvoří pole [0, 1, 2, 3, 4]

for x in range(0, 5): #pro každé číslo jako 'x'
    print(x) #se provede tisk`;

const codeWhile = String.raw
`zbytek = 5

while zbytek != 0: #dokud je splněna podmínka, vnořený kód se opakuje
    zbytek = zbytek - 1
    print(zbytek)`;

const codeFuncs1 = String.raw
`def pozdrav():
  print("Ahoj")
  print("Dobrý den")
  print("Jak se vede?")
  
pozdrav() #použití funkce v jiné části programu`;

const codeFuncs2 = String.raw
`def pozdrav_extra(jmeno):
  print("Ahoj: {jmeno}")
  
pozdrav_extra("Jarda") #volání funkce s textovým parametrem`;

const codeFuncs3 = String.raw
`def obvod_obdelniku(a, b):
  vysledek = 2 * (a + b)
  return vysledek #klíčové slovo return značí hodnotu, kterou funkce vrátí
  
kratsi = 5
delsi = 7
obvod = obvod_obdelniku(kratsi, delsi)
print("Obsah čtverce s délkami stran {kratsi},{delsi} je {obvod}")`;

const codePalindroms = String.raw
`texts = { 'sagaas', 'te            ne t',
'rattattatar', '11!top spot 11',
'no lemon no melon',  
'step o.n no. pets'}
`;

const codeNumbers = String.raw
`cisla = [ 156, 172, 67, 277, 156, 283, 214, 61, 113, 108, 118, 225,
    149, 136, 75, 56, 287, 22, 38, 134, 181, 15, 83, 150, 60, 156, 211,
    115, 201, 44, 195, 187, 210, 41, 187, 242, 202, 264, 108, 14, 63, 11,
    265, 184, 20, 272, 289, 228, 174, 178, 236, 270, 261, 3, 205, 243,
    40, 291, 177, 148, 147, 240, 180, 4, 143, 66, 52, 185, 96, 156, 146,
    28, 109, 30, 89, 168, 48, 258, 52, 219, 43, 31, 191, 37, 129, 147,
    182, 216, 87, 184, 198, 71, 188, 3, 49, 8, 39, 299, 41, 40 ]
`;
//#endregion Zdrojové kódy


export const lessonPythonLoops = 
    <Container>
        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Klíčová slova</h5>
            <p>V rámci Pythonu se můžeme setkat s tzv. <b>klíčovými slovy (keywords)</b>. Jedná se o slova, která jsou <b>rezervovaná</b> a <b>nemohou být použita jako
              názvy</b> proměnných, funkcí anebo tříd (o těch příště.) Kompletní seznam slov, které nepoužívat jako názvy, můžete nalézt <a href="https://www.w3schools.com/python/python_ref_keywords.asp">zde</a>.
            </p>
        </div>
        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">List</h5>
            <p>S listem jsme se setkali při uchování více hodnot v rámci programu EV3. Vytvoření pole probíhá pomocí závorek <b>&#123; &#125;</b> do kterých uložíme hodnoty oddělené čárkou.</p>
            <CodeBlock code={codeList1}/>
            <p>Pro práci s polem máme přímo na proměnné, ve které je pole uloženo, k dispozici specifické funkce. Tyto funkce jsou přístupné pomocí tzv. tečkové vazby a říkáme jim metody (o těch si řekneme blíže příště).</p>
            <CodeBlock code={codeList2}/>
        </div>
        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Pole</h5>
            <p>Pole je rovněž struktura pro uchování více hodnot. Pole jsme využívali v rámci diagramů FlowChart nebo také v minulé lekci při práci s textem. Vytvoření pole probíhá pomocí závorek <b>[ ]</b> s hodnotami oddělými čárkou.</p>
            <CodeBlock code={codeArray1}/>
            <p>Při práci s polem můžeme přistupovat ke konkrétnímu prvku na pozici.</p>
            <CodeBlock code={codeArray2}/>
        </div>
        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Cykly</h5>
            <p>Na opakování určitých jednoduchých sekcí</p>
            <p><b>For</b> - jednoduchá forma cyklu, kdy v zjednodušené formě procházíme všechny prvky pole.</p>
            <CodeBlock code={codeFor}/>
            <p><b>While</b> - vhodný pro provádění kódu s neurčitým počtem opakování.</p>
            <CodeBlock code={codeWhile}/>
        </div>
        <div className="theory-card std-shadow5">
            <h5 className="header-definitions std-shadow2">Funkce</h5>
            <p>Funkce jsme vužívali, pokud byla potřeba si nachystat určitou <b>funkcionalitu</b>, tak abychom ji mohli použít <b>vícekrát</b>. 
            Zároveň byly nutností, pokud jsme chování dané funkcionality chtěli <b>ovlivnit parametry</b>. Jedná se o <b>definovanou</b> část 
            programu, která má svůj <b>název, parametry a kód</b>, který pro vyhodnocení provede.</p>
            <CodeBlock code={codeFuncs1}/>
            <p>Funkce mohou mít rovněž argumenty, tj. vstupní hodnoty s kterými dále pracuje.</p>
            <CodeBlock code={codeFuncs2}/>
            <p>V neposlední řadě, funkce mohou mít výstup, tedy hodnotu, na kterou se vyhodnotí po zavolání.</p>
            <CodeBlock code={codeFuncs3}/>
            <p>Motivace pro využití funkcí je tedy jejich <b>znovupoužitelnost</b>, usnadňují ale také <b>orientaci v kódu</b> a umožňují <b>psát</b> program <b>přehledněji</b>.</p>
        </div>
    </Container>;

export const tasksPythonLoops = 
[
  
    <Container>
      <h5>Výpis čísel</h5>
      <p>Vaším úkolem bude z následujícího listu čísel</p>
      <CodeBlock code={codeNumbers}/>
      <p>vypsat:</p>
      <ol>
        <li>Počet prvků v listu.</li>
        <li>Největší a nejmenší číslo.</li>
        <li>Všechna lichá čísla.</li>
        <li>Průměrnou hodnotu všech čísel.</li>
      </ol>
    </Container>,
    <Container>
      <h5>Šachovnice</h5>
      <p>Vašim úkolem je vytvořit program, který vypíše <b>všechny možné pozice</b> na <b>šachovnici</b>. Políčka šachovnice jsou vodorovně označeny A..H a vertikálně 1..8, tedy validní pozice jsou A1..H8.</p>
      <div className="dw-card"><img src={process.env.PUBLIC_URL + "/images/help/chess-coordinates.svg"} alt=""></img></div>
      <p>Výpis v konzoli musí odpovídat struktuře šachovnice, tedy pozice se stejným číslem na jednom řádku a nejnižší řádek s číslem 1.</p>
    </Container>,
    <Container>
      <h5>Palindrom</h5>
      <p>Palindrom je slovo, číslo nebo také věta, která se <b>čte stejně "zepředu" i "zezadu"</b> (např. 'ratar', "kobyla ma maly bok"). Vašim úkolem je sestrojit program, který rozpozná, zda-li zadané slovo je palindrom.</p>
      <p>V textu budou ignorovány znaky jako jsou mezery, čárky, tečky a vykřičníky.</p>
      <p>Program vyzkoušejte pro následující <b>List</b> textů a pro každý text vypište, zda se jedná palindrom nebo ne.</p>
      <CodeBlock code={codePalindroms}/>
    </Container>,
    <Container>
      <h5>Největší společný dělitel</h5>
      <p>Vytvořte funkci, která vyřeší známý úkol a to vypočítá největšího společného dělitele dvou čísel. Čísla budou zadána uživatelem v rámci konzole. Po zadání dvou čísel se vypíše výsledek programu.</p>
    </Container>
  ];