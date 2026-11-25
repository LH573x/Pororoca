import type { ThemeDef } from '../../types';

export const musica: ThemeDef = {
  id: 'musica',
  name: 'Música brasileira',
  questions: [
    {
      id: 'samba',
      t: 'Um instrumento usado no samba',
      a: `
1: Pandeiro; Cavaquinho|Cavaco
2: Surdo; Tamborim; Violão
3: Cuíca; Reco-reco|Reco reco; Agogô; Tantã|Tan-tan|Tan tan
4: Repique|Repinique; Caixa|Caixa de guerra; Chocalho; Banjo
5: Ganzá; Violão de sete cordas|Violão 7 cordas|Sete cordas; Bandolim; Timbal; Rebolo
6: Atabaque; Prato e faca|Prato; Flauta; Apito
7: Clarinete; Trombone; Trompete; Saxofone|Sax; Caixa de fósforo|Caixinha de fósforo; Xequerê|Shekere|Xequere
8: Frigideira; Bumbo|Bombo; Teclado; Acordeão|Sanfona; Caxixi
9: Repique de mão; Afoxé
10: Prato de louça
`,
    },
    {
      id: 'genero',
      t: 'Um ritmo ou gênero musical brasileiro',
      a: `
1: Samba; Funk|Funk carioca|Funk brasileiro; Sertanejo
2: Forró; Pagode; MPB|Música popular brasileira; Bossa nova; Axé|Axé music
3: Frevo; Baião; Sertanejo universitário; Brega; Piseiro|Pisadinha
4: Xote; Choro|Chorinho; Maracatu; Arrocha; Samba-enredo|Samba enredo; Lambada; Rock nacional|Rock brasileiro
5: Tecnobrega; Carimbó; Samba de roda; Xaxado; Música caipira|Moda de viola|Caipira; Tropicália|Tropicalismo; Manguebeat|Mangue beat; Funk melody
6: Coco|Coco de roda; Ijexá; Samba-reggae|Samba reggae; Brega funk; Forró universitário; Sambalanço; Samba-rock|Samba rock; Bregadeira
7: Maxixe; Lundu; Modinha; Calango; Toada; Embolada; Repente; Ciranda; Afoxé; Partido-alto|Partido alto; Pagodão|Pagode baiano; Swingueira
8: Siriá; Lambadão; Guarânia; Chamamé; Vanerão|Vanera; Bugio; Rasqueado; Catira|Cateretê; Cururu; Arrasta-pé|Arrasta pé; Samba de breque; Samba-canção|Samba canção
9: Marabaixo; Boi-bumbá|Toada de boi; Jongo; Batuque; Bumba-meu-boi|Bumba meu boi; Xamego; Fandango; Rancheira; Galope à beira-mar
10: Siriri; Cacuriá; Tambor de crioula; Samba de lenço; Samba de bumbo
`,
    },
  ],
};

export const natureza: ThemeDef = {
  id: 'natureza',
  name: 'Bichos e plantas do Brasil',
  questions: [
    {
      id: 'amazonia',
      t: 'Um animal da Amazônia',
      a: `
1: Onça-pintada|Onça|Onça pintada
2: Arara|Arara-azul|Arara-vermelha|Arara-canindé; Boto|Boto-cor-de-rosa|Boto cor de rosa; Macaco; Jacaré
3: Preguiça|Bicho-preguiça; Sucuri|Anaconda; Piranha; Tucano; Capivara; Papagaio
4: Peixe-boi|Peixe boi; Pirarucu|Arapaima; Anta; Tamanduá|Tamanduá-bandeira; Tartaruga|Tartaruga-da-amazônia; Jiboia; Macaco-prego; Mico
5: Ariranha; Harpia|Gavião-real; Tambaqui; Tracajá; Jabuti; Poraquê|Peixe-elétrico; Sagui; Bugio|Guariba; Macaco-aranha|Coatá; Quati
6: Tatu; Paca; Cutia; Queixada; Caititu|Cateto; Gavião; Coruja; Morcego; Cobra-coral|Coral; Surucucu; Jararaca; Tucunaré; Arraia|Raia
7: Jaguatirica; Gato-maracajá|Maracajá; Suçuarana|Onça-parda|Puma; Lontra; Tamanduaí; Ouriço-cacheiro; Mutum; Cigana|Jacu-cigano; Japiim; Matamatá; Candiru
8: Jupará; Cachorro-do-mato-vinagre|Cachorro-vinagre; Macaco-de-cheiro; Parauacu|Saki; Tamarino; Sauim-de-coleira|Sauim; Irara; Gavião-pega-macaco; Uirapuru; Galo-da-serra; Pirarara; Aruanã
9: Uacari|Uacari-vermelho; Macaco-barrigudo; Zogue-zogue; Cuxiú; Tatu-canastra; Jacaré-açu; Jacaretinga; Acará-disco|Peixe-disco; Pirapitinga
10: Cachorro-do-mato-de-orelhas-curtas; Macaco-da-noite|Macaco-de-noite; Rato-de-espinho; Udu-de-coroa-azul; Anambé; Peixe-folha
`,
    },
    {
      id: 'fruta',
      t: 'Uma fruta',
      a: `
1: Banana; Maçã|Maca; Laranja
2: Morango; Uva; Manga; Abacaxi; Melancia; Mamão
3: Pera; Melão; Limão; Goiaba; Maracujá; Abacate; Tangerina|Mexerica|Bergamota|Mimosa|Poncã; Kiwi
4: Caju; Coco; Acerola; Pêssego; Ameixa; Cereja; Jabuticaba; Açaí; Graviola; Carambola
5: Pitanga; Cupuaçu; Figo; Caqui; Romã; Amora; Framboesa; Mirtilo|Blueberry; Pitaya|Pitaia; Lichia; Nectarina
6: Cajá; Siriguela|Seriguela|Ciriguela; Umbu; Pequi; Buriti; Jaca; Fruta-do-conde|Pinha|Ata; Tamarindo; Cacau; Damasco; Kinkan; Physalis
7: Cambuci; Bacuri; Mangaba; Murici|Muruci; Jenipapo; Araçá; Cagaita; Guaraná; Jambo; Sapoti; Pupunha; Bacaba; Tucumã; Uvaia; Grumixama; Gabiroba|Guabiroba
8: Cabeludinha; Abiu; Ingá; Taperebá; Biribá; Camu-camu; Jatobá; Pequiá; Mangostão; Rambutã; Atemoia; Feijoa|Goiaba-serrana; Nêspera|Ameixa-amarela; Marmelo; Groselha
9: Bacupari; Cereja-do-rio-grande; Puçá; Araticum|Marolo; Mamey; Durião|Durian; Salak; Longan; Kiwano; Jaracatiá; Fruta-pão; Noni; Jamelão
10: Bacuripari; Mabolo; Uxi; Cutite; Pajurá; Guapeva; Mapati; Sorva
`,
    },
  ],
};

export const marcas: ThemeDef = {
  id: 'marcas',
  name: 'Marcas antigas',
  questions: [
    {
      id: 'refri',
      t: 'Um refrigerante que existe ou existiu no Brasil',
      a: `
1: Coca-Cola|Coca|Coca Cola; Guaraná Antarctica|Guaraná|Guaraná Antártica|Guaraná Champagne
2: Fanta|Fanta Laranja|Fanta Uva|Fanta Guaraná; Sprite; Pepsi
3: Kuat|Guaraná Kuat; Schweppes; Soda Antarctica|Soda|Soda limonada; Sukita; Itubaína|Tubaína
4: Coca-Cola Zero|Coca Zero; H2OH; Dolly|Dolly Guaraná; Guaraná Jesus; Mineirinho
5: Grapette|Grapete; Crush; Pepsi Twist; 7UP|Seven Up; Água tônica|Tônica Antarctica; Funada
6: Mirinda; Teem; Guaraná Taí|Taí; Convenção|Guaraná Convenção; Pitchula|Pitchula Cola
7: Gengibirra; Guaraná Fys|Fys; Guaraná Pureza|Pureza; Cini|Guaraná Cini; Guaraná Brahma|Brahma Guaraná
8: Guaraná Baré|Baré; Mate Couro; Cotuba|Guaraná Cotuba
9: Água da Serra|Guaraná Água da Serra
`,
    },
    {
      id: 'chocolate',
      t: 'Um chocolate ou bombom vendido no Brasil',
      a: `
1: Bis; Sonho de Valsa; Kit Kat|KitKat
2: Prestígio; Diamante Negro; Lacta; Ouro Branco; Twix; Kinder Ovo|Kinder; M&M's|M&M|MM
3: Chokito|Choquito; Baton|Batom; Laka; Snickers; Talento; Serenata de Amor; Charge; Garoto; Nestlé Classic|Classic
4: Suflair; Galak; Alpino; Crunch; Tortuguita; Toblerone; Ferrero Rocher|Ferrero; Milkybar
5: Kinder Bueno; Ovomaltine; Shot; 5 Star|Five Star; Laka Oreo; Amandita; Caribe; Lollo
6: Milka; Lindt; Hershey's|Hersheys; Cacau Show; Kopenhagen; Neugebauer; Arcor; Mundy
7: Mu-Mu|Mumu; Surpresa|Chocolate Surpresa; Sensação; Stikadinho; Crocante|Crocante Garoto; Lancy
8: Bib's|Bibs; Chocolate Pan|Pan|Cigarrinho de chocolate
`,
    },
  ],
};
