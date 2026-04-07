/* ==========================================
   LEVELINGUP TRACKER - JAVASCRIPT
   ========================================== */

// ========== DATABASE ==========

const exerciseDatabase = [
    { id: 1, name: "Barbell Bench Press", muscle: "Chest", difficulty: "intermediate", instructions: "Lie on a flat bench, grip the bar slightly wider than shoulder-width. Lower the bar to your chest, then press up explosively.", sets: "4 sets × 8-12 reps", calories: 7 },
    { id: 2, name: "Push-ups", muscle: "Chest", difficulty: "beginner", instructions: "Start in plank position with hands slightly wider than shoulders. Lower chest to floor, then push back up.", sets: "3 sets × 15-20 reps", calories: 5 },
    { id: 3, name: "Incline Dumbbell Press", muscle: "Chest", difficulty: "intermediate", instructions: "Set bench to 30-45 degrees. Press dumbbells up from shoulder level, squeezing chest at top.", sets: "3 sets × 10-12 reps", calories: 6 },
    { id: 4, name: "Cable Crossover", muscle: "Chest", difficulty: "intermediate", instructions: "Stand between cable machines, bring handles together in front of chest with slight dip.", sets: "3 sets × 12-15 reps", calories: 5 },
    { id: 5, name: "Chest Dips", muscle: "Chest", difficulty: "intermediate", instructions: "Lean forward on parallel bars, lower body until stretch in chest, then push back up.", sets: "3 sets × 8-12 reps", calories: 6 },
    { id: 6, name: "Pull-ups", muscle: "Back", difficulty: "intermediate", instructions: "Hang from bar with overhand grip. Pull up until chin clears bar, lower with control.", sets: "4 sets × 6-10 reps", calories: 8 },
    { id: 7, name: "Lat Pulldown", muscle: "Back", difficulty: "beginner", instructions: "Sit at machine, grip bar wider than shoulders. Pull bar to upper chest, squeeze lats.", sets: "3 sets × 10-12 reps", calories: 5 },
    { id: 8, name: "Barbell Row", muscle: "Back", difficulty: "intermediate", instructions: "Bend over with flat back, pull bar to lower chest, squeeze shoulder blades together.", sets: "4 sets × 8-10 reps", calories: 7 },
    { id: 9, name: "Deadlift", muscle: "Back", difficulty: "advanced", instructions: "Stand with feet hip-width, grip bar. Keep back flat, drive through heels to stand.", sets: "4 sets × 5-8 reps", calories: 10 },
    { id: 10, name: "Seated Cable Row", muscle: "Back", difficulty: "beginner", instructions: "Sit with feet on platform, pull handle to abdomen, squeeze shoulder blades.", sets: "3 sets × 10-12 reps", calories: 5 },
    { id: 11, name: "T-Bar Row", muscle: "Back", difficulty: "intermediate", instructions: "Straddle T-bar, grip handles, pull weight to chest keeping back flat.", sets: "3 sets × 8-10 reps", calories: 6 },
    { id: 12, name: "Overhead Press", muscle: "Shoulders", difficulty: "intermediate", instructions: "Stand with bar at shoulder level. Press overhead until arms fully extended.", sets: "4 sets × 8-10 reps", calories: 6 },
    { id: 13, name: "Lateral Raises", muscle: "Shoulders", difficulty: "beginner", instructions: "Hold dumbbells at sides, raise arms to shoulder level with slight bend in elbows.", sets: "3 sets × 12-15 reps", calories: 4 },
    { id: 14, name: "Face Pulls", muscle: "Shoulders", difficulty: "beginner", instructions: "Use cable machine, pull rope to face level, separating hands at end.", sets: "3 sets × 15-20 reps", calories: 4 },
    { id: 15, name: "Arnold Press", muscle: "Shoulders", difficulty: "intermediate", instructions: "Start with dumbbells at shoulders, palms facing you. Rotate and press overhead.", sets: "3 sets × 10-12 reps", calories: 6 },
    { id: 16, name: "Shrugs", muscle: "Shoulders", difficulty: "beginner", instructions: "Hold dumbbells at sides, raise shoulders toward ears, squeeze at top.", sets: "3 sets × 15-20 reps", calories: 3 },
    { id: 17, name: "Barbell Curl", muscle: "Arms", difficulty: "beginner", instructions: "Stand with bar at thighs, curl weight to shoulders keeping elbows stationary.", sets: "3 sets × 10-12 reps", calories: 4 },
    { id: 18, name: "Tricep Dips", muscle: "Arms", difficulty: "intermediate", instructions: "On parallel bars, lower body by bending elbows, then push back up.", sets: "3 sets × 8-12 reps", calories: 5 },
    { id: 19, name: "Hammer Curl", muscle: "Arms", difficulty: "beginner", instructions: "Hold dumbbells with neutral grip, curl to shoulders alternating arms.", sets: "3 sets × 10-12 reps", calories: 4 },
    { id: 20, name: "Skull Crushers", muscle: "Arms", difficulty: "intermediate", instructions: "Lie on bench, lower EZ bar to forehead by bending elbows, extend back up.", sets: "3 sets × 10-12 reps", calories: 5 },
    { id: 21, name: "Tricep Pushdown", muscle: "Arms", difficulty: "beginner", instructions: "Use cable machine, push bar down until arms fully extended, control return.", sets: "3 sets × 12-15 reps", calories: 4 },
    { id: 22, name: "Concentration Curl", muscle: "Arms", difficulty: "beginner", instructions: "Sit, brace elbow against inner thigh, curl dumbbell focusing on bicep squeeze.", sets: "3 sets × 10-12 reps", calories: 3 },
    { id: 23, name: "Barbell Squat", muscle: "Legs", difficulty: "intermediate", instructions: "Bar on upper back, feet shoulder-width. Squat until thighs parallel, drive up.", sets: "4 sets × 8-10 reps", calories: 8 },
    { id: 24, name: "Leg Press", muscle: "Legs", difficulty: "beginner", instructions: "Sit in machine, feet shoulder-width on platform. Lower weight, press back up.", sets: "3 sets × 10-12 reps", calories: 6 },
    { id: 25, name: "Lunges", muscle: "Legs", difficulty: "beginner", instructions: "Step forward into lunge, lower back knee toward floor, push back to start.", sets: "3 sets × 10 each leg", calories: 5 },
    { id: 26, name: "Leg Curl", muscle: "Legs", difficulty: "beginner", instructions: "Lie face down on machine, curl weight toward glutes, lower with control.", sets: "3 sets × 10-12 reps", calories: 4 },
    { id: 27, name: "Calf Raises", muscle: "Legs", difficulty: "beginner", instructions: "Stand on edge of platform, raise heels as high as possible, lower slowly.", sets: "4 sets × 15-20 reps", calories: 3 },
    { id: 28, name: "Romanian Deadlift", muscle: "Legs", difficulty: "intermediate", instructions: "Hold bar at thighs, hinge at hips lowering bar along legs, keep back flat.", sets: "3 sets × 10-12 reps", calories: 7 },
    { id: 29, name: "Leg Extension", muscle: "Legs", difficulty: "beginner", instructions: "Sit in machine, extend legs until straight, lower with control.", sets: "3 sets × 10-12 reps", calories: 4 },
    { id: 30, name: "Plank", muscle: "Core", difficulty: "beginner", instructions: "Hold push-up position on forearms, keep body straight from head to heels.", sets: "3 × 30-60 sec", calories: 3 },
    { id: 31, name: "Crunches", muscle: "Core", difficulty: "beginner", instructions: "Lie on back, knees bent. Curl shoulders toward knees, exhale at top.", sets: "3 sets × 20-30 reps", calories: 3 },
    { id: 32, name: "Russian Twist", muscle: "Core", difficulty: "intermediate", instructions: "Sit with knees bent, lean back slightly. Rotate torso side to side.", sets: "3 sets × 20 total", calories: 4 },
    { id: 33, name: "Leg Raises", muscle: "Core", difficulty: "intermediate", instructions: "Lie on back, legs straight. Raise legs to 90 degrees, lower slowly.", sets: "3 sets × 12-15 reps", calories: 4 },
    { id: 34, name: "Ab Wheel Rollout", muscle: "Core", difficulty: "advanced", instructions: "Kneel with ab wheel, roll forward keeping core tight, pull back.", sets: "3 sets × 8-12 reps", calories: 5 },
    { id: 35, name: "Mountain Climbers", muscle: "Core", difficulty: "intermediate", instructions: "Start in plank, drive knees alternately toward chest in running motion.", sets: "3 sets × 30 sec", calories: 6 },
    { id: 36, name: "Running", muscle: "Cardio", difficulty: "beginner", instructions: "Jog at steady pace, maintain breathing rhythm.", sets: "20-30 minutes", calories: 10 },
    { id: 37, name: "Cycling", muscle: "Cardio", difficulty: "beginner", instructions: "Ride at moderate resistance maintaining steady cadence.", sets: "30-45 minutes", calories: 8 },
    { id: 38, name: "Jump Rope", muscle: "Cardio", difficulty: "intermediate", instructions: "Jump at moderate pace, stay on balls of feet.", sets: "3 × 5 minutes", calories: 9 },
    { id: 39, name: "Swimming", muscle: "Cardio", difficulty: "intermediate", instructions: "Alternate strokes, maintain consistent breathing.", sets: "20-30 minutes", calories: 11 },
    { id: 40, name: "HIIT Circuit", muscle: "Cardio", difficulty: "advanced", instructions: "20 sec work, 10 sec rest. Alternate between exercises.", sets: "4-6 rounds", calories: 12 },
    { id: 41, name: "Burpees", muscle: "Cardio", difficulty: "advanced", instructions: "Drop to push-up, jump feet to hands, explode up with arms overhead.", sets: "3 sets × 10 reps", calories: 10 },
    { id: 42, name: "Box Jumps", muscle: "Cardio", difficulty: "intermediate", instructions: "Jump onto sturdy box, step down, repeat.", sets: "3 sets × 10 reps", calories: 8 },
    { id: 43, name: "Diamond Push-ups", muscle: "Chest", difficulty: "advanced", instructions: "Hands form diamond shape under chest. Lower and press.", sets: "3 sets × 10-15 reps", calories: 6 },
    { id: 44, name: "Single Arm Row", muscle: "Back", difficulty: "beginner", instructions: "One hand on bench, row dumbbell to hip squeezing back.", sets: "3 sets × 10 each arm", calories: 5 },
    { id: 45, name: "Goblet Squat", muscle: "Legs", difficulty: "beginner", instructions: "Hold dumbbell at chest, squat deep keeping torso upright.", sets: "3 sets × 12 reps", calories: 5 }
];

const foodDatabase = {
    protein: [
        { name: "Chicken Breast", calories: 165, protein: 31, carbs: 0, fats: 3.6, portion: "100g", icon: "🍗" },
        { name: "Salmon", calories: 208, protein: 20, carbs: 0, fats: 13, portion: "100g", icon: "🐟" },
        { name: "Eggs", calories: 155, protein: 13, carbs: 1.1, fats: 11, portion: "100g", icon: "🥚" },
        { name: "Greek Yogurt", calories: 100, protein: 17, carbs: 6, fats: 0.7, portion: "170g", icon: "🥛" },
        { name: "Lean Beef", calories: 250, protein: 26, carbs: 0, fats: 15, portion: "100g", icon: "🥩" },
        { name: "Tuna", calories: 132, protein: 28, carbs: 0, fats: 1, portion: "100g", icon: "🐟" },
        { name: "Cottage Cheese", calories: 98, protein: 11, carbs: 3.4, fats: 4.3, portion: "100g", icon: "🧀" },
        { name: "Turkey Breast", calories: 135, protein: 30, carbs: 0, fats: 1, portion: "100g", icon: "🦃" },
        { name: "Tofu", calories: 76, protein: 8, carbs: 1.9, fats: 4.8, portion: "100g", icon: "🧈" },
        { name: "Whey Protein", calories: 120, protein: 24, carbs: 3, fats: 1.5, portion: "1 scoop", icon: "💊" }
    ],
    carbs: [
        { name: "Brown Rice", calories: 112, protein: 2.6, carbs: 24, fats: 0.9, portion: "100g cooked", icon: "🍚" },
        { name: "Quinoa", calories: 120, protein: 4.4, carbs: 21, fats: 1.9, portion: "100g cooked", icon: "🌾" },
        { name: "Oatmeal", calories: 68, protein: 2.4, carbs: 12, fats: 1.4, portion: "100g cooked", icon: "🥣" },
        { name: "Sweet Potato", calories: 86, protein: 1.6, carbs: 20, fats: 0.1, portion: "100g", icon: "🍠" },
        { name: "Whole Wheat Bread", calories: 247, protein: 13, carbs: 41, fats: 3.4, portion: "2 slices", icon: "🍞" },
        { name: "Banana", calories: 89, protein: 1.1, carbs: 23, fats: 0.3, portion: "1 medium", icon: "🍌" },
        { name: "Brown Pasta", calories: 124, protein: 5, carbs: 25, fats: 0.5, portion: "100g cooked", icon: "🍝" },
        { name: "Black Beans", calories: 132, protein: 8.9, carbs: 24, fats: 0.5, portion: "100g cooked", icon: "🫘" }
    ],
    fats: [
        { name: "Avocado", calories: 160, protein: 2, carbs: 9, fats: 15, portion: "1/2 avocado", icon: "🥑" },
        { name: "Almonds", calories: 164, protein: 6, carbs: 6, fats: 14, portion: "28g", icon: "🥜" },
        { name: "Peanut Butter", calories: 188, protein: 8, carbs: 6, fats: 16, portion: "2 tbsp", icon: "🥜" },
        { name: "Olive Oil", calories: 119, protein: 0, carbs: 0, fats: 14, portion: "1 tbsp", icon: "🫒" },
        { name: "Chia Seeds", calories: 138, protein: 4.7, carbs: 12, fats: 8.7, portion: "28g", icon: "🌱" },
        { name: "Walnuts", calories: 185, protein: 4.3, carbs: 3.9, fats: 18, portion: "28g", icon: "🥜" },
        { name: "Coconut Oil", calories: 121, protein: 0, carbs: 0, fats: 13.5, portion: "1 tbsp", icon: "🥥" },
        { name: "Dark Chocolate", calories: 170, protein: 2.2, carbs: 13, fats: 12, portion: "30g", icon: "🍫" }
    ],
    meals: {
        breakfast: [
            { name: "Protein Oatmeal", description: "Oats with whey protein, banana, and almonds", calories: 450, icon: "🥣" },
            { name: "Egg White Omelette", description: "Egg whites with spinach, tomatoes, and turkey bacon", calories: 320, icon: "🍳" },
            { name: "Greek Yogurt Parfait", description: "Greek yogurt, granola, berries, and honey", calories: 380, icon: "🥛" },
            { name: "Protein Smoothie", description: "Whey protein, banana, oats, and almond milk", calories: 400, icon: "🥤" }
        ],
        lunch: [
            { name: "Grilled Chicken Bowl", description: "Chicken breast, brown rice, quinoa, and vegetables", calories: 550, icon: "🍗" },
            { name: "Salmon Salad", description: "Grilled salmon, mixed greens, avocado, and olive oil dressing", calories: 480, icon: "🥗" },
            { name: "Turkey Wrap", description: "Turkey, whole wheat wrap, hummus, and veggies", calories: 450, icon: "🌯" },
            { name: "Lean Beef Stir-fry", description: "Lean beef, brown rice, and mixed vegetables", calories: 580, icon: "🥩" }
        ],
        dinner: [
            { name: "Grilled Chicken with Sweet Potato", description: "Chicken breast, baked sweet potato, and steamed broccoli", calories: 520, icon: "🍗" },
            { name: "Salmon with Quinoa", description: "Grilled salmon, quinoa, and asparagus", calories: 540, icon: "🐟" },
            { name: "Lean Beef with Brown Rice", description: "Grilled lean beef, brown rice, and mixed salad", calories: 560, icon: "🥩" },
            { name: "Tofu Stir-fry", description: "Tofu, brown rice, and mixed vegetables", calories: 420, icon: "🍛" }
        ],
        snacks: [
            { name: "Protein Shake", calories: 120, icon: "🥤" },
            { name: "Greek Yogurt with Berries", calories: 150, icon: "🥛" },
            { name: "Apple with Almond Butter", calories: 200, icon: "🍎" },
            { name: "Handful of Mixed Nuts", calories: 180, icon: "🥜" },
            { name: "Protein Bar", calories: 200, icon: "🍫" },
            { name: "Cottage Cheese with Fruit", calories: 160, icon: "🧀" }
        ]
    }
};

const achievements = [
    { id: "first_workout", name: "First Steps", desc: "Complete your first workout", icon: "🎯", requirement: { workouts: 1 } },
    { id: "workout_10", name: "Getting Started", desc: "Complete 10 workouts", icon: "💪", requirement: { workouts: 10 } },
    { id: "workout_50", name: "Dedicated", desc: "Complete 50 workouts", icon: "🏆", requirement: { workouts: 50 } },
    { id: "workout_100", name: "Unstoppable", desc: "Complete 100 workouts", icon: "👑", requirement: { workouts: 100 } },
    { id: "streak_7", name: "Week Warrior", desc: "Maintain a 7-day streak", icon: "🔥", requirement: { streak: 7 } },
    { id: "streak_30", name: "Month Master", desc: "Maintain a 30-day streak", icon: "⚡", requirement: { streak: 30 } },
    { id: "level_5", name: "Rising Star", desc: "Reach level 5", icon: "⭐", requirement: { level: 5 } },
    { id: "level_10", name: "Elite", desc: "Reach level 10", icon: "🌟", requirement: { level: 10 } },
    { id: "calories_5000", name: "Calorie Crusher", desc: "Burn 5,000 calories", icon: "🔥", requirement: { calories: 5000 } },
    { id: "calories_10000", name: "Inferno", desc: "Burn 10,000 calories", icon: "💥", requirement: { calories: 10000 } }
];

// ========== GLOBAL STATE ==========

let currentClient = null;
let selectedExercises = [];
let workoutFilter = 'all';
let workoutSearch = '';
let pendingClientImage = null;
let pendingExerciseImage = null;

// ========== UTILITY FUNCTIONS ==========

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getStorageKey(clientId) {
    return `levelingup_client_${clientId}`;
}

function getAllClients() {
    const clients = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('levelingup_client_')) {
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    clients.push(JSON.parse(data));
                } catch (e) {
                    console.error('Error parsing client data:', e);
                }
            }
        }
    }
    return clients;
}

function saveClient(client) {
    localStorage.setItem(getStorageKey(client.id), JSON.stringify(client));
}

function deleteClient(clientId) {
    localStorage.removeItem(getStorageKey(clientId));
    if (currentClient && currentClient.id === clientId) {
        currentClient = null;
        const clients = getAllClients();
        if (clients.length > 0) {
            selectClient(clients[0].id);
        } else {
            updateUIForNoClient();
        }
    }
    updateClientDropdown();
}

function calculateXP(level) {
    return level * 100;
}

function calculateLevel(totalXP) {
    let level = 1;
    let xpNeeded = 100;
    let xpAccumulated = 0;
    
    while (xpAccumulated + xpNeeded <= totalXP) {
        xpAccumulated += xpNeeded;
        level++;
        xpNeeded = calculateXP(level);
    }
    
    return { level, currentXP: totalXP - xpAccumulated, xpNeeded };
}

function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

function getActivityMultiplier(activityLevel) {
    const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };
    return multipliers[activityLevel] || 1.55;
}

function calculateTDEE(bmr, activityLevel, goal) {
    let tdee = bmr * getActivityMultiplier(activityLevel);
    
    if (goal === 'weight_loss') {
        tdee = tdee - 500;
    } else if (goal === 'muscle_gain') {
        tdee = tdee + 300;
    }
    
    return Math.round(tdee);
}

function calculateMacros(tdee, goal) {
    let proteinRatio, carbRatio, fatRatio;
    
    if (goal === 'weight_loss') {
        proteinRatio = 0.35;
        carbRatio = 0.35;
        fatRatio = 0.30;
    } else if (goal === 'muscle_gain') {
        proteinRatio = 0.30;
        carbRatio = 0.45;
        fatRatio = 0.25;
    } else {
        proteinRatio = 0.30;
        carbRatio = 0.40;
        fatRatio = 0.30;
    }
    
    const weight = currentClient?.profile?.weight || 70;
    
    return {
        protein: Math.round(weight * 2),
        carbs: Math.round((tdee * carbRatio) / 4),
        fats: Math.round((tdee * fatRatio) / 9)
    };
}

function calculateBMI(weight, height) {
    const heightM = height / 100;
    return (weight / (heightM * heightM)).toFixed(1);
}

function getBMICategory(bmi) {
    bmi = parseFloat(bmi);
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ========== CLIENT FUNCTIONS ==========

function selectClient(clientId) {
    const data = localStorage.getItem(getStorageKey(clientId));
    if (data) {
        currentClient = JSON.parse(data);
        updateUIForClient();
        updateClientDropdown();
    }
}

function updateClientDropdown() {
    const list = document.getElementById('clientList');
    const clients = getAllClients();
    
    if (clients.length === 0) {
        list.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No clients yet</div>';
        return;
    }
    
    list.innerHTML = clients.map(client => {
        const { level } = calculateLevel(client.stats.xp);
        const initials = client.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        return `
            <div class="client-item ${currentClient && currentClient.id === client.id ? 'active' : ''}" data-id="${client.id}">
                <div class="client-item-info">
                    <div class="client-avatar" ${client.profile.image ? `style="background: transparent; border: none;"` : ''}>
                        ${client.profile.image ? `<img src="${client.profile.image}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` : initials}
                    </div>
                    <div class="client-item-details">
                        <h4>${client.name}</h4>
                        <span>${client.profile.weight}kg • ${client.profile.height}cm</span>
                    </div>
                </div>
                <span class="client-item-level">Lv.${level}</span>
            </div>
        `;
    }).join('');
    
    list.querySelectorAll('.client-item').forEach(item => {
        item.addEventListener('click', () => {
            selectClient(item.dataset.id);
            document.getElementById('clientDropdown').classList.remove('active');
        });
    });
}

function updateUIForClient() {
    if (!currentClient) {
        updateUIForNoClient();
        return;
    }
    
    document.getElementById('heroStats').classList.remove('hidden');
    document.getElementById('currentClientName').textContent = currentClient.name;
    
    const heroImage = document.getElementById('heroImage');
    if (currentClient.profile.image) {
        heroImage.innerHTML = `<img src="${currentClient.profile.image}" alt="${currentClient.name}">`;
    } else {
        heroImage.innerHTML = '<div class="hero-image-placeholder">💪</div>';
    }
    
    const { level, currentXP, xpNeeded } = calculateLevel(currentClient.stats.xp);
    
    document.getElementById('heroLevel').textContent = level;
    document.getElementById('heroXP').textContent = currentClient.stats.xp;
    document.getElementById('heroWorkouts').textContent = currentClient.stats.totalWorkouts;
    document.getElementById('heroStreak').textContent = currentClient.stats.streak;
    
    document.getElementById('clientName').value = currentClient.name;
    document.getElementById('weight').value = currentClient.profile.weight;
    document.getElementById('height').value = currentClient.profile.height;
    document.getElementById('age').value = currentClient.profile.age;
    document.getElementById('gender').value = currentClient.profile.gender;
    document.getElementById('activityLevel').value = currentClient.profile.activityLevel;
    document.getElementById('goal').value = currentClient.profile.goal;
    
    updateCalcResults();
    updateNutrition();
    updateProgress();
    updateLibrary();
}

function updateUIForNoClient() {
    document.getElementById('heroStats').classList.add('hidden');
    document.getElementById('currentClientName').textContent = 'Select Client';
    document.getElementById('calcResults').classList.add('hidden');
    document.getElementById('heroImage').innerHTML = '<div class="hero-image-placeholder">💪</div>';
}

// ========== CALCULATOR FUNCTIONS ==========

function updateCalcResults() {
    if (!currentClient) return;
    
    const { weight, height, age, gender, activityLevel, goal } = currentClient.profile;
    
    const bmi = calculateBMI(weight, height);
    const bmr = Math.round(calculateBMR(weight, height, age, gender));
    const tdee = calculateTDEE(bmr, activityLevel, goal);
    const macros = calculateMacros(tdee, goal);
    
    document.getElementById('calcResults').classList.remove('hidden');
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = getBMICategory(bmi);
    document.getElementById('bmrValue').textContent = bmr;
    document.getElementById('tdeeValue').textContent = tdee;
    
    const goalDescriptions = {
        weight_loss: `Target: ${tdee} kcal/day for weight loss`,
        maintenance: `Target: ${tdee} kcal/day to maintain weight`,
        muscle_gain: `Target: ${tdee} kcal/day for muscle gain`
    };
    document.getElementById('tdeeGoal').textContent = goalDescriptions[goal];
    
    document.getElementById('proteinTarget').textContent = macros.protein + 'g';
    document.getElementById('carbsTarget').textContent = macros.carbs + 'g';
    document.getElementById('fatsTarget').textContent = macros.fats + 'g';
    
    document.getElementById('currentWeight').textContent = weight;
    document.getElementById('goalWeight').textContent = goal === 'weight_loss' ? '70' : (weight + 5);
    document.getElementById('weeklyTarget').textContent = goal === 'weight_loss' ? '-0.5' : '+0.25';
}

// ========== NUTRITION FUNCTIONS ==========

function updateNutrition() {
    if (!currentClient) {
        document.getElementById('nutritionContent').innerHTML = `
            <div class="welcome-message" style="text-align: center;">
                <p>Complete your profile first to see personalized nutrition recommendations.</p>
            </div>
        `;
        return;
    }
    
    const { weight, height, age, gender, activityLevel, goal } = currentClient.profile;
    const bmr = Math.round(calculateBMR(weight, height, age, gender));
    const tdee = calculateTDEE(bmr, activityLevel, goal);
    const macros = calculateMacros(tdee, goal);
    
    document.getElementById('nutritionContent').innerHTML = `
        <div class="food-section">
            <div class="daily-targets">
                <h3>Daily Calorie Target</h3>
                <div class="target-calories">${tdee}</div>
                <div class="target-label">kcal/day</div>
                <div class="macro-breakdown">
                    <div class="macro-card">
                        <div class="macro-card-value" style="color: #f87171;">${macros.protein}g</div>
                        <div class="macro-card-label">Protein</div>
                    </div>
                    <div class="macro-card">
                        <div class="macro-card-value" style="color: #fbbf24;">${macros.carbs}g</div>
                        <div class="macro-card-label">Carbs</div>
                    </div>
                    <div class="macro-card">
                        <div class="macro-card-value" style="color: #60a5fa;">${macros.fats}g</div>
                        <div class="macro-card-label">Fats</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card">
                    <h3 style="margin-bottom: 1rem;">🍳 Suggested Meal Plan</h3>
                    ${['breakfast', 'lunch', 'dinner'].map(meal => `
                        <div class="food-category">
                            <h4>${meal.charAt(0).toUpperCase() + meal.slice(1)}</h4>
                            <div class="food-list">
                                ${foodDatabase.meals[meal].map(item => `
                                    <div class="food-item">
                                        <div class="food-item-image">${item.icon || '🍽️'}</div>
                                        <div class="food-item-content">
                                            <div class="food-item-name">${item.name}</div>
                                            <div class="food-item-cal">${item.calories} kcal</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="card" style="margin-top: 2rem;">
            <h3 style="margin-bottom: 1rem;">High Protein Foods</h3>
            <div class="food-list">
                ${foodDatabase.protein.map(item => `
                    <div class="food-item">
                        <div class="food-item-image">${item.icon || '🍖'}</div>
                        <div class="food-item-content">
                            <div class="food-item-name">${item.name}</div>
                            <div class="food-item-cal">${item.protein}g protein</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">Complex Carbs</h3>
            <div class="food-list">
                ${foodDatabase.carbs.map(item => `
                    <div class="food-item">
                        <div class="food-item-image">${item.icon || '🌾'}</div>
                        <div class="food-item-content">
                            <div class="food-item-name">${item.name}</div>
                            <div class="food-item-cal">${item.carbs}g carbs</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">Healthy Fats</h3>
            <div class="food-list">
                ${foodDatabase.fats.map(item => `
                    <div class="food-item">
                        <div class="food-item-image">${item.icon || '🥑'}</div>
                        <div class="food-item-content">
                            <div class="food-item-name">${item.name}</div>
                            <div class="food-item-cal">${item.fats}g fats</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">Healthy Snacks</h3>
            <div class="food-list">
                ${foodDatabase.meals.snacks.map(item => `
                    <div class="food-item">
                        <div class="food-item-image">${item.icon || '🥨'}</div>
                        <div class="food-item-content">
                            <div class="food-item-name">${item.name}</div>
                            <div class="food-item-cal">${item.calories} kcal</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ========== PROGRESS FUNCTIONS ==========

function updateProgress() {
    if (!currentClient) return;
    
    const { level, currentXP, xpNeeded } = calculateLevel(currentClient.stats.xp);
    
    document.getElementById('progressLevel').textContent = level;
    document.getElementById('progressXP').textContent = currentClient.stats.xp;
    document.getElementById('progressWorkouts').textContent = currentClient.stats.totalWorkouts;
    document.getElementById('progressStreak').textContent = currentClient.stats.streak;
    document.getElementById('progressCalories').textContent = currentClient.stats.caloriesBurned.toLocaleString();
    
    const xpPercentage = (currentXP / xpNeeded) * 100;
    document.getElementById('progressXPBar').style.width = xpPercentage + '%';
    document.getElementById('xpToNext').textContent = `${xpNeeded - currentXP} to next`;
    
    updateWeightChart();
    updateWorkoutHistory();
    updateAchievements();
}

function updateWeightChart() {
    const canvas = document.getElementById('weightChart');
    if (!currentClient || !currentClient.progress.weightHistory || currentClient.progress.weightHistory.length === 0) {
        canvas.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📊</div><p>No weight data yet. Log your weight to see progress!</p></div>';
        return;
    }
    
    const history = currentClient.progress.weightHistory;
    const maxWeight = Math.max(...history.map(w => w.weight));
    const minWeight = Math.min(...history.map(w => w.weight));
    const range = maxWeight - minWeight || 1;
    
    canvas.innerHTML = `
        <div style="display: flex; align-items: flex-end; gap: 0.5rem; height: 220px; padding: 1rem 0;">
            ${history.map((entry, i) => {
                const height = ((entry.weight - minWeight) / range) * 180 + 40;
                return `
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">${entry.weight}kg</span>
                        <div style="width: 100%; height: ${height}px; background: var(--text-primary); border-radius: 6px 6px 0 0; min-height: 20px;"></div>
                        <span style="font-size: 0.65rem; color: var(--text-muted);">${new Date(entry.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function updateWorkoutHistory() {
    const container = document.getElementById('workoutHistory');
    if (!currentClient || !currentClient.progress.workoutHistory || currentClient.progress.workoutHistory.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <p>No workouts logged yet. Start your first workout!</p>
            </div>
        `;
        return;
    }
    
    const history = currentClient.progress.workoutHistory.slice(-10).reverse();
    container.innerHTML = history.map(entry => `
        <div class="log-entry">
            <div class="log-entry-info">
                <h4>${entry.exercises.length} exercises</h4>
                <span>${new Date(entry.date).toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
            </div>
            <div class="log-entry-stats">
                <div class="log-entry-cal">${entry.calories} kcal</div>
                <div class="log-entry-duration">${entry.duration} min</div>
            </div>
        </div>
    `).join('');
}

function updateAchievements() {
    if (!currentClient) return;
    
    const container = document.getElementById('achievementsGrid');
    const stats = currentClient.stats;
    const { level } = calculateLevel(stats.xp);
    
    container.innerHTML = achievements.map(achievement => {
        let unlocked = false;
        
        if (achievement.requirement.workouts && stats.totalWorkouts >= achievement.requirement.workouts) unlocked = true;
        if (achievement.requirement.streak && stats.streak >= achievement.requirement.streak) unlocked = true;
        if (achievement.requirement.level && level >= achievement.requirement.level) unlocked = true;
        if (achievement.requirement.calories && stats.caloriesBurned >= achievement.requirement.calories) unlocked = true;
        
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : ''}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.desc}</div>
            </div>
        `;
    }).join('');
}

// ========== LIBRARY FUNCTIONS ==========

function updateLibrary() {
    if (!currentClient) return;
    
    const customContainer = document.getElementById('customExercises');
    
    if (currentClient.library.customExercises && currentClient.library.customExercises.length > 0) {
        customContainer.innerHTML = currentClient.library.customExercises.map((exercise, i) => `
            <div class="library-item">
                <div class="library-item-info">
                    <h4>${exercise.name}</h4>
                    <span>${exercise.muscle} • ${exercise.difficulty}</span>
                </div>
                <div class="library-item-actions">
                    <button class="icon-btn delete" onclick="removeCustomExercise(${i})">🗑️</button>
                </div>
            </div>
        `).join('');
    } else {
        customContainer.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✨</div><p>No custom exercises yet. Click + Add to create one.</p></div>';
    }
}

function removeCustomExercise(index) {
    if (!currentClient) return;
    currentClient.library.customExercises.splice(index, 1);
    saveClient(currentClient);
    updateLibrary();
    showToast('Exercise removed');
}

// ========== WORKOUT FUNCTIONS ==========

function renderWorkouts() {
    const container = document.getElementById('workoutList');
    
    let filtered = exerciseDatabase;
    
    if (workoutFilter !== 'all') {
        filtered = filtered.filter(ex => ex.muscle.toLowerCase() === workoutFilter);
    }
    
    if (workoutSearch) {
        const search = workoutSearch.toLowerCase();
        filtered = filtered.filter(ex => 
            ex.name.toLowerCase().includes(search) || 
            ex.muscle.toLowerCase().includes(search)
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><div class="empty-state-icon">🔍</div><p>No exercises found.</p></div>';
        return;
    }
    
    container.innerHTML = filtered.map(exercise => `
        <div class="exercise-card" data-id="${exercise.id}">
            <div class="exercise-header">
                <div>
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-muscle">${exercise.muscle}</div>
                </div>
                <span class="difficulty-badge difficulty-${exercise.difficulty}">${exercise.difficulty}</span>
            </div>
            <div class="exercise-info">
                <span>⏱️ ${exercise.sets}</span>
                <span>🔥 ${exercise.calories} cal/min</span>
            </div>
            <div class="exercise-details">
                <p class="exercise-instructions">${exercise.instructions}</p>
                <div class="exercise-prescription">
                    <strong>Recommended:</strong> ${exercise.sets}
                </div>
                <button class="add-to-plan-btn ${selectedExercises.includes(exercise.id) ? 'added' : ''}" onclick="toggleExercise(${exercise.id})">
                    ${selectedExercises.includes(exercise.id) ? '✓ Added' : '+ Add to Workout'}
                </button>
            </div>
        </div>
    `).join('');
    
    container.querySelectorAll('.exercise-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-plan-btn')) {
                card.classList.toggle('expanded');
            }
        });
    });
}

function toggleExercise(id) {
    const index = selectedExercises.indexOf(id);
    if (index > -1) {
        selectedExercises.splice(index, 1);
    } else {
        selectedExercises.push(id);
    }
    renderWorkouts();
    renderSelectedExercises();
}

function renderSelectedExercises() {
    const container = document.getElementById('selectedExercises');
    if (selectedExercises.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">No exercises selected. Click on exercises to add them.</p>';
        return;
    }
    
    container.innerHTML = selectedExercises.map(id => {
        const exercise = exerciseDatabase.find(e => e.id === id);
        return `
            <div class="selected-exercise-item">
                <span>${exercise.name}</span>
                <button class="remove-exercise" onclick="toggleExercise(${id})">&times;</button>
            </div>
        `;
    }).join('');
}

function logWorkout() {
    if (!currentClient) {
        showToast('Please select or create a client first');
        return;
    }
    
    if (selectedExercises.length === 0) {
        showToast('Please select at least one exercise');
        return;
    }
    
    const duration = parseInt(document.getElementById('workoutDuration').value) || 45;
    const calories = parseInt(document.getElementById('caloriesBurned').value) || (selectedExercises.length * 50);
    
    const xpEarned = (duration * 2) + Math.round(calories / 10);
    
    const workoutEntry = {
        date: new Date().toISOString(),
        exercises: selectedExercises.map(id => exerciseDatabase.find(e => e.id === id)?.name),
        duration: duration,
        calories: calories,
        xpEarned: xpEarned
    };
    
    if (!currentClient.progress.workoutHistory) {
        currentClient.progress.workoutHistory = [];
    }
    currentClient.progress.workoutHistory.push(workoutEntry);
    
    currentClient.stats.xp += xpEarned;
    currentClient.stats.totalWorkouts++;
    currentClient.stats.caloriesBurned += calories;
    
    const today = new Date().toDateString();
    const lastWorkout = currentClient.progress.lastWorkoutDate;
    
    if (lastWorkout) {
        const lastDate = new Date(lastWorkout).toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (lastDate === yesterday) {
            currentClient.stats.streak++;
        } else if (lastDate !== today) {
            currentClient.stats.streak = 1;
        }
    } else {
        currentClient.stats.streak = 1;
    }
    
    currentClient.progress.lastWorkoutDate = today;
    
    saveClient(currentClient);
    
    selectedExercises = [];
    document.getElementById('workoutDuration').value = '';
    document.getElementById('caloriesBurned').value = '';
    
    renderSelectedExercises();
    renderWorkouts();
    updateUIForClient();
    
    showToast(`Workout logged! +${xpEarned} XP earned!`);
}

// ========== IMAGE UPLOAD FUNCTIONS ==========

function setupImageUpload(inputId, areaId, callback) {
    const area = document.getElementById(areaId);
    const input = document.getElementById(inputId);
    
    if (!area || !input) return;
    
    area.addEventListener('click', () => input.click());
    
    area.addEventListener('dragover', (e) => {
        e.preventDefault();
        area.style.borderColor = 'var(--border-hover)';
    });
    
    area.addEventListener('dragleave', () => {
        area.style.borderColor = 'var(--border)';
    });
    
    area.addEventListener('drop', (e) => {
        e.preventDefault();
        area.style.borderColor = 'var(--border)';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file, area, callback);
        }
    });
    
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file, area, callback);
        }
    });
}

function handleImageUpload(file, area, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const imageData = e.target.result;
        area.innerHTML = `<img src="${imageData}" class="uploaded-image" style="margin-bottom: 0;">`;
        if (callback) callback(imageData);
    };
    reader.readAsDataURL(file);
}

// ========== EVENT LISTENERS ==========

document.addEventListener('DOMContentLoaded', () => {
    updateClientDropdown();
    
    const clients = getAllClients();
    if (clients.length > 0) {
        selectClient(clients[0].id);
    }
    
    renderWorkouts();
    renderSelectedExercises();
    
    setupImageUpload('clientImage', 'imageUploadArea', (imageData) => {
        if (currentClient) {
            currentClient.profile.image = imageData;
            saveClient(currentClient);
            updateUIForClient();
        }
    });
    
    setupImageUpload('newClientImage', 'modalImageUpload', (imageData) => {
        pendingClientImage = imageData;
    });
    
    setupImageUpload('customExerciseImage', 'exerciseImageUpload', (imageData) => {
        pendingExerciseImage = imageData;
    });
    
    // Client dropdown
    document.getElementById('clientBtn').addEventListener('click', () => {
        document.getElementById('clientDropdown').classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.client-selector')) {
            document.getElementById('clientDropdown').classList.remove('active');
        }
    });
    
    // Add client modal
    document.getElementById('addClientBtn').addEventListener('click', () => {
        document.getElementById('clientDropdown').classList.remove('active');
        pendingClientImage = null;
        document.getElementById('modalImageUpload').innerHTML = `
            <input type="file" id="newClientImage" accept="image/*">
            <div class="image-upload-icon">📷</div>
            <div class="image-upload-text">Upload photo</div>
        `;
        setupImageUpload('newClientImage', 'modalImageUpload', (imageData) => {
            pendingClientImage = imageData;
        });
        document.getElementById('addClientModal').classList.add('active');
    });
    
    document.getElementById('closeClientModal').addEventListener('click', () => {
        document.getElementById('addClientModal').classList.remove('active');
    });
    
    document.getElementById('newClientForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const client = {
            id: generateId(),
            name: document.getElementById('newClientName').value,
            profile: {
                weight: parseFloat(document.getElementById('newClientWeight').value),
                height: parseInt(document.getElementById('newClientHeight').value),
                age: parseInt(document.getElementById('newClientAge').value),
                gender: document.getElementById('newClientGender').value,
                activityLevel: document.getElementById('newClientActivity').value,
                goal: document.getElementById('newClientGoal').value,
                image: pendingClientImage || null
            },
            stats: {
                xp: 0,
                totalWorkouts: 0,
                streak: 0,
                caloriesBurned: 0
            },
            progress: {
                weightHistory: [],
                workoutHistory: [],
                lastWorkoutDate: null
            },
            library: {
                customExercises: []
            },
            createdAt: new Date().toISOString()
        };
        
        const todayWeight = {
            date: new Date().toISOString().split('T')[0],
            weight: client.profile.weight
        };
        client.progress.weightHistory.push(todayWeight);
        
        saveClient(client);
        updateClientDropdown();
        selectClient(client.id);
        
        document.getElementById('addClientModal').classList.remove('active');
        document.getElementById('newClientForm').reset();
        pendingClientImage = null;
        
        showToast(`Welcome, ${client.name}!`);
    });
    
    // Profile form
    document.getElementById('profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!currentClient) {
            showToast('Please create a client first');
            return;
        }
        
        currentClient.name = document.getElementById('clientName').value;
        currentClient.profile = {
            weight: parseFloat(document.getElementById('weight').value),
            height: parseInt(document.getElementById('height').value),
            age: parseInt(document.getElementById('age').value),
            gender: document.getElementById('gender').value,
            activityLevel: document.getElementById('activityLevel').value,
            goal: document.getElementById('goal').value,
            image: currentClient.profile.image
        };
        
        const today = new Date().toISOString().split('T')[0];
        const existingIndex = currentClient.progress.weightHistory.findIndex(w => w.date === today);
        if (existingIndex > -1) {
            currentClient.progress.weightHistory[existingIndex].weight = currentClient.profile.weight;
        } else {
            currentClient.progress.weightHistory.push({ date: today, weight: currentClient.profile.weight });
        }
        
        saveClient(currentClient);
        updateClientDropdown();
        updateUIForClient();
        
        showToast('Profile updated!');
    });
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });
    
    // Workout filters
    document.getElementById('workoutFilters').addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            workoutFilter = e.target.dataset.filter;
            renderWorkouts();
        }
    });
    
    // Workout search
    document.getElementById('workoutSearch').addEventListener('input', (e) => {
        workoutSearch = e.target.value;
        renderWorkouts();
    });
    
    // Log workout
    document.getElementById('logWorkoutBtn').addEventListener('click', logWorkout);
    
    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('active');
    });
    
    // Custom exercise modal
    document.getElementById('addCustomExerciseBtn').addEventListener('click', () => {
        pendingExerciseImage = null;
        document.getElementById('exerciseImageUpload').innerHTML = `
            <input type="file" id="customExerciseImage" accept="image/*">
            <div class="image-upload-icon">📷</div>
            <div class="image-upload-text">Upload exercise photo</div>
        `;
        setupImageUpload('customExerciseImage', 'exerciseImageUpload', (imageData) => {
            pendingExerciseImage = imageData;
        });
        document.getElementById('customExerciseModal').classList.add('active');
    });
    
    document.getElementById('closeExerciseModal').addEventListener('click', () => {
        document.getElementById('customExerciseModal').classList.remove('active');
    });
    
    document.getElementById('customExerciseForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!currentClient) {
            showToast('Please select or create a client first');
            return;
        }
        
        const exercise = {
            name: document.getElementById('customExerciseName').value,
            muscle: document.getElementById('customExerciseMuscle').value,
            difficulty: document.getElementById('customExerciseDifficulty').value,
            instructions: document.getElementById('customExerciseInstructions').value,
            image: pendingExerciseImage || null
        };
        
        currentClient.library.customExercises.push(exercise);
        saveClient(currentClient);
        updateLibrary();
        
        document.getElementById('customExerciseModal').classList.remove('active');
        document.getElementById('customExerciseForm').reset();
        pendingExerciseImage = null;
        
        showToast('Custom exercise added!');
    });
    
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.remove('active');
        });
    });
});
