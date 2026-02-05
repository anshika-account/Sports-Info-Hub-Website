console.log("JS Loaded");
console.log("Sport from URL:, sportkey");
const sportsData = {

  cricket: {
    name: "Cricket",
    image:"images/cricket.jpg",
    about: "Cricket is a bat-and-ball team sport played internationally in formats ranging from short T20 matches to long Test matches.",
    origin: "Originated in England and widely played in India, Australia, UK",
    physical: "Stamina, hand-eye coordination, flexibility",
    mental: "Focus, patience, tactical thinking",
    skills: "Batting techniques, bowling variations, fielding accuracy",
    bodyType: "No fixed body type; skill-oriented sport",
    trainingFrequency: "5–6 days per week",
    beginnerPrep: "Basic batting stance, bowling action, catching drills",
    diet: "Carbohydrates for energy, protein for recovery, hydration",
    injuryRisk: "Shoulder strain, knee stress, back pain",
    career: "Domestic player, international player, coach, analyst"
  },

  football: {
    name: "Football",
    image:"images/football.jpg",
    about: "Football is a high-intensity team sport played continuously for 90 minutes with minimal breaks.",
    origin: "Originated in England, globally the most popular sport",
    physical: "Endurance, speed, lower-body strength",
    mental: "Team awareness, quick decision making",
    skills: "Passing, dribbling, shooting, defending",
    bodyType: "Lean and athletic build preferred",
    trainingFrequency: "6 days per week",
    beginnerPrep: "Ball control, jogging, passing drills",
    diet: "High-carb meals, electrolytes, protein recovery",
    injuryRisk: "Ankle sprains, hamstring injuries",
    career: "Club footballer, national player, coach, referee"
  },

  basketball: {
    name: "Basketball",
    image:"images/basketball.jpg",
    about: "Basketball is a fast-paced indoor team sport emphasizing agility, jumping, and coordination.",
    origin: "Originated in the USA",
    physical: "Explosive power, agility, vertical jump",
    mental: "Confidence, spatial awareness",
    skills: "Dribbling, shooting, defensive movement",
    bodyType: "Height advantage helpful but not mandatory",
    trainingFrequency: "5–6 days per week",
    beginnerPrep: "Basic dribbling, shooting form",
    diet: "Protein-rich diet, calcium, hydration",
    injuryRisk: "Knee injuries, finger sprains",
    career: "Professional leagues, coaching, sports training"
  },

  badminton: {
    name: "Badminton",
    image:"images/badminton.jpg",
    about: "Badminton is a high-speed racket sport requiring rapid movement and precision.",
    origin: "Originated in British India",
    physical: "Agility, stamina, reflex speed",
    mental: "Alertness, anticipation",
    skills: "Smashes, net play, footwork",
    bodyType: "Lean and agile body",
    trainingFrequency: "5–6 days per week",
    beginnerPrep: "Grip, footwork, shuttle control",
    diet: "Light carbs, hydration, recovery foods",
    injuryRisk: "Shoulder strain, ankle injuries",
    career: "Professional player, coach, sports authority"
  },

  kabaddi: {
    name: "Kabaddi",
    image:"images/kabaddi.jpg",
    about: "Kabaddi is a traditional Indian contact sport combining strength, strategy, and breath control.",
    origin: "Ancient India",
    physical: "Strength, lung capacity, speed",
    mental: "Fear control, aggression balance",
    skills: "Raiding, defending, body control",
    bodyType: "Strong and muscular build",
    trainingFrequency: "6 days per week",
    beginnerPrep: "Bodyweight exercises, breathing practice",
    diet: "High-protein, strength-building foods",
    injuryRisk: "Muscle pulls, joint stress",
    career: "Pro Kabaddi leagues, coaching"
  },

  hockey: {
    name: "Hockey",
    image:"images/hockey.jpg",
    about: "Field hockey is a fast outdoor team sport requiring continuous movement and stick skills.",
    origin: "England",
    physical: "Endurance, coordination, speed",
    mental: "Team strategy, alertness",
    skills: "Dribbling, passing, shooting",
    bodyType: "Lean and athletic",
    trainingFrequency: "6 days per week",
    beginnerPrep: "Stick control, running drills",
    diet: "Energy-rich meals, hydration",
    injuryRisk: "Shin injuries, muscle fatigue",
    career: "National teams, coaching, sports admin"
  },

  tabletennis: {
    name: "Table Tennis",
    image:"images/tabletennis.jpg",
    about: "Table tennis is a reflex-based indoor sport played at very high speed.",
    origin: "England",
    physical: "Reflexes, wrist strength",
    mental: "Extreme concentration",
    skills: "Spin control, fast reactions",
    bodyType: "No specific body type",
    trainingFrequency: "4–5 days per week",
    beginnerPrep: "Basic grip, reaction drills",
    diet: "Balanced diet, hydration",
    injuryRisk: "Wrist strain",
    career: "Professional leagues, coaching"
  },

  swimming: {
    name: "Swimming",
    image:"images/swimming.jpg",
    about: "Swimming is a full-body individual sport with strong cardiovascular benefits.",
    origin: "Ancient civilizations",
    physical: "Endurance, lung capacity, flexibility",
    mental: "Discipline, rhythm control",
    skills: "Stroke techniques, breathing",
    bodyType: "Lean with strong shoulders",
    trainingFrequency: "5–6 days per week",
    beginnerPrep: "Floating, basic strokes",
    diet: "High-energy meals, hydration",
    injuryRisk: "Shoulder overuse",
    career: "Competitive swimming, lifeguard, coaching"
  },

  archery: {
    name: "Archery",
    image:"images/archery.jpg",
    about: "Archery is a precision sport focused on accuracy, posture, and mental calmness.",
    origin: "Ancient warfare sport",
    physical: "Upper-body stability, posture",
    mental: "Focus, patience, calm mindset",
    skills: "Aiming, release control",
    bodyType: "Stable posture preferred",
    trainingFrequency: "4–5 days per week",
    beginnerPrep: "Posture training, light bows",
    diet: "Light balanced meals",
    injuryRisk: "Shoulder strain",
    career: "National teams, coaching"
  },

  shooting: {
    name: "Air Rifle Shooting",
    image:"images/shooting.jpg",
    about: "Shooting is a highly precise sport emphasizing breathing and mental stability.",
    origin: "Developed as a competitive precision sport",
    physical: "Steady posture, balance",
    mental: "Stress control, extreme focus",
    skills: "Breathing control, aim consistency",
    bodyType: "No physical limitation",
    trainingFrequency: "4–5 days per week",
    beginnerPrep: "Dry firing, breathing drills",
    diet: "Light meals, hydration",
    injuryRisk: "Minimal physical injury",
    career: "National shooting teams, coaching"
  }
};

const detailsDiv = document.getElementById("sportDetails");

// ✅ This check is the KEY
if (detailsDiv) {

  const urlParams = new URLSearchParams(window.location.search);
  const sportKey = urlParams.get("sport");

  if (!sportKey || !sportsData[sportKey]) {
    detailsDiv.innerHTML = "<h2>Sport not found</h2>";
  } else {
    const s = sportsData[sportKey];

    detailsDiv.innerHTML = `
      <h1>${s.name}</h1>
      <img src="${s.image}" class="sport-img">
      <p><strong>About:</strong> ${s.about}</p>
      <p><strong>Physical:</strong> ${s.physical}</p>
      <p><strong>Mental:</strong> ${s.mental}</p>
      <p><strong>Skills:</strong> ${s.skills}</p>
      <p><strong>Training:</strong> ${s.trainingFrequency}</p>
      <p><strong>Diet:</strong> ${s.diet}</p>
      <p><strong>Injury Risk:</strong> ${s.injuryRisk}</p>
      <p><strong>Career:</strong> ${s.career}</p>

      <a href="index.html" class="back-btn">⬅ Back</a>
    `;
  }
}



