import type { ThemeDef } from '../../types';

export const ciencia: ThemeDef = {
  id: 'ciencia',
  name: 'Ciência e espaço',
  questions: [
    {
      // os 118 elementos da tabela periódica (IUPAC), com os nomes em português do Brasil
      id: 'elemento',
      t: 'Um elemento químico',
      a: `
1: Oxigênio; Hidrogênio
2: Carbono; Ferro; Ouro
3: Nitrogênio|Azoto; Hélio; Sódio; Prata; Cálcio; Cobre
4: Cloro; Alumínio; Urânio; Potássio; Magnésio; Zinco; Mercúrio; Chumbo; Enxofre; Flúor; Fósforo; Platina; Lítio
5: Silício; Níquel; Neônio|Neon; Iodo; Estanho; Titânio; Cobalto; Plutônio; Rádio; Cromo; Manganês; Bromo; Argônio|Argon; Boro; Tungstênio|Volfrâmio; Berílio
6: Criptônio|Kriptônio; Xenônio; Radônio; Arsênio; Bário; Césio; Estrôncio; Selênio; Vanádio; Molibdênio; Paládio; Irídio; Ósmio; Bismuto; Cádmio; Antimônio; Germânio; Gálio; Tório; Polônio; Nióbio
7: Rubídio; Escândio; Ítrio; Zircônio; Tecnécio; Rutênio; Ródio; Índio; Telúrio; Háfnio; Tântalo; Rênio; Tálio; Astato; Frâncio; Actínio; Protactínio; Netúnio; Amerício; Cúrio; Einstênio; Lantânio; Cério; Neodímio
8: Praseodímio; Promécio; Samário; Európio; Gadolínio; Térbio; Disprósio; Hólmio; Érbio; Túlio; Itérbio; Lutécio; Berquélio; Califórnio; Férmio; Mendelévio; Nobélio; Laurêncio
9: Rutherfórdio; Dúbnio; Seabórgio; Bóhrio; Hássio; Meitnério; Darmstádio; Roentgênio; Copernício; Nihônio; Fleróvio; Moscóvio; Livermório; Tenesso|Tennessino; Oganessônio|Oganésson
`,
    },
    {
      // as 88 constelações oficiais da União Astronômica Internacional
      id: 'constelacao',
      t: 'Uma constelação',
      a: `
1: Cruzeiro do Sul|Cruzeiro
2: Órion|Orion|Três Marias
3: Ursa Maior; Escorpião
4: Ursa Menor; Leão; Touro; Sagitário; Gêmeos; Áries|Carneiro; Virgem; Libra|Balança; Peixes; Aquário; Câncer|Caranguejo; Capricórnio
5: Cassiopeia|Cassiopéia; Andrômeda; Pégaso; Perseu; Hércules; Centauro; Cão Maior; Dragão; Fênix; Lira; Cisne
6: Águia; Hidra; Unicórnio; Lobo; Corvo; Baleia; Cefeu; Pavão; Tucano; Lebre; Pomba; Cão Menor; Ofiúco|Serpentário; Serpente; Lince; Raposa; Golfinho; Camaleão
7: Leão Menor; Coroa Boreal; Coroa Austral; Triângulo; Triângulo Austral; Cocheiro; Boieiro; Erídano; Vela; Popa; Quilha; Peixe Austral; Peixe Voador; Mosca; Grou; Índio; Girafa; Flecha; Lagarto; Cabeleira de Berenice; Cães de Caça; Taça; Escudo; Altar; Ave-do-Paraíso
8: Máquina Pneumática|Bomba de Ar; Cinzel; Compasso; Dourado|Espadarte; Cavalo Menor; Fornalha|Forno; Relógio; Hidra Macho|Hidra Austral; Mesa; Microscópio; Régua|Esquadro; Oitante|Octante; Pintor|Cavalete do Pintor; Bússola; Retículo; Escultor; Sextante; Telescópio
`,
    },
    {
      id: 'astro',
      t: 'Um planeta, planeta-anão ou lua do Sistema Solar',
      r: 'que não seja a Terra',
      x: 'Terra; Sol',
      a: `
1: Marte
2: Júpiter; Saturno; Vênus; Lua
3: Mercúrio; Urano; Netuno; Plutão
5: Titã; Europa; Io; Ganimedes; Calisto; Ceres
6: Fobos; Deimos; Encélado; Tritão; Caronte; Éris
7: Makemake; Haumea; Mimas; Reia; Jápeto; Tétis; Dione; Oberon; Titânia; Miranda; Ariel; Umbriel; Hipérion
8: Febe; Pã; Atlas; Prometeu; Pandora; Epimeteu; Jano; Amalteia; Tebe; Metis; Adrasteia; Himalia; Elara; Pasífae; Sinope; Carme; Ananke; Leda; Nereida; Proteu; Puck; Nix; Hidra; Cérbero; Estige; Disnomia|Dysnomia; Sedna; Quaoar; Orco|Orcus; Gonggong
9: Dafne; Helena; Calipso; Telesto; Polideuces; Metone; Palene; Anthe; Ymir; Paaliaq; Tarvos; Ijiraq; Kiviuq; Siarnaq; Albiorix; Mundilfari; Skathi; Lisiteia; Calírroe; Temisto; Eurídome; Cordélia; Ofélia; Bianca; Créssida; Desdêmona; Julieta; Pórcia; Rosalinda; Belinda; Perdita; Mab; Cupido; Calibã; Sicorax; Próspero; Setebos; Estéfano; Trínculo; Francisco; Margarida; Ferdinando; Larissa; Galateia; Despina; Talassa; Náiade; Halimede; Psâmata; Sao; Laomedeia; Neso; Hipocampo; Hiʻiaka|Hiiaka; Namaka; Weywot; Vanth
`,
    },
  ],
};

export const corpo: ThemeDef = {
  id: 'corpo',
  name: 'Corpo humano',
  questions: [
    {
      id: 'osso',
      t: 'Um osso do corpo humano',
      a: `
1: Fêmur
2: Crânio; Costela
3: Tíbia; Úmero; Clavícula; Vértebra|Vértebras|Coluna|Coluna vertebral
4: Rádio; Ulna|Cúbito; Fíbula|Perônio; Mandíbula|Maxilar inferior; Patela|Rótula; Esterno; Bacia|Pelve|Quadril|Osso do quadril|Coxal|Ilíaco; Escápula|Omoplata
5: Falange|Falanges; Cóccix; Maxilar|Maxila|Maxilar superior; Calcâneo; Metatarso|Metatarsos; Metacarpo|Metacarpos; Sacro
6: Estribo; Martelo; Bigorna; Atlas; Áxis; Ílio; Ísquio; Púbis; Tarso; Carpo; Tálus|Astrágalo; Hioide; Osso frontal|Frontal; Osso occipital|Occipital; Temporal|Osso temporal; Parietal|Osso parietal; Zigomático|Malar|Osso da bochecha; Nasal|Osso nasal
7: Esfenoide; Etmoide; Vômer; Lacrimal; Palatino; Cuboide; Navicular|Escafoide do pé; Escafoide; Semilunar|Lunato; Piramidal; Pisiforme; Trapézio; Trapezoide; Capitato|Grande osso; Hamato|Ganchoso; Cuneiforme|Cuneiformes
8: Concha nasal inferior|Corneto inferior; Sesamoide|Sesamoides; Cuneiforme medial; Cuneiforme intermédio; Cuneiforme lateral
`,
    },
    {
      id: 'orgao',
      t: 'Um órgão do corpo humano',
      a: `
1: Coração
2: Pulmão; Cérebro; Fígado; Rim
3: Estômago; Intestino; Pele; Pâncreas
4: Bexiga; Baço; Vesícula|Vesícula biliar; Útero; Olho; Língua; Esôfago; Tireoide|Tiroide; Apêndice
5: Ovário; Testículo; Laringe; Faringe; Traqueia; Intestino delgado; Intestino grosso; Próstata; Cerebelo; Medula espinhal|Medula; Diafragma; Nariz; Ouvido; Orelha; Boca; Pênis; Vagina; Mama|Seio
6: Glândula suprarrenal|Suprarrenal|Adrenal; Hipófise|Pituitária; Timo; Duodeno; Cólon|Colo; Reto; Ânus; Uretra; Ureter; Hipotálamo; Tálamo; Glândula pineal|Pineal|Epífise; Amígdala|Amígdalas|Tonsila; Adenoide; Placenta; Trompa|Trompa de Falópio|Tuba uterina; Gengiva; Dente; Músculo; Osso; Vaso sanguíneo|Veia|Artéria
7: Paratireoide; Glândula salivar|Parótida; Íleo; Jejuno; Ceco; Bulbo|Bulbo raquidiano; Ponte|Ponte de Varólio; Cóclea; Retina; Tímpano; Epidídimo; Vesícula seminal; Linfonodo|Gânglio linfático|Íngua; Medula óssea; Epiglote; Córnea; Cristalino; Íris; Clitóris; Vulva; Escroto; Mesentério
`,
    },
  ],
};
