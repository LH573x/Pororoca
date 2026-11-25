import type { QuestionDef, ThemeDef } from '../../types';
import { PAISES_INGLES, PAISES_MUNDO, PAISES_OTAN, PAISES_SEM_MAR, POKEMON_GEN1, CAMPEOES_MUNDO } from '../gerado/mais';

/**
 * Perguntas novas (a partir do dia 2). `desde: 2` mantém a rodada do dia 1 igual para quem já jogou.
 * Todas têm um universo fechado, com fonte citada em cima de cada uma.
 */
const DESDE = 2;

/** Aceita também o número em algarismos: "Henrique VIII" vale "Henrique 8". */
function comNumeros(src: string): string {
  const ROM: Record<string, number> = { I: 1, V: 5, X: 10, L: 50 };
  const toInt = (r: string) => {
    let n = 0;
    for (let i = 0; i < r.length; i++) {
      const v = ROM[r[i]], next = ROM[r[i + 1]] ?? 0;
      n += v < next ? -v : v;
    }
    return n;
  };
  return src
    .split('\n')
    .map((line) => {
      const m = line.match(/^(\s*\d+\s*:)(.*)$/);
      if (!m) return line;
      const entries = m[2].split(';').map((e) => {
        const names = e.split('|').map((s) => s.trim());
        const extra: string[] = [];
        for (const n of names) {
          const r = n.match(/^(.*\S)\s+([IVXL]+)$/);
          if (r) extra.push(`${r[1]} ${toInt(r[2])}`);
        }
        return [...names, ...extra.filter((x) => !names.includes(x))].join('|');
      });
      return `${m[1]} ${entries.join('; ')}`;
    })
    .join('\n');
}

const novas = (qs: QuestionDef[]) => qs.map((q) => ({ ...q, desde: DESDE }));

// ---------------------------------------------------------------- mundo afora
export const mundo: ThemeDef = {
  id: 'mundo',
  name: 'Mundo afora',
  questions: novas([
    {
      // os 193 membros da ONU, mais Vaticano, Palestina, Kosovo e Taiwan; partes do Reino Unido também valem
      id: 'pais',
      t: 'Um país do mundo',
      r: 'que não seja o Brasil',
      x: 'Brasil',
      a: PAISES_MUNDO,
    },
    {
      // países sem litoral (dado "landlocked" do pacote world-countries, conferido com a lista da ONU)
      id: 'semmar',
      t: 'Um país sem saída para o mar',
      a: PAISES_SEM_MAR,
    },
    {
      // países em que o inglês é língua oficial (dado "languages" do pacote world-countries)
      id: 'ingles',
      t: 'Um país onde o inglês é língua oficial',
      a: PAISES_INGLES,
    },
    {
      // os 32 membros da OTAN (Suécia entrou em 2024)
      id: 'otan',
      t: 'Um país membro da OTAN',
      a: PAISES_OTAN,
    },
    {
      // capitais dos países da Europa (os que ficam em dois continentes também valem) e das partes do Reino Unido
      id: 'capeuropa',
      t: 'A capital de um país da Europa',
      a: `
1: Lisboa; Paris; Londres; Roma
2: Madri|Madrid; Berlim
3: Moscou; Amsterdã|Amsterdam; Atenas; Bruxelas; Viena
4: Dublin; Estocolmo; Oslo; Copenhague; Varsóvia; Praga; Budapeste
5: Berna; Helsinque; Kiev|Kyiv; Edimburgo; Ancara
6: Zagreb; Belgrado; Bucareste; Sófia; Reykjavík|Reykjavik|Reiquiavique; Luxemburgo; Mônaco|Mónaco; Vaticano|Cidade do Vaticano; Belfast
7: Bratislava; Liubliana|Ljubljana; Tallinn|Talim; Riga; Vilnius; Minsk; Sarajevo; Valeta|Valletta; San Marino|São Marinho; Nicósia; Cardiff; Baku
8: Tirana; Podgorica; Escópia|Skopje; Chișinău|Chisinau|Quixinau; Andorra-a-Velha|Andorra la Vella; Vaduz; Pristina; Tbilisi|Tiflis; Ierevan|Yerevan|Erevan; Astana
`,
    },
    {
      // capitais dos 35 países das Américas (a Bolívia tem duas: Sucre e La Paz)
      id: 'capamericas',
      t: 'A capital de um país das Américas',
      r: 'que não seja Brasília',
      x: 'Brasília',
      a: `
1: Buenos Aires; Washington|Washington D.C.|Washington DC
2: Santiago|Santiago do Chile; Montevidéu|Montevideo; Lima; Bogotá; Assunção|Asunción; Cidade do México|México
3: Ottawa; Caracas; Quito; La Paz; Havana
4: Cidade do Panamá|Panamá
5: San José; Kingston; Porto Príncipe|Port-au-Prince; Santo Domingo|São Domingos; Cidade da Guatemala|Guatemala
6: Tegucigalpa; Manágua; San Salvador; Nassau; Sucre
7: Belmopã|Belmopan; Georgetown; Paramaribo; Porto de Espanha|Port of Spain
8: Bridgetown
9: Castries; Roseau; Saint George's|St. George's; Kingstown; Basseterre; Saint John's|St. John's
`,
    },
    {
      // capitais dos países da Ásia (os que ficam em dois continentes também valem)
      id: 'capasia',
      t: 'A capital de um país da Ásia',
      a: `
1: Tóquio|Tokyo; Pequim|Beijing
2: Seul; Nova Délhi|Nova Deli|Délhi
3: Bangkok|Banguecoque; Jerusalém; Moscou
4: Abu Dhabi|Abu Dabi; Riad|Riade; Doha; Teerã|Teerão; Bagdá|Bagdade; Cabul; Pyongyang|Pionguiangue; Manila; Jacarta; Kuala Lumpur; Singapura|Cingapura; Hanói
5: Islamabad|Islamabade; Damasco; Beirute; Taipé|Taipei; Katmandu; Ancara
6: Amã; Daca|Dhaka; Colombo; Cidade do Kuwait|Kuwait; Ulan Bator|Ulaanbaatar; Phnom Penh|Pnom Pen
7: Manama; Mascate; Sanaã|Sana'a; Vientiane; Díli|Dili; Malé; Tashkent|Tasquente; Astana; Baku; Nicósia
8: Naypyidaw|Nepiedó; Bandar Seri Begawan; Thimphu|Timbu; Bishkek|Bisqueque; Duchambé|Dushanbe; Asgabate|Ashgabat; Tbilisi|Tiflis; Ierevan|Yerevan
9: Sri Jayawardenepura Kotte|Kotte; Nusantara
`,
    },
    {
      // os 50 estados dos EUA (o Distrito de Colúmbia não é estado)
      id: 'eua',
      t: 'Um estado dos Estados Unidos',
      a: `
1: Califórnia|California; Flórida|Florida; Texas; Nova York|New York
2: Havaí|Hawaii|Havai; Alasca|Alaska; Nevada; Washington; Massachusetts
3: Illinois; Nova Jersey|New Jersey; Michigan; Geórgia|Georgia; Arizona; Colorado; Ohio; Louisiana|Luisiana; Pensilvânia|Pennsylvania|Pensilvania; Utah
4: Tennessee; Kentucky; Carolina do Norte|North Carolina; Carolina do Sul|South Carolina; Virgínia|Virginia; Oregon; Minnesota; Wisconsin; Indiana; Missouri; Kansas; Oklahoma; Novo México|New Mexico; Alabama; Mississippi; Montana; Connecticut; Maryland
5: Iowa; Nebraska; Arkansas; Idaho; Wyoming; Maine; Vermont; New Hampshire|Nova Hampshire; Rhode Island; Delaware; Virgínia Ocidental|West Virginia; Dakota do Norte|North Dakota; Dakota do Sul|South Dakota
`,
    },
    {
      // os 31 estados do México e a Cidade do México
      id: 'mexico',
      t: 'Um estado do México',
      r: 'vale a Cidade do México',
      a: `
1: Cidade do México|Ciudad de México|CDMX|Distrito Federal
2: Quintana Roo; Jalisco; Iucatã|Yucatán|Yucatan
3: Baja California|Baixa Califórnia; Chihuahua; Oaxaca; Sonora; Nuevo León|Novo León; Veracruz; Guerrero; Chiapas; México|Estado do México
4: Baja California Sur|Baixa Califórnia do Sul; Sinaloa; Michoacán|Michoacan; Puebla; Tabasco; Tamaulipas; Coahuila; Durango; Guanajuato
5: Aguascalientes; Campeche; Colima; Hidalgo; Morelos; Nayarit; Querétaro|Queretaro; San Luis Potosí|San Luis Potosi; Tlaxcala; Zacatecas
`,
    },
    {
      // cidades-sede dos Jogos Olímpicos de verão e de inverno, de 1896 a 2034 (já escolhidas pelo COI)
      id: 'sede',
      t: 'Uma cidade que já sediou ou vai sediar as Olimpíadas',
      r: 'de verão ou de inverno',
      a: `
1: Rio de Janeiro|Rio
2: Paris; Londres; Tóquio|Tokyo; Pequim|Beijing; Los Angeles|LA; Atenas
3: Barcelona; Atlanta; Sydney|Sidney; Moscou; Seul; Cidade do México|México; Munique; Montreal; Roma; Berlim
4: Amsterdã|Amsterdam; Melbourne; Helsinque; Estocolmo; Antuérpia; Brisbane; Vancouver; Sochi; Turim; Milão; Salt Lake City|Salt Lake
5: St. Louis|Saint Louis; Lake Placid; Pyeongchang; Nagano; Lillehammer; Calgary; Sarajevo; Innsbruck; Sapporo; Grenoble; Albertville; Oslo; Cortina d'Ampezzo|Cortina
6: Chamonix; St. Moritz|Saint Moritz; Garmisch-Partenkirchen; Squaw Valley
`,
    },
    {
      // moedas oficiais em uso hoje (ISO 4217); o nome genérico vale para todos os países que a usam
      id: 'moeda',
      t: 'Uma moeda em uso hoje em algum país',
      r: 'que não seja o real',
      x: 'Real',
      a: `
1: Dólar
2: Euro; Peso; Libra|Libra esterlina
3: Iene|Yen; Yuan|Iuan|Renminbi; Rublo; Franco|Franco suíço|Franco CFA; Rupia
4: Lira; Coroa; Won; Rand; Bolívar; Guarani; Sol|Novo sol; Boliviano; Dinar; Rial|Riyal|Reale; Shekel|Novo shekel|Siclo
5: Kwanza; Metical; Escudo|Escudo cabo-verdiano; Dirham; Zloty|Złoty; Florim; Baht; Dong; Colón|Colon; Córdoba; Quetzal; Lempira; Balboa
6: Forint; Leu; Lev; Hryvnia|Grívnia|Grivna; Naira; Cedi; Xelim; Birr; Dobra; Ringgit; Taka; Gourde; Lek; Denar; Marco conversível; Afegane|Afghani; Manat; Tenge; Lari; Dram; Som|Sum; Somoni; Tugrik|Tögrög
7: Kip; Riel; Kyat; Ngultrum; Kina; Vatu; Tala; Paanga|Pa'anga; Rufiyaa; Nakfa; Ariary; Kwacha; Pula; Loti; Lilangeni; Dalasi; Leone; Ouguiya
`,
    },
  ]),
};

// ---------------------------------------------------------------- esportes (perguntas novas)
export const esportesNovas: QuestionDef[] = novas([
  {
    // as 30 franquias da NBA na temporada 2025-26 (nomes antigos da mesma franquia também valem)
    id: 'nba',
    t: 'Um time da NBA',
    a: `
1: Los Angeles Lakers|Lakers; Chicago Bulls|Bulls
2: Boston Celtics|Celtics; Golden State Warriors|Warriors; Miami Heat|Heat
3: New York Knicks|Knicks; San Antonio Spurs|Spurs; Houston Rockets|Rockets; Cleveland Cavaliers|Cavaliers|Cavs; Orlando Magic|Magic; Dallas Mavericks|Mavericks|Mavs; Phoenix Suns|Suns; Brooklyn Nets|Nets|New Jersey Nets; Toronto Raptors|Raptors
4: Philadelphia 76ers|76ers|Sixers; Detroit Pistons|Pistons; Utah Jazz|Jazz; Denver Nuggets|Nuggets; Milwaukee Bucks|Bucks; Oklahoma City Thunder|Thunder|OKC|Seattle SuperSonics|SuperSonics|Sonics; Los Angeles Clippers|LA Clippers|Clippers; Atlanta Hawks|Hawks; Sacramento Kings|Kings; Indiana Pacers|Pacers; Portland Trail Blazers|Trail Blazers|Blazers
5: Memphis Grizzlies|Grizzlies|Vancouver Grizzlies; Minnesota Timberwolves|Timberwolves|Wolves; New Orleans Pelicans|Pelicans|New Orleans Hornets; Charlotte Hornets|Hornets|Charlotte Bobcats|Bobcats; Washington Wizards|Wizards|Washington Bullets|Bullets
`,
  },
  {
    // as 32 franquias da NFL na temporada 2025
    id: 'nfl',
    t: 'Um time da NFL (futebol americano)',
    a: `
1: New England Patriots|Patriots; Kansas City Chiefs|Chiefs; Dallas Cowboys|Cowboys
2: Green Bay Packers|Packers; Pittsburgh Steelers|Steelers; San Francisco 49ers|49ers|Niners; Tampa Bay Buccaneers|Buccaneers|Bucs; Philadelphia Eagles|Eagles
3: New York Giants|Giants; Miami Dolphins|Dolphins; Las Vegas Raiders|Raiders|Oakland Raiders; Denver Broncos|Broncos; Seattle Seahawks|Seahawks; Baltimore Ravens|Ravens; Chicago Bears|Bears; New Orleans Saints|Saints; Buffalo Bills|Bills
4: New York Jets|Jets; Los Angeles Rams|Rams|St. Louis Rams; Minnesota Vikings|Vikings; Detroit Lions|Lions; Atlanta Falcons|Falcons; Indianapolis Colts|Colts; Cincinnati Bengals|Bengals; Los Angeles Chargers|Chargers|San Diego Chargers; Washington Commanders|Commanders|Washington Redskins|Redskins
5: Arizona Cardinals|Cardinals; Carolina Panthers|Panthers; Cleveland Browns|Browns; Houston Texans|Texans; Jacksonville Jaguars|Jaguars; Tennessee Titans|Titans
`,
  },
  {
    // construtores que venceram ao menos um GP de Fórmula 1 (1950–2025), incluindo as 500 Milhas de Indianápolis de 1950–1960
    id: 'equipef1',
    t: 'Uma equipe que já venceu um GP de Fórmula 1',
    a: `
1: Ferrari
2: McLaren; Williams; Red Bull|Red Bull Racing; Mercedes
3: Lotus; Renault; Benetton
4: Brabham; Tyrrell; Brawn GP|Brawn; Jordan; Honda; Alpine
5: Toro Rosso; AlphaTauri; Racing Point; BMW Sauber|BMW; Ligier; Maserati; Alfa Romeo; Cooper; Stewart; March; BRM
6: Matra; Porsche; Vanwall; Wolf; Shadow; Hesketh; Penske; Eagle
7: Kurtis Kraft; Kuzma; Epperly; Watson; Salih
`,
  },
  {
    // países que já receberam uma corrida do Mundial de Fórmula 1 (1950–2025)
    id: 'gpf1',
    t: 'Um país que já recebeu um GP de Fórmula 1',
    r: 'que não seja o Brasil',
    x: 'Brasil',
    a: `
1: Mônaco|Mónaco; Itália; Inglaterra|Reino Unido|Grã-Bretanha
2: Japão; Estados Unidos|EUA; Alemanha; Espanha; Bélgica; Canadá; Austrália; Argentina; México; França
3: Hungria; Áustria; Holanda|Países Baixos; Portugal; China; Singapura|Cingapura; Emirados Árabes Unidos|Emirados Árabes|Abu Dhabi; Bahrein|Barein; Arábia Saudita; Catar|Qatar; Malásia; Azerbaijão|Baku
4: Turquia; Rússia; Coreia do Sul|Coréia do Sul; Índia; África do Sul; Suécia; Suíça
5: Marrocos
`,
  },
  {
    // todos que já foram número 1 do ranking de simples da ATP (desde 1973) ou da WTA (desde 1975), até 2025
    id: 'tenista',
    t: 'Um tenista que já foi número 1 do mundo',
    r: 'ranking de simples da ATP ou da WTA',
    a: `
1: Guga|Gustavo Kuerten|Kuerten; Roger Federer|Federer; Rafael Nadal|Nadal|Rafa Nadal
2: Novak Djokovic|Djokovic; Serena Williams|Serena; Andre Agassi|Agassi; Pete Sampras|Sampras
3: Carlos Alcaraz|Alcaraz; Jannik Sinner|Sinner; Andy Murray|Murray; Venus Williams|Venus; Maria Sharapova|Sharapova; Steffi Graf|Graf; Martina Navratilova|Navratilova
4: Björn Borg|Bjorn Borg|Borg; John McEnroe|McEnroe; Jimmy Connors|Connors; Ivan Lendl|Lendl; Boris Becker|Becker; Iga Swiatek|Swiatek|Świątek; Aryna Sabalenka|Sabalenka; Monica Seles|Seles; Martina Hingis|Hingis; Chris Evert|Evert
5: Lleyton Hewitt|Hewitt; Andy Roddick|Roddick; Marat Safin|Safin; Daniil Medvedev|Medvedev; Stefan Edberg|Edberg; Mats Wilander|Wilander; Jim Courier|Courier; Kim Clijsters|Clijsters; Justine Henin|Henin; Naomi Osaka|Osaka; Ashleigh Barty|Ash Barty|Barty; Caroline Wozniacki|Wozniacki; Simona Halep|Halep; Lindsay Davenport|Davenport; Arantxa Sánchez Vicario|Sánchez Vicario|Arantxa
6: Juan Carlos Ferrero|Ferrero; Carlos Moyá|Moyá|Moya; Marcelo Ríos|Ríos|Rios; Thomas Muster|Muster; Yevgeny Kafelnikov|Kafelnikov; Patrick Rafter|Rafter; Ilie Năstase|Ilie Nastase|Nastase; John Newcombe|Newcombe; Amélie Mauresmo|Mauresmo; Jennifer Capriati|Capriati; Ana Ivanovic|Ivanovic; Victoria Azarenka|Azarenka; Garbiñe Muguruza|Muguruza; Angelique Kerber|Kerber; Karolína Plíšková|Karolina Pliskova|Pliskova
7: Tracy Austin; Evonne Goolagong|Goolagong; Jelena Janković|Jelena Jankovic|Jankovic; Dinara Safina|Safina
`,
  },
]);

// ---------------------------------------------------------------- futebol (perguntas novas)
export const futebolNovas: QuestionDef[] = novas([
  {
    // Bola de Ouro (desde 1956, e a feminina desde 2018), Melhor do Mundo da FIFA (1991–2009 e 2001–2015 feminino) e The Best (desde 2016), até 2025
    id: 'melhor',
    t: 'Um jogador ou jogadora eleito melhor do mundo',
    r: 'Bola de Ouro ou prêmio da FIFA',
    a: `
1: Pelé|Pele; Ronaldo|Ronaldo Fenômeno|Fenômeno; Ronaldinho|Ronaldinho Gaúcho|R10; Messi|Lionel Messi; Cristiano Ronaldo|CR7
2: Kaká; Romário; Rivaldo; Marta; Vinícius Júnior|Vini Jr|Vinicius Jr|Vinícius
3: Zidane|Zinedine Zidane; Luka Modrić|Modric|Modrić; Lewandowski|Robert Lewandowski; Benzema|Karim Benzema; Roberto Baggio|Baggio
4: Figo|Luís Figo; Cruyff|Johan Cruyff; Beckenbauer|Franz Beckenbauer; Platini|Michel Platini; Van Basten|Marco van Basten; Rodri; Ousmane Dembélé|Dembélé; Eusébio; Cannavaro|Fabio Cannavaro; Shevchenko|Andriy Shevchenko
5: Di Stéfano|Alfredo Di Stéfano; Gerd Müller|Gerd Muller; George Best; Bobby Charlton; Matthäus|Lothar Matthäus|Matthaus; Gullit|Ruud Gullit; George Weah|Weah; Michael Owen|Owen; Nedvěd|Pavel Nedved|Nedved; Rummenigge|Karl-Heinz Rummenigge; Paolo Rossi; Aitana Bonmatí|Aitana|Bonmatí; Alexia Putellas|Putellas; Megan Rapinoe|Rapinoe; Mia Hamm
6: Lev Yashin|Yashin|Iashin; Stanley Matthews|Matthews; Kevin Keegan|Keegan; Denis Law; Gianni Rivera|Rivera; Jean-Pierre Papin|Papin; Matthias Sammer|Sammer; Igor Belanov|Belanov; Oleg Blokhin|Blokhin; Allan Simonsen|Simonsen; Raymond Kopa|Kopa; Luis Suárez Miramontes|Luis Suárez; Omar Sívori|Sívori|Sivori; Josef Masopust|Masopust; Birgit Prinz|Prinz; Homare Sawa|Sawa; Abby Wambach|Wambach; Carli Lloyd|Lloyd; Ada Hegerberg|Hegerberg; Lucy Bronze|Bronze; Lieke Martens|Martens; Nadine Angerer|Angerer; Nadine Kessler|Kessler
`,
  },
  {
    // todos os clubes que já jogaram a Premier League (1992-93 a 2025-26)
    id: 'premier',
    t: 'Um clube que já jogou a Premier League inglesa',
    a: `
1: Manchester United|Man United|Manchester Utd; Liverpool
2: Chelsea; Arsenal; Manchester City|Man City|City
3: Tottenham|Tottenham Hotspur|Spurs; Newcastle|Newcastle United; West Ham|West Ham United; Aston Villa; Everton; Leicester|Leicester City
4: Southampton; Fulham; Leeds|Leeds United; Wolverhampton|Wolverhampton Wanderers|Wolves; Crystal Palace; Brighton|Brighton & Hove Albion|Brighton and Hove Albion; Nottingham Forest; Brentford; Bournemouth|AFC Bournemouth; Blackburn|Blackburn Rovers; Sunderland
5: Middlesbrough; Watford; Burnley; Norwich|Norwich City; Sheffield United; Stoke|Stoke City; West Bromwich|West Brom|West Bromwich Albion; Bolton|Bolton Wanderers; Portsmouth; Ipswich|Ipswich Town; Swansea|Swansea City; Wigan|Wigan Athletic; Queens Park Rangers|QPR; Derby|Derby County; Hull|Hull City; Birmingham|Birmingham City; Luton|Luton Town; Wimbledon
6: Sheffield Wednesday; Charlton|Charlton Athletic; Coventry|Coventry City; Reading; Cardiff|Cardiff City; Huddersfield|Huddersfield Town; Blackpool; Bradford|Bradford City; Barnsley; Oldham|Oldham Athletic; Swindon|Swindon Town
`,
  },
  {
    // os 92 jogadores das convocações campeãs de 1958, 1962, 1970, 1994 e 2002 (listas da FIFA)
    id: 'campeao',
    t: 'Um jogador campeão da Copa do Mundo pela seleção',
    a: CAMPEOES_MUNDO,
  },
  {
    // campeões da Libertadores (1960–2025) e da Copa dos Campeões/Champions League (1956–2025)
    id: 'continental',
    t: 'Um clube campeão da Libertadores ou da Champions League',
    a: `
1: Flamengo; São Paulo|SPFC; Palmeiras; Real Madrid; Barcelona|Barça
2: Santos; Grêmio; Internacional|Inter; Corinthians; Boca Juniors|Boca; River Plate|River; Bayern|Bayern de Munique|Bayern Munique; Milan|AC Milan; Liverpool; Manchester United|Man United
3: Cruzeiro; Vasco|Vasco da Gama; Atlético Mineiro|Atlético-MG|Galo; Fluminense; Botafogo; Juventus; Inter de Milão|Internazionale; Chelsea; Ajax; Manchester City|Man City; Porto; Benfica; PSG|Paris Saint-Germain; Borussia Dortmund|Dortmund
4: Peñarol|Penarol; Nacional|Nacional do Uruguai; Independiente; Estudiantes; Racing; Olimpia; Colo-Colo; Atlético Nacional; LDU|LDU Quito|Liga de Quito; Vélez Sarsfield|Vélez; San Lorenzo; Argentinos Juniors; Once Caldas; Nottingham Forest; Celtic; Marseille|Olympique de Marseille; Aston Villa; Hamburgo|Hamburger SV|Hamburg; PSV|PSV Eindhoven; Feyenoord; Estrela Vermelha|Crvena Zvezda|Red Star; Steaua Bucareste|Steaua|FCSB
`,
  },
]);

// ---------------------------------------------------------------- história do mundo
export const mundial: ThemeDef = {
  id: 'mundial',
  name: 'História do mundo',
  questions: novas([
    {
      // os 45 presidentes dos EUA (Grover Cleveland e Donald Trump tiveram dois mandatos não seguidos)
      id: 'presidenteeua',
      t: 'Um presidente dos Estados Unidos',
      a: `
1: Donald Trump|Trump; Barack Obama|Obama; Abraham Lincoln|Lincoln
2: John F. Kennedy|John Kennedy|JFK|Kennedy; George W. Bush|Bush|George Bush; Joe Biden|Biden; George Washington
3: Bill Clinton|Clinton; Franklin D. Roosevelt|Franklin Roosevelt|FDR|Roosevelt; Ronald Reagan|Reagan; Richard Nixon|Nixon; George H. W. Bush|Bush pai; Thomas Jefferson|Jefferson
4: Jimmy Carter|Carter; Theodore Roosevelt|Teddy Roosevelt; Dwight D. Eisenhower|Eisenhower|Ike; Harry S. Truman|Harry Truman|Truman; Gerald Ford; Lyndon B. Johnson|Lyndon Johnson; Woodrow Wilson|Wilson
5: John Adams; James Madison|Madison; James Monroe|Monroe; Andrew Jackson|Jackson; Ulysses S. Grant|Ulysses Grant; Herbert Hoover|Hoover; John Quincy Adams
6: Calvin Coolidge|Coolidge; Warren G. Harding|Warren Harding|Harding; William Howard Taft|Taft; William McKinley|McKinley; Grover Cleveland|Cleveland; Andrew Johnson; James Buchanan|Buchanan; Martin Van Buren|Van Buren
7: William Henry Harrison; Benjamin Harrison; John Tyler|Tyler; James K. Polk|James Polk|Polk; Zachary Taylor; Millard Fillmore|Fillmore; Franklin Pierce|Pierce; Rutherford B. Hayes|Rutherford Hayes|Hayes; James A. Garfield|James Garfield|Garfield; Chester A. Arthur|Chester Arthur
`,
    },
    {
      // imperadores romanos de Augusto (27 a.C.) a Rômulo Augústulo (476), contando os do Oriente até Teodósio
      id: 'imperador',
      t: 'Um imperador romano',
      r: 'de Augusto até a queda do Império do Ocidente, em 476',
      a: comNumeros(`
2: Nero; Augusto|Otaviano|César Augusto; Calígula
3: Marco Aurélio; Constantino|Constantino I|Constantino, o Grande; Cláudio; Tibério; Adriano; Trajano; Cômodo
4: Diocleciano; Vespasiano; Tito; Domiciano; Caracala; Septímio Severo; Teodósio|Teodósio I|Teodósio, o Grande; Juliano|Juliano, o Apóstata; Rômulo Augústulo|Rômulo Augusto
5: Galba; Otão|Oto|Otho; Vitélio; Nerva; Antonino Pio; Lúcio Vero; Heliogábalo|Elagábalo; Alexandre Severo; Aureliano; Valeriano; Galiano; Constâncio II; Valentiniano I; Valente; Honório; Arcádio
6: Pertinax; Dídio Juliano; Geta; Macrino; Maximino Trácio|Maximino, o Trácio; Gordiano I; Gordiano II; Gordiano III; Pupieno; Balbino; Filipe, o Árabe|Filipe I|Filipe Árabe; Décio|Trajano Décio; Treboniano Galo; Cláudio II|Cláudio Gótico; Probo; Caro; Maximiano; Galério; Constâncio I|Constâncio Cloro; Maxêncio; Licínio; Constantino II; Constante; Joviano; Graciano; Valentiniano II; Valentiniano III; Júlio Nepos
7: Diadumeniano; Filipe II; Herênio Etrusco; Hostiliano; Volusiano; Emiliano; Quintilo; Tácito; Floriano; Carino; Numeriano; Severo II|Flávio Severo; Maximino Daia|Maximino II; Constâncio III; Petrônio Máximo; Avito; Majoriano; Líbio Severo; Antêmio; Olíbrio; Glicério
`),
    },
    {
      // reis e rainhas de Portugal, de D. Afonso Henriques (1139) a D. Manuel II (1910)
      id: 'reiportugal',
      t: 'Um rei ou rainha de Portugal',
      a: comNumeros(`
1: Pedro IV|Dom Pedro IV|D. Pedro IV|Pedro I do Brasil|Dom Pedro I; João VI|Dom João VI|D. João VI
2: Manuel I|Dom Manuel I|D. Manuel|Manuel, o Venturoso; Afonso Henriques|Afonso I|D. Afonso Henriques; Sebastião|Dom Sebastião|D. Sebastião|Sebastião I; Maria I|Dona Maria I|D. Maria I|Maria, a Louca
3: João I|Dom João I|D. João I; João II|Dom João II|D. João II; João III|Dom João III; Maria II|Dona Maria II|D. Maria II; Carlos I|Dom Carlos|D. Carlos; Manuel II|Dom Manuel II|D. Manuel II; José I|Dom José|D. José
4: Dinis|Dom Dinis|D. Dinis|Dinis I; João IV|Dom João IV|D. João IV; João V|Dom João V|D. João V; Pedro I|D. Pedro I de Portugal; Afonso V|Dom Afonso V; Duarte|Dom Duarte|D. Duarte|Duarte I; Henrique|Cardeal D. Henrique|Henrique I|Cardeal-Rei
5: Fernando I|Dom Fernando|D. Fernando; Afonso IV; Afonso VI; Pedro II|D. Pedro II de Portugal; Pedro III; Pedro V; Luís I|Dom Luís|D. Luís; Miguel I|Dom Miguel|D. Miguel; Filipe I|Filipe II da Espanha; Filipe II|Filipe III da Espanha; Filipe III|Filipe IV da Espanha
6: Sancho I; Sancho II; Afonso II; Afonso III
`),
    },
    {
      // monarcas da Inglaterra (desde 1066) e do Reino Unido, até Carlos III
      id: 'reiinglaterra',
      t: 'Um rei ou rainha da Inglaterra',
      r: 'desde 1066, valem os do Reino Unido',
      a: comNumeros(`
1: Elizabeth II|Elizabeth|Rainha Elizabeth|Isabel II|Elisabete II; Henrique VIII
2: Carlos III|Charles III|Rei Charles|Charles; Vitória|Rainha Vitória|Victoria; Elizabeth I|Isabel I|Elisabete I
3: Ricardo I|Ricardo Coração de Leão|Coração de Leão; João Sem Terra|João|João I; Guilherme I|Guilherme, o Conquistador|Guilherme o Conquistador; Jorge VI|George VI; Eduardo VIII|Edward VIII; Ricardo III|Richard III
4: Jorge III|George III; Maria I|Maria Tudor|Bloody Mary|Maria, a Sanguinária; Henrique V|Henry V; Jorge V|George V; Eduardo VII|Edward VII; Carlos I|Charles I; Eduardo I|Edward I
5: Henrique VII; Eduardo VI; Jaime I|James I; Carlos II|Charles II; Guilherme III|Guilherme de Orange; Maria II; Ana|Rainha Ana|Anne; Jorge I|George I; Jorge II|George II; Jorge IV|George IV; Guilherme IV|William IV; Henrique II; Eduardo III; Henrique VI; Eduardo IV
6: Guilherme II|Guilherme Rufo; Henrique I; Estêvão|Estêvão de Blois; Matilde|Imperatriz Matilde; Henrique III; Eduardo II; Ricardo II; Henrique IV; Eduardo V; Joana Grey|Jane Grey|Lady Jane Grey; Jaime II|James II
`),
    },
  ]),
};

// ---------------------------------------------------------------- telas (perguntas novas)
export const cinema: ThemeDef = {
  id: 'cinema',
  name: 'Cinema',
  questions: novas([
    {
      // os 37 filmes do Universo Cinematográfico Marvel lançados até 2025 (títulos no Brasil e originais)
      id: 'mcu',
      t: 'Um filme do Universo Cinematográfico Marvel',
      r: 'lançado no cinema até 2025',
      a: `
1: Vingadores: Ultimato|Ultimato|Avengers: Endgame|Endgame; Os Vingadores|Vingadores|The Avengers|Avengers
2: Vingadores: Guerra Infinita|Guerra Infinita|Infinity War; Homem de Ferro|Iron Man; Pantera Negra|Black Panther; Homem-Aranha: Sem Volta para Casa|Sem Volta para Casa|No Way Home; Capitão América: Guerra Civil|Guerra Civil|Civil War
3: Thor; Capitão América: O Primeiro Vingador|O Primeiro Vingador|The First Avenger; Guardiões da Galáxia|Guardians of the Galaxy; Vingadores: Era de Ultron|Era de Ultron|Age of Ultron; Homem-Formiga|Ant-Man; Doutor Estranho|Doctor Strange; Thor: Ragnarok|Ragnarok; Capitã Marvel|Captain Marvel; Homem-Aranha: De Volta ao Lar|De Volta ao Lar|Homecoming; Deadpool & Wolverine|Deadpool e Wolverine; Viúva Negra|Black Widow
4: Homem de Ferro 2|Iron Man 2; Homem de Ferro 3|Iron Man 3; Capitão América: O Soldado Invernal|O Soldado Invernal|Soldado Invernal|The Winter Soldier; Guardiões da Galáxia Vol. 2|Guardiões da Galáxia 2; Homem-Aranha: Longe de Casa|Longe de Casa|Far From Home; Thor: O Mundo Sombrio|O Mundo Sombrio|The Dark World; Shang-Chi e a Lenda dos Dez Anéis|Shang-Chi; Eternos|Eternals; Doutor Estranho no Multiverso da Loucura|Multiverso da Loucura; Thor: Amor e Trovão|Amor e Trovão|Love and Thunder; Pantera Negra: Wakanda para Sempre|Wakanda para Sempre|Wakanda Forever; Guardiões da Galáxia Vol. 3|Guardiões da Galáxia 3
5: O Incrível Hulk|Incrível Hulk|The Incredible Hulk; Homem-Formiga e a Vespa|Ant-Man and the Wasp; Homem-Formiga e a Vespa: Quantumania|Quantumania; As Marvels|The Marvels; Capitão América: Admirável Mundo Novo|Admirável Mundo Novo|Brave New World; Thunderbolts|Thunderbolts*; Quarteto Fantástico: Primeiros Passos|Primeiros Passos|The Fantastic Four: First Steps
`,
    },
    {
      // vencedores do Oscar de melhor filme, da 1ª (1929) à 97ª cerimônia (2025)
      id: 'oscar',
      t: 'Um filme que ganhou o Oscar de melhor filme',
      r: 'até a cerimônia de 2025',
      a: `
1: Titanic; O Poderoso Chefão|The Godfather|Poderoso Chefão
2: Forrest Gump|Forrest Gump: O Contador de Histórias; Gladiador|Gladiator; O Senhor dos Anéis: O Retorno do Rei|O Retorno do Rei|The Return of the King; ...E o Vento Levou|E o Vento Levou|Gone with the Wind; Parasita|Parasite; A Lista de Schindler|Schindler's List; Rocky|Rocky: Um Lutador; Oppenheimer
3: O Poderoso Chefão II|O Poderoso Chefão 2|The Godfather Part II; O Silêncio dos Inocentes|The Silence of the Lambs; Casablanca; Ben-Hur; Coração Valente|Braveheart; Beleza Americana|American Beauty; Uma Mente Brilhante|A Beautiful Mind; Os Infiltrados|The Departed; A Noviça Rebelde|The Sound of Music; Tudo em Todo o Lugar ao Mesmo Tempo|Everything Everywhere All at Once; Quem Quer Ser um Milionário?|Quem Quer Ser um Milionário|Slumdog Millionaire; Chicago
4: Um Estranho no Ninho|One Flew Over the Cuckoo's Nest; Rain Man|Rain Man: O Homem da Chuva; Dança com Lobos|Dances with Wolves; Os Imperdoáveis|Unforgiven; Shakespeare Apaixonado|Shakespeare in Love; Menina de Ouro|Million Dollar Baby; O Discurso do Rei|The King's Speech; O Artista|The Artist; Argo; 12 Anos de Escravidão|Doze Anos de Escravidão|12 Years a Slave; Birdman|Birdman ou (A Inesperada Virtude da Ignorância); Spotlight|Spotlight: Segredos Revelados; Moonlight|Moonlight: Sob a Luz do Luar; A Forma da Água|The Shape of Water; Green Book|Green Book: O Guia; Nomadland; No Ritmo do Coração|CODA; Anora; Amadeus; Platoon; Gandhi; Onde os Fracos Não Têm Vez|No Country for Old Men; Guerra ao Terror|The Hurt Locker; Crash|Crash: No Limite; O Paciente Inglês|The English Patient
5: Lawrence da Arábia|Lawrence of Arabia; A Ponte do Rio Kwai|The Bridge on the River Kwai; Amor, Sublime Amor|West Side Story; Minha Bela Dama|My Fair Lady; O Franco Atirador|The Deer Hunter; Kramer vs. Kramer|Kramer vs Kramer|Kramer x Kramer; Noivo Neurótico, Noiva Nervosa|Annie Hall; Conduzindo Miss Daisy|Driving Miss Daisy; O Último Imperador|The Last Emperor; Entre Dois Amores|Out of Africa; Laços de Ternura|Terms of Endearment; Carruagens de Fogo|Chariots of Fire; Gente como a Gente|Ordinary People; Golpe de Mestre|The Sting; Operação França|The French Connection; Perdidos na Noite|Midnight Cowboy; Oliver!|Oliver; No Calor da Noite|In the Heat of the Night; A Volta ao Mundo em 80 Dias|Around the World in 80 Days; Patton|Patton: Rebelde ou Herói?; Sindicato de Ladrões|On the Waterfront; A Um Passo da Eternidade|From Here to Eternity; Se Meu Apartamento Falasse|The Apartment; Gigi; A Malvada|All About Eve
6: O Homem que Não Vendia Sua Alma|A Man for All Seasons; As Aventuras de Tom Jones|Tom Jones; Marty; O Maior Espetáculo da Terra|The Greatest Show on Earth; Sinfonia de Paris|An American in Paris; A Grande Ilusão|All the King's Men; Hamlet; A Luz É para Todos|Gentleman's Agreement; Os Melhores Anos de Nossas Vidas|The Best Years of Our Lives; Farrapo Humano|The Lost Weekend; O Bom Pastor|Going My Way; Rosa de Esperança|Mrs. Miniver; Como Era Verde o Meu Vale|How Green Was My Valley; Rebecca|Rebecca, a Mulher Inesquecível; Do Mundo Nada Se Leva|You Can't Take It with You; A Vida de Emile Zola|The Life of Emile Zola; Ziegfeld: O Criador de Estrelas|The Great Ziegfeld|Ziegfeld; O Grande Motim|Mutiny on the Bounty; Aconteceu Naquela Noite|It Happened One Night; Cavalgada|Cavalcade; Grande Hotel|Grand Hotel; Cimarron; Sem Novidade no Front|Nada de Novo no Front|All Quiet on the Western Front; Melodia da Broadway|The Broadway Melody; Asas|Wings
`,
    },
    {
      // longas dirigidos por Steven Spielberg, de Encurralado (1971) a Os Fabelmans (2022)
      id: 'spielberg',
      t: 'Um filme dirigido por Steven Spielberg',
      a: `
1: Tubarão|Jaws; E.T. – O Extraterrestre|E.T.|ET|E.T. o Extraterrestre; Jurassic Park|Jurassic Park: O Parque dos Dinossauros
2: Os Caçadores da Arca Perdida|Indiana Jones e os Caçadores da Arca Perdida|Caçadores da Arca Perdida|Raiders of the Lost Ark; A Lista de Schindler|Schindler's List; O Resgate do Soldado Ryan|Resgate do Soldado Ryan|Saving Private Ryan
3: Indiana Jones e o Templo da Perdição|O Templo da Perdição|Templo da Perdição; Indiana Jones e a Última Cruzada|A Última Cruzada|Última Cruzada; Prenda-me Se For Capaz|Catch Me If You Can; Contatos Imediatos do Terceiro Grau|Contatos Imediatos; Hook – A Volta do Capitão Gancho|Hook|A Volta do Capitão Gancho; O Terminal|The Terminal; Guerra dos Mundos|War of the Worlds; Minority Report|Minority Report: A Nova Lei; O Mundo Perdido: Jurassic Park|O Mundo Perdido
4: A.I. – Inteligência Artificial|A.I.|Inteligência Artificial; Indiana Jones e o Reino da Caveira de Cristal|O Reino da Caveira de Cristal|Reino da Caveira de Cristal; Lincoln; Jogador Nº 1|Jogador Número 1|Ready Player One; A Cor Púrpura|The Color Purple; Cavalo de Guerra|War Horse; As Aventuras de Tintim|Tintim; Ponte dos Espiões|Bridge of Spies; Munique|Munich; Os Fabelmans|The Fabelmans; Amor, Sublime Amor|West Side Story; O Bom Gigante Amigo|BFG
5: Encurralado|Duel; Louca Escapada|The Sugarland Express; 1941 – Uma Guerra Muito Louca|1941; Império do Sol|Empire of the Sun; Além da Eternidade|Always; Amistad; The Post – A Guerra Secreta|The Post
`,
    },
  ]),
};

// ---------------------------------------------------------------- bichos (perguntas novas)
export const bichosNovas: QuestionDef[] = novas([
  {
    // raças reconhecidas por pelo menos uma das federações FIFe, TICA, CFA ou WCF
    id: 'gato',
    t: 'Uma raça de gato',
    r: 'vira-lata não vale',
    x: 'Vira-lata|SRD|Sem raça definida|Frajola',
    a: `
1: Persa; Siamês
2: Angorá|Angorá turco|Angorá Turco; Maine Coon; Sphynx|Esfinge|Gato sem pelo
3: Ragdoll; Himalaio; British Shorthair|Britânico de pelo curto|Britânico; Bengal|Bengala; Azul Russo; Siberiano; Exótico|Exotic|Exotic Shorthair|Persa Exótico; Sagrado da Birmânia|Birmanês|Birman
4: Scottish Fold; Norueguês da Floresta|Bosque da Noruega|Norwegian Forest; Savannah; Abissínio; Burmês|Burmese; Devon Rex; Cornish Rex; Munchkin; Chartreux; Bombaim|Bombay; Oriental|Oriental de pelo curto; Brasileiro de Pelo Curto|Pelo curto brasileiro
5: American Shorthair|Americano de pelo curto; American Curl; Selkirk Rex; Manx; Bobtail Japonês|Japanese Bobtail; Balinês; Tonquinês|Tonkinese; Somali; Korat; Ocicat; Mau Egípcio|Egyptian Mau|Egípcio; Singapura; Snowshoe; Van Turco|Turkish Van; Ragamuffin; Havana|Havana Brown; LaPerm; Toyger; Nebelung; Peterbald; Pixie-bob|Pixie Bob
6: American Bobtail; American Wirehair; Cymric; Javanês; Donskoy|Don Sphynx; Levkoy ucraniano|Ucraniano Levkoy; Kurilian Bobtail; Lykoi; Burmilla; Australian Mist|Névoa Australiana; Khao Manee; Sokoke; Thai; Chausie; Highlander; Minuet|Napoleon; Serengeti; Seychellois; Asiático|Asian; Tiffany|Chantilly-Tiffany; York Chocolate; Mekong Bobtail; Mau Árabe|Arabian Mau; Egeu|Aegean; German Rex|Rex Alemão; Neva Masquerade; Bambino; Ojos Azules
`,
  },
  {
    // raças de cavalos e pôneis da Associação Brasileira de Criadores e da FAO (raças mais difundidas)
    id: 'cavalo',
    t: 'Uma raça de cavalo ou pônei',
    a: `
1: Árabe|Puro-sangue árabe; Mangalarga Marchador|Mangalarga
2: Puro-sangue inglês|PSI|Puro-sangue; Quarto de Milha|Quarter Horse; Crioulo; Lusitano|Puro-sangue lusitano; Pônei|Shetland|Pônei Shetland
3: Campolina; Appaloosa; Andaluz|Puro-sangue espanhol|PRE; Frísio|Frisão; Mustang; Paint Horse|Paint; Clydesdale; Percheron|Percherão; Pantaneiro; Mini-horse|Cavalo miniatura|Falabella
4: Mangalarga Paulista; Bretão; Shire; Lipizzano|Lipizzaner; Akhal-Teke; Haflinger; Hanoveriano; Islandês; Fjord|Fiorde|Norueguês; Marajoara; Brasileiro de Hipismo|BH; Trotador|Standardbred; Morgan; Anglo-árabe; Pônei Brasileiro
5: Holsteiner; Trakehner; Oldenburg; Westfalen; Holandês de Sangue Quente|KWPN; Sela Francês|Selle Français; Paso Fino; Peruano de Paso|Paso Peruano; Tennessee Walker|Tennessee Walking Horse; Saddlebred|American Saddlebred; Hackney; Connemara; Galês|Pônei galês|Welsh; Camargue|Camarguês; Ardenês|Ardennes; Belga|Brabant; Suffolk Punch|Suffolk; Noriker; Knabstrupper; Marwari; Przewalski|Cavalo de Przewalski; Shagya|Shagya árabe; Campeiro; Lavradeiro; Baixadeiro; Puruca; Piquira; Nordestino
6: Mérens; Kathiawari; Mongol; Exmoor; Dartmoor; New Forest; Highland|Pônei Highland; Fell; Dales; Gypsy Vanner|Cob irlandês|Irish Cob; Irish Draught; Tersk; Budyonny; Don; Orlov|Trotador Orlov; Kladruber; Furioso; Nonius; Gidran; Lusitano-árabe; Criollo argentino; Polo argentino|Petiso; Azteca; Rocky Mountain Horse; Missouri Fox Trotter; Pinto; Palomino; Kiger Mustang; Brumby; Waler; Sorraia; Garrano; Pottoka; Asturcón; Hispano-árabe; Salernitano; Murgese; Maremmano; Bardigiano; Avelignese|Haflinger italiano; Comtois; Boulonnais; Trait du Nord; Auxois; Poitevin; Freiberger|Franches-Montagnes; Gelderlander; Groningen; Dülmen; Rottaler; Schwarzwälder; Lokai; Karabakh; Kabardin; Yakutian|Iacuto; Vyatka; Bashkir; Caspian|Cáspio; Turkoman|Turcomano; Barb|Berbere; Dongola; Basuto; Nooitgedacht; Boerperd; Timor; Batak; Sumbawa; Hokkaido; Kiso; Misaki; Yonaguni; Jeju
`,
  },
]);

// ---------------------------------------------------------------- comidas (perguntas novas)
export const comidasNovas: QuestionDef[] = novas([
  {
    id: 'grao',
    t: 'Um cereal, grão ou leguminosa de grão',
    r: 'vale tipo de feijão',
    a: `
1: Arroz; Feijão
2: Milho; Trigo; Soja; Aveia
3: Lentilha; Grão-de-bico|Grão de bico; Ervilha; Cevada; Quinoa|Quinua; Amendoim; Chia; Linhaça
4: Feijão-preto|Feijão preto; Feijão-carioca|Feijão carioca; Feijão-fradinho|Fradinho|Feijão de corda|Feijão-de-corda; Feijão-branco|Feijão branco; Centeio; Gergelim|Sésamo; Fava; Sorgo; Painço|Milheto; Amaranto; Feijão-vermelho|Feijão vermelho; Pipoca|Milho de pipoca
5: Feijão-azuki|Azuki|Feijão azuki; Feijão-mungo|Moyashi|Feijão-moyashi; Feijão-rajado; Feijão-jalo|Jalo; Feijão-roxinho|Roxinho; Feijão-bolinha|Bolinha; Feijão-manteiguinha|Manteiguinha; Tremoço; Trigo-sarraceno|Trigo sarraceno|Trigo-mourisco|Sarraceno; Espelta; Alpiste; Arroz selvagem; Guandu|Feijão-guandu|Andu
6: Teff; Fonio; Kamut|Trigo khorasan|Khorasan; Triticale; Feijão-de-lima|Feijão-lima; Feijão-mulatinho|Mulatinho; Feijão-rosinha|Rosinha; Feijão-canário; Feijão-verde; Ervilhaca; Lablabe|Feijão-lablab|Mangalô; Feijão-de-porco; Cornichão; Lupino; Emmer|Farro|Trigo farro; Einkorn|Trigo einkorn; Freekeh
`,
  },
  {
    // formatos de massa italiana catalogados (nomes italianos e os usados no Brasil)
    id: 'massa',
    t: 'Um tipo (formato) de massa italiana',
    r: '"macarrão" sozinho não vale',
    x: 'Macarrão|Massa|Pasta',
    a: `
1: Espaguete|Spaghetti; Lasanha|Lasagna|Lasagne
2: Penne|Pena; Talharim|Tagliatelle|Taglierini; Nhoque|Gnocchi; Ravióli|Ravioli; Parafuso|Fusilli
3: Fettuccine|Fetuccine; Gravatinha|Farfalle; Capeletti|Cappelletti; Canelone|Cannelloni|Caneloni; Rigatoni; Linguine; Tortellini; Conchiglie|Concha|Conchinha; Cabelo de anjo|Capellini|Capelli d'angelo; Aletria
4: Pappardelle; Bucatini; Orecchiette; Ave-maria; Padre-nosso; Argolinha|Anelli|Anellini; Letrinha|Alfabeto; Estrelinha|Stelline; Fusilli bucati; Ditalini; Ziti; Cavatappi; Vermicelli|Vermicelo|Vermicelle; Orzo|Risoni|Risone; Agnolotti; Sorrentino|Sorrentinos; Tortelloni; Rotelle|Rodinha; Caracol|Lumache|Lumaconi; Ninho
5: Paccheri; Mezze maniche; Gemelli; Trofie; Strozzapreti; Cavatelli; Garganelli; Maltagliati; Mezzelune|Meia-lua; Caramelle; Fregola|Fregula; Manicotti; Radiatori; Campanelle; Casarecce; Pici; Bigoli; Tonnarelli; Spaghettoni; Tagliolini; Mafalda|Mafaldine; Sedani|Sedanini; Tubetti; Pennette; Calamarata|Calamari; Candele; Pipe|Pipe rigate; Acini di pepe; Corzetti; Culurgiones; Pansotti; Cappellacci; Anolini; Scialatielli; Busiate; Lorighittas; Malloreddus; Chitarra|Spaghetti alla chitarra; Lasagnette; Reginette; Fazzoletti; Quadrucci; Pizzoccheri; Strangozzi; Umbricelli; Gramigna; Ruote; Creste di gallo; Conchiglioni; Paccheri lisci; Mezzi rigatoni; Tortiglioni; Ziti tagliati; Gnocchetti sardi; Passatelli; Spätzle|Spätzli; Cappellini
`,
  },
]);

// ---------------------------------------------------------------- tecnologia e games
export const gamesNovas: QuestionDef[] = novas([
  {
    // os 151 Pokémon de Kanto (Pokédex nacional 1 a 151); Nidoran ♀ e ♂ valem como um só
    id: 'pokemon151',
    t: 'Um Pokémon da 1ª geração (os 151 originais)',
    a: POKEMON_GEN1,
  },
]);

export const marcasNovas: QuestionDef[] = novas([
  {
    // todos os modelos de iPhone lançados pela Apple, do original (2007) ao iPhone 17 e iPhone Air (2025)
    id: 'iphone',
    t: 'Um modelo de iPhone',
    a: `
1: iPhone 15|15; iPhone 13|13; iPhone 11|11; iPhone 16|16; iPhone 14|14
2: iPhone 12|12; iPhone X|X|iPhone 10; iPhone 15 Pro Max|15 Pro Max; iPhone 16 Pro Max|16 Pro Max; iPhone 7|7; iPhone 8|8; iPhone 17|17; iPhone 4|4; iPhone 6|6; iPhone 5|5
3: iPhone 13 Pro|13 Pro; iPhone 14 Pro|14 Pro; iPhone 15 Pro|15 Pro; iPhone 16 Pro|16 Pro; iPhone 17 Pro|17 Pro; iPhone 17 Pro Max|17 Pro Max; iPhone 14 Pro Max|14 Pro Max; iPhone 13 Pro Max|13 Pro Max; iPhone XR|XR|10R; iPhone 11 Pro|11 Pro; iPhone 11 Pro Max|11 Pro Max; iPhone SE|SE; iPhone 12 Pro Max|12 Pro Max; iPhone 12 Pro|12 Pro; iPhone 7 Plus|7 Plus; iPhone 8 Plus|8 Plus; iPhone 6 Plus|6 Plus; iPhone 4S|4S; iPhone 5S|5S; iPhone 6S|6S
4: iPhone XS|XS|10S; iPhone XS Max|XS Max; iPhone 12 mini|12 mini; iPhone 13 mini|13 mini; iPhone 14 Plus|14 Plus; iPhone 15 Plus|15 Plus; iPhone 16 Plus|16 Plus; iPhone Air|Air; iPhone 3G|3G; iPhone 3GS|3GS; iPhone 5C|5C; iPhone 6S Plus|6S Plus; iPhone 16e|16e
5: iPhone original|iPhone 2G|Primeiro iPhone|iPhone 1
`,
  },
]);

// ---------------------------------------------------------------- mitologia nórdica
export const nordica: QuestionDef = novas([
  {
    // deuses, gigantes e criaturas da mitologia nórdica (Edda em prosa e Edda poética)
    id: 'nordica',
    t: 'Um deus ou criatura da mitologia nórdica',
    a: `
1: Thor|Tor; Odin|Odim|Wotan
2: Loki
3: Freya|Freyja|Freia; Frigg|Frigga; Valquírias|Valquíria; Hela|Hel; Fenrir|Fenris; Balder|Baldur|Baldr; Heimdall|Heimdal
4: Tyr|Tir; Sif; Jörmungandr|Jormungand|Serpente de Midgard; Sleipnir; Ymir; Freyr|Frey; Njord|Njörðr; Mimir; Surtr|Surt; Gigantes de gelo|Jötnar|Jotuns|Jotun
5: Bragi; Idun|Iðunn|Idunn; Vidar|Víðarr; Vali|Váli; Hod|Höðr|Hodur; Forseti; Ullr|Ull; Skadi|Skaði; Aegir|Ægir; Ran|Rán; Hugin|Huginn; Munin|Muninn; Nidhogg|Níðhöggr; Ratatoskr|Ratatosk; Angrboda|Angrboða; Sigyn; Magni; Modi|Móði; Hermod|Hermóðr; Nornas|Norns; Fafnir|Fáfnir; Sigurd|Sigurðr
6: Nanna; Gerd|Gerðr; Gefjun|Gefion; Eir; Saga; Thrud|Þrúðr; Kvasir; Hoenir|Hœnir; Lodur|Lóðurr; Ask|Askr; Embla; Audhumla|Auðumbla; Garm|Garmr; Skoll|Sköll; Hati; Thrym|Þrymr; Utgarda-Loki|Útgarða-Loki; Hrungnir; Narfi; Dvalin|Dvalinn; Brokkr; Sindri|Eitri; Andvari; Urd|Urðr; Verdandi|Verðandi; Skuld; Jarnsaxa; Gullinbursti; Tanngrisnir; Tanngnjóstr; Fjalar; Galar; Ivaldi; Vafthrudnir|Vafþrúðnir; Hymir; Gymir; Thiazi|Þjazi; Bestla; Bor|Borr; Buri|Búri; Mani|Máni; Sol|Sól; Nott|Nótt; Dag|Dagr
`,
  },
])[0];

// ---------------------------------------------------------------- universidades
export const universidades: ThemeDef = {
  id: 'faculdade',
  name: 'Universidades federais',
  questions: novas([
    {
      // as 69 universidades federais do Ministério da Educação (2025), com nome e sigla
      id: 'federal',
      t: 'Uma universidade federal brasileira',
      r: 'nome ou sigla',
      a: `
1: Universidade Federal do Rio de Janeiro|UFRJ
2: Universidade Federal de Minas Gerais|UFMG; Universidade de Brasília|UnB; Universidade Federal do Rio Grande do Sul|UFRGS; Universidade Federal de Santa Catarina|UFSC; Universidade Federal Fluminense|UFF
3: Universidade Federal do Paraná|UFPR; Universidade Federal de Pernambuco|UFPE; Universidade Federal da Bahia|UFBA; Universidade Federal do Ceará|UFC; Universidade Federal de São Paulo|Unifesp; Universidade Federal de São Carlos|UFSCar; Universidade Federal do Pará|UFPA; Universidade Federal de Goiás|UFG; Universidade Tecnológica Federal do Paraná|UTFPR
4: Universidade Federal do Amazonas|UFAM; Universidade Federal da Paraíba|UFPB; Universidade Federal do Rio Grande do Norte|UFRN; Universidade Federal do Espírito Santo|UFES; Universidade Federal de Juiz de Fora|UFJF; Universidade Federal de Viçosa|UFV; Universidade Federal de Uberlândia|UFU; Universidade Federal de Ouro Preto|UFOP; Universidade Federal Rural do Rio de Janeiro|UFRRJ|Rural; Universidade Federal do Estado do Rio de Janeiro|Unirio; Universidade Federal de Pelotas|UFPel; Universidade Federal de Santa Maria|UFSM; Universidade Federal do ABC|UFABC; Universidade Federal de Alagoas|UFAL; Universidade Federal de Sergipe|UFS; Universidade Federal do Piauí|UFPI; Universidade Federal do Maranhão|UFMA; Universidade Federal de Mato Grosso|UFMT; Universidade Federal de Mato Grosso do Sul|UFMS; Universidade Federal de Lavras|UFLA
5: Universidade Federal de Campina Grande|UFCG; Universidade Federal Rural de Pernambuco|UFRPE; Universidade Federal do Rio Grande|FURG; Universidade Federal de São João del-Rei|UFSJ|Universidade Federal de São João del Rei; Universidade Federal de Itajubá|Unifei; Universidade Federal de Alfenas|Unifal; Universidade Federal do Triângulo Mineiro|UFTM; Universidade Federal dos Vales do Jequitinhonha e Mucuri|UFVJM; Universidade Federal do Recôncavo da Bahia|UFRB; Universidade Federal do Vale do São Francisco|Univasf; Universidade Federal Rural do Semi-Árido|Ufersa; Universidade Federal da Integração Latino-Americana|Unila; Universidade Federal da Fronteira Sul|Fronteira Sul; Universidade Federal do Pampa|Unipampa; Universidade Federal de Ciências da Saúde de Porto Alegre|UFCSPA; Universidade Federal da Grande Dourados|UFGD; Universidade Federal de Rondônia|Unir; Universidade Federal de Roraima|UFRR; Universidade Federal do Amapá|Unifap; Universidade Federal do Acre|UFAC; Universidade Federal do Tocantins|UFT; Universidade Federal Rural da Amazônia|UFRA; Universidade Federal do Oeste do Pará|Ufopa
6: Universidade Federal do Sul e Sudeste do Pará|Unifesspa; Universidade Federal do Norte do Tocantins|UFNT; Universidade Federal do Oeste da Bahia|UFOB; Universidade Federal do Sul da Bahia|UFSB; Universidade Federal do Cariri|UFCA; Universidade da Integração Internacional da Lusofonia Afro-Brasileira|Unilab; Universidade Federal do Agreste de Pernambuco|UFAPE; Universidade Federal do Delta do Parnaíba|UFDPar; Universidade Federal de Jataí|UFJ; Universidade Federal de Catalão|UFCAT; Universidade Federal de Rondonópolis|UFR
`,
    },
  ]),
};
