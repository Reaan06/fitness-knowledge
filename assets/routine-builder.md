# Routine Builder Interactive Workflow Module

## Overview

This module provides AI with a structured workflow to interactively build fitness routines with users. The AI guides users through a step-by-step process to create personalized workout plans.

---

## Interactive Building Process

### Phase 1: Discovery (5-10 questions)

**Goal Understanding:**
1. "What's your primary fitness goal?" 
   - Lose weight / Gain muscle / Improve performance / General health
   
2. "How many days per week can you train?"
   - 2-3 / 4-5 / 6+ days
   
3. "How much time do you have per session?"
   - 30 min / 45-60 min / 60-90 min / 90+ min

**Current Situation:**
4. "What's your training experience?"
   - Beginner (0-6 months) / Intermediate (6-24 months) / Advanced (24+ months)
   
5. "What equipment do you have access to?"
   - Full gym / Home gym / Minimal equipment / Bodyweight only
   
6. "Do you have any injuries or limitations I should know about?"

**Preferences:**
7. "What exercises do you enjoy?"
   - (List common exercises for user to select)
   
8. "Are there exercises you want to avoid?"
   - (List common exercises for user to avoid)
   
9. "Do you prefer higher volume (more reps) or higher intensity (heavier weight)?"

10. "Any other preferences or constraints?"

### Phase 2: Calculation (AI performs)

Based on user responses, AI calculates:

1. **Training Frequency**: Optimal days per week
2. **Session Duration**: Appropriate time per workout
3. **Volume Distribution**: Sets and reps per muscle group
4. **Intensity Zones**: Weight percentages for different goals
5. **Exercise Selection**: Based on equipment and preferences

### Phase 3: Program Design (AI presents)

AI creates and presents:

**Option A: Conservative Approach**
- Safer, slower progression
- Good for beginners or those returning
- Lower injury risk

**Option B: Balanced Approach**
- Moderate progression
- Good for intermediates
- Balance of results and sustainability

**Option C: Aggressive Approach**
- Faster progression
- Good for advanced or highly motivated
- Higher risk, higher reward

### Phase 4: Refinement (User feedback)

AI asks:
- "Does this look good to you?"
- "Any exercises you'd like to swap?"
- "Does the schedule work for you?"
- "Any other adjustments?"

AI adjusts based on feedback.

### Phase 5: Finalization (AI delivers)

AI provides:
1. Complete weekly routine
2. Exercise descriptions with sets/reps
3. Progression plan
4. Tracking suggestions
5. Check-in schedule

---

## Routine Templates by Time

### 30-Minute Routines

**Full Body Express (30 min)**
1. Warm-up (3 min)
   - Jumping jacks: 1 min
   - Arm circles: 1 min
   - Leg swings: 1 min

2. Main Workout (24 min)
   - Goblet Squat: 3×10 (6 min)
   - Push-Ups: 3×10 (6 min)
   - Dumbbell Rows: 3×10 (6 min)
   - Plank: 3×30 sec (6 min)

3. Cool-down (3 min)
   - Stretching: 3 min

**HIIT Circuit (30 min)**
1. Warm-up (5 min)
2. Circuit (20 min) - 4 rounds:
   - Burpees: 45 sec
   - Rest: 15 sec
   - Mountain climbers: 45 sec
   - Rest: 15 sec
   - Jump squats: 45 sec
   - Rest: 15 sec
   - High knees: 45 sec
   - Rest: 15 sec
3. Cool-down (5 min)

### 45-Minute Routines

**Upper/Lower Split (45 min)**
1. Warm-up (5 min)
2. Main Workout (35 min)
   - Barbell Squat: 4×8 (10 min)
   - Romanian Deadlift: 3×10 (8 min)
   - Leg Press: 3×12 (7 min)
   - Calf Raises: 4×15 (5 min)
   - Plank: 3×45 sec (5 min)
3. Cool-down (5 min)

**Push Day (45 min)**
1. Warm-up (5 min)
2. Main Workout (35 min)
   - Bench Press: 4×8 (10 min)
   - Incline Dumbbell Press: 3×10 (8 min)
   - Overhead Press: 3×8 (7 min)
   - Lateral Raises: 3×12 (5 min)
   - Tricep Pushdowns: 3×12 (5 min)
3. Cool-down (5 min)

### 60-Minute Routines

**Full Body Strength (60 min)**
1. Warm-up (10 min)
   - Foam rolling: 5 min
   - Dynamic stretching: 5 min

2. Main Workout (45 min)
   - Deadlift: 4×6 (12 min)
   - Bench Press: 4×8 (10 min)
   - Barbell Row: 3×10 (8 min)
   - Overhead Press: 3×8 (7 min)
   - Face Pulls: 3×15 (5 min)
   - Plank: 3×60 sec (3 min)

3. Cool-down (5 min)
   - Static stretching: 5 min

**Hypertrophy Focus (60 min)**
1. Warm-up (10 min)
2. Main Workout (45 min)
   - Leg Press: 4×12 (10 min)
   - Incline Bench Press: 4×10 (9 min)
   - Lat Pulldown: 4×10 (8 min)
   - Dumbbell Lunges: 3×12 (7 min)
   - Lateral Raises: 3×12 (5 min)
   - Bicep Curls: 3×12 (3 min)
   - Tricep Extensions: 3×12 (3 min)
3. Cool-down (5 min)

---

## Exercise Selection Logic

### Compound Movements (Foundation)

**Lower Body:**
- Squat patterns (Back Squat, Front Squat, Goblet Squat)
- Hip hinge patterns (Deadlift, Romanian Deadlift, Hip Thrust)
- Lunge patterns (Walking Lunges, Bulgarian Split Squat)
- Knee extension (Leg Press, Leg Extensions)

**Upper Body:**
- Horizontal push (Bench Press, Push-Ups, Dumbbell Press)
- Horizontal pull (Rows, Pull-Ups, Lat Pulldowns)
- Vertical push (Overhead Press, Landmine Press)
- Vertical pull (Pull-Ups, Chin-Ups, Lat Pulldown)

### Isolation Movements (Accessories)

**Arms:**
- Biceps: Curls, Hammer Curls
- Triceps: Pushdowns, Extensions, Dips

**Shoulders:**
- Lateral Raises, Front Raises, Rear Delt Flyes

**Legs:**
- Calf Raises, Leg Curls, Leg Extensions

### Core Work

- Anti-rotation: Pallof Press, Plank
- Anti-extension: Dead Bug, Ab Wheel
- Anti-lateral flexion: Side Plank, Farmer's Walk
- Rotation: Russian Twists, Woodchops

---

## Progression Strategies

### Linear Progression (Beginners)
- Increase weight by 2.5-5 lbs when you hit top of rep range
- Example: If target is 3×10-12, and you hit 3×12, increase weight

### Double Progression (Intermediate)
- Start at bottom of rep range
- Increase reps each session until hitting top
- Then increase weight and start over
- Example: 3×8 → 3×9 → 3×10 → increase weight → 3×8

### Weekly Progression (Advanced)
- Increase weight or reps each week
- Track in training log
- Deload every 4-6 weeks

### Undulating Progression (Intermediate/Advanced)
- Vary rep ranges throughout week
- Example: Monday 5×5, Wednesday 3×10, Friday 4×8

---

## AI Conversation Scripts

### Opening Script
"Let's build your personalized workout routine! I'll ask you a few questions to understand your goals, preferences, and situation. This will take about 5-10 minutes. Ready?"

### Transition Scripts
- "Great! Now let me understand your current situation..."
- "Perfect! Now about your preferences..."
- "Excellent! Let me calculate your optimal program..."

### Presentation Script
"Based on your answers, I've designed a routine that should work great for you. Here's what I recommend..."

### Refinement Script
"Does this look good to you? Any exercises you'd like to swap or adjust?"

### Finalization Script
"Perfect! Here's your complete routine. I'll also give you a progression plan and tracking suggestions. Ready to get started?"

---

## Common User Scenarios

### Busy Professional (Limited Time)
- Focus on efficiency (compound movements)
- Shorter sessions (30-45 min)
- Higher intensity, lower volume
- Home workout options

### Beginner (No Experience)
- Start with bodyweight exercises
- Focus on form over weight
- Lower volume to avoid soreness
- More frequent full-body sessions

### Weight Loss Goal
- Include metabolic conditioning
- Balance strength and cardio
- Higher volume for calorie burn
- Progressive overload to preserve muscle

### Muscle Gain Goal
- Focus on progressive overload
- Adequate volume (10-20 sets/muscle/week)
- Sufficient protein and calories
- Rest and recovery emphasis

### Senior/Fitness Newcomer
- Start very light (or bodyweight)
- Focus on functional movements
- Balance and coordination work
- Longer warm-ups and cool-downs

---

## Integration Notes

### How AI Should Use This Module
1. Follow the interactive workflow systematically
2. Adapt questions based on user responses
3. Provide options, not just one solution
4. Explain reasoning for recommendations
5. Encourage user input and adjustments
6. Set realistic expectations

### Communication Best Practices
- Use simple, clear language
- Provide visual descriptions when possible
- Break complex concepts into steps
- Encourage questions
- Celebrate user decisions

### Common Mistakes to Avoid
- Rushing through discovery phase
- Not asking about injuries/limitations
- Prescribing too much too soon
- Ignoring user preferences
- Not providing progression plan

### Follow-Up Strategy
- Check in after first week
- Ask about soreness, energy, motivation
- Adjust if needed
- Celebrate adherence
- Plan next review
