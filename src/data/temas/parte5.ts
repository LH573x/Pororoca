import type { ThemeDef } from '../../types';

export const carros: ThemeDef = {
  id: 'carros',
  name: 'Carros e transportes',
  questions: [
    {
      id: 'carro',
      t: 'Um modelo de carro vendido no Brasil',
      a: `
1: Fusca; Gol; Uno|Fiat Uno
2: Corsa; Celta; Palio; Onix|Ônix; HB20; Kombi; Civic; Corolla
3: Chevette; Opala; Brasília; Passat; Monza; Kadett; Fiesta; Ka|Ford Ka; Sandero; Strada; Saveiro; Hilux; Golf; Polo; Fox; Mobi; Argo; Kwid; Tracker; Creta; Compass; Renegade; Toro; S10
4: Fiat 147|147; Escort; Santana; Parati; Voyage; Del Rey; Vectra; Astra; Omega; Tempra; Tipo; Siena; Prisma; Cobalt; Spin; Logan; Duster; EcoSport; Ranger; Amarok; Corcel; Belina; Caravan; Marea; Brava; Stilo; Punto; Idea; Doblò|Doblo; Fiorino; Clio; Mégane|Megane; Peugeot 206|206; Peugeot 208|208; C3|Citroën C3; Picanto; Sportage; Tucson; T-Cross; Nivus; Virtus; Jetta; City; Fit; HR-V; WR-V; Yaris; Etios; Pulse; Fastback; Kicks; March; Versa; Frontier; L200; Pajero; Outlander
5: Maverick; Galaxie; Landau; Aero Willys; Rural|Rural Willys; Jeep Willys; DKW Vemag|DKW; Gordini; Simca Chambord|Simca; Variant; TL|VW TL; SP2; Puma; Gurgel; Miura; Santa Matilde; Dodge Dart|Dart; Charger|Dodge Charger; Polara|Dodge Polara; Veraneio; Chevy 500; Marajó; Elba; Prêmio; Oggi; Pampa; Verona; Logus; Pointer; Apollo; Versailles; Royale; Quantum; Classic; Meriva; Zafira; Agile; Montana; Blazer; Captiva; Equinox; Trailblazer; Cruze; Sonic; Camaro; Fusion; Focus; Edge; Territory; Bronco; Mustang; Uno Mille|Mille; Grand Siena; Palio Weekend|Weekend; Palio Adventure|Adventure
6: Romi-Isetta|Romi Isetta|Isetta; Gurgel BR-800|BR-800; Gurgel Supermini; Lafer; Adamo; Envemo; Farus; Bianco; Hofstetter; Brasinca; Interlagos|Willys Interlagos; Itamaraty|Willys Itamaraty; Fissore|DKW Fissore; Belcar; Vemaguet; Candango; Karmann-Ghia|Karmann Ghia
`,
    },
    {
      id: 'transporte',
      t: 'Um meio de transporte',
      a: `
1: Carro; Ônibus; Avião; Moto|Motocicleta
2: Bicicleta|Bike; Metrô; Trem; Navio; Barco; Helicóptero; Caminhão; Táxi|Taxi
3: Patinete|Patinete elétrico; Skate; Canoa; Lancha; Balsa; Van; Cavalo; Uber|Carro de aplicativo; Caminhonete|Picape; Jet ski|Jet-ski
4: Teleférico; Bondinho|Bonde; VLT|Veículo leve sobre trilhos; Submarino; Foguete; Iate; Jangada; Carroça; Charrete; Balão; Dirigível; Monotrilho; Trem-bala|Trem bala; Caiaque; Escada rolante; Elevador; Patins
5: Triciclo; Mototáxi|Moto táxi; Quadriciclo; Patinete motorizado; Hoverboard; Monociclo; Asa-delta|Asa delta; Parapente; Paraquedas; Planador; Hidroavião; Ultraleve; Lotação; Micro-ônibus|Microônibus; BRT; Trólebus|Trolebus; Ferry boat|Ferry|Ferryboat; Catamarã; Veleiro; Gôndola
6: Riquixá; Tuk-tuk|Tuktuk; Carro de boi; Liteira; Trenó; Camelo; Elefante; Burro|Jumento|Jegue; Mula; Prancha de surfe; Stand up paddle|SUP; Pau de arara|Pau-de-arara; Gaiola|Barco gaiola; Voadeira; Rabeta; Saveiro; Escuna; Chalana; Carruagem; Diligência; Bonde de burro; Funicular; Aerobarco|Hovercraft; Aerotrem|Aeromóvel
`,
    },
  ],
};

export const games: ThemeDef = {
  id: 'games',
  name: 'Videogames',
  questions: [
    {
      id: 'personagem',
      t: 'Um personagem de videogame',
      a: `
1: Mario|Super Mario; Sonic
2: Pikachu; Link; Luigi; Pac-Man|Pacman; Kratos; Lara Croft
3: Zelda|Princesa Zelda; Donkey Kong; Yoshi; Princesa Peach|Peach; Bowser; Steve|Steve do Minecraft; Crash|Crash Bandicoot; Master Chief; Mega Man|Megaman; Kirby; Ryu; Samus|Samus Aran; Solid Snake|Snake; Tails; Knuckles; Ezio|Ezio Auditore; CJ|Carl Johnson
4: Cloud|Cloud Strife; Wario; Toad; Spyro; Rayman; Dante; Ellie; Joel; Nathan Drake|Drake; Arthur Morgan; Geralt|Geralt de Rívia; Chun-Li|Chun Li; Ken; Sub-Zero|Subzero; Scorpion; Leon|Leon Kennedy; Jill Valentine; Banjo; Fox McCloud|Fox; Sora; Sackboy; Ratchet; Clank; Jak; Daxter; Alex Kidd; Shadow|Shadow the Hedgehog; Eggman|Dr. Eggman|Robotnik; Creeper; Freddy|Freddy Fazbear; Sans; Cuphead; Isaac; Aloy
5: Ganondorf|Ganon; Sephiroth; Tifa; Aerith; Squall; Tidus; Noctis; Mewtwo; Charizard; Ash|Ash Ketchum; Jigglypuff; Lucario; Ness; Captain Falcon; Marth; Ike; Little Mac; Simon Belmont; Alucard; Bomberman; Q*bert; Frogger; Glados|GLaDOS; Gordon Freeman; Doomguy|Doom Slayer; Duke Nukem; Sam Fisher; Max Payne; Tommy Vercetti; Niko Bellic; Trevor; Franklin; Michael De Santa|Michael; Altair; Kazuya; Jin Kazama; Heihachi; Liu Kang; Raiden; Blanka; Guile; Zangief; Dhalsim; M. Bison|Bison; Akuma; Terry Bogard; Kyo Kusanagi; Iori Yagami; Dixie Kong; Diddy Kong; Captain Toad; Rosalina; Daisy|Princesa Daisy; Waluigi; Pit; Olimar; Inkling; Villager|Aldeão; Isabelle; Tom Nook; Ori; Hornet; Hollow Knight|Cavaleiro; Madeline; Shovel Knight
`,
    },
    {
      id: 'console',
      t: 'Um console de videogame',
      a: `
1: PlayStation|PS1|PSOne|Play 1; Xbox
2: PlayStation 2|PS2|Play 2; Nintendo Switch|Switch; PlayStation 4|PS4|Play 4; PlayStation 5|PS5|Play 5; Super Nintendo|SNES|Super NES; Mega Drive
3: Atari|Atari 2600; Nintendo 64|N64; Xbox 360; PlayStation 3|PS3|Play 3; Game Boy|Gameboy; Wii; Nintendo|NES|Nintendinho
4: Master System; Nintendo DS|DS; PSP; Xbox One; Game Boy Advance|GBA; GameCube|Game Cube; Nintendo 3DS|3DS; Xbox Series X|Series X; Xbox Series S|Series S; Nintendo Switch 2|Switch 2; Polystation|Poly Station
5: Dreamcast; Sega Saturn|Saturn; Wii U; Game Boy Color|GBC; PS Vita|Vita; Game Gear; Steam Deck; Sega CD; 32X|Sega 32X; Neo Geo; Odyssey|Magnavox Odyssey|Odyssey 2
6: Atari 7800; Atari Lynx|Lynx; Atari Jaguar|Jaguar; 3DO; Turbografx|PC Engine; Virtual Boy; Neo Geo Pocket; WonderSwan; N-Gage; Ouya; Intellivision; ColecoVision; Dynavision; Phantom System; Top Game; Bit System; Dactar; Supergame|Supergame CCE; Telejogo
`,
    },
  ],
};

export const desenhos: ThemeDef = {
  id: 'desenhos',
  name: 'Desenhos e quadrinhos',
  questions: [
    {
      id: 'turma',
      t: 'Um personagem da Turma da Mônica',
      a: `
1: Mônica; Cebolinha
2: Cascão; Magali
3: Chico Bento; Bidu; Franjinha; Anjinho; Sansão|Coelho Sansão; Penadinho; Horácio
4: Marina; Milena; Do Contra; Xaveco; Jeremias; Titi; Aninha; Denise; Mingau; Floquinho; Rosinha; Zé Lelé; Papa-Capim; Piteco; Astronauta; Louco|Seu Louco; Dona Cebola
5: Capitão Feio; Dorinha; Humberto; Nimbus; Luca; Quinzinho; Carminha Frufru; Tina; Rolo; Pipa; Vó Dita; Nhô Lau; Dona Luísa; Dona Lurdinha; Seu Cebola; Cranícola; Zé Vampir; Lobi; Muminho; Frank|Frankenstein; Dona Morte|Morte; Thunga; Dudu; Maria Cascuda
`,
    },
    {
      id: 'desenho',
      t: 'Um desenho animado que passou na TV brasileira',
      a: `
1: Pica-Pau|Pica Pau; Tom e Jerry; Os Simpsons|Simpsons; Bob Esponja
2: Pokémon|Pokemon; Dragon Ball|Dragon Ball Z; Os Flintstones|Flintstones; Scooby-Doo|Scooby Doo; Pernalonga|Looney Tunes; Cavaleiros do Zodíaco
3: Pantera Cor-de-Rosa|Pantera Cor de Rosa; Os Jetsons|Jetsons; Caverna do Dragão; Digimon; Naruto; As Meninas Superpoderosas|Meninas Superpoderosas; O Laboratório de Dexter|Dexter; Johnny Bravo; Coragem, o Cão Covarde|Coragem; A Vaca e o Frango; Ben 10; Hora de Aventura; Apenas um Show; Padrinhos Mágicos|Os Padrinhos Mágicos; Rugrats|Os Anjinhos; Hey Arnold!|Hey Arnold; Doug; Peppa Pig; Galinha Pintadinha; Show da Luna|O Show da Luna
4: He-Man; She-Ra; ThunderCats|Thundercats; Tartarugas Ninja; Popeye; Os Smurfs|Smurfs; Ursinhos Carinhosos; Moranguinho; Corrida Maluca; Manda-Chuva; Zé Colmeia; Os Herculoides; Jonny Quest; Speed Racer; Super Mouse; Mickey|Mickey Mouse; Pato Donald; Ducktales|DuckTales; Tico e Teco; Timão e Pumba; Recreio|Hora do Recreio; Pinky e Cérebro; Animaniacs; Tiny Toons; Sailor Moon; Yu-Gi-Oh!|Yu Gi Oh; Beyblade; Sakura Card Captors|Sakura; Shurato; Samurai X; Yu Yu Hakusho; One Piece; Avatar|Avatar: A Lenda de Aang; Phineas e Ferb; Gravity Falls; Steven Universo; Irmão do Jorel; Peixonauta; Turma da Mônica; Sítio do Picapau Amarelo
5: Pole Position; Os Ursinhos Gummi|Ursinhos Gummi; Rambo; Silverhawks; Bravestarr; Visionários; Jayce; Comandos em Ação|G.I. Joe; Transformers; Snorks; Muppet Babies; Garfield; Gasparzinho; Riquinho; Luluzinha; Papa-Léguas; Patolino; Piu-Piu e Frajola|Piu-Piu|Frajola; Taz; Ligeirinho; Dick Vigarista; Penélope Charmosa; Os Impossíveis; Space Ghost; Capitão Planeta; Liga da Justiça; Batman|Batman: A Série Animada; Superman; Homem-Aranha; X-Men; Super Choque; Jimmy Neutron; Kim Possible; KND|A Turma do Bairro; Mansão Foster; Billy e Mandy|As Terríveis Aventuras de Billy e Mandy; Du, Dudu e Edu; Bakugan; Kick Buttowski; Clarêncio, o Otimista|Clarêncio; O Incrível Mundo de Gumball|Gumball; Ladybug|Miraculous; Bluey
`,
    },
  ],
};
