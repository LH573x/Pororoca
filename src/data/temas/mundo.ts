import type { ThemeDef } from '../../types';

/**
 * Países: os 193 membros da ONU, mais Vaticano, Palestina, Kosovo e Taiwan.
 * Países que ficam em dois continentes (Rússia, Turquia, Geórgia, Armênia, Azerbaijão, Cazaquistão, Chipre, Egito)
 * valem nos dois. Partes do Reino Unido (Inglaterra, Escócia, País de Gales, Irlanda do Norte) valem na Europa.
 */
export const paises: ThemeDef = {
  id: 'paises',
  name: 'Países e capitais',
  questions: [
    {
      id: 'europa',
      t: 'Um país da Europa',
      a: `
1: Portugal; França; Itália
2: Alemanha; Espanha
3: Inglaterra|Reino Unido|Grã-Bretanha; Holanda|Países Baixos; Suíça
4: Rússia; Grécia; Bélgica; Suécia; Noruega; Irlanda
5: Dinamarca; Polônia|Polónia; Áustria; Ucrânia; Finlândia; Croácia; Escócia
6: Islândia; Turquia; Hungria; República Tcheca|Tchéquia|Chéquia; Sérvia; Romênia|Roménia; Bulgária; Luxemburgo; Mônaco|Mónaco; Vaticano|Cidade do Vaticano|Santa Sé; País de Gales|Gales
7: Eslováquia; Eslovênia|Eslovénia; Bósnia|Bósnia e Herzegovina|Bósnia-Herzegovina; Albânia; Montenegro; Belarus|Bielorrússia|Bielorússia; Estônia|Estónia; Letônia|Letónia; Lituânia; Malta; Chipre; Andorra
8: Liechtenstein; San Marino|São Marino; Moldávia; Macedônia do Norte|Macedônia|Macedónia; Kosovo; Irlanda do Norte; Geórgia; Armênia|Arménia
9: Azerbaijão; Cazaquistão
`,
    },
    {
      id: 'africa',
      t: 'Um país da África',
      a: `
1: Egito; África do Sul; Angola
2: Nigéria; Moçambique; Marrocos
3: Cabo Verde; Quênia|Quénia; Etiópia
4: Gana; Senegal; Camarões; Guiné-Bissau; Argélia; Tunísia; Líbia; Madagascar|Madagáscar
5: São Tomé e Príncipe; Costa do Marfim; Congo|República do Congo|Congo-Brazzaville; República Democrática do Congo|RDC|Congo-Kinshasa|Zaire; Tanzânia; Sudão; Somália; Zimbábue|Zimbabwe; Ruanda; Uganda
6: Namíbia; Zâmbia; Mali; Guiné|Guiné-Conacri; Botsuana|Botswana; Sudão do Sul; Togo; Benin; Níger; Chade
7: Burkina Faso; Serra Leoa; Libéria; Gabão; Mauritânia; Malawi|Malaui; Lesoto; Eritreia; Seicheles|Seychelles; Maurício|Ilhas Maurício; Guiné Equatorial; Gâmbia
8: Djibuti|Djibouti; Burundi; República Centro-Africana; Comores; Essuatíni|Suazilândia|Eswatini
`,
    },
    {
      id: 'asia',
      t: 'Um país da Ásia',
      a: `
1: Japão; China
2: Índia; Coreia do Sul|Coréia do Sul
3: Tailândia; Israel; Coreia do Norte|Coréia do Norte; Arábia Saudita; Filipinas
4: Vietnã|Vietname; Indonésia; Irã|Irão; Iraque; Turquia; Rússia; Emirados Árabes Unidos|Emirados Árabes; Catar|Qatar; Afeganistão; Paquistão; Singapura|Cingapura
5: Malásia; Síria; Líbano; Mongólia; Nepal; Camboja; Taiwan|Formosa; Palestina; Jordânia; Kuwait|Kuaite; Bangladesh; Sri Lanka
6: Laos; Mianmar|Myanmar|Birmânia; Maldivas; Butão; Cazaquistão; Uzbequistão; Iêmen|Iémen; Omã; Bahrein|Barein; Timor-Leste|Timor Leste; Brunei
7: Quirguistão; Tajiquistão; Turcomenistão|Turquemenistão; Geórgia; Armênia|Arménia; Azerbaijão; Chipre; Egito
`,
    },
    {
      id: 'americas',
      t: 'Um país das Américas',
      r: 'que não seja o Brasil',
      x: 'Brasil',
      a: `
1: Argentina; Estados Unidos|EUA|USA|Estados Unidos da América
2: Chile; Uruguai; Paraguai; México; Canadá
3: Colômbia; Peru|Perú; Bolívia; Venezuela; Equador; Cuba
4: Jamaica; Panamá; Costa Rica; Haiti; República Dominicana; Guatemala; Honduras
5: El Salvador|Salvador; Nicarágua; Bahamas; Suriname; Guiana; Belize; Trinidad e Tobago; Barbados
6: Granada; Dominica; Santa Lúcia; Antígua e Barbuda; São Cristóvão e Névis|São Cristóvão e Nevis; São Vicente e Granadinas
`,
    },
    {
      id: 'capital',
      t: 'A capital de um país',
      r: 'que não seja Brasília',
      x: 'Brasília',
      a: `
1: Paris; Londres; Buenos Aires
2: Lisboa; Roma; Washington|Washington DC|Washington D.C.; Madri|Madrid; Tóquio
3: Berlim; Pequim|Beijing; Santiago; Montevidéu; Assunção; Lima; Cidade do México|México; Moscou|Moscovo
4: Bogotá; Caracas; Quito; La Paz; Sucre; Ottawa; Havana; Atenas; Amsterdã|Amsterdam|Amesterdão; Dublin; Bruxelas; Viena; Berna; Seul; Nova Délhi|Nova Deli|Délhi; Cairo|O Cairo; Luanda; Maputo
5: Copenhague|Copenhaga; Estocolmo; Oslo; Helsinque|Helsínquia; Varsóvia; Praga; Budapeste; Kiev|Kyiv; Ancara; Jerusalém; Bangcoc|Bangkok; Camberra|Canberra; Wellington; Pretória|Cidade do Cabo|Bloemfontein; Praia; Bissau; Dili; São Tomé; Teerã|Teerão; Bagdá|Bagdade; Cabul; Rabat; Nairóbi; Adis Abeba; Abuja; Kingston; Panamá|Cidade do Panamá; San José; Reykjavík|Reiquiavique
6: Bucareste; Sófia; Belgrado; Zagreb|Zagrebe; Liubliana; Bratislava; Sarajevo; Tirana; Skopje|Escópia; Podgorica; Chisinau|Quixinau; Minsk; Vilnius; Riga; Tallinn|Talin; Valeta|La Valletta; Nicósia; Andorra-a-Velha|Andorra la Vella; Mônaco; Vaticano|Cidade do Vaticano; Luxemburgo; Vaduz; San Marino; Damasco; Beirute; Amã; Riad|Riade; Doha; Abu Dhabi; Kuwait|Cidade do Kuwait; Mascate; Sanaá; Manama; Islamabad; Daca|Dhaka; Catmandu; Colombo; Malé; Hanói; Manila; Jacarta; Kuala Lumpur; Singapura; Phnom Penh; Vientiane; Naypyidaw|Rangum; Ulan Bator|Ulaanbaatar; Pyongyang|Pionguiangue; Taipé|Taipei; Argel; Túnis; Trípoli; Dacar|Dakar; Acra|Accra; Iaundé; Kinshasa; Brazzaville; Cartum; Mogadíscio; Kampala; Kigali; Dodoma; Harare; Lusaka; Windhoek; Gaborone; Antananarivo; Porto Príncipe; Santo Domingo|São Domingos; Tegucigalpa; Manágua; Cidade da Guatemala|Guatemala; San Salvador; Belmopan; Nassau; Paramaribo; Georgetown; Porto de Espanha
7: Edimburgo; Cardiff; Belfast; Astana|Nur-Sultan; Tashkent; Bishkek; Duchambé|Dushanbe; Asgabate|Ashgabat; Tbilisi|Tiblíssi; Erevã|Yerevan|Ierevan; Baku; Thimphu|Timbu; Bandar Seri Begawan; Ramallah; Pristina; Bamako; Niamey; Ouagadougou|Uagadugu; Nouakchott|Nuakchott; Conacri|Conakry; Freetown; Monróvia; Abidjan|Yamoussoukro|Iamussucro; Lomé; Porto Novo|Porto-Novo; N'Djamena|Jamena; Bangui; Libreville; Malabo; Juba; Asmara; Djibuti; Gitega|Bujumbura; Moroni; Victoria; Port Louis; Lilongwe; Maseru; Mbabane|Lobamba; Banjul; Bridgetown; Roseau; Castries; Saint John's; Basseterre; Kingstown; Saint George's; Suva; Port Moresby; Honiara; Port Vila; Apia; Nuku'alofa; Tarawa|Tarawa do Sul; Majuro; Palikir; Ngerulmud|Melekeok; Yaren; Funafuti
`,
    },
  ],
};
