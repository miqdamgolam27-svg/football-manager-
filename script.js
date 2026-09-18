/* ============================================================
   FOOTBALL MANAGER — CORE DATA & SCOUTING SYSTEM
   ============================================================ */

// ---------- REGIONS (grouped by continent) ----------
const REGIONS = {
  Europe: [
    { id: "eu_west", name: "Western Europe", cost: 500, days: 3, tendency: { technical: 5, physical: 0, pace: 0 } },
    { id: "eu_east", name: "Eastern Europe", cost: 450, days: 4, tendency: { technical: 3, physical: 3, pace: 0 } },
    { id: "eu_north", name: "Northern Europe", cost: 500, days: 3, tendency: { physical: 5, pace: 2, technical: 0 } },
    { id: "eu_south", name: "Southern Europe", cost: 550, days: 3, tendency: { technical: 6, pace: 2, physical: 0 } },
    { id: "eu_balkans", name: "Balkans", cost: 400, days: 4, tendency: { technical: 3, physical: 2, pace: 0 } },
  ],
  SouthAmerica: [
    { id: "sa_brazil_riverplate", name: "Brazil / River Plate", cost: 700, days: 5, tendency: { technical: 7, pace: 3, physical: 0 } },
    { id: "sa_andean", name: "Andean Region", cost: 600, days: 6, tendency: { technical: 4, pace: 2, physical: 0 } },
    { id: "sa_north", name: "Northern South America", cost: 550, days: 6, tendency: { pace: 5, technical: 2, physical: 0 } },
  ],
  NorthCentralAmerica: [
    { id: "na_usa_canada", name: "North America", cost: 500, days: 4, tendency: { physical: 5, pace: 2, technical: 0 } },
    { id: "ca_central", name: "Central America", cost: 450, days: 5, tendency: { pace: 4, technical: 2, physical: 0 } },
    { id: "ca_caribbean", name: "Caribbean", cost: 400, days: 5, tendency: { pace: 6, physical: 2, technical: 0 } },
  ],
  Africa: [
    { id: "af_north", name: "North Africa", cost: 500, days: 5, tendency: { technical: 3, pace: 3, physical: 0 } },
    { id: "af_west", name: "West Africa", cost: 550, days: 5, tendency: { physical: 6, pace: 4, technical: 0 } },
    { id: "af_central", name: "Central Africa", cost: 500, days: 6, tendency: { physical: 5, pace: 3, technical: 0 } },
    { id: "af_east", name: "East Africa", cost: 500, days: 6, tendency: { pace: 6, physical: 2, technical: 0 } },
    { id: "af_south", name: "Southern Africa", cost: 500, days: 5, tendency: { physical: 4, technical: 2, pace: 0 } },
  ],
  Asia: [
    { id: "as_east", name: "East Asia", cost: 550, days: 5, tendency: { technical: 5, pace: 2, physical: 0 } },
    { id: "as_south", name: "South Asia", cost: 400, days: 6, tendency: { technical: 3, pace: 3, physical: 0 } },
    { id: "as_southeast", name: "Southeast Asia", cost: 400, days: 6, tendency: { pace: 4, technical: 2, physical: 0 } },
    { id: "as_central", name: "Central Asia", cost: 450, days: 7, tendency: { physical: 4, technical: 2, pace: 0 } },
    { id: "as_middleeast", name: "Middle East", cost: 500, days: 5, tendency: { technical: 3, physical: 3, pace: 0 } },
  ],
  Oceania: [
    { id: "oc_ausnz", name: "Australia / NZ", cost: 500, days: 5, tendency: { physical: 5, pace: 2, technical: 0 } },
    { id: "oc_pacific", name: "Pacific Islands", cost: 350, days: 8, tendency: { physical: 7, pace: 3, technical: -2 } },
  ],
};

// ---------- FICTIONAL NAME POOLS (per region) ----------
// Kept generic/invented to avoid any real-person names.
const NAME_POOLS = {
  eu_west: { first: ["Luc","Maxime","Tom","Noah","Julien","Liam","Finn","Hugo"], last: ["Verhoeven","Dubois","Janssen","Moreau","Koch","Larsen","Fontaine","Vermeer"] },
  eu_east: { first: ["Petr","Andrei","Marek","Viktor","Tomas","Dariusz","Ivan","Milos"], last: ["Novak","Kowalski","Horvat","Sokolov","Dvorak","Wisniewski","Balog","Petrov"] },
  eu_north: { first: ["Erik","Anders","Magnus","Lars","Henrik","Karl","Nils","Oskar"], last: ["Johansson","Hansen","Lindgren","Berg","Nilsen","Karlsson","Eriksen","Holm"] },
  eu_south: { first: ["Matteo","Diego","Rafael","Nico","Leo","Marco","Paolo","Enzo"], last: ["Romano","Ferreira","Silva","Costa","Bianchi","Alvarez","Greco","Moreno"] },
  eu_balkans: { first: ["Stefan","Dario","Bojan","Luka","Ivan","Nikola","Marko","Aleks"], last: ["Petrovic","Jovanovic","Popovic","Radic","Kovac","Stankovic","Ilic","Maric"] },
  sa_brazil_riverplate: { first: ["Gabriel","Bruno","Thiago","Matheus","Lucas","Rodrigo","Fernando","Pablo"], last: ["Souza","Oliveira","Fernandez","Almeida","Rojas","Cardoso","Bautista","Machado"] },
  sa_andean: { first: ["Andres","Cristian","Felipe","Sebastian","Mateo","Emilio","Ignacio","Renzo"], last: ["Quispe","Vargas","Mamani","Torres","Aguilar","Rios","Salazar","Huaman"] },
  sa_north: { first: ["Carlos","Jose","Miguel","Luis","Alejandro","Daniel","Julio","Ricardo"], last: ["Perez","Gomez","Reyes","Castillo","Morales","Pineda","Guerrero","Sandoval"] },
  na_usa_canada: { first: ["Jordan","Tyler","Connor","Brandon","Ethan","Mason","Caleb","Owen"], last: ["Smith","Johnson","Brown","Miller","Anderson","Clark","Bennett","Foster"] },
  ca_central: { first: ["Esteban","Rodrigo","Manuel","Cesar","Javier","Fabian","Anthony","Kevin"], last: ["Zelaya","Mendoza","Paz","Cruz","Herrera","Maldonado","Arriola","Funes"] },
  ca_caribbean: { first: ["Andre","Marlon","Devon","Shane","Kwame","Jaylen","Malik","Curtis"], last: ["Campbell","Grant","Francis","Bailey","Edwards","Whyte","Clarke","Reid"] },
  af_north: { first: ["Youssef","Karim","Amine","Omar","Walid","Tarek","Rachid","Hicham"], last: ["Benali","Cherif","Amrani","Haddad","Saidi","Bouzid","Mansouri","Ziani"] },
  af_west: { first: ["Kwabena","Emeka","Ibrahim","Sadio","Moussa","Abdul","Chidi","Kofi"], last: ["Mensah","Okafor","Diallo","Toure","Balogun","Osei","Coulibaly","Adeyemi"] },
  af_central: { first: ["Junior","Christian","Patrick","Yannick","Glody","Trésor","Divin","Blaise"], last: ["Mbeki","Lukaku","Ngoy","Kabongo","Mabika","Ilunga","Mputu","Kasongo"] },
  af_east: { first: ["Samuel","Joseph","Brian","Victor","Elias","Dennis","Abel","Frank"], last: ["Kiptoo","Wanjiru","Mutua","Otieno","Haile","Bekele","Mwangi","Kamau"] },
  af_south: { first: ["Thabo","Sipho","Lucas","Kagiso","Tendai","Mandla","Bongani","Given"], last: ["Ndlovu","Dube","Khumalo","Moyo","Sithole","Nkosi","Chirwa","Banda"] },
  as_east: { first: ["Haruto","Wei","Jin","Sora","Yuto","Cheng","Ren","Daiki"], last: ["Sato","Zhang","Kim","Tanaka","Wang","Watanabe","Lee","Chen"] },
  as_south: { first: ["Arjun","Rohan","Sunil","Vikram","Aakash","Farhan","Imran","Rahul"], last: ["Sharma","Patel","Khan","Gupta","Mehta","Ahmed","Reddy","Singh"] },
  as_southeast: { first: ["Arman","Budi","Nguyen","Kiet","Somchai","Rizky","Made","Hakim"], last: ["Santoso","Tran","Nguyen","Suarez","Wong","Aziz","Putra","Lim"] },
  as_central: { first: ["Aibek","Nurlan","Daniyar","Yerlan","Bakyt","Timur","Ruslan","Serik"], last: ["Abenov","Zhaksybekov","Toktogulov","Nurmagomedov","Kaliyev","Amanov","Bekov","Idris"] },
  as_middleeast: { first: ["Ali","Hassan","Yusuf","Faisal","Khalid","Omar","Sami","Rami"], last: ["Al-Farsi","Al-Rashid","Haddad","Nasser","Saleh","Karam","Zidan","Aziz"] },
  oc_ausnz: { first: ["Jack","Liam","Ryan","Cody","Blake","Nathan","Zac","Dylan"], last: ["Taylor","Wilson","Baker","Turner","Mitchell","Harris","Cooper","Reid"] },
  oc_pacific: { first: ["Sione","Manu","Vili","Toa","Aleki","Faka","Losi","Saia"], last: ["Tuilagi","Fifita","Havili","Moala","Taufa","Vaka","Pulu","Latu"] },
};

const POSITIONS = ["GK", "CB", "FB", "DM", "CM", "AM", "WG", "ST"];

// ---------- UTILITIES ----------
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[rand(0, arr.length - 1)]; }
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

function generatePlayerName(regionId) {
  const pool = NAME_POOLS[regionId];
  return `${pick(pool.first)} ${pick(pool.last)}`;
}

// Generates one scouted player for a given region id
function generatePlayer(regionId) {
  const region = Object.values(REGIONS).flat().find(r => r.id === regionId);
  const age = rand(16, 32);
  const position = pick(POSITIONS);

  // base stats before regional tendency is applied
  let technical = rand(35, 75);
  let physical = rand(35, 75);
  let pace = rand(35, 75);

  const t = region.tendency || {};
  technical = clamp(technical + (t.technical || 0), 20, 95);
  physical = clamp(physical + (t.physical || 0), 20, 95);
  pace = clamp(pace + (t.pace || 0), 20, 95);

  const overall = Math.round((technical + physical + pace) / 3);

  // Younger players get a wider hidden potential range
  const potentialSpread = age <= 19 ? 25 : age <= 24 ? 12 : 3;
  const potentialLow = clamp(overall, 20, 99);
  const potentialHigh = clamp(overall + potentialSpread, 20, 99);

  return {
    id: `${regionId}_${Date.now()}_${rand(1000, 9999)}`,
    name: generatePlayerName(regionId),
    region: regionId,
    age,
    position,
    stats: { technical, physical, pace, overall },
    potential: { low: potentialLow, high: potentialHigh },
    scoutedFully: false, // true stats hidden until fully scouted
    value: overall * rand(800, 1500),
  };
}

// Scout a region: returns 3-5 randomly generated players
function scoutRegion(regionId, count = null) {
  const n = count || rand(3, 5);
  const players = [];
  for (let i = 0; i < n; i++) {
    players.push(generatePlayer(regionId));
  }
  return players;
}

// Flat list of all regions (for building UI dropdowns)
function getAllRegions() {
  return Object.entries(REGIONS).flatMap(([continent, regions]) =>
    regions.map(r => ({ ...r, continent }))
  );
}

// ============================================================
//  CLUB STATE — budget & squad management
// ============================================================
const STARTING_BUDGET = 50000;

function loadClub() {
  const saved = localStorage.getItem('fm_club');
  if (saved) return JSON.parse(saved);
  return { budget: STARTING_BUDGET, squad: [] };
}

function saveClub(club) {
  localStorage.setItem('fm_club', JSON.stringify(club));
}

// Attempts to sign a player. Returns { success, message }
function signPlayer(player) {
  const club = loadClub();
  if (club.squad.find(p => p.id === player.id)) {
    return { success: false, message: "Already in your squad." };
  }
  if (club.budget < player.value) {
    return { success: false, message: "Not enough budget to sign this player." };
  }
  club.budget -= player.value;
  club.squad.push(player);
  saveClub(club);
  return { success: true, message: `Signed ${player.name} for $${player.value.toLocaleString()}.` };
}

function releasePlayer(playerId) {
  const club = loadClub();
  const player = club.squad.find(p => p.id === playerId);
  if (!player) return { success: false, message: "Player not found." };
  club.squad = club.squad.filter(p => p.id !== playerId);
  // releasing refunds a portion of the value back to budget
  const refund = Math.round(player.value * 0.4);
  club.budget += refund;
  saveClub(club);
  return { success: true, message: `Released ${player.name}. Refunded $${refund.toLocaleString()}.` };
}

// ---------- EXPORTS (for use in index.html) ----------
window.FM = {
  REGIONS,
  getAllRegions,
  scoutRegion,
  generatePlayer,
  STARTING_BUDGET,
  loadClub,
  saveClub,
  signPlayer,
  releasePlayer,
};
