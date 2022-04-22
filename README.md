# RoboKurz - webová aplikace

Tato single page aplikace slouží jako učební pomůcka pro zprostředkování zadání v rámci RoboKurzu, tak jak je sepsán v rámci BP pro UPOL.

## Obsah

### Menu

### Seznam lekcí

### Lekce

####

### Footer

## Použité technologie

JavaScript, React, Node.js, Docker, Bootsrap, Bootstrap-react, react-code-block, react-fa-icons

## Instalace webové aplikace
Je nutné mít nainstalován Node.js (latest). Následující postupy pro VSCode:

Otevřete workspace:

Otevřete terminál (workspace) a zadejte: npm install

### Statický web

V rámci souboru package.json nastavte:

  "homepage": "#Adresa, kde bude aplikace umístěna#"

V terminálu (workspace) zadejte: npm build

Statický web sestavený pro doménu uvedenou v homepage naleznete ve složce Build

### Docker
Musíte mít nainstalovaný docker (latest) a zapnuto spouštění linuxových kontejnerů.

#### Kontejner pro testování

V rámci souboru docker-compose.yml zadejte:

    ports:
      - #CÍLOVÝ PORT VAŠEHO PC#:3000

Defaultně - 3000:3000
(doporučeno neměnit, pokud nemáte port už obsazen)

Pro Použití dockeru musí být v rámci package.json nastavena:

  "homepage": "http://localhost:3000/"

V terminálu (workspace) zadejte: npm build

Poté spusťte Docker-compose-up.bat

Webová aplikace je k dispozici na http://localhost:3000/

!!Důležité - v rámci kontejneru nefunguje žádná certifikace a připojení na něj je nezabezpečené, z toho důvodu je po
           - Mozilla umožňuje nezapezpečené připojení
           - Google Chrome, povolení nezapezpečeného prohlížení (TBD)

#### Kontejner pro nasazení

Je nutné přesměrovat cílový port PC na 443

Následně vygenerovat certifikát, mít k dispozici webový server s revezní proxy a autorizovat připojení k image

