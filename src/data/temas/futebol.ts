import type { ThemeDef } from '../../types';

export const futebol: ThemeDef = {
  id: 'futebol',
  name: 'Futebol',
  questions: [
    {
      // os 161 clubes que já disputaram a elite do Brasileiro (Taça Brasil, Robertão e Série A, 1959 a 2026), conferidos na Wikipédia
      id: 'clube',
      t: 'Um clube que já jogou a Série A do Brasileirão',
      r: 'contando Taça Brasil e Robertão',
      a: `
1: Flamengo|Mengão|Fla; Corinthians|Timão
2: Palmeiras|Verdão; São Paulo|SPFC; Vasco da Gama|Vasco
3: Grêmio; Santos; Atlético Mineiro|Atlético-MG|Galo; Cruzeiro; Botafogo|Fogão; Fluminense|Flu; Internacional|Inter
4: Bahia; Athletico Paranaense|Athletico|Atlético Paranaense|Atlético-PR|Furacão; Coritiba|Coxa; Sport|Sport Recife; Goiás; Vitória|EC Vitória; Ceará; Fortaleza
5: Portuguesa|Lusa; Náutico; Guarani; Paysandu|Papão; Ponte Preta; Santa Cruz; Juventude; América Mineiro|América-MG; Remo|Clube do Remo; Figueirense; Red Bull Bragantino|Bragantino; Criciúma; Atlético Goianiense|Atlético-GO|Dragão; Avaí; Chapecoense|Chape; Cuiabá; Mirassol
6: CSA; America|America-RJ|America do Rio; Paraná|Paraná Clube; América de Natal|América-RN; ABC; Sampaio Corrêa; Joinville; CRB; Bangu; Campinense; Vila Nova; Treze; Londrina; São Caetano; Botafogo-PB; Botafogo-SP; Santo André; Grêmio Barueri|Barueri|Grêmio Prudente; Brasiliense; Ipatinga
7: Nacional-AM|Nacional; Desportiva Ferroviária|Desportiva; Rio Branco-ES|Rio Branco; Sergipe; Moto Club; Operário-MS|Operário; Americano; Confiança; River|Ríver|River-PI; Mixto
8: Rio Negro-AM|Rio Negro; Inter de Limeira|Internacional de Limeira; Flamengo-PI; Brasília; Gama; Ferroviário|Ferroviário-CE; Grêmio Maringá; Uberaba; Goytacaz; Comercial-MS; Itabaiana; Tiradentes-PI|Tiradentes; Colorado|Colorado-PR; Metropol; Tuna Luso; Anapolina; Caxias; Brasil de Pelotas|Brasil|Xavante; União São João; Uberlândia|Uberlândia EC; Fluminense de Feira|Flu de Feira; Operário VG|Operário de Várzea Grande|Operário-MT; Goiânia; Piauí
9: XV de Piracicaba; Volta Redonda; Maranhão|Maranhão Atlético; Leônico; Villa Nova; Fast Clube|Fast; Alecrim; São Paulo-RS|São Paulo de Rio Grande; Dom Bosco; CEUB; Ferroviário-PR; Fonseca; Rabello; Central|Central de Caruaru; América-SP|América de Rio Preto; Campo Grande; Pinheiros|Pinheiros-PR; São José-SP|São José; Itabuna; Comercial|Comercial de Ribeirão Preto|Comercial-SP; Galícia; Capelense; Olaria; XV de Jaú; Santa Cruz-SE; Santo Antônio|Santo Antônio-ES
10: Juventus-SP|Juventus|Juventus da Mooca; Operário-PR; Catuense; Novo Hamburgo; ASA|ASA de Arapiraca; Itumbiara; Taguatinga; Ferroviária; Noroeste; São Bento; Anápolis; Vitória-ES|Vitória do Espírito Santo; AA Colatina; Guará; Sobradinho; Inter de Santa Maria|Internacional de Santa Maria; Auto Esporte-PB; J.Malucelli|J. Malucelli|JMalucelli; Caldense; Corumbaense; Auto Esporte-PI; Ferroviário-MA; Potiguar de Mossoró|Potiguar; Francana; América de Propriá; Rio Branco-RJ; Inter de Lages; Hercílio Luz; Água Verde; América-CE; Comercial-PR; Cruzeiro do Sul; Defelê; Eletrovapo; Estrela do Mar; Guanabara-DF; Manufatora; Olímpico-AM; Olímpico-SC; Paula Ramos; Perdigão; Siderúrgica; Aliança; Liga da Marinha
`,
    },
    {
      // todos os 340 convocados da seleção masculina para as Copas de 1930 a 2026 (listas da Wikipédia)
      id: 'copa',
      t: 'Um jogador que já foi convocado para uma Copa pela seleção',
      a: `
1: Pelé; Ronaldo|Ronaldo Fenômeno|Fenômeno; Neymar|Neymar Jr
2: Romário; Cafu; Roberto Carlos; Rivaldo; Ronaldinho|Ronaldinho Gaúcho|R10; Kaká
3: Garrincha; Zico; Sócrates; Taffarel|Cláudio Taffarel; Dunga; Bebeto; Daniel Alves|Dani Alves; Marcelo; Casemiro; Vinícius Júnior|Vini Jr|Vinicius Jr|Vinícius|Vini
4: Jairzinho; Tostão; Carlos Alberto|Carlos Alberto Torres|Capita; Rivelino|Rivellino; Júlio César; Raí; Marcos|São Marcos; Lúcio; Adriano|Adriano Imperador; Fred; Robinho; Thiago Silva; David Luiz; Hulk; Alisson|Alisson Becker; Richarlison|Pombo; Raphinha
5: Didi; Paulinho; Zagallo|Mário Zagallo|Zagalo; Gérson; Denílson; Paulo César Carpegiani|Carpegiani; Ademir da Guia; Oscar; Leandro; Júnior; Falcão; Careca; Renato Gaúcho; Ricardo Rocha; Márcio Santos; Leonardo; Giovanni; Emerson; Edmundo; Roque Júnior; Gilberto Silva; Kléberson; Juninho Pernambucano; Maicon; Elano; Luís Fabiano; Júlio Baptista; Fernandinho; Willian; Gabriel Jesus; Philippe Coutinho|Coutinho; Marquinhos; Roberto Firmino|Firmino; Ederson|Ederson Moraes; Matheus Cunha|Cunha; Endrick
6: Nilton Santos; Danilo|Danilo Luiz; Djalma Santos; Mauro Ramos; Bellini|Hilderaldo Bellini; Gilmar|Gylmar; Zito; Vavá; Clodoaldo; Roberto Miranda; Leão|Émerson Leão; Branco; Jorginho; Bismarck; Aldair; Mazinho; Mauro Silva; Zinho; César Sampaio; Carlos Germano; Gonçalves|Marcelo Gonçalves; André Cruz; Edmílson; Juan; Luisão; Cris; Mineiro; Felipe Melo; Ramires; Dante; Luiz Gustavo; Hernanes; Bernard; Jô; Miranda; Geromel|Pedro Geromel; Filipe Luís; Douglas Costa; Renato Augusto; Cássio; Taison; Alex Sandro; Lucas Paquetá|Paquetá; Éder Militão|Militão; Fabinho; Alex Telles; Bruno Guimarães; Antony; Rodrygo; Everton Ribeiro; Bremer; Pedro; Gabriel Martinelli|Martinelli; Gabriel Magalhães|Gabriel; Léo Pereira; Luiz Henrique; Rayan
7: Leônidas|Leônidas da Silva; Barbosa; Zizinho; Ademir|Ademir de Menezes|Ademir Menezes; Dida; Pepe; Amarildo; Fidélis; Brito; Paulo Henrique; Rildo; Manga; Lima; Alcindo; Félix; Piazza|Wilson Piazza; Everaldo; Paulo César Caju|Paulo Cézar Caju|Paulo César|PC Caju; Zé Maria; Marinho Peres; César Maluco; Nelinho; Dirceu; Toninho Cerezo|Cerezo; Edinho; Reinaldo; Polozzi; Rodrigues Neto; Roberto Dinamite; Serginho|Serginho Chulapa; Éder; Paulo Sérgio; Edevaldo; Pedrinho; Édson Boaro|Édson; Müller|Muller; Casagrande; Edivaldo; Paulo Vítor; Josimar; Alemão; Mauro Galvão; Valdo; Ricardo Gomes; Acácio; Mozer|Carlos Mozer; Tita; Ronaldão; Zetti; Viola; Gilmar Rinaldi; Júnior Baiano; Zé Roberto; Doriva; Ricardinho; Belletti|Juliano Belletti; Vampeta; Juninho Paulista; Edílson|Edilson; Luizão; Rogério Ceni; Cicinho; Gilberto; Michel Bastos; Nilmar; Grafite; Henrique; Fagner; Weverton; Douglas Santos; Danilo Santos; Roger Ibañez|Ibañez; Igor Thiago
8: Domingos da Guia; Tim; Bauer; Jair Rosa Pinto|Jair; Alfredo; Baltazar; Castilho; Maneca; Rui; Brandãozinho; Pinheiro; Julinho|Julinho Botelho; Veludo; Dino Sani; Zózimo; De Sordi; Orlando|Orlando Peçanha; Mazzola|José Altafini; Coutinho do Santos; Jair Marinho; Jurandir; Altair; Zequinha; Mengálvio; Silva|Silva Batuta; Edu; Marco Antônio; Ado; Baldocchi|Baldochi; Fontana; Luís Pereira; Marinho Chagas; Leivinha; Renato; Valdomiro; Mirandinha; Waldir Peres; Toninho; Zé Sérgio; Carlos Gallo|Carlos (goleiro); Batista; Gil; Luizinho; Paulo Isidoro; Juninho; Elzo; Silas|Paulo Silas; Anderson Polga; Heurelho Gomes|Gomes; Josué; Doni; Jefferson; Maxwell; Victor; Éderson Silva
9: Danilo Alvim; Araken; Carvalho Leite; Fausto; Joel; Preguinho; Luisinho; Patesko; Argemiro; Batatais; Brandão; Britto; Hércules; Lopes; Machado; Nariz; Perácio; Roberto; Romeu; Walter; Augusto; Bigode; Friaça; Chico; Ely; Juvenal; Rodrigues; Pinga; Dequinha; Maurinho; Humberto|Humberto Tozzi; Índio; Rubens; Cabeção; Oreco; Moacir; Jair da Costa; Paraná; Joel Camargo; Dario|Dadá Maravilha|Dadá; Amaral; Abel; Jorge Mendonça; Chicão; Zé Carlos
10: Benedicto; Brilhante; Fernando; Fortes; Hermógenes; Itália; Ivan Mariz; Manoelzinho; Moderato; Nilo; Oscarino; Pamplona; Poly; Russinho; Teóphilo; Velloso; Zé Luiz; Ariel; Armandinho; Áttila; Canalli; Germano; Gabriel Fernando Bilé; Luiz Luz; Martim Silveira; Octacílio; Pedrosa; Sylvio Hoffmann; Tinoco; Tunga; Waldyr; Waldemar de Brito; Afonsinho; Jaú; Niginho; Zezé Procópio; Adãozinho; Nena; Noronha
`,
    },
    {
      // seleções que já disputaram uma Copa do Mundo masculina (1930 a 2026)
      id: 'paiscopa',
      t: 'Um país que já disputou uma Copa do Mundo',
      r: 'que não seja o Brasil',
      x: 'Brasil',
      a: `
1: Argentina; Alemanha|Alemanha Ocidental
2: França; Itália; Uruguai; Espanha; Inglaterra; Portugal
3: Holanda|Países Baixos; Croácia; Bélgica; México; Estados Unidos|EUA; Japão
4: Coreia do Sul|Coréia do Sul; Chile; Colômbia; Camarões; Suíça; Suécia; Dinamarca; Senegal; Marrocos; Nigéria; Paraguai; Rússia; Polônia; Sérvia; Gana; Costa Rica; Equador; Austrália; Arábia Saudita; Irã|Irão; Catar|Qatar
5: Peru; Costa do Marfim; Tunísia; Egito; Argélia; África do Sul; Bolívia; Escócia; País de Gales|Gales; Irlanda; Grécia; Turquia; Romênia; Bulgária; Hungria; Áustria; Tchecoslováquia; Iugoslávia; Ucrânia; Noruega; Canadá; Honduras; Panamá; Islândia; Eslovênia; Eslováquia; República Tcheca|Tchéquia; Bósnia|Bósnia e Herzegovina; Jamaica; Nova Zelândia; China
6: União Soviética|URSS; Alemanha Oriental; Irlanda do Norte; Coreia do Norte|Coréia do Norte; Haiti; El Salvador; Cuba; Iraque; Kuwait; Emirados Árabes Unidos|Emirados Árabes; Angola; Togo; Trinidad e Tobago; Zaire|República Democrática do Congo|RD Congo; Israel; Sérvia e Montenegro; Cabo Verde; Uzbequistão; Jordânia; Curaçao|Curaçau
7: Índias Orientais Holandesas|Indonésia
`,
    },
  ],
};
