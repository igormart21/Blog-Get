export const cities = [
    { name: 'Canoas', slug: 'canoas', state: 'RS', url: 'https://canoas.desentupidora24horas.tec.br' },
    { name: 'Cuiabá', slug: 'cuiaba', state: 'MT', url: 'https://cuiaba.desentupidora24horas.tec.br' },
    { name: 'Campo Grande', slug: 'campo-grande', state: 'MS', url: 'https://campogrande.desentupidora24horas.tec.br' },
    { name: 'Porto Alegre', slug: 'porto-alegre', state: 'RS', url: 'https://desentupidora24horas.tec.br' },
];

export const categories = [
    { name: 'Dicas de Desentupimento', slug: 'dicas' },
    { name: 'Manutenção Preventiva', slug: 'manutencao' },
    { name: 'Hidrojateamento', slug: 'hidrojateamento' },
    { name: 'Limpa Fossa', slug: 'limpa-fossa' },
    { name: 'Esgoto e Redes', slug: 'esgoto' },
    { name: 'Banheiros', slug: 'banheiros' },
    { name: 'Cozinha e Pia', slug: 'cozinha' },
    { name: 'Condomínios', slug: 'condominios' },
    { name: 'Emergencial', slug: 'emergencial' },
    { name: 'Serviços 24h', slug: 'servicos-24h' },
];

export const siteConfig = {
    name: 'G-TEC Desentupidora',
    phone: '(14) 99765-5340',
    whatsapp: '5514997655340',
    email: 'contato@gtecdesentupidora.com.br',
    location: 'Canoas e região',
    state: 'RS',
    country: 'Brasil',
    serviceHours: '24 horas por dia, 7 dias por semana',
    cta: {
        primary: 'Agende Visita Grátis',
        secondary: 'Orçamento Online',
    }
};

export interface ServiceDetail {
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    causes: string[];
    signs: string[];
    benefits: string[];
}

export const services: ServiceDetail[] = [
    {
        name: 'Desentupimento de Pia',
        slug: 'pia',
        description: 'Serviço especializado em desentupimento de pias de cozinha e banheiro.',
        longDescription: 'O entupimento de pia é um dos problemas mais comuns em residências e comércios. Nossa equipe utiliza equipamentos modernos para desobstruir a tubulação sem causar danos, removendo gordura e restos de alimentos que causam o bloqueio. Atendemos com rapidez em Canoas, Porto Alegre, Cuiabá e Campo Grande, garantindo o melhor preço de desentupimento de pia da região. Se você procura "desentupidora de pia perto de mim", a G-TEC é a solução.',
        causes: ['Acúmulo de gordura e óleo', 'Restos de comida', 'Borra de café', 'Fios de cabelo (em banheiros)'],
        signs: ['Água descendo lentamente', 'Mau cheiro vindo do ralo', 'Barulhos estranhos na tubulação', 'Retorno de água'],
        benefits: ['Atendimento imediato', 'Sem quebra de pisos ou paredes', 'Garantia de 90 dias', 'Equipamentos rotativos e hidrojateamento']
    },
    {
        name: 'Desentupimento de Ralo',
        slug: 'ralo',
        description: 'Desentupimento de ralos internos e externos com rapidez.',
        longDescription: 'Ralos entupidos podem causar inundações e mau cheiro. Realizamos a limpeza completa de ralos de banheiro, área de serviço e quintal, garantindo o fluxo normal da água. Especialistas em desentupimento de ralo de chuveiro e ralo pluvial em Canoas e Porto Alegre. Removemos sujeira, cabelos e objetos que obstruem a passagem da água.',
        causes: ['Cabelos e pelos', 'Restos de sabonete', 'Objetos caídos acidentalmente', 'Folhas e sujeira (ralos externos)'],
        signs: ['Poças de água no box', 'Cheiro de esgoto', 'Insetos saindo do ralo', 'Água parada'],
        benefits: ['Higienização do local', 'Prevenção de infiltrações', 'Serviço rápido e limpo', 'Técnicos experientes']
    },
    {
        name: 'Desentupimento de Vaso',
        slug: 'vaso',
        description: 'Desentupimento de vaso sanitário com urgência 24h.',
        longDescription: 'Vaso sanitário entupido é uma emergência que precisa de solução rápida. Utilizamos técnicas que desobstruem o vaso sem a necessidade de removê-lo na maioria dos casos, preservando seu banheiro. Serviço de desentupidora de vaso sanitário 24 horas em Cuiabá e Campo Grande. Resolvemos entupimentos causados por papel higiênico, objetos e detritos.',
        causes: ['Papel higiênico em excesso', 'Objetos caídos (brinquedos, frascos)', 'Absorventes e fraldas', 'Problemas na instalação'],
        signs: ['Água subindo ao dar descarga', 'Vaso transbordando', 'Escoamento muito lento', 'Borbulhas na água'],
        benefits: ['Atendimento discreto', 'Resolução rápida', 'Equipamentos específicos', 'Plantão 24 horas']
    },
    {
        name: 'Desentupimento de Esgoto',
        slug: 'esgoto',
        description: 'Limpeza e desobstrução de redes de esgoto residencial e comercial.',
        longDescription: 'O entupimento da rede de esgoto pode paralisar toda a casa ou empresa. Realizamos o desentupimento de caixas de inspeção, ramais de esgoto e tubulações principais com hidrojateamento de alta pressão. A melhor desentupidora de esgoto em Canoas e região. Limpeza de rede de esgoto com garantia e preço justo.',
        causes: ['Raízes de árvores', 'Gordura solidificada', 'Detritos de obras', 'Tubulação antiga ou quebrada'],
        signs: ['Mau cheiro forte no imóvel', 'Retorno de esgoto pelos ralos', 'Vaso sanitário borbulhando', 'Umidade nas paredes'],
        benefits: ['Vídeo inspeção para diagnóstico', 'Caminhão de hidrojateamento', 'Limpeza completa da rede', 'Prevenção de novos entupimentos']
    },
    {
        name: 'Caixa de Gordura',
        slug: 'caixa-gordura',
        description: 'Limpeza de caixa de gordura manual e com caminhão.',
        longDescription: 'A caixa de gordura retém os resíduos da cozinha para não entupir a rede de esgoto. A limpeza periódica é essencial para evitar transbordamentos e mau cheiro. Realizamos a limpeza completa e descarte correto dos resíduos. Limpeza de caixa de gordura em Porto Alegre e Canoas com caminhão de sucção.',
        causes: ['Falta de manutenção periódica', 'Excesso de óleo na pia', 'Caixa subdimensionada', 'Resíduos sólidos'],
        signs: ['Caixa transbordando', 'Mau cheiro na cozinha', 'Pia entupida constantemente', 'Insetos (baratas) na área'],
        benefits: ['Evita entupimento geral', 'Elimina o mau cheiro', 'Descarte ecológico', 'Contrato de manutenção disponível']
    },
    {
        name: 'Limpa Fossa',
        slug: 'limpa-fossa',
        description: 'Esgotamento e limpeza de fossas sépticas e negras.',
        longDescription: 'Serviço de limpa fossa com caminhão auto vácuo. Realizamos a sucção dos resíduos, limpeza das paredes da fossa e transporte para estação de tratamento autorizada. Caminhão limpa fossa em Cuiabá e Campo Grande com atendimento imediato. Esgotamento de fossa séptica, negra e sumidouro.',
        causes: ['Fossa cheia (tempo de uso)', 'Falta de permeabilidade do solo', 'Churrasqueira ou ralo ligado na fossa', 'Excesso de chuva'],
        signs: ['Grama muito verde ou úmida sobre a fossa', 'Mau cheiro no quintal', 'Esgoto retornando', 'Banheiros entupidos'],
        benefits: ['Caminhões de diversas capacidades', 'Certificado de destinação', 'Atendimento em chácaras e sítios', 'Equipe qualificada']
    },
    {
        name: 'Hidrojateamento',
        slug: 'hidrojateamento',
        description: 'Desentupimento e limpeza técnica com alta pressão.',
        longDescription: 'O hidrojateamento utiliza água em alta pressão para limpar tubulações, removendo as incrustações mais difíceis, raízes e gordura. Ideal para redes de esgoto, pluviais e industriais. Serviço de hidrojateamento em Canoas para limpeza de fachadas, pisos e tubulações industriais.',
        causes: ['Incrustações antigas', 'Raízes na tubulação', 'Cimento ou restos de obra', 'Gordura petrificada'],
        signs: ['Entupimentos recorrentes', 'Fluxo de água reduzido', 'Necessidade de limpeza profunda', 'Tubulações de grande diâmetro'],
        benefits: ['Limpeza 100% da tubulação', 'Não danifica os canos', 'Solução ecológica (apenas água)', 'Ideal para condomínios']
    },
    {
        name: 'Vídeo Inspeção',
        slug: 'video-inspecao',
        description: 'Diagnóstico preciso de tubulações com câmera.',
        longDescription: 'Localizamos o problema exato sem quebrar nada. A vídeo inspeção permite visualizar o interior da tubulação, identificando rachaduras, raízes, objetos e o local exato do entupimento. Caça vazamentos e inspeção de esgoto com câmera em Porto Alegre e região.',
        causes: ['Vazamentos ocultos', 'Entupimentos não localizados', 'Suspeita de cano quebrado', 'Mapeamento de rede'],
        signs: ['Infiltrações sem origem aparente', 'Entupimento que sempre volta', 'Perda de água', 'Necessidade de laudo técnico'],
        benefits: ['Diagnóstico preciso', 'Evita quebra-quebra desnecessário', 'Gravação do serviço', 'Economia de tempo e dinheiro']
    },
    {
        name: 'Emergência 24h',
        slug: 'emergencia',
        description: 'Atendimento emergencial para desentupimentos graves.',
        longDescription: 'Problemas de entupimento não têm hora para acontecer. Nossa equipe de plantão está pronta para atender emergências em residências, condomínios e empresas, dia e noite. Desentupidora 24 horas em Canoas, Porto Alegre, Cuiabá e Campo Grande. Atendemos domingos e feriados.',
        causes: ['Entupimento total do esgoto', 'Inundação por retorno de água', 'Vaso sanitário inutilizável', 'Rompimento de tubulação'],
        signs: ['Situação incontrolável', 'Risco à saúde ou patrimônio', 'Necessidade imediata', 'Horários fora do comercial'],
        benefits: ['Chegada em até 40 min', 'Equipamentos portáteis e caminhões', 'Resolução no primeiro atendimento', 'Taxas justas']
    }
];
