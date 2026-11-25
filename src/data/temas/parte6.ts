import type { ThemeDef } from '../../types';

export const moda: ThemeDef = {
  id: 'moda',
  name: 'Roupas e moda',
  questions: [
    {
      id: 'roupa',
      t: 'Uma peça de roupa',
      a: `
1: Camiseta|Camisa; Calça
2: Bermuda; Short|Shorts; Vestido; Saia; Blusa; Jaqueta; Meia|Meias
3: Casaco; Moletom; Cueca; Calcinha; Sutiã; Pijama; Regata; Cropped; Jeans|Calça jeans; Biquíni|Biquini; Sunga; Maiô
4: Terno; Gravata; Blazer; Colete; Macacão; Suéter|Pulôver; Cardigã|Cardigan; Legging; Polo|Camisa polo; Top; Body; Corta-vento|Corta vento; Sobretudo; Capa de chuva; Roupão; Camisola
5: Kimono|Quimono; Smoking; Saia lírio; Jardineira; Bata; Túnica; Bolero; Corset|Espartilho; Meia-calça|Meia calça; Samba-canção|Samba canção; Boxer; Fio dental; Anágua; Ceroula; Collant; Jogger; Bermuda ciclista; Moletom canguru; Colete jeans; Parka; Trench coat; Poncho; Xale
6: Pala; Bombacha; Gibão; Sarongue|Canga; Sári|Sari; Batina; Toga; Beca; Avental; Jaleco; Uniforme; Macaquinho; Pochete
`,
    },
    {
      id: 'calcado',
      t: 'Um tipo de calçado',
      a: `
1: Tênis; Chinelo|Havaianas
2: Sandália; Bota; Sapato; Salto alto|Salto
3: Rasteirinha|Rasteira; Sapatilha; Crocs; Pantufa; Chuteira; Galocha|Bota de borracha; Scarpin
4: Mocassim; Coturno; Sapatênis; Tamanco; Plataforma; Anabela; Bota de cano alto|Bota cano alto; Oxford; Slip-on|Slip on; Mule; Papete; Peep toe|Peep-toe; Babuch|Babuche; Alpargata|Alpargatas
5: Sandália gladiadora|Gladiadora; Bota cowboy|Bota texana; Botina; Mocassim drive; Docksides|Dockside|Sapato dockside; Chelsea|Bota chelsea; Melissa; Kichute; Conga; Bamba; Ked|Keds; All Star|Allstar|Converse; Vans; Kitten heel; Meia-pata|Meia pata; Escarpim
6: Tamanco holandês|Tamanco de madeira; Sapato de couro cru; Alpercata; Sandália de couro; Zueco|Zueca; Sapato boneca|Boneca; Espadrille|Espadrilha; Sapato de bico fino; Sapato de verniz; Bota de montaria; Sapatilha de balé|Sapatilha de ponta; Patins; Pé de pato|Nadadeira; Chinelo de dedo; Chinelo slide|Slide
`,
    },
  ],
};

export const doces: ThemeDef = {
  id: 'doces',
  name: 'Doces e sobremesas',
  questions: [
    {
      id: 'sobremesa',
      t: 'Uma sobremesa',
      a: `
1: Pudim|Pudim de leite; Brigadeiro
2: Sorvete; Mousse|Musse|Mousse de maracujá; Bolo|Bolo de chocolate; Pavê; Torta|Torta de limão; Gelatina
3: Sagu; Arroz doce|Arroz de leite; Quindim; Romeu e Julieta; Doce de leite; Pé de moleque; Beijinho; Petit gâteau|Petit gateau; Brownie; Banoffee|Banofee; Pudim de pão; Salada de frutas; Açaí; Cocada; Torta holandesa|Holandesa
4: Manjar|Manjar branco; Cheesecake; Tiramisù|Tiramisu; Panna cotta; Bolo de cenoura; Pavlova; Banana split; Sundae; Petit four; Profiterole; Merengue|Suspiro; Creme brûlée|Creme brulee; Churros; Bomba de chocolate|Éclair; Brigadeirão; Bolo de rolo; Cartola; Canjica; Curau; Ambrosia; Olho de sogro; Bem-casado|Bem casado; Pastel de nata|Pastel de Belém; Quindão
5: Cuca; Strudel; Torta de maçã; Crème caramel; Mil-folhas|Mil folhas; Charlotte|Charlote; Floresta negra|Torta floresta negra; Delícia de abacaxi; Doce de abóbora; Doce de mamão; Ovos moles; Fios de ovos; Papo de anjo; Baba de moça; Toucinho do céu; Pão de mel; Bolo Souza Leão; Cajuzinho; Queijadinha; Bananada; Goiabada; Marmelada; Paçoca; Pamonha doce; Mingau; Creme de papaia
6: Sericaia|Sericá; Pastel de Santa Clara; Bolo de fubá cremoso; Doce de leite talhado|Ambrosia mineira; Furrundu; Mané pelado; Bolo de macaxeira; Cuscuz de tapioca; Tapioca doce; Mungunzá; Espera-marido; Pé de moça; Sonho; Rapadura; Puxa-puxa; Alfenim; Cocada queimada; Bolo de bacia
`,
    },
    {
      id: 'sorvete',
      t: 'Um sabor de sorvete',
      a: `
1: Chocolate; Morango; Creme
2: Flocos; Baunilha; Napolitano; Limão; Coco
3: Pistache; Leite ninho|Ninho; Maracujá; Doce de leite; Açaí; Menta|Hortelã; Uva; Abacaxi; Chocolate branco
4: Cookies|Cookies and cream|Cookie; Brigadeiro; Passas ao rum|Passas; Cereja; Milho verde|Milho; Manga; Banana; Tapioca; Nozes; Amendoim; Café; Caramelo; Prestígio; Ovomaltine; Torta de limão; Romeu e julieta; Iogurte|Frozen; Cupuaçu; Graviola; Tangerina; Mamão papaia|Papaia
5: Pavê; Queijo|Queijo com goiabada; Abacate; Goiaba; Melancia; Acerola; Kiwi; Pêssego; Framboesa; Frutas vermelhas; Amora; Avelã|Nutella; Gianduia; Stracciatella; Tutti frutti; Chiclete; Algodão doce; Paçoca; Mousse de maracujá; Ameixa; Sonho de valsa; Kinder; Oreo; Doce de abóbora; Mel
6: Cajá; Siriguela; Umbu; Bacuri; Taperebá; Tamarindo; Jaca; Buriti; Pequi; Cajuína; Caju; Mangaba; Murici; Jabuticaba; Pitanga; Gengibre; Canela; Rapadura; Cocada; Arroz doce; Queijo coalho; Tapioca com coco
`,
    },
  ],
};

export const internet: ThemeDef = {
  id: 'internet',
  name: 'Internet e redes sociais',
  questions: [
    {
      id: 'app',
      t: 'Um aplicativo ou rede social',
      a: `
1: WhatsApp|Zap|Whats; Instagram|Insta
2: Facebook|Face; TikTok|Tik Tok; YouTube; Twitter|X
3: Telegram; Spotify; Netflix; Uber; iFood|Ifood; Google; Gmail; Waze; Google Maps|Maps; Kwai; Pinterest; LinkedIn; Discord; Snapchat
4: Orkut; MSN|MSN Messenger; Skype; Threads; Shopee; Mercado Livre; Nubank; Picpay|PicPay; 99|99 Taxi|99 Pop; Tinder; Twitch; Reddit; Amazon; Shein; Disney+|Disney Plus; Prime Video; Globoplay; Duolingo; ChatGPT; CapCut; Canva; Zoom; Teams|Microsoft Teams; Google Meet|Meet; Uber Eats; Rappi; Airbnb; Booking
5: Fotolog; MySpace; ICQ; Google Plus; Vine; Tumblr; Badoo; Happn; Bumble; Clubhouse; BeReal; Flickr; Last.fm; Formspring; Ask.fm; Periscope; Musical.ly; Habbo; Second Life; Kik; Signal; Viber; WeChat; Line; Truecaller; Shazam; Deezer; Tidal; SoundCloud; Wattpad; Letterboxd; Strava; Gympass|Wellhub; Mercado Pago; PagBank|PagSeguro; Inter|Banco Inter; C6; Caixa Tem; gov.br; Meu INSS; CNH Digital|Carteira Digital de Trânsito; e-Título; Conecte SUS|Meu SUS Digital; Bluesky; Mastodon
6: Par Perfeito; Sonico; Hi5; Friendster; Blogger; Bate-papo UOL|Bate papo UOL; mIRC; Emule; Kazaa; Napster; LimeWire|Limewire; Ares; Shareaza; Megaupload; 4shared; Baixaki; Superdownloads; Yahoo Respostas; Twitpic; Plurk; Gazzag
`,
    },
    {
      id: 'youtuber',
      t: 'Um youtuber ou influenciador brasileiro',
      a: `
1: Felipe Neto; Whindersson Nunes|Whindersson
2: Luccas Neto; Casimiro|Casimiro Miguel|Cazé; Virginia|Virginia Fonseca; Kéfera|Kefera; Rezende|RezendeEvil|Rezende Evil; Enaldinho
3: Gaules; Alanzoka; Cellbit; Felipe Castanhari|Castanhari; Júlio Cocielo|Cocielo; Carlinhos Maia; Boca Rosa|Bianca Andrade; Camila Loures; Christian Figueiredo; T3ddy; Authentic Games|AuthenticGames; Coisa de Nerd; Manual do Mundo; Porta dos Fundos; Mussoumano; Nobru; Loud Coringa|Coringa; Jon Vlogs; Tirullipa; Hugo Gloss; Bruna Vieira; Nilce Moretto|Nilce; Leon|Leon Martins; Marcos Castro|Mítico Jovem
4: PC Siqueira; Cauê Moura; Nando Moura; Mamãe Falei; Cazé TV|CazéTV; Flow Podcast|Flow; Monark; Igor 3K|Igor Coelho; Rafinha Bastos; Mari Maria; Thaynara OG; Gkay|GKay; Lucas Rangel; Jessica Belcost; Gustavo Tubarão|Tubarão; Pedro Certezas; Rato Borrachudo; Lucas Inutilismo|Inutilismo; Pirula; Átila Iamarino|Atila; Nerdologia; Jovem Nerd; Azaghal; Gabriela Pugliesi; Thássia Naves; Camila Coelho; Niina Secrets
`,
    },
  ],
};

export const turismo: ThemeDef = {
  id: 'turismo',
  name: 'Praias e pontos turísticos',
  questions: [
    {
      id: 'praia',
      t: 'Uma praia brasileira',
      a: `
1: Copacabana; Ipanema
2: Porto de Galinhas; Jericoacoara|Jeri; Fernando de Noronha|Noronha; Praia do Forte; Leblon; Barra da Tijuca|Barra
3: Baía do Sancho|Sancho; Praia da Pipa|Pipa; Morro de São Paulo; Maragogi; Canoa Quebrada; Arraial do Cabo; Búzios|Armação dos Búzios; Ilha do Mel; Bombinhas; Balneário Camboriú|Camboriú; Ubatuba; Ilhabela; Praia Grande; Guarujá; Santos; Trancoso; Arraial d'Ajuda|Arraial da Ajuda; Itacaré; Boa Viagem; Ponta Negra; Praia do Futuro; Iracema|Praia de Iracema
4: Praia do Rosa; Jurerê|Jurerê Internacional; Joaquina; Mole|Praia Mole; Campeche; Lagoinha do Leste; Praia dos Ingleses|Ingleses; Garopaba; Itamambuca; Maresias; Juquehy; Camburi; Paraty|Parati; Ilha Grande; Lopes Mendes; Prainha; Grumari; São Conrado; Arpoador; Flamengo; Botafogo; Stella Maris; Porto da Barra; Itapuã; Pajuçara; Ponta Verde; Francês|Praia do Francês; Carneiros|Praia dos Carneiros; Tamandaré; Cumbuco; Morro Branco; Genipabu; Tambaba; Coqueirinho; Atalaia; Caraíva; Taipu de Fora; Alter do Chão; Ponta do Seixas; Cabo Branco; Tambaú; Itaúnas
5: Praia do Espelho|Espelho; Baía dos Golfinhos; Baía dos Porcos; Cacimba do Padre; Praia do Leão; Praia do Gunga|Gunga; São Miguel dos Milagres|Milagres; Patacho; Antunes; Japaratinga; Barra Grande; Moreré; Boipeba; Corumbau; Cumuruxatiba; Guarapari; Meaípe; Praia do Sono; Trindade; Castelhanos; Bonete; Praia Vermelha; Félix; Puruba; Prumirim; Domingas Dias; Praia Brava; Taquaras; Lagoinha; Pântano do Sul; Matadeiro; Naufragados; Siriú; Ferrugem; Guarda do Embaú; Silveira; Praia do Cassino|Cassino; Torres; Atlântida; Capão da Canoa; Tramandaí; Pontal do Atalaia; Praia do Amor; Tibau do Sul; Baía Formosa; Barra de Cunhaú; Icaraí de Amontada; Flecheiras; Mundaú
6: Praia de Tabatinga; Sagi; Pititinga; Galinhos; Maceió de Lagoinha; Tatajuba; Preá; Barrinha; Atins; Caburé; Ilha do Caju; Pedra do Sal; Ajuruteua; Salinópolis|Salinas; Algodoal; Marudá; Mosqueiro; Ponta de Pedras; Soure; Joanes; Praia do Pesqueiro; Barra Velha; Saquarema; Praia de Itaúna; Jaconé; Grussaí; Rasa|Praia Rasa; Geribá; Ferradura; Azeda; Azedinha; João Fernandes; Tartaruga; Olho de Boi; Forno; Prainhas do Pontal; Praia do Pontal
`,
    },
    {
      id: 'ponto',
      t: 'Um ponto turístico do Brasil',
      a: `
1: Cristo Redentor|Cristo; Pão de Açúcar
2: Cataratas do Iguaçu|Foz do Iguaçu|Cataratas; Maracanã; Avenida Paulista|Paulista; Pelourinho; Copacabana
3: Lençóis Maranhenses; Fernando de Noronha|Noronha; Chapada Diamantina; Pantanal; Teatro Amazonas; Encontro das Águas; Escadaria Selarón|Selarón; Arcos da Lapa|Lapa; Elevador Lacerda; Mercado Modelo; Ibirapuera|Parque Ibirapuera; MASP; Congresso Nacional|Congresso; Catedral de Brasília; Bonito; Jalapão; Chapada dos Veadeiros
4: Mercado Municipal|Mercadão; Pinacoteca; Museu do Ipiranga; Beco do Batman; Rua 25 de Março|25 de Março; Theatro Municipal|Teatro Municipal; Museu do Amanhã; Jardim Botânico; Lagoa Rodrigo de Freitas|Lagoa; Pedra da Gávea; Floresta da Tijuca; Ilha Fiscal; Pedra Bonita; Morro da Urca; Santa Teresa; Ouro Preto; Paraty|Parati; Tiradentes; Inhotim; Gramado; Canela; Lago Negro; Serra Gaúcha; Cânion Itaimbezinho|Itaimbezinho; Ponte Hercílio Luz; Lagoa da Conceição; Beto Carrero|Beto Carrero World; Ópera de Arame; Jardim Botânico de Curitiba; Praça dos Três Poderes; Palácio do Planalto; Esplanada dos Ministérios; Ponte JK; Pontão do Lago Sul; Memorial JK; Farol da Barra; Igreja do Bonfim|Senhor do Bonfim; Lagoa do Abaeté; Marco Zero; Instituto Ricardo Brennand|Ricardo Brennand; Olinda; Dragão do Mar; Ponte dos Ingleses; Ver-o-Peso; Estação das Docas; Alter do Chão; Monte Roraima; Serra da Capivara; Delta do Parnaíba; Canyon do Xingó|Xingó
5: Pedra do Baú; Pico da Bandeira; Pico do Itatiaia|Itatiaia; Serra do Cipó; Capitólio; Gruta de Maquiné|Maquiné; Gruta do Lago Azul; Rio da Prata; Buraco das Araras; Aquário Natural; Nobres; Chapada dos Guimarães; Vale da Lua; Cachoeira do Tabuleiro; Cachoeira da Fumaça; Morro do Pai Inácio; Poço Azul; Poço Encantado; Cânion Fortaleza; Cânion Guartelá; Vila Velha|Parque Estadual de Vila Velha; Ilha do Campeche; Fortaleza de Santa Cruz; Forte de Copacabana; Real Gabinete Português de Leitura; Confeitaria Colombo; Catedral da Sé|Sé; Pátio do Colégio; Estação da Luz; Museu da Língua Portuguesa; Museu do Futebol; Edifício Copan|Copan; Edifício Itália; Mosteiro de São Bento; Liberdade|Bairro da Liberdade; Embu das Artes; Holambra; Aparecida|Basílica de Aparecida|Santuário de Aparecida; Campos do Jordão; Cidade de Goiás|Goiás Velho; Pirenópolis; Caldas Novas; Rota das Emoções; Morro de São Paulo; Praia do Forte; Projeto Tamar; Ilha de Marajó|Marajó; Parintins; Ponta Negra; Floresta Amazônica|Amazônia; Rio Negro; Anavilhanas
6: Catedral Metropolitana do Rio; Igreja da Candelária|Candelária; Paço Imperial; Museu Nacional; Quinta da Boa Vista; Museu Imperial; Petrópolis; Palácio de Cristal; Casa de Santos Dumont; Ilha de Paquetá|Paquetá; Ilha Grande; Pedra do Telégrafo; Dedo de Deus; Serra dos Órgãos; Pico do Papagaio; Gruta Azul; Ilhas Cagarras; Morro Dois Irmãos|Dois Irmãos; Vidigal; Mirante Dona Marta; Vista Chinesa; Mesa do Imperador; Cachoeira do Horto; Pedra do Arpoador; Feira de São Cristóvão; Sambódromo|Marquês de Sapucaí; Morro do Elefante; Ponta do Seixas; Farol do Cabo Branco; Cânion do Sertão; Cariri; Juazeiro do Norte|Estátua do Padre Cícero; Serra de Ibiapaba; Ubajara; Pedra Furada; Árvore do Amor; Lagoa Azul; Lagoa Bonita; Atins; Caburé; Raposa; Alcântara
`,
    },
  ],
};

export const nomes: ThemeDef = {
  id: 'nomes',
  name: 'Nomes de pessoas',
  questions: [
    {
      id: 'feminino',
      t: 'Um nome feminino que começa com A',
      a: `
1: Ana; Amanda; Alice
2: Aline; Adriana; Alessandra; Andreia|Andréia|Andrea; Ana Clara; Ana Júlia|Ana Julia; Antônia|Antonia; Aparecida
3: Ana Paula; Ana Beatriz; Ana Luiza|Ana Luísa; Ana Carolina; Ana Laura; Ana Lívia; Agatha|Ágata|Agata; Alícia|Alicia; Amália; Augusta; Aurora; Ariane; Adriele|Adrielly; Alana|Allana; Ayla|Aila|Aylla; Antonella|Antonela
4: Alexandra; Alessa; Alba; Albertina; Alda; Alzira; Amélia; Angélica; Angela|Ângela; Anita; Anna; Annabel|Anabel; Anne; Antonieta; Arlete; Arminda; Assunção; Áurea; Ayumi; Aisha; Abigail; Agnes; Aída|Aida; Ariel; Atena|Athena; Analu; Anabela; Anaís|Anais; Ariela; Arya
5: Adélia; Adelaide; Adelina; Adalgisa; Afrodite; Albina; Alcina; Alcione; Aldenora; Alessia; Alexia|Aléxia; Alina; Amabile|Amábile; Amaya; Ametista; Amora; Anastácia; Andressa; Angelina; Aninha; Anunciação; Apolônia; Araci|Aracy; Arlinda; Aryane; Astrid; Auxiliadora; Avelina; Azaleia
`,
    },
    {
      id: 'masculino',
      t: 'Um nome masculino que começa com J',
      a: `
1: João; José
2: Joaquim; Jorge; Júlio|Julio; Jonas; Juan; Jefferson|Jeferson; Jean; Juliano; João Pedro; João Miguel
3: Jair; Jaime; Jonathan|Jônatas|Jonatas|Jhonatan; Jorginho; Josué; Joel; Juarez; Júnior|Junior; Juvenal; João Lucas; João Gabriel; João Vitor|João Victor; João Guilherme; Joaquim Pedro; Josias; Jacó|Jacob; Jeremias
4: Jairo; Jader; Jadson; Januário; Jarbas; Jardel; Jesus; Jefté; Joabe; Joelson; Jordan|Jordão; Josafá; Joseph; Judas; Juca; Júlio César|Julio Cesar; Jurandir; Juscelino; Justino; Juvêncio; Jhon|John; James; Jack|Jake; Jason
5: Jacinto; Jaguaraci; Jandir; Janildo; Jânio; Jaques|Jacques; Jasão; Jeová; Jerônimo; Joaquinzinho; Jocélio; Joélio; Jofre; Jonildo; Josemar; Josivaldo; Jovelino; Jucelino; Juraci; Jurandy; Juvino; Jeremy
`,
    },
  ],
};
