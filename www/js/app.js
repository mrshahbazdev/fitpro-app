/* FitPro v3 — 210-exercise library (24 bundled offline GIFs + streamed stock videos) */
const MUSCLES = ['Chest', 'Back', 'Legs', 'Arms', 'Shoulders', 'Core', 'Glutes', 'Full Body', 'Warm-Up'];
const MUSCLE_EMOJI = { 'Chest': '💪', 'Back': '🦍', 'Legs': '🦵', 'Arms': '💪', 'Shoulders': '🏋️', 'Core': '🔥', 'Glutes': '🍑', 'Full Body': '⚡', 'Warm-Up': '🧘' };
const EQUIPMENTS = ['Bodyweight', 'Dumbbell', 'Band', 'Chair', 'Bar', 'Ball'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

/* Guided workout plan: 12 curated exercises, all with bundled offline GIFs */
const WORKOUT_PLAN = ['pushup', 'squat', 'lunges', 'plank', 'glute-bridge', 'mountain-climbers', 'crunches', 'jacks', 'burpees', 'leg-raises', 'tricep-dips', 'bird-dog'];

const EXERCISES = [
  /* ================= BUNDLED (offline GIF in www/videos/) ================= */
  {
    id: 'pushup', name: 'Push-Up', muscle: 'Chest', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 12, unit: 'reps', kcal: 20, bundled: true, video: 'videos/pushup.gif', poster: 'videos/pushup.jpg',
    desc: 'The classic upper-body builder. Strengthens chest, shoulders and triceps using only your bodyweight.',
    steps: ['Place hands on the floor, slightly wider than shoulders.', 'Keep your body in a straight line from head to heels.', 'Lower your chest until it nearly touches the floor.', 'Push the floor away and return to the start. Breathe out on the push.'],
    tip: 'Squeeze your glutes and core — your hips should never sag or pike up.',
    mistake: 'Letting the hips sag puts pressure on your lower back. Keep one straight line.'
  },
  {
    id: 'squat', name: 'Squat', muscle: 'Legs', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 15, unit: 'reps', kcal: 25, bundled: true, video: 'videos/squat.gif', poster: 'videos/squat.jpg',
    desc: 'The king of leg exercises. Builds quads, glutes and hamstrings and improves everyday strength.',
    steps: ['Stand with feet shoulder-width apart, toes slightly out.', 'Push your hips back and bend your knees, like sitting in a chair.', 'Lower until thighs are parallel to the floor.', 'Drive through your heels to stand back up.'],
    tip: 'Keep your chest up and knees tracking over your toes — never let them cave inward.',
    mistake: 'Knees collapsing inward. Push them slightly outward as you rise.'
  },
  {
    id: 'plank', name: 'Plank', muscle: 'Core', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 45, unit: 'seconds', kcal: 12, bundled: true, video: 'videos/plank.gif', poster: 'videos/plank.jpg',
    desc: 'An isometric core hold that strengthens your entire midsection and improves posture.',
    steps: ['Get into a push-up position, then lower onto your forearms.', 'Elbows under shoulders, body in one straight line.', 'Squeeze your core and glutes. Look at the floor.', 'Hold for 45 seconds without letting your hips drop.'],
    tip: 'Breathe normally — never hold your breath during a plank.',
    mistake: 'Hips sagging or sticking up. Your body should be one straight board.'
  },
  {
    id: 'lunges', name: 'Lunges', muscle: 'Legs', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 12, unit: 'reps', kcal: 20, bundled: true, video: 'videos/lunges.gif', poster: 'videos/lunges.jpg',
    desc: 'A single-leg move that builds balance, glutes and quads — great for knee stability.',
    steps: ['Stand tall, hands on hips or at your sides.', 'Step forward with one leg and lower your hips.', 'Both knees bend to about 90 degrees.', 'Push through the front heel to return, then switch legs.'],
    tip: 'Keep your torso upright — lean slightly forward only from the hips, never round your back.',
    mistake: 'Front knee going past the toes. Take a long enough step so the shin stays vertical.'
  },
  {
    id: 'jacks', name: 'Jumping Jacks', muscle: 'Full Body', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 30, unit: 'seconds', kcal: 28, bundled: true, video: 'videos/jacks.gif', poster: 'videos/jacks.jpg',
    desc: 'A full-body cardio burst that warms you up, raises your heart rate and burns calories fast.',
    steps: ['Stand with feet together and arms at your sides.', 'Jump up, spreading your legs and raising arms overhead.', 'Jump again to return to the start position.', 'Keep a steady rhythm for 30 seconds.'],
    tip: 'Land softly on the balls of your feet — quiet landings protect your knees.',
    mistake: 'Landing flat-footed and stiff. Stay light and springy.'
  },
  {
    id: 'crunches', name: 'Crunches', muscle: 'Core', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 15, unit: 'reps', kcal: 15, bundled: true, video: 'videos/crunches.gif', poster: 'videos/crunches.jpg',
    desc: 'A focused ab exercise that targets the upper abs and builds core definition.',
    steps: ['Lie on your back, knees bent, feet flat on the floor.', 'Place hands lightly behind your head — do not pull your neck.', 'Lift your shoulders off the floor using your abs.', 'Lower slowly back down. Exhale as you crunch up.'],
    tip: 'Think about bringing your ribs toward your hips, not your elbows to your knees.',
    mistake: 'Pulling on your neck. Your hands are only there for support.'
  },
  {
    id: 'diamond-pushup', name: 'Diamond Push-Up', muscle: 'Chest', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 10, unit: 'reps', kcal: 20, bundled: true, video: 'videos/diamond-pushup.gif', poster: 'videos/diamond-pushup.jpg',
    desc: 'A narrow-hand push-up that shifts the load onto your triceps and inner chest.',
    steps: ['Place your hands together under your chest, thumbs and index fingers forming a diamond.', 'Keep your body in one straight line.', 'Lower your chest to your hands, elbows close to your ribs.', 'Push back up without letting your hips sag.'],
    tip: 'Keep your elbows close to your ribs — that is what loads the triceps.',
    mistake: 'Hands too far forward. Keep them directly under your chest.'
  },
  {
    id: 'incline-pushup', name: 'Incline Push-Up', muscle: 'Chest', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 12, unit: 'reps', kcal: 15, bundled: true, video: 'videos/incline-pushup.gif', poster: 'videos/incline-pushup.jpg',
    desc: 'A gentler push-up with hands raised on a bench or chair — the perfect first push-up.',
    steps: ['Place your hands on a sturdy chair or bench, shoulder-width apart.', 'Walk your feet back until your body is one straight line.', 'Lower your chest to the edge with control.', 'Push back up. Breathe out on the push.'],
    tip: 'The higher the surface, the easier the rep — pick a height you can fully control.',
    mistake: 'Hips sagging. Brace your core just like a floor push-up.'
  },
  {
    id: 'wide-pushup', name: 'Wide Push-Up', muscle: 'Chest', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 12, unit: 'reps', kcal: 20, bundled: true, video: 'videos/wide-pushup.gif', poster: 'videos/wide-pushup.jpg',
    desc: 'Hands placed wide to put extra emphasis on the outer chest.',
    steps: ['Place your hands wider than your shoulders on the floor.', 'Keep your body in one straight line from head to heels.', 'Lower until your chest nearly touches the floor.', 'Push the floor away and return to the start.'],
    tip: 'Keep your elbows at about 45 degrees — not flared out to 90.',
    mistake: 'Flaring your elbows wide puts stress on the shoulders.'
  },
  {
    id: 'wall-sit', name: 'Wall Sit', muscle: 'Legs', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 45, unit: 'seconds', kcal: 12, bundled: true, video: 'videos/wall-sit.gif', poster: 'videos/wall-sit.jpg',
    desc: 'A static leg burner that builds quad endurance and knee stability — no movement needed.',
    steps: ['Stand with your back flat against a wall.', 'Slide down until your thighs are parallel to the floor.', 'Knees above ankles, feet flat on the floor.', 'Hold the position and breathe steadily.'],
    tip: 'Press your lower back into the wall — leave no gap.',
    mistake: 'Knees drifting past your toes. Slide your feet further out.'
  },
  {
    id: 'calf-raises', name: 'Calf Raises', muscle: 'Legs', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 15, unit: 'reps', kcal: 12, bundled: true, video: 'videos/calf-raises.gif', poster: 'videos/calf-raises.jpg',
    desc: 'Simple and effective — builds strong calves and ankle stability.',
    steps: ['Stand tall with feet hip-width apart.', 'Rise up onto your toes as high as you can.', 'Pause for a full second at the top.', 'Lower slowly back down.'],
    tip: 'Pause a full second at the top of every rep.',
    mistake: 'Bouncing through reps. Slow down the lowering phase.'
  },
  {
    id: 'jump-squats', name: 'Jump Squats', muscle: 'Legs', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 10, unit: 'reps', kcal: 30, bundled: true, video: 'videos/jump-squats.gif', poster: 'videos/jump-squats.jpg',
    desc: 'An explosive squat jump that builds power and torches calories.',
    steps: ['Squat down with your chest up.', 'Explode upward into a jump, reaching tall.', 'Land softly on the balls of your feet with bent knees.', 'Go straight into the next squat.'],
    tip: 'Land as quietly as you can — soft knees, soft feet.',
    mistake: 'Landing stiff-legged. Bend your knees to absorb the landing.'
  },
  {
    id: 'glute-bridge', name: 'Glute Bridge', muscle: 'Glutes', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 15, unit: 'reps', kcal: 15, bundled: true, video: 'videos/glute-bridge.gif', poster: 'videos/glute-bridge.jpg',
    desc: 'Wake up your glutes and protect your lower back with this simple hip lift.',
    steps: ['Lie on your back, knees bent, feet flat on the floor.', 'Drive through your heels to lift your hips.', 'Squeeze your glutes hard at the top.', 'Lower slowly back down.'],
    tip: 'At the top, your body should be one straight line from knees to shoulders.',
    mistake: 'Arching your lower back at the top. Squeeze your glutes instead.'
  },
  {
    id: 'leg-raises', name: 'Leg Raises', muscle: 'Core', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 12, unit: 'reps', kcal: 15, bundled: true, video: 'videos/leg-raises.gif', poster: 'videos/leg-raises.jpg',
    desc: 'A lower-ab classic that also teaches you to control your spine.',
    steps: ['Lie on your back, hands under your hips for support.', 'Lift your straight legs up to 90 degrees.', 'Lower them slowly without letting them touch the floor.', 'Keep your lower back pressed into the floor throughout.'],
    tip: 'Press your lower back into the floor the whole time.',
    mistake: 'Letting your back arch as your legs come down.'
  },
  {
    id: 'russian-twist', name: 'Russian Twist', muscle: 'Core', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 20, unit: 'reps', kcal: 18, bundled: true, video: 'videos/russian-twist.gif', poster: 'videos/russian-twist.jpg',
    desc: 'A seated twist that targets your obliques and builds rotational core strength.',
    steps: ['Sit with knees bent and lean back slightly, chest up.', 'Lift your feet off the floor if you can.', 'Twist your torso to one side and touch the floor.', 'Twist to the other side. That is one rep.'],
    tip: 'Move from your waist, not your arms.',
    mistake: 'Rounding your back. Sit tall with your chest up.'
  },
  {
    id: 'bicycle-crunches', name: 'Bicycle Crunches', muscle: 'Core', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 20, unit: 'reps', kcal: 20, bundled: true, video: 'videos/bicycle-crunches.gif', poster: 'videos/bicycle-crunches.jpg',
    desc: 'A pedalling crunch that hits your upper abs and obliques together.',
    steps: ['Lie on your back, hands lightly behind your head.', 'Bring your right elbow toward your left knee while extending your right leg.', 'Switch sides in a smooth pedalling motion.', 'Keep the movement slow and controlled.'],
    tip: 'Go slow — a controlled twist beats fast flailing.',
    mistake: 'Pulling your neck with your hands.'
  },
  {
    id: 'side-plank', name: 'Side Plank', muscle: 'Core', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 30, unit: 'seconds', kcal: 12, bundled: true, video: 'videos/side-plank.gif', poster: 'videos/side-plank.jpg',
    desc: 'A sideways hold that strengthens your obliques and side stability.',
    steps: ['Lie on your side with your forearm under your shoulder.', 'Lift your hips so your body forms one straight line.', 'Keep your feet stacked and your core tight.', 'Hold, then switch sides.'],
    tip: 'Push the floor away with your forearm to stay tall.',
    mistake: 'Hips dropping. Keep one straight line from head to feet.'
  },
  {
    id: 'tricep-dips', name: 'Tricep Dips', muscle: 'Arms', equipment: 'Chair', level: 'Beginner',
    sets: 3, reps: 12, unit: 'reps', kcal: 15, bundled: true, video: 'videos/tricep-dips.gif', poster: 'videos/tricep-dips.jpg',
    desc: 'Use a chair or bench to carve out your triceps — no gym needed.',
    steps: ['Sit on the edge of a sturdy chair, hands beside your hips.', 'Walk your feet out and lift your hips off the chair.', 'Lower your body by bending your elbows to about 90 degrees.', 'Push back up through your palms.'],
    tip: 'Keep your elbows pointing straight back, not out to the sides.',
    mistake: 'Shoulders shrugging up to your ears. Keep them down and back.'
  },
  {
    id: 'pike-pushup', name: 'Pike Push-Up', muscle: 'Shoulders', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 10, unit: 'reps', kcal: 18, bundled: true, video: 'videos/pike-pushup.gif', poster: 'videos/pike-pushup.jpg',
    desc: 'An inverted-V push-up that builds shoulder strength — a stepping stone to handstands.',
    steps: ['Start in a downward-dog shape, hips high, hands and feet on the floor.', 'Bend your elbows to lower the top of your head toward the floor.', 'Keep your hips high in the inverted-V shape.', 'Push back up to the start.'],
    tip: 'Think of pushing the floor away, not just lowering your head.',
    mistake: 'Letting your hips drop. Keep the inverted-V shape.'
  },
  {
    id: 'superman', name: 'Superman', muscle: 'Back', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 12, unit: 'reps', kcal: 12, bundled: true, video: 'videos/superman.gif', poster: 'videos/superman.jpg',
    desc: 'Lift arms and legs off the floor to strengthen your lower back and glutes.',
    steps: ['Lie face down with your arms stretched forward.', 'Lift your arms, chest and legs off the floor together.', 'Hold for 2 seconds at the top.', 'Lower slowly back down.'],
    tip: 'Look at the floor, not up — keep your neck neutral.',
    mistake: 'Jerking up fast. Lift with control.'
  },
  {
    id: 'bird-dog', name: 'Bird Dog', muscle: 'Back', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 10, unit: 'reps', kcal: 10, bundled: true, video: 'videos/bird-dog.gif', poster: 'videos/bird-dog.jpg',
    desc: 'A balance and core move that teaches your back and abs to work together.',
    steps: ['Start on all fours, hands under shoulders, knees under hips.', 'Extend your right arm forward and your left leg back.', 'Hold for 2 seconds, keeping your hips level.', 'Return and switch sides.'],
    tip: 'Imagine balancing a glass of water on your lower back.',
    mistake: 'Hips rocking side to side. Keep them level.'
  },
  {
    id: 'mountain-climbers', name: 'Mountain Climbers', muscle: 'Full Body', equipment: 'Bodyweight', level: 'Intermediate',
    sets: 3, reps: 30, unit: 'seconds', kcal: 28, bundled: true, video: 'videos/mountain-climbers.gif', poster: 'videos/mountain-climbers.jpg',
    desc: 'A fast plank drive that torches calories while hammering your core.',
    steps: ['Start in a high plank, hands under shoulders.', 'Drive your right knee toward your chest.', 'Switch legs quickly, alternating sides.', 'Keep a steady, fast rhythm for 30 seconds.'],
    tip: 'Keep your hips level — do not let your butt bounce up.',
    mistake: 'Bouncing your hips. Keep a flat plank line.'
  },
  {
    id: 'burpees', name: 'Burpees', muscle: 'Full Body', equipment: 'Bodyweight', level: 'Advanced',
    sets: 3, reps: 10, unit: 'reps', kcal: 35, bundled: true, video: 'videos/burpees.gif', poster: 'videos/burpees.jpg',
    desc: 'The full-body classic — squat, plank, push-up and jump in one explosive move.',
    steps: ['Squat down and place your hands on the floor.', 'Jump your feet back into a plank.', 'Do a push-up, then jump your feet forward.', 'Explode upward with your arms overhead.'],
    tip: 'Land soft and go straight into the next rep — no pausing.',
    mistake: 'Rounding your back when jumping back to plank. Keep a straight line.'
  },
  {
    id: 'high-knees', name: 'High Knees', muscle: 'Full Body', equipment: 'Bodyweight', level: 'Beginner',
    sets: 3, reps: 30, unit: 'seconds', kcal: 28, bundled: true, video: 'videos/high-knees.gif', poster: 'videos/high-knees.jpg',
    desc: 'Run in place with knees high — a simple cardio burst that wakes up your whole body.',
    steps: ['Stand tall and run in place.', 'Drive your knees up to hip height.', 'Pump your arms with the rhythm.', 'Stay on the balls of your feet.'],
    tip: 'The faster your arms pump, the faster your legs follow.',
    mistake: 'Shuffling with low knees. Lift them to hip height.'
  },
  {
    id: "decline-push-up",
    name: "Decline Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/32320/32320-720.mp4",
    videoSource: "Mixkit — Young Athletic Man Doing Push-Ups Outdoors — https://mixkit.co/free-stock-video/young-athletic-man-doing-push-ups-outdoors-32320/",
    desc: "Place your feet on a bench or step and hands on the floor, shoulder-width apart.",
    steps: ["Place your feet on a bench or step and hands on the floor, shoulder-width apart.", "Keep your body in a straight line from head to heels.", "Lower your chest toward the floor by bending your elbows.", "Push through your palms to return to the top.", "Keep your core tight and hips level throughout."],
    tip: "The higher your feet, the harder the rep — start low and raise the surface as you get stronger.",
    mistake: "Letting your hips sag or pike up breaks the straight body line."
  },
  {
    id: "knee-push-up",
    name: "Knee Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8171383/8171383-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — A Man Exercising at Home by Kampus Production — https://www.pexels.com/video/a-man-exercising-at-home-8171383/",
    desc: "Kneel on the floor with hands under your shoulders.",
    steps: ["Kneel on the floor with hands under your shoulders.", "Lower your knees back so your body forms a straight line from knees to head.", "Bend your elbows to lower your chest toward the floor.", "Press back up until your arms are straight.", "Keep your core braced and avoid arching your lower back."],
    tip: "Cross your ankles and squeeze your glutes to keep your body rigid.",
    mistake: "Dropping your hips or flaring your elbows wide."
  },
  {
    id: "archer-push-up",
    name: "Archer Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 24,
    bundled: false,
    video: "https://assets.mixkit.co/videos/24308/24308-720.mp4",
    videoSource: "Mixkit — Young Man Doing Push-Ups — https://mixkit.co/free-stock-video/young-man-doing-push-ups-24308/",
    desc: "Start in a wide push-up position with hands much wider than shoulders.",
    steps: ["Start in a wide push-up position with hands much wider than shoulders.", "Shift your weight to one side and bend that elbow while the other arm stays nearly straight.", "Lower your chest toward the bent-arm side.", "Push back up and shift to the other side.", "Alternate sides each rep."],
    tip: "Move slowly to the side — the straight arm is a guide, not a rest.",
    mistake: "Letting your hips twist instead of shifting your chest sideways."
  },
  {
    id: "clap-push-up",
    name: "Clap Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 25,
    bundled: false,
    video: "https://assets.mixkit.co/videos/11766/11766-720.mp4",
    videoSource: "Mixkit — Man Doing Push Ups Quickly — https://mixkit.co/free-stock-video/man-doing-push-ups-quickly-11766/",
    desc: "Start in a strong push-up position with hands under your shoulders.",
    steps: ["Start in a strong push-up position with hands under your shoulders.", "Lower your chest with control.", "Explode upward so your hands leave the floor.", "Clap quickly in mid-air.", "Land softly with bent elbows and go straight into the next rep."],
    tip: "Land with soft elbows — never lock out hard on the catch.",
    mistake: "Doing it on a hard floor without enough power to get airborne."
  },
  {
    id: "spiderman-push-up",
    name: "Spiderman Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/24434/24434-720.mp4",
    videoSource: "Mixkit — Strong Man Doing Push-Ups in the Gym — https://mixkit.co/free-stock-video/strong-man-doing-push-ups-in-the-gym-24434/",
    desc: "Start in a push-up position.",
    steps: ["Start in a push-up position.", "As you lower your chest, bring one knee toward the elbow on the same side.", "Keep the knee lifted as you press back up.", "Return the leg and repeat on the other side.", "Alternate sides each rep."],
    tip: "Bring the knee out wide, not straight under your body.",
    mistake: "Twisting your hips open as the knee comes forward."
  },
  {
    id: "staggered-push-up",
    name: "Staggered Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/32308/32308-720.mp4",
    videoSource: "Mixkit — Man Doing Push-Ups Outdoors — https://mixkit.co/free-stock-video/man-doing-push-ups-outdoors-32308/",
    desc: "Place one hand forward and the other back, both under your torso.",
    steps: ["Place one hand forward and the other back, both under your torso.", "Lower your chest with elbows tracking back.", "Press up to the top.", "Swap hand positions after each set, or each rep if you can.", "Keep your hips level and core tight."],
    tip: "Keep the hands only slightly staggered — a small offset is enough.",
    mistake: "Letting your shoulders rotate toward the forward hand."
  },
  {
    id: "wall-push-up",
    name: "Wall Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/11544/11544-720.mp4",
    videoSource: "Mixkit — Woman Doing Push Ups in the Park — https://mixkit.co/free-stock-video/woman-doing-push-ups-in-the-park-11544/",
    desc: "Stand an arm's length from a wall with palms flat against it at shoulder height.",
    steps: ["Stand an arm's length from a wall with palms flat against it at shoulder height.", "Step back slightly and keep your body straight.", "Bend your elbows to bring your chest toward the wall.", "Push away until your arms are straight.", "Keep your heels on the floor and core braced."],
    tip: "The further your feet are from the wall, the harder it gets.",
    mistake: "Bending at the hips instead of keeping a straight body line."
  },
  {
    id: "hindu-push-up",
    name: "Hindu Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/50763/50763-720.mp4",
    videoSource: "Mixkit — A Black Man Doing Pushups on a Yoga Mat — https://mixkit.co/free-stock-video/a-black-man-doing-pushups-on-a-yoga-mat-50763/",
    desc: "Start in a downward-dog position with hips high and hands and feet on the floor.",
    steps: ["Start in a downward-dog position with hips high and hands and feet on the floor.", "Swoop your chest down and forward, close to the floor.", "Arch up into an upward-facing position.", "Reverse the motion back to the start.", "Move smoothly and breathe steadily."],
    tip: "Think of scooping your chest under an invisible bar.",
    mistake: "Rushing the swoop and collapsing your lower back at the top."
  },
  {
    id: "pseudo-planche-push-up",
    name: "Pseudo Planche Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 24,
    bundled: false,
    video: "https://assets.mixkit.co/videos/5048/5048-720.mp4",
    videoSource: "Mixkit — Young Man Doing Push-Ups on the Floor — https://mixkit.co/free-stock-video/young-man-doing-push-ups-on-the-floor-5048/",
    desc: "Place your hands on the floor beside your hips, fingers pointing back toward your feet.",
    steps: ["Place your hands on the floor beside your hips, fingers pointing back toward your feet.", "Lean your shoulders forward past your hands.", "Lower your chest with control, keeping your body straight.", "Press back up without letting your hips drop.", "Keep your arms close to your body."],
    tip: "Lean further forward to make it harder — small changes add a lot of load.",
    mistake: "Keeping your hands too far forward, which turns it into a normal push-up."
  },
  {
    id: "one-arm-push-up",
    name: "One-Arm Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 26,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4804816/4804816-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — Shallow Focus of Man in Yellow Shirt Doing One-Arm Push-Ups by Ketut Subiyanto — https://www.pexels.com/video/shallow-focus-of-man-in-yellow-shirt-doing-one-arm-push-ups-4804816/",
    desc: "Start in a push-up position with feet wider than usual for balance.",
    steps: ["Start in a push-up position with feet wider than usual for balance.", "Place one hand on the floor under your chest and the other behind your back.", "Brace your core hard and lower your chest with control.", "Press back up without letting your hips twist.", "Complete all reps on one side, then switch."],
    tip: "Spread your feet wider than shoulder-width to stop your body rotating.",
    mistake: "Letting your hips rotate open as you lower."
  },
  {
    id: "tempo-push-up",
    name: "Tempo Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/731/731-720.mp4",
    videoSource: "Mixkit — Man Doing Push Ups — https://mixkit.co/free-stock-video/man-doing-push-ups-731/",
    desc: "Start in a push-up position.",
    steps: ["Start in a push-up position.", "Lower your chest slowly over 3 seconds.", "Pause for 1 second at the bottom.", "Press up in 1 second.", "Keep your body straight and elbows close throughout."],
    tip: "Count out loud to keep the 3-1-1 tempo honest.",
    mistake: "Dropping fast on the way down, which removes the point of the tempo."
  },
  {
    id: "plank-to-push-up",
    name: "Plank to Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/11765/11765-720.mp4",
    videoSource: "Mixkit — Doing Push Ups Against a Dark Background — https://mixkit.co/free-stock-video/doing-push-ups-against-a-dark-background-11765/",
    desc: "Start in a forearm plank with elbows under your shoulders.",
    steps: ["Start in a forearm plank with elbows under your shoulders.", "Place one hand on the floor, then the other, pressing up to a high plank.", "Lower back down to your forearms one arm at a time.", "Keep your hips still and level throughout.", "Alternate the leading arm each rep."],
    tip: "Squeeze your glutes to stop your hips rocking side to side.",
    mistake: "Letting your hips sway as you switch between plank positions."
  },
  {
    id: "chest-tap-push-up",
    name: "Chest Tap Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/50761/50761-720.mp4",
    videoSource: "Mixkit — A Young Black Man Does Push-Ups on the Balcony — https://mixkit.co/free-stock-video/a-young-black-man-does-push-ups-on-the-balcony-50761/",
    desc: "Start in a push-up position.",
    steps: ["Start in a push-up position.", "Lower your chest to the floor with control.", "At the top of the press, lift one hand and tap your opposite shoulder.", "Place the hand back down and do another push-up.", "Alternate the tapping hand each rep."],
    tip: "Tap at the very top when your body is most stable.",
    mistake: "Rocking your hips side to side as you lift a hand."
  },
  {
    id: "dumbbell-floor-press",
    name: "Dumbbell Floor Press",
    muscle: "Chest",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6116240/6116240-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Lifting Dumbbells by Harvey Tan Villarino — https://www.pexels.com/video/a-man-lifting-dumbbells-6116240/",
    desc: "Lie on your back with knees bent and a dumbbell in each hand.",
    steps: ["Lie on your back with knees bent and a dumbbell in each hand.", "Rest your upper arms on the floor, elbows at about 45 degrees.", "Press both dumbbells up until your arms are straight.", "Lower slowly until your elbows touch the floor.", "Keep your wrists straight and core braced."],
    tip: "Pause briefly when your elbows touch the floor to remove momentum.",
    mistake: "Flaring your elbows out wide, which strains your shoulders."
  },
  {
    id: "dumbbell-floor-fly",
    name: "Dumbbell Floor Fly",
    muscle: "Chest",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8402113/8402113-hd_1080_1920_30fps.mp4",
    videoSource: "Pexels — A Woman Doing Dumbbell Chest Flys at an Outdoor Gym by RDNE Stock project — https://www.pexels.com/video/a-woman-doing-dumbbell-chest-flys-at-an-outdoor-gym-8402113/",
    desc: "Lie on your back with knees bent and dumbbells above your chest.",
    steps: ["Lie on your back with knees bent and dumbbells above your chest.", "Keep a slight bend in your elbows.", "Open your arms wide in an arc until you feel a chest stretch.", "Bring the dumbbells back together above your chest.", "Move slowly and keep the elbows soft throughout."],
    tip: "Imagine hugging a big tree to keep the arc wide and even.",
    mistake: "Bending your elbows too much, which turns the fly into a press."
  },
  {
    id: "dumbbell-pullover",
    name: "Dumbbell Pullover",
    muscle: "Chest",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://videos.pexels.com/video-files/29569378/12727709_1080_1920_60fps.mp4",
    videoSource: "Pexels — Intense Weight Training on Bench with Dumbbells by JULLIAN PRODUCTION — https://www.pexels.com/video/intense-weight-training-on-bench-with-dumbbells-29569378/",
    desc: "Lie on your back holding one dumbbell with both hands above your chest.",
    steps: ["Lie on your back holding one dumbbell with both hands above your chest.", "Keep a slight bend in your elbows.", "Lower the dumbbell back over your head until you feel a stretch.", "Pull it back up above your chest using your chest and lats.", "Keep your core tight and lower back on the floor."],
    tip: "Keep your elbows soft and fixed — the movement comes from your shoulders.",
    mistake: "Arching your lower back as the dumbbell goes overhead."
  },
  {
    id: "band-chest-press",
    name: "Band Chest Press",
    muscle: "Chest",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/38053789/16153635_1920_1080_60fps.mp4",
    videoSource: "Pexels — Man Performing Cable Chest Press in Gym by Dishant Babariya — https://www.pexels.com/video/man-performing-cable-chest-press-in-gym-38053789/",
    desc: "Anchor the band behind you at chest height.",
    steps: ["Anchor the band behind you at chest height.", "Hold a handle in each hand at chest level.", "Step forward until the band is taut.", "Press both handles straight forward.", "Return slowly with control."],
    tip: "Stand in a split stance for a stable base.",
    mistake: "Letting the band snap your hands back on the return."
  },
  {
    id: "band-chest-fly",
    name: "Band Chest Fly",
    muscle: "Chest",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/31105899/13291065_1920_1080_30fps.mp4",
    videoSource: "Pexels — Intense Cable Chest Workout in Modern Gym by Markofit Production — https://www.pexels.com/video/intense-cable-chest-workout-in-modern-gym-31105899/",
    desc: "Anchor the band behind you at shoulder height.",
    steps: ["Anchor the band behind you at shoulder height.", "Hold the handles with arms open wide to your sides.", "Step forward until the band is taut.", "Bring your hands together in front of your chest in a wide arc.", "Return slowly to the open position."],
    tip: "Keep a soft bend in your elbows and lead with your chest, not your hands.",
    mistake: "Bending your elbows too much and turning the fly into a press."
  },
  {
    id: "band-push-up",
    name: "Band Push-Up",
    muscle: "Chest",
    equipment: "Band",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8436002/8436002-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Side View of a Woman Exercising by Yan Krukau — https://www.pexels.com/video/side-view-of-a-woman-exercising-8436002/",
    desc: "Loop a resistance band across your upper back and hold the ends under your palms.",
    steps: ["Loop a resistance band across your upper back and hold the ends under your palms.", "Get into a push-up position with the band taut.", "Lower your chest with control.", "Press up against the band's resistance.", "Keep your body straight from head to heels."],
    tip: "Make sure the band sits flat across your back so it does not roll up.",
    mistake: "Letting the band pull your shoulders out of position at the top."
  },
  {
    id: "medicine-ball-push-up",
    name: "Medicine Ball Push-Up",
    muscle: "Chest",
    equipment: "Ball",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4745738/4745738-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — Close-Up View of Man Doing Push-Ups With Medicine Ball by Ketut Subiyanto — https://www.pexels.com/video/close-up-view-of-man-doing-push-ups-with-medicine-ball-4745738/",
    desc: "Place one hand on a medicine ball and the other on the floor.",
    steps: ["Place one hand on a medicine ball and the other on the floor.", "Lower your chest with control, keeping your body straight.", "Press back up.", "Roll the ball to the other hand and repeat.", "Alternate sides each rep."],
    tip: "Keep your hand centered on the ball so it does not roll away.",
    mistake: "Letting your hips sag toward the ball side."
  },
  {
    id: "incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    muscle: "Chest",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://videos.pexels.com/video-files/38412018/16310754_3840_2160_25fps.mp4",
    videoSource: "Pexels — Intense Dumbbell Workout in Home Gym by JULLIAN PRODUCTION — https://www.pexels.com/video/intense-dumbbell-workout-in-home-gym-38412018/",
    desc: "Set a bench to about 30-45 degrees and sit back with a dumbbell in each hand.",
    steps: ["Set a bench to about 30-45 degrees and sit back with a dumbbell in each hand.", "Press the dumbbells up above your upper chest.", "Lower them slowly to chest level with elbows at 45 degrees.", "Press back up without bouncing.", "Keep your feet flat and back on the bench."],
    tip: "A 30-degree incline targets the upper chest best — steeper angles shift work to the shoulders.",
    mistake: "Bouncing the dumbbells off your chest at the bottom."
  },
  {
    id: "deficit-push-up",
    name: "Deficit Push-Up",
    muscle: "Chest",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 10, unit: "reps", kcal: 24,
    bundled: false,
    video: "https://assets.mixkit.co/videos/40248/40248-720.mp4",
    videoSource: "Mixkit — Man Doing Push Ups Using Dumbbells — https://mixkit.co/free-stock-video/man-doing-push-ups-using-dumbbells-40248/",
    desc: "Place your hands on two dumbbells, blocks or plates.",
    steps: ["Place your hands on two dumbbells, blocks or plates.", "Get into a push-up position with hands gripping the elevated supports.", "Lower your chest below hand level for a deeper stretch.", "Press back up to straight arms.", "Keep your body in a straight line throughout."],
    tip: "The extra depth is the point — lower slowly and own the bottom.",
    mistake: "Letting your shoulders shrug up toward your ears at the bottom."
  },
  {
    id: "dumbbell-squeeze-press",
    name: "Dumbbell Squeeze Press",
    muscle: "Chest",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://videos.pexels.com/video-files/33514738/14253838_1920_1080_25fps.mp4",
    videoSource: "Pexels — Intense Weightlifting Session at Home Gym by JULLIAN PRODUCTION — https://www.pexels.com/video/intense-weightlifting-session-at-home-gym-33514738/",
    desc: "Lie on your back holding two dumbbells together over your chest.",
    steps: ["Lie on your back holding two dumbbells together over your chest.", "Press the dumbbells hard into each other.", "Lower them to your chest while keeping them squeezed together.", "Press back up without letting them separate.", "Keep the squeeze constant for the whole set."],
    tip: "The inward squeeze is what makes this work — never let the dumbbells drift apart.",
    mistake: "Letting the dumbbells separate, which turns it into a normal press."
  },
  {
    id: "reverse-snow-angel",
    name: "Reverse Snow Angel",
    muscle: "Back",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://assets.mixkit.co/videos/48565/48565-720.mp4",
    videoSource: "Mixkit — Young woman working out at the sports center — https://mixkit.co/free-stock-video/young-woman-working-out-at-the-sports-center-48565/",
    desc: "Lie face down on a mat with arms by your sides, palms facing down.",
    steps: ["Lie face down on a mat with arms by your sides, palms facing down.", "Lift your arms, chest and head a few inches off the floor.", "Sweep your arms out and overhead in a slow arc, like making a snow angel.", "Pause briefly overhead, then sweep your arms back to your hips.", "Lower down with control and repeat."],
    tip: "Keep your neck long and look at the floor so your spine stays neutral.",
    mistake: "Arching your lower back and lifting your chest too high instead of moving from the upper back."
  },
  {
    id: "prone-y-raise",
    name: "Prone Y Raise",
    muscle: "Back",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/42898/42898-720.mp4",
    videoSource: "Mixkit — Woman exercising in her living room — https://mixkit.co/free-stock-video/woman-exercising-in-her-living-room-42898/",
    desc: "Lie face down with your forehead resting on the mat.",
    steps: ["Lie face down with your forehead resting on the mat.", "Stretch your arms overhead in a Y shape, thumbs pointing up.", "Squeeze your shoulder blades down and together.", "Lift your arms a few inches off the floor without lifting your chest.", "Hold for one second, then lower slowly."],
    tip: "Think of pulling your shoulder blades into your back pockets as you lift.",
    mistake: "Shrugging your shoulders toward your ears instead of keeping them down."
  },
  {
    id: "prone-t-raise",
    name: "Prone T Raise",
    muscle: "Back",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/44437/44437-720.mp4",
    videoSource: "Mixkit — Man and a woman gym-goers stretching — https://mixkit.co/free-stock-video/man-and-a-woman-gym-goers-stretching-44437/",
    desc: "Lie face down with arms stretched straight out to the sides in a T shape, palms down.",
    steps: ["Lie face down with arms stretched straight out to the sides in a T shape, palms down.", "Keep your forehead on the mat and your neck relaxed.", "Lift both arms off the floor by squeezing your shoulder blades together.", "Hold for one second at the top.", "Lower slowly and repeat."],
    tip: "Lead the lift with your shoulder blades, not your hands.",
    mistake: "Bending your elbows and turning the raise into a row."
  },
  {
    id: "prone-w-raise",
    name: "Prone W Raise",
    muscle: "Back",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/48550/48550-720.mp4",
    videoSource: "Mixkit — Young women using stretching gear at the gym — https://mixkit.co/free-stock-video/young-women-using-stretching-gear-at-the-gym-48550/",
    desc: "Lie face down with elbows bent at 90 degrees, upper arms out to the sides in a W shape.",
    steps: ["Lie face down with elbows bent at 90 degrees, upper arms out to the sides in a W shape.", "Rest your forehead on the mat and keep your hips on the floor.", "Squeeze your shoulder blades together to lift your hands and elbows off the floor.", "Hold for one second, feeling the muscles between your shoulder blades work.", "Lower slowly and repeat."],
    tip: "Keep your elbows level with your shoulders through the whole lift.",
    mistake: "Lifting your chest off the floor and arching your lower back."
  },
  {
    id: "superman-pull",
    name: "Superman Pull",
    muscle: "Back",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://assets.mixkit.co/videos/48557/48557-720.mp4",
    videoSource: "Mixkit — Young fitness women working out at the gym — https://mixkit.co/free-stock-video/young-fitness-women-working-out-at-the-gym-48557/",
    desc: "Lie face down with arms stretched overhead and legs straight.",
    steps: ["Lie face down with arms stretched overhead and legs straight.", "Lift your arms, chest and legs a few inches off the floor.", "Bend your elbows and pull them down toward your ribs, squeezing your shoulder blades together.", "Extend your arms back overhead without dropping your chest.", "Lower down and repeat."],
    tip: "Keep the pull slow and squeeze your shoulder blades hard at the bottom of each pull.",
    mistake: "Rushing the pull and letting your legs drop between reps."
  },
  {
    id: "prone-cobra-lift",
    name: "Prone Cobra Lift",
    muscle: "Back",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/48556/48556-720.mp4",
    videoSource: "Mixkit — Young women working out at the sports center — https://mixkit.co/free-stock-video/young-women-working-out-at-the-sports-center-48556/",
    desc: "Lie face down with arms by your sides, palms facing up.",
    steps: ["Lie face down with arms by your sides, palms facing up.", "Tuck your chin slightly and look at the floor.", "Lift your chest, head and arms off the floor using your upper back.", "Hold the top for two seconds while squeezing your shoulder blades together.", "Lower slowly and repeat."],
    tip: "Lift only as high as you can without feeling pressure in your lower back.",
    mistake: "Throwing your head back and craning your neck to lift higher."
  },
  {
    id: "one-arm-dumbbell-row",
    name: "One-Arm Dumbbell Row",
    muscle: "Back",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/44416/44416-720.mp4",
    videoSource: "Mixkit — Muscular man exercising with a dumbbell — https://mixkit.co/free-stock-video/muscular-man-exercising-with-a-dumbbell-44416/",
    desc: "Place one knee and the same-side hand on a bench, with the other foot on the floor.",
    steps: ["Place one knee and the same-side hand on a bench, with the other foot on the floor.", "Hold a dumbbell in the free hand, arm hanging straight down.", "Keep your back flat and your core braced.", "Pull the dumbbell toward your hip, driving your elbow back past your body.", "Lower it slowly to a full stretch and repeat, then switch sides."],
    tip: "Pull with your elbow, not your hand, to feel your back do the work.",
    mistake: "Twisting your torso and heaving the weight up with momentum."
  },
  {
    id: "dumbbell-reverse-fly",
    name: "Dumbbell Reverse Fly",
    muscle: "Back",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://assets.mixkit.co/videos/40788/40788-720.mp4",
    videoSource: "Mixkit — Athletic man doing reps with a large dumbbell — https://mixkit.co/free-stock-video/athletic-man-doing-reps-with-a-large-dumbbell-40788/",
    desc: "Hold a light dumbbell in each hand and hinge forward from your hips, back flat.",
    steps: ["Hold a light dumbbell in each hand and hinge forward from your hips, back flat.", "Let your arms hang straight down with a slight bend in the elbows.", "Raise the dumbbells out to the sides until your arms are level with your shoulders.", "Pause briefly, squeezing your shoulder blades together.", "Lower slowly and repeat."],
    tip: "Use light weights and lead the lift with your elbows.",
    mistake: "Swinging the weights up and arching your back to lift heavier."
  },
  {
    id: "seated-band-row",
    name: "Seated Band Row",
    muscle: "Back",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/active_storage/video_items/100550/1725385839/100550-video-720.mp4",
    videoSource: "Mixkit — Man exercising on a rowing machine in the gym — https://mixkit.co/free-stock-video/man-exercising-on-a-rowing-machine-in-the-gym-100550/",
    desc: "Sit on the floor with legs straight and loop the band around your feet.",
    steps: ["Sit on the floor with legs straight and loop the band around your feet.", "Hold one end in each hand with arms extended in front of you.", "Sit tall with your chest up and shoulders down.", "Pull the band toward your stomach, driving your elbows past your body.", "Return slowly to the start and repeat."],
    tip: "Squeeze your shoulder blades together at the end of every pull.",
    mistake: "Rounding your shoulders forward and leaning back to finish the rep."
  },
  {
    id: "band-pull-apart",
    name: "Band Pull-Apart",
    muscle: "Back",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 10,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326761/6326761-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6326761/",
    videoNote: "Real resistance-band pull-apart (replaces cable-machine clip).",
    desc: "Stand tall and hold a light band with both hands in front of your chest, arms straight.",
    steps: ["Stand tall and hold a light band with both hands in front of your chest, arms straight.", "Grip the band about shoulder-width apart with slight tension.", "Pull the band apart by moving your hands out to the sides until your arms form a T.", "Squeeze your shoulder blades together at the end.", "Return slowly and repeat."],
    tip: "Keep your ribs down and your shoulders away from your ears throughout.",
    mistake: "Bending your elbows and turning the move into a row."
  },
  {
    id: "band-lat-pulldown",
    name: "Band Lat Pulldown",
    muscle: "Back",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/active_storage/video_items/100549/1725385782/100549-video-720.mp4",
    videoSource: "Mixkit — Man Working Out on a Lat Pulldown Machine — https://mixkit.co/free-stock-video/man-working-out-on-a-lat-pulldown-machine-100549/",
    desc: "Anchor the band high above you and kneel or sit underneath it.",
    steps: ["Anchor the band high above you and kneel or sit underneath it.", "Grip the band with hands wider than shoulder-width, arms extended overhead.", "Pull the band down toward your upper chest, driving your elbows down and back.", "Squeeze your lats at the bottom.", "Return slowly to the start and repeat."],
    tip: "Keep your chest tall and your elbows pointing down, not back.",
    mistake: "Leaning far back and pulling the band behind your neck."
  },
  {
    id: "pull-up",
    name: "Pull-Up",
    muscle: "Back",
    equipment: "Bar",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 25,
    bundled: false,
    video: "https://assets.mixkit.co/videos/44410/44410-720.mp4",
    videoSource: "Mixkit — Muscular man doing pull-ups on a bar — https://mixkit.co/free-stock-video/muscular-man-doing-pull-ups-on-a-bar-44410/",
    desc: "Grip the bar overhand, hands slightly wider than shoulder-width.",
    steps: ["Grip the bar overhand, hands slightly wider than shoulder-width.", "Hang with arms fully straight and shoulders engaged.", "Pull your body up until your chin clears the bar.", "Keep your legs still and your core braced.", "Lower slowly to a full hang and repeat."],
    tip: "Start each rep from a dead hang and pull your elbows down toward your ribs.",
    mistake: "Kipping or swinging your legs to get your chin over the bar."
  },
  {
    id: "chin-up",
    name: "Chin-Up",
    muscle: "Back",
    equipment: "Bar",
    level: "Intermediate",
    sets: 3, reps: 8, unit: "reps", kcal: 25,
    bundled: false,
    video: "https://assets.mixkit.co/active_storage/video_items/100552/1725385923/100552-video-720.mp4",
    videoSource: "Mixkit — Man doing pull-ups in the gym — https://mixkit.co/free-stock-video/man-doing-pull-ups-in-the-gym-100552/",
    desc: "Grip the bar underhand with palms facing you, hands shoulder-width apart.",
    steps: ["Grip the bar underhand with palms facing you, hands shoulder-width apart.", "Hang with arms straight and shoulders engaged.", "Pull up until your chin clears the bar, keeping your elbows close to your body.", "Pause briefly at the top.", "Lower slowly to a full hang and repeat."],
    tip: "Use a full range of motion: straight arms at the bottom, chin over the bar at the top.",
    mistake: "Only doing half reps and never fully straightening your arms."
  },
  {
    id: "negative-pull-up",
    name: "Negative Pull-Up",
    muscle: "Back",
    equipment: "Bar",
    level: "Intermediate",
    sets: 3, reps: 8, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/active_storage/video_items/100551/1725385878/100551-video-720.mp4",
    videoSource: "Mixkit — Toned Man Performing Pull-ups — https://mixkit.co/free-stock-video/toned-man-performing-pull-ups-100551/",
    desc: "Step or jump up so your chin is above the bar, using an overhand grip.",
    steps: ["Step or jump up so your chin is above the bar, using an overhand grip.", "Hold the top position for a second with your core braced.", "Lower yourself as slowly as you can, aiming for 3 to 5 seconds down.", "Reach a full dead hang with straight arms.", "Step down, reset, and repeat."],
    tip: "Fight gravity the whole way down instead of dropping at the end.",
    mistake: "Dropping quickly through the last half of the lowering phase."
  },
  {
    id: "australian-row",
    name: "Australian Row",
    muscle: "Back",
    equipment: "Bar",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/active_storage/video_items/100540/1725384803/100540-video-720.mp4",
    videoSource: "Mixkit — Man exercising on gym equipment — https://mixkit.co/free-stock-video/man-exercising-on-gym-equipment-100540/",
    desc: "Set a bar at about waist height and lie underneath it, face up.",
    steps: ["Set a bar at about waist height and lie underneath it, face up.", "Grip the bar overhand, hands slightly wider than shoulder-width.", "Keep your body in a straight line from head to heels, heels on the floor.", "Pull your chest up to the bar, driving your elbows back.", "Lower slowly to straight arms and repeat."],
    tip: "Squeeze your glutes and brace your core so your hips never sag.",
    mistake: "Letting your hips drop and bending your knees to cheat the pull."
  },
  {
    id: "dead-hang",
    name: "Dead Hang",
    muscle: "Back",
    equipment: "Bar",
    level: "Beginner",
    sets: 3, reps: 30, unit: "seconds", kcal: 10,
    bundled: false,
    video: "https://assets.mixkit.co/videos/735/735-720.mp4",
    videoSource: "Mixkit — Man doing pull ups — https://mixkit.co/free-stock-video/man-doing-pull-ups-735/",
    desc: "Grip the bar overhand, hands shoulder-width apart.",
    steps: ["Grip the bar overhand, hands shoulder-width apart.", "Lift your feet off the ground and hang with arms fully straight.", "Keep your shoulders engaged and pulled slightly down, away from your ears.", "Breathe steadily and keep your body still.", "Hold for the target time, then step down safely."],
    tip: "Keep a light grip without letting your shoulders creep up to your ears.",
    mistake: "Swinging your body or shrugging your shoulders up while hanging."
  },
  {
    id: "scapular-pull-up",
    name: "Scapular Pull-Up",
    muscle: "Back",
    equipment: "Bar",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/23450/23450-720.mp4",
    videoSource: "Mixkit — Man training on the bars in the gym — https://mixkit.co/free-stock-video/man-training-on-the-bars-in-the-gym-23450/",
    desc: "Hang from the bar with an overhand grip and arms fully straight.",
    steps: ["Hang from the bar with an overhand grip and arms fully straight.", "Without bending your elbows, pull your shoulder blades down and together.", "Let your body rise a few inches from the shoulder movement alone.", "Hold for one second at the top.", "Relax your shoulders back to a full hang and repeat."],
    tip: "Your elbows must stay straight; the lift comes only from your shoulder blades.",
    mistake: "Bending your elbows and turning it into a partial pull-up."
  },
  {
    id: "good-morning",
    name: "Good Morning",
    muscle: "Back",
    equipment: "Bar",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52080/52080-720.mp4",
    videoSource: "Mixkit — A young muscular man training his strength and overall fitness — https://mixkit.co/free-stock-video/a-young-muscular-man-training-his-strength-and-overall-fitness-52080/",
    desc: "Rest a bar across your upper back and stand with feet shoulder-width apart.",
    steps: ["Rest a bar across your upper back and stand with feet shoulder-width apart.", "Brace your core and keep a slight bend in your knees.", "Hinge at your hips, pushing them back as your torso lowers toward parallel.", "Keep your back flat and your chest up throughout.", "Drive your hips forward to stand tall again."],
    tip: "Push your hips back like closing a door behind you, rather than bending at the waist.",
    mistake: "Rounding your lower back as you lower down."
  },
  {
    id: "band-good-morning",
    name: "Band Good Morning",
    muscle: "Back",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/active_storage/video_items/100541/1725384884/100541-video-720.mp4",
    videoSource: "Mixkit — Man Building Strength on a Gym Machine — https://mixkit.co/free-stock-video/man-building-strength-on-a-gym-machine-100541/",
    desc: "Stand on the middle of the band with feet hip-width apart.",
    steps: ["Stand on the middle of the band with feet hip-width apart.", "Loop the band behind your neck and hold it across your upper back.", "Brace your core and keep a soft bend in your knees.", "Hinge at your hips, sending them back as your torso lowers.", "Drive your hips forward to return to standing."],
    tip: "Keep the band snug on your upper back and your spine straight the whole time.",
    mistake: "Letting the band pull your shoulders forward and rounding your upper back."
  },
  {
    id: "bulgarian-split-squat",
    name: "Bulgarian Split Squat",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52101/52101-720.mp4",
    videoSource: "Mixkit — Muscular Man Doing Lunges at Gym — https://mixkit.co/free-stock-video/muscular-man-doing-lunges-at-gym-52101/",
    desc: "Stand about two feet in front of a bench or chair, facing away from it.",
    steps: ["Stand about two feet in front of a bench or chair, facing away from it.", "Rest the top of your back foot on the bench behind you.", "Keep your chest up and core tight as you lower your front knee to about 90 degrees.", "Push through your front heel to stand back up.", "Finish all reps on one leg, then switch sides."],
    tip: "Keep most of your weight on the front leg and your front knee tracking over your toes.",
    mistake: "Standing too close to the bench, which forces the front knee too far forward."
  },
  {
    id: "walking-lunges",
    name: "Walking Lunges",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52140/52140-720.mp4",
    videoSource: "Mixkit — A young runner woman wearing a snugly black attire does long lunges as warm up before her morning run — https://mixkit.co/free-stock-video/a-young-runner-woman-wearing-a-snugly-black-attire-does-52140/",
    desc: "Stand tall with your feet hip-width apart and hands on your hips.",
    steps: ["Stand tall with your feet hip-width apart and hands on your hips.", "Step forward into a deep lunge, lowering your back knee toward the floor.", "Push through your front heel and step straight into the next lunge with the other leg.", "Keep walking forward, alternating legs with each step.", "Keep your chest up and your front knee over your ankle."],
    tip: "Take long, controlled steps and keep your torso upright the whole time.",
    mistake: "Letting the front knee cave inward or slam the back knee into the floor."
  },
  {
    id: "reverse-lunges",
    name: "Reverse Lunges",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8456658/8456658-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Person Doing Reverse Lunges by Mikhail Nilov — https://www.pexels.com/video/a-person-doing-reverse-lunges-8456658/",
    desc: "Stand tall with feet hip-width apart and hands on your hips or at your sides.",
    steps: ["Stand tall with feet hip-width apart and hands on your hips or at your sides.", "Step one foot back and lower both knees to about 90 degrees.", "Keep your front knee over your ankle and your chest up.", "Push through your front heel to step back to standing.", "Alternate legs each rep."],
    tip: "Step straight back, not diagonally, so your hips stay square.",
    mistake: "Leaning the torso forward instead of lowering straight down."
  },
  {
    id: "side-lunges",
    name: "Side Lunges",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/videos/45960/45960-720.mp4",
    videoSource: "Mixkit — Man in brightly coloured workout clothes doing lunges — https://mixkit.co/free-stock-video/man-in-brightly-coloured-workout-clothes-doing-lunges-45960/",
    desc: "Stand with feet together and toes pointing forward.",
    steps: ["Stand with feet together and toes pointing forward.", "Take a wide step to one side and shift your weight onto that leg.", "Bend the stepping knee and push your hips back, keeping the other leg straight.", "Keep your chest up and the bent knee tracking over your toes.", "Push off the bent leg to return to the start, then switch sides."],
    tip: "Keep the straight leg's foot flat on the floor to stretch the inner thigh.",
    mistake: "Letting the bent knee collapse inward or rounding the lower back."
  },
  {
    id: "curtsy-lunges",
    name: "Curtsy Lunges",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52138/52138-720.mp4",
    videoSource: "Mixkit — A young woman wearing snugly sportswear attire warm up in preparation for her morning jog by doing lunges — https://mixkit.co/free-stock-video/a-young-woman-wearing-snugly-sportswear-attire-warm-up-in-52138/",
    desc: "Stand tall with feet hip-width apart.",
    steps: ["Stand tall with feet hip-width apart.", "Step one leg back and across behind the other, as if curtseying.", "Lower both knees until the front thigh is near parallel to the floor.", "Keep your chest lifted and your front knee over your toes.", "Push through the front heel to return, then switch sides."],
    tip: "Think of the back leg crossing behind like a curtsey, not a wide backward step.",
    mistake: "Twisting the hips open instead of keeping them facing forward."
  },
  {
    id: "step-ups",
    name: "Step-Ups",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/40755/40755-720.mp4",
    videoSource: "Mixkit — Athletic man going up and down steps — https://mixkit.co/free-stock-video/athletic-man-going-up-and-down-steps-40755/",
    desc: "Stand facing a sturdy step or low box with feet hip-width apart.",
    steps: ["Stand facing a sturdy step or low box with feet hip-width apart.", "Place one foot flat on the step, keeping your whole foot supported.", "Push through that heel to lift your body up onto the step.", "Stand tall on the step, then step back down with control.", "Finish all reps on one leg, then switch."],
    tip: "Drive up through the heel of the foot on the step, not by pushing off the floor foot.",
    mistake: "Letting the knee of the stepping leg cave inward or dropping down quickly."
  },
  {
    id: "goblet-squat",
    name: "Goblet Squat",
    muscle: "Legs",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52106/52106-720.mp4",
    videoSource: "Mixkit — A young woman wearing a black sportswear outfit performs squats holding a russian dumbbell on her fitness routine — https://mixkit.co/free-stock-video/a-young-woman-wearing-a-black-sportswear-outfit-performs-squats-52106/",
    desc: "Hold one dumbbell vertically with both hands against your chest.",
    steps: ["Hold one dumbbell vertically with both hands against your chest.", "Stand with feet shoulder-width apart, toes slightly out.", "Brace your core and squat down, keeping your chest up and elbows inside your knees.", "Lower until your thighs are at least parallel to the floor.", "Push through your heels to stand back up."],
    tip: "Hold the weight close to your chest to keep your torso upright.",
    mistake: "Letting your elbows push your knees inward at the bottom."
  },
  {
    id: "dumbbell-lunges",
    name: "Dumbbell Lunges",
    muscle: "Legs",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6892974/6892974-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — A Woman Doing Dumbbell Lunges at the Gym by Kampus Production — https://www.pexels.com/video/a-woman-doing-dumbbell-lunges-at-the-gym-6892974/",
    desc: "Hold a dumbbell in each hand at your sides.",
    steps: ["Hold a dumbbell in each hand at your sides.", "Step forward into a lunge, lowering your back knee toward the floor.", "Keep your torso upright and your front knee over your ankle.", "Push through your front heel to return to standing.", "Alternate legs each rep."],
    tip: "Keep the dumbbells hanging straight down and your shoulders relaxed.",
    mistake: "Taking too short a step so the front knee shoots past the toes."
  },
  {
    id: "sumo-squat",
    name: "Sumo Squat",
    muscle: "Legs",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52107/52107-720.mp4",
    videoSource: "Mixkit — A beautiful woman on her fitness routine dressing an all black sportswear outfit doing squats holding a Russian dumbbell — https://mixkit.co/free-stock-video/a-beautiful-woman-on-her-fitness-routine-dressing-an-all-52107/",
    desc: "Stand with feet wider than shoulder-width, toes turned out about 45 degrees.",
    steps: ["Stand with feet wider than shoulder-width, toes turned out about 45 degrees.", "Hold a dumbbell with both hands hanging between your legs.", "Keep your chest up and squat down, pushing your knees out over your toes.", "Lower until your thighs are parallel to the floor.", "Push through your heels to stand back up."],
    tip: "Push your knees out in line with your toes throughout the squat.",
    mistake: "Letting your knees cave inward as you drive up."
  },
  {
    id: "narrow-squat",
    name: "Narrow Squat",
    muscle: "Legs",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52111/52111-720.mp4",
    videoSource: "Mixkit — A young woman wearing a black snugly outfit is on her fitness routine doing squats holding dumbbells on each hand — https://mixkit.co/free-stock-video/a-young-woman-wearing-a-black-snugly-outfit-is-on-52111/",
    desc: "Stand with feet close together, almost touching, holding dumbbells at your sides.",
    steps: ["Stand with feet close together, almost touching, holding dumbbells at your sides.", "Brace your core and keep your chest up.", "Squat down slowly, keeping your knees tracking over your toes.", "Lower as far as you can with good form.", "Push through your feet to stand up."],
    tip: "Move slowly — the narrow stance makes balance the main challenge.",
    mistake: "Rushing the reps and losing balance at the bottom."
  },
  {
    id: "squat-hold",
    name: "Squat Hold",
    muscle: "Legs",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 30, unit: "seconds", kcal: 15,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52115/52115-720.mp4",
    videoSource: "Mixkit — A strong young woman immersed on her fitness routine is doing squats and lifting dumbbells to improve her toned physique — https://mixkit.co/free-stock-video/a-strong-young-woman-immersed-on-her-fitness-routine-is-52115/",
    desc: "Stand with feet shoulder-width apart, holding dumbbells at your sides or at your chest.",
    steps: ["Stand with feet shoulder-width apart, holding dumbbells at your sides or at your chest.", "Lower into a squat until your thighs are parallel to the floor.", "Keep your chest up, back flat and knees over your toes.", "Hold the position and breathe steadily.", "Stand back up after the hold time ends."],
    tip: "Squeeze your glutes and brace your core to stay still in the hold.",
    mistake: "Holding your breath or letting your heels lift off the floor."
  },
  {
    id: "single-leg-squat-assisted",
    name: "Single-Leg Squat (Assisted)",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 8, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/24305/24305-720.mp4",
    videoSource: "Mixkit — Coach supervising squats of fitness woman — https://mixkit.co/free-stock-video/coach-supervising-squats-of-fitness-woman-24305/",
    desc: "Stand beside a chair or wall and hold it lightly for balance.",
    steps: ["Stand beside a chair or wall and hold it lightly for balance.", "Lift one foot slightly off the floor in front of you.", "Bend your standing knee and push your hips back to lower slowly.", "Go as low as you can control, then push through your heel to stand.", "Finish all reps on one leg, then switch sides."],
    tip: "Use the support only for balance, not to pull yourself up.",
    mistake: "Leaning heavily on the support instead of loading the working leg."
  },
  {
    id: "split-squat",
    name: "Split Squat",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4867625/4867625-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — A Woman Doing Lunges by Ketut Subiyanto — https://www.pexels.com/video/a-woman-doing-lunges-4867625/",
    desc: "Take a staggered stance, one foot well in front of the other.",
    steps: ["Take a staggered stance, one foot well in front of the other.", "Keep your torso upright and hands on your hips.", "Lower straight down by bending both knees until the back knee nearly touches the floor.", "Keep your front knee over your ankle.", "Push through your front heel to rise, then repeat before switching sides."],
    tip: "Drop your hips straight down rather than pushing your body forward.",
    mistake: "Bouncing out of the bottom instead of driving up with control."
  },
  {
    id: "chair-squat",
    name: "Chair Squat",
    muscle: "Legs",
    equipment: "Chair",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://assets.mixkit.co/videos/21273/21273-720.mp4",
    videoSource: "Mixkit — Man doing squats at home — https://mixkit.co/free-stock-video/man-doing-squats-at-home-21273/",
    desc: "Stand in front of a sturdy chair with feet shoulder-width apart.",
    steps: ["Stand in front of a sturdy chair with feet shoulder-width apart.", "Reach your arms forward for balance if you need to.", "Push your hips back and bend your knees to lower until you just touch the chair.", "Do not sit down fully — lightly tap the seat.", "Push through your heels to stand back up."],
    tip: "Touch the chair lightly; your legs should do all the work.",
    mistake: "Plopping down onto the chair instead of lowering with control."
  },
  {
    id: "jump-lunges",
    name: "Jump Lunges",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 25,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52316/52316-720.mp4",
    videoSource: "Mixkit — A young shirtless man on his fitness training session doing jumping lunges at the gym — https://mixkit.co/free-stock-video/a-young-shirtless-man-on-his-fitness-training-session-doing-52316/",
    desc: "Start in a lunge position with one leg forward and both knees bent.",
    steps: ["Start in a lunge position with one leg forward and both knees bent.", "Brace your core and jump up explosively.", "Switch legs in the air and land softly in a lunge with the other leg forward.", "Land with both knees bent to absorb the impact.", "Keep alternating legs with each jump."],
    tip: "Land softly on the balls of your feet with knees bent to protect your joints.",
    mistake: "Landing with straight, stiff legs."
  },
  {
    id: "lateral-squat-walk",
    name: "Lateral Squat Walk",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/48553/48553-720.mp4",
    videoSource: "Mixkit — Fitness instructor in session — https://mixkit.co/free-stock-video/fitness-instructor-in-session-48553/",
    desc: "Stand with feet hip-width apart and lower into a quarter squat.",
    steps: ["Stand with feet hip-width apart and lower into a quarter squat.", "Keep your chest up and your core tight.", "Step one foot out to the side, staying low in the squat.", "Bring the other foot in, then step out again in the same direction.", "Take several steps one way, then walk back the other way."],
    tip: "Stay low the whole time — don't stand up between steps.",
    mistake: "Standing up tall between steps, which removes the work from the legs."
  },
  {
    id: "band-squat",
    name: "Band Squat",
    muscle: "Legs",
    equipment: "Band",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326805/6326805-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — A Person Squatting With a Resistance Band by Pavel Danilyuk — https://www.pexels.com/video/a-person-squatting-with-a-resistance-band-6326805/",
    desc: "Stand on a resistance band with feet shoulder-width apart.",
    steps: ["Stand on a resistance band with feet shoulder-width apart.", "Hold the band handles at shoulder height.", "Brace your core and squat down, keeping your chest up.", "Lower until your thighs are parallel to the floor.", "Push through your heels to stand against the band's resistance."],
    tip: "Keep constant tension on the band, even at the top of the rep.",
    mistake: "Letting the band pull your knees inward as you squat."
  },
  {
    id: "band-side-steps",
    name: "Band Side Steps",
    muscle: "Legs",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8836976/8836976-uhd_2160_4096_25fps.mp4",
    videoSource: "Pexels — Woman Doing a Leg Exercise Using a Resistance Band by MART PRODUCTION — https://www.pexels.com/video/woman-doing-a-leg-exercise-using-a-resistance-band-8836976/",
    desc: "Place a resistance band just above your knees or around your ankles.",
    steps: ["Place a resistance band just above your knees or around your ankles.", "Stand with feet hip-width apart and bend your knees slightly.", "Step one foot out to the side, keeping tension on the band.", "Bring the other foot in without letting the band go slack.", "Take several steps one way, then return the other way."],
    tip: "Keep your toes pointing forward and your hips level as you step.",
    mistake: "Letting the band pull your knees together between steps."
  },
  {
    id: "single-leg-calf-raise",
    name: "Single-Leg Calf Raise",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://assets.mixkit.co/videos/12794/12794-720.mp4",
    videoSource: "Mixkit — Fitness woman making effort on leg routine — https://mixkit.co/free-stock-video/fitness-woman-making-effort-on-leg-routine-12794/",
    desc: "Stand on one foot near a wall or chair for balance.",
    steps: ["Stand on one foot near a wall or chair for balance.", "Keep the other foot lifted off the floor.", "Rise up onto the ball of your standing foot as high as you can.", "Pause and squeeze your calf at the top.", "Lower slowly back down and repeat before switching legs."],
    tip: "Lower slowly — the lowering phase builds the most strength.",
    mistake: "Bouncing at the bottom instead of moving with control."
  },
  {
    id: "seated-calf-raise",
    name: "Seated Calf Raise",
    muscle: "Legs",
    equipment: "Chair",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/14226/14226-720.mp4",
    videoSource: "Mixkit — Fitness girl in leg routine at the gym — https://mixkit.co/free-stock-video/fitness-girl-in-leg-routine-at-the-gym-14226/",
    desc: "Sit on the edge of a chair with feet flat on the floor.",
    steps: ["Sit on the edge of a chair with feet flat on the floor.", "Place your hands on your thighs for a little extra resistance.", "Lift both heels off the floor, rising onto the balls of your feet.", "Pause at the top and squeeze your calves.", "Lower your heels back down slowly."],
    tip: "Keep your knees bent at about 90 degrees and your back straight.",
    mistake: "Rocking your body to lift the heels instead of using your calves."
  },
  {
    id: "squat-to-calf-raise",
    name: "Squat to Calf Raise",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/videos/752/752-720.mp4",
    videoSource: "Mixkit — Woman doing squats — https://mixkit.co/free-stock-video/woman-doing-squats-752/",
    desc: "Stand with feet shoulder-width apart.",
    steps: ["Stand with feet shoulder-width apart.", "Squat down until your thighs are parallel to the floor.", "As you stand back up, rise onto the balls of your feet.", "Squeeze your calves at the top of the raise.", "Lower your heels and flow straight into the next squat."],
    tip: "Make it one smooth motion — squat, stand, then rise onto your toes.",
    mistake: "Skipping the calf raise at the top and just doing plain squats."
  },
  {
    id: "pistol-squat",
    name: "Pistol Squat",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52116/52116-720.mp4",
    videoSource: "Mixkit — A young toned woman wearing snugly sportsware doing squats at the gym — https://mixkit.co/free-stock-video/a-young-toned-woman-wearing-snugly-sportsware-doing-squats-at-52116/",
    desc: "Stand on one leg with your arms straight out in front for balance.",
    steps: ["Stand on one leg with your arms straight out in front for balance.", "Extend the other leg straight out in front of you.", "Bend your standing knee and push your hips back to lower slowly.", "Keep your chest up and the extended leg off the floor.", "Push through your heel to stand back up, then switch legs."],
    tip: "Go only as low as you can control — depth comes with practice.",
    mistake: "Rounding your lower back or letting the standing knee cave inward."
  },
  {
    id: "frog-squats",
    name: "Frog Squats",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://assets.mixkit.co/videos/44438/44438-720.mp4",
    videoSource: "Mixkit — Woman and man doing squats together in a gym — https://mixkit.co/free-stock-video/woman-and-man-doing-squats-together-in-a-gym-44438/",
    desc: "Stand with feet wider than shoulder-width, toes turned out.",
    steps: ["Stand with feet wider than shoulder-width, toes turned out.", "Lower into a deep squat, keeping your chest up.", "Let your heels lift slightly as you sink low, like a frog.", "Keep your knees tracking out over your toes.", "Push through your feet to stand back up."],
    tip: "Stay on the balls of your feet at the bottom to feel the deep squat.",
    mistake: "Forcing your heels down and rounding your back to get lower."
  },
  {
    id: "skater-squat",
    name: "Skater Squat",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 8, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/49038/49038-720.mp4",
    videoSource: "Mixkit — Mother and daughter doing squat repetitions — https://mixkit.co/free-stock-video/mother-and-daughter-doing-squat-repetitions-49038/",
    desc: "Stand on one leg with the other foot hovering behind you.",
    steps: ["Stand on one leg with the other foot hovering behind you.", "Bend your standing knee and lower your body, reaching the back knee toward the floor behind you.", "Keep your chest up and your front knee over your toes.", "Touch the back knee lightly to the floor if you can.", "Push through your front heel to stand, then switch legs."],
    tip: "Think of it as a reverse lunge that stays on one spot, lowering straight down.",
    mistake: "Leaning your torso far forward instead of staying upright."
  },
  {
    id: "sissy-squat",
    name: "Sissy Squat",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52117/52117-720.mp4",
    videoSource: "Mixkit — A young woman, dressed in a snugly-fitting black outfit doing squats at the gym — https://mixkit.co/free-stock-video/a-young-woman-dressed-in-a-snugly-fitting-black-outfit-doing-52117/",
    desc: "Stand with feet hip-width apart, holding a support for balance if needed.",
    steps: ["Stand with feet hip-width apart, holding a support for balance if needed.", "Rise onto the balls of your feet and lean your body back in one line.", "Bend your knees and lower your body, keeping hips and knees in line.", "Keep your torso and thighs in a straight line as you lower.", "Push through your toes to return to standing."],
    tip: "Keep your body in one straight line from knees to shoulders — don't sit back.",
    mistake: "Bending at the hips like a regular squat instead of leaning back."
  },
  {
    id: "sumo-squat-jump",
    name: "Sumo Squat Jump",
    muscle: "Legs",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 25,
    bundled: false,
    video: "https://assets.mixkit.co/videos/759/759-720.mp4",
    videoSource: "Mixkit — Man and woman doing box jump — https://mixkit.co/free-stock-video/man-and-woman-doing-box-jump-759/",
    desc: "Stand in a wide sumo stance with toes turned out.",
    steps: ["Stand in a wide sumo stance with toes turned out.", "Lower into a deep sumo squat with your chest up.", "Jump up explosively from the squat, extending your legs.", "Land softly back into the wide squat stance.", "Absorb the landing with bent knees, then jump again."],
    tip: "Land softly on the balls of your feet and sink straight back into the squat.",
    mistake: "Landing with knees caving inward or on straight legs."
  },
  {
    id: "dumbbell-step-ups",
    name: "Dumbbell Step-Ups",
    muscle: "Legs",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://assets.mixkit.co/videos/40758/40758-720.mp4",
    videoSource: "Mixkit — Exercising by climbing the steps of some bleachers — https://mixkit.co/free-stock-video/exercising-by-climbing-the-steps-of-some-bleachers-40758/",
    desc: "Hold a dumbbell in each hand at your sides.",
    steps: ["Hold a dumbbell in each hand at your sides.", "Stand facing a sturdy step or low box.", "Place one foot flat on the step and push through your heel to lift up.", "Stand tall on the step without pushing off the floor foot.", "Step back down with control, then switch legs."],
    tip: "Keep your torso upright and don't lean forward as you step up.",
    mistake: "Pushing off the floor foot instead of driving through the foot on the step."
  },
  {
    id: "bench-dips",
    name: "Bench Dips",
    muscle: "Arms",
    equipment: "Chair",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8401319/8401319-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — Man Doing Reverse Pushups Outside A Building by RDNE Stock project — https://www.pexels.com/video/man-doing-reverse-pushups-outside-a-building-8401319/",
    desc: "Sit on the edge of a sturdy bench or chair with hands beside your hips, fingers forward.",
    steps: ["Sit on the edge of a sturdy bench or chair with hands beside your hips, fingers forward.", "Walk your feet out and lift your hips off the bench, arms straight.", "Bend your elbows to lower your body until your upper arms are about parallel to the floor.", "Keep your back close to the bench and your chest up.", "Press through your palms to straighten your arms and return to the start."],
    tip: "Keep your elbows pointing back, not flaring out to the sides.",
    mistake: "Shrugging your shoulders up toward your ears and letting your hips drift away from the bench."
  },
  {
    id: "dumbbell-bicep-curls",
    name: "Dumbbell Bicep Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5319430/5319430-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Working Out Using Dumbbell by Tima Miroshnichenko — https://www.pexels.com/video/a-man-working-out-using-dumbbell-5319430/",
    desc: "Stand tall with a dumbbell in each hand, arms at your sides, palms facing forward.",
    steps: ["Stand tall with a dumbbell in each hand, arms at your sides, palms facing forward.", "Keep your elbows pinned to your sides and your upper arms still.", "Curl the dumbbells up toward your shoulders by bending your elbows.", "Squeeze your biceps briefly at the top.", "Lower the dumbbells slowly back to the start."],
    tip: "Lower the weight for a full 2 seconds to keep tension on the biceps.",
    mistake: "Swinging your torso or elbows forward to lift a weight that is too heavy."
  },
  {
    id: "hammer-curls",
    name: "Hammer Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6389045/6389045-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Woman Doing Alternating Bicep Curls by Tima Miroshnichenko — https://www.pexels.com/video/woman-doing-alternating-bicep-curls-6389045/",
    desc: "Stand tall holding a dumbbell in each hand with palms facing your thighs.",
    steps: ["Stand tall holding a dumbbell in each hand with palms facing your thighs.", "Keep your elbows close to your sides throughout the set.", "Curl one dumbbell up toward your shoulder, keeping your palm facing inward.", "Lower it with control, then curl the other arm.", "Alternate arms for the full set."],
    tip: "Keep your wrists straight and in line with your forearms the whole time.",
    mistake: "Letting your palms rotate outward, which turns it into a regular curl."
  },
  {
    id: "concentration-curls",
    name: "Concentration Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4921646/4921646-hd_1066_1920_25fps.mp4",
    videoSource: "Pexels — A Man Working Out in the Gym by Antoni Shkraba — https://www.pexels.com/video/a-man-working-out-in-the-gym-4921646/",
    desc: "Sit on a bench with your feet flat and knees apart, holding a dumbbell in one hand.",
    steps: ["Sit on a bench with your feet flat and knees apart, holding a dumbbell in one hand.", "Rest the back of your working arm against the inside of your thigh.", "Let the dumbbell hang straight down toward the floor.", "Curl the weight up toward your shoulder without moving your upper arm.", "Lower it slowly, then finish all reps before switching arms."],
    tip: "Use a light weight and a slow tempo — this move is about isolation, not load.",
    mistake: "Leaning back or swinging your shoulder to help lift the weight."
  },
  {
    id: "overhead-dumbbell-tricep-extension",
    name: "Overhead Dumbbell Tricep Extension",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6296281/6296281-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — A Man Working Out by Pavel Danilyuk — https://www.pexels.com/video/a-man-working-out-6296281/",
    desc: "Stand or sit tall holding one dumbbell with both hands above your head.",
    steps: ["Stand or sit tall holding one dumbbell with both hands above your head.", "Keep your elbows close to your ears and your core braced.", "Lower the dumbbell behind your head by bending your elbows.", "Stop when your forearms are about parallel to the floor.", "Extend your arms to press the dumbbell back overhead."],
    tip: "Keep your upper arms still — only your forearms should move.",
    mistake: "Letting your elbows flare wide or arching your lower back."
  },
  {
    id: "dumbbell-kickbacks",
    name: "Dumbbell Kickbacks",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5319435/5319435-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Working Out Using Dumbbell by Tima Miroshnichenko — https://www.pexels.com/video/a-man-working-out-using-dumbbell-5319435/",
    desc: "Hold a dumbbell in one hand and hinge forward at the hips with a flat back.",
    steps: ["Hold a dumbbell in one hand and hinge forward at the hips with a flat back.", "Brace your free hand on a bench and tuck your working elbow tight to your side.", "With your upper arm still, extend your forearm straight back until your arm is straight.", "Squeeze your triceps at the end of the movement.", "Bend your elbow to return slowly, then finish all reps before switching arms."],
    tip: "Pause for a second at full extension to feel the triceps contract.",
    mistake: "Swinging the dumbbell or dropping your elbow during the rep."
  },
  {
    id: "band-bicep-curls",
    name: "Band Bicep Curls",
    muscle: "Arms",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5726683/5726683-uhd_4096_2160_25fps.mp4",
    videoSource: "Pexels — A Person Working Out in the Room by Kaboompics — https://www.pexels.com/video/a-person-working-out-in-the-room-5726683/",
    desc: "Stand on the middle of the resistance band with feet hip-width apart.",
    steps: ["Stand on the middle of the resistance band with feet hip-width apart.", "Hold a handle in each hand with palms facing forward.", "Keep your elbows pinned to your sides.", "Curl your hands up toward your shoulders by bending your elbows.", "Lower slowly until your arms are straight again."],
    tip: "Stand wider on the band to increase resistance, narrower to make it easier.",
    mistake: "Letting your elbows drift forward as you curl."
  },
  {
    id: "band-tricep-pushdown",
    name: "Band Tricep Pushdown",
    muscle: "Arms",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5319423/5319423-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Man Doing Push-Down Exercise by Tima Miroshnichenko — https://www.pexels.com/video/man-doing-push-down-exercise-5319423/",
    desc: "Anchor the band high on a door anchor or pull-up bar and grip it with both hands.",
    steps: ["Anchor the band high on a door anchor or pull-up bar and grip it with both hands.", "Stand facing the anchor with elbows tucked tight to your sides.", "Start with your hands near chest height and forearms bent.", "Push the band down until your arms are fully straight.", "Return slowly until your forearms are bent again."],
    tip: "Keep your elbows glued to your ribs for the whole set.",
    mistake: "Leaning your whole body into the push instead of using your triceps."
  },
  {
    id: "band-hammer-curls",
    name: "Band Hammer Curls",
    muscle: "Arms",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326763/6326763-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Men Working Out Together Using a Resistance Band by Pavel Danilyuk — https://www.pexels.com/video/men-working-out-together-using-a-resistance-band-6326763/",
    desc: "Stand on the middle of the band with feet hip-width apart.",
    steps: ["Stand on the middle of the band with feet hip-width apart.", "Hold a handle in each hand with palms facing each other.", "Keep your elbows close to your sides.", "Curl your hands up toward your shoulders without rotating your wrists.", "Lower with control back to the start."],
    tip: "Keep your thumbs on top of the handles and your wrists neutral.",
    mistake: "Rotating your palms upward, which turns it into a regular band curl."
  },
  {
    id: "incline-dumbbell-curls",
    name: "Incline Dumbbell Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/15528204/15528204-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Doing Biceps Exercises with Dumbbells at the Gym by Markofit Production — https://www.pexels.com/video/a-man-doing-biceps-exercises-with-dumbbells-at-the-gym-15528204/",
    desc: "Set a bench to about a 45-degree incline and sit back with a dumbbell in each hand.",
    steps: ["Set a bench to about a 45-degree incline and sit back with a dumbbell in each hand.", "Let your arms hang straight down behind your torso, palms facing forward.", "Curl both dumbbells up toward your shoulders, keeping your upper arms still.", "Squeeze at the top, then lower slowly for 2 to 3 seconds.", "Feel the stretch in your biceps at the bottom of each rep."],
    tip: "Go lighter than your standing curl — the stretch makes this move harder.",
    mistake: "Sitting up or swinging the weights to get them moving."
  },
  {
    id: "zottman-curls",
    name: "Zottman Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/35181463/14904461_3840_2160_60fps.mp4",
    videoSource: "Pexels — Man Performing Bicep Curls in Gym by Instituto Alpha Fitness — https://www.pexels.com/video/man-performing-bicep-curls-in-gym-35181463/",
    desc: "Stand tall holding a dumbbell in each hand, palms facing forward.",
    steps: ["Stand tall holding a dumbbell in each hand, palms facing forward.", "Curl the weights up like a normal bicep curl.", "At the top, rotate your wrists so your palms face down.", "Lower the weights slowly with your palms facing down.", "At the bottom, rotate your palms forward again and repeat."],
    tip: "Control the lowering phase — that is where the forearms do the most work.",
    mistake: "Rushing the lowering phase or letting your elbows swing forward."
  },
  {
    id: "close-grip-push-up",
    name: "Close-Grip Push-Up",
    muscle: "Arms",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6296442/6296442-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Doing Push Ups by Pavel Danilyuk — https://www.pexels.com/video/a-man-doing-push-ups-6296442/",
    desc: "Start in a high plank with your hands close together under your chest.",
    steps: ["Start in a high plank with your hands close together under your chest.", "Keep your body in a straight line from head to heels.", "Bend your elbows and lower your chest toward your hands, elbows tucked close.", "Stop just before your chest touches the floor.", "Press through your palms to return to the start."],
    tip: "Imagine squeezing your elbows toward your ribs as you lower.",
    mistake: "Letting your elbows flare wide or your hips sag."
  },
  {
    id: "tiger-bend-push-up",
    name: "Tiger Bend Push-Up",
    muscle: "Arms",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 8, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6389834/6389834-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Man Doing Push-Ups by Tima Miroshnichenko — https://www.pexels.com/video/man-doing-push-ups-6389834/",
    desc: "Start in a forearm plank with elbows under your shoulders.",
    steps: ["Start in a forearm plank with elbows under your shoulders.", "Keep your body straight and your core tight.", "Press through your palms to push up onto your hands, one arm at a time.", "Straighten your arms fully into a high plank.", "Lower back down onto your forearms with control and repeat."],
    tip: "Move slowly through the forearm-to-hands transition — that is the hardest part.",
    mistake: "Letting your hips rise or rock side to side during the transition."
  },
  {
    id: "dumbbell-skull-crushers",
    name: "Dumbbell Skull Crushers",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6286166/6286166-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — Woman Doing Tricep Extensions by Gustavo Fring — https://www.pexels.com/video/woman-doing-tricep-extensions-6286166/",
    desc: "Lie on a flat bench holding a dumbbell in each hand, arms extended above your chest.",
    steps: ["Lie on a flat bench holding a dumbbell in each hand, arms extended above your chest.", "Keep your palms facing each other and your upper arms still.", "Bend your elbows to lower the dumbbells toward the sides of your head.", "Stop when your forearms are just past parallel to the floor.", "Extend your arms to press the dumbbells back up."],
    tip: "Keep your elbows shoulder-width apart and pointed at the ceiling.",
    mistake: "Letting your elbows drift outward or lowering the weights toward your face."
  },
  {
    id: "band-overhead-extension",
    name: "Band Overhead Extension",
    muscle: "Arms",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5726682/5726682-uhd_4096_2160_25fps.mp4",
    videoSource: "Pexels — A Man Doing Triceps Extensions Using a Resistance Band by Kaboompics — https://www.pexels.com/video/a-man-doing-triceps-extensions-using-a-resistance-band-5726682/",
    desc: "Hold the band behind your back with one hand low and the other overhead.",
    steps: ["Hold the band behind your back with one hand low and the other overhead.", "Grip the band overhead with both hands and extend your arms straight up.", "Keep your elbows close to your ears and your core braced.", "Bend your elbows to lower your hands behind your head.", "Extend your arms to press back up."],
    tip: "Keep your upper arms still and close to your head throughout.",
    mistake: "Letting your elbows flare out or arching your lower back."
  },
  {
    id: "towel-bicep-curl",
    name: "Towel Bicep Curl",
    muscle: "Arms",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 10,
    bundled: false,
    video: "https://videos.pexels.com/video-files/27629557/12188876_1920_1080_25fps.mp4",
    videoSource: "Pexels — Strong muscular guy workout his arms in the gym by Markofit Production — https://www.pexels.com/video/strong-muscular-guy-workout-his-arms-in-the-gym-27629557/",
    desc: "Loop a towel under one foot and hold both ends with one hand.",
    steps: ["Loop a towel under one foot and hold both ends with one hand.", "Stand tall with your elbow pinned to your side.", "Pull the towel ends up toward your shoulder by bending your elbow.", "Resist with your foot on the towel to create tension.", "Lower slowly and repeat, then switch arms."],
    tip: "Press down harder with your foot to make the curl tougher.",
    mistake: "Letting your elbow drift forward or shrugging your shoulder."
  },
  {
    id: "dumbbell-wrist-curls",
    name: "Dumbbell Wrist Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 8,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5319426/5319426-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Man Doing Arm Workout at Gym by Tima Miroshnichenko — https://www.pexels.com/video/man-doing-arm-workout-at-gym-5319426/",
    desc: "Sit on a bench holding a light dumbbell in one hand, palm facing up.",
    steps: ["Sit on a bench holding a light dumbbell in one hand, palm facing up.", "Rest your forearm on your thigh with your wrist just past your knee.", "Let the dumbbell roll down toward your fingers.", "Curl your wrist up as high as you can.", "Lower slowly and repeat, then switch hands."],
    tip: "Move only your wrist — keep your forearm flat on your thigh.",
    mistake: "Using a heavy dumbbell and lifting your whole forearm."
  },
  {
    id: "reverse-curls",
    name: "Reverse Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4108254/4108254-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Doing Exercise for Biceps by Cliff Booth — https://www.pexels.com/video/a-man-doing-exercise-for-biceps-4108254/",
    desc: "Stand tall holding a dumbbell in each hand with palms facing down.",
    steps: ["Stand tall holding a dumbbell in each hand with palms facing down.", "Keep your elbows pinned to your sides.", "Curl the dumbbells up toward your shoulders with your palms still facing down.", "Squeeze briefly at the top.", "Lower slowly back to the start."],
    tip: "Use a lighter weight than your regular curl — the overhand grip is weaker.",
    mistake: "Letting your wrists bend back or swinging the weights up."
  },
  {
    id: "cross-body-hammer-curls",
    name: "Cross-Body Hammer Curls",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/36519964/15485464_3840_2160_30fps.mp4",
    videoSource: "Pexels — Young Man Performing Bicep Curl in Gym by NoomaN YolchU — https://www.pexels.com/video/young-man-performing-bicep-curl-in-gym-36519964/",
    desc: "Stand tall holding a dumbbell in each hand with palms facing your thighs.",
    steps: ["Stand tall holding a dumbbell in each hand with palms facing your thighs.", "Curl your right dumbbell up and across your body toward your left shoulder.", "Keep your elbow still and your wrist neutral.", "Lower it slowly, then curl the left dumbbell toward your right shoulder.", "Alternate sides for the full set."],
    tip: "Keep the movement slow and across the body, not straight up.",
    mistake: "Twisting your torso to help lift the weight."
  },
  {
    id: "isometric-bicep-hold",
    name: "Isometric Bicep Hold",
    muscle: "Arms",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 20, unit: "seconds", kcal: 10,
    bundled: false,
    video: "https://videos.pexels.com/video-files/16236762/16236762-hd_1920_1080_60fps.mp4",
    videoSource: "Pexels — Strong man workout his biceps in the gym by Markofit Production — https://www.pexels.com/video/strong-man-workout-his-biceps-in-the-gym-16236762/",
    desc: "Stand tall holding a dumbbell in each hand, palms facing forward.",
    steps: ["Stand tall holding a dumbbell in each hand, palms facing forward.", "Curl the dumbbells up until your elbows are bent at about 90 degrees.", "Hold this position without moving, keeping your elbows pinned to your sides.", "Breathe steadily and keep your shoulders down.", "After the hold, lower the weights slowly and rest."],
    tip: "Pick a weight you can hold with good form for the full 20 seconds.",
    mistake: "Letting your elbows drop or your shoulders creep up as you tire."
  },
  {
    id: "dumbbell-shoulder-press",
    name: "Dumbbell Shoulder Press",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 18,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4367541/4367541-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — A Man Doing Dumbbell Shoulder Press by Pavel Danilyuk — https://www.pexels.com/video/a-man-doing-dumbbell-shoulder-press-4367541/",
    desc: "Stand tall with a dumbbell in each hand at shoulder height, palms facing forward.",
    steps: ["Stand tall with a dumbbell in each hand at shoulder height, palms facing forward.", "Brace your core and keep your back straight.", "Press both dumbbells overhead until your arms are fully extended.", "Lower them slowly back to shoulder height.", "Repeat for the set without letting the weights touch your shoulders."],
    tip: "Keep your ribs down and avoid arching your lower back as you press.",
    mistake: "Using momentum or swinging the weights up instead of pressing with control."
  },
  {
    id: "dumbbell-lateral-raises",
    name: "Dumbbell Lateral Raises",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5319101/5319101-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Working Out Using Dumbbell by Tima Miroshnichenko — https://www.pexels.com/video/a-man-working-out-using-dumbbell-5319101/",
    desc: "Stand tall with a dumbbell in each hand at your sides, palms facing your thighs.",
    steps: ["Stand tall with a dumbbell in each hand at your sides, palms facing your thighs.", "Keep a slight bend in your elbows.", "Raise both arms out to the sides until they reach shoulder height.", "Pause briefly at the top.", "Lower the dumbbells slowly back to your sides."],
    tip: "Lead with your elbows and stop at shoulder height to keep the work on the side delts.",
    mistake: "Shrugging your shoulders or swinging the weights up with momentum."
  },
  {
    id: "arm-circles",
    name: "Arm Circles",
    muscle: "Shoulders",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 15, unit: "reps", kcal: 8,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52118/52118-720.mp4",
    videoSource: "Mixkit — A young woman doing circular movements with his arms before her fitness routine training — https://mixkit.co/free-stock-video/a-young-woman-doing-circular-movements-with-his-arms-before-52118/",
    desc: "Stand tall with your feet shoulder-width apart.",
    steps: ["Stand tall with your feet shoulder-width apart.", "Extend both arms straight out to the sides at shoulder height.", "Make small, slow circles forward with your arms.", "Reverse direction and circle backward for the same count."],
    tip: "Keep the circles small and controlled to warm up the shoulder joint.",
    mistake: "Letting the arms drop below shoulder height during the circles."
  },
  {
    id: "downward-dog-to-plank",
    name: "Downward Dog to Plank",
    muscle: "Shoulders",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 10, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://assets.mixkit.co/videos/892/892-720.mp4",
    videoSource: "Mixkit — Upward and downward facing dog — https://mixkit.co/free-stock-video/upward-and-downward-facing-dog-892/",
    desc: "Start in downward dog with hips high and heels reaching toward the floor.",
    steps: ["Start in downward dog with hips high and heels reaching toward the floor.", "Shift your weight forward into a high plank, shoulders over wrists.", "Hold the plank briefly with your body in one straight line.", "Push your hips back up into downward dog.", "Repeat the flow slowly and smoothly."],
    tip: "Move slowly and keep your core tight through the shift between poses.",
    mistake: "Letting your hips sag in the plank position."
  },
  {
    id: "dumbbell-shrugs",
    name: "Dumbbell Shrugs",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5319436/5319436-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Working Out Using Dumbbell by Tima Miroshnichenko — https://www.pexels.com/video/a-man-working-out-using-dumbbell-5319436/",
    desc: "Stand tall with a dumbbell in each hand at your sides, arms straight.",
    steps: ["Stand tall with a dumbbell in each hand at your sides, arms straight.", "Lift your shoulders straight up toward your ears.", "Squeeze at the top for a brief pause.", "Lower your shoulders slowly back down.", "Repeat without bending your elbows."],
    tip: "Lift straight up and squeeze the traps at the top of each rep.",
    mistake: "Rolling your shoulders in circles instead of lifting them straight up."
  },
  {
    id: "handstand-push-up-wall",
    name: "Handstand Push-Up (Wall)",
    muscle: "Shoulders",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 6, unit: "reps", kcal: 22,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6571882/6571882-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6571882/",
    videoNote: "APPROX: handstand shown; push-up bend not confirmed.",
    desc: "Face a wall and place your hands shoulder-width apart, about 15 cm from it.",
    steps: ["Face a wall and place your hands shoulder-width apart, about 15 cm from it.", "Kick up into a handstand with your heels resting lightly on the wall.", "Keep your arms straight and your body in one line.", "Bend your elbows to lower your head toward the floor.", "Press back up until your arms are straight."],
    tip: "Keep your core tight and ribs down — do not arch your lower back.",
    mistake: "Letting the lower back arch and the ribs flare out."
  },
  {
    id: "dumbbell-front-raises",
    name: "Dumbbell Front Raises",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/31622706/13475132_3840_2160_60fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/31622706/",
    videoNote: "APPROX: dumbbells held forward at shoulder height; full raise arc not confirmed.",
    desc: "Stand tall holding a dumbbell in each hand in front of your thighs.",
    steps: ["Stand tall holding a dumbbell in each hand in front of your thighs.", "Raise both arms straight forward to shoulder height.", "Keep a soft bend in your elbows.", "Lower slowly back down.", "Repeat."],
    tip: "Raise to shoulder height only — higher shifts the work away from the front delts.",
    mistake: "Swinging the weights up with momentum."
  },
  {
    id: "dumbbell-rear-delt-fly",
    name: "Dumbbell Rear Delt Fly",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/27831611/12237289_3840_2160_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/27831611/",
    videoNote: "APPROX: cable reverse fly shown, not a dumbbell bent-over fly.",
    desc: "Hinge forward with a flat back, dumbbells hanging below your chest.",
    steps: ["Hinge forward with a flat back, dumbbells hanging below your chest.", "With a slight bend in your elbows, raise both arms out to the sides.", "Squeeze your shoulder blades together at the top.", "Lower slowly back down."],
    tip: "Lead with your elbows, not your hands.",
    mistake: "Standing up tall and turning it into a back row."
  },
  {
    id: "band-shoulder-press",
    name: "Band Shoulder Press",
    muscle: "Shoulders",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 10,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6892542/6892542-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6892542/",
    videoNote: "APPROX: overhead band press/stretch shown; exact press arc not confirmed.",
    desc: "Stand on the band with feet shoulder-width apart, holding the ends at shoulder height.",
    steps: ["Stand on the band with feet shoulder-width apart, holding the ends at shoulder height.", "Press both hands straight overhead.", "Keep your core braced and ribs down.", "Lower slowly back to your shoulders."],
    tip: "Keep your wrists straight and your elbows under your hands.",
    mistake: "Arching the lower back as you press up."
  },
  {
    id: "band-lateral-raises",
    name: "Band Lateral Raises",
    muscle: "Shoulders",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 10,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326721/6326721-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6326721/",
    videoNote: "APPROX: band held out at shoulder height; lateral raise arc not confirmed.",
    desc: "Stand on the band, holding it with your hands at your sides.",
    steps: ["Stand on the band, holding it with your hands at your sides.", "Raise both arms out to the sides to shoulder height.", "Keep a soft bend in your elbows.", "Lower slowly back down."],
    tip: "Raise to shoulder height — higher shifts tension to the traps.",
    mistake: "Shrugging your shoulders up toward your ears."
  },
  {
    id: "band-face-pulls",
    name: "Band Face Pulls",
    muscle: "Shoulders",
    equipment: "Band",
    level: "Intermediate",
    sets: 3, reps: 15, unit: "reps", kcal: 10,
    bundled: false,
    video: null,
    videoSource: "",
    videoNote: "NO VIDEO FOUND: no suitable band face-pull clip on Pexels/Mixkit.",
    desc: "Anchor the band at face height and hold it with both hands.",
    steps: ["Anchor the band at face height and hold it with both hands.", "Pull the band toward your face, elbows flaring out wide.", "Squeeze your shoulder blades together.", "Return slowly to the start."],
    tip: "Keep your elbows high — level with your shoulders.",
    mistake: "Pulling to your chest instead of your face."
  },
  {
    id: "shoulder-tap-plank",
    name: "Shoulder Tap Plank",
    muscle: "Shoulders",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 20, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/31035751/13265271_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/31035751/",
    videoNote: "APPROX: plank arm movement shown; tap not clearly visible.",
    desc: "Start in a high plank, hands under your shoulders.",
    steps: ["Start in a high plank, hands under your shoulders.", "Lift one hand and tap the opposite shoulder.", "Place it back down without rocking your hips.", "Alternate sides."],
    tip: "Keep your hips level — imagine a glass of water on your back.",
    mistake: "Letting your hips sway side to side."
  },
  {
    id: "pike-hold",
    name: "Pike Hold",
    muscle: "Shoulders",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 30, unit: "seconds", kcal: 8,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4536101/4536101-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/4536101/",
    videoNote: "APPROX: downward-dog-like fold shown — same inverted-V position as a pike hold.",
    desc: "Start in a high plank.",
    steps: ["Start in a high plank.", "Walk your feet toward your hands, lifting your hips high.", "Keep your legs straight and press your heels toward the floor.", "Hold, breathing steadily."],
    tip: "Push the floor away and keep your head between your arms.",
    mistake: "Bending the knees and rounding the back."
  },
  {
    id: "wall-angels",
    name: "Wall Angels",
    muscle: "Shoulders",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 4,
    bundled: false,
    video: null,
    videoSource: "",
    videoNote: "NO VIDEO FOUND: no wall-angels clip on Pexels/Mixkit.",
    desc: "Stand with your back flat against a wall, feet slightly forward.",
    steps: ["Stand with your back flat against a wall, feet slightly forward.", "Press your lower back, head and arms against the wall.", "Raise your arms overhead like a snow angel, keeping contact with the wall.", "Lower slowly back down."],
    tip: "Keep your ribs down and your lower back glued to the wall.",
    mistake: "Letting the lower back arch off the wall."
  },
  {
    id: "dead-bug",
    name: "Dead Bug",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525494/6525494-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6525494/",
    videoNote: "APPROX: clip shows sit-ups on a mat, not a dead bug.",
    desc: "Lie on your back with arms pointing up and hips and knees bent at 90 degrees.",
    steps: ["Lie on your back with arms pointing up and hips and knees bent at 90 degrees.", "Press your lower back firmly into the floor.", "Slowly extend the opposite arm and leg away from your body.", "Return to the start and repeat on the other side."],
    tip: "Exhale as you extend the arm and leg.",
    mistake: "Letting your lower back arch off the floor."
  },
  {
    id: "hollow-body-hold",
    name: "Hollow Body Hold",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 20, unit: "seconds", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525474/6525474-hd_1080_1920_30fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6525474/",
    videoNote: "APPROX: clip shows crunches on a mat, not a hollow-body hold.",
    desc: "Lie on your back and press your lower back into the floor.",
    steps: ["Lie on your back and press your lower back into the floor.", "Lift your shoulders and legs off the floor into a banana shape.", "Extend your arms by your ears or forward.", "Hold the position and breathe steadily."],
    tip: "Start with bent knees if your lower back lifts off the floor.",
    mistake: "Holding your breath or letting your lower back arch."
  },
  {
    id: "flutter-kicks",
    name: "Flutter Kicks",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525490/6525490-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6525490/",
    videoNote: "APPROX: clip shows straight-leg raises, not alternating flutter kicks.",
    desc: "Lie on your back with hands under your hips.",
    steps: ["Lie on your back with hands under your hips.", "Lift both legs a few inches off the floor.", "Alternate small, quick kicks up and down.", "Keep your lower back pressed into the floor."],
    tip: "Keep the kicks small and controlled.",
    mistake: "Letting your hips rock or your back arch."
  },
  {
    id: "toe-touches",
    name: "Toe Touches",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8233945/8233945-uhd_4096_2160_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/8233945/",
    videoNote: "APPROX: clip shows crunches on a mat, not toe touches.",
    desc: "Lie on your back with legs straight up toward the ceiling.",
    steps: ["Lie on your back with legs straight up toward the ceiling.", "Reach your hands toward your toes.", "Lift your shoulders off the floor as you reach.", "Lower slowly back down."],
    tip: "Lift with your abs, not your neck.",
    mistake: "Pulling on your neck or swinging up with momentum."
  },
  {
    id: "reverse-crunches",
    name: "Reverse Crunches",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4265371/4265371-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/4265371/",
    videoNote: "APPROX: clip shows sit-ups/crunches, not reverse crunches.",
    desc: "Lie on your back with knees bent at 90 degrees.",
    steps: ["Lie on your back with knees bent at 90 degrees.", "Lift your hips off the floor toward your chest.", "Lower your hips slowly without letting your feet drop.", "Repeat with control."],
    tip: "Use your lower abs to lift, not momentum.",
    mistake: "Swinging your legs to generate momentum."
  },
  {
    id: "sit-ups",
    name: "Sit-Ups",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8893543/8893543-uhd_2160_4096_24fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/8893543/",
    videoNote: "Sit-ups shown.",
    desc: "Lie on your back with knees bent and feet flat on the floor.",
    steps: ["Lie on your back with knees bent and feet flat on the floor.", "Cross your arms over your chest.", "Sit up until your torso is upright.", "Lower yourself back down slowly."],
    tip: "Move slowly on the way down for more control.",
    mistake: "Yanking your neck or using momentum to sit up."
  },
  {
    id: "v-ups",
    name: "V-Ups",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8233713/8233713-uhd_4096_2160_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/8233713/",
    videoNote: "APPROX: clip shows legs-up reach, close to a V-up.",
    desc: "Lie flat with arms overhead and legs straight.",
    steps: ["Lie flat with arms overhead and legs straight.", "Lift your arms and legs together into a V shape.", "Touch your hands to your feet at the top.", "Lower slowly back to the floor."],
    tip: "Keep your legs straight and move in one smooth motion.",
    mistake: "Bending your knees to cheat the lift."
  },
  {
    id: "plank-jacks",
    name: "Plank Jacks",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://assets.mixkit.co/videos/726/726-720.mp4",
    videoSource: "Mixkit — Woman doing mountain climber exercise — https://mixkit.co/free-stock-video/woman-doing-mountain-climber-exercise-726/",
    desc: "Start in a high plank with hands under your shoulders.",
    steps: ["Start in a high plank with hands under your shoulders.", "Jump both feet out wide.", "Jump both feet back together.", "Keep your hips level throughout."],
    tip: "Keep your core braced and your hips still.",
    mistake: "Letting your hips bounce or sag."
  },
  {
    id: "side-plank-hip-dips",
    name: "Side Plank Hip Dips",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6023266/6023266-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6023266/",
    videoNote: "APPROX: clip shows a side-plank hold (same as bundled side plank); hip dips not shown.",
    desc: "Lie on your side in a side plank on your forearm.",
    steps: ["Lie on your side in a side plank on your forearm.", "Stack your feet and lift your hips into a straight line.", "Lower your hips toward the floor.", "Lift your hips back up to the start."],
    tip: "Keep your body in one straight line from head to feet.",
    mistake: "Letting your hips rotate forward or backward."
  },
  {
    id: "cross-body-crunches",
    name: "Cross-Body Crunches",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8026518/8026518-uhd_4096_2160_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/8026518/",
    videoNote: "APPROX: clip shows crunches, not cross-body crunches.",
    desc: "Lie on your back with knees bent and hands behind your head.",
    steps: ["Lie on your back with knees bent and hands behind your head.", "Lift one shoulder and bring that elbow toward the opposite knee.", "Lower back down with control.", "Alternate sides."],
    tip: "Rotate your torso, don't just lift the elbow.",
    mistake: "Pulling your neck forward with your hands."
  },
  {
    id: "heel-touches",
    name: "Heel Touches",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 11,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6103018/6103018-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6103018/",
    videoNote: "APPROX: generic ab-work clip; heel touches not confirmed.",
    desc: "Lie on your back with knees bent and arms by your sides.",
    steps: ["Lie on your back with knees bent and arms by your sides.", "Lift your shoulders slightly off the mat.", "Reach one hand toward the same-side heel.", "Alternate sides while keeping your shoulders lifted."],
    tip: "Keep your shoulders off the mat for the whole set.",
    mistake: "Rocking side to side with your hips."
  },
  {
    id: "dumbbell-russian-twist",
    name: "Dumbbell Russian Twist",
    muscle: "Core",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/10315283/10315283-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/10315283/",
    videoNote: "APPROX: clip shows a medicine-ball Russian twist (same as bundled); dumbbell not shown.",
    desc: "Sit with knees bent and feet lifted or on the floor.",
    steps: ["Sit with knees bent and feet lifted or on the floor.", "Hold a dumbbell with both hands at your chest.", "Lean back slightly with a straight back.", "Rotate your torso side to side."],
    tip: "Move from your waist and keep your chest up.",
    mistake: "Moving only your arms instead of rotating your torso."
  },
  {
    id: "weighted-sit-ups",
    name: "Weighted Sit-Ups",
    muscle: "Core",
    equipment: "Dumbbell",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/38468279/16336844_2160_3840_30fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/38468279/",
    videoNote: "APPROX: clip shows sit-ups; no weight visible.",
    desc: "Lie on your back with knees bent.",
    steps: ["Lie on your back with knees bent.", "Hold a dumbbell at your chest.", "Sit up fully to an upright position.", "Lower yourself back down slowly."],
    tip: "Keep the weight close to your chest.",
    mistake: "Throwing the weight forward for momentum."
  },
  {
    id: "scissor-kicks",
    name: "Scissor Kicks",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525490/6525490-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6525490/",
    videoNote: "APPROX: clip shows straight-leg raises, not scissor kicks.",
    desc: "Lie on your back with hands under your hips.",
    steps: ["Lie on your back with hands under your hips.", "Lift both legs off the floor.", "Cross them over and under each other in a scissor motion.", "Keep your lower back pressed into the floor."],
    tip: "Keep your legs straight and low.",
    mistake: "Letting your lower back arch off the floor."
  },
  {
    id: "windshield-wipers",
    name: "Windshield Wipers",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 10, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5991877/5991877-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/5991877/",
    videoNote: "APPROX: clip shows a supine T-arms core position; leg-sweep motion not confirmed.",
    desc: "Lie on your back with arms out in a T shape.",
    steps: ["Lie on your back with arms out in a T shape.", "Lift your legs straight up to 90 degrees.", "Lower both legs slowly to one side.", "Return to centre and switch sides."],
    tip: "Keep your shoulders on the floor throughout.",
    mistake: "Dropping your legs too fast or lifting your shoulders."
  },
  {
    id: "hanging-knee-raises",
    name: "Hanging Knee Raises",
    muscle: "Core",
    equipment: "Bar",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4804756/4804756-hd_1920_1080_25fps.mp4",
    videoSource: "Mixkit — Toned Man Performing Pull-ups — https://mixkit.co/free-stock-video/toned-man-performing-pull-ups-100551/",
    videoNote: "Hanging knee raises shown (replaces pull-up clip).",
    desc: "Hang from a bar with arms straight and a firm grip.",
    steps: ["Hang from a bar with arms straight and a firm grip.", "Lift your knees toward your chest.", "Pause briefly at the top.", "Lower slowly without swinging."],
    tip: "Stop any swing before starting each rep.",
    mistake: "Swinging your body or using momentum to lift your knees."
  },
  {
    id: "standing-side-crunch",
    name: "Standing Side Crunch",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4487998/4487998-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/4487998/",
    videoNote: "Standing side bend shown — same lateral flexion as a side crunch.",
    desc: "Stand tall with feet shoulder-width apart.",
    steps: ["Stand tall with feet shoulder-width apart.", "Place your hands behind your head.", "Lift one knee and crunch the same-side elbow toward it.", "Return and repeat on the other side."],
    tip: "Crunch from your obliques and keep your chest open.",
    mistake: "Leaning forward instead of crunching sideways."
  },
  {
    id: "seated-knee-tucks",
    name: "Seated Knee Tucks",
    muscle: "Core",
    equipment: "Chair",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6297107/6297107-uhd_3840_2160_24fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6297107/",
    videoNote: "Seated lean-back start position shown; tuck motion not confirmed.",
    desc: "Sit on the edge of a chair and grip the sides with your hands.",
    steps: ["Sit on the edge of a chair and grip the sides with your hands.", "Lean back slightly with a straight back.", "Extend your legs out in front of you.", "Tuck your knees back toward your chest."],
    tip: "Keep your back straight as you lean back.",
    mistake: "Rounding your lower back or rushing the reps."
  },
  {
    id: "plank-up-downs",
    name: "Plank Up-Downs",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/31035752/13265218_1920_1080_25fps.mp4",
    videoSource: "Mixkit — Young man doing push-ups on the floor — https://mixkit.co/free-stock-video/young-man-doing-push-ups-on-the-floor-5048/",
    videoNote: "Plank up-down transition shown (replaces push-up clip).",
    desc: "Start in a high plank with hands under your shoulders.",
    steps: ["Start in a high plank with hands under your shoulders.", "Lower to a forearm plank one arm at a time.", "Push back up to a high plank one arm at a time.", "Alternate which arm leads each rep."],
    tip: "Keep your hips level and don't rock side to side.",
    mistake: "Letting your hips sway as you switch arms."
  },
  {
    id: "bear-hold",
    name: "Bear Hold",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 20, unit: "seconds", kcal: 13,
    bundled: false,
    video: "https://assets.mixkit.co/videos/4525/4525-720.mp4",
    videoSource: "Mixkit — Father and son doing push-ups together — https://mixkit.co/free-stock-video/father-and-son-doing-push-ups-together-4525/",
    desc: "Start on hands and knees with hands under your shoulders.",
    steps: ["Start on hands and knees with hands under your shoulders.", "Lift your knees a few centimetres off the floor.", "Keep your back flat and your core braced.", "Hold the position and breathe steadily."],
    tip: "Press the floor away and keep your spine neutral.",
    mistake: "Letting your knees drift up or your back sag."
  },
  {
    id: "band-pallof-press",
    name: "Band Pallof Press",
    muscle: "Core",
    equipment: "Band",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6390400/6390400-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6390400/",
    videoNote: "APPROX: clip shows a standing two-handed forward hold with a bar; cable/band not shown.",
    desc: "Anchor a band at chest height and stand sideways to it.",
    steps: ["Anchor a band at chest height and stand sideways to it.", "Hold the band with both hands at your chest.", "Press your arms straight out in front of you.", "Resist the pull, hold briefly, then return."],
    tip: "Brace your core like someone is about to push you.",
    mistake: "Letting the band twist your torso."
  },
  {
    id: "lying-windmill",
    name: "Lying Windmill",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5991877/5991877-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/5991877/",
    videoNote: "APPROX: clip shows a supine T-arms core position; leg-sweep motion not confirmed.",
    desc: "Lie on your back with arms out in a T shape.",
    steps: ["Lie on your back with arms out in a T shape.", "Lift your legs straight up toward the ceiling.", "Lower your legs to one side in a slow, controlled arc.", "Return to centre and switch sides."],
    tip: "Keep the opposite shoulder glued to the floor.",
    mistake: "Bending your knees or rushing the arc."
  },
  {
    id: "boat-pose-hold",
    name: "Boat Pose Hold",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 20, unit: "seconds", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6298141/6298141-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6298141/",
    videoNote: "Boat pose shown (thumbnail-confirmed).",
    desc: "Sit with knees bent and feet on the floor.",
    steps: ["Sit with knees bent and feet on the floor.", "Lean back slightly and lift your feet off the floor.", "Straighten your legs to form a V shape with your torso.", "Reach your arms forward and hold."],
    tip: "Lift your chest and keep your spine long.",
    mistake: "Rounding your back or holding your breath."
  },
  {
    id: "jackknife-sit-ups",
    name: "Jackknife Sit-Ups",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 10, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/29228889/12614993_1920_1080_50fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/29228889/",
    videoNote: "APPROX: clip shows sit-ups, not jackknife sit-ups.",
    desc: "Lie flat with arms extended overhead.",
    steps: ["Lie flat with arms extended overhead.", "Lift your legs and torso together.", "Reach your hands toward your feet at the top.", "Lower slowly back to the floor."],
    tip: "Fold from your hips, not your neck.",
    mistake: "Bending your knees or jerking up with momentum."
  },
  {
    id: "plank-reach",
    name: "Plank Reach",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/31035749/13265242_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/31035749/",
    videoNote: "Plank with one arm reaching forward shown.",
    desc: "Start in a high plank with hands under your shoulders.",
    steps: ["Start in a high plank with hands under your shoulders.", "Reach one arm straight forward.", "Hold briefly without shifting your hips.", "Switch arms and repeat."],
    tip: "Brace hard and keep your hips square to the floor.",
    mistake: "Letting your hips rotate as your arm lifts."
  },
  {
    id: "standing-knee-to-elbow-crunch",
    name: "Standing Knee-to-Elbow Crunch",
    muscle: "Core",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5510121/5510121-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/5510121/",
    videoNote: "APPROX: clip shows a standing knee raise; elbow crunch not shown.",
    desc: "Stand tall with hands behind your head.",
    steps: ["Stand tall with hands behind your head.", "Lift your right knee and crunch your left elbow toward it.", "Return to standing.", "Alternate sides."],
    tip: "Crunch your ribs toward your hip.",
    mistake: "Pulling your neck or hunching forward."
  },
  {
    id: "single-leg-glute-bridge",
    name: "Single-Leg Glute Bridge",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4267359/4267359-uhd_3840_2160_30fps.mp4",
    videoSource: "Pexels — A Woman Exercising Over A Mat At Home by Gustavo Fring — https://www.pexels.com/video/a-woman-exercising-over-a-mat-at-home-4267359/",
    desc: "Lie on your back with knees bent and feet flat, hip-width apart.",
    steps: ["Lie on your back with knees bent and feet flat, hip-width apart.", "Extend one leg straight up toward the ceiling.", "Press through the heel of your supporting foot to lift your hips until shoulders, hips and knee form a straight line.", "Squeeze your glutes hard at the top and hold for 1 second.", "Lower your hips slowly without touching the floor, then repeat and switch legs."],
    tip: "Keep your hips level — don't let one side drop as you lift.",
    mistake: "Arching your lower back instead of squeezing your glutes to lift."
  },
  {
    id: "donkey-kicks",
    name: "Donkey Kicks",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/3126123/3126123-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — A Woman in A Fitness Gym Doing Donkey Kicks Exercise by Pressmaster — https://www.pexels.com/video/a-woman-in-a-fitness-gym-doing-donkey-kicks-exercise-3126123/",
    desc: "Start on all fours with hands under shoulders and knees under hips.",
    steps: ["Start on all fours with hands under shoulders and knees under hips.", "Brace your core and keep your back flat.", "Keeping your knee bent at 90 degrees, lift one foot up toward the ceiling.", "Squeeze your glute at the top when your thigh is in line with your torso.", "Lower your knee slowly back to the start, then finish reps and switch sides."],
    tip: "Push through your heel as if pressing the ceiling with your foot.",
    mistake: "Letting your lower back arch or your hips twist as the leg lifts."
  },
  {
    id: "fire-hydrants",
    name: "Fire Hydrants",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8520374/8520374-uhd_4096_1680_25fps.mp4",
    videoSource: "Pexels — A Woman Doing a Leg Exercise Outdoors by KoolShooters — https://www.pexels.com/video/a-woman-doing-a-leg-exercise-outdoors-8520374/",
    desc: "Start on all fours with hands under shoulders and knees under hips.",
    steps: ["Start on all fours with hands under shoulders and knees under hips.", "Brace your core and keep your spine neutral.", "Keeping your knee bent at 90 degrees, lift one knee out to the side.", "Raise it until your thigh is about parallel to the floor.", "Pause briefly, then lower with control; finish reps and switch sides."],
    tip: "Keep your hips square to the floor — only the working leg moves.",
    mistake: "Rocking your torso or leaning away to lift the leg higher."
  },
  {
    id: "clamshells",
    name: "Clamshells",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525490/6525490-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Side View Of Woman Exercising Legs by Polina Tankilevitch — https://www.pexels.com/video/side-view-of-woman-exercising-legs-6525490/",
    desc: "Lie on your side with hips and shoulders stacked and knees bent about 45 degrees.",
    steps: ["Lie on your side with hips and shoulders stacked and knees bent about 45 degrees.", "Rest your head on your lower arm and keep your feet together.", "Brace your core and keep your hips still.", "Lift your top knee open like a clamshell while your heels stay together.", "Pause at the top, then lower slowly; finish reps and switch sides."],
    tip: "Don't let your pelvis roll backward as the knee opens.",
    mistake: "Lifting the knee so high that your hips roll open."
  },
  {
    id: "hip-thrust",
    name: "Hip Thrust",
    muscle: "Glutes",
    equipment: "Bar",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 20,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4859732/4859732-uhd_3840_2160_25fps.mp4",
    videoSource: "Pexels — Couple Working Out Together by Ketut Subiyanto — https://www.pexels.com/video/couple-working-out-together-4859732/",
    desc: "Sit on the floor with your upper back against a bench, knees bent and feet flat.",
    steps: ["Sit on the floor with your upper back against a bench, knees bent and feet flat.", "Roll a barbell over your hips, using a pad for comfort.", "Drive through your heels to lift your hips until your torso and thighs form a straight line.", "Squeeze your glutes hard at the top for 1–2 seconds.", "Lower your hips slowly back down with control."],
    tip: "Tuck your chin slightly and keep your ribs down to avoid arching your back.",
    mistake: "Overextending your lower back at the top instead of squeezing your glutes."
  },
  {
    id: "frog-pumps",
    name: "Frog Pumps",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525487/6525487-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Woman Doing Glute Bridge Exercise by Polina Tankilevitch — https://www.pexels.com/video/woman-doing-glute-bridge-exercise-6525487/",
    desc: "Lie on your back, bring the soles of your feet together and let your knees fall open like a frog.",
    steps: ["Lie on your back, bring the soles of your feet together and let your knees fall open like a frog.", "Rest your arms by your sides, palms down.", "Press through the outer edges of your feet to lift your hips.", "Squeeze your glutes hard at the top.", "Lower slowly, keeping your feet together throughout."],
    tip: "Keep the movement small and controlled — focus on the glute squeeze, not height.",
    mistake: "Letting your knees cave inward or your feet come apart at the top."
  },
  {
    id: "band-glute-bridge",
    name: "Band Glute Bridge",
    muscle: "Glutes",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4267358/4267358-uhd_3840_2160_30fps.mp4",
    videoSource: "Pexels — Woman Exercising by Gustavo Fring — https://www.pexels.com/video/woman-exercising-4267358/",
    desc: "Loop a resistance band just above your knees.",
    steps: ["Loop a resistance band just above your knees.", "Lie on your back with knees bent and feet flat, hip-width apart.", "Press your knees slightly outward against the band.", "Drive through your heels to lift your hips into a straight line from shoulders to knees.", "Squeeze your glutes at the top, then lower slowly."],
    tip: "Keep constant outward pressure on the band through the whole rep.",
    mistake: "Letting your knees collapse inward as you lift."
  },
  {
    id: "band-kickbacks",
    name: "Band Kickbacks",
    muscle: "Glutes",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 14,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525525/6525525-hd_1080_1920_30fps.mp4",
    videoSource: "Pexels — Woman Working Out by Polina Tankilevitch — https://www.pexels.com/video/woman-working-out-6525525/",
    desc: "Start on all fours with a loop band around your thighs just above the knees.",
    steps: ["Start on all fours with a loop band around your thighs just above the knees.", "Brace your core and keep your back flat.", "Keeping your knee bent, drive one foot up and back against the band.", "Squeeze your glute at the top.", "Lower slowly with control; finish reps and switch sides."],
    tip: "Move slowly — the band should stay tight through the whole rep.",
    mistake: "Swinging the leg or arching your back to get more height."
  },
  {
    id: "rainbow-kicks",
    name: "Rainbow Kicks",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5025790/5025790-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Woman Exercising Outdoors by olia danilevich — https://www.pexels.com/video/woman-exercising-outdoors-5025790/",
    desc: "Start on all fours with hands under shoulders and knees under hips.",
    steps: ["Start on all fours with hands under shoulders and knees under hips.", "Extend one leg straight out behind you.", "Sweep the leg in a wide arc over to the opposite side, like drawing a rainbow.", "Tap the floor lightly, then sweep it back across to the starting side.", "Keep your hips square and core tight throughout, then switch sides."],
    tip: "Keep the working leg straight and move from the hip, not the lower back.",
    mistake: "Letting your hips rotate or your torso twist with the leg."
  },
  {
    id: "standing-kickbacks",
    name: "Standing Kickbacks",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 13,
    bundled: false,
    video: "https://videos.pexels.com/video-files/7477907/7477907-uhd_2160_3840_24fps.mp4",
    videoSource: "Pexels — Women Using Resistance Band for Leg Workout by Angela Roma — https://www.pexels.com/video/women-using-resistance-band-for-leg-workout-7477907/",
    desc: "Stand tall, holding a wall or chair lightly for balance.",
    steps: ["Stand tall, holding a wall or chair lightly for balance.", "Shift your weight onto one leg with a soft knee.", "Keeping the other leg straight, kick it straight back behind you.", "Squeeze your glute at the top without leaning forward.", "Lower slowly with control; finish reps and switch sides."],
    tip: "Keep your torso upright and your standing knee soft, not locked.",
    mistake: "Leaning your chest forward or swinging the leg for momentum."
  },
  {
    id: "banded-lateral-walk",
    name: "Banded Lateral Walk",
    muscle: "Glutes",
    equipment: "Band",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 15,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4838220/4838220-uhd_2160_3840_24fps.mp4",
    videoSource: "Pexels — Woman Doing Squats by Anna Shvets — https://www.pexels.com/video/woman-doing-squats-4838220/",
    desc: "Place a loop band just above your knees or around your ankles.",
    steps: ["Place a loop band just above your knees or around your ankles.", "Stand with feet hip-width apart, knees slightly bent, chest up.", "Step sideways with one foot, keeping tension on the band.", "Follow with the other foot, keeping the band taut — don't let your feet come together.", "Take 10–12 steps one way, then walk back the other way."],
    tip: "Stay low in a quarter-squat and keep your toes pointing forward.",
    mistake: "Letting your feet come together and the band go slack between steps."
  },
  {
    id: "glute-bridge-hold",
    name: "Glute Bridge Hold",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 30, unit: "seconds", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525487/6525487-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Woman Doing Glute Bridge Exercise by Polina Tankilevitch — https://www.pexels.com/video/woman-doing-glute-bridge-exercise-6525487/",
    desc: "Lie on your back with knees bent, feet flat and hip-width apart, arms by your sides.",
    steps: ["Lie on your back with knees bent, feet flat and hip-width apart, arms by your sides.", "Drive through your heels to lift your hips until shoulders, hips and knees form a straight line.", "Squeeze your glutes hard and hold the top position for 30 seconds.", "Breathe steadily — don't hold your breath.", "Lower slowly and rest briefly before the next hold."],
    tip: "Push the floor away with your heels and keep your ribs down.",
    mistake: "Letting your hips sag or your lower back arch during the hold."
  },
  {
    id: "marching-glute-bridge",
    name: "Marching Glute Bridge",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4267359/4267359-uhd_3840_2160_30fps.mp4",
    videoSource: "Pexels — A Woman Exercising Over A Mat At Home by Gustavo Fring — https://www.pexels.com/video/a-woman-exercising-over-a-mat-at-home-4267359/",
    desc: "Lie on your back with knees bent, feet flat and arms by your sides.",
    steps: ["Lie on your back with knees bent, feet flat and arms by your sides.", "Lift your hips into a full glute bridge and squeeze your glutes.", "While holding the bridge, lift one knee up toward your chest.", "Lower that foot back down, then lift the other knee.", "Keep your hips level and high throughout, alternating sides."],
    tip: "Move slowly — if your hips drop or wobble, pause and reset the bridge.",
    mistake: "Letting one hip drop as the opposite knee lifts."
  },
  {
    id: "side-lying-leg-lifts",
    name: "Side-Lying Leg Lifts",
    muscle: "Glutes",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 12, unit: "reps", kcal: 12,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5025791/5025791-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Woman Exercising Outdoors by olia danilevich — https://www.pexels.com/video/woman-exercising-outdoors-5025791/",
    desc: "Lie on your side with legs straight and stacked, head resting on your lower arm.",
    steps: ["Lie on your side with legs straight and stacked, head resting on your lower arm.", "Brace your core and keep your hips stacked, not rolling.", "Lift the top leg up toward the ceiling, keeping it straight.", "Pause briefly at the top.", "Lower slowly with control; finish reps and switch sides."],
    tip: "Keep your toes pointing forward and your hips stacked the whole time.",
    mistake: "Rolling your pelvis backward or leaning back to lift the leg higher."
  },
  {
    id: "squat-jumps",
    name: "Squat Jumps",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 32,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8859851/8859851-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Man doing a jump squat on a wooden dock by the sea — https://www.pexels.com/video/8859851/",
    desc: "Stand with feet shoulder-width apart, toes slightly out.",
    steps: ["Stand with feet shoulder-width apart, toes slightly out.", "Lower into a deep squat, keeping your chest up and knees behind your toes.", "Swing your arms back, then explode upward, jumping as high as you can.", "Land softly on the balls of your feet and sink straight into the next squat."],
    tip: "Land softly and go straight into the next rep to keep the spring in your legs.",
    mistake: "Letting your knees cave inward on landing."
  },
  {
    id: "star-jumps",
    name: "Star Jumps",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 30,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4859226/4859226-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Two people doing jumping jacks on an urban street — https://www.pexels.com/video/4859226/",
    desc: "Stand with feet together and arms at your sides.",
    steps: ["Stand with feet together and arms at your sides.", "Bend your knees slightly, then jump up explosively.", "Spread your arms and legs wide into a star shape mid-air.", "Land softly with knees bent and feet together, then repeat."],
    tip: "Jump for height and open fully into the star shape at the top.",
    mistake: "Landing stiff-legged with your feet flat."
  },
  {
    id: "bear-crawl",
    name: "Bear Crawl",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 30, unit: "seconds", kcal: 30,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6525469/6525469-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Woman doing a quadruped bear crawl exercise in a white studio — https://www.pexels.com/video/6525469/",
    desc: "Start on all fours with hands under shoulders and knees under hips.",
    steps: ["Start on all fours with hands under shoulders and knees under hips.", "Lift your knees a few centimetres off the floor, keeping your back flat.", "Crawl forward by moving your opposite hand and foot together.", "Keep your hips low and level — don't let them rock side to side."],
    tip: "Take small, controlled steps and keep your back flat like a tabletop.",
    mistake: "Letting your hips rise high or sway with each step."
  },
  {
    id: "lunge-jumps",
    name: "Lunge Jumps",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 12, unit: "reps", kcal: 35,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52316/52316-720.mp4",
    videoSource: "Mixkit — A young shirtless man on his fitness training session doing jumping lunges at the gym — https://mixkit.co/free-stock-video/a-young-shirtless-man-on-his-fitness-training-session-doing-52316/",
    desc: "Start in a deep lunge, front knee bent at 90 degrees, back knee near the floor.",
    steps: ["Start in a deep lunge, front knee bent at 90 degrees, back knee near the floor.", "Keep your torso tall and your core tight.", "Jump explosively and switch your legs mid-air.", "Land softly in the opposite lunge and repeat."],
    tip: "Land with both knees bent to absorb the impact before the next jump.",
    mistake: "Letting your front knee collapse inward on landing."
  },
  {
    id: "broad-jumps",
    name: "Broad Jumps",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 32,
    bundled: false,
    video: "https://assets.mixkit.co/videos/591/591-720.mp4",
    videoSource: "Mixkit — Athlete training for the long jump — https://mixkit.co/free-stock-video/athlete-training-for-the-long-jump-591/",
    desc: "Stand with feet shoulder-width apart, knees slightly bent.",
    steps: ["Stand with feet shoulder-width apart, knees slightly bent.", "Swing your arms back and hinge your hips to load the jump.", "Explode forward, jumping as far as you can.", "Land softly on both feet with bent knees, then turn and repeat."],
    tip: "Jump for distance, not height, and stick the landing before the next rep.",
    mistake: "Landing with straight legs and your weight on your heels."
  },
  {
    id: "lateral-shuffles",
    name: "Lateral Shuffles",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 30, unit: "seconds", kcal: 30,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326806/6326806-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Person doing a lateral leg exercise with a resistance band — https://www.pexels.com/video/6326806/",
    desc: "Stand in a low athletic stance, knees bent, chest up.",
    steps: ["Stand in a low athletic stance, knees bent, chest up.", "Shuffle quickly to one side with short, fast steps.", "Keep your feet from crossing and stay low.", "Plant your outside foot and shuffle back the other way."],
    tip: "Stay low and light on your feet — don't let your feet cross over.",
    mistake: "Standing up tall and crossing your feet as you move."
  },
  {
    id: "fast-feet",
    name: "Fast Feet",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 30, unit: "seconds", kcal: 28,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6114697/6114697-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Athlete doing an agility ladder footwork drill — https://www.pexels.com/video/6114697/",
    desc: "Stand with feet hip-width apart, knees slightly bent, weight on the balls of your feet.",
    steps: ["Stand with feet hip-width apart, knees slightly bent, weight on the balls of your feet.", "Run in place with very short, quick steps.", "Keep your steps low to the ground and your arms pumping.", "Stay light and fast for the full interval."],
    tip: "Keep your steps tiny and quick — speed comes from fast feet, not big strides.",
    mistake: "Taking big, slow steps and bouncing up and down."
  },
  {
    id: "sprawls",
    name: "Sprawls",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Advanced",
    sets: 3, reps: 10, unit: "reps", kcal: 35,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4158865/4158865-hd_1080_1920_24fps.mp4",
    videoSource: "Pexels — Man doing a burpee exercise at home — https://www.pexels.com/video/4158865/",
    desc: "Stand tall with feet shoulder-width apart.",
    steps: ["Stand tall with feet shoulder-width apart.", "Drop into a squat and place your hands on the floor.", "Jump your feet back into a high plank.", "Jump your feet back to your hands and stand up."],
    tip: "Move fast but keep your plank tight — don't let your hips sag.",
    mistake: "Skipping the plank and rushing the feet back in."
  },
  {
    id: "half-burpees",
    name: "Half Burpees",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 32,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4671964/4671964-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Woman doing a burpee in a gym — https://www.pexels.com/video/4671964/",
    desc: "Stand tall, then squat down and place your hands on the floor.",
    steps: ["Stand tall, then squat down and place your hands on the floor.", "Jump your feet back into a high plank position.", "Jump your feet back to your hands.", "Jump up explosively, reaching your arms overhead."],
    tip: "Keep the movement smooth — squat, plank, jump — with no pause in the middle.",
    mistake: "Adding a push-up at the bottom — that makes it a full burpee, not a half burpee."
  },
  {
    id: "cross-jacks",
    name: "Cross Jacks",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 15, unit: "reps", kcal: 28,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5034322/5034322-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — Person Doing Exercise on the Outdoors by Ketut Subiyanto — https://www.pexels.com/video/person-doing-exercise-on-the-outdoors-5034322/",
    desc: "Stand with feet together and arms at your sides.",
    steps: ["Stand with feet together and arms at your sides.", "Jump up and spread your legs wide while crossing your arms in front of your chest.", "Jump again, crossing your legs and opening your arms wide.", "Keep alternating the cross with each jump."],
    tip: "Cross your arms and legs on opposite beats to keep the rhythm smooth.",
    mistake: "Doing plain jumping jacks without crossing your arms and legs."
  },
  {
    id: "squat-thrusts",
    name: "Squat Thrusts",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 32,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8402114/8402114-hd_1080_1920_30fps.mp4",
    videoSource: "Pexels — Woman doing a squat thrust exercise outdoors — https://www.pexels.com/video/8402114/",
    desc: "Stand tall, then squat down and place your hands on the floor.",
    steps: ["Stand tall, then squat down and place your hands on the floor.", "Jump both feet back into a high plank.", "Jump both feet back to your hands.", "Stand up tall and repeat."],
    tip: "Keep your core braced so your body stays straight in the plank.",
    mistake: "Letting your hips pike up or sag in the plank."
  },
  {
    id: "running-in-place",
    name: "Running in Place",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 45, unit: "seconds", kcal: 30,
    bundled: false,
    video: "https://videos.pexels.com/video-files/10042798/10042798-hd_1920_1080_24fps.mp4",
    videoSource: "Pexels — Woman running in place under a concrete structure — https://www.pexels.com/video/10042798/",
    desc: "Stand tall with feet hip-width apart.",
    steps: ["Stand tall with feet hip-width apart.", "Lift one knee up to hip height while pumping the opposite arm.", "Alternate legs quickly, staying on the balls of your feet.", "Keep your torso tall and your steps light."],
    tip: "Drive your knees up and keep a quick, steady rhythm.",
    mistake: "Slapping your feet flat on the floor instead of staying on the balls of your feet."
  },
  {
    id: "tuck-jumps",
    name: "Tuck Jumps",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 30,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326671/6326671-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6326671/",
    videoNote: "APPROX: feet mid-jump shown; knee tuck not confirmed.",
    desc: "Stand with feet shoulder-width apart.",
    steps: ["Stand with feet shoulder-width apart.", "Dip into a quarter squat.", "Jump up explosively, tucking your knees toward your chest.", "Land softly on the balls of your feet."],
    tip: "Land quietly — soft knees absorb the impact.",
    mistake: "Landing stiff-legged with straight knees."
  },
  {
    id: "inchworm-walkouts",
    name: "Inchworm Walkouts",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 8, unit: "reps", kcal: 16,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6437943/6437943-hd_1080_1920_30fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6437943/",
    videoNote: "APPROX: plank phase shown; walkout not confirmed.",
    desc: "Stand tall, then fold forward and place your hands on the floor.",
    steps: ["Stand tall, then fold forward and place your hands on the floor.", "Walk your hands out to a high plank.", "Hold for a second.", "Walk your hands back to your feet and stand up."],
    tip: "Keep your legs as straight as you can while walking out.",
    mistake: "Letting your hips sag in the plank."
  },
  {
    id: "jump-rope",
    name: "Jump Rope",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 3, reps: 60, unit: "seconds", kcal: 35,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4159115/4159115-hd_1080_1920_24fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/4159115/",
    videoNote: "Jump rope shown. Needs a rope (or mime the motion without one).",
    desc: "Hold the rope handles at hip height, elbows close to your body.",
    steps: ["Hold the rope handles at hip height, elbows close to your body.", "Turn the rope with your wrists, not your arms.", "Jump just high enough to clear the rope.", "Land on the balls of your feet."],
    tip: "Keep jumps small and quick — big jumps waste energy.",
    mistake: "Jumping too high and landing flat-footed."
  },
  {
    id: "box-jumps",
    name: "Box Jumps",
    muscle: "Full Body",
    equipment: "Chair",
    level: "Intermediate",
    sets: 3, reps: 10, unit: "reps", kcal: 28,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6389046/6389046-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6389046/",
    videoNote: "APPROX: woman standing on a plyo box; jump itself not fully visible. Use a sturdy box or bench.",
    desc: "Stand facing a sturdy box or bench.",
    steps: ["Stand facing a sturdy box or bench.", "Dip into a quarter squat and swing your arms.", "Jump up and land softly on the box with both feet.", "Step down carefully — never jump down."],
    tip: "Land softly with your knees tracking over your toes.",
    mistake: "Jumping down off the box — always step down."
  },
  {
    id: "frog-jumps",
    name: "Frog Jumps",
    muscle: "Full Body",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 3, reps: 12, unit: "reps", kcal: 26,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6156132/6156132-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels - https://www.pexels.com/video/6156132/",
    videoNote: "APPROX: man in a squat-jump position; forward frog hop not confirmed.",
    desc: "Squat down low with your hands near the floor.",
    steps: ["Squat down low with your hands near the floor.", "Jump forward and up, landing in a deep squat.", "Touch the floor with your hands each rep.", "Keep your chest up."],
    tip: "Land in a controlled squat, not a stiff landing.",
    mistake: "Letting your knees cave inward on landing."
  },
  {
    id: "neck-rolls",
    name: "Neck Rolls",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8343371/8343371-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Stretching His Neck by Kampus Production — https://www.pexels.com/video/a-man-stretching-his-neck-8343371/",
    desc: "Stand or sit tall with shoulders relaxed and arms at your sides.",
    steps: ["Stand or sit tall with shoulders relaxed and arms at your sides.", "Slowly lower your chin toward your chest.", "Roll your head in a slow, wide circle to one side, then up and around.", "Complete the circle, then repeat in the other direction."],
    tip: "Keep the movement slow and smooth, and breathe normally throughout.",
    mistake: "Rolling fast or forcing the head back can strain the neck, so stay gentle."
  },
  {
    id: "shoulder-rolls",
    name: "Shoulder Rolls",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326765/6326765-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Trainer Warming Up the Shoulders by Pavel Danilyuk — https://www.pexels.com/video/trainer-warming-up-the-shoulders-6326765/",
    desc: "Stand tall with feet hip-width apart and arms relaxed.",
    steps: ["Stand tall with feet hip-width apart and arms relaxed.", "Lift your shoulders up toward your ears.", "Roll them back and down in a smooth circle.", "Repeat, then switch to rolling forward."],
    tip: "Squeeze the shoulder blades gently together as the shoulders roll back.",
    mistake: "Shrugging with tense arms turns it into a neck strain instead of a shoulder warm-up."
  },
  {
    id: "arm-swings",
    name: "Arm Swings",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 6,
    bundled: false,
    video: "https://assets.mixkit.co/videos/52118/52118-720.mp4",
    videoSource: "Mixkit — A young woman doing circular movements with his arms before her fitness routine training by Mixkit — https://mixkit.co/free-stock-video/young-woman-doing-circular-movements-with-arms-before-fitness-routine-52118/",
    desc: "Stand tall with feet shoulder-width apart.",
    steps: ["Stand tall with feet shoulder-width apart.", "Swing both arms forward and up to shoulder height, then back behind you.", "Keep the arms straight but relaxed and the movement controlled.", "Let the swing come from the shoulders, not the lower back."],
    tip: "Start with small swings and let them grow wider as the shoulders loosen.",
    mistake: "Forcing the arms high overhead with a stiff back can cause pinching, so stay within a comfortable range."
  },
  {
    id: "cat-cow",
    name: "Cat-Cow",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 5,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5167959/5167959-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — People Doing Cat Cow Exercise by Peggy Anke — https://www.pexels.com/video/people-doing-cat-cow-exercise-5167959/",
    desc: "Start on hands and knees with wrists under shoulders and knees under hips.",
    steps: ["Start on hands and knees with wrists under shoulders and knees under hips.", "Breathe in, drop your belly and lift your head and tailbone for cow.", "Breathe out, round your spine up and tuck your chin for cat.", "Flow slowly between the two positions."],
    tip: "Move with your breath, one slow breath per position change.",
    mistake: "Rushing through the poses or holding your breath takes away the benefit, so slow down."
  },
  {
    id: "downward-dog",
    name: "Downward Dog",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 6,
    bundled: false,
    video: "https://videos.pexels.com/video-files/3760969/3760969-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Footage Of A Woman Doing Exercise by Alexy Almond — https://www.pexels.com/video/footage-of-a-woman-doing-exercise-3760969/",
    desc: "Start on hands and knees, then tuck your toes and lift your hips up and back.",
    steps: ["Start on hands and knees, then tuck your toes and lift your hips up and back.", "Press your hands into the mat and straighten your legs as much as is comfortable.", "Let your head hang relaxed between your arms and keep your back long.", "Hold, breathing steadily, with heels reaching gently toward the floor."],
    tip: "Bend the knees slightly if the hamstrings feel tight, keeping the spine long matters more than straight legs.",
    mistake: "Locking the knees and forcing the heels down can strain the calves, so keep a soft bend if needed."
  },
  {
    id: "cobra-stretch",
    name: "Cobra Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 20, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8480542/8480542-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — People Doing the Cobra Pose at a Yoga Class by Yan Krukau — https://www.pexels.com/video/people-doing-the-cobra-pose-at-a-yoga-class-8480542/",
    desc: "Lie face down with hands under your shoulders and elbows close to your body.",
    steps: ["Lie face down with hands under your shoulders and elbows close to your body.", "Press gently through your hands and lift your chest off the floor.", "Keep your hips and legs relaxed on the mat and look slightly forward.", "Hold without pushing into any sharp lower-back pain."],
    tip: "Lift only as high as feels comfortable, the arms should help, not force, the lift.",
    mistake: "Pushing up too high with straight arms can pinch the lower back, so keep the elbows soft."
  },
  {
    id: "childs-pose",
    name: "Child's Pose",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/7500544/7500544-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Side View of an Elderly Man Doing the Child's Pose by Mikhail Nilov — https://www.pexels.com/video/side-view-of-an-elderly-man-doing-the-child-s-pose-7500544/",
    desc: "Kneel on the floor and sit your hips back toward your heels.",
    steps: ["Kneel on the floor and sit your hips back toward your heels.", "Walk your hands forward and lower your forehead toward the mat.", "Let your arms stretch long in front of you and relax your shoulders.", "Breathe slowly and let the whole body soften."],
    tip: "Widen the knees slightly if it makes the pose more comfortable.",
    mistake: "Forcing the forehead to the floor can strain the neck, so rest it on a folded towel if it does not reach."
  },
  {
    id: "hip-flexor-stretch",
    name: "Hip Flexor Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8449418/8449418-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Flexible Woman Doing Stretching by ArtHouse Studio — https://www.pexels.com/video/flexible-woman-doing-stretching-8449418/",
    desc: "Step into a deep lunge with the front knee bent over the ankle.",
    steps: ["Step into a deep lunge with the front knee bent over the ankle.", "Lower the back knee to the floor and keep your torso tall.", "Gently press the hips forward until you feel a mild stretch at the front of the back hip.", "Hold, then switch sides."],
    tip: "Squeeze the glute of the back leg to deepen the stretch without arching the lower back.",
    mistake: "Leaning the torso forward or arching the back shifts the stretch away from the hip flexor."
  },
  {
    id: "standing-hamstring-stretch",
    name: "Standing Hamstring Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4859728/4859728-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Couple Working Out Together by Ketut Subiyanto — https://www.pexels.com/video/couple-working-out-together-4859728/",
    desc: "Stand tall and place one heel on a low step or box with the leg straight.",
    steps: ["Stand tall and place one heel on a low step or box with the leg straight.", "Keep your back straight and hinge forward from the hips.", "Reach gently toward the raised foot until you feel a mild stretch behind the thigh.", "Hold, then switch legs."],
    tip: "Keep the standing knee soft and the chest open as you fold forward.",
    mistake: "Rounding the back to reach further can strain the spine, so hinge from the hips instead."
  },
  {
    id: "seated-hamstring-stretch",
    name: "Seated Hamstring Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6023267/6023267-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — An Elderly Man Stretching by Kampus Production — https://www.pexels.com/video/an-elderly-man-stretching-6023267/",
    desc: "Sit on the floor with one leg extended straight and the other bent, foot against the inner thigh.",
    steps: ["Sit on the floor with one leg extended straight and the other bent, foot against the inner thigh.", "Sit tall, then hinge forward from the hips toward the extended foot.", "Reach for your shin, ankle or foot, whichever you can reach comfortably.", "Hold, then switch legs."],
    tip: "Lead with your chest, not your head, to keep the spine long.",
    mistake: "Bouncing toward the toes can pull the hamstring, so ease in and hold still."
  },
  {
    id: "standing-quad-stretch",
    name: "Standing Quad Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4455053/4455053-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Woman Bending Her Knees As Warm Up Exercises by Ketut Subiyanto — https://www.pexels.com/video/a-woman-bending-her-knees-as-warm-up-exercises-4455053/",
    desc: "Stand tall near a wall or chair for balance if needed.",
    steps: ["Stand tall near a wall or chair for balance if needed.", "Bend one knee and hold the top of that foot behind you.", "Keep your knees close together and gently press the hips forward.", "Hold, then switch legs."],
    tip: "Keep the standing knee slightly soft and the torso upright.",
    mistake: "Letting the bent knee drift out to the side or arching the back reduces the stretch and strains the knee."
  },
  {
    id: "butterfly-stretch",
    name: "Butterfly Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6296437/6296437-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Man Stretching His Legs by Pavel Danilyuk — https://www.pexels.com/video/a-man-stretching-his-legs-6296437/",
    desc: "Sit on the floor and bring the soles of your feet together.",
    steps: ["Sit on the floor and bring the soles of your feet together.", "Hold your feet with both hands and let your knees fall open toward the floor.", "Sit tall and breathe steadily.", "Gently press the knees down with your elbows only if it feels comfortable."],
    tip: "Bring the feet closer to the body for a deeper stretch, further away for a gentler one.",
    mistake: "Bouncing the knees up and down can irritate the inner thighs, so hold still instead."
  },
  {
    id: "figure-four-stretch",
    name: "Figure-Four Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6023245/6023245-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Woman Exercising by Kampus Production — https://www.pexels.com/video/a-woman-exercising-6023245/",
    desc: "Lie on your back with knees bent and feet flat on the floor.",
    steps: ["Lie on your back with knees bent and feet flat on the floor.", "Cross one ankle over the opposite knee.", "Lift the bottom foot off the floor and hold behind the thigh of the bottom leg.", "Gently pull toward your chest until you feel a stretch in the hip, then switch sides."],
    tip: "Keep the head and shoulders relaxed on the floor and breathe into the stretch.",
    mistake: "Pulling hard on the leg can strain the knee, so use only gentle pressure."
  },
  {
    id: "chest-opener-stretch",
    name: "Chest Opener Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 20, unit: "seconds", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6077273/6077273-uhd_4096_2160_25fps.mp4",
    videoSource: "Pexels — Woman Doing a Stretching by KoolShooters — https://www.pexels.com/video/woman-doing-a-stretching-6077273/",
    desc: "Stand tall and reach both arms behind you toward a wall or bar.",
    steps: ["Stand tall and reach both arms behind you toward a wall or bar.", "Hold the support and step forward slightly until you feel the chest open.", "Keep the shoulders down and the chest lifted.", "Hold and breathe steadily, then release slowly."],
    tip: "Keep the ribs down and the core gently braced so the stretch stays in the chest, not the lower back.",
    mistake: "Arching the lower back to feel more stretch shifts the work away from the chest."
  },
  {
    id: "triceps-stretch",
    name: "Triceps Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 20, unit: "seconds", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/9465406/9465406-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Man Stretching his Back by ROCKETMANN TEAM — https://www.pexels.com/video/man-stretching-his-back-9465406/",
    desc: "Stand or sit tall and raise one arm overhead.",
    steps: ["Stand or sit tall and raise one arm overhead.", "Bend the elbow so the hand reaches down behind your neck.", "Use the other hand to gently press the elbow back and down.", "Hold, then switch arms."],
    tip: "Keep the raised elbow pointing up and the head relaxed, not pushed forward.",
    mistake: "Yanking the elbow behind the head can irritate the shoulder, so press only gently."
  },
  {
    id: "cross-body-shoulder-stretch",
    name: "Cross-Body Shoulder Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 20, unit: "seconds", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8457036/8457036-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — A Sad Woman Exercising Alone by Mikhail Nilov — https://www.pexels.com/video/a-sad-woman-exercising-alone-8457036/",
    desc: "Stand tall and bring one arm straight across your chest.",
    steps: ["Stand tall and bring one arm straight across your chest.", "Use the other hand to gently pull the arm closer to your body.", "Keep the shoulder of the stretching arm down and relaxed.", "Hold, then switch arms."],
    tip: "Keep the arm at shoulder height and the chest open while you hold.",
    mistake: "Shrugging the shoulder up toward the ear turns the stretch into neck tension."
  },
  {
    id: "standing-torso-twist",
    name: "Standing Torso Twist",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 5,
    bundled: false,
    video: "https://videos.pexels.com/video-files/5991814/5991814-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Two Women Stretching Their Body by Kampus Production — https://www.pexels.com/video/two-women-stretching-their-body-5991814/",
    desc: "Stand with feet hip-width apart and arms extended out to the sides.",
    steps: ["Stand with feet hip-width apart and arms extended out to the sides.", "Twist your torso slowly to one side, letting the arms follow.", "Keep your hips facing forward and your knees soft.", "Return to center, then twist to the other side."],
    tip: "Turn from the waist and keep the movement smooth, not jerky.",
    mistake: "Twisting fast or forcing the hips to turn with the torso can strain the lower back."
  },
  {
    id: "forward-leg-swings",
    name: "Forward Leg Swings",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 6,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8457017/8457017-hd_1080_1920_25fps.mp4",
    videoSource: "Pexels — Woman Doing Streching by Mikhail Nilov — https://www.pexels.com/video/woman-doing-streching-8457017/",
    desc: "Stand tall next to a wall or chair and hold it lightly for balance.",
    steps: ["Stand tall next to a wall or chair and hold it lightly for balance.", "Swing one leg forward and back in a smooth, controlled arc.", "Keep the standing leg slightly bent and the torso upright.", "Do all reps on one leg, then switch."],
    tip: "Start with small swings and increase the height only as the hips loosen.",
    mistake: "Kicking the leg high with force can pull the hip, so build the range gradually."
  },
  {
    id: "sideways-leg-swings",
    name: "Sideways Leg Swings",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 6,
    bundled: false,
    video: "https://videos.pexels.com/video-files/7187043/7187043-hd_1920_1080_24fps.mp4",
    videoSource: "Pexels — A Man Stretching His Legs by RDNE Stock project — https://www.pexels.com/video/a-man-stretching-his-legs-7187043/",
    desc: "Stand sideways next to a wall and hold it for balance.",
    steps: ["Stand sideways next to a wall and hold it for balance.", "Swing the outside leg across in front of your body, then out to the side.", "Keep the movement smooth and the standing knee soft.", "Do all reps on one leg, then turn around and switch."],
    tip: "Keep the hips level and let the leg swing from the hip joint, not the lower back.",
    mistake: "Leaning away from the swinging leg throws off balance and loads the standing hip."
  },
  {
    id: "ankle-circles",
    name: "Ankle Circles",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/7297841/7297841-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — Lower Leg Massage by Kindel Media — https://www.pexels.com/video/lower-leg-massage-7297841/",
    desc: "Sit or stand and lift one foot slightly off the floor.",
    steps: ["Sit or stand and lift one foot slightly off the floor.", "Slowly rotate the ankle in a full circle.", "Complete the circles in one direction, then reverse.", "Switch feet and repeat."],
    tip: "Make the circles as round and smooth as you can, moving only the ankle.",
    mistake: "Moving the whole leg instead of the ankle means the joint is not getting the work."
  },
  {
    id: "wrist-circles",
    name: "Wrist Circles",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 10, unit: "reps", kcal: 3,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6111092/6111092-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Man Having Physical Therapy by Kampus Production — https://www.pexels.com/video/man-having-physical-therapy-6111092/",
    desc: "Hold your arms out in front with hands relaxed.",
    steps: ["Hold your arms out in front with hands relaxed.", "Slowly rotate both wrists in full circles.", "Circle in one direction, then reverse.", "Keep the fingers loose and the movement smooth."],
    tip: "Make the circles slow and wide to wake up the whole wrist.",
    mistake: "Flicking the wrists quickly can irritate the joint, so keep it slow and controlled."
  },
  {
    id: "marching-in-place",
    name: "Marching in Place",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 8,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6326749/6326749-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — People Doing Knee Exercise by Pavel Danilyuk — https://www.pexels.com/video/people-doing-knee-exercise-6326749/",
    desc: "Stand tall with arms relaxed at your sides.",
    steps: ["Stand tall with arms relaxed at your sides.", "Lift one knee to hip height, then lower it as the other knee lifts.", "Pump the arms gently in rhythm with the legs.", "Keep a steady, comfortable pace."],
    tip: "Land softly on the ball of the foot to keep the knees happy.",
    mistake: "Stomping hard or leaning back puts extra load on the knees and lower back."
  },
  {
    id: "slow-jog-in-place",
    name: "Slow Jog in Place",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 10,
    bundled: false,
    video: "https://videos.pexels.com/video-files/10042798/10042798-hd_1920_1080_24fps.mp4",
    videoSource: "Pexels — Side View of a Woman Running in Place by Los Muertos Crew — https://www.pexels.com/video/side-view-of-a-woman-running-in-place-10042798/",
    desc: "Stand tall with a slight bend in the knees.",
    steps: ["Stand tall with a slight bend in the knees.", "Jog gently in place, lifting the knees a little and landing softly.", "Swing the arms naturally at your sides.", "Keep breathing steady and the pace easy."],
    tip: "Stay light on your feet and keep the steps small and quick.",
    mistake: "Landing flat-footed and heavy jars the joints, so stay on the balls of the feet."
  },
  {
    id: "standing-side-bends",
    name: "Standing Side Bends",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 20, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/8401383/8401383-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — A Woman in Activewear Stretching Outside a Building by RDNE Stock project — https://www.pexels.com/video/a-woman-in-activewear-stretching-outside-a-building-8401383/",
    desc: "Stand with feet hip-width apart and arms by your sides.",
    steps: ["Stand with feet hip-width apart and arms by your sides.", "Raise one arm overhead and bend slowly to the opposite side.", "Feel a gentle stretch along the side of the body and hold.", "Return to center, then bend to the other side."],
    tip: "Reach long through the fingertips and keep both feet grounded.",
    mistake: "Bending forward instead of sideways, or forcing the bend, strains the lower back."
  },
  {
    id: "worlds-greatest-stretch",
    name: "World's Greatest Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Intermediate",
    sets: 2, reps: 20, unit: "seconds", kcal: 7,
    bundled: false,
    video: "https://videos.pexels.com/video-files/6389562/6389562-hd_1920_1080_25fps.mp4",
    videoSource: "Pexels — Man Doing Stretching by Tima Miroshnichenko — https://www.pexels.com/video/man-doing-stretching-6389562/",
    desc: "Step into a deep lunge with the front knee bent and hands on the floor inside the front foot.",
    steps: ["Step into a deep lunge with the front knee bent and hands on the floor inside the front foot.", "Twist the torso and reach the same-side arm up toward the ceiling.", "Hold, then lower the hand and straighten the front leg briefly to stretch the hamstring.", "Return to the lunge and switch sides."],
    tip: "Keep the back leg straight and strong, and move slowly through each part.",
    mistake: "Rushing the twist or letting the front knee cave inward can strain the knee, so keep it tracking over the toes."
  },
  {
    id: "pigeon-stretch",
    name: "Pigeon Stretch",
    muscle: "Warm-Up",
    equipment: "Bodyweight",
    level: "Beginner",
    sets: 2, reps: 30, unit: "seconds", kcal: 4,
    bundled: false,
    video: "https://videos.pexels.com/video-files/4535162/4535162-hd_1920_1080_30fps.mp4",
    videoSource: "Pexels — Woman Doing Yoga by Vlada Karpovich — https://www.pexels.com/video/woman-doing-yoga-4535162/",
    desc: "Start on hands and knees and bring one knee forward behind the wrist.",
    steps: ["Start on hands and knees and bring one knee forward behind the wrist.", "Extend the other leg straight back and square the hips toward the floor.", "Lower the torso forward over the front leg as far as is comfortable.", "Hold and breathe, then switch sides."],
    tip: "Flex the front foot slightly and keep the hips level to protect the knee.",
    mistake: "Dropping the hip to one side or forcing the front shin flat can twist the knee, so stay square and gentle."
  }
];

/* ---------- Storage ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const getHistory = () => store.get('fitpro_history_v1', []);
const saveWorkout = (minutes, kcal, name) => {
  const h = getHistory();
  h.unshift({ date: new Date().toISOString(), minutes, kcal, name: name || 'Full Body Blast' });
  store.set('fitpro_history_v1', h.slice(0, 50));
};

/* ---------- Navigation ---------- */
const screens = ['home', 'exercises', 'detail', 'workout', 'done', 'progress'];
let currentScreen = 'home';
function pauseAllVideos() { document.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (e) {} }); }
function playVisibleVideo() {
  if (window.hydrateGifImgs) hydrateGifImgs();
  const s = document.querySelector('.screen.active video');
  if (s) { s.play().catch(() => {}); }
}
function showScreen(name) {
  pauseAllVideos();
  currentScreen = name;
  screens.forEach(s => document.getElementById('screen-' + s).classList.toggle('active', s === name));
  document.querySelectorAll('.nav-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.screen === name || (name === 'detail' && b.dataset.screen === 'exercises') || (name === 'done' && b.dataset.screen === 'workout')));
  document.getElementById('bottomNav').style.display = (name === 'workout' || name === 'done') ? 'none' : 'flex';
  window.scrollTo(0, 0);
  setTimeout(playVisibleVideo, 50);
}
document.querySelectorAll('.nav-btn').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.screen === 'workout') { startWorkout(WORKOUT_PLAN); return; }
  if (b.dataset.screen === 'progress') renderProgress();
  showScreen(b.dataset.screen);
}));

/* ---------- Search & filters ---------- */
const filters = { q: '', muscle: 'all', equipment: 'all', level: 'all' };
function filteredExercises() {
  const q = filters.q.trim().toLowerCase();
  return EXERCISES.filter(e => {
    if (filters.muscle !== 'all' && e.muscle !== filters.muscle) return false;
    if (filters.equipment !== 'all' && e.equipment !== filters.equipment) return false;
    if (filters.level !== 'all' && e.level !== filters.level) return false;
    if (q && !(e.name.toLowerCase().includes(q) || e.muscle.toLowerCase().includes(q))) return false;
    return true;
  });
}
function videoHTML(ex, label) {
  const fid = (window.DRIVE_GIFS || {})[ex.id];
  if (fid) {
    const url = 'https://drive.usercontent.google.com/download?id=' + fid + '&export=download';
    return `<div class="demo-stage"><img class="demo-video" data-gif="${ex.id}" src="${url}" alt="${ex.name}"><div class="demo-label">${label || '▶ ANIMATED GIF • DOWNLOADS ONCE, THEN PLAYS OFFLINE'}</div></div>`;
  }
  if (!ex.video) return `<div class="demo-stage"><div style="font-size:64px">${MUSCLE_EMOJI[ex.muscle] || '💪'}</div><div class="demo-label">NO VIDEO FOR THIS EXERCISE — FOLLOW THE STEPS BELOW</div></div>`;
  const badge = ex.bundled ? '▶ ANIMATED GIF • PLAYS OFFLINE' : '▶ REAL VIDEO • STREAMS ONLINE';
  if (ex.bundled) return `<div class="demo-stage"><img class="demo-video" src="${ex.video}" alt="${ex.name}"><div class="demo-label">${label || badge}</div></div>`;
  const poster = ex.poster ? ` poster="${ex.poster}"` : '';
  return `<div class="demo-stage"><video class="demo-video" src="${ex.video}" autoplay muted loop playsinline preload="auto"${poster}></video><div class="demo-label">${label || badge}</div></div>`;
}
function thumbHTML(ex) {
  if (ex.poster) return `<div class="ex-thumb"><img src="${ex.poster}" alt="${ex.name}"><span class="thumb-play">▶</span></div>`;
  return `<div class="ex-thumb ex-emoji">${MUSCLE_EMOJI[ex.muscle] || '💪'}<span class="thumb-play">▶</span></div>`;
}
function exCard(ex) {
  const unit = ex.unit === 'seconds' ? 'sec' : 'reps';
  return `<div class="ex-card" data-id="${ex.id}">
    ${thumbHTML(ex)}
    <div class="ex-info">
      <h3>${ex.name}</h3>
      <p>${ex.sets} sets &bull; ${ex.reps} ${unit} &bull; ${ex.muscle}</p>
      <div class="ex-meta"><span class="tag">${ex.muscle}</span><span class="tag grey">${ex.equipment}</span><span class="tag grey">${ex.level}</span><span class="tag grey">${ex.kcal} kcal</span></div>
    </div>
    <div class="ex-arrow">›</div>
  </div>`;
}
function renderLists() {
  const list = filteredExercises();
  const grouped = filters.q === '' && filters.muscle === 'all';
  let html = '';
  if (!list.length) {
    html = '<p class="empty-note">No exercises match — try a different search or filter.</p>';
  } else if (grouped) {
    MUSCLES.forEach(m => {
      const items = list.filter(e => e.muscle === m);
      if (!items.length) return;
      html += `<h3 class="cat-heading">${MUSCLE_EMOJI[m] || ''} ${m} <span>${items.length}</span></h3>` + items.map(exCard).join('');
    });
  } else {
    html = list.map(exCard).join('');
  }
  document.getElementById('exerciseList').innerHTML = html;
  document.getElementById('resultCount').textContent = list.length + ' of ' + EXERCISES.length + ' exercises';
  document.getElementById('homeExerciseList').innerHTML = ['pushup', 'squat', 'plank'].map(id => EXERCISES.find(e => e.id === id)).filter(Boolean).map(exCard).join('');
  bindCards();
}
function bindCards() {
  document.querySelectorAll('.ex-card').forEach(c => c.addEventListener('click', () => openDetail(c.dataset.id)));
}
function chipRow(id, values, key, labels) {
  document.querySelectorAll('#' + id + ' .chip').forEach(ch => ch.addEventListener('click', () => {
    document.querySelectorAll('#' + id + ' .chip').forEach(x => x.classList.remove('active'));
    ch.classList.add('active');
    filters[key] = ch.dataset.filter;
    renderLists();
  }));
}
chipRow('filterRow', MUSCLES, 'muscle');
chipRow('equipRow', EQUIPMENTS, 'equipment');
chipRow('levelRow', LEVELS, 'level');
document.getElementById('searchInput').addEventListener('input', (e) => { filters.q = e.target.value; renderLists(); });

/* ---------- Detail ---------- */
function openDetail(id) {
  const ex = EXERCISES.find(e => e.id === id);
  document.getElementById('detailTitle').textContent = ex.name;
  const offlineNote = (window.DRIVE_GIFS || {})[ex.id] ? '<p class="stream-note">⬇️ The GIF downloads when you open this exercise and is saved on your phone — next time it plays offline.</p>' : (ex.video ? '<p class="stream-note">📶 This video streams online — the steps and details below work offline.</p>' : '<p class="stream-note">📶 No video is available for this exercise yet — the steps and details below work offline.</p>');
  document.getElementById('detailContent').innerHTML = `
    ${videoHTML(ex)}
    ${offlineNote}
    <div class="detail-meta">
      <div class="stat-card"><b>${ex.sets}</b><span>Sets</span></div>
      <div class="stat-card"><b>${ex.reps}</b><span>${ex.unit === 'seconds' ? 'Seconds' : 'Reps'}</span></div>
      <div class="stat-card"><b>${ex.kcal}</b><span>Kcal</span></div>
      <div class="stat-card"><b>${ex.muscle}</b><span>Muscle</span></div>
    </div>
    <div class="detail-block"><h3>About</h3><p>${ex.desc}</p></div>
    <div class="detail-block"><h3>How to do it</h3><ol>${ex.steps.map(s => `<li>${s}</li>`).join('')}</ol></div>
    <div class="detail-block"><h3>✅ Pro tip</h3><p class="tip">${ex.tip}</p></div>
    <div class="detail-block"><h3>⚠️ Common mistake</h3><p class="warn">${ex.mistake}</p></div>
    <button class="btn-primary" id="detailStartBtn">▶ Start this exercise</button>`;
  if (window.hydrateGifImgs) hydrateGifImgs();
  document.getElementById('detailStartBtn').addEventListener('click', () => startWorkout([ex.id], ex.name));
  showScreen('detail');
}
document.getElementById('detailBack').addEventListener('click', () => showScreen('exercises'));

/* ---------- Workout engine ---------- */
const REST_SECONDS = 30;
let w = null; // { ids:[exId...], exIdx, set, mode, reps, secondsLeft, timer, startedAt, totalSteps, doneSteps, name }

function totalStepsFor(ids) { return ids.reduce((n, id) => n + (EXERCISES.find(e => e.id === id) || { sets: 0 }).sets, 0); }
function fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
function clearTimer() { if (w && w.timer) { clearInterval(w.timer); w.timer = null; } }

function startWorkout(ids, name) {
  clearTimer();
  const list = (ids && ids.length ? ids : WORKOUT_PLAN).slice();
  w = { ids: list, exIdx: 0, set: 1, mode: 'work', reps: 0, secondsLeft: 0, timer: null, startedAt: Date.now(), totalSteps: totalStepsFor(list), doneSteps: 0, name: name || 'Full Body Blast' };
  showScreen('workout');
  renderWorkoutStep();
}
function currentEx() { return EXERCISES.find(e => e.id === w.ids[w.exIdx]); }

function renderWorkoutStep() {
  clearTimer();
  const ex = currentEx();
  document.getElementById('workoutStepLabel').textContent = `Exercise ${w.exIdx + 1} of ${w.ids.length} — Set ${w.set}/${ex.sets}`;
  document.getElementById('workoutProgress').style.width = Math.round((w.doneSteps / w.totalSteps) * 100) + '%';
  const dots = Array.from({ length: ex.sets }, (_, i) =>
    `<div class="set-dot ${i < w.set - 1 ? 'done' : i === w.set - 1 ? 'current' : ''}"></div>`).join('');

  if (ex.unit === 'seconds') {
    w.secondsLeft = ex.reps;
    document.getElementById('workoutContent').innerHTML = `
      ${videoHTML(ex, '▶ FOLLOW THE VIDEO')}
      <h2 class="workout-name">${ex.name}</h2>
      <p class="workout-target">Hold for ${ex.reps} seconds &bull; ${ex.muscle}</p>
      <div class="big-timer" id="timerDisplay">${fmt(w.secondsLeft)}</div>
      <p class="timer-label">SECONDS REMAINING</p>
      <div class="set-dots">${dots}</div>
      <div class="workout-controls"><button class="btn-primary" id="pauseBtn">⏸ Pause</button><button class="btn-ghost" id="skipSetBtn" style="flex:1">Skip ›</button></div>`;
    let paused = false;
    w.timer = setInterval(() => {
      if (paused) return;
      w.secondsLeft--;
      const el = document.getElementById('timerDisplay');
      if (el) el.textContent = fmt(w.secondsLeft);
      if (w.secondsLeft <= 0) { clearTimer(); completeSet(); }
    }, 1000);
    document.getElementById('pauseBtn').addEventListener('click', (e) => {
      paused = !paused;
      e.target.textContent = paused ? '▶ Resume' : '⏸ Pause';
    });
    document.getElementById('skipSetBtn').addEventListener('click', () => { clearTimer(); completeSet(); });
  } else {
    w.reps = 0;
    document.getElementById('workoutContent').innerHTML = `
      ${videoHTML(ex, '▶ FOLLOW THE VIDEO')}
      <h2 class="workout-name">${ex.name}</h2>
      <p class="workout-target">Target: ${ex.reps} reps &bull; ${ex.muscle}</p>
      <div class="rep-counter">
        <button class="rep-btn" id="repMinus">−</button>
        <div class="rep-num" id="repNum">0</div>
        <button class="rep-btn" id="repPlus">+</button>
      </div>
      <p class="timer-label">TAP + AFTER EACH REP</p>
      <div class="set-dots">${dots}</div>
      <div class="workout-controls"><button class="btn-primary" id="setDoneBtn">✓ Set Done</button></div>`;
    const update = () => { document.getElementById('repNum').textContent = w.reps; };
    document.getElementById('repPlus').addEventListener('click', () => { w.reps++; update(); });
    document.getElementById('repMinus').addEventListener('click', () => { if (w.reps > 0) w.reps--; update(); });
    document.getElementById('setDoneBtn').addEventListener('click', completeSet);
  }
  playVisibleVideo();
}

function completeSet() {
  w.doneSteps++;
  const ex = currentEx();
  if (w.set < ex.sets) { w.set++; startRest(); return; }
  if (w.exIdx < w.ids.length - 1) { w.exIdx++; w.set = 1; startRest(true); return; }
  finishWorkout();
}

function startRest(nextExercise = false) {
  clearTimer();
  const ex = currentEx();
  document.getElementById('workoutStepLabel').textContent = nextExercise ? `Next: ${ex.name}` : 'Rest';
  document.getElementById('workoutProgress').style.width = Math.round((w.doneSteps / w.totalSteps) * 100) + '%';
  let left = REST_SECONDS;
  const stage = nextExercise ? videoHTML(ex, 'UP NEXT — STUDY THE FORM') : '<div class="demo-stage"><div style="font-size:64px">😮‍💨</div><div class="demo-label">CATCH YOUR BREATH</div></div>';
  document.getElementById('workoutContent').innerHTML = `
    ${stage}
    <h2 class="workout-name">Rest</h2>
    <p class="workout-target">${nextExercise ? 'Next up: ' + ex.name + ' — ' + ex.sets + ' sets × ' + ex.reps + ' ' + (ex.unit === 'seconds' ? 'sec' : 'reps') : 'Get ready for the next set'}</p>
    <div class="big-timer rest" id="timerDisplay">${fmt(left)}</div>
    <p class="timer-label">REST TIME</p>
    <div class="workout-controls"><button class="btn-primary btn-rest" id="skipRestBtn">Skip Rest ›</button></div>`;
  w.timer = setInterval(() => {
    left--;
    const el = document.getElementById('timerDisplay');
    if (el) el.textContent = fmt(left);
    if (left <= 0) { clearTimer(); renderWorkoutStep(); }
  }, 1000);
  document.getElementById('skipRestBtn').addEventListener('click', () => { clearTimer(); renderWorkoutStep(); });
  playVisibleVideo();
}

function finishWorkout() {
  clearTimer();
  const minutes = Math.max(1, Math.round((Date.now() - w.startedAt) / 60000));
  const kcal = w.ids.reduce((n, id) => n + (EXERCISES.find(e => e.id === id) || { kcal: 0 }).kcal, 0);
  const name = w.name;
  saveWorkout(minutes, kcal, name);
  document.getElementById('doneExercises').textContent = w.ids.length;
  document.getElementById('doneTime').textContent = fmt((Date.now() - w.startedAt) / 1000);
  document.getElementById('doneKcal').textContent = kcal;
  w = null;
  renderHomeStats();
  showScreen('done');
}

document.getElementById('workoutQuit').addEventListener('click', () => {
  clearTimer(); w = null; showScreen('home');
});
document.getElementById('doneHomeBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('startWorkoutBtn').addEventListener('click', () => startWorkout(WORKOUT_PLAN));

/* ---------- Home stats & progress ---------- */
function streakDays(history) {
  if (!history.length) return 0;
  const days = new Set(history.map(h => new Date(h.date).toDateString()));
  let streak = 0;
  const d = new Date();
  if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1);
  while (days.has(d.toDateString())) { streak++; d.setDate(d.getDate() - 1); }
  return streak;
}
function renderHomeStats() {
  const h = getHistory();
  const totalMin = h.reduce((n, x) => n + (x.minutes || 0), 0);
  document.getElementById('statWorkouts').textContent = h.length;
  document.getElementById('statMinutes').textContent = totalMin;
  document.getElementById('statStreak').textContent = streakDays(h);
  document.getElementById('heroExCount').textContent = WORKOUT_PLAN.length;
  document.getElementById('heroLibCount').textContent = EXERCISES.length;
}
function renderProgress() {
  const h = getHistory();
  document.getElementById('progWorkouts').textContent = h.length;
  document.getElementById('progMinutes').textContent = h.reduce((n, x) => n + (x.minutes || 0), 0);
  document.getElementById('progKcal').textContent = h.reduce((n, x) => n + (x.kcal || 0), 0);
  document.getElementById('historyList').innerHTML = h.length ? h.map(x => {
    const d = new Date(x.date);
    const dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + ' • ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `<div class="history-item"><div><b>${x.name}</b><span>${dateStr} • ${x.minutes} min</span></div><div class="kcal">${x.kcal} kcal</div></div>`;
  }).join('') : '<p class="empty-note">No workouts yet — finish your first workout and it will show up here. 💪</p>';
}

/* ---------- Init ---------- */
renderLists();
renderHomeStats();
