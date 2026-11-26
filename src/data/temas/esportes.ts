import type { ThemeDef } from '../../types';

export const esportes: ThemeDef = {
  id: 'esportes',
  name: 'Esportes',
  questions: [
    {
      // esportes e modalidades que estão ou já estiveram nos Jogos Olímpicos (verão e inverno), segundo o COI
      id: 'olimpico',
      t: 'Um esporte olímpico',
      r: 'de verão ou de inverno, atual ou do passado',
      a: `
1: Futebol; Natação; Vôlei|Voleibol
2: Basquete|Basquetebol; Atletismo; Ginástica|Ginástica artística|Ginástica olímpica; Judô
3: Tênis; Handebol; Skate; Surfe|Surf; Boxe; Vôlei de praia; Ciclismo
4: Tênis de mesa|Pingue-pongue|Ping pong; Hipismo; Esgrima; Remo; Canoagem; Levantamento de peso|Halterofilismo; Taekwondo; Luta olímpica|Luta livre|Wrestling|Luta greco-romana; Saltos ornamentais; Tiro com arco|Arco e flecha; Golfe|Golf; Ginástica rítmica; Polo aquático
5: Vela|Iatismo; Triatlo|Triatlon|Triathlon; Pentatlo moderno|Pentatlo; Hóquei sobre grama|Hóquei de campo; Badminton; Rúgbi|Rugby|Rúgbi de sete; Tiro esportivo|Tiro; Escalada esportiva|Escalada; Breaking|Breakdance; Nado artístico|Nado sincronizado; Trampolim|Ginástica de trampolim|Cama elástica; Maratona aquática; Caratê|Karatê; Beisebol|Baseball; Softbol; Maratona; Esqui|Esqui alpino; Snowboard; Patinação artística|Patinação no gelo; Hóquei no gelo|Hóquei
6: BMX; Mountain bike|Ciclismo de montanha; Ciclismo de pista; Canoagem slalom; Salto em distância; Salto com vara; Salto em altura; Arremesso de peso; Lançamento de dardo; Decatlo; Heptatlo; Curling; Bobsled|Bobsleigh|Trenó; Patinação de velocidade; Críquete|Cricket; Lacrosse; Squash; Flag football|Futebol americano de bandeira
7: Basquete 3x3|3x3; Marcha atlética; Lançamento de martelo; Lançamento de disco; Corrida com obstáculos; Salto triplo; Luge; Skeleton; Biatlo|Biatlon; Salto de esqui|Saltos de esqui; Esqui cross-country|Esqui de fundo; Combinado nórdico; Esqui estilo livre|Freestyle; Patinação de velocidade em pista curta|Short track; Polo|Polo a cavalo; Cabo de guerra
8: Pelota basca; Jeu de paume; Rackets; Roque; Croquet|Croqué; Motonáutica; Esqui-alpinismo; Montanhismo|Alpinismo; Natação com obstáculos; Tiro ao pombo; Patinação sobre rodas|Hóquei sobre patins
`,
    },
    {
      // todos os brasileiros que largaram ou se inscreveram em um GP de Fórmula 1 (até 2025)
      id: 'f1',
      t: 'Um piloto brasileiro de Fórmula 1',
      a: `
1: Ayrton Senna|Senna
2: Nelson Piquet|Piquet; Rubens Barrichello|Barrichello|Rubinho
3: Emerson Fittipaldi|Emerson; Felipe Massa|Massa
4: Gabriel Bortoleto|Bortoleto
5: Felipe Nasr|Nasr; Bruno Senna; Nelsinho Piquet|Nelson Piquet Jr|Nelson Piquet Júnior
6: Christian Fittipaldi; Pedro Paulo Diniz|Pedro Diniz; Ricardo Zonta|Zonta; Lucas di Grassi|Di Grassi; Wilson Fittipaldi|Wilsinho Fittipaldi; Pietro Fittipaldi; Cristiano da Matta|Da Matta; Antônio Pizzonia|Pizzonia; Rafael Câmara|Rafa Câmara|Câmara
7: Roberto Moreno|Roberto Pupo Moreno; Maurício Gugelmin|Gugelmin; Raul Boesel|Boesel; José Carlos Pace|Carlos Pace|Moco; Ingo Hoffmann; Chico Serra; Luciano Burti|Burti; Enrique Bernoldi|Bernoldi; Tarso Marques; Ricardo Rosset|Rosset
8: Alex Dias Ribeiro|Alex Ribeiro; Chico Landi; Luiz Pereira Bueno|Luiz Bueno
9: Fritz d'Orey; Nano da Silva Ramos|Hernando da Silva Ramos; Gino Bianco
`,
    },
    {
      // campeões mundiais de pilotos da Fórmula 1, de 1950 a 2025
      id: 'campeaof1',
      t: 'Um piloto campeão mundial de Fórmula 1',
      a: `
1: Ayrton Senna|Senna
2: Michael Schumacher|Schumacher; Lewis Hamilton|Hamilton
3: Nelson Piquet|Piquet; Max Verstappen|Verstappen; Emerson Fittipaldi|Fittipaldi
4: Alain Prost|Prost; Fernando Alonso|Alonso; Sebastian Vettel|Vettel; Niki Lauda|Lauda
5: Kimi Räikkönen|Kimi Raikkonen|Raikkonen; Lando Norris|Norris; Nigel Mansell|Mansell; Mika Häkkinen|Mika Hakkinen|Hakkinen; Jenson Button|Button; Nico Rosberg|Rosberg; Kimi Antonelli|Andrea Kimi Antonelli|Antonelli
6: Juan Manuel Fangio|Fangio; Jacques Villeneuve|Villeneuve; Damon Hill; James Hunt|Hunt; Jackie Stewart|Stewart
7: Jim Clark; Graham Hill; Alberto Ascari|Ascari; Jack Brabham|Brabham; Mario Andretti|Andretti; Keke Rosberg
8: Nino Farina|Giuseppe Farina|Farina; Mike Hawthorn|Hawthorn; Phil Hill; John Surtees|Surtees; Denny Hulme|Hulme; Jochen Rindt|Rindt; Jody Scheckter|Scheckter; Alan Jones
`,
    },
  ],
};
