---
name: fitness-knowledge
description: "Trigger: fitness, workout, exercise, nutrition, macros, calories, training, gym, functional, home workout, recovery, supplements, periodization, injury prevention, mental fitness, tracking metrics. Complete fitness knowledge base."
license: Apache-2.0
metadata:
  author: "reaan"
  version: "1.0"
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

## Hard Rules

1. **NEVER** give medical advice. Always recommend consulting a healthcare professional for injuries or health conditions.
2. **ALWAYS** emphasize proper form over weight/intensity.
3. **ALWAYS** recommend warm-up before exercise and cool-down after.
4. **ALWAYS** consider individual differences (age, fitness level, goals, limitations).
5. **NEVER** recommend extreme diets or dangerous training protocols.
6. **ALWAYS** provide evidence-based information, not bro-science.
7. **ALWAYS** include safety considerations for each exercise or technique.
8. **ALWAYS** mention progression and regression options for exercises.

## Decision Gates

| User Need | Action |
|-----------|--------|
| Exercise technique | Load `assets/gym-techniques.md` + `assets/common-mistakes.md` |
| Workout plan | Load `assets/periodization.md` + training type specific file |
| Nutrition advice | Load `assets/nutrition-macros.md` + `assets/sports-nutrition.md` |
| Injury question | Load `assets/injury-prevention.md` + recommend professional |
| Mental fitness | Load `assets/mental-fitness.md` |
| Tracking progress | Load `assets/tracking-metrics.md` |
| Equipment question | Load `assets/equipment-guide.md` |
| Recovery question | Load `assets/recovery-rest.md` |
| Supplement question | Load `assets/supplements.md` |

## Execution Steps

1. Identify the user's specific question or need.
2. Load the relevant asset file(s) based on the decision gates.
3. Provide comprehensive, evidence-based information.
4. Include safety considerations and contraindications.
5. Offer modifications for different fitness levels.
6. Suggest how this can be integrated into fitness applications.

## Output Contract

Return:
- Clear, structured information with headings
- Safety warnings where applicable
- Practical, actionable advice
- References to scientific evidence when relevant
- Integration points with fitness applications
- Progression/regression options for exercises

## References

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
