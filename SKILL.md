---
name: fitness-knowledge
description: "Trigger: fitness, workout, exercise, nutrition, macros, calories, training, gym, functional, home workout, recovery, supplements, periodization, injury prevention, mental fitness, tracking metrics, sport-specific, exercise variations, fitness trends, calculators, personalized programs, routine builder, training plans. Complete fitness knowledge base with 25 modules."
license: MIT
metadata:
  author: "reaan"
  version: "3.0"
---

# Fitness Knowledge Skill

## Activation Contract

Activate this skill when:
- User asks about any type of exercise, workout, or training
- User asks about nutrition, macros, calories, carbs, protein, fats
- User asks about gym techniques or form
- User asks about functional training or home workouts
- User asks about recovery, rest, or sleep
- User asks about supplements or vitamins
- User asks about periodization or programming
- User asks about injury prevention or rehabilitation
- User asks about mental aspects of fitness
- User asks about tracking metrics or progress
- User asks about equipment or machines
- User asks for workout plans or routines
- User asks about body composition or transformation
- User asks about sports nutrition
- User asks about warm-up or cool-down
- User asks about sport-specific training
- User asks about exercise variations or alternatives
- User asks about fitness trends or new research
- User asks about advanced training techniques
- User asks for calculators (BMR, TDEE, macros)
- User asks for personalized training programs
- User wants to build a custom routine
- User asks for training plans with reminders
- User wants to calculate their nutritional needs
- User wants to track their fitness progress

## Hard Rules

1. **NEVER** give medical advice. Always recommend consulting a healthcare professional for injuries or health conditions.
2. **ALWAYS** emphasize proper form over weight/intensity.
3. **ALWAYS** recommend warm-up before exercise and cool-down after.
4. **ALWAYS** consider individual differences (age, fitness level, goals, limitations).
5. **NEVER** recommend extreme diets or dangerous training protocols.
6. **ALWAYS** provide evidence-based information, not bro-science.
7. **ALWAYS** include safety considerations for each exercise or technique.
8. **ALWAYS** mention progression and regression options for exercises.
9. **ALWAYS** cite scientific sources when available.
10. **ALWAYS** update information with latest research (2024-2026).
11. **ALWAYS** use calculators module for personalized recommendations.
12. **ALWAYS** follow routine-builder workflow for custom programs.
13. **ALWAYS** set up reminders and check-ins for training plans.

## Decision Gates

| User Need | Action |
|-----------|--------|
| Exercise technique | Load `assets/gym-techniques.md` + `assets/exercise-variations.md` + `assets/exercise-guides.md` + `assets/common-mistakes.md` |
| Workout plan | Load `assets/periodization.md` + `assets/workout-programs.md` + `assets/personalized-programs.md` |
| Nutrition advice | Load `assets/nutrition-macros.md` + `assets/sports-nutrition.md` + `assets/sports-nutrition-advanced.md` + `assets/calculators.md` |
| Injury question | Load `assets/injury-prevention.md` + `assets/injury-prevention-advanced.md` + recommend professional |
| Mental fitness | Load `assets/mental-fitness.md` + `assets/mental-fitness-advanced.md` |
| Tracking progress | Load `assets/tracking-metrics.md` + `assets/training-plans.md` |
| Equipment question | Load `assets/equipment-guide.md` |
| Recovery question | Load `assets/recovery-rest.md` |
| Supplement question | Load `assets/supplements.md` |
| Sport-specific training | Load `assets/sport-specific-training.md` |
| Fitness trends | Load `assets/fitness-trends-2024-2026.md` |
| Exercise variations | Load `assets/exercise-variations.md` + `assets/exercise-guides.md` |
| Calculators | Load `assets/calculators.md` |
| Personalized programs | Load `assets/personalized-programs.md` + `assets/calculators.md` |
| Custom routine | Load `assets/routine-builder.md` + `assets/personalized-programs.md` |
| Training plans | Load `assets/training-plans.md` + `assets/personalized-programs.md` |

## Execution Steps

1. Identify the user's specific question or need.
2. Load the relevant asset file(s) based on the decision gates.
3. For calculators, use the formulas in `assets/calculators.md`.
4. For personalized programs, follow the workflow in `assets/personalized-programs.md`.
5. For custom routines, use the interactive process in `assets/routine-builder.md`.
6. For training plans, set up reminders and check-ins from `assets/training-plans.md`.
7. Provide comprehensive, evidence-based information.
8. Include safety considerations and contraindications.
9. Offer modifications for different fitness levels.
10. Suggest how this can be integrated into fitness applications.
11. Cite scientific sources when available.
12. Update information with latest research findings.

## Output Contract

Return:
- Clear, structured information with headings
- Safety warnings where applicable
- Practical, actionable advice
- References to scientific evidence when relevant
- Integration points with fitness applications
- Progression/regression options for exercises
- Latest research findings (2024-2026)
- Sport-specific recommendations when applicable
- Calculator results with explanations
- Personalized program recommendations
- Interactive routine building process
- Training plans with reminders and check-ins

## References

### Core Modules (Original)
- `assets/training-types.md` — Complete guide to all training modalities
- `assets/nutrition-macros.md` — Calories, macros, carbs, protein, fats, micronutrients
- `assets/sports-nutrition.md` — Advanced sports nutrition and timing
- `assets/gym-techniques.md` — All gym exercises with proper form
- `assets/functional-training.md` — Functional training patterns
- `assets/home-workouts.md` — Bodyweight and minimal equipment workouts
- `assets/workout-programs.md` — Structured workout programs for all levels
- `assets/recovery-rest.md` — Recovery protocols and sleep optimization
- `assets/supplements.md` — Evidence-based supplement guide
- `assets/periodization.md` — Programming and periodization principles
- `assets/common-mistakes.md` — Frequent errors and how to fix them
- `assets/equipment-guide.md` — Gym equipment usage and alternatives
- `assets/injury-prevention.md` — Injury prevention and rehabilitation
- `assets/mental-fitness.md` — Mindset, motivation, and psychological aspects
- `assets/tracking-metrics.md` — What to track and how to measure progress

### Advanced Modules (New in v2.0)
- `assets/sports-nutrition-advanced.md` — Latest research on sports nutrition (2024-2026)
- `assets/sport-specific-training.md` — Training programs for 14+ sports
- `assets/injury-prevention-advanced.md` — Latest injury prevention research (2024-2026)
- `assets/mental-fitness-advanced.md` — Advanced mental training techniques
- `assets/fitness-trends-2024-2026.md` — Emerging fitness trends and science
- `assets/exercise-variations.md` — 200+ exercise variations with progressions

### New Modules (New in v3.0)
- `assets/calculators.md` — BMR, TDEE, macros, body composition, performance calculators
- `assets/exercise-guides.md` — Detailed exercise guides with visual cues
- `assets/personalized-programs.md` — Personalized training programs based on user assessment
- `assets/routine-builder.md` — Interactive routine building workflow
- `assets/training-plans.md` — Training plans with reminders and check-ins

## Version History

- **v3.0** (2026-07-08): Added 5 new modules, fuzzy search, multilingual support
- **v2.0** (2026-07-08): Added 6 new advanced modules, updated README, expanded CLI
- **v1.0** (2026-07-08): Initial release with 15 core modules
