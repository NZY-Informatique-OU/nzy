export const languages = ['fr', 'en', 'et', 'es', 'pt', 'uk', 'ru', 'hu'] as const
export type Lang = (typeof languages)[number]

export const langNames: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
  et: 'Eesti',
  es: 'Español',
  pt: 'Português',
  uk: 'Українська',
  ru: 'Русский',
  hu: 'Magyar',
}

const fr = {
  metaTitle: 'NZY Informatique OÜ — Conseil & développement informatique',
  selectLanguage: 'Choisir la langue',
  nav: {
    home: 'Accueil',
    expertise: 'Notre expertise',
    about: 'À propos',
  },
  hero: {
    subtitle:
      "Conseil et développement informatique. NZY Informatique OÜ (Ltd./SARL) — Société européenne basée en Estonie",
    cta: 'Découvrir notre expertise',
  },
  home: {
    introTitle: "Vos projets web ambitieux, pilotés par l'intelligence artificielle",
    introP1:
      "NZY Informatique OÜ accompagne les entreprises européennes dans la conception et la réalisation d'applications web avancées. Notre démarche s'appuie sur une analyse de projet augmentée par l'intelligence artificielle : nous exploitons les modèles les plus récents pour cartographier vos besoins, challenger les scénarios d'usage, détecter les risques d'architecture et produire des spécifications d'une précision inédite — avant même la première ligne de code.",
    introP2a: 'Nous assumons le ',
    introP2Strong: 'cycle complet de votre projet',
    introP2b:
      " : de l'étude initiale et du conseil auprès des gestionnaires de projets métier, jusqu'au développement clés en main de la solution. Cadrage fonctionnel, assistance à maîtrise d'ouvrage, architecture, développement, tests, déploiement cloud et transfert de compétences : un interlocuteur unique, une vision de bout en bout.",
    consultingTitle: 'Étude & conseil',
    consultingText:
      "Analyse assistée par l'IA de vos projets applicatifs, cadrage fonctionnel et accompagnement de vos équipes de maîtrise d'ouvrage, de l'expression du besoin au dossier de spécifications.",
    devTitle: 'Développement clés en main',
    devText:
      "Conception et réalisation complètes d'applications web modernes : architecture, développement, tests, livraison et mise en production — prêtes à l'emploi.",
    cloudTitle: 'Solutions IA & cloud',
    cloudText:
      "Agents intelligents, applications intégrant l'IA et infrastructures cloud infrastructure-as-code, déployées sur la plateforme adaptée à votre contexte.",
    contactTitle: 'Parlons de votre projet',
    contactText: 'Une idée, un cahier des charges, une application à moderniser ? Écrivez-nous.',
  },
  expertise: {
    title: 'Notre expertise',
    lead: "Une ingénierie logicielle moderne, où l'intelligence artificielle intervient à chaque étape — et devient aussi l'objet même de nos réalisations.",
    aiPanelTitle: "L'IA dans tout notre cycle de développement",
    aiPanelText:
      "L'intelligence artificielle n'est pas chez nous un effet de mode : c'est un outil d'ingénierie intégré à l'ensemble de notre chaîne de production. Elle accélère l'analyse des besoins, aide à explorer les architectures possibles, participe à la génération et à la revue de code, renforce la couverture de tests et fluidifie la rédaction de la documentation. Chaque livrable reste validé par nos ingénieurs : l'IA augmente notre productivité et notre exigence qualité, elle ne s'y substitue pas.",
    steps: [
      { title: 'Étude & cadrage', text: "Analyse du besoin augmentée par l'IA : ateliers, modélisation des parcours, spécifications." },
      { title: 'Conception', text: 'Architecture applicative et cloud, choix techniques validés par prototypage assisté.' },
      { title: 'Développement', text: "Code généré et revu avec l'appui de l'IA, contrôle qualité humain systématique." },
      { title: 'Tests & livraison', text: 'Stratégie de tests automatisés, recette, documentation et déploiement.' },
      { title: 'Run & évolution', text: 'Exploitation, observabilité et transfert de compétences vers vos équipes.' },
    ],
    solutionsTitle: 'Création de solutions IA',
    solutionsText:
      "Au-delà de son usage interne, nous concevons pour nos clients des solutions d'intelligence artificielle sur mesure : création d'agents autonomes capables d'exécuter des chaînes de tâches, applications métier intégrant des modèles de langage (recherche augmentée, assistants conversationnels, traitement documentaire) et pipelines d'automatisation intelligents. Nous prenons en charge le choix des modèles, l'intégration à vos systèmes et la mise en production sécurisée.",
    aiChips: ['Agents autonomes', 'RAG', 'Chatbots métier', 'Automatisation', 'Analyse documentaire', 'IA générative'],
    cloudTitle: 'Applications cloud & infrastructure',
    cloudA:
      'Nous développons des applications cloud natives, avec une prédilection pour les infrastructures décrites en code via ',
    cloudB:
      ' : environnements reproductibles, déploiements maîtrisés et coûts optimisés. Notre savoir-faire s\'étend toutefois à la large gamme de plateformes utilisées sur le marché — notamment ',
    cloudC: ' et ',
    cloudD:
      ' — afin de nous adapter à votre écosystème existant plutôt que de vous imposer le nôtre.',
    cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
  },
  about: {
    title: 'À propos de nous',
    lead: "Une société estonienne au service de projets informatiques dans toute l'Europe.",
    whoTitle: 'Qui sommes-nous',
    whoP1:
      " est une société de conseil et de développement informatique immatriculée en Estonie (OÜ, équivalent estonien de la forme Ltd./SARL). Depuis Tallinn, nous intervenons pour des clients dans l'ensemble de l'Europe, en conseil comme en réalisation.",
    whoP2:
      "Nos activités couvrent deux pôles complémentaires : le conseil et l'assistance à maîtrise d'ouvrage auprès des porteurs de projets, et le développement clés en main d'applications web, de solutions d'intelligence artificielle et d'infrastructures cloud.",
    legalTitle: 'Informations légales',
    legalName: 'Dénomination',
    legalForm: 'Forme juridique',
    legalFormValue: 'Osaühing (OÜ) — société à responsabilité limitée de droit estonien',
    legalReg: "Numéro d'enregistrement",
    legalAddress: 'Adresse',
    legalAddressCity: '10114 Tallinn, Estonie',
    legalArea: "Zone d'activité",
    legalAreaValue: 'Europe entière',
    legalContact: 'Contact',
    consultingTitle: 'Conseil aux entreprises',
    consultingA: 'Sous sa marque ',
    consultingB:
      ", la société accompagne les gestionnaires de projets métier : analyse des besoins assistée par l'intelligence artificielle, cadrage fonctionnel et technique, rédaction de cahiers des charges, choix d'architecture et suivi de la réalisation. Notre rôle : sécuriser vos décisions et préparer un développement clés en main, que nous pouvons ensuite assurer nous-mêmes.",
  },
  footer: {
    tagline: 'Conseil & développement informatique — Europe',
    credits:
      'Photos : « Vanalinn, vue de Patkuli » par Ivar Leidus (CC BY-SA 3.0 EE) · « Mont-Blanc depuis le Salève » par Claudec (CC BY-SA 3.0) · « Parlement hongrois, Budapest » par Godot13 (CC BY-SA 4.0) — Wikimedia Commons',
  },
}

export type Messages = typeof fr

export const messages: Record<Lang, Messages> = {
  fr,
  en: {
    metaTitle: 'NZY Informatique OÜ — IT consulting & development',
    selectLanguage: 'Choose language',
    nav: {
      home: 'Home',
      expertise: 'Our expertise',
      about: 'About us',
    },
    hero: {
      subtitle:
        'IT consulting and development. NZY Informatique OÜ (Ltd.) — a European company based in Estonia',
      cta: 'Discover our expertise',
    },
    home: {
      introTitle: 'Your ambitious web projects, driven by artificial intelligence',
      introP1:
        'NZY Informatique OÜ supports European companies in the design and delivery of advanced web applications. Our approach relies on AI-augmented project analysis: we leverage the latest models to map your needs, challenge usage scenarios, detect architecture risks and produce specifications of unprecedented precision — before the first line of code is even written.',
      introP2a: 'We handle the ',
      introP2Strong: 'full lifecycle of your project',
      introP2b:
        ': from the initial study and consulting for business project managers to turnkey development of the solution. Functional scoping, product ownership assistance, architecture, development, testing, cloud deployment and skills transfer: a single point of contact, an end-to-end vision.',
      consultingTitle: 'Study & consulting',
      consultingText:
        'AI-assisted analysis of your application projects, functional scoping and support for your product ownership teams, from requirements gathering to the specification dossier.',
      devTitle: 'Turnkey development',
      devText:
        'Complete design and build of modern web applications: architecture, development, testing, delivery and go-live — ready to use.',
      cloudTitle: 'AI & cloud solutions',
      cloudText:
        'Intelligent agents, AI-powered applications and infrastructure-as-code cloud platforms, deployed on the platform that best fits your context.',
      contactTitle: "Let's talk about your project",
      contactText: 'An idea, a specification, an application to modernize? Write to us.',
    },
    expertise: {
      title: 'Our expertise',
      lead: 'Modern software engineering where artificial intelligence plays a role at every stage — and is also the very subject of what we build.',
      aiPanelTitle: 'AI throughout our development cycle',
      aiPanelText:
        'For us, artificial intelligence is not a passing trend: it is an engineering tool embedded across our entire production chain. It speeds up requirements analysis, helps explore candidate architectures, takes part in code generation and review, strengthens test coverage and streamlines documentation writing. Every deliverable is still validated by our engineers: AI boosts our productivity and our quality standards — it does not replace them.',
      steps: [
        { title: 'Study & scoping', text: 'AI-augmented requirements analysis: workshops, journey modelling, specifications.' },
        { title: 'Design', text: 'Application and cloud architecture, technology choices validated by assisted prototyping.' },
        { title: 'Development', text: 'Code generated and reviewed with AI support, systematic human quality control.' },
        { title: 'Testing & delivery', text: 'Automated testing strategy, acceptance, documentation and deployment.' },
        { title: 'Run & evolution', text: 'Operations, observability and skills transfer to your teams.' },
      ],
      solutionsTitle: 'Building AI solutions',
      solutionsText:
        'Beyond our internal use, we design bespoke artificial-intelligence solutions for our clients: autonomous agents able to execute task chains, business applications embedding language models (augmented search, conversational assistants, document processing) and intelligent automation pipelines. We take care of model selection, integration with your systems and secure go-live.',
      aiChips: ['Autonomous agents', 'RAG', 'Business chatbots', 'Automation', 'Document analysis', 'Generative AI'],
      cloudTitle: 'Cloud applications & infrastructure',
      cloudA:
        'We build cloud-native applications, with a preference for infrastructure described as code via ',
      cloudB:
        ': reproducible environments, controlled deployments and optimized costs. Our expertise nonetheless extends to the wide range of platforms used on the market — including ',
      cloudC: ' and ',
      cloudD: ' — so we adapt to your existing ecosystem rather than imposing ours.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'About us',
      lead: 'An Estonian company serving IT projects across Europe.',
      whoTitle: 'Who we are',
      whoP1:
        ' is an IT consulting and development company registered in Estonia (OÜ, the Estonian equivalent of Ltd.). From Tallinn, we serve clients across Europe, in both consulting and delivery.',
      whoP2:
        'Our activities cover two complementary areas: consulting and product-ownership assistance for project owners, and turnkey development of web applications, artificial-intelligence solutions and cloud infrastructures.',
      legalTitle: 'Legal information',
      legalName: 'Company name',
      legalForm: 'Legal form',
      legalFormValue: 'Osaühing (OÜ) — Estonian private limited company',
      legalReg: 'Registration number',
      legalAddress: 'Address',
      legalAddressCity: '10114 Tallinn, Estonia',
      legalArea: 'Area of activity',
      legalAreaValue: 'All of Europe',
      legalContact: 'Contact',
      consultingTitle: 'Business consulting',
      consultingA: 'Under its ',
      consultingB:
        ' brand, the company supports business project managers: AI-assisted requirements analysis, functional and technical scoping, specification writing, architecture choices and delivery oversight. Our role: secure your decisions and prepare turnkey development, which we can then carry out ourselves.',
    },
    footer: {
      tagline: 'IT consulting & development — Europe',
      credits:
        'Photos: "Tallinn old town from Patkuli" by Ivar Leidus (CC BY-SA 3.0 EE) · "Mont Blanc from Salève" by Claudec (CC BY-SA 3.0) · "Hungarian Parliament, Budapest" by Godot13 (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
  et: {
    metaTitle: 'NZY Informatique OÜ — IT-nõustamine ja -arendus',
    selectLanguage: 'Vali keel',
    nav: {
      home: 'Avaleht',
      expertise: 'Meie ekspertiis',
      about: 'Meist',
    },
    hero: {
      subtitle:
        'IT-nõustamine ja -arendus. NZY Informatique OÜ — Euroopa ettevõte, mis asub Eestis',
      cta: 'Tutvu meie ekspertiisiga',
    },
    home: {
      introTitle: 'Teie ambitsioonikad veebiprojektid, mida juhib tehisintellekt',
      introP1:
        'NZY Informatique OÜ aitab Euroopa ettevõtetel kavandada ja realiseerida keerukaid veebirakendusi. Meie lähenemine tugineb tehisintellektiga rikastatud projektianalüüsile: kasutame uusimaid mudeleid, et kaardistada teie vajadusi, vaidlustada kasutusstsenaariume, tuvastada arhitektuuririske ja koostada enneolematu täpsusega spetsifikatsioone — juba enne esimest koodirida.',
      introP2a: 'Võtame enda peale teie ',
      introP2Strong: 'projekti täieliku tsükli',
      introP2b:
        ': alates esialgsest uuringust ja äriprojektide juhtide nõustamisest kuni võtmed-kätte-arenduseni. Funktsionaalne raamistus, tellija-abistamine, arhitektuur, arendus, testimine, pilve-juurdutus ja oskusteabe üleandmine: üks kontaktisik, terviklik visioon algusest lõpuni.',
      consultingTitle: 'Uuring ja nõustamine',
      consultingText:
        'Teie rakendusprojektide tehisintellekti-toetatud analüüs, funktsionaalne raamistus ja tellijameeskondade abistamine vajaduse sõnastamisest spetsifikatsioonide dossierini.',
      devTitle: 'Võtmed kätte arendus',
      devText:
        'Kaasaegsete veebirakenduste täielik kavandamine ja realiseerimine: arhitektuur, arendus, testimine, tarnimine ja tootmisse-minek — kohe kasutamiseks valmis.',
      cloudTitle: 'Tehisintellekti- ja pilvlahendused',
      cloudText:
        'Arukad agendid, tehisintellekti sisaldavad rakendused ja koodina-kirjeldatud pilveinfrastruktuurid, juurutatud teie kontekstile sobivaimale platvormile.',
      contactTitle: 'Räägime teie projektist',
      contactText: 'Ideed, lähteülesannet või moderniseeritavat rakendust? Kirjutage meile.',
    },
    expertise: {
      title: 'Meie ekspertiis',
      lead: 'Kaasaegne tarkvaratehnika, kus tehisintellekt osaleb igas etapis — ja on ka meie loodavate lahenduste objektiks.',
      aiPanelTitle: 'Tehisintellekt kogu meie arendustsüklis',
      aiPanelText:
        'Tehisintellekt ei ole meie jaoks mööduv moesuund: see on inseneritööriist, mis on integreeritud kogu meie tootmisahelasse. See kiirendab vajaduste analüüsi, aitab uurida võimalikke arhitektuure, osaleb koodi genereerimisel ja läbivaatamisel, tugevdab testide katvust ja sujuvustab dokumentatsiooni koostamist. Iga tulemus kontrollivad siiski üle meie insenerid: tehisintellekt suurendab meie tootlikkust ja kvaliteedinõudmisi, kuid ei asenda neid.',
      steps: [
        { title: 'Uuring ja raamistus', text: 'Tehisintellektiga rikastatud vajaduste analüüs: töötoad, teekondade modelleerimine, spetsifikatsioonid.' },
        { title: 'Kavandamine', text: 'Rakenduse ja pilve arhitektuur, abistatud prototüüpimisega valideeritud tehnoloogilised valikud.' },
        { title: 'Arendus', text: 'Tehisintellekti toel genereeritud ja läbivaadatud kood, süstemaatiline inimkontroll.' },
        { title: 'Testimine ja tarnimine', text: 'Automatiseeritud testimisstrateegia, vastuvõtt, dokumentatsioon ja juurutus.' },
        { title: 'Kasutus ja areng', text: 'Haldus, jälgitavus ja oskusteabe üleandmine teie meeskondadele.' },
      ],
      solutionsTitle: 'Tehisintellekti lahenduste loomine',
      solutionsText:
        'Lisaks sisemisele kasutusele loome klientidele kohandatud tehisintellekti lahendusi: autonoomsed agendid, mis suudavad täita ülesannete ahelaid, keelemudeleid sisaldavad ärirakendused (rikastatud otsing, vestlusassistendid, dokumenditöötlus) ja arukate automatiseerimiste torujuhised. Hoolitseme mudelite valiku, teie süsteemidega integreerimise ja turvalise tootmisse-viimise eest.',
      aiChips: ['Autonoomsed agendid', 'RAG', 'Äri-vestlusbotid', 'Automatiseerimine', 'Dokumendianalüüs', 'Generatiivne AI'],
      cloudTitle: 'Pilvrakendused ja taristu',
      cloudA:
        'Arendame pilvepõhiseid rakendusi, eelistades koodina kirjeldatud taristuid läbi ',
      cloudB:
        ': taastoodetavad keskkonnad, kontrollitud juurutused ja optimeeritud kulud. Meie oskusteave ulatub siiski laiale turul kasutatavate platvormide valikule — sealhulgas ',
      cloudC: ' ja ',
      cloudD:
        ' — et kohaneda teie olemasoleva ökosüsteemiga, selle asemel et oma oma peale sundida.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'Meist',
      lead: 'Eesti ettevõte, mis teenindab infotehnoloogia projekte kogu Euroopas.',
      whoTitle: 'Kes me oleme',
      whoP1:
        ' on Eestis registreeritud infotehnoloogia nõustamis- ja arendusettevõte (OÜ — eraõiguslik piiratud vastutusega ühing). Tallinnast teenindame kliente kogu Euroopas nii nõustamise kui ka realiseerimise vallas.',
      whoP2:
        'Meie tegevus hõlmab kahte täiendavat valdkonda: nõustamine ja tellija-abistamine projektide omanikele ning veebirakenduste, tehisintellekti lahenduste ja pilveinfrastruktuuride võtmed-kätte-arendus.',
      legalTitle: 'Juriidiline teave',
      legalName: 'Nimetus',
      legalForm: 'Õigusvorm',
      legalFormValue: 'Osaühing (OÜ) — Eesti eraõiguslik piiratud vastutusega äriühing',
      legalReg: 'Registreerimisnumber',
      legalAddress: 'Aadress',
      legalAddressCity: '10114 Tallinn, Eesti',
      legalArea: 'Tegevuspiirkond',
      legalAreaValue: 'Kogu Euroopa',
      legalContact: 'Kontakt',
      consultingTitle: 'Nõustamine ettevõtetele',
      consultingA: 'Oma kaubamärgi ',
      consultingB:
        ' all toetab ettevõte äriprojektide juhte: tehisintellekti-toetatud vajaduste analüüs, funktsionaalne ja tehniline raamistus, lähteülesannete koostamine, arhitektuurivalikud ja teostuse järelvalve. Meie roll: tagada teie otsuste kindlus ja valmistada ette võtmed-kätte-arendus, mille saame seejärel ka ise teostada.',
    },
    footer: {
      tagline: 'IT-nõustamine ja -arendus — Euroopa',
      credits:
        'Fotod: Ivar Leiduse "Vanalinn Patkuli platvormilt" (CC BY-SA 3.0 EE) · Claudec\'i "Mont Blanc Salève\'ilt" (CC BY-SA 3.0) · Godot13 "Ungari parlement, Budapest" (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
  es: {
    metaTitle: 'NZY Informatique OÜ — Consultoría y desarrollo informático',
    selectLanguage: 'Elegir idioma',
    nav: {
      home: 'Inicio',
      expertise: 'Nuestra experiencia',
      about: 'Quiénes somos',
    },
    hero: {
      subtitle:
        'Consultoría y desarrollo informático. NZY Informatique OÜ (Ltd./SARL) — Empresa europea con sede en Estonia',
      cta: 'Descubra nuestra experiencia',
    },
    home: {
      introTitle: 'Sus proyectos web ambiciosos, impulsados por la inteligencia artificial',
      introP1:
        'NZY Informatique OÜ acompaña a las empresas europeas en el diseño y la realización de aplicaciones web avanzadas. Nuestro enfoque se basa en un análisis de proyectos aumentado por la inteligencia artificial: aprovechamos los modelos más recientes para cartografiar sus necesidades, cuestionar los escenarios de uso, detectar los riesgos de arquitectura y producir especificaciones de una precisión inédita, incluso antes de la primera línea de código.',
      introP2a: 'Asumimos el ',
      introP2Strong: 'ciclo completo de su proyecto',
      introP2b:
        ': desde el estudio inicial y el asesoramiento a los gestores de proyectos de negocio hasta el desarrollo llave en mano de la solución. Definición funcional, asistencia a la dirección de proyecto, arquitectura, desarrollo, pruebas, despliegue en la nube y transferencia de competencias: un único interlocutor, una visión de principio a fin.',
      consultingTitle: 'Estudio y consultoría',
      consultingText:
        'Análisis asistido por IA de sus proyectos de aplicación, definición funcional y acompañamiento de sus equipos de dirección de proyecto, desde la expresión de la necesidad hasta el expediente de especificaciones.',
      devTitle: 'Desarrollo llave en mano',
      devText:
        'Diseño y realización completos de aplicaciones web modernas: arquitectura, desarrollo, pruebas, entrega y puesta en producción, listas para usar.',
      cloudTitle: 'Soluciones de IA y nube',
      cloudText:
        'Agentes inteligentes, aplicaciones que integran IA e infraestructuras cloud como código, desplegadas en la plataforma más adecuada a su contexto.',
      contactTitle: 'Hablemos de su proyecto',
      contactText: '¿Una idea, un pliego de condiciones, una aplicación que modernizar? Escríbanos.',
    },
    expertise: {
      title: 'Nuestra experiencia',
      lead: 'Una ingeniería de software moderna, en la que la inteligencia artificial interviene en cada etapa y es también el objeto mismo de nuestras realizaciones.',
      aiPanelTitle: 'La IA en todo nuestro ciclo de desarrollo',
      aiPanelText:
        'La inteligencia artificial no es para nosotros un efecto de moda: es una herramienta de ingeniería integrada en toda nuestra cadena de producción. Acelera el análisis de las necesidades, ayuda a explorar las arquitecturas posibles, participa en la generación y revisión del código, refuerza la cobertura de pruebas y agiliza la redacción de la documentación. Cada entregable sigue siendo validado por nuestros ingenieros: la IA aumenta nuestra productividad y nuestra exigencia de calidad, no la sustituye.',
      steps: [
        { title: 'Estudio y definición', text: 'Análisis de necesidades aumentado por IA: talleres, modelado de recorridos, especificaciones.' },
        { title: 'Diseño', text: 'Arquitectura de aplicación y cloud, elecciones técnicas validadas mediante prototipado asistido.' },
        { title: 'Desarrollo', text: 'Código generado y revisado con apoyo de IA, control de calidad humano sistemático.' },
        { title: 'Pruebas y entrega', text: 'Estrategia de pruebas automatizadas, aceptación, documentación y despliegue.' },
        { title: 'Explotación y evolución', text: 'Operación, observabilidad y transferencia de competencias a sus equipos.' },
      ],
      solutionsTitle: 'Creación de soluciones de IA',
      solutionsText:
        'Más allá de su uso interno, diseñamos para nuestros clientes soluciones de inteligencia artificial a medida: agentes autónomos capaces de ejecutar cadenas de tareas, aplicaciones de negocio que integran modelos de lenguaje (búsqueda aumentada, asistentes conversacionales, tratamiento documental) y pipelines de automatización inteligente. Nos encargamos de la elección de los modelos, la integración con sus sistemas y la puesta en producción segura.',
      aiChips: ['Agentes autónomos', 'RAG', 'Chatbots de negocio', 'Automatización', 'Análisis documental', 'IA generativa'],
      cloudTitle: 'Aplicaciones cloud e infraestructura',
      cloudA:
        'Desarrollamos aplicaciones nativas de la nube, con predilección por las infraestructuras descritas en código a través de ',
      cloudB:
        ': entornos reproducibles, despliegues controlados y costes optimizados. No obstante, nuestro saber hacer se extiende a la amplia gama de plataformas utilizadas en el mercado —en particular ',
      cloudC: ' y ',
      cloudD:
        '— para adaptarnos a su ecosistema existente en lugar de imponer el nuestro.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'Quiénes somos',
      lead: 'Una empresa estonia al servicio de los proyectos informáticos en toda Europa.',
      whoTitle: 'Quiénes somos',
      whoP1:
        ' es una empresa de consultoría y desarrollo informático registrada en Estonia (OÜ, equivalente estonio de la forma Ltd.). Desde Tallin, intervenimos para clientes en toda Europa, tanto en consultoría como en realización.',
      whoP2:
        'Nuestras actividades abarcan dos ámbitos complementarios: la consultoría y la asistencia a la dirección de proyecto junto a los propietarios de proyectos, y el desarrollo llave en mano de aplicaciones web, soluciones de inteligencia artificial e infraestructuras cloud.',
      legalTitle: 'Información legal',
      legalName: 'Denominación',
      legalForm: 'Forma jurídica',
      legalFormValue: 'Osaühing (OÜ) — sociedad de responsabilidad limitada de derecho estonio',
      legalReg: 'Número de registro',
      legalAddress: 'Dirección',
      legalAddressCity: '10114 Tallin, Estonia',
      legalArea: 'Ámbito de actividad',
      legalAreaValue: 'Toda Europa',
      legalContact: 'Contacto',
      consultingTitle: 'Consultoría para empresas',
      consultingA: 'Bajo su marca ',
      consultingB:
        ', la empresa acompaña a los gestores de proyectos de negocio: análisis de necesidades asistido por inteligencia artificial, definición funcional y técnica, redacción de pliegos de condiciones, elección de arquitecturas y seguimiento de la realización. Nuestra función: asegurar sus decisiones y preparar un desarrollo llave en mano, que después podemos realizar nosotros mismos.',
    },
    footer: {
      tagline: 'Consultoría y desarrollo informático — Europa',
      credits:
        'Fotos: «Ciudad vieja de Tallin desde Patkuli» de Ivar Leidus (CC BY-SA 3.0 EE) · «Mont Blanc desde el Salève» de Claudec (CC BY-SA 3.0) · «Parlamento húngaro, Budapest» de Godot13 (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
  pt: {
    metaTitle: 'NZY Informatique OÜ — Consultoria e desenvolvimento informático',
    selectLanguage: 'Escolher idioma',
    nav: {
      home: 'Início',
      expertise: 'Nossa experiência',
      about: 'Sobre nós',
    },
    hero: {
      subtitle:
        'Consultoria e desenvolvimento informático. NZY Informatique OÜ (Ltd.) — Empresa europeia sediada na Estónia',
      cta: 'Descubra a nossa experiência',
    },
    home: {
      introTitle: 'Os seus projetos web ambiciosos, impulsionados pela inteligência artificial',
      introP1:
        'A NZY Informatique OÜ acompanha as empresas europeias na conceção e realização de aplicações web avançadas. A nossa abordagem assenta numa análise de projeto aumentada pela inteligência artificial: utilizamos os modelos mais recentes para mapear as suas necessidades, questionar os cenários de utilização, detetar riscos de arquitetura e produzir especificações de uma precisão sem precedentes — antes mesmo da primeira linha de código.',
      introP2a: 'Asseguramos o ',
      introP2Strong: 'ciclo completo do seu projeto',
      introP2b:
        ': do estudo inicial e da consultoria junto dos gestores de projetos de negócio até ao desenvolvimento chave na mão da solução. Enquadramento funcional, assistência à direção de projeto, arquitetura, desenvolvimento, testes, implementação na nuvem e transferência de competências: um único interlocutor, uma visão de ponta a ponta.',
      consultingTitle: 'Estudo e consultoria',
      consultingText:
        'Análise assistida por IA dos seus projetos aplicativos, enquadramento funcional e acompanhamento das suas equipas de direção de projeto, da expressão da necessidade ao dossiê de especificações.',
      devTitle: 'Desenvolvimento chave na mão',
      devText:
        'Conceção e realização completas de aplicações web modernas: arquitetura, desenvolvimento, testes, entrega e entrada em produção — prontas a usar.',
      cloudTitle: 'Soluções de IA e nuvem',
      cloudText:
        'Agentes inteligentes, aplicações que integram IA e infraestruturas cloud como código, implementadas na plataforma mais adequada ao seu contexto.',
      contactTitle: 'Falemos do seu projeto',
      contactText: 'Uma ideia, um caderno de encargos, uma aplicação para modernizar? Escreva-nos.',
    },
    expertise: {
      title: 'Nossa experiência',
      lead: 'Uma engenharia de software moderna, em que a inteligência artificial intervém em cada etapa — e é também o objeto das nossas realizações.',
      aiPanelTitle: 'A IA em todo o nosso ciclo de desenvolvimento',
      aiPanelText:
        'A inteligência artificial não é para nós um efeito de moda: é uma ferramenta de engenharia integrada em toda a nossa cadeia de produção. Acelera a análise das necessidades, ajuda a explorar as arquiteturas possíveis, participa na geração e revisão do código, reforça a cobertura de testes e agiliza a redação da documentação. Cada entregável continua a ser validado pelos nossos engenheiros: a IA aumenta a nossa produtividade e a nossa exigência de qualidade, não a substitui.',
      steps: [
        { title: 'Estudo e enquadramento', text: 'Análise das necessidades aumentada por IA: workshops, modelação dos percursos, especificações.' },
        { title: 'Conceção', text: 'Arquitetura aplicativa e cloud, escolhas técnicas validadas por prototipagem assistida.' },
        { title: 'Desenvolvimento', text: 'Código gerado e revisto com o apoio da IA, controlo de qualidade humano sistemático.' },
        { title: 'Testes e entrega', text: 'Estratégia de testes automatizados, aceitação, documentação e implementação.' },
        { title: 'Exploração e evolução', text: 'Operação, observabilidade e transferência de competências para as suas equipas.' },
      ],
      solutionsTitle: 'Criação de soluções de IA',
      solutionsText:
        'Para além da sua utilização interna, concebemos para os nossos clientes soluções de inteligência artificial à medida: agentes autónomos capazes de executar cadeias de tarefas, aplicações de negócio que integram modelos de linguagem (pesquisa aumentada, assistentes conversacionais, tratamento documental) e pipelines de automatização inteligente. Tratamos da escolha dos modelos, da integração com os seus sistemas e da entrada em produção segura.',
      aiChips: ['Agentes autónomos', 'RAG', 'Chatbots de negócio', 'Automatização', 'Análise documental', 'IA generativa'],
      cloudTitle: 'Aplicações cloud e infraestrutura',
      cloudA:
        'Desenvolvemos aplicações nativas da nuvem, com predileção pelas infraestruturas descritas em código através do ',
      cloudB:
        ': ambientes reproduzíveis, implementações controladas e custos otimizados. O nosso saber-fazer estende-se, contudo, à vasta gama de plataformas utilizadas no mercado — nomeadamente ',
      cloudC: ' e ',
      cloudD:
        ' — para nos adaptarmos ao seu ecossistema existente em vez de lhe impormos o nosso.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'Sobre nós',
      lead: 'Uma empresa estónia ao serviço dos projetos informáticos em toda a Europa.',
      whoTitle: 'Quem somos',
      whoP1:
        ' é uma empresa de consultoria e desenvolvimento informático registada na Estónia (OÜ, equivalente estónio da forma Ltd.). A partir de Talim, intervimos para clientes em toda a Europa, tanto em consultoria como em realização.',
      whoP2:
        'As nossas atividades abrangem dois domínios complementares: a consultoria e a assistência à direção de projeto junto dos donos de projetos, e o desenvolvimento chave na mão de aplicações web, soluções de inteligência artificial e infraestruturas cloud.',
      legalTitle: 'Informações legais',
      legalName: 'Denominação',
      legalForm: 'Forma jurídica',
      legalFormValue: 'Osaühing (OÜ) — sociedade de responsabilidade limitada de direito estónio',
      legalReg: 'Número de registo',
      legalAddress: 'Morada',
      legalAddressCity: '10114 Talim, Estónia',
      legalArea: 'Âmbito de atividade',
      legalAreaValue: 'Toda a Europa',
      legalContact: 'Contacto',
      consultingTitle: 'Consultoria para empresas',
      consultingA: 'Sob a sua marca ',
      consultingB:
        ', a empresa acompanha os gestores de projetos de negócio: análise das necessidades assistida por inteligência artificial, enquadramento funcional e técnico, redação de cadernos de encargos, escolha de arquiteturas e acompanhamento da realização. O nosso papel: garantir as suas decisões e preparar um desenvolvimento chave na mão, que podemos depois assegurar nós próprios.',
    },
    footer: {
      tagline: 'Consultoria e desenvolvimento informático — Europa',
      credits:
        'Fotos: «Cidade velha de Talim a partir de Patkuli» de Ivar Leidus (CC BY-SA 3.0 EE) · «Monte Branco a partir do Salève» de Claudec (CC BY-SA 3.0) · «Parlamento húngaro, Budapeste» de Godot13 (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
  uk: {
    metaTitle: 'NZY Informatique OÜ — ІТ-консалтинг та розробка',
    selectLanguage: 'Обрати мову',
    nav: {
      home: 'Головна',
      expertise: 'Наша експертиза',
      about: 'Про нас',
    },
    hero: {
      subtitle:
        'ІТ-консалтинг та розробка. NZY Informatique OÜ (Ltd.) — європейська компанія, що базується в Естонії',
      cta: 'Дізнайтеся про нашу експертизу',
    },
    home: {
      introTitle: 'Ваші амбітні веб-проєкти, керовані штучним інтелектом',
      introP1:
        'NZY Informatique OÜ супроводжує європейські компанії у проєктуванні та реалізації складних веб-застосунків. Наш підхід ґрунтується на аналізі проєктів, посиленому штучним інтелектом: ми використовуємо найновіші моделі, щоб змоделювати ваші потреби, перевірити сценарії використання, виявити архітектурні ризики та створити специфікації небаченої точності — ще до першого рядка коду.',
      introP2a: 'Ми забезпечуємо ',
      introP2Strong: 'повний цикл вашого проєкту',
      introP2b:
        ': від початкового дослідження та консультування керівників бізнес-проєктів до розробки «під ключ». Функціональне обрамлення, супровід замовника, архітектура, розробка, тестування, розгортання в хмарі та передача компетенцій: єдиний контакт, наскрізне бачення.',
      consultingTitle: 'Дослідження та консалтинг',
      consultingText:
        'Підтриманий ШІ аналіз ваших прикладних проєктів, функціональне обрамлення та супровід команд замовника — від формулювання потреби до пакета специфікацій.',
      devTitle: 'Розробка «під ключ»',
      devText:
        'Повне проєктування та створення сучасних веб-застосунків: архітектура, розробка, тестування, поставка й запуск у продакшн — готові до використання.',
      cloudTitle: 'Рішення ШІ та хмара',
      cloudText:
        'Інтелектуальні агенти, застосунки з інтегрованим ШІ та хмарні інфраструктури як код, розгорнуті на платформі, що найкраще відповідає вашому контексту.',
      contactTitle: 'Поговорімо про ваш проєкт',
      contactText: 'Ідея, технічне завдання чи застосунок, який треба модернізувати? Напишіть нам.',
    },
    expertise: {
      title: 'Наша експертиза',
      lead: 'Сучасна інженерія програмного забезпечення, де штучний інтелект задіяний на кожному етапі — і є самим предметом наших розробок.',
      aiPanelTitle: 'ШІ у всьому нашому циклі розробки',
      aiPanelText:
        'Штучний інтелект для нас — не модний тренд: це інженерний інструмент, інтегрований у весь наш виробничий ланцюг. Він прискорює аналіз потреб, допомагає досліджувати можливі архітектури, бере участь у генерації та рецензуванні коду, зміцнює покриття тестами й спрощує написання документації. Кожен результат усе одно перевіряють наші інженери: ШІ підвищує нашу продуктивність і вимоги до якості, а не замінює їх.',
      steps: [
        { title: 'Дослідження та обрамлення', text: 'Посилений ШІ аналіз потреб: воркшопи, моделювання сценаріїв, специфікації.' },
        { title: 'Проєктування', text: 'Архітектура застосунку та хмари, технічні рішення, перевірені підтриманим прототипуванням.' },
        { title: 'Розробка', text: 'Код, згенерований і рецензований за підтримки ШІ, систематичний людський контроль якості.' },
        { title: 'Тестування та поставка', text: 'Стратегія автоматизованого тестування, приймання, документація та розгортання.' },
        { title: 'Експлуатація та розвиток', text: 'Супровід, спостережуваність і передача компетенцій вашим командам.' },
      ],
      solutionsTitle: 'Створення рішень ШІ',
      solutionsText:
        'Окрім внутрішнього використання, ми створюємо для клієнтів виготовлені на замовлення рішення штучного інтелекту: автономні агенти, здатні виконувати ланцюжки завдань, бізнес-застосунки з інтегрованими мовними моделями (розширений пошук, розмовні асистенти, обробка документів) та інтелектуальні конвеєри автоматизації. Ми беремо на себе вибір моделей, інтеграцію з вашими системами та безпечний запуск у продакшн.',
      aiChips: ['Автономні агенти', 'RAG', 'Бізнес-чатботи', 'Автоматизація', 'Аналіз документів', 'Генеративний ШІ'],
      cloudTitle: 'Хмарні застосунки та інфраструктура',
      cloudA:
        'Ми розробляємо хмарні застосунки з перевагою інфраструктур, описаних кодом через ',
      cloudB:
        ': відтворювані середовища, контрольовані розгортання та оптимізовані витрати. Водночас наш досвід охоплює широкий спектр платформ, що використовуються на ринку, — зокрема ',
      cloudC: ' та ',
      cloudD:
        ', — щоб адаптуватися до вашої наявної екосистеми, а не нав’язувати нашу.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'Про нас',
      lead: 'Естонська компанія, що обслуговує ІТ-проєкти в усій Європі.',
      whoTitle: 'Хто ми',
      whoP1:
        ' — це компанія з ІТ-консалтингу та розробки, зареєстрована в Естонії (OÜ — естонський аналог форми Ltd.). З Таллінна ми працюємо з клієнтами по всій Європі — і в консалтингу, і в реалізації.',
      whoP2:
        'Наша діяльність охоплює два взаємодоповнювані напрямки: консалтинг та супровід замовника для власників проєктів, а також розробку «під ключ» веб-застосунків, рішень штучного інтелекту та хмарних інфраструктур.',
      legalTitle: 'Юридична інформація',
      legalName: 'Найменування',
      legalForm: 'Організаційно-правова форма',
      legalFormValue: 'Osaühing (OÜ) — товариство з обмеженою відповідальністю за естонським правом',
      legalReg: 'Реєстраційний номер',
      legalAddress: 'Адреса',
      legalAddressCity: '10114 Таллінн, Естонія',
      legalArea: 'Сфера діяльності',
      legalAreaValue: 'Вся Європа',
      legalContact: 'Контакт',
      consultingTitle: 'Консалтинг для бізнесу',
      consultingA: 'Під брендом ',
      consultingB:
        ' компанія супроводжує керівників бізнес-проєктів: підтриманий штучним інтелектом аналіз потреб, функціональне та технічне обрамлення, написання технічних завдань, вибір архітектури та контроль реалізації. Наша роль: забезпечити впевненість у ваших рішеннях і підготувати розробку «під ключ», яку ми можемо потім виконати самостійно.',
    },
    footer: {
      tagline: 'ІТ-консалтинг та розробка — Європа',
      credits:
        'Фото: «Старе місто Таллінна з майданчика Паткулі», Івар Лейдус (CC BY-SA 3.0 EE) · «Монблан із Салеву», Claudec (CC BY-SA 3.0) · «Угорський парламент, Будапешт», Godot13 (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
  ru: {
    metaTitle: 'NZY Informatique OÜ — ИТ-консалтинг и разработка',
    selectLanguage: 'Выбрать язык',
    nav: {
      home: 'Главная',
      expertise: 'Наша экспертиза',
      about: 'О нас',
    },
    hero: {
      subtitle:
        'ИТ-консалтинг и разработка. NZY Informatique OÜ (Ltd.) — европейская компания, базирующаяся в Эстонии',
      cta: 'Узнайте о нашей экспертизе',
    },
    home: {
      introTitle: 'Ваши амбициозные веб-проекты, управляемые искусственным интеллектом',
      introP1:
        'NZY Informatique OÜ сопровождает европейские компании в проектировании и реализации сложных веб-приложений. Наш подход опирается на усиленный искусственным интеллектом анализ проектов: мы используем новейшие модели, чтобы картировать ваши потребности, проверять сценарии использования, выявлять архитектурные риски и создавать спецификации беспрецедентной точности — ещё до первой строки кода.',
      introP2a: 'Мы берём на себя ',
      introP2Strong: 'полный цикл вашего проекта',
      introP2b:
        ': от первоначального исследования и консультирования руководителей бизнес-проектов до разработки «под ключ». Функциональное обрамление, поддержка заказчика, архитектура, разработка, тестирование, развёртывание в облаке и передача компетенций: единый контакт, сквозное видение.',
      consultingTitle: 'Исследование и консалтинг',
      consultingText:
        'Поддерживаемый ИИ анализ ваших прикладных проектов, функциональное обрамление и сопровождение команд заказчика — от формулирования потребности до пакета спецификаций.',
      devTitle: 'Разработка «под ключ»',
      devText:
        'Полное проектирование и создание современных веб-приложений: архитектура, разработка, тестирование, поставка и запуск в продакшн — готовые к использованию.',
      cloudTitle: 'Решения ИИ и облако',
      cloudText:
        'Интеллектуальные агенты, приложения со встроенным ИИ и облачные инфраструктуры как код, развёрнутые на платформе, наиболее подходящей вашему контексту.',
      contactTitle: 'Обсудим ваш проект',
      contactText: 'Идея, техническое задание или приложение, которое нужно модернизировать? Напишите нам.',
    },
    expertise: {
      title: 'Наша экспертиза',
      lead: 'Современная инженерия программного обеспечения, где искусственный интеллект участвует на каждом этапе — и является самим предметом наших разработок.',
      aiPanelTitle: 'ИИ во всём нашем цикле разработки',
      aiPanelText:
        'Искусственный интеллект для нас — не модное веяние: это инженерный инструмент, интегрированный во всю нашу производственную цепочку. Он ускоряет анализ потребностей, помогает исследовать возможные архитектуры, участвует в генерации и рецензировании кода, усиливает тестовое покрытие и упрощает написание документации. Каждый результат по-прежнему проверяют наши инженеры: ИИ повышает нашу продуктивность и требования к качеству, а не заменяет их.',
      steps: [
        { title: 'Исследование и обрамление', text: 'Усиленный ИИ анализ потребностей: воркшопы, моделирование сценариев, спецификации.' },
        { title: 'Проектирование', text: 'Архитектура приложения и облака, технические решения, проверенные поддерживаемым прототипированием.' },
        { title: 'Разработка', text: 'Код, сгенерированный и рецензированный при поддержке ИИ, систематический человеческий контроль качества.' },
        { title: 'Тестирование и поставка', text: 'Стратегия автоматизированного тестирования, приёмка, документация и развёртывание.' },
        { title: 'Эксплуатация и развитие', text: 'Сопровождение, наблюдаемость и передача компетенций вашим командам.' },
      ],
      solutionsTitle: 'Создание решений ИИ',
      solutionsText:
        'Помимо внутреннего использования, мы разрабатываем для клиентов индивидуальные решения искусственного интеллекта: автономные агенты, способные выполнять цепочки задач, бизнес-приложения со встроенными языковыми моделями (расширенный поиск, разговорные ассистенты, обработка документов) и интеллектуальные конвейеры автоматизации. Мы берём на себя выбор моделей, интеграцию с вашими системами и безопасный запуск в продакшн.',
      aiChips: ['Автономные агенты', 'RAG', 'Бизнес-чат-боты', 'Автоматизация', 'Анализ документов', 'Генеративный ИИ'],
      cloudTitle: 'Облачные приложения и инфраструктура',
      cloudA:
        'Мы разрабатываем облачные приложения с предпочтением инфраструктур, описанных кодом через ',
      cloudB:
        ': воспроизводимые среды, контролируемые развёртывания и оптимизированные расходы. При этом наш опыт охватывает широкий спектр используемых на рынке платформ — в частности ',
      cloudC: ' и ',
      cloudD:
        ', — чтобы адаптироваться к вашей существующей экосистеме, а не навязывать нашу.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'О нас',
      lead: 'Эстонская компания, обслуживающая ИТ-проекты по всей Европе.',
      whoTitle: 'Кто мы',
      whoP1:
        ' — компания по ИТ-консалтингу и разработке, зарегистрированная в Эстонии (OÜ — эстонский аналог формы Ltd.). Из Таллинна мы работаем с клиентами по всей Европе — и в консалтинге, и в реализации.',
      whoP2:
        'Наша деятельность охватывает два взаимодополняющих направления: консалтинг и поддержку заказчика для владельцев проектов, а также разработку «под ключ» веб-приложений, решений искусственного интеллекта и облачных инфраструктур.',
      legalTitle: 'Юридическая информация',
      legalName: 'Наименование',
      legalForm: 'Организационно-правовая форма',
      legalFormValue: 'Osaühing (OÜ) — общество с ограниченной ответственностью по эстонскому праву',
      legalReg: 'Регистрационный номер',
      legalAddress: 'Адрес',
      legalAddressCity: '10114 Таллинн, Эстония',
      legalArea: 'Сфера деятельности',
      legalAreaValue: 'Вся Европа',
      legalContact: 'Контакт',
      consultingTitle: 'Консалтинг для бизнеса',
      consultingA: 'Под брендом ',
      consultingB:
        ' компания сопровождает руководителей бизнес-проектов: поддерживаемый искусственным интеллектом анализ потребностей, функциональное и техническое обрамление, написание технических заданий, выбор архитектуры и контроль реализации. Наша роль: обеспечить уверенность в ваших решениях и подготовить разработку «под ключ», которую мы можем затем выполнить самостоятельно.',
    },
    footer: {
      tagline: 'ИТ-консалтинг и разработка — Европа',
      credits:
        'Фото: «Старый город Таллинна с площадки Паткули», Ивар Лейдус (CC BY-SA 3.0 EE) · «Монблан с Салева», Claudec (CC BY-SA 3.0) · «Венгерский парламент, Будапешт», Godot13 (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
  hu: {
    metaTitle: 'NZY Informatique OÜ — IT-tanácsadás és -fejlesztés',
    selectLanguage: 'Nyelv választása',
    nav: {
      home: 'Kezdőlap',
      expertise: 'Szakértelmünk',
      about: 'Rólunk',
    },
    hero: {
      subtitle:
        'IT-tanácsadás és -fejlesztés. NZY Informatique OÜ (Kft.) — Észtországban székhellyel rendelkező európai vállalat',
      cta: 'Ismerje meg szakértelmünket',
    },
    home: {
      introTitle: 'Ambiciózus webes projektjei, mesterséges intelligenciával vezérelve',
      introP1:
        'A NZY Informatique OÜ európai vállalatokat támogat a fejlett webalkalmazások megtervezésében és megvalósításában. Megközelítésünk a mesterséges intelligenciával kibővített projektelemzésen alapul: a legújabb modelleket használjuk az Ön igényeinek feltérképezésére, a felhasználási forgatókönyvek megvizsgálására, az architektúra-kockázatok azonosítására és példátlan pontosságú specifikációk készítésére — még az első kódsor megírása előtt.',
      introP2a: 'Vállaljuk ',
      introP2Strong: 'projektje teljes életciklusát',
      introP2b:
        ': a kezdeti tanulmányozástól és az üzleti projektmenedzserek tanácsadásától a megoldás kulcsrakész fejlesztéséig. Funkcionális keretezés, megrendelői oldali támogatás, architektúra, fejlesztés, tesztelés, felhős telepítés és kompetencia-átadás: egyetlen kapcsolattartó, végponttól végpontig terjedő rálátás.',
      consultingTitle: 'Tanulmány és tanácsadás',
      consultingText:
        'Alkalmazásprojektjeinek MI által támogatott elemzése, funkcionális keretezés és megrendelői csapatainak kísérése, az igény megfogalmazásától a specifikációs dokumentumig.',
      devTitle: 'Kulcsrakész fejlesztés',
      devText:
        'Modern webalkalmazások teljes körű megtervezése és megvalósítása: architektúra, fejlesztés, tesztelés, átadás és élesítés — azonnal használatba vehetően.',
      cloudTitle: 'MI- és felhőmegoldások',
      cloudText:
        'Intelligens ügynökök, MI-t integráló alkalmazások és infrastruktúra-mint-kód felhőmegoldások, az Ön környezetéhez leginkább illő platformon telepítve.',
      contactTitle: 'Beszéljünk a projektjéről',
      contactText: 'Van egy ötlete, egy specifikációja, egy modernizálandó alkalmazása? Írjon nekünk.',
    },
    expertise: {
      title: 'Szakértelmünk',
      lead: 'Modern szoftverfejlesztés, ahol a mesterséges intelligencia minden szakaszban szerepet játszik — és maga is megvalósításaink tárgya.',
      aiPanelTitle: 'MI a teljes fejlesztési ciklusunkban',
      aiPanelText:
        'A mesterséges intelligencia számunkra nem múló divat: mérnöki eszköz, amely beépül teljes termelési láncunkba. Felgyorsítja az igényelemzést, segít feltárni a lehetséges architektúrákat, részt vesz a kódgenerálásban és -felülvizsgálatban, erősíti a tesztlefedettséget és gördülékenyebbé teszi a dokumentáció készítését. Minden eredményt továbbra is mérnökeink hitelesítenek: az MI növeli termelékenységünket és minőségi elvárásainkat, nem helyettesíti azokat.',
      steps: [
        { title: 'Tanulmány és keretezés', text: 'MI-vel kibővített igényelemzés: műhelymunkák, folyamatmodellezés, specifikációk.' },
        { title: 'Tervezés', text: 'Alkalmazás- és felhőarchitektúra, támogatott prototípus-készítéssel validált technológiai döntések.' },
        { title: 'Fejlesztés', text: 'MI támogatásával generált és felülvizsgált kód, szisztematikus emberi minőségellenőrzés.' },
        { title: 'Tesztelés és átadás', text: 'Automatizált tesztelési stratégia, átvétel, dokumentáció és telepítés.' },
        { title: 'Üzemeltetés és továbbfejlesztés', text: 'Üzemeltetés, megfigyelhetőség és kompetencia-átadás az Ön csapatainak.' },
      ],
      solutionsTitle: 'MI-megoldások készítése',
      solutionsText:
        'A belső felhasználáson túl egyedi mesterségesintelligencia-megoldásokat tervezünk ügyfeleink számára: feladatláncok végrehajtására képes autonóm ügynökök, nyelvi modelleket integráló üzleti alkalmazások (kibővített keresés, beszélgető asszisztensek, dokumentumfeldolgozás) és intelligens automatizálási csővezetékek. Átvállaljuk a modellek kiválasztását, a meglévő rendszerekkel való integrációt és a biztonságos élesítést.',
      aiChips: ['Autonóm ügynökök', 'RAG', 'Üzleti chatbotok', 'Automatizálás', 'Dokumentumelemzés', 'Generatív MI'],
      cloudTitle: 'Felhőalkalmazások és infrastruktúra',
      cloudA:
        'Felhőnatív alkalmazásokat fejlesztünk, előnyben részesítve a kódként leírt infrastruktúrákat az ',
      cloudB:
        ' segítségével: reprodukálható környezetek, ellenőrzött telepítések és optimalizált költségek. Szaktudásunk azonban kiterjed a piacon használt platformok széles skálájára — különösen a ',
      cloudC: ' és a ',
      cloudD:
        ' rendszerekre —, hogy az Ön meglévő ökoszisztémájához alkalmazkodjunk, ahelyett hogy a miénket kényszerítenénk rá.',
      cloudChips: ['AWS CDK', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    },
    about: {
      title: 'Rólunk',
      lead: 'Egy észt vállalat, amely informatikai projekteket szolgál ki egész Európában.',
      whoTitle: 'Kik vagyunk',
      whoP1:
        ' egy Észtországban bejegyzett IT-tanácsadó és -fejlesztő vállalat (OÜ — a Kft. észt megfelelője). Tallinnból egész Európában szolgálunk ki ügyfeleket, tanácsadásban és megvalósításban egyaránt.',
      whoP2:
        'Tevékenységünk két kiegészítő területet ölel fel: tanácsadást és megrendelői oldali támogatást a projekttulajdonosok számára, valamint webalkalmazások, mesterségesintelligencia-megoldások és felhőinfrastruktúrák kulcsrakész fejlesztését.',
      legalTitle: 'Jogi információk',
      legalName: 'Cégnév',
      legalForm: 'Jogi forma',
      legalFormValue: 'Osaühing (OÜ) — észt jogi korlátolt felelősségű társaság',
      legalReg: 'Nyilvántartási szám',
      legalAddress: 'Cím',
      legalAddressCity: '10114 Tallinn, Észtország',
      legalArea: 'Működési terület',
      legalAreaValue: 'Egész Európa',
      legalContact: 'Kapcsolat',
      consultingTitle: 'Vállalati tanácsadás',
      consultingA: 'A ',
      consultingB:
        ' márkanév alatt a vállalat az üzleti projektmenedzsereket támogatja: mesterséges intelligenciával támogatott igényelemzés, funkcionális és technikai keretezés, műszaki specifikációk készítése, architektúra-választás és a megvalósítás felügyelete. Szerepünk: biztosítani döntései megalapozottságát és előkészíteni a kulcsrakész fejlesztést, amelyet ezután mi magunk is elvégezhetünk.',
    },
    footer: {
      tagline: 'IT-tanácsadás és -fejlesztés — Európa',
      credits:
        'Fotók: Ivar Leidus „Tallinni óváros a Patkuli kilátóból” (CC BY-SA 3.0 EE) · Claudec „Mont Blanc a Salève-ről” (CC BY-SA 3.0) · Godot13 „Magyar parlament, Budapest” (CC BY-SA 4.0) — Wikimedia Commons',
    },
  },
}
