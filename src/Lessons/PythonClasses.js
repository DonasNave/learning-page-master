import { Container } from "react-bootstrap";
import CodeBlock from "../Components/CodeBlock";

//#region Zdrojové kódy
const codeClass1 = String.raw
`#Třídu definujeme pomocí klíčového slova 'class'
#za ním následuje název třídy
class Auto:
  znacka = "Audi"
  spz = "Z04-3231"
  
#v rámci třídy definujeme její atributy, to jsou
#proměnné, které si udržuje každá instance třídy
#a udržují tedy specifická data 
  
a = Auto() 
#Voláním názvu třídy, podobně jako funkce
#vytvoříme instanci dané Třídy. Instance je objekt, který
#udržuje konkrétní data a poskytuje funkcionalitu

#Třída je jako vzor, taková forma, podle které vyrábíme
#produkty - její instance

print(a.znacka) #atribut 'znacka' z instance 'a' Auta

b = Auto()
print(b.znacka)

#Nicméně náš současný vzor vytváří pouze auta 'Audi'
#se stejnou SPZ. Je potřeba jej trochu vylepšit`;


const codeClass2 = String.raw
`#Bylo by vhodné, aby při tvorbě instance auta
#mohla být zvolena jeho značka a spz. Toho
#docílíme následovně
class Auto:
  def __init__(self, znacka, spz):
      self.znacka = znacka
      self.spz =  spz

#Vytvoříme v rámci Auta tzv. konstruktor. To je
#speciální případ funkce, která se vztahuje ke třídě.
#Název této funkce je '__init__' a prvním argumentem
#je vždy instance třídy v podobě 'self'

a1 = Auto("Audi", "Z04-3231")
a2 = Auto("BMW", "B10-89N1")

#Vytváření instancí auta s upraveným konstruktorem.
#Můžete si všimnout, že parametr 'self' je vynechán.
#K jeho předání dojde automaticky

print(a.znacka)
print(b.znacka)

#nyní se už auta liší`;

const codeClass3 = String.raw
`#Abychom řádně využili třídy, musíme vyzkoušet
#vytvořit metodu. Metoda je speciální případ funkce.
#V následujicí ukázce využíváme tzv. instanční metody. To jsou
#metody, které můžeme volat pouze nad instancní třídy.

class Auto:

  def __init__(self, znacka, spz):
      self.znacka = znacka
      self.spz =  spz

  def inform(self): #jako v konstruktoru předáme instanci
      print("{self.znacka} | {self.spz}")
      
#Vyzkoušejte
a1 = Auto("Audi", "Z04-3231")
a2 = Auto("BMW", "B10-89N1")
nabidka = {a1, a2}

for auto in nabidka:
  auto.inform()`;

const codeClass4 = String.raw
  `class Auto:
    def __init__(self, znacka, spz):
        self.znacka = znacka
        self.spz =  spz
  
    def inform(self): #jako v konstruktoru předáme instanci
        print("{self.znacka} | {self.spz}")
        
    def get_znacka(self):
        return self.znacka
      
    def get_spz(self):
        return self.spz

    def set_znacka(self, hodnota):
        self.znacka = hodnota

    def set_spz(self, hodnota):
        self.spz = hodnota`;

//#endregion Zdrojové kódy

export const lessonPythonClasses = 
    <Container>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Třídy a instance</h5>
          <p>Třídy jsou jedním ze základních kamenů moderního programování. <b>Třída</b> jako taková je <b>určitý předpis</b> nebo také <b>šablona</b>, 
            podle které vytváříme instance. Co to přesně znamená, si ukážeme na ukázce.</p>
          <CodeBlock code={codeClass1}/>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Konstruktor</h5>
          <CodeBlock code={codeClass2}/>
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Metody</h5>
          <CodeBlock code={codeClass3}/>          
        </div>
        <div className="theory-card std-shadow5">
          <h5 className="header-definitions std-shadow2">Gettery a settery</h5>
          <p>Abychom mohli pohodlně pracovat s atributy třídy, je dobrým zvykem (téměř povinností) vytvořit tzv. <b>gettery</b> a <b>settery</b>. 
          Jedná se o speciální metody.</p>
          <p><b>Getter </b> slouží k získaní hodnoty konkrétního atributu instance. V Pythonu <b>getter</b> budeme pojmenovávat <b>get_<i>název-atributu</i></b></p>
          <p><b>Setter </b> naopak nastavuje hodnotu konkrétního atributu instance. <b>Settery</b> budeme pojmenovávat <b>set_<i>název-atributu</i></b></p>
          <CodeBlock code={codeClass4}/>          
        </div>
    </Container>;

export const tasksPythonClasses = 
[  
  <Container>
    <h5>Rozšíření auta</h5>
      <p>Rozšiřte třídu Auto, která je využita v teorii. Vaším úkolem bude do třídy přidat dva atributy: <b>spotreba</b> a <b>palivo</b>. 
        Číselná hodnota <b>spotreba</b> i <b>palivo</b> se bude volit při vytváření instance objektu.</p>
      <p>Správnost vašeho kódu ověřte tak, že do metody <b>inform</b> doplňte výpis nových atributů.</p>
    <h6>Jízda</h6>
      <p>Přidejte do třídy auto metodu s názvem <b>jizda()</b>. Ta bude přijímat argument <b>vzdalenost</b>. Metoda bude fungovat tak,
      že na základě zadané vzdálenosti spočítá spotřebu paliva. Pokud je paliva dostatek, sníží se o vypočítanou hodnotu a metoda vypíše 
      "Urazilo jsem X km a spotřebovalo Y paliva", kdy X,Y nahradíte správnými hodnotami.</p>
      <p>Pokud paliva není dost, metoda vypíše: "Nelze, ujedu nanejvýš X km", kdy X je maximální dojezd na současné palivo.</p>
  </Container>,
  <Container>
    <h5>Úsečka</h5>
      <p>Vaším úkolem bude vytvořit dvě třídy: <b>Bod</b> a <b>Usecka</b>. <b>Bod</b> bude obsahovat dva atributy <b>poz_x</b> a <b>poz_y</b> reprezentující 
      souřadnice bodu. Tyto atributy budou mít číselnou hodnotu, zvolenou při vytváření instance.</p>
      <p><b>Usecka</b> bude mít 2 atributy a to <b>bod_a</b> a <b>bod_b</b>. Hodnotou každého atributu bude instance třídy <b>Bod</b>.</p>
    <h6>Délka</h6>
      <p>Vytvořte instanční metodu pro třídu úsečka. Tado metoda bude vracet délku úsečky tvořené prvním a druhým bodem.</p>
      <p>Vzorec pro zopakování (pro body A[a1,a2], B[b1,b2]): <span className="nowrap">&#8730;[(b1-a1)&#178; + (b2-a2)&#178;]</span></p>
      <p>Pro druhou odmocninu máme v Pythonu k dispozici metodu <b>sqrt()</b> v knihovně <b>math</b>. Mocninu dosáhneme použitím speciálního operátoru, kdy zápis <span className="nowrap"><b>4**2</b></span> odpovídá 
      <span className="nowrap"><b> 4&#178;</b></span></p>
    <h6>Změna hodnot</h6>
      <p>Vytvořte setter pro třídu <b>Bod</b> pro oba atributy. Zkuste změnit již existující instanci <b>Bodu</b>, která slouží jako atribut <b>Usecky</b>.</p> 
      <p>Dojde k nějakým změnám na úsečce? Pročpak tomu tak je?</p>
  </Container>,
  <Container>
    <h5>Trojúhelník</h5>
    <p>Zkombinujte třídy z minulého úkolu a vytvořte třídu reprezentující trojúhelník. Vaším úkolem bude v této třídě vytvořit metodu <b>obvod()</b>, která
      vrátí obvod trojúhelníku. Dobře promyslete, jak bude nejvhodnější reprezentovat různé aspekty trojúhelníku.</p>
    <p>
      Následně vytvořte metodu <b>jeTrojuhelnik()</b>, která vrátí hodnotu True pokud pro trojúhelník platí pravidlo, že jeho nejdelší strana je
      kratší, než součet zbylých dvou stran.
    </p>
    </Container>,
  ];