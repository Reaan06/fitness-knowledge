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
  printHeader('🏋️ Fitness Knowledge Skill CLI');
  
  printColored('Complete fitness knowledge base\n', 'dim');
  
  printSubHeader('Usage');
  console.log('  fitness-knowledge [command] [options]');
  console.log('  fk [command] [options]\n');
  
  printSubHeader('Commands');
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
  
  printSubHeader('Examples');
  console.log('  fitness-knowledge list                    # List all modules');
  console.log('  fitness-knowledge show nutrition          # Show nutrition module');
  console.log('  fitness-knowledge search "protein"        # Search for protein info');
  console.log('  fitness-knowledge topics                  # List all topics');
  console.log('  fitness-knowledge random                  # Get a random tip\n');
  
  printSubHeader('Module Names');
  console.log('  training, nutrition, sports-nutrition, gym-techniques,');
  console.log('  functional, home-workouts, vita-workouts, recovery,');
  console.log('  supplements, periodization, common-mistakes, equipment,');
  console.log('  injury-prevention, mental-fitness, tracking\n');
  
  printSubHeader('Installation');
  console.log('  npm:  npm install -g fitness-knowledge-skill');
  console.log('  npx:  npx fitness-knowledge-skill');
  console.log('  curl: curl -fsSL https://raw.githubusercontent.com/Reaan06/fitness-knowledge/main/install.sh | bash\n');
}

// Show version
function showVersion() {
  const packageJson = JSON.parse(readFileSync(join(ROOT_DIR, 'package.json'), 'utf-8'));
  printColored(`Fitness Knowledge Skill v${packageJson.version}`, 'bright');
}

// List all modules
function listModules() {
  printHeader('📚 Available Modules');
  
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
    { name: 'fitness-trends', description: 'Emerging fitness trends (2024-2026)' }
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
    'fitness-trends': 'fitness-trends-2024-2026.md'
  };
  
  const filename = moduleMap[moduleName];
  if (!filename) {
    printError(`Unknown module: ${moduleName}`);
    printInfo('Use "fitness-knowledge list" to see available modules');
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

// Search content
function searchContent(query) {
  printHeader(`🔍 Searching for: "${query}"`);
  
  const assets = listAssets();
  const results = [];
  
  assets.forEach(asset => {
    const content = readAsset(asset);
    if (content && content.toLowerCase().includes(query.toLowerCase())) {
      const lines = content.split('\n');
      const matchingLines = lines.filter(line => 
        line.toLowerCase().includes(query.toLowerCase())
      );
      
      results.push({
        asset: asset.replace('.md', ''),
        matches: matchingLines.length,
        preview: matchingLines[0]?.substring(0, 100) + '...'
      });
    }
  });
  
  if (results.length === 0) {
    printWarning('No results found');
    return;
  }
  
  printSuccess(`Found ${results.length} module(s) with matches:\n`);
  
  results.forEach(result => {
    printColored(`  📄 ${result.asset}`, 'bright');
    console.log(`     ${result.matches} matches`);
    console.log(`     Preview: ${result.preview}`);
    console.log('');
  });
  
  printInfo('Use "fitness-knowledge show <module>" to see full content');
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
  console.log('');
  
  printSubHeader('Modules');
  const assets = listAssets();
  console.log(`Total modules: ${assets.length}`);
  console.log('Topics covered: Training, Nutrition, Recovery, Supplements, and more');
}

// List topics
function listTopics() {
  printHeader('🎯 Fitness Topics');
  
  const topics = [
    { category: 'Training', items: ['Strength', 'Cardio', 'Functional', 'Plyometrics', 'Calisthenics'] },
    { category: 'Nutrition', items: ['Macros', 'Micros', 'Hydration', 'Timing', 'Diets'] },
    { category: 'Recovery', items: ['Sleep', 'Stretching', 'Foam Rolling', 'Deloads'] },
    { category: 'Supplements', items: ['Creatine', 'Protein', 'Caffeine', 'Vitamins'] },
    { category: 'Mental', items: ['Motivation', 'Goals', 'Mindset', 'Stress'] },
    { category: 'Health', items: ['Injury Prevention', 'Form', 'Equipment', 'Tracking'] }
  ];
  
  topics.forEach(topic => {
    printColored(`\n${topic.category}:`, 'bright');
    console.log(`  ${topic.items.join(', ')}`);
  });
  
  console.log('');
}

// Show random tip
function showRandomTip() {
  const tips = [
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
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  printHeader('🎲 Random Fitness Tip');
  printColored(randomTip, 'bright');
  console.log('');
}

// Show installation instructions
function showInstall() {
  printHeader('📦 Installation Instructions');
  
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
  printHeader('🔍 Installation Doctor');
  
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
    printSuccess('All checks passed! Installation is correct.');
  } else {
    printWarning('Some checks failed. Please reinstall the skill.');
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
        printError('Please specify a module name');
        printInfo('Use "fitness-knowledge list" to see available modules');
      }
      break;
      
    case 'search':
      if (args[1]) {
        searchContent(args.slice(1).join(' '));
      } else {
        printError('Please specify a search query');
        printInfo('Example: fitness-knowledge search "protein"');
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
        printError(`Unknown command: ${command}`);
        printInfo('Use "fitness-knowledge help" to see available commands');
      }
  }
}

// Run the CLI
main();
