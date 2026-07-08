# Fitness Calculators Module

## BMR (Basal Metabolic Rate) Calculators

### Mifflin-St Jeor Equation (Most Accurate)
**Men:**
```
BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
```

**Women:**
```
BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
```

### Harris-Benedict Equation (Revised)
**Men:**
```
BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
```

**Women:**
```
BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
```

### Katch-McArdle Formula (Best for Lean Individuals)
```
BMR = 370 + (21.6 × lean body mass in kg)
```
*Lean Body Mass = Weight - (Weight × Body Fat %)*

---

## TDEE (Total Daily Energy Expenditure) Calculator

### Activity Multipliers
| Activity Level | Multiplier | Description |
|----------------|------------|-------------|
| Sedentary | 1.2 | Desk job, little exercise |
| Lightly Active | 1.375 | Light exercise 1-3 days/week |
| Moderately Active | 1.55 | Moderate exercise 3-5 days/week |
| Very Active | 1.725 | Hard exercise 6-7 days/week |
| Extra Active | 1.9 | Very hard exercise, physical job |

### TDEE Formula
```
TDEE = BMR × Activity Multiplier
```

### Caloric Goals
- **Weight Loss**: TDEE - 500 calories/day (lose ~1 lb/week)
- **Maintenance**: TDEE (maintain current weight)
- **Weight Gain**: TDEE + 300-500 calories/day (gain ~0.5-1 lb/week)

---

## Macronutrient Calculators

### Protein Requirements
| Goal | Grams per kg body weight |
|------|--------------------------|
| General Health | 0.8 g/kg |
| Recreational Exerciser | 1.2-1.4 g/kg |
| Serious Exerciser | 1.6-1.8 g/kg |
| Muscle Building | 2.2-2.6 g/kg |
| Fat Loss (Preserving Muscle) | 2.3-3.1 g/kg |

### Fat Requirements
| Goal | Grams per kg body weight |
|------|--------------------------|
| Minimum Healthy | 0.5 g/kg |
| General Population | 0.8-1.0 g/kg |
| Athletes | 1.0-1.5 g/kg |

### Carbohydrate Requirements
| Goal | Grams per kg body weight |
|------|--------------------------|
| Low Intensity | 3-5 g/kg |
| Moderate Intensity | 5-7 g/kg |
| High Intensity | 6-10 g/kg |
| Endurance Athletes | 8-12 g/kg |

### Macro Calculation Steps
1. Calculate TDEE
2. Set protein: Goal-based g/kg × body weight
3. Set fat: Activity-based g/kg × body weight
4. Set carbs: Remaining calories ÷ 4 (calories per gram)

---

## Body Composition Calculators

### BMI (Body Mass Index)
```
BMI = weight (kg) / height² (m²)
```
| BMI | Category |
|-----|----------|
| < 18.5 | Underweight |
| 18.5-24.9 | Normal weight |
| 25-29.9 | Overweight |
| 30+ | Obese |

### Body Fat Percentage (Navy Method)
**Men:**
```
%BF = 495 / (1.0324 - 0.19077 × log10(waist - neck) + 0.15456 × log10(height)) - 450
```

**Women:**
```
%BF = 495 / (1.29579 - 0.35004 × log10(waist + hip - neck) + 0.22100 × log10(height)) - 450
```

### Lean Body Mass
```
LBM = Weight × (1 - Body Fat % / 100)
```

---

## Performance Calculators

### One Rep Max (1RM) Estimates

#### Epley Formula (Most Common)
```
1RM = Weight × (1 + Reps / 30)
```

#### Brzycki Formula
```
1RM = Weight × (36 / (37 - Reps))
```

#### Lombardi Formula
```
1RM = Weight × Reps^0.10
```

### Training Zones (Heart Rate)

#### Maximum Heart Rate (MHR)
```
MHR = 220 - Age
```
*Alternative (more accurate): MHR = 208 - (0.7 × Age)*

#### Heart Rate Zones
| Zone | % of MHR | Purpose |
|------|----------|---------|
| Zone 1 | 50-60% | Recovery, warm-up |
| Zone 2 | 60-70% | Fat burning, endurance |
| Zone 3 | 70-80% | Aerobic fitness |
| Zone 4 | 80-90% | Anaerobic threshold |
| Zone 5 | 90-100% | Maximum effort, VO2max |

---

## Recovery Calculators

### Recovery Time After Exercise
| Exercise Intensity | Recovery Time |
|-------------------|---------------|
| Light (50-60% MHR) | 24 hours |
| Moderate (60-70% MHR) | 24-48 hours |
| High (70-80% MHR) | 48-72 hours |
| Very High (80-90% MHR) | 72-96 hours |
| Maximum (90-100% MHR) | 96+ hours |

### Sleep Needs by Age
| Age Group | Recommended Hours |
|-----------|-------------------|
| Adults (18-64) | 7-9 hours |
| Older Adults (65+) | 7-8 hours |
| Athletes | 8-10 hours |

---

## Hydration Calculators

### Daily Water Needs
```
Water (ml) = Body Weight (kg) × 30-35 ml/kg
```

### Exercise Hydration
- **Before Exercise**: 5-7 ml/kg, 2-4 hours before
- **During Exercise**: 150-250 ml every 15-20 minutes
- **After Exercise**: 1.5 L per kg of body weight lost

---

## Weight Management Calculators

### Caloric Deficit for Weight Loss
- **Safe Rate**: 0.5-1 kg per week
- **Caloric Deficit Needed**: 500-1000 calories/day
- **Maximum Deficit**: 20-25% of TDEE

### Weight Gain Rate
- **Lean Gain**: 0.25-0.5 kg per week
- **Caloric Surplus Needed**: 300-500 calories/day
- **Maximum Surplus**: 10-15% of TDEE

---

## AI Integration Notes

### When to Use These Calculators
- User asks for personalized recommendations
- User wants to lose/gain weight
- User asks about nutrition needs
- User wants to track progress
- User asks about training zones

### How to Present Results
1. Show the formula used
2. Explain what each number means
3. Provide context and recommendations
4. Always remind that these are estimates
5. Recommend professional guidance for medical conditions

### Important Disclaimers
- These are mathematical estimates, not medical advice
- Individual variation exists
- Consult healthcare professionals for health conditions
- Reassess periodically as body composition changes
