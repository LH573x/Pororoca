import type { ThemeDef } from '../../types';

export const novelas: ThemeDef = {
  id: 'novelas',
  name: 'Novelas',
  questions: [
    {
      // todas as novelas das faixas das seis, sete, oito, nove, dez e onze da TV Globo (1965 a 2026), conferidas na Wikipédia
      id: 'novela',
      t: 'Uma novela da Globo',
      a: `
1: O Clone; Avenida Brasil
2: Mulheres de Areia; Roque Santeiro; Vale Tudo; Por Amor; Terra Nostra; Laços de Família; Senhora do Destino; A Favorita; Pantanal
3: Escrava Isaura; Irmãos Coragem; O Cravo e a Rosa; Chocolate com Pimenta; Alma Gêmea; Top Model; Vamp; A Viagem; Da Cor do Pecado; Cobras & Lagartos|Cobras e Lagartos; Cheias de Charme; Totalmente Demais; Vai na Fé; Selva de Pedra; Dancin' Days|Dancin Days; Tieta; Rainha da Sucata; Renascer; A Próxima Vítima; Explode Coração; O Rei do Gado; Mulheres Apaixonadas; Celebridade; América; Belíssima; Páginas da Vida; Paraíso Tropical; Caminho das Índias; Passione; Fina Estampa; Salve Jorge; Amor à Vida; Império; A Força do Querer; O Outro Lado do Paraíso; Amor de Mãe; Travessia; Terra e Paixão; O Bem-Amado; Gabriela; Verdades Secretas|Verdades Secretas II; Malhação
4: Cabocla; Ciranda de Pedra; Sinhá Moça; Pecado Capital; Coração de Estudante; O Profeta; Lado a Lado; Joia Rara; Êta Mundo Bom!|Êta Mundo Bom; Novo Mundo; Orgulho e Paixão; Éramos Seis; Garota do Momento; Guerra dos Sexos; Ti Ti Ti; Que Rei Sou Eu?|Que Rei Sou Eu; Quatro por Quatro; Andando nas Nuvens; Uga Uga; O Beijo do Vampiro; Kubanacan; Beleza Pura; Caras & Bocas|Caras e Bocas; Haja Coração; Deus Salve o Rei; O Tempo Não Para; Bom Sucesso; Família É Tudo; Volta por Cima; Dona de Mim; O Astro; O Salvador da Pátria; Pedra sobre Pedra; Fera Ferida; A Indomada; Torre de Babel; Suave Veneno; Porto dos Milagres; Esperança; Duas Caras; Viver a Vida; Insensato Coração; Babilônia; A Regra do Jogo; Velho Chico; A Lei do Amor; Segundo Sol; O Sétimo Guardião; A Dona do Pedaço; Um Lugar ao Sol; Mania de Você; Três Graças; Saramandaia
5: Barriga de Aluguel; Despedida de Solteiro; Tropicaliente; História de Amor; Anjo Mau; Força de um Desejo; Estrela-Guia; A Padroeira; Agora É que São Elas; Como uma Onda; Eterna Magia; Desejo Proibido; Cama de Gato; Escrito nas Estrelas; Araguaia; Cordel Encantado; A Vida da Gente; Amor Eterno Amor; Flor do Caribe; Sete Vidas; Além do Tempo; Sol Nascente; Tempo de Amar; Espelho da Vida; Órfãos da Terra; Nos Tempos do Imperador; Além da Ilusão; Mar do Sertão; Amor Perfeito; Elas por Elas; No Rancho Fundo; Êta Mundo Melhor!|Êta Mundo Melhor; A Nobreza do Amor; Estúpido Cupido; Locomotivas; Brega & Chique|Brega e Chique; Sassaricando; Bebê a Bordo; Perigosas Peruas; Deus Nos Acuda; Cara & Coroa|Cara e Coroa; Zazá; Corpo Dourado; Meu Bem Querer; Vila Madalena; Um Anjo Caiu do Céu; As Filhas da Mãe; Desejos de Mulher; Começar de Novo; A Lua Me Disse; Bang Bang; Pé na Jaca; Sete Pecados; Três Irmãs; Tempos Modernos; Morde & Assopra|Morde e Assopra; Aquele Beijo; Sangue Bom; Além do Horizonte; Geração Brasil; Alto Astral; I Love Paraisópolis; Rock Story; Pega Pega; Verão 90; Salve-se Quem Puder; Quanto Mais Vida, Melhor!|Quanto Mais Vida, Melhor; Cara e Coragem; Fuzuê; Coração Acelerado; Por Você; Escalada; O Casarão; Pai Herói; Água Viva; Baila Comigo; Mandala; Meu Bem, Meu Mal; O Dono do Mundo; De Corpo e Alma; Pátria Minha; O Fim do Mundo; Em Família; Quem Ama Cuida; Guerreiros do Sol; Liberdade, Liberdade; Os Dias Eram Assim; Onde Nascem os Fortes; Todas as Flores
6: Quem É Você?|Quem É Você; Anjo de Mim; O Amor Está no Ar; Era uma Vez...|Era uma Vez; Esplendor; Sabor da Paixão; Boogie Oogie; Lá na Minha Terra; Vira Lata; Salsa e Merengue
7: A Gata Comeu; De Quina pra Lua; Direito de Amar; Bambolê; Fera Radical; Vida Nova; Pacto de Sangue; O Sexo dos Anjos; Gente Fina; Salomé; Felicidade; Sonho Meu; Um Sonho a Mais; Cambalacho; Hipertensão; Mico Preto; Lua Cheia de Amor; O Mapa da Mina; Olho no Olho; Roda de Fogo; O Outro; Araponga
8: Helena; O Noviço; Senhora; A Moreninha; Vejo a Lua no Céu; O Feijão e o Sonho; À Sombra dos Laranjais; Dona Xepa; Sinhazinha Flô; Maria, Maria; Gina; A Sucessora; Memórias de Amor; Olhai os Lírios do Campo; Marina; As Três Marias; Terras do Sem-Fim; O Homem Proibido; Paraíso; Pão-Pão, Beijo-Beijo|Pão Pão, Beijo Beijo; Voltei pra Você; Amor com Amor Se Paga; Livre para Voar; Cuca Legal; Bravo!|Bravo; Sem Lenço, sem Documento; Te Contei?|Te Contei; Pecado Rasgado; Feijão Maravilha; Marron Glacé; Chega Mais; Plumas e Paetês; O Amor É Nosso; Jogo da Vida; Final Feliz; Transas e Caretas; Vereda Tropical; Duas Vidas; Espelho Mágico; Os Gigantes; Coração Alado; Brilhante; Sétimo Sentido; Sol de Verão; Louco Amor; Champagne; Partido Alto; Corpo a Corpo; O Grito; Nina; O Pulo do Gato; Sinal de Alerta; Eu Prometo
9: Meu Pedacinho de Chão; Bicho do Mato; A Patota; Rosinha do Sobrado; Padre Tião; O Santo Mestiço; A Grande Mentira; A Cabana do Pai Tomás; Pigmalião 70; A Próxima Atração; Minha Doce Namorada; O Primeiro Amor; Uma Rosa com Amor; Carinhoso; Supermanoela; Corrida do Ouro; O Ébrio; O Rei dos Ciganos; A Sombra de Rebecca; Anastácia, a Mulher sem Destino|Anastácia; Sangue e Areia; Passo dos Ventos; Rosa Rebelde; Véu de Noiva; O Homem Que Deve Morrer; Cavalo de Aço; O Semideus; Fogo sobre Terra; Ilusões Perdidas; Paixão de Outono; Um Rosto de Mulher; Eu Compro Esta Mulher; O Sheik de Agadir; A Rainha Louca; A Gata de Vison; A Última Valsa; A Ponte dos Suspiros; Verão Vermelho; Assim na Terra como no Céu; O Cafona; Bandeira 2; O Bofe; Os Ossos do Barão; O Espigão; O Rebu
`,
    },
  ],
};

export const folclore: ThemeDef = {
  id: 'folclore',
  name: 'Folclore',
  questions: [
    {
      id: 'personagem',
      t: 'Um personagem do folclore brasileiro',
      a: `
1: Saci|Saci-pererê|Saci Pererê
2: Curupira; Iara|Mãe-d'água|Mãe d'água; Mula sem cabeça|Mula-sem-cabeça
3: Boitatá; Cuca; Boto|Boto-cor-de-rosa; Lobisomem
4: Negrinho do Pastoreio; Caipora; Mapinguari; Bicho-papão|Bicho papão
5: Naiá|Vitória-régia; Mãe do Ouro; Corpo-seco|Corpo seco; Pisadeira; Boi-bumbá|Bumba-meu-boi; Cobra Grande|Boiuna; Homem do saco|Velho do saco
6: Comadre Fulozinha|Comadre Florzinha; Cabra-cabriola|Cabra Cabriola; Matinta Perera|Matintaperera|Matita Pereira; Romãozinho; Papa-figo; Anhangá; Mãe da Mata; Caboclo d'água
7: Alamoa; Barba Ruiva; Labatut; Pé de garrafa; Quibungo; Ipupiara; Mão de cabelo|Mão-de-cabelo; Chibamba; Jurupari; Tutu Marambá|Tutu; Pai do Mato
8: Bradador; Carneiro de Ouro; Cumacanga; Lavadeira da meia-noite; Porca dos sete leitões; Bicho-Homem; Gorjala; Onça-boi; Mão-pelada; Rasga-mortalha; Batatão
9: Capelobo; Jaci; Guaraci; Akuanduba; Ceiuci; Ahó Ahó; Arranca-línguas|Arranca-língua
`,
    },
  ],
};

export const desenhos: ThemeDef = {
  id: 'desenhos',
  name: 'Turma da Mônica e Sítio',
  questions: [
    {
      id: 'turma',
      t: 'Um personagem da Turma da Mônica',
      a: `
1: Mônica; Cebolinha
2: Cascão; Magali
3: Chico Bento; Bidu; Franjinha; Sansão|Coelho Sansão
4: Anjinho; Penadinho; Horácio; Mingau; Floquinho; Rosinha; Zé Lelé; Marina; Do Contra; Xaveco; Jeremias; Titi; Aninha; Denise; Milena
5: Papa-Capim; Piteco; Astronauta; Louco|Seu Louco; Capitão Feio; Dorinha; Humberto; Jotalhão; Pelezinho; Tina; Rolo; Dona Cebola; Seu Cebola; Dona Luísa; Dona Lurdinha
6: Nimbus; Luca; Quinzinho; Carminha Frufru; Pipa; Vó Dita; Nhô Lau; Cranícola; Zé Vampir; Lobi; Muminho; Frank|Frankenstein; Dona Morte|Morte; Thuga|Thunga; Dudu; Maria Cascuda; Professora Marocas|Dona Marocas; Hiro; Zé da Roça; Genesinho; Alminha; Raposão
7: Lucinda; Ritinha; Tikara; Keika; Tarugo; Zecão; Chovinista; Ogra; Tecodonte; Dr. Spam|Doutor Spam; Bugu; Sapo Bocó
`,
    },
    {
      id: 'sitio',
      t: 'Um personagem do Sítio do Picapau Amarelo',
      a: `
1: Emília|Boneca Emília
2: Narizinho; Pedrinho; Visconde de Sabugosa|Visconde; Dona Benta; Tia Nastácia|Tia Anastácia
3: Cuca; Saci|Saci-pererê
4: Rabicó|Marquês de Rabicó; Tio Barnabé; Quindim; Conselheiro|Burro Falante
5: Iara; Curupira; Mula sem cabeça; Boitatá; Lobisomem; Príncipe Escamado; Dona Carochinha; Pequeno Polegar|Polegar
6: Doutor Caramujo; Major Agarra-e-não-larga-mais|Major Agarra; Dona Aranha; Peter Pan; Capitão Gancho; Branca de Neve; Cinderela; Chapeuzinho Vermelho; Gato Félix; Dom Quixote; Sancho Pança; Hércules; Minotauro; Pinóquio; Aladim
7: Coronel Teodorico; Elias Turco; Américo Pisca-Pisca; Hans Staden; Peninha; Bela Adormecida; Pena-Branca|Pena Branca; Medusa; Perseu; Teseu; Ulisses; Barão de Münchhausen|Barão de Munchausen; Alice; Gato de Botas; Sereia
`,
    },
  ],
};
