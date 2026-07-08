/**
 * Fitness Knowledge Skill
 * Complete fitness knowledge base for the Vita app
 * 
 * This module provides comprehensive, evidence-based fitness information
 * including training, nutrition, recovery, supplements, and more.
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Fitness Knowledge class
 */
class FitnessKnowledge {
  constructor() {
    this.rootDir = join(__dirname);
    this.assetsDir = join(this.rootDir, 'assets');
  }

  /**
   * Get list of all available modules
   * @returns {string[]} Array of module names
   */
  getModules() {
    if (existsSync(this.assetsDir)) {
      return readdirSync(this.assetsDir)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace('.md', ''));
    }
    return [];
  }

  /**
   * Get module content
   * @param {string} moduleName - Name of the module
   * @returns {string|null} Module content or null if not found
   */
  getModule(moduleName) {
    const filename = `${moduleName}.md`;
    const filePath = join(this.assetsDir, filename);
    
    if (existsSync(filePath)) {
      return readFileSync(filePath, 'utf-8');
    }
    return null;
  }

  /**
   * Search for content across all modules
   * @param {string} query - Search query
   * @returns {Array} Array of matching results
   */
  search(query) {
    const results = [];
    const modules = this.getModules();
    
    modules.forEach(module => {
      const content = this.getModule(module);
      if (content && content.toLowerCase().includes(query.toLowerCase())) {
        const lines = content.split('\n');
        const matchingLines = lines.filter(line => 
          line.toLowerCase().includes(query.toLowerCase())
        );
        
        results.push({
          module,
          matches: matchingLines.length,
          preview: matchingLines[0]?.substring(0, 100) + '...'
        });
      }
    });
    
    return results;
  }

  /**
   * Get all fitness topics
   * @returns {Object} Topics organized by category
   */
  getTopics() {
    return {
      training: ['Strength', 'Cardio', 'Functional', 'Plyometrics', 'Calisthenics'],
      nutrition: ['Macros', 'Micros', 'Hydration', 'Timing', 'Diets'],
      recovery: ['Sleep', 'Stretching', 'Foam Rolling', 'Deloads'],
      supplements: ['Creatine', 'Protein', 'Caffeine', 'Vitamins'],
      mental: ['Motivation', 'Goals', 'Mindset', 'Stress'],
      health: ['Injury Prevention', 'Form', 'Equipment', 'Tracking']
    };
  }

  /**
   * Get a random fitness tip
   * @returns {string} Random fitness tip
   */
  getRandomTip() {
    const tips = [
      "Always warm up before training to prevent injuries",
      "Protein intake should be 1.6-2.2g per kg of body weight for muscle growth",
      "Sleep 7-9 hours per night for optimal recovery",
      "Progressive overload is key to continuous improvement",
      "Form over weight - quality reps build muscle better",
      "Stay hydrated - aim for 35-40ml per kg of body weight daily",
      "Deload every 4-6 weeks to prevent overtraining",
      "Consistency beats intensity - show up every day",
      "Listen to your body - rest when needed",
      "Track your progress to stay motivated",
      "Nutrition is 80% of your results",
      "Compound exercises build more muscle than isolation",
      "Mind-muscle connection improves muscle activation",
      "Recovery happens during rest, not during training",
      "Mental fitness is just as important as physical fitness"
    ];
    
    return tips[Math.floor(Math.random() * tips.length)];
  }

  /**
   * Get package information
   * @returns {Object} Package information
   */
  getPackageInfo() {
    const packagePath = join(this.rootDir, 'package.json');
    if (existsSync(packagePath)) {
      return JSON.parse(readFileSync(packagePath, 'utf-8'));
    }
    return null;
  }
}

// Export the class
export default FitnessKnowledge;

// Also export as CommonJS for backward compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FitnessKnowledge;
}
