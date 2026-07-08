# 🏋️ Fitness Knowledge Skill

[![npm version](https://badge.fury.io/js/fitness-knowledge-skill.svg)](https://www.npmjs.com/package/fitness-knowledge-skill)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> 📚 **The most comprehensive, evidence-based fitness knowledge base available as a CLI tool.**

A complete fitness knowledge base covering training, nutrition, recovery, supplements, mental fitness, and more. Built for developers, fitness professionals, and enthusiasts who want accurate, science-backed information.

---

## 🎯 What is This?

This is an **LLM-first skill** designed to provide accurate, evidence-based fitness information. It covers everything from basic exercises to advanced periodization, ensuring users get safe, effective guidance.

### Key Highlights

- ✅ **16 Comprehensive Modules** covering all aspects of fitness
- ✅ **Evidence-Based** - Scientific research, not bro-science
- ✅ **Safety-First** - Includes contraindications and warnings
- ✅ **Progressive** - Progression/regression options for all exercises
- ✅ **CLI Tool** - Easy to use from command line
- ✅ **Multiple Installation Methods** - npm, npx, curl, or manual
- ✅ **App-Agnostic** - Can integrate with any fitness application

---

## 📚 What's Inside?

### Core Modules

| Module | Topics Covered | File |
|--------|----------------|------|
| 🏋️ **Training Types** | Strength, Cardio, Functional, Plyometrics, Olympic, Calisthenics, CrossFit | `training-types.md` |
| 🥗 **Nutrition & Macros** | BMR, TDEE, Protein, Carbs, Fats, Micronutrients, Hydration | `nutrition-macros.md` |
| ⚡ **Sports Nutrition** | Nutrient Timing, Performance Supplements, Weight Management | `sports-nutrition.md` |
| 💪 **Gym Techniques** | Compound & Isolation Exercises, Form Cues, Common Mistakes | `gym-techniques.md` |
| 🔄 **Functional Training** | Movement Patterns, Core Stability, Balance, Power | `functional-training.md` |
| 🏠 **Home Workouts** | Bodyweight, Minimal Equipment, HIIT, Programs | `home-workouts.md` |
| 📋 **Workout Programs** | Beginner to Advanced, Splits, Periodized Plans | `workout-programs.md` |
| 😴 **Recovery & Rest** | Sleep, Active Recovery, Deloads, Stress Management | `recovery-rest.md` |
| 💊 **Supplements** | Evidence-Based Guide, Timing, What Works & What Doesn't | `supplements.md` |
| 📈 **Periodization** | Linear, Undulating, Block, Training Phases | `periodization.md` |
| ⚠️ **Common Mistakes** | Training, Nutrition, Recovery, Mindset Errors | `common-mistakes.md` |
| 🔧 **Equipment Guide** | Free Weights, Machines, Bodyweight, Cardio, Accessories | `equipment-guide.md` |
| 🩹 **Injury Prevention** | Common Injuries, Prevention Strategies, Rehabilitation | `injury-prevention.md` |
| 🧠 **Mental Fitness** | Mindset, Motivation, Goal Setting, Visualization | `mental-fitness.md` |
| 📊 **Tracking Metrics** | What to Track, Tools, Best Practices | `tracking-metrics.md` |

---

## 🚀 Quick Start

### Installation

```bash
# Option 1: npm (Recommended)
npm install -g fitness-knowledge-skill

# Option 2: npx (No installation required)
npx fitness-knowledge-skill

# Option 3: curl (Linux/macOS)
curl -fsSL https://raw.githubusercontent.com/Reaan06/fitness-knowledge/main/install.sh | bash

# Option 4: Manual
git clone https://github.com/Reaan06/fitness-knowledge.git
cd fitness-knowledge && npm install && npm link
```

### First Steps

```bash
# Verify installation
fitness-knowledge doctor

# Explore available modules
fitness-knowledge list

# Get a random fitness tip
fitness-knowledge random
```

---

## 🖥️ CLI Commands

| Command | Description | Example |
|---------|-------------|---------|
| `help` | Show all available commands | `fitness-knowledge help` |
| `list` / `ls` | List all modules | `fitness-knowledge list` |
| `show <module>` | Display module content | `fitness-knowledge show nutrition` |
| `search <query>` | Search across all modules | `fitness-knowledge search "protein"` |
| `topics` | List all fitness topics | `fitness-knowledge topics` |
| `random` | Get a random fitness tip | `fitness-knowledge random` |
| `info` | Show package information | `fitness-knowledge info` |
| `doctor` | Check installation status | `fitness-knowledge doctor` |
| `install` | Show installation instructions | `fitness-knowledge install` |
| `version` / `-v` | Show version number | `fitness-knowledge version` |

### Aliases

- `fk` - Short alias for `fitness-knowledge`

---

## 📖 Module Deep Dive

### 🏋️ Training Types

Comprehensive guide to all training modalities:

- **Strength Training**: Bodybuilding, Powerlifting, Strength Endurance
- **Cardiovascular**: LISS, HIIT, MICT, SIT protocols
- **Functional Training**: Movement patterns, core stability
- **Plyometrics**: Explosive power development
- **Olympic Weightlifting**: Snatch, Clean & Jerk
- **Calisthenics**: Bodyweight mastery
- **CrossFit**: Constantly varied functional movements
- **Sport-Specific**: Training for specific sports

### 🥗 Nutrition & Macros

Complete nutrition science:

- **Caloric Fundamentals**: BMR, TDEE, caloric balance
- **Macronutrients**: Protein, Carbohydrates, Fats
- **Micronutrients**: Vitamins, Minerals
- **Hydration**: Water needs, electrolytes
- **Meal Timing**: When to eat for optimal performance
- **Special Diets**: Mediterranean, Keto, IF, Plant-Based

### 💊 Supplements

Evidence-based supplement guide:

- **Tier 1 (Strong Evidence)**: Creatine, Caffeine, Beta-Alanine
- **Tier 2 (Moderate Evidence)**: Omega-3, Vitamin D, Magnesium
- **Tier 3 (Limited Evidence)**: BCAAs, Glutamine
- **Avoid**: Fat burners, testosterone boosters, proprietary blends

### 🧠 Mental Fitness

Psychology of performance:

- **Mindset**: Growth vs Fixed mindset
- **Motivation**: Intrinsic vs Extrinsic
- **Goal Setting**: SMART goals framework
- **Visualization**: Mental rehearsal techniques
- **Stress Management**: Cortisol, recovery, balance

---

## 🛠️ Integration Guide

### For AI Agents

```javascript
// Load the skill when fitness questions are asked
const FitnessKnowledge = require('fitness-knowledge-skill');

const fk = new FitnessKnowledge();

// Get a module
const nutrition = fk.getModule('nutrition');

// Search for content
const results = fk.search('protein');

// Get random tip
const tip = fk.getRandomTip();
```

### For Fitness Applications

This skill can power:

- 📱 **Workout recommendation engines**
- 🍎 **Nutrition guidance systems**
- 😴 **Recovery protocols**
- 📊 **Progress tracking features**
- 🎯 **Goal setting frameworks**

### API Usage

```javascript
import FitnessKnowledge from 'fitness-knowledge-skill';

const fk = new FitnessKnowledge();

// List all modules
console.log(fk.getModules());

// Get specific module content
const gymTechniques = fk.getModule('gym-techniques');

// Search across all modules
const proteinInfo = fk.search('protein');

// Get topics
const topics = fk.getTopics();
```

---

## 📁 Project Structure

```
fitness-knowledge/
├── 📄 SKILL.md                    # Main skill definition
├── 📄 package.json                # npm configuration
├── 📄 index.js                    # Node.js module
├── 📄 README.md                   # This file
├── 📄 LICENSE                     # MIT License
├── 📄 CONTRIBUTING.md             # Contribution guidelines
├── 📄 CHANGELOG.md                # Version history
├── 📁 bin/
│   └── 📄 fitness-knowledge.js    # CLI executable
├── 📁 assets/
│   ├── 📄 training-types.md       # Training modalities
│   ├── 📄 nutrition-macros.md     # Nutrition fundamentals
│   ├── 📄 sports-nutrition.md     # Advanced nutrition
│   ├── 📄 gym-techniques.md       # Exercise techniques
│   ├── 📄 functional-training.md  # Functional patterns
│   ├── 📄 home-workouts.md        # Home programs
│   ├── 📄 workout-programs.md     # Structured programs
│   ├── 📄 recovery-rest.md        # Recovery protocols
│   ├── 📄 supplements.md          # Supplement guide
│   ├── 📄 periodization.md        # Programming principles
│   ├── 📄 common-mistakes.md      # Common errors
│   ├── 📄 equipment-guide.md      # Equipment reference
│   ├── 📄 injury-prevention.md    # Injury prevention
│   ├── 📄 mental-fitness.md       # Mental aspects
│   └── 📄 tracking-metrics.md     # Progress tracking
├── 📁 install.sh                  # curl installer
└── 📁 uninstall.sh                # Uninstaller
```

---

## 🎓 Key Principles

1. **🛡️ Safety First** - Never give medical advice; always recommend professional consultation
2. **🔬 Evidence-Based** - Use scientific research, not bro-science
3. **📈 Progressive** - Always provide progression and regression options
4. **👤 Individual** - Consider age, fitness level, goals, and limitations
5. **🔄 Consistent** - Emphasize consistency over intensity

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

### Ways to Contribute

- 📝 **Documentation** - Improve explanations, add examples
- 🧪 **Research** - Add new scientific findings
- 💪 **Exercises** - Add new variations, progressions
- 🍎 **Nutrition** - Update dietary guidelines
- 🐛 **Bug Fixes** - Report and fix issues
- ✨ **Features** - Suggest and implement improvements

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Reaan06/fitness-knowledge.git

# Install dependencies
cd fitness-knowledge
npm install

# Link for local development
npm link

# Test CLI
fitness-knowledge help
```

---

## 📊 Stats

- 📚 **16 Modules** of comprehensive content
- 📝 **100KB+** of detailed documentation
- 🏋️ **500+ Exercises** with proper form
- 🍎 **100+ Nutrition Guidelines**
- 💊 **50+ Supplement Reviews**
- 🧠 **Mental Fitness Strategies**

---

## 🗺️ Roadmap

- [ ] Add video exercise demonstrations
- [ ] Create interactive workout builder
- [ ] Add calorie calculator integration
- [ ] Support for multiple languages
- [ ] Mobile app integration
- [ ] API for third-party apps
- [ ] Community-contributed content
- [ ] Regular research updates

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Scientific research on fitness and nutrition
- Evidence-based training principles
- The fitness community for feedback and contributions
- Open source tools that made this possible

---

## 📞 Support

If you have questions or need help:

- 🐛 **Bug Reports**: [Open an issue](https://github.com/Reaan06/fitness-knowledge/issues)
- 💡 **Feature Requests**: [Suggest a feature](https://github.com/Reaan06/fitness-knowledge/issues)
- 📧 **Contact**: Reach out to maintainers
- 🌐 **Website**: [GitHub Repository](https://github.com/Reaan06/fitness-knowledge)

---

## ⭐ Star Us

If you find this project useful, please give it a ⭐ on GitHub!

---

**Remember**: Fitness is a journey, not a destination. Focus on progress, not perfection. 💪
