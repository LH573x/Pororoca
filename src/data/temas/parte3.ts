import type { ThemeDef } from '../../types';

export const diaadia: ThemeDef = {
  id: 'diaadia',
  name: 'Profissões e objetos',
  questions: [
    {
      id: 'profissao',
      t: 'Uma profissão',
      a: `
1: Médico|Médica; Professor|Professora
2: Advogado|Advogada; Engenheiro|Engenheira; Policial; Bombeiro|Bombeira; Dentista
3: Enfermeiro|Enfermeira; Motorista; Pedreiro; Cozinheiro|Cozinheira|Chef|Chef de cozinha; Veterinário|Veterinária; Padeiro|Padeira; Arquiteto|Arquiteta; Jornalista
4: Psicólogo|Psicóloga; Piloto|Piloto de avião; Mecânico|Mecânica; Eletricista; Cabeleireiro|Cabeleireira; Garçom|Garçonete; Carteiro|Carteira; Contador|Contadora; Programador|Programadora; Ator|Atriz; Cantor|Cantora; Jogador de futebol|Jogador; Vendedor|Vendedora
5: Farmacêutico|Farmacêutica; Fisioterapeuta; Nutricionista; Açougueiro|Açougueira; Encanador|Encanadora; Pintor|Pintora; Costureira|Costureiro; Manicure; Faxineiro|Faxineira|Diarista; Juiz|Juíza; Agricultor|Agricultora|Fazendeiro; Pescador|Pescadora; Caixa; Secretário|Secretária; Administrador|Administradora; Músico|Música; Designer; Fotógrafo|Fotógrafa
6: Marceneiro|Marceneira; Carpinteiro; Jardineiro|Jardineira; Porteiro|Porteira; Taxista; Motoboy|Entregador; Comissário de bordo|Aeromoça|Comissária de bordo; Bancário|Bancária; Economista; Biólogo|Bióloga; Químico|Química; Físico|Física; Astronauta; Cientista; Historiador; Geógrafo; Escritor|Escritora; Soldado; Militar; Delegado|Delegada; Promotor|Promotora; Barbeiro|Barbeira; Babá; Empregada doméstica; Frentista; Cobrador|Cobradora; Lixeiro|Gari
7: Sapateiro; Serralheiro; Vidraceiro; Borracheiro; Funileiro; Torneiro mecânico; Soldador; Ourives; Joalheiro; Relojoeiro; Chaveiro; Despachante; Corretor de imóveis|Corretor; Leiloeiro; Tradutor|Tradutora; Intérprete; Bibliotecário|Bibliotecária; Arqueólogo; Paleontólogo; Geólogo; Oceanógrafo; Meteorologista; Sommelier; Confeiteiro|Confeiteira; Feirante; Ambulante|Camelô; Salva-vidas; Segurança|Vigia|Vigilante; Zelador; Motorista de aplicativo|Uber
8: Ferreiro; Tanoeiro; Seleiro; Ferrador; Tropeiro; Vaqueiro|Peão; Seringueiro; Garimpeiro; Lavrador; Boia-fria; Estivador; Marinheiro; Maquinista; Operador de empilhadeira; Ascensorista; Sacristão; Coroinha; Engraxate; Leiteiro; Amolador de facas|Amolador; Pipoqueiro; Sorveteiro; Baleiro; Jornaleiro
9: Ferroviário; Telegrafista; Datilógrafo; Lanterninha; Acendedor de lampiões; Parteira; Benzedeira; Rendeira; Cordelista; Repentista; Xilogravurista; Luthier; Afinador de piano; Taxidermista; Calígrafo
10: Faroleiro; Charqueador; Cesteiro; Oleiro; Vidreiro; Salineiro; Jangadeiro; Marisqueira; Catador de caranguejo
`,
    },
    {
      id: 'cozinha',
      t: 'Algo que fica na cozinha',
      r: 'que não seja comida',
      a: `
1: Geladeira; Fogão
2: Panela; Prato; Microondas|Micro-ondas; Pia; Faca; Garfo; Colher
3: Copo; Liquidificador; Armário; Mesa; Cadeira; Frigideira; Pano de prato; Esponja; Torneira; Xícara
4: Panela de pressão; Batedeira; Forno; Air fryer|Fritadeira elétrica|Airfryer; Cafeteira; Sanduicheira; Chaleira; Escorredor de pratos; Lixeira|Lixo; Tábua de carne|Tábua; Concha; Escumadeira; Detergente; Filtro|Filtro de barro|Purificador
5: Abridor de latas|Abridor; Saca-rolhas; Ralador; Peneira; Espátula; Pegador; Fruteira; Bule; Garrafa térmica; Jarra; Tigela; Travessa; Assadeira|Forma; Coador; Leiteira; Exaustor|Coifa; Lava-louças|Lava louça; Freezer; Torradeira
6: Escorredor de macarrão; Fouet|Batedor de ovos; Rolo de macarrão|Rolo; Pilão; Moedor; Espremedor de alho; Espremedor de laranja|Espremedor; Descascador; Avental; Luva térmica|Pegador de panela; Porta-temperos; Saleiro; Açucareiro; Paliteiro; Guardanapo; Toalha de mesa; Jogo americano; Pote|Pote de plástico|Tupperware; Papel-toalha; Papel alumínio; Filme plástico|Plástico filme
7: Escorredor de arroz; Mixer; Processador; Panela elétrica de arroz; Grill; Sorveteira; Iogurteira; Pipoqueira; Cuscuzeira; Termômetro; Balança; Medidor; Funil; Escova de garrafa; Abridor de garrafa; Quebra-nozes; Batedor de carne|Martelo de carne; Cesta de pão
8: Espátula pão-duro|Pão-duro; Tabuleiro; Cortador de pizza; Boleador; Mandolina; Fatiador; Afiador de facas|Chaira; Moedor de pimenta; Concha de feijão; Tampa; Suporte de papel-toalha; Escorredor de talheres; Porta-guardanapo; Descanso de panela; Tela de fritura
9: Panela de barro; Moringa; Gamela; Colher de pau; Abano; Fogão a lenha; Pilão de madeira; Cuia; Porrão
10: Talha; Quartinha; Chaleira de ágata; Panela de ferro; Trempe; Ralador de coco
`,
    },
  ],
};

export const folclore: ThemeDef = {
  id: 'folclore',
  name: 'Folclore e festas',
  questions: [
    {
      id: 'personagem',
      t: 'Um personagem do folclore brasileiro',
      a: `
1: Saci|Saci-pererê|Saci Pererê
2: Curupira; Iara|Mãe-d'água|Mãe d'água; Mula sem cabeça|Mula-sem-cabeça
3: Boitatá; Cuca; Boto|Boto-cor-de-rosa; Lobisomem
4: Negrinho do Pastoreio|Negrinho do pastoreio; Caipora; Bumba-meu-boi|Boi-bumbá; Mapinguari
5: Vitória-régia|Naiá; Mãe do Ouro; Corpo-seco|Corpo seco; Boi da cara preta|Boi-da-cara-preta; Pisadeira; Bicho-papão|Bicho papão
6: Comadre Fulozinha|Comadre Florzinha; Cabra-cabriola|Cabra Cabriola; Matinta Perera|Matintaperera|Matita Pereira; Romãozinho; Papa-figo; Homem do saco|Velho do saco; Anhangá
7: Cobra Grande|Boiuna; Mãe da Mata; Caboclo d'água; Alamoa; Barba Ruiva; Labatut; Pé de garrafa; Quibungo; Ipupiara; Mão de cabelo|Mão-de-cabelo; Chibamba
8: Bradador; Carneiro de Ouro; Cumacanga; Lavadeira da meia-noite; Porca dos sete leitões; Jurupari; Tutu Marambá|Tutu; Pai do Mato; Bicho-Homem
9: Gorjala; Onça-boi; Mão-pelada; Rasga-mortalha; Batatão
10: Capelobo; Kianumaka; Jaci; Guaraci; Akuanduba; Ceiuci; Ahó Ahó; Arranca-língua
`,
    },
    {
      id: 'junina',
      t: 'Uma comida ou doce de festa junina',
      a: `
1: Paçoca; Pipoca
2: Pé de moleque|Pé-de-moleque; Canjica|Mungunzá; Pamonha; Quentão; Milho|Milho cozido|Milho verde
3: Arroz doce; Curau; Maçã do amor; Bolo de milho; Cocada; Cachorro-quente|Cachorro quente; Vinho quente; Quindim
4: Cuscuz|Cuscuz nordestino; Bolo de fubá; Pinhão; Amendoim|Amendoim torrado; Pé de moça|Pé-de-moça; Doce de abóbora; Brigadeiro
5: Pastel; Espetinho|Churrasquinho; Mané pelado; Bolo de rolo; Beijinho; Doce de leite; Tapioca; Caldo verde
6: Cuscuz doce|Cuscuz de tapioca; Bolo de amendoim; Doce de batata-doce|Doce de batata; Rapadura; Sagu; Caldo de mandioca|Caldinho; Cuscuz paulista; Arroz com leite
7: Bolo de puba|Bolo de massa puba; Queijadinha; Cajuzinho; Paçoca de pilão; Doce de mamão|Doce de mamão verde; Pipoca doce; Batata-doce assada
8: Bolo Souza Leão; Bolo de carimã; Manzape; Grude; Pamonha de sal
9: Bolo de mandioca|Bolo de aipim|Bolo de macaxeira; Manuê|Manauê
10: Mingau de milho verde|Mingau de milho
`,
    },
  ],
};
