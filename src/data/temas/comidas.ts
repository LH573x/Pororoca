import type { ThemeDef } from '../../types';

export const comidas: ThemeDef = {
  id: 'comidas',
  name: 'Frutas e hortaliças',
  questions: [
    {
      id: 'fruta',
      t: 'Uma fruta',
      a: `
1: Banana|Banana-prata|Banana-nanica|Banana-maçã|Banana-da-terra; Maçã|Maca; Laranja|Laranja-lima|Laranja-pera|Laranja-bahia
2: Morango; Uva; Manga; Abacaxi; Melancia
3: Mamão|Papaia|Papaya; Pera; Limão|Limão-taiti|Limão-siciliano|Limão-galego; Maracujá; Goiaba; Melão; Abacate
4: Tangerina|Mexerica|Bergamota|Mimosa|Poncã|Ponkan|Mandarina|Murcote; Kiwi; Coco|Coco-verde|Coco-da-baía; Caju; Pêssego; Acerola; Açaí; Jabuticaba|Jaboticaba; Cereja; Ameixa
5: Graviola; Carambola; Pitanga; Cupuaçu; Figo; Caqui; Romã; Amora|Blackberry; Framboesa; Mirtilo|Blueberry; Pitaya|Pitaia|Fruta-do-dragão; Lichia; Jaca; Fruta-do-conde|Pinha|Ata; Tomate
6: Nectarina; Cajá|Taperebá; Siriguela|Seriguela|Ciriguela; Umbu|Imbu; Pequi; Buriti; Tamarindo; Cacau; Damasco|Abricó-europeu; Physalis|Fisális; Kinkan|Kumquat; Atemoia; Sapoti; Jambo; Guaraná; Groselha; Marmelo; Nêspera|Ameixa-amarela; Cranberry|Oxicoco; Tâmara; Lima|Lima-da-pérsia; Toranja|Grapefruit|Pomelo; Azeitona|Oliva; Mangaba; Jenipapo
7: Cambuci; Bacuri; Murici|Muruci; Araçá; Pupunha; Bacaba; Tucumã; Uvaia; Grumixama; Gabiroba|Guabiroba|Guavira; Cagaita; Ingá; Camu-camu; Jatobá; Mangostão|Mangustão; Rambutã|Rambutan; Feijoa|Goiaba-serrana; Abiu; Biribá; Fruta-pão; Jamelão|Jambolão; Noni; Durião|Durian; Cabeludinha; Butiá; Pitomba; Cajá-manga|Cajarana|Umbu-cajá; Goji|Goji berry; Juçara; Cidra; Melão-cantalupe|Cantalupo; Maracujá-doce
8: Bacupari; Cereja-do-rio-grande; Puçá; Araticum|Marolo; Pequiá; Uxi; Sorva; Mamey|Sapota; Salak; Longan|Olho-de-dragão; Kiwano|Melão-africano; Jaracatiá; Cutite; Pajurá; Guapeva; Mapati|Uva-da-amazônia; Bacuripari; Mabolo; Juá; Cajuí; Oiti; Condessa; Cambucá; Araçá-boi; Abricó-do-pará|Abricó; Tamarillo|Tomate-de-árvore; Sapucaia; Murta; Cereja-do-mato; Maná-cubiu|Cubiu
9: Fruta-de-lobo|Lobeira; Ameixa-do-cerrado; Pera-do-cerrado; Mama-cadela; Araçá-piranga; Guabiju; Sete-capotes; Guajiru|Ajuru; Macaúba|Bocaiuva; Inajá; Patauá; Umari|Mari; Achachairu; Saputá
`,
    },
    {
      id: 'hortalica',
      t: 'Uma verdura ou legume',
      r: 'que não seja grão nem fruta doce',
      a: `
1: Alface; Cenoura; Batata|Batata-inglesa
2: Tomate; Cebola|Cebola-roxa; Brócolis|Brócolos; Abobrinha; Couve|Couve-manteiga; Pepino; Repolho|Repolho-roxo
3: Beterraba; Chuchu; Abóbora|Jerimum|Moranga|Abóbora-cabotiá|Cabotiá|Abóbora-menina; Couve-flor; Mandioca|Aipim|Macaxeira; Pimentão; Espinafre; Berinjela; Rúcula; Quiabo; Batata-doce; Vagem
4: Alho; Milho|Milho-verde; Agrião; Inhame|Cará; Jiló; Ervilha|Ervilha-torta; Rabanete; Maxixe; Almeirão; Acelga; Alho-poró|Alho-porró; Salsa|Salsinha; Cebolinha; Coentro; Escarola|Chicória
5: Nabo; Aspargo|Aspargos; Mandioquinha|Batata-baroa|Batata-salsa; Taioba; Ora-pro-nóbis; Bertalha; Couve-de-bruxelas; Palmito; Gengibre; Erva-doce|Funcho; Salsão|Aipo; Alcachofra; Cogumelo|Champignon|Shimeji|Shiitake; Pimenta; Hortelã; Manjericão
6: Mostarda; Serralha; Beldroega; Caruru; Jambu; Vinagreira|Azedinha|Hibisco; Gobô|Bardana; Yacon|Batata-yacon; Couve-chinesa|Acelga-chinesa|Pak choi|Bok choy; Endívia; Radicchio; Kale; Broto de feijão|Moyashi; Broto de bambu; Couve-rábano; Pepino-japonês; Abóbora-d'água|Cabaça
7: Cardo; Tupinambo|Alcachofra-de-jerusalém; Pastinaca|Cherívia; Rutabaga; Taro; Raiz de lótus|Lótus; Peixinho-da-horta|Peixinho; Capuchinha; Chicória-do-pará; Cará-do-ar; Araruta; Jacatupé; Mangarito; Physalis-verde|Tomatillo; Mizuna; Tatsoi; Rabanete-japonês|Daikon; Feijão-de-vagem|Feijão-vagem; Quiabo-de-metro
8: Cará-moela; Bertalha-coração; Major-gomes; Picão; Dente-de-leão; Tanchagem|Tansagem; Labaça; Língua-de-vaca; Raiz-forte|Batata-crem
`,
    },
  ],
};
