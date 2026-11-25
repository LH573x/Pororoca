import type { ThemeDef } from '../../types';

export const marcas: ThemeDef = {
  id: 'marcas',
  name: 'Marcas e empresas',
  questions: [
    {
      // fabricantes de automóveis (atuais e extintos), do Brasil e do mundo
      id: 'montadora',
      t: 'Uma marca de carro',
      a: `
1: Volkswagen|VW; Fiat; Chevrolet|GM|General Motors
2: Ford; Toyota; Honda; Hyundai; Renault
3: Ferrari; BMW; Mercedes-Benz|Mercedes; Nissan; Jeep; Peugeot; Citroën|Citroen; Audi; Porsche; Lamborghini
4: Kia; Mitsubishi; BYD; Volvo; Land Rover; Tesla; Chery|Caoa Chery; Suzuki; Subaru; Mazda; Dodge; Gurgel; Troller; RAM; Mini; Jaguar; Lexus; Maserati; Bugatti; Rolls-Royce; Bentley
5: Alfa Romeo; Aston Martin; McLaren; Cadillac; Chrysler; GWM|Great Wall; JAC|JAC Motors; Lifan; Effa; Ssangyong; Smart; Lada; Dacia; Seat; Skoda|Škoda; Opel; Infiniti; Acura; Lincoln; Buick; Pontiac; Hummer; DKW|DKW-Vemag|Vemag; Willys|Willys Overland; Simca; Puma; Miura; Agrale; Pagani; Koenigsegg; Lotus; Mahindra; Tata; Geely; GAC; Omoda|Omoda Jaecoo; Jaecoo; Zeekr; Haval
6: Saab; Daewoo; Rover; MG; Triumph; Austin; Morris; Plymouth; Oldsmobile; Mercury; Saturn; Studebaker; Packard; Hudson; Nash; AMC|American Motors; DeLorean; Lancia; Abarth; Cupra; DS|DS Automobiles; Polestar; Rivian; Lucid; Genesis; Datsun; Daihatsu; Isuzu; Proton; Perodua; Holden; Trabant; Wartburg; Moskvitch; Zastava|Yugo; Tatra; Hongqi; NIO; Xpeng; Li Auto; Leapmotor; Neta; Denza; Changan; Dongfeng; FAW; JMC; Foton; Jetour; Exeed; Baic; Hafei; Chana; Jinbei; Haima; Brilliance; Lynk & Co|Lynk and Co
7: Santa Matilde; Lafer; Adamo; Envemo; Farus; Bianco; Hofstetter; Brasinca; Amoritz Gt; Romi|Romi-Isetta; Fabral; Engesa; Uirapuru; Dardo; Edra; Obvio; Aurora; Spyker; Hispano-Suiza; Duesenberg; Cord; Auburn; Tucker; Bristol; Morgan; TVR; Caterham; Noble; Ariel; Alpine; Venturi; Facel Vega; Panhard; Talbot; Delage; Delahaye; Borgward; NSU; Horch; Wanderer; Maybach; Iso; De Tomaso; Innocenti; Autobianchi; Bizzarrini; Pininfarina; Rimac; Hennessey; SSC; Saleen; Vector; Scion; Eagle; Fisker; Gumpert; Wiesmann; Artega; Donkervoort; Microcar; Aixam; Reva; Maruti; Hindustan; Premier; Samsung Motors; Asia Motors
`,
    },
    {
      // companhias aéreas brasileiras de passageiros ou carga, atuais e extintas (lista da Wikipédia + as que voam hoje)
      id: 'aerea',
      t: 'Uma companhia aérea brasileira',
      r: 'atual ou que já existiu',
      a: `
1: Gol|Gol Linhas Aéreas; Azul|Azul Linhas Aéreas
2: LATAM|Latam Brasil|TAM|TAM Linhas Aéreas; Varig
3: Vasp; Transbrasil; Avianca Brasil|Avianca
4: Webjet; Passaredo|Voepass|Voepass Linhas Aéreas; Itapemirim|ITA|ITA Transportes Aéreos|Itapemirim Transportes Aéreos; Trip|Trip Linhas Aéreas; Panair|Panair do Brasil; Cruzeiro do Sul|Serviços Aéreos Cruzeiro do Sul
5: BRA|BRA Transportes Aéreos; Pantanal|Pantanal Linhas Aéreas; Rio Sul|Rio-Sul; Nordeste Linhas Aéreas|Nordeste; TABA; OceanAir|Ocean Air; Varig Log|VarigLog; MAP|MAP Linhas Aéreas; Total|Total Linhas Aéreas; Azul Conecta|Two Flex; Real|Real Aerovias|Real Transportes Aéreos; Sadia|Sadia Transportes Aéreos; Lóide Aéreo Nacional|Lóide Aéreo|Lloyd Aéreo
6: Puma Air; Sete|SETE Linhas Aéreas; Rico|Rico Linhas Aéreas; Abaeté|Abaeté Linhas Aéreas; Meta|Meta Linhas Aéreas; Team|TEAM Linhas Aéreas; Flyways|Flyways Linhas Aéreas; Air Minas|Air Minas Linhas Aéreas; Brava|Brava Linhas Aéreas; Mais|Mais Linhas Aéreas; Sterna|Sterna Linhas Aéreas; NHT|NHT Linhas Aéreas; Sideral|Sideral Linhas Aéreas; Syndicato Condor|Condor Syndikat|Serviços Aéreos Condor; Aerovias Brasil; Paraense|Paraense Transportes Aéreos; Interbrasil Star|Interbrasil; Fly|Fly Linhas Aéreas; Nacional|Nacional Transportes Aéreos; NAB|Navegação Aérea Brasileira; Vaspex; Helisul|Helisul Linhas Aéreas; TAF|TAF Linhas Aéreas; Tavaj|Tavaj Linhas Aéreas
7: Aero Amazonas|Aero Amazonas Linhas Aéreas; Aerobrasil Cargo|Aerobrasil; Aero Geral; Aerolloyd Iguassu; Aeronorte; Aerovias Minas Gerais; Air Brasil|Air Brasil Linhas Aéreas; Air Vias; ATA Brasil; Atlântico Linhas Aéreas|Atlântico; Beta Cargo|BETA; Brasmex|Brasil Minas Express; Central Aérea; Colt Cargo|Colt; Companhia Itaú de Transportes Aéreos; Companhia Meridional de Transportes|Meridional; Connect Cargo; Cruiser|Cruiser Linhas Aéreas; Digex Cargo|Digex; Empresa de Transporte Aéreo|ETA; Flex|Flex Linhas Aéreas; Fly Brasil; Interexpress; LAB|Linhas Aéreas Brasileiras; Linha Aérea Transcontinental Brasileira|LATB; Linhas Aéreas Natal; LAP|Linhas Aéreas Paulistas; Linhas Aéreas Wright|Wright; Litorânea; Master Top Airlines|Master Top; Noar|Noar Linhas Aéreas; NYRBA|NYRBA do Brasil; OMTA|Organização Mineira de Transportes Aéreos; Penta|Penta Transportes Aéreos; Phoenix Brasil; Presidente Transportes Aéreos|Presidente; Promodal; Rio Linhas Aéreas; Sava Cargo|SAVA; SAVAG; Skyjet|Skyjet Brazil; Skymaster|Skymaster Airlines; Sol Linhas Aéreas|Sol; Transportes Aéreos Bandeirantes|Bandeirantes; TAC|Transportes Aéreos Catarinense; TAS|Transportes Aéreos Salvador; Transportes Aéreos Nacional; Transportes Aéreos Sul-Americanos; Transportes Charter do Brasil; Unex Airlines|Unex; Universal Transportes Aéreos|Universal; VASD; Via Brasil|Via Brasil Linhas Aéreas; Viabras; Voe Minas Gerais; Whitejets; Modern Logistics|Modern; Absa Cargo|ABSA; Amaszonas Brasil
`,
    },
  ],
};

export const carros: ThemeDef = {
  id: 'carros',
  name: 'Carros',
  questions: [
    {
      id: 'carro',
      t: 'Um modelo de carro vendido no Brasil',
      a: `
1: Fusca; Gol; Uno|Fiat Uno
2: Corsa; Celta; Palio; Onix|Ônix; HB20; Kombi; Civic; Corolla
3: Chevette; Opala; Brasília; Passat; Monza; Kadett; Fiesta; Ka|Ford Ka; Sandero; Strada; Saveiro; Hilux; Golf; Polo; Fox; Mobi; Argo; Kwid; Tracker; Creta; Compass; Renegade; Toro; S10
5: Fiat 147|147; Escort; Santana; Parati; Voyage; Del Rey; Vectra; Astra; Omega; Tempra; Tipo; Siena; Prisma; Cobalt; Spin; Logan; Duster; EcoSport; Ranger; Amarok; Corcel; Belina; Caravan; Marea; Brava; Stilo; Punto; Idea; Doblò|Doblo; Fiorino; Clio; Mégane|Megane; Peugeot 206|206; Peugeot 208|208; C3|Citroën C3; Picanto; Sportage; Tucson; T-Cross; Nivus; Virtus; Jetta; City; Fit; HR-V; WR-V; Yaris; Etios; Pulse; Fastback; Kicks; March; Versa; Frontier; L200; Pajero; Outlander
7: Maverick; Galaxie; Landau; Aero Willys; Rural|Rural Willys; Jeep Willys; DKW Vemag|DKW; Gordini; Simca Chambord|Simca; Variant; TL|VW TL; SP2; Puma; Gurgel; Miura; Santa Matilde; Dodge Dart|Dart; Charger|Dodge Charger; Polara|Dodge Polara; Veraneio; Chevy 500; Marajó; Elba; Prêmio; Oggi; Pampa; Verona; Logus; Pointer; Apollo; Versailles; Royale; Quantum; Classic; Meriva; Zafira; Agile; Montana; Blazer; Captiva; Equinox; Trailblazer; Cruze; Sonic; Camaro; Fusion; Focus; Edge; Territory; Bronco; Mustang; Uno Mille|Mille; Grand Siena; Palio Weekend|Weekend; Palio Adventure|Adventure
9: Romi-Isetta|Romi Isetta|Isetta; Gurgel BR-800|BR-800; Gurgel Supermini; Lafer; Adamo; Envemo; Farus; Bianco; Hofstetter; Brasinca; Interlagos|Willys Interlagos; Itamaraty|Willys Itamaraty; Fissore|DKW Fissore; Belcar; Vemaguet; Candango; Karmann-Ghia|Karmann Ghia
`,
    },
  ],
};

export const historia: ThemeDef = {
  id: 'historia',
  name: 'História do Brasil',
  questions: [
    {
      // todos os presidentes da República (inclusive interinos, eleitos que não tomaram posse e as juntas militares)
      id: 'presidente',
      t: 'Um presidente do Brasil',
      r: 'vale quem foi eleito ou ocupou o cargo',
      a: `
1: Lula|Luiz Inácio Lula da Silva; Bolsonaro|Jair Bolsonaro
2: Dilma|Dilma Rousseff; Fernando Henrique Cardoso|FHC|Fernando Henrique; Getúlio Vargas|Getúlio|Vargas; Juscelino Kubitschek|JK|Juscelino
3: Michel Temer|Temer; Fernando Collor|Collor; Itamar Franco|Itamar; José Sarney|Sarney; Deodoro da Fonseca|Marechal Deodoro|Deodoro
4: João Goulart|Jango; Jânio Quadros|Jânio; Floriano Peixoto|Floriano; Tancredo Neves|Tancredo; Castelo Branco; Médici|Emílio Médici|Garrastazu Médici; Geisel|Ernesto Geisel; Figueiredo|João Figueiredo; Costa e Silva
5: Eurico Gaspar Dutra|Dutra; Prudente de Morais; Campos Sales; Rodrigues Alves; Afonso Pena; Washington Luís; Café Filho; Hermes da Fonseca
6: Júlio Prestes|Julio Prestes; Nilo Peçanha; Venceslau Brás|Wenceslau Braz; Epitácio Pessoa; Artur Bernardes; Delfim Moreira
7: Ranieri Mazzilli|Mazzilli; José Linhares; Carlos Luz; Nereu Ramos
9: Pedro Aleixo; Tasso Fragoso; Mena Barreto|João de Deus Mena Barreto; Isaías de Noronha; Aurélio de Lira Tavares|Lira Tavares; Augusto Rademaker|Rademaker; Márcio de Souza e Melo
`,
    },
    {
      id: 'revolta',
      t: 'Uma revolta, revolução ou guerra da história do Brasil',
      a: `
1: Inconfidência Mineira; Guerra de Canudos|Canudos
2: Revolta da Vacina; Revolução Farroupilha|Guerra dos Farrapos|Farroupilha; Guerra do Paraguai; Conjuração Baiana|Revolta dos Alfaiates|Inconfidência Baiana|Revolta dos Búzios
3: Revolta da Chibata; Cabanagem; Balaiada; Sabinada; Revolução de 1930; Revolução Constitucionalista|Revolução de 1932; Guerra do Contestado|Contestado; Guerra dos Palmares|Quilombo dos Palmares|Palmares
4: Revolta dos Malês; Revolução Pernambucana|Revolução de 1817; Confederação do Equador; Revolta da Armada; Revolução Federalista; Tenentismo; Revolta dos 18 do Forte|Os 18 do Forte|Revolta do Forte de Copacabana; Coluna Prestes; Guerra da Independência|Independência do Brasil|Guerra de Independência do Brasil; Intentona Comunista; Golpe de 1964|Golpe militar
5: Independência da Bahia|Guerra da Independência da Bahia|2 de Julho; Revolta Paulista de 1924|Revolução de 1924; Guerra dos Emboabas|Emboabas; Guerra dos Mascates|Mascates; Revolta de Beckman|Revolta dos Beckman; Revolta de Vila Rica|Revolta de Filipe dos Santos; Revolução Praieira|Praieira; Guerra da Cisplatina|Cisplatina; Guerra dos Bárbaros; Insurreição Pernambucana; Batalha dos Guararapes|Guararapes
6: Revolta do Quebra-Quilos|Quebra-Quilos; Revolta do Vintém; Revolta de Princesa; Levante Integralista|Intentona Integralista; Guerrilha do Araguaia|Araguaia; Revolta dos Muckers|Muckers; Sedição de Juazeiro; Revolta Liberal de 1842|Revolução Liberal de 1842; Cabanada; Guerra Guaranítica; Guerra do Prata|Guerra contra Oribe e Rosas
7: Revolta de Ibicaba; Revolta dos Marimbondos; Revolta do Ronco da Abelha; Revolta dos Mercenários; Carrancas|Revolta de Carrancas; Motim do Maneta; Guerra do Uruguai; Conjuração Carioca|Conjuração do Rio de Janeiro; Revolta da Cachaça; Aclamação de Amador Bueno|Revolta de Amador Bueno
`,
    },
  ],
};

export const linguas: ThemeDef = {
  id: 'linguas',
  name: 'Línguas e Bíblia',
  questions: [
    {
      // línguas com nome em português e pelo menos 1 milhão de falantes ou status oficial, mais línguas mortas e indígenas do Brasil conhecidas
      id: 'idioma',
      t: 'Uma língua ou idioma',
      r: 'que não seja o português',
      x: 'Português',
      a: `
1: Inglês; Espanhol|Castelhano
2: Francês; Italiano; Alemão
3: Japonês; Chinês|Mandarim; Russo; Árabe; Latim
4: Coreano; Grego; Hebraico; Holandês|Neerlandês; Libras|Língua Brasileira de Sinais; Tupi|Tupi antigo; Esperanto; Hindi; Turco; Sueco; Polonês|Polaco
5: Norueguês; Dinamarquês; Finlandês; Ucraniano; Romeno; Húngaro; Tcheco|Checo; Guarani; Catalão; Galego; Basco|Euskera; Irlandês|Gaélico; Tailandês; Vietnamita; Indonésio; Persa|Farsi; Urdu; Bengali; Cantonês; Sânscrito; Grego antigo; Swahili|Suaíli; Africâner; Islandês; Croata; Sérvio; Búlgaro; Tupi-guarani
6: Quéchua|Quechua; Aimará; Nheengatu|Língua geral; Iorubá|Yorubá; Zulu; Xhosa; Amárico; Somali; Hauçá; Igbo; Kimbundu|Quimbundo; Umbundu; Kikongo|Quicongo; Crioulo cabo-verdiano|Cabo-verdiano; Tétum; Malaio; Tagalo|Filipino; Panjabi|Punjabi; Tâmil; Telugo; Marathi; Gujarati; Nepalês; Cingalês; Birmanês; Khmer|Cambojano; Laosiano|Lao; Mongol; Tibetano; Cazaque; Uzbeque; Azeri; Armênio; Georgiano; Curdo; Pashto|Pachto; Estoniano; Letão; Lituano; Eslovaco; Esloveno; Macedônio; Albanês; Bósnio; Bielorrusso; Luxemburguês; Maltês; Galês; Escocês|Gaélico escocês; Bretão; Occitano|Provençal; Corso; Sardo; Siciliano; Napolitano; Frísio; Iídiche; Ladino; Aramaico; Copta; Egípcio antigo; Sumério; Acádio; Hitita; Fenício; Etrusco; Gótico; Nórdico antigo; Inglês antigo; Maia|Maia iucateque; Náuatle|Nahuatl; Mapuche|Mapudungun; Havaiano; Maori; Samoano; Tonganês; Fijiano; Inuktitut; Cherokee; Navajo; Klingon; Élfico|Quenya|Sindarin
7: Kaingang|Caingangue; Guarani mbyá|Mbyá; Ticuna|Tikuna; Kaiowá|Guarani kaiowá; Yanomami|Ianomâmi; Xavante; Terena; Macuxi; Munduruku; Baniwa; Tukano; Kayapó|Caiapó; Kaiapó; Pataxó; Krenak; Bororo; Karajá; Xerente; Guajajara; Tenetehara; Wapixana; Pomerano; Talian|Vêneto brasileiro; Hunsrückisch|Hunsriqueano; Crioulo haitiano; Papiamento; Crioulo guineense; Forro|Santomense; Changana; Macua; Sena; Chichewa|Nianja; Shona; Kinyarwanda|Ruanda; Kirundi; Lingala; Wolof|Uolofe; Fula|Fulani; Bambara; Tigrínia; Oromo; Malgaxe; Sesoto; Setswana|Tswana; Tsonga; Venda; Ndebele; Suázi; Berbere|Tamazight; Cabila; Dari; Tadjique; Turcomeno; Quirguiz; Tártaro; Uigur; Checheno; Ossétio; Abkhaz; Javanês; Sundanês; Cebuano; Ilocano; Hmong; Karen; Shan; Zhuang; Hakka; Min; Wu; Ainu; Okinawano|Ryukyuano; Sami|Lapão; Feroês; Romani|Cigano; Manx; Córnico; Asturiano; Aragonês; Mirandês; Valão; Romanche; Friulano; Ladino dolomítico; Aromeno; Sorábio; Cassúbio; Rusyn; Gagauz; Chuvache; Cazar; Védico; Pali; Prácrito; Avéstico; Tocariano; Ugarítico; Elamita; Linear B|Micênico
`,
    },
    {
      // os 73 livros da Bíblia católica (inclui os 66 protestantes); 1 e 2 Samuel etc. valem como uma resposta só
      id: 'biblia',
      t: 'Um livro da Bíblia',
      a: `
1: Gênesis|Genesis
2: Êxodo; Apocalipse; Salmos
3: Mateus|Evangelho de Mateus|São Mateus; João|Evangelho de João|São João; Marcos|Evangelho de Marcos; Lucas|Evangelho de Lucas; Provérbios
4: Atos|Atos dos Apóstolos; Romanos; Jó; Isaías; Levítico; Números; Deuteronômio; Daniel; Eclesiastes; Cântico dos Cânticos|Cantares|Cânticos; Coríntios|1 Coríntios|2 Coríntios|Primeira Coríntios|Segunda Coríntios
5: Josué; Juízes; Rute; Samuel|1 Samuel|2 Samuel; Reis|1 Reis|2 Reis; Jeremias; Ezequiel; Jonas; Gálatas; Efésios; Filipenses; Hebreus; Tiago; Pedro|1 Pedro|2 Pedro; Ester; Neemias; Esdras; Crônicas|1 Crônicas|2 Crônicas|Paralipômenos
6: Lamentações; Oseias|Oséias; Joel; Amós; Miqueias|Miquéias; Malaquias; Zacarias; Habacuque; Sofonias; Ageu; Naum; Obadias|Abdias; Colossenses; Tessalonicenses|1 Tessalonicenses|2 Tessalonicenses; Timóteo|1 Timóteo|2 Timóteo; Tito; Filemom|Filemon; Judas; João (cartas)|1 João|2 João|3 João; Tobias; Judite; Macabeus|1 Macabeus|2 Macabeus; Sabedoria; Eclesiástico|Sirácida; Baruc|Baruque
`,
    },
  ],
};

export const mitologia: ThemeDef = {
  id: 'mitologia',
  name: 'Mitologia',
  questions: [
    {
      // deuses, titãs, heróis e criaturas da mitologia grega (com os nomes romanos como sinônimos quando são o mesmo deus)
      id: 'grega',
      t: 'Um deus, herói ou criatura da mitologia grega',
      a: `
1: Zeus
2: Hércules|Héracles; Poseidon|Posêidon|Netuno; Hades|Plutão; Afrodite|Vênus; Atena|Athena|Minerva
3: Apolo; Ares|Marte; Hermes|Mercúrio; Medusa; Aquiles; Cronos|Saturno; Ártemis|Diana; Hera|Juno; Eros|Cupido; Perseu; Dionísio|Baco; Minotauro
4: Hefesto|Vulcano; Deméter|Ceres; Prometeu; Pégaso; Ulisses|Odisseu; Teseu; Atlas; Gaia|Gea; Urano; Pandora; Narciso; Ícaro; Cérbero; Hidra|Hidra de Lerna; Ciclope|Polifemo; Centauro; Quimera; Esfinge; Sereia|Sereias; Titãs; Héstia|Vesta; Perséfone|Prosérpina; Orfeu; Midas; Édipo; Helena|Helena de Troia; Pã|Fauno; Nêmesis; Nice|Nike|Vitória; Morfeu; Hipnos; Tânatos
5: Jasão; Belerofonte; Heitor; Páris; Agamenon; Menelau; Ájax; Pátroclo; Penélope; Telêmaco; Eneias; Dédalo; Ariadne; Electra; Antígona; Medeia; Cassandra; Andrômeda; Psiquê; Eco; Adônis; Jacinto; Sísifo; Tântalo; Niobe; Europa; Io; Leda; Dânae; Calipso; Circe; Cila|Scylla; Caríbdis; Górgonas; Harpias; Fúrias|Erínias; Moiras|Parcas; Musas; Graças|Cárites; Ninfas; Sátiros; Grifo; Fênix; Ladon; Tifão|Tífon; Equidna; Quíron; Argos; Caronte; Hécate; Íris; Éolo; Hélio|Hélios; Selene; Eos|Aurora; Réia|Reia; Oceano; Tétis; Témis; Mnemósine; Hipérion; Jápeto; Epimeteu; Ganimedes; Hebe; Asclépio|Esculápio; Tique|Fortuna; Éris|Discórdia; Nix; Érebo; Caos; Tártaro; Ponto; Nereu; Proteu; Tritão; Anfitrite; Leto|Latona; Maia; Sêmele; Alcmena; Anteu; Órion; Atalanta; Hipólita; Amazonas
6: Pirítoo; Meléagro; Castor; Pólux; Dioscuros; Clitemnestra; Orestes; Ifigênia; Neoptólemo|Pirro; Filoctetes; Diomedes; Nestor; Príamo; Hécuba; Andrômaca; Laerte; Anquises; Ascânio; Dido; Tiresias|Tirésias; Jocasta; Laio; Creonte; Polinices; Etéocles; Cadmo; Harmonia; Pélope; Atreu; Tiestes; Egisto; Faetonte; Aracne; Calisto; Endimião; Pigmalião; Galateia; Hero; Leandro; Píramo; Tisbe; Filêmon; Báucis; Eurídice; Hipólito; Fedra; Alceste; Admeto; Licaão; Procusto; Sínis; Cércion; Esciro; Talos; Lâmia; Empusa; Gerião; Briareu|Hecatônquiros; Píton; Leão de Nemeia; Javali de Erimanto; Corça de Cerineia; Aves do Estínfalo; Touro de Creta; Éguas de Diomedes; Bois de Gerião; Pomos das Hespérides|Hespérides; Velocino de Ouro|Tosão de Ouro; Argonautas; Mirmidões; Bóreas; Zéfiro; Noto; Euro; Estige; Lete; Aqueronte; Caliope|Calíope; Clio; Érato; Euterpe; Melpômene; Polímnia; Terpsícore; Tália; Urânia; Cloto; Láquesis; Átropos; Aleto; Megera; Tisífone; Esteno; Euríale; Anteros; Himeneu; Príapo; Ate; Despina; Métis; Astreia; Dice|Dike; Eirene; Coios|Céos; Crio; Febe; Astreu; Perses; Palas
`,
    },
    {
      id: 'egipcia',
      t: 'Um deus ou deusa do Egito antigo',
      a: `
1: Rá|Ra|Amon-Rá
2: Anúbis|Anubis; Osíris|Osiris; Ísis|Isis; Hórus|Horus
3: Set|Seth; Bastet|Bast; Tot|Thoth
4: Amon; Aton; Sekhmet; Hathor; Ptah; Néftis; Sobek; Maat|Ma'at; Khnum|Quenúbis; Geb; Nut; Shu; Tefnut; Atum; Ápis|Apis
5: Apófis|Apep; Bes; Taweret|Tueris; Khonsu; Mut; Neith; Serket|Selket; Montu; Min; Hapi; Kebechet; Khepri; Seshat; Wadjet; Nekhbet; Meretseger; Heket; Renenutet; Amunet; Ammit; Wepwawet|Upuaut; Imhotep; Sopdet; Satet; Anuket; Hu; Sia; Heh; Nun; Aker; Mafdet; Menhit; Reshef; Sokar; Banebdjedet; Andjety
`,
    },
  ],
};

export const musica: ThemeDef = {
  id: 'musica',
  name: 'Instrumentos musicais',
  questions: [
    {
      id: 'instrumento',
      t: 'Um instrumento musical',
      a: `
1: Violão; Guitarra; Piano
2: Bateria; Violino; Flauta|Flauta doce|Flauta transversal; Teclado; Baixo|Contrabaixo
3: Saxofone|Sax; Pandeiro; Cavaquinho|Cavaco; Trompete; Sanfona|Acordeão|Acordeom|Gaita; Harpa; Violoncelo|Cello|Celo
4: Trombone; Clarinete; Viola|Viola caipira; Ukulele; Tambor; Gaita de boca|Harmônica; Berimbau; Surdo; Triângulo; Xilofone; Órgão; Tuba; Bandolim; Banjo; Teclado eletrônico|Sintetizador; Atabaque; Zabumba; Tamborim; Cuíca; Agogô; Chocalho; Maracas|Maraca
5: Oboé; Fagote; Trompa; Flautim|Piccolo; Gaita de foles; Cítara; Alaúde; Lira; Bongô; Conga|Tumbadora; Timbal; Pratos|Prato; Gongo; Castanholas; Reco-reco; Ganzá; Caxixi; Kalimba; Didgeridoo; Escaleta|Melódica; Cravo; Viola da gamba; Contrabaixo acústico; Vibrafone; Marimba; Glockenspiel|Lira de bateria; Tímpano|Tímpanos; Bumbo|Bombo; Caixa|Caixa clara; Repique|Repinique; Sitar; Tabla; Theremin; Flauta de pã; Ocarina; Apito; Cajón; Djembê|Djembe; Sino|Sinos; Carrilhão; Harmônio; Pandeirola; Tantã; Rebolo; Bandoneón|Bandoneon; Charango; Quena; Corneta; Clarim; Bombardino|Eufônio; Trompa alpina; Sousafone; Flugelhorn; Saxhorn
6: Rabeca; Viola de cocho; Viola de doze cordas; Violão de sete cordas|Sete cordas; Guitarra baiana; Pífano|Pife; Gaita-ponto; Bombo leguero; Alfaia; Afoxé|Xequerê|Shekere; Matraca; Ganzá de lata; Cabaça; Caxambu; Tambor de crioula; Ilu; Rum; Rumpi; Lé; Agbê; Mineiro; Frigideira; Caixa de folia; Adufe; Pandeiro quadrado; Tamborim de couro; Bandurra; Guitarra portuguesa; Balalaica; Bouzouki; Oud|Alaúde árabe; Saz; Erhu; Pipa; Guzheng; Koto; Shamisen; Shakuhachi; Taiko; Gamelão|Gamelan; Angklung; Steelpan|Steel drum; Kora; Balafon; Mbira; Darbuka|Derbak; Riq; Bodhrán; Tin whistle; Duduk; Zurna; Kaval; Gusle; Hurdy-gurdy|Sanfona de roda; Nyckelharpa; Hardanger; Kantele; Cimbalom|Címbalo; Saltério; Dulcimer; Celesta; Clavicórdio; Espineta; Virginal; Pianola; Acordeão de botão|Gaita de botão; Concertina; Sanfona de oito baixos|Oito baixos|Pé de bode; Harmônica de vidro; Serrote musical; Kazoo; Berimbau de boca|Harpa de boca; Jew's harp; Vuvuzela; Shofar; Corne inglês|Corne-inglês; Clarone|Clarinete baixo; Contrafagote; Requinta; Saxofone soprano; Saxofone barítono; Trompete piccolo; Cornetim; Ophicleide|Oficleide; Serpentão; Tuba wagneriana; Lur; Baixo elétrico; Guitarra havaiana|Lap steel|Steel guitar; Pedal steel; Dobro|Resonator; Bandola; Tiple; Cuatro; Vihuela; Requinto; Guitarrón; Harpa paraguaia; Marimbau; Tamborim de mão; Repique de mão; Prato e faca; Caixa de fósforo|Caixinha de fósforo; Colher|Colheres; Washboard|Tábua de lavar; Theorbo|Teorba; Cistre; Archilaúde; Cornamusa; Charamela; Bombarda; Sacabuxa; Flauta doce baixo; Pífaro; Flauta nasal; Moxeno; Siku|Zampoña; Tumba; Güiro; Claves|Clave; Cowbell; Woodblock|Bloco de madeira; Temple block; Chimbal|Hi-hat; Pandeiro meia-lua|Meia-lua; Sampler; Drum machine|Bateria eletrônica; Moog; Mellotron; Ondas Martenot; Talkbox; Keytar; Launchpad
`,
    },
  ],
};

export const bairros: ThemeDef = {
  id: 'bairros',
  name: 'Bairros do Rio',
  questions: [
    {
      // os bairros oficiais da cidade do Rio de Janeiro (Prefeitura do Rio, lista da Wikipédia) e a Ilha do Governador
      id: 'rio',
      t: 'Um bairro da cidade do Rio de Janeiro',
      a: `
1: Copacabana
2: Ipanema; Leblon; Barra da Tijuca|Barra
3: Centro; Lapa; Tijuca; Botafogo; Flamengo
4: Santa Teresa; Madureira; Maracanã; Méier; Gávea; Jardim Botânico; Lagoa; Laranjeiras; Leme; Rocinha; São Conrado; Urca; Vidigal; Recreio dos Bandeirantes|Recreio
5: Glória; Paquetá|Ilha de Paquetá; São Cristóvão; Complexo do Alemão|Alemão; Grajaú; Penha; Vila Isabel; Catete; Cosme Velho; Humaitá; Bangu; Campo Grande; Cidade de Deus; Jacarepaguá; Ilha do Governador
6: Estácio; Gamboa; Mangueira; Rio Comprido; Saúde; Andaraí; Bonsucesso; Cascadura; Engenho de Dentro; Freguesia|Freguesia de Jacarepaguá|Freguesia da Ilha; Irajá; Jacarezinho; Maré; Olaria; Pavuna; Ramos; Grumari; Padre Miguel; Realengo; Santa Cruz; Joá; Taquara
7: Benfica; Caju; Catumbi; Santo Cristo; Alto da Boa Vista; Galeão; Marechal Hermes; Piedade; Praça da Bandeira; Rocha Miranda; Vila da Penha; Deodoro; Guaratiba; Sepetiba; Vila Kennedy; Itanhangá; Rio das Pedras; Vargem Grande; Vila Valqueire
8: Cidade Nova; Vasco da Gama; Abolição; Acari; Água Santa; Anchieta; Argentino; Bancários; Barros Filho; Bento Ribeiro; Brás de Pina; Cachambi; Cacuia; Campinho; Cavalcanti; Cidade Universitária|Ilha do Fundão|Fundão; Cocotá; Coelho Neto; Colégio; Cordovil; Costa Barros; Del Castilho; Encantado; Engenheiro Leal; Engenho da Rainha; Engenho Novo; Guadalupe; Higienópolis; Honório Gurgel; Inhaúma; Jacaré; Jardim América; Jardim Carioca; Jardim Guanabara; Lins de Vasconcelos; Manguinhos; Maria da Graça; Moneró; Oswaldo Cruz; Parada de Lucas; Parque Anchieta; Parque Colúmbia; Penha Circular; Pilares; Pitangueiras; Portuguesa; Praia da Bandeira; Quintino Bocaiuva; Riachuelo; Ribeira; Ricardo de Albuquerque; Rocha; Sampaio; São Francisco Xavier; Tauá; Todos os Santos; Tomás Coelho; Turiaçu; Vaz Lobo; Vicente de Carvalho; Vigário Geral; Vila Kosmos; Vista Alegre; Zumbi; Barra de Guaratiba; Campo dos Afonsos; Cosmos; Gericinó; Ilha de Guaratiba; Inhoaíba; Jabour; Jardim Sulacap; Magalhães Bastos; Paciência; Pechincha; Pedra de Guaratiba; Santíssimo; Senador Camará; Senador Vasconcelos; Vila Militar; Anil; Barra Olímpica; Camorim; Curicica; Gardênia Azul; Praça Seca; Tanque; Vargem Pequena
`,
    },
  ],
};

export const natureza: ThemeDef = {
  id: 'natureza',
  name: 'Bichos',
  questions: [
    {
      // as raças reconhecidas pela FCI e pela CBKC (lista da Wikipédia), com os apelidos usados no Brasil
      id: 'cachorro',
      t: 'Uma raça de cachorro',
      r: 'vira-lata não vale',
      x: 'Vira-lata|Viralata|SRD|Sem raça definida|Caramelo|Vira-lata caramelo',
      a: `
1: Poodle|Caniche
2: Pastor-alemão|Pastor alemão; Pinscher miniatura|Pinscher; Golden retriever|Golden; Labrador|Labrador retriever; Shih-tzu|Shih tzu|Shitzu; Chihuahua|Chiuaua
3: Rottweiler|Rotweiler; Yorkshire terrier|Yorkshire|York; Dachshund|Salsicha|Linguicinha|Teckel; Husky siberiano|Husky; Spitz alemão|Lulu da Pomerânia|Spitz alemão anão|Spitz|Lulu; Beagle; Dálmata; Maltês; Lhasa apso; Bulldog francês|Buldogue francês|Frenchie; Pug|Carlin; Pit bull|Pitbull
4: Border collie|Border; Dobermann|Doberman; Boxer; Bulldog|Buldogue inglês|Bulldog inglês|Buldogue; São-bernardo|São Bernardo|São bernardo; Akita Inu|Akita; Chow-chow|Chow chow
5: Pastor-australiano|Pastor australiano; Pastor-belga|Pastor belga|Malinois; Rough collie|Collie|Lassie; Welsh corgi pembroke|Corgi; Schnauzer; Cane corso; Dogue alemão|Grande dinamarquês|Great dane; Fila brasileiro|Fila; Shar-pei|Shar pei; Bull terrier; Malamute-do-alasca|Malamute|Malamute do Alasca|Malamute do alasca; Samoieda; Shiba inu|Shiba; Basset hound|Basset; Cocker spaniel inglês|Cocker|Cocker spaniel; Bichon frisé|Bichon; Pequinês; Galgo inglês|Greyhound|Galgo
6: Old english sheepdog|Bobtail; Pastor-de-shetland|Sheltie|Shetland|Pastor de shetland; Schnauzer miniatura; Bulmastife; Dogue argentino; Dogue de Bordéus; Mastiff; Mastim napolitano|Mastim; Terra-nova|Terra Nova|Terra nova; Boiadeiro de Berna|Bernese|Boiadeiro bernês; Terrier brasileiro; Jack russell terrier|Jack russell; West highland white terrier|Westie; American staffordshire terrier; Staffordshire bull terrier; Cão de Santo Humberto|Bloodhound; Weimaraner; Pointer inglês|Pointer; Setter irlandês; Cavalier king charles spaniel|Cavalier; Boston terrier; Galgo afegão|Afghan hound|Galgo afegane; Papillon
7: Pastor-branco-suíço|Pastor branco suíço; Schnauzer gigante; Buldogue-campeiro|Buldogue campeiro; Leonberger; Mastim tibetano; Pastor-do-cáucaso|Pastor do cáucaso; Akita americano; Basenji; Xoloitzquintle|Xolo|Pelado mexicano; Cão d'água português; Bichon havanês; Borzoi; Whippet
8: Pastor croata; Pastor-maiorquino|Pastor maiorquino; Pastor-catalão|Pastor catalão; Pastor-de-beauce|Pastor de beauce; Pastor-de-brie|Pastor de brie; Pastor-da-picardia|Pastor da picardia; Pastor-dos-pirenéus-de-pelo-comprido|Pastor dos pirenéus de pelo comprido; Pastor-dos-pirenéus-de-pelo-curto|Pastor dos pirenéus de pelo curto; Bearded collie; Smooth collie; Pastor-bergamasco|Pastor bergamasco; Pastor-maremano-abruzês|Pastor maremano abruzês; Pastor-holandês|Pastor holandês; Pastor-polonês-da-planície|Pastor polonês da planície; Pastor-de-tatra|Pastor de tatra; Pastor-romeno-miorítico|Pastor romeno miorítico; Pastor-romeno-dos-cárpatos|Pastor romeno dos cárpatos; Pastor-da-rússia-meridional|Pastor da rússia meridional; Pastor americano miniatura; Terrier preto da Rússia; Continental Bulldog; Dogue canário; Mastim dos Pirenéus; Mastim espanhol; Pastor-da-anatólia|Pastor da anatólia; Pastor-da-ásia-central|Pastor da ásia central; Pastor-de-kraski|Pastor de kraski; Pastor-jugoslavo|Pastor jugoslavo; Pastor-do-sudeste-europeu|Pastor do sudeste europeu; Airedale terrier; Bedlington terrier; Border terrier; Fox terrier de pelo liso; Fox terrier de pelo duro; Soft coated wheaten terrier; Glen of imaal terrier; Terrier irlandês; Kerry blue terrier; Lakeland terrier; Manchester terrier; Parson russell terrier; Terrier alemão de caça; Welsh terrier; Terrier australiano; Cairn terrier; Dandie dinmont terrier; Norfolk terrier; Norwich terrier; Sealyham terrier; Skye terrier; Terrier checo; Terrier escocês; Terrier japonês; Bull Terrier Miniatura; Black and tan toy terrier; Silky terrier; Spitz de Norboten; Spitz finlandês; Cão islandês de pastoreio; Pastor-finlandês-da-lapônia|Pastor finlandês da lapônia; Spitz dos Visigodos; Spitz japonês; Rastreador-brasileiro|Rastreador brasileiro; Basset artesiano normando; Basset azul da Gasconha; Basset fulvo da Bretanha; Grande basset griffon da Vendeia; Pequeno basset griffon da Vendeia; Basset alemão da Vestfália; Basset alpino; Spaniel perdigueiro de Drente; Spaniel azul da Picardia; Spaniel bretão; Spaniel francês; Spaniel de Pont-Audemer|Spaniel de Pont Audemer; Spaniel da Picardia; Setter gordon; Setter inglês; Setter irlandês ruivo e branco; Chesapeake bay retriever; Curly coated retriever; Flat-coated retriever|Flat coated retriever; Nova Escócia duck tolling retriever; Clumber spaniel; Cocker spaniel americano; Springer spaniel inglês; Field spaniel; Sussex spaniel; Springer spaniel de Gales; Spaniel tibetano; Terrier tibetano; King charles spaniel; Spaniel japonês; Spaniel anão continental; Galgo espanhol; Galgo polaco; Galgo húngaro; Biewer terrier; Bulldog americano; Dogue brasileiro; Olde English Bulldogge; Ovelheiro gaúcho; Toy Fox Terrier
9: Kelpie australiano; Schipperke; Cão lobo checoslovaco; Komondor; Kuvasz; Mudi; Puli; Pumi; Cão lobo de Saarloos; Schapendoes; Cão da Serra de Aires; Cuvac eslovaco; Lancashire heeler; Chodský Pes; Boiadeiro australiano; Boiadeiro das Ardenas; Boiadeiro da Flandres; Welsh corgi cardigan; Boiadeiro australiano de cauda chata; Affenpinscher; Pinscher alemão; Pinscher austríaco; Cão fazendeiro da Dinamarca e Suécia; Smoushond holandês; Broholmer; Cimarron uruguayo; Cão de fila de São Miguel; Cão de presa maiorquino; Tosa; Aidi; Cão da Serra da Estrela; Cão de Castro Laboreiro; Cão de montanha dos Pirenéus; Hovawart; Landseer; Rafeiro do Alentejo; Tornjak; Cão de gado transmontano; Ciobănesc românesc corb; Macedonian Shepherd Dog Karaman; Boiadeiro de Appenzell; Boiadeiro de Entlebuch; Grande boiadeiro suíço; Gos rater valencià; Ratonero bodeguero andaluz; Cão esquimó canadense; Gronlandshund; Laika da Yakutia; Elkhound norueguês cinza; Elkhound norueguês preto; Cão sueco de caça ao cervo; Cão de ursos da Carélia; Laika da Sibéria Ocidental; Laika da Sibéria Oriental; Laika russo europeu; Norsk lundehund; Cão finlandês da Lapônia; Lapphund; Buhund norueguês; Vulpino italiano; Eurasier; Hokkaido; Kai; Jindo coreano; Kishu; Shikoku inu; Bangkaew tailandês; Cão-kintamani-bali|Cão kintamani bali; Cão de Canaã; Cão pelado peruano; Pharaoh hound; Cirneco do Etna; Podengo canário; Podengo ibicenco; Podengo português; Cão de Taiwan; Cão tailandês de crista dorsal; Billy; Coonhound preto e castanho; Foxhound americano; Foxhound inglês; Branco e preto francês; Branco e laranja francês; Tricolor francês; Grande anglo-francês branco e preto|Grande anglo francês branco e preto; Grande anglo-francês branco e laranja|Grande anglo francês branco e laranja; Grande Anglo-Francês Tricolor|Grande Anglo Francês Tricolor; Grande azul da Gasconha; Gascão Saintongeois; Grande griffon da Vendeia; Otterhound; Poitevin; Anglo-francês da pequena Vénerie|Anglo francês da pequena Vénerie; Cão do Ariége; Beagle harrier; Sabujo da Bósnia; Sabujo austríaco preto e castanho; Braco griffon da Vendeia; Cão de Artois; Sabujo montanhês montenegrino; Dunker; Braco da Transilvânia; Cão de caça da Polônia; Griffon azul da Gasconha; Griffon fulvo da Bretanha; Griffon de Nivernais; Sabujo de Halden; Sabujo de Hamilton; Harrier; Sabujo helênico; Sabujo de Hygen; Sabujo da Ístria de pelo liso; Sabujo da Ístria de pelo duro; Braco polonês; Pequeno azul da Gasconha; Pequeno gascão Saintongeois; Porcelana; Sabujo de Posavac; Sabujo espanhol; Schillerstovare; Laufhund; Sabujo italiano de pelo duro; Sabujo italiano de pelo curto; Sabujo eslovaco; Smalandsstovare; Sabujo sérvio; Sabujo tricolor sérvio; Braco da Estíria de pelo duro; Sabujo finlandês; Braco tirolês; Sabujo maremmano; Sabujo estónio; Segugio dell'Apennino; Perro fino Colombiano; Braco alemão; Drever; Pequeno sabujo suíço; Sabujo montanhês da Baviera; Cão farejador de Hanôver; Tatranský durič; Rhodesian ridgeback; Braco alemão de pelo áspero; Braco alemão de pelo curto; Braco alemão de pelo duro; Braco de Auvérnia; Braco eslovaco; Braco francês tipo gascão; Braco francês tipo pireneus; Braco húngaro de pelo curto; Braco húngaro de pelo duro; Braco italiano; Braco de Ariege; Braco de Burbônia; Braco de Saint-Germain|Braco de Saint Germain; Braco dinamarquês; Perdigueiro de Burgos; Perdigueiro português; Pudelpointer; Grande munsterlander; Pequeno munsterlander; Braco alemão de pelo longo; Cão de aponte frisão; Griffon de caça checo; Griffon de aponte de pelo duro; Spinone italiano; Perdigueiro alemão; Pequeno cão holandês; Barbet; Cão d'água americano; Cão d'água espanhol; Cão d'água frisão; Cão d'água irlandês; Lagotto romagnolo; Bichon bolonhês; Coton de tulear; Pequeno cão leão; Griffon belga; Griffon de Bruxelas; Pequeno brabançon; Cão de crista chinês; Pequeno cão russo; Rateiro do Praga; Kromfohrländer; Saluki; Kazakh tazy; Wolfhound irlandês; Deerhound; Azawakh; Galguinho italiano; Sloughi; American bully; Barbado da Terceira; Barrocal Algarvio; Boerboel; Buldogue serrano; Veadeiro pampeano
`,
    },
  ],
};
