<!-- title: Dokumentac RoboKurz -->

<div id="top"></div>

# Dokumentace webové aplikace RoboKurz

# Obsah

* <a href="#development">Vývoj</a>
* <a href="#nodei">Node.js instalace</a>
* <a href="#components">Podrobnosti</a>
* <a href="#libs">Použité knihovny</a>


# Webová aplikace RoboKurz
Jedná se o single page webovou aplikaci s podpůrnými materiály pro výukový plán. Funkcionalita webové aplikace substituuje elektronický dokument.

Použité technologie:

* [HTML](https://www.w3.org/html/)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Docker](https://www.docker.com/)



# <a name="development"></a>Vývoj
Za účelem vývoje webové aplikace stáhněte tento repozitář. Buďto přes UI GitHubu nebo CLI příkazem:

```sh
   git clone https://github.com/DonasNave/learning-page-master.git
```

Je nutné mít nainstalován [Node.js](https://nodejs.org/en/), k dispozici je například tento [návod](https://www.guru99.com/download-install-node-js.html)

V neposlední řadě otevřte terminál v rámci úložiště aplikace a spusťte příkaz

```sh
   npm install
```

který doinstaluje potřebné balíčky.

# Instalace webové aplikace
V násleudjící části jsou zmíněny postupy instalace a nasazení webu.

## <a name="nodei"></a>Instalace pomocí Node.js

1. Otevřte zdrojový adresář aplikace, buďto stažením z GitHub nebo příkazem:
   ```sh
   git clone https://github.com/DonasNave/learning-page-master.git
   ```
2. Nainstalujte potřebné balíčky spuštěním příkazu na terminálu v rámci prostoru adresáře:
   ```sh
   npm install
   ```
3. V rámci souboru `package.json` zvolte za objekt `homepage` vybranou hodnotu, kterou představuje cesta k adresáři s webovou aplikací na Vašem serveru
   ```json
   homepage: '#Vaše_cesta#';
   ```
4. V terminálu repositáře aplikace spustťe následující příkaz
   ```sh
   npm run build
   ```
5. Webová aplikace sestavena na patřičnou adresu se nachází v rámci složky <b>/build</b> aplikačního repositáře

<p align="right">(<a href="#top">Nahoru</a>)</p>

# Podrobnosti

Webová aplikace se skládá ze dvou zobrazovacích režimů, výpis lekcí a detail lekce. Výužívá znovupoužitelných komponent, které jsou tvořeny jako konstanty a funkce, doplněny o hooks, kdy je to potřebné.

## <a name="components"></a>Výpis komponent

* Code-block - Umožňuje stručnější použití komponenty CodeBlock z knihovny react-code-blocks s konkrétním nastavením. Vytvoří objekt se zapsaným strukturovaným zdrojovém kódem a tlačítkem pro zkropírování.
* Lesson - Vytváří strukturovaný zápis lekce a rozmístění dat na základě vstupních atributů. Vykreslí nadpis s označením, tzv. Accordeon s jednotlivými úkoly a zobrazí teorii lekce.
* Menu - Navigační lišta aplikace. Obsahuje logo a tlačítko pro zobrazení seznamu lekcí.
* Footer - Jednoduchá statická komponenta pro zobrazení patičky webu.
* Title-card - Reprezentuje kartu lekce v rámci přehledového výpisu. Na základě vstupu zobrazí příslušný obrázek, nadpis a tlačítko s přesměrováním na konkrétní lekci.
* Download-card - Prostá komponenta pro stručnější reprezentaci ikony stažení s popisem.
* Card-holder - Vykresluje tělo aplikace. Zpracovává stránkovací logiku. Na
základě vnitřních hodnot zobrazí buďto seznam lekcí nebo obsah konkrétní
lekce.

<p align="right">(<a href="#top">Nahoru</a>)</p>

## <a name="libs"></a>Použité knihovny NPM (z package)

* @fortawesome/fontawesome-svg-core
* @fortawesome/free-regular-svg-icons
* @fortawesome/free-solid-svg-icons
* @fortawesome/react-fontawesome
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/user-event
* bootstrap
* react
* react-bootstrap
* react-code-blocks
* react-dom
* react-scripts
* web-vitals
  
<p align="right">(<a href="#top">Nahoru</a>)</p>