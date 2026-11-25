import type { ThemeDef } from '../../types';
import { CIDADES_MG, CIDADES_NE, CIDADES_SP } from '../gerado/cidades';

export const comidas: ThemeDef = {
  id: 'comidas',
  name: 'Comidas e bebidas',
  questions: [
    {
      id: 'salgado',
      t: 'Um salgado de lanchonete',
      a: `
1: Coxinha|Coxinha de frango
2: Pastel; Esfiha|Esfirra|Esfira|Sfiha; Pão de queijo; Kibe|Quibe
3: Enroladinho|Enroladinho de salsicha|Salsicha empanada; Empada|Empadinha; Risole|Rissole|Risoles|Rissoles
4: Bolinha de queijo; Joelho|Italiano|Enroladinho de presunto e queijo; Hambúrguer assado|Hamburgão; Misto quente|Misto
5: Bauru; Croquete; Pão de batata; Empadão; Cachorro-quente|Cachorro quente|Hot dog
6: Pastel de forno; Torta salgada|Torta; Bolinho de bacalhau; Americano; Folhado|Folhado de frango
7: Bolinho de carne; Calzone; Bolinho de aipim|Bolinho de mandioca|Bolinho de macaxeira; Sanduíche natural|Natural; Acarajé
8: Trouxinha; Baguete recheada|Baguete; Mini pizza|Minipizza|Pizza brotinho; Bolinho de arroz; Pão de linguiça
9: Barquete; Cigarrete; Pastel de Belém; Bolinho de feijoada; Romeu e julieta de queijo
10: Chipa; Bolinho caipira; Pão de minuto; Paçoca de carne; Cuscuz de lanchonete
`,
    },
    {
      id: 'prato',
      t: 'Um prato típico brasileiro',
      a: `
1: Feijoada
2: Moqueca|Moqueca capixaba|Moqueca baiana; Acarajé; Arroz e feijão|Feijão com arroz
3: Baião de dois; Vatapá; Tutu de feijão|Tutu; Feijão tropeiro|Tropeiro; Galinhada; Churrasco
4: Bobó de camarão|Bobó; Escondidinho; Tacacá; Pato no tucupi; Virado à paulista|Virado paulista; Arroz carreteiro|Carreteiro
5: Carne de sol; Buchada|Buchada de bode; Sarapatel; Caruru; Picanha; Frango com quiabo; Cuscuz paulista
6: Maniçoba; Barreado; Dobradinha; Mocotó; Feijão verde; Vaca atolada
7: Arroz de cuxá; Galinha à cabidela|Cabidela|Galinha de cabidela; Paçoca de pilão; Panelada; Xinxim de galinha|Xinxim
8: Pirão; Quibebe; Arroz com pequi; Peixe na telha; Caldeirada; Rubacão
9: Mojica de pintado|Mojica; Caribéu; Ensopado de tambaqui|Tambaqui; Arroz de pequi; Costela fogo de chão
10: Vaca atolada mineira; Arroz maria-isabel|Maria isabel; Capote; Furrundu; Cuxá
`,
    },
  ],
};

export const cidades: ThemeDef = {
  id: 'cidades',
  name: 'Cidades e estados',
  questions: [
    { id: 'mg', t: 'Uma cidade de Minas Gerais', r: 'que não seja a capital', a: CIDADES_MG, x: 'Belo Horizonte|BH|Beagá' },
    { id: 'sp', t: 'Uma cidade do estado de São Paulo', r: 'que não seja a capital', a: CIDADES_SP, x: 'São Paulo|Sampa|SP' },
    { id: 'ne', t: 'Uma cidade do Nordeste', r: 'que não seja capital', a: CIDADES_NE, x: 'Salvador; Fortaleza; Recife; São Luís; Maceió; João Pessoa; Teresina; Natal; Aracaju' },
  ],
};

export const futebol: ThemeDef = {
  id: 'futebol',
  name: 'Futebol',
  questions: [
    {
      id: 'clube',
      t: 'Um clube de futebol brasileiro',
      a: `
1: Flamengo|Mengão|Fla; Corinthians|Timão
2: Palmeiras|Verdão; São Paulo|SPFC|Tricolor paulista; Vasco|Vasco da Gama
3: Santos; Grêmio; Internacional|Inter; Cruzeiro; Atlético Mineiro|Atlético-MG|Galo; Fluminense|Flu
4: Botafogo|Fogão; Bahia; Vitória|EC Vitória; Sport|Sport Recife; Athletico Paranaense|Athletico|Atlético Paranaense|Furacão; Fortaleza
5: Ceará; Coritiba|Coxa; Goiás; Bragantino|Red Bull Bragantino; Náutico; Santa Cruz; Ponte Preta; Guarani; Juventude; Cuiabá
6: Paysandu|Papão; Remo|Clube do Remo; América Mineiro|América-MG; Chapecoense|Chape; Avaí; Figueirense; Atlético Goianiense|Dragão; Portuguesa|Lusa; CRB; CSA
7: Criciúma; Sampaio Corrêa; ABC; América de Natal|América-RN; Vila Nova; Paraná Clube|Paraná; Botafogo-SP; Mirassol; Ituano; Novorizontino; Operário|Operário Ferroviário
8: Londrina; Tombense; Brusque; Joinville; XV de Piracicaba|XV de Novembro; São Caetano; Santo André; Ferroviária; Juventus|Juventus da Mooca; Bangu; Madureira; Treze; Botafogo-PB; Confiança
9: Volta Redonda; Ypiranga; Caxias; Brasil de Pelotas; Grêmio Novorizontino; Manaus FC; Nacional|Nacional-AM; Fast Clube; River|River-PI; Altos; Ferroviário; Icasa; Guarany de Sobral; Campinense; Sergipe; Moto Club; Rio Branco; Atlético Acreano; Luverdense; Anápolis
10: Olaria; America-RJ|America do Rio; São Cristóvão; Tuna Luso; Galvez; Plácido de Castro; Interporto; Trem; Ypiranga de Erechim; Bandeirante; Comercial; Noroeste; Marília; Rio Claro; Sertãozinho; Taubaté; Uberlândia EC; Villa Nova; Democrata; Tupi
`,
    },
    {
      id: 'copa',
      t: 'Um jogador que já foi a uma Copa pela seleção',
      a: `
1: Pelé; Ronaldo|Ronaldo Fenômeno|Fenômeno; Neymar|Neymar Jr
2: Ronaldinho|Ronaldinho Gaúcho|R10; Romário; Kaká; Cafu; Roberto Carlos; Rivaldo
3: Zico; Garrincha; Sócrates; Bebeto; Dunga; Taffarel; Vinícius Júnior|Vini Jr|Vinicius Jr|Vinícius; Casemiro; Marcelo; Daniel Alves|Dani Alves
4: Adriano|Adriano Imperador; Júlio César; Thiago Silva; Rivelino|Rivellino; Jairzinho; Tostão; Robinho; Lúcio; Fred; Hulk; David Luiz; Alisson; Raphinha; Richarlison|Pombo
5: Falcão; Careca; Zagallo; Didi; Gérson; Carlos Alberto Torres|Capita; Júnior; Leonardo; Edmundo; Denílson; Juninho Pernambucano; Gilberto Silva; Kléberson; Roque Júnior; Ederson; Gabriel Jesus; Paulinho; Fernandinho; Marquinhos; Philippe Coutinho|Coutinho; Willian; Roberto Firmino|Firmino; Oscar; Júlio Baptista; Luís Fabiano; Elano; Maicon
6: Vavá; Nilton Santos; Djalma Santos; Zito; Bellini; Mauro Ramos; Gilmar|Gylmar; Émerson Leão|Leão; Clodoaldo; Branco; Mauro Silva; Aldair; Jorginho; Zinho; Mazinho; César Sampaio; Edmílson; Lucas Paquetá|Paquetá; Bremer; Danilo; Fabinho; Antony; Rodrygo; Éder Militão|Militão; Alex Sandro; Juan; Felipe Melo; Ramires; Luiz Gustavo; Hernanes; Dante; Bernard; Jô; Douglas Costa; Filipe Luís; Renato Augusto; Gabriel Martinelli|Martinelli; Bruno Guimarães; Pedro; Everton Ribeiro; Fred volante; Taison; Cássio; Geromel; Miranda
7: Zizinho; Ademir|Ademir de Menezes; Barbosa; Leônidas|Leônidas da Silva; Amarildo; Pepe; Félix; Brito; Piazza|Wilson Piazza; Everaldo; Paulo César Caju; Dirceu; Toninho Cerezo|Cerezo; Éder; Serginho Chulapa; Alemão; Müller|Muller; Valdo; Ricardo Gomes; Mozer; Josimar; Edinho; Cicinho; Gilberto; Kléber; Michel Bastos; Grafite; Nilmar; Henrique; Fagner; Weverton; Dida; Rogério Ceni; Belletti; Vampeta; Edílson|Edilson; Luizão; Ricardinho; Juninho Paulista; Zé Roberto; Júnior Baiano; Doriva; Viola; Ronaldão; Zetti; Gilmar Rinaldi; Paulo Sérgio; Casagrande; Mauro Galvão; Tita; Reinaldo; Roberto Dinamite; Zé Maria; Nelinho; Rodrigo Caio; Gabriel Barbosa|Gabigol
8: Friedenreich; Domingos da Guia; Tim; Jair Rosa Pinto; Bauer; Baltazar; Castilho; Pinheiro; Julinho Botelho|Julinho; Orlando Peçanha|Orlando; De Sordi; Mazzola|José Altafini; Dino Sani; Zózimo; Jair Marinho; Altair; Zequinha; Coutinho do Santos; Jurandir; Mengálvio; Fontana; Marco Antônio; Luís Pereira; Marinho Chagas; Valdomiro; Leivinha; Mirandinha; Edu; Ado; Batista; Waldir Peres; Luizinho; Paulo Isidoro; Oscar zagueiro; Zé Sérgio; Elzo; Silas; Josué; Doni; Heurelho Gomes|Gomes; Anderson Polga; Gilberto Melo; Thiago Motta; Maxwell; Jefferson; Victor; Willian José
9: Preguinho; Araken; Fausto; Carvalho Leite; Patesko; Perácio; Romeu; Machado; Lopes; Batatais; Augusto; Juvenal; Bigode; Danilo Alvim; Friaça; Chico; Ely; Rodrigues; Índio; Humberto Tozzi; Maurinho; Dequinha; Pinga; Oreco; Moacir; Jair da Costa; Rogério; Joel Camargo; Dario|Dadá Maravilha; Baldochi; Zé Carlos; Paulo Cézar; Gil; Amaral; Abel; Jorge Mendonça; Chicão; Toninho
10: Waldemar de Brito; Teleco; Niginho; Plácido; Jaú; Martim Silveira; Zezé Procópio; Afonsinho; Nena; Adãozinho; Noronha
`,
    },
  ],
};

export const novelas: ThemeDef = {
  id: 'novelas',
  name: 'Novelas e TV',
  questions: [
    {
      id: 'novela',
      t: 'Uma novela da Globo',
      a: `
1: Avenida Brasil; O Clone
2: Mulheres de Areia; Laços de Família; Senhora do Destino; Terra Nostra; Por Amor; A Favorita; Pantanal
3: Vale Tudo; Roque Santeiro; O Rei do Gado; Explode Coração; América; Caminho das Índias; Fina Estampa; Cheias de Charme; Amor à Vida; Belíssima; Celebridade; Mulheres Apaixonadas; Malhação; Chocolate com Pimenta; Da Cor do Pecado; Alma Gêmea; O Cravo e a Rosa
4: Tieta; A Próxima Vítima; Renascer; O Outro Lado do Paraíso; A Força do Querer; Totalmente Demais; Verdades Secretas; Império; Salve Jorge; Passione; Paraíso Tropical; Páginas da Vida; Cobras & Lagartos|Cobras e Lagartos; Kubanacan; Esperança; O Beijo do Vampiro; Uga Uga; Terra e Paixão; Travessia; Vai na Fé; Amor de Mãe; Bom Sucesso; Segundo Sol; Mania de Você
5: Escrava Isaura; Selva de Pedra; Irmãos Coragem; Dancin' Days|Dancin Days; Gabriela; Guerra dos Sexos; Rainha da Sucata; Top Model; O Dono do Mundo; Barriga de Aluguel; Fera Ferida; A Indomada; Torre de Babel; Suave Veneno; Andando nas Nuvens; Força de um Desejo; Porto dos Milagres; Desejos de Mulher; Coração de Estudante; O Profeta; Duas Caras; Insensato Coração; Lado a Lado; Joia Rara; Babilônia; A Regra do Jogo; Velho Chico; A Lei do Amor; O Sétimo Guardião; A Dona do Pedaço; Um Lugar ao Sol; Garota do Momento; Família é Tudo; Volta por Cima
6: O Bem-Amado; Pecado Capital; Saramandaia; O Astro; Água Viva; Baila Comigo; Brilhante; Louco Amor; Sassaricando; Bebê a Bordo; Mandala; O Salvador da Pátria; Pedra sobre Pedra; Deus nos Acuda; Quatro por Quatro; Cara & Coroa|Cara e Coroa; História de Amor; Zazá; Corpo Dourado; Era uma Vez; Meu Bem Querer; Vila Madalena; Estrela-Guia; As Filhas da Mãe; Agora É que São Elas; Começar de Novo; Bang Bang; Pé na Jaca; Sete Pecados; Beleza Pura; Negócio da China; Três Irmãs; Caras & Bocas|Caras e Bocas; Viver a Vida; Tempos Modernos; Ti Ti Ti; Morde & Assopra|Morde e Assopra; Aquele Beijo; Cordel Encantado; A Vida da Gente; Sangue Bom; Além do Horizonte; Geração Brasil; Boogie Oogie; I Love Paraisópolis; Haja Coração; Rock Story; Novo Mundo; Deus Salve o Rei; Orgulho e Paixão; O Tempo Não Para; Verão 90; Éramos Seis; Nos Tempos do Imperador; Quanto Mais Vida, Melhor; Cara e Coragem; Mar do Sertão; Amor Perfeito; Fuzuê; Elas por Elas; No Rancho Fundo
7: O Casarão; Escalada; Os Gigantes; Pai Herói; Marron Glacê; Plumas e Paetês; Ciranda de Pedra; Final Feliz; Champagne; Partido Alto; Corpo a Corpo; Hipertensão; Sinhá Moça; O Outro; Fera Radical; Que Rei Sou Eu; Lua Cheia de Amor; Vamp; Felicidade; Despedida de Solteiro; Olho no Olho; Sonho Meu; Tropicaliente; Pátria Minha; A Viagem; Salsa e Merengue; Anjo Mau; Desejo Proibido; Eterna Magia; Cama de Gato; Escrito nas Estrelas; Araguaia; Amor Eterno Amor; Flor do Caribe; Em Família; Sete Vidas; Além do Tempo; Sol Nascente; Tempo de Amar; Espelho da Vida; Órfãos da Terra; Cabocla
8: Véu de Noiva; Minha Doce Namorada; Uma Rosa com Amor; O Primeiro Amor; Cavalo de Aço; O Espigão; Fogo sobre Terra; Duas Vidas; Dona Xepa; Sem Lenço, sem Documento; Te Contei; Feijão Maravilha; Coração Alado; Chega Mais; Jogo da Vida; Paraíso; Voltei pra Você; Livre para Voar; Vereda Tropical; De Quina pra Lua; Roda de Fogo; Direito de Amar; Bambolê; Vida Nova; Pacto de Sangue; Gente Fina; Mico Preto; Meu Bem, Meu Mal; Perigosas Peruas; O Fim do Mundo; Um Anjo Caiu do Céu; Sabor da Paixão; Como uma Onda
9: Verão Vermelho; A Cabana do Pai Tomás; Assim na Terra como no Céu; Bandeira 2; O Bofe; Carinhoso; Supermanoela; Corrida do Ouro; Bravo; O Grito; Locomotivas; À Sombra dos Laranjais; Nina; Sinal de Alerta; Gina; Maria, Maria; Memórias de Amor; Olhai os Lírios do Campo; Marina; As Três Marias; Terras do Sem-Fim; Sol de Verão; Pão Pão, Beijo Beijo; Eu Prometo; Amor com Amor se Paga; Transas e Caretas; Cambalacho; Brega & Chique|Brega e Chique
10: Sangue e Areia; A Rainha Louca; O Sheik de Agadir; Anastácia, a Mulher sem Destino|Anastácia; O Homem Proibido; A Ponte dos Suspiros; Rosa Rebelde; A Grande Mentira; Passo dos Ventos; A Última Valsa; Rosa dos Ventos; Os Ossos do Barão
`,
    },
    {
      id: 'apresentador',
      t: 'Um apresentador ou apresentadora de TV brasileiro',
      a: `
1: Silvio Santos; Faustão|Fausto Silva
2: Xuxa; Luciano Huck|Huck; Gugu|Gugu Liberato; Ana Maria Braga; Fátima Bernardes; William Bonner|Bonner
3: Hebe|Hebe Camargo; Chacrinha; Ratinho|Carlos Massa; Raul Gil; Angélica; Eliana; Rodrigo Faro; Marcos Mion|Mion; Datena|José Luiz Datena; Galvão Bueno|Galvão; Serginho Groisman; Jô Soares|Jô; Tiago Leifert|Leifert; Pedro Bial|Bial
4: Celso Portiolli; Danilo Gentili; Fábio Porchat|Porchat; Sabrina Sato; Ana Hickmann; Patrícia Abravanel; Luciana Gimenez; Maísa; Tadeu Schmidt; Marcelo Rezende; Glória Maria; Sérgio Chapelin; Cid Moreira; Renata Vasconcellos; Sandra Annenberg; Zeca Camargo; Regina Casé; Adriane Galisteu|Galisteu; Mara Maravilha; Carla Perez
5: Silvio Luiz; Milton Neves; Craque Neto|Neto; Cléber Machado; Luís Roberto; Mariana Godoy; Marília Gabriela; Sônia Abrão; Leão Lobo; Otávio Mesquita; João Kléber; Gilberto Barros; Netinho de Paula; Amaury Jr; Ronnie Von; Marcelo Tas; Rafinha Bastos; Patrícia Poeta; Evaristo Costa; Maju Coutinho|Maju; César Tralli; Ana Furtado; Ticiane Pinheiro; Rodrigo Bocardi; Tatá Werneck; Ivete Sangalo
6: Bolinha; Flávio Cavalcanti; Moacyr Franco; Barros de Alencar; Sérgio Mallandro|Mallandro; Clodovil; Márcia Goldschmidt; Cátia Fonseca; Edu Guedes; Celso Russomanno; Wagner Montes; Fabíola Reipert; Geraldo Luís; Britto Júnior; Cesar Filho; Astrid Fontenelle; Fernanda Lima; Monica Iozzi; Paulo Vieira; Rafa Brites; Ana Clara; Rita Batista; Carlos Alberto de Nóbrega|Carlos Alberto; Tom Cavalcante
7: Ary Barroso; Rolando Boldrin|Boldrin; Inezita Barroso; Goulart de Andrade; Ana Paula Padrão; Leilane Neubarth; Lillian Witte Fibe; Boris Casoy; Joelmir Beting; Heródoto Barbeiro; Ricardo Boechat|Boechat; Paulo Henrique Amorim; Carlos Nascimento; Chico Pinheiro; Renata Ceribelli; Poliana Abritta; Ernesto Paglia; Sônia Bridi; Caco Barcellos; Luciano do Valle; Osmar Santos; Silvia Poppovic; Leda Nagle; Claudete Troiano; Ione Borges
8: Bozo; Vovó Mafalda; Simony; Jackeline Petkovic; Blota Júnior; J. Silvestre; Carlos Imperial; Aírton Rodrigues; Lolita Rodrigues; Ney Gonçalves Dias; Juarez Soares; Fiori Gigliotti; Hilton Gomes; Raul Longras
9: Murilo Néri; Heron Domingues; Gontijo Teodoro; Jacinto Figueira Júnior|Homem do Sapato Branco; Pedro de Lara; Aracy de Almeida; Elke Maravilha; Abelardo Figueiredo; Silveira Sampaio
10: Celso Teixeira; Zé Fernandes; Sargentelli|Oswaldo Sargentelli; Augusto Cesar Vannucci; Walter Forster
`,
    },
  ],
};
