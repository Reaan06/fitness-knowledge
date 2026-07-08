#!/usr/bin/env node

/**
 * Fitness Knowledge Skill CLI
 * Complete fitness knowledge base
 * 
 * Usage:
 *   fitness-knowledge [command] [options]
 *   fk [command] [options]
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');

// Language support
const LANG = process.env.FK_LANG || 'en';

const translations = {
  en: {
    title: '🏋️ Fitness Knowledge Skill CLI',
    subtitle: 'Complete fitness knowledge base',
    usage: 'Usage',
    commands: 'Commands',
    examples: 'Examples',
    moduleNames: 'Module Names',
    installation: 'Installation',
    availableModules: '📚 Available Modules',
    searching: '🔍 Searching for',
    noResults: 'No results found',
    foundResults: 'Found module(s) with matches',
    useShow: 'Use "fitness-knowledge show <module>" to see full content',
    fitnessTopics: '🎯 Fitness Topics',
    randomTip: '🎲 Random Fitness Tip',
    installInstructions: '📦 Installation Instructions',
    doctor: '🔍 Installation Doctor',
    allChecksPassed: 'All checks passed! Installation is correct.',
    someChecksFailed: 'Some checks failed. Please reinstall the skill.',
    unknownCommand: 'Unknown command',
    useHelp: 'Use "fitness-knowledge help" to see available commands',
    specifyModule: 'Please specify a module name',
    useList: 'Use "fitness-knowledge list" to see available modules',
    specifyQuery: 'Please specify a search query',
    exampleSearch: 'Example: fitness-knowledge search "protein"'
  },
  es: {
    title: '🏋️ Fitness Knowledge Skill CLI',
    subtitle: 'Base completa de conocimiento fitness',
    usage: 'Uso',
    commands: 'Comandos',
    examples: 'Ejemplos',
    moduleNames: 'Nombres de Módulos',
    installation: 'Instalación',
    availableModules: '📚 Módulos Disponibles',
    searching: '🔍 Buscando',
    noResults: 'No se encontraron resultados',
    foundResults: 'Módulo(s) encontrado(s) con coincidencias',
    useShow: 'Usa "fitness-knowledge show <módulo>" para ver el contenido completo',
    fitnessTopics: '🎯 Temas de Fitness',
    randomTip: '🎲 Consejo Fitness Aleatorio',
    installInstructions: '📦 Instrucciones de Instalación',
    doctor: '🔍 Doctor de Instalación',
    allChecksPassed: '¡Todas las verificaciones pasaron! La instalación es correcta.',
    someChecksFailed: 'Algunas verificaciones fallaron. Por favor, reinstala el skill.',
    unknownCommand: 'Comando desconocido',
    useHelp: 'Usa "fitness-knowledge help" para ver los comandos disponibles',
    specifyModule: 'Por favor, especifica un nombre de módulo',
    useList: 'Usa "fitness-knowledge list" para ver los módulos disponibles',
    specifyQuery: 'Por favor, especifica una consulta de búsqueda',
    exampleSearch: 'Ejemplo: fitness-knowledge search "proteína"'
  },
  pt: {
    title: '🏋️ Fitness Knowledge Skill CLI',
    subtitle: 'Base completa de conhecimento fitness',
    usage: 'Uso',
    commands: 'Comandos',
    examples: 'Exemplos',
    moduleNames: 'Nomes dos Módulos',
    installation: 'Instalação',
    availableModules: '📚 Módulos Disponíveis',
    searching: '🔍 Procurando por',
    noResults: 'Nenhum resultado encontrado',
    foundResults: 'Módulo(s) encontrado(s) com correspondências',
    useShow: 'Use "fitness-knowledge show <módulo>" para ver o conteúdo completo',
    fitnessTopics: '🎯 Tópicos de Fitness',
    randomTip: '🎲 Dica Fitness Aleatória',
    installInstructions: '📦 Instruções de Instalação',
    doctor: '🔍 Médico de Instalação',
    allChecksPassed: 'Todas as verificações passaram! A instalação está correta.',
    someChecksFailed: 'Algumas verificações falharam. Por favor, reinstale o skill.',
    unknownCommand: 'Comando desconhecido',
    useHelp: 'Use "fitness-knowledge help" para ver os comandos disponíveis',
    specifyModule: 'Por favor, especifique um nome de módulo',
    useList: 'Use "fitness-knowledge list" para ver os módulos disponíveis',
    specifyQuery: 'Por favor, especifique uma consulta de pesquisa',
    exampleSearch: 'Exemplo: fitness-knowledge search "proteína"'
  }
};

const t = translations[LANG] || translations.en;

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

// Helper functions
function printColored(text, color) {
  console.log(`${colors[color]}${text}${colors.reset}`);
}

function printHeader(text) {
  printColored('\n' + '='.repeat(60), 'cyan');
  printColored(text, 'bright');
  printColored('='.repeat(60) + '\n', 'cyan');
}

function printSubHeader(text) {
  printColored('\n--- ' + text + ' ---', 'yellow');
}

function printSuccess(text) {
  printColored('✓ ' + text, 'green');
}

function printError(text) {
  printColored('✗ ' + text, 'red');
}

function printInfo(text) {
  printColored('ℹ ' + text, 'blue');
}

function printWarning(text) {
  printColored('⚠ ' + text, 'yellow');
}

// Fuzzy search function
function fuzzyMatch(query, text) {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  
  // Exact match
  if (textLower.includes(queryLower)) {
    return { match: true, score: 100 };
  }
  
  // Fuzzy match
  let queryIndex = 0;
  let score = 0;
  let lastMatchIndex = -1;
  
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      score += 10;
      if (lastMatchIndex !== -1 && i - lastMatchIndex <= 2) {
        score += 5; // Bonus for consecutive matches
      }
      lastMatchIndex = i;
      queryIndex++;
    }
  }
  
  if (queryIndex === queryLower.length) {
    return { match: true, score: score };
  }
  
  return { match: false, score: 0 };
}

// Read markdown file
function readMarkdown(filename) {
  const filePath = join(ROOT_DIR, filename);
  if (existsSync(filePath)) {
    return readFileSync(filePath, 'utf-8');
  }
  return null;
}

// Read asset file
function readAsset(filename) {
  const filePath = join(ROOT_DIR, 'assets', filename);
  if (existsSync(filePath)) {
    return readFileSync(filePath, 'utf-8');
  }
  return null;
}

// List all available assets
function listAssets() {
  const assetsDir = join(ROOT_DIR, 'assets');
  if (existsSync(assetsDir)) {
    return readdirSync(assetsDir).filter(f => f.endsWith('.md'));
  }
  return [];
}

// Display help
function showHelp() {
  printHeader(t.title);
  
  printColored(t.subtitle + '\n', 'dim');
  
  printSubHeader(t.usage);
  console.log('  fitness-knowledge [command] [options]');
  console.log('  fk [command] [options]\n');
  
  printSubHeader(t.commands);
  console.log('  help, -h, --help     Show this help message');
  console.log('  version, -v, --version  Show version number');
  console.log('  list, ls             List all available modules');
  console.log('  show <module>        Show content of a specific module');
  console.log('  search <query>       Search for content across all modules');
  console.log('  info                 Show detailed information about the skill');
  console.log('  topics               List all fitness topics');
  console.log('  random               Show a random fitness tip');
  console.log('  install              Show installation instructions');
  console.log('  doctor               Check if installation is correct\n');
  
  printSubHeader(t.examples);
  console.log('  fitness-knowledge list                    # List all modules');
  console.log('  fitness-knowledge show nutrition          # Show nutrition module');
  console.log('  fitness-knowledge search "protein"        # Search for protein info');
  console.log('  fitness-knowledge topics                  # List all topics');
  console.log('  fitness-knowledge random                  # Get a random tip\n');
  
  printSubHeader(t.moduleNames);
  console.log('  training, nutrition, sports-nutrition, gym-techniques,');
  console.log('  functional, home-workouts, workout-programs, recovery,');
  console.log('  supplements, periodization, common-mistakes, equipment,');
  console.log('  injury-prevention, mental-fitness, tracking, calculators,');
  console.log('  exercise-guides, personalized-programs, routine-builder,');
  console.log('  training-plans, exercise-variations, sport-specific,');
  console.log('  fitness-trends, sports-nutrition-advanced,');
  console.log('  injury-prevention-advanced, mental-fitness-advanced\n');
  
  printSubHeader(t.installation);
  console.log('  npm:  npm install -g fitness-knowledge-skill');
  console.log('  npx:  npx fitness-knowledge-skill');
  console.log('  curl: curl -fsSL https://raw.githubusercontent.com/Reaan06/fitness-knowledge/main/install.sh | bash\n');
  
  if (LANG !== 'en') {
    printInfo(`Current language: ${LANG.toUpperCase()}. Set FK_LANG=en/es/pt to change.`);
  }
}

// Show version
function showVersion() {
  const packageJson = JSON.parse(readFileSync(join(ROOT_DIR, 'package.json'), 'utf-8'));
  printColored(`Fitness Knowledge Skill v${packageJson.version}`, 'bright');
}

// List all modules
function listModules() {
  printHeader(t.availableModules);
  
  const assets = listAssets();
  if (assets.length === 0) {
    printError('No modules found');
    return;
  }
  
  const modules = [
    { name: 'training', description: 'Complete guide to all training modalities' },
    { name: 'nutrition', description: 'Calories, macros, carbs, protein, fats' },
    { name: 'sports-nutrition', description: 'Advanced sports nutrition' },
    { name: 'sports-nutrition-advanced', description: 'Latest sports nutrition research (2024-2026)' },
    { name: 'gym-techniques', description: 'All gym exercises with proper form' },
    { name: 'exercise-variations', description: '200+ exercise variations with progressions' },
    { name: 'exercise-guides', description: 'Detailed exercise guides with visual cues' },
    { name: 'functional', description: 'Functional training patterns' },
    { name: 'home-workouts', description: 'Home workout programs' },
    { name: 'workout-programs', description: 'Structured workout programs' },
    { name: 'sport-specific', description: 'Training programs for 14+ sports' },
    { name: 'recovery', description: 'Recovery protocols' },
    { name: 'supplements', description: 'Evidence-based supplement guide' },
    { name: 'periodization', description: 'Programming principles' },
    { name: 'common-mistakes', description: 'Common errors and fixes' },
    { name: 'equipment', description: 'Complete equipment reference' },
    { name: 'injury-prevention', description: 'Injury prevention strategies' },
    { name: 'injury-prevention-advanced', description: 'Latest injury prevention research' },
    { name: 'mental-fitness', description: 'Mindset and psychology' },
    { name: 'mental-fitness-advanced', description: 'Advanced mental training techniques' },
    { name: 'tracking', description: 'Progress tracking guide' },
    { name: 'fitness-trends', description: 'Emerging fitness trends (2024-2026)' },
    { name: 'calculators', description: 'BMR, TDEE, macros, and performance calculators' },
    { name: 'personalized-programs', description: 'Personalized training programs' },
    { name: 'routine-builder', description: 'Interactive routine building workflow' },
    { name: 'training-plans', description: 'Training plans with reminders and check-ins' }
  ];
  
  modules.forEach((mod, index) => {
    const exists = assets.some(a => a.includes(mod.name));
    const status = exists ? '✓' : '✗';
    const color = exists ? 'green' : 'red';
    printColored(`  ${status} ${mod.name}`, color);
    console.log(`    ${mod.description}`);
  });
  
  console.log('');
}

// Show module content
function showModule(moduleName) {
  const moduleMap = {
    'training': 'training-types.md',
    'nutrition': 'nutrition-macros.md',
    'sports-nutrition': 'sports-nutrition.md',
    'sports-nutrition-advanced': 'sports-nutrition-advanced.md',
    'gym-techniques': 'gym-techniques.md',
    'exercise-variations': 'exercise-variations.md',
    'exercise-guides': 'exercise-guides.md',
    'functional': 'functional-training.md',
    'home-workouts': 'home-workouts.md',
    'workout-programs': 'workout-programs.md',
    'sport-specific': 'sport-specific-training.md',
    'recovery': 'recovery-rest.md',
    'supplements': 'supplements.md',
    'periodization': 'periodization.md',
    'common-mistakes': 'common-mistakes.md',
    'equipment': 'equipment-guide.md',
    'injury-prevention': 'injury-prevention.md',
    'injury-prevention-advanced': 'injury-prevention-advanced.md',
    'mental-fitness': 'mental-fitness.md',
    'mental-fitness-advanced': 'mental-fitness-advanced.md',
    'tracking': 'tracking-metrics.md',
    'fitness-trends': 'fitness-trends-2024-2026.md',
    'calculators': 'calculators.md',
    'personalized-programs': 'personalized-programs.md',
    'routine-builder': 'routine-builder.md',
    'training-plans': 'training-plans.md'
  };
  
  const filename = moduleMap[moduleName];
  if (!filename) {
    printError(`Unknown module: ${moduleName}`);
    printInfo(t.useList);
    return;
  }
  
  const content = readAsset(filename);
  if (content) {
    printHeader(`📖 ${moduleName.toUpperCase().replace('-', ' ')}`);
    console.log(content);
  } else {
    printError(`Module not found: ${filename}`);
  }
}

// Search content with fuzzy matching
function searchContent(query) {
  printHeader(`${t.searching}: "${query}"`);
  
  const assets = listAssets();
  const results = [];
  
  assets.forEach(asset => {
    const content = readAsset(asset);
    if (content) {
      const lines = content.split('\n');
      const matchingLines = [];
      
      lines.forEach((line, lineNum) => {
        const matchResult = fuzzyMatch(query, line);
        if (matchResult.match) {
          matchingLines.push({
            lineNum: lineNum + 1,
            text: line.substring(0, 100),
            score: matchResult.score
          });
        }
      });
      
      if (matchingLines.length > 0) {
        // Sort by score and take top 3
        matchingLines.sort((a, b) => b.score - a.score);
        const topMatches = matchingLines.slice(0, 3);
        
        results.push({
          asset: asset.replace('.md', ''),
          matches: matchingLines.length,
          preview: topMatches[0]?.text + '...',
          score: topMatches[0]?.score
        });
      }
    }
  });
  
  if (results.length === 0) {
    printWarning(t.noResults);
    return;
  }
  
  // Sort by best score
  results.sort((a, b) => b.score - a.score);
  
  printSuccess(`${t.foundResults} ${results.length}:\n`);
  
  results.forEach(result => {
    printColored(`  📄 ${result.asset}`, 'bright');
    console.log(`     ${result.matches} matches (score: ${result.score})`);
    console.log(`     Preview: ${result.preview}`);
    console.log('');
  });
  
  printInfo(t.useShow);
}

// Show info
function showInfo() {
  printHeader('ℹ️ Fitness Knowledge Skill');
  
  const packageJson = JSON.parse(readFileSync(join(ROOT_DIR, 'package.json'), 'utf-8'));
  
  console.log(`Name: ${packageJson.name}`);
  console.log(`Version: ${packageJson.version}`);
  console.log(`Description: ${packageJson.description}`);
  console.log(`Author: ${packageJson.author}`);
  console.log(`License: ${packageJson.license}`);
  console.log(`Repository: ${packageJson.repository.url}`);
  console.log('');
  
  printSubHeader('Features');
  console.log('• Evidence-based information');
  console.log('• Safety-first approach');
  console.log('• Progressive/regression options');
  console.log('• Comprehensive coverage');
  console.log('• Fitness app integration');
  console.log('• Multilingual support (en/es/pt)');
  console.log('• Fuzzy search');
  console.log('');
  
  printSubHeader('Modules');
  const assets = listAssets();
  console.log(`Total modules: ${assets.length}`);
  console.log('Topics covered: Training, Nutrition, Recovery, Supplements, Calculators, and more');
}

// List topics
function listTopics() {
  printHeader(t.fitnessTopics);
  
  const topics = [
    { category: 'Training', items: ['Strength', 'Cardio', 'Functional', 'Plyometrics', 'Calisthenics'] },
    { category: 'Nutrition', items: ['Macros', 'Micros', 'Hydration', 'Timing', 'Diets'] },
    { category: 'Recovery', items: ['Sleep', 'Stretching', 'Foam Rolling', 'Deloads'] },
    { category: 'Supplements', items: ['Creatine', 'Protein', 'Caffeine', 'Vitamins'] },
    { category: 'Mental', items: ['Motivation', 'Goals', 'Mindset', 'Stress'] },
    { category: 'Health', items: ['Injury Prevention', 'Form', 'Equipment', 'Tracking'] },
    { category: 'Tools', items: ['Calculators', 'Exercise Guides', 'Personalized Programs'] }
  ];
  
  topics.forEach(topic => {
    printColored(`\n${topic.category}:`, 'bright');
    console.log(`  ${topic.items.join(', ')}`);
  });
  
  console.log('');
}

// Show random tip
function showRandomTip() {
  const tips = {
    en: [
      "💡 Always warm up before training to prevent injuries",
      "💡 Protein intake should be 1.6-2.2g per kg of body weight for muscle growth",
      "💡 Sleep 7-9 hours per night for optimal recovery",
      "💡 Progressive overload is key to continuous improvement",
      "💡 Form over weight - quality reps build muscle better",
      "💡 Stay hydrated - aim for 35-40ml per kg of body weight daily",
      "💡 Deload every 4-6 weeks to prevent overtraining",
      "💡 Consistency beats intensity - show up every day",
      "💡 Listen to your body - rest when needed",
      "💡 Track your progress to stay motivated",
      "💡 Nutrition is 80% of your results",
      "💡 Compound exercises build more muscle than isolation",
      "💡 Mind-muscle connection improves muscle activation",
      "💡 Recovery happens during rest, not during training",
      "💡 Mental fitness is just as important as physical fitness"
    ],
    es: [
      "💡 Siempre calienta antes de entrenar para prevenir lesiones",
      "💡 La ingesta de proteína debe ser 1.6-2.2g por kg de peso corporal para ganar músculo",
      "💡 Duerme 7-9 horas por noche para una recuperación óptima",
      "💡 La sobrecarga progresiva es clave para la mejora continua",
      "💡 Forma sobre peso - las reps de calidad construyen más músculo",
      "💡 Mantente hidratado - busca 35-40ml por kg de peso corporal diario",
      "💡 Haz deload cada 4-6 semanas para prevenir el sobreentrenamiento",
      "💡 La consistencia vence a la intensidad - muéstrate todos los días",
      "💡 Escucha a tu cuerpo - descansa cuando sea necesario",
      "💡 Registra tu progreso para mantenerte motivado",
      "💡 La nutrición es el 80% de tus resultados",
      "💡 Los ejercicios compuestos construyen más músculo que los de aislamiento",
      "💡 La conexión mente-músculo mejora la activación muscular",
      "💡 La recuperación ocurre durante el descanso, no durante el entrenamiento",
      "💡 El fitness mental es tan importante como el fitness físico"
    ],
    pt: [
      "💡 Sempre aqueça antes de treinar para prevenir lesões",
      "💡 A ingestão de proteína deve ser 1.6-2.2g por kg de peso corporal para ganhar músculo",
      "💡 Durma 7-9 horas por noite para recuperação ideal",
      "💡 Sobrecarga progressiva é chave para melhoria contínua",
      "💡 Forma sobre peso - reps de qualidade constroem mais músculo",
      "💡 Mantenha-se hidratado - busque 35-40ml por kg de peso corporal diariamente",
      "💡 Faça deload a cada 4-6 semanas para prevenir overtraining",
      "💡 Consistência vence intensidade - apareça todos os dias",
      "💡 Ouça seu corpo - descanse quando necessário",
      "💡 Registre seu progresso para se manter motivado",
      "💡 Nutrição é 80% dos seus resultados",
      "💡 Exercícios compostos constroem mais músculo que isolamento",
      "💡 Conexão mente-músculo melhora ativação muscular",
      "💡 Recuperação acontece durante o descanso, não durante o treino",
      "💡 Fitness mental é tão importante quanto fitness físico"
    ]
  };
  
  const tipList = tips[LANG] || tips.en;
  const randomTip = tipList[Math.floor(Math.random() * tipList.length)];
  printHeader(t.randomTip);
  printColored(randomTip, 'bright');
  console.log('');
}

// Show installation instructions
function showInstall() {
  printHeader(t.installInstructions);
  
  printSubHeader('npm (Recommended)');
  console.log('  npm install -g fitness-knowledge-skill');
  console.log('');
  
  printSubHeader('npx (No Installation)');
  console.log('  npx fitness-knowledge-skill');
  console.log('');
  
  printSubHeader('curl (Linux/macOS)');
  console.log('  curl -fsSL https://raw.githubusercontent.com/Reaan06/fitness-knowledge/main/install.sh | bash');
  console.log('');
  
  printSubHeader('Manual Installation');
  console.log('  git clone https://github.com/Reaan06/fitness-knowledge.git');
  console.log('  cd fitness-knowledge');
  console.log('  npm install');
  console.log('  npm link');
  console.log('');
  
  printSubHeader('Verify Installation');
  console.log('  fitness-knowledge doctor');
  console.log('');
}

// Check installation
function checkInstallation() {
  printHeader(t.doctor);
  
  const checks = [
    { name: 'Node.js', check: () => process.version },
    { name: 'Package.json', check: () => existsSync(join(ROOT_DIR, 'package.json')) ? '✓' : '✗' },
    { name: 'Assets directory', check: () => existsSync(join(ROOT_DIR, 'assets')) ? '✓' : '✗' },
    { name: 'SKILL.md', check: () => existsSync(join(ROOT_DIR, 'SKILL.md')) ? '✓' : '✗' },
    { name: 'README.md', check: () => existsSync(join(ROOT_DIR, 'README.md')) ? '✓' : '✗' },
    { name: 'LICENSE', check: () => existsSync(join(ROOT_DIR, 'LICENSE')) ? '✓' : '✗' }
  ];
  
  let allPassed = true;
  
  checks.forEach(check => {
    try {
      const result = check.check();
      if (result === '✓') {
        printSuccess(`${check.name}: ${result}`);
      } else if (result === '✗') {
        printError(`${check.name}: ${result}`);
        allPassed = false;
      } else {
        printSuccess(`${check.name}: ${result}`);
      }
    } catch (error) {
      printError(`${check.name}: Error - ${error.message}`);
      allPassed = false;
    }
  });
  
  console.log('');
  
  if (allPassed) {
    printSuccess(t.allChecksPassed);
  } else {
    printWarning(t.someChecksFailed);
  }
}

// Main function
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'help':
    case '-h':
    case '--help':
      showHelp();
      break;
      
    case 'version':
    case '-v':
    case '--version':
      showVersion();
      break;
      
    case 'list':
    case 'ls':
      listModules();
      break;
      
    case 'show':
      if (args[1]) {
        showModule(args[1]);
      } else {
        printError(t.specifyModule);
        printInfo(t.useList);
      }
      break;
      
    case 'search':
      if (args[1]) {
        searchContent(args.slice(1).join(' '));
      } else {
        printError(t.specifyQuery);
        printInfo(t.exampleSearch);
      }
      break;
      
    case 'info':
      showInfo();
      break;
      
    case 'topics':
      listTopics();
      break;
      
    case 'random':
      showRandomTip();
      break;
      
    case 'install':
      showInstall();
      break;
      
    case 'doctor':
      checkInstallation();
      break;
      
    default:
      if (!command) {
        showHelp();
      } else {
        printError(`${t.unknownCommand}: ${command}`);
        printInfo(t.useHelp);
      }
  }
}

// Run the CLI
main();
