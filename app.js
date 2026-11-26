const CITIES = [
  { id:'taipei', city:'Taipei', country:'Taiwan', type:'Capital city', flagCode:'tw', lat:25.04, lon:121.56, x:80, y:48, landmark:'Taipei 101', icon:'🏙️', facts:['It is a tall tower with many floors.', 'You can look across Taipei from the top.'], words:['tower', 'tall', 'city'], question:'Can you find the top of the tower?' },
  { id:'zurich', city:'Zurich', country:'Switzerland', type:'Famous city', flagCode:'ch', lat:47.38, lon:8.54, x:47.2, y:36.5, landmark:'Lake Zurich', icon:'🏞️', facts:['The blue lake sits beside the old city.', 'You can see boats, church towers, and mountains.'], words:['lake', 'boat', 'mountain'], question:'Can you find the mountains behind the lake?' },
  { id:'berlin', city:'Berlin', country:'Germany', type:'Capital city', flagCode:'de', lat:52.52, lon:13.41, x:50, y:32, landmark:'the Brandenburg Gate', icon:'🏛️', facts:['The gate has tall stone columns.', 'People walk through it and take photos.'], words:['gate', 'stone', 'column'], question:'Can you find the top of the gate?' },
  { id:'tokyo', city:'Tokyo', country:'Japan', type:'Capital city', flagCode:'jp', lat:35.68, lon:139.69, x:88, y:42, landmark:'Mount Fuji', icon:'🗻', facts:['It is the highest mountain in Japan.', 'Snow often covers its top in winter.'], words:['mountain', 'snow', 'high'], question:'Can you find the snowy top?' },
  { id:'newyork', city:'New York', country:'the USA', type:'Famous city', flagCode:'us', lat:40.71, lon:-74.01, x:22.5, y:36, landmark:'the Statue of Liberty', icon:'🗽', facts:['She holds a torch high in one hand.', 'She welcomes people arriving by sea.'], words:['statue', 'torch', 'sea'], question:'Can you find the torch?' },
  { id:'rome', city:'Rome', country:'Italy', type:'Capital city', flagCode:'it', lat:41.9, lon:12.5, x:49.5, y:43, landmark:'the Colosseum', icon:'🏟️', facts:['It is a huge stadium from ancient Rome.', 'People once watched shows inside.'], words:['stadium', 'ancient', 'stone'], question:'Can you find the arches?' },
  { id:'mexico', city:'Mexico City', country:'Mexico', type:'Capital city', flagCode:'mx', lat:19.43, lon:-99.13, x:15, y:49, landmark:'the Angel of Independence', icon:'🪽', facts:['A golden angel stands on a tall column.', 'She holds a crown in one hand.'], words:['angel', 'golden', 'column'], question:'Can you find the angel’s wings?' },
  { id:'dubai', city:'Dubai', country:'the UAE', type:'Famous city', flagCode:'ae', lat:25.2, lon:55.27, x:61, y:49, landmark:'the Burj Khalifa', icon:'🏙️', facts:['It rises high above the modern city.', 'You can see the skyline and desert from its viewing floors.'], words:['building', 'skyline', 'desert'], question:'Can you find the highest point?' },
  { id:'bangkok', city:'Bangkok', country:'Thailand', type:'Capital city', flagCode:'th', lat:13.76, lon:100.5, x:71, y:57, landmark:'the Grand Palace', icon:'🛕', facts:['Its roofs are bright, colorful, and detailed.', 'Thai kings once lived here.'], words:['palace', 'roof', 'golden'], question:'Can you find the golden roofs?' },
  { id:'london', city:'London', country:'the UK', type:'Capital city', flagCode:'gb', lat:51.51, lon:-0.13, x:44, y:31, landmark:'Big Ben', icon:'🕰️', facts:['Big Ben is the name of the great bell.', 'The clock tower stands beside Parliament.'], words:['clock', 'bell', 'tower'], question:'Can you find the clock face?' },
  { id:'sydney', city:'Sydney', country:'Australia', type:'Famous city', flagCode:'au', lat:-33.87, lon:151.21, x:89, y:80, landmark:'the Sydney Opera House', icon:'🎭', facts:['Its white roof looks like ship sails.', 'People enjoy music and shows inside.'], words:['sail', 'music', 'harbor'], question:'Can you find the sail-shaped roofs?' },
  { id:'buenosaires', city:'Buenos Aires', country:'Argentina', type:'Capital city', flagCode:'ar', lat:-34.6, lon:-58.38, x:30, y:79, landmark:'the Obelisk', icon:'🔺', facts:['This tall white monument stands on a busy avenue.', 'It is a symbol of Buenos Aires.'], words:['monument', 'avenue', 'tall'], question:'Can you find the point at the top?' },
  { id:'seoul', city:'Seoul', country:'South Korea', type:'Capital city', flagCode:'kr', lat:37.57, lon:126.98, x:83, y:39, landmark:'Gyeongbokgung Palace', icon:'🏯', facts:['The palace has colorful roofs and wide courtyards.', 'Korean kings once lived here.'], words:['palace', 'roof', 'courtyard'], question:'Can you find a colorful roof?' },
  { id:'singapore', city:'Singapore', country:'Singapore', type:'Capital city', flagCode:'sg', lat:1.35, lon:103.82, x:73, y:67, landmark:'the Merlion', icon:'🦁', facts:["It has a lion's head and a fish's body.", 'Water sprays from its mouth into the bay.'], words:['lion', 'fish', 'water'], question:'Can you find the fish tail?' },
  { id:'reykjavik', city:'Reykjavík', country:'Iceland', type:'Capital city', flagCode:'is', lat:64.15, lon:-21.94, x:42, y:19, landmark:'Hallgrímskirkja Church', icon:'⛪', facts:['Its tall shape looks like a mountain.', 'You can see the city from its tower.'], words:['church', 'tower', 'mountain'], question:'Can you find the tall tower?' },
  { id:'toronto', city:'Toronto', country:'Canada', type:'Famous city', flagCode:'ca', lat:43.65, lon:-79.38, x:22.7, y:32, landmark:'the CN Tower', icon:'🗼', facts:['It rises high above the city by Lake Ontario.', 'You can see far from its observation deck.'], words:['tower', 'lake', 'view'], question:'Can you find the round observation deck?' },
  { id:'auckland', city:'Auckland', country:'New Zealand', type:'Famous city', flagCode:'nz', lat:-36.85, lon:174.76, x:96, y:84, landmark:'the Sky Tower', icon:'⛵', facts:['It stands above the harbor city.', 'You can see boats, islands, and green hills from the top.'], words:['harbor', 'island', 'tower'], question:'Can you find the sailboats?' },
  { id:'lima', city:'Lima', country:'Peru', type:'Capital city', flagCode:'pe', lat:-12.05, lon:-77.04, x:20, y:66, landmark:'Plaza Mayor', icon:'⛲', facts:['This historic square is surrounded by colorful buildings.', 'A beautiful fountain stands in the center.'], words:['square', 'fountain', 'building'], question:'Can you find the fountain?' },
  { id:'santiago', city:'Santiago', country:'Chile', type:'Capital city', flagCode:'cl', lat:-33.45, lon:-70.67, x:25, y:78, landmark:'La Moneda Palace', icon:'🏛️', facts:["This grand building is where Chile's president works.", 'Its wide front faces a large city square.'], words:['palace', 'president', 'square'], question:'Can you find the many windows?' },
  { id:'paris', city:'Paris', country:'France', type:'Capital city', flagCode:'fr', lat:48.86, lon:2.35, x:46, y:34, landmark:'the Eiffel Tower', icon:'🗼', facts:['It is tall and made of iron.', 'You can see Paris from the top.'], words:['tower', 'iron', 'tall'], question:'Can you find the top of the tower?' }
];

const ITEMS = [
  {id:'tshirt', name:'T-shirt', icon:itemIcon('tshirt')}, {id:'sweater', name:'sweater', icon:itemIcon('sweater')},
  {id:'jacket', name:'jacket', icon:itemIcon('jacket')}, {id:'coat', name:'coat', icon:itemIcon('coat')},
  {id:'dress', name:'dress', icon:itemIcon('dress')}, {id:'shorts', name:'shorts', icon:itemIcon('shorts')},
  {id:'skirt', name:'skirt', icon:itemIcon('skirt')}, {id:'pants', name:'pants', icon:itemIcon('pants')},
  {id:'shoes', name:'shoes', icon:itemIcon('shoes')}, {id:'sandals', name:'sandals', icon:itemIcon('sandals')},
  {id:'boots', name:'boots', icon:itemIcon('boots')},
  {id:'hat', name:'hat', icon:itemIcon('hat')}, {id:'scarf', name:'scarf', icon:itemIcon('scarf')},
  {id:'gloves', name:'gloves', icon:itemIcon('gloves')}, {id:'umbrella', name:'umbrella', icon:itemIcon('umbrella')},
  {id:'sunglasses', name:'sunglasses', icon:itemIcon('sunglasses')}, {id:'raincoat', name:'raincoat', icon:itemIcon('raincoat')},
  {id:'sunscreen', name:'sunscreen', icon:itemIcon('sunscreen')}, {id:'waterbottle', name:'water bottle', icon:itemIcon('waterbottle')},
  {id:'portablefan', name:'portable fan', icon:itemIcon('portablefan')}
];

function itemIcon(id) {
  return `<img src="assets/items/${id}.png" alt="">`;
}

const MARKER_OFFSETS = {
  toronto: [26, -18], newyork: [-24, 22],
  london: [-34, -20], paris: [-18, 22], zurich: [14, 36], berlin: [34, -18], rome: [38, 28],
  seoul: [-34, -20], tokyo: [32, -12], taipei: [4, 28],
  bangkok: [-12, 8], singapore: [24, 18], dubai: [18, 18],
  lima: [-24, -8], santiago: [-18, 25], buenosaires: [28, 12],
  sydney: [-20, 18], auckland: [-34, -10]
};

['weatherExplorerAvatar', 'weatherExplorerName', 'weatherExplorerVisited'].forEach(key => localStorage.removeItem(key));

const state = {
  avatar: -1,
  englishName: '',
  sound: localStorage.getItem('weatherExplorerSound') !== 'off',
  city: null,
  weather: null,
  packed: new Set(),
  visited: new Set()
};

const $ = (id) => document.getElementById(id);
const screens = [...document.querySelectorAll('.screen')];
let toastTimer;
let englishVoices = [];

function refreshVoices() {
  if (!('speechSynthesis' in window)) return;
  englishVoices = speechSynthesis.getVoices().filter(voice => /^en([-_]|$)/i.test(voice.lang));
}

function preferredEnglishVoice() {
  const preferredNames = ['Samantha', 'Jenny', 'Aria', 'Ava', 'Zira', 'Victoria', 'Karen', 'Moira', 'Tessa', 'Susan', 'Hazel', 'Serena', 'Fiona', 'Google UK English Female'];
  return englishVoices.find(voice => preferredNames.some(name => voice.name.toLowerCase().includes(name.toLowerCase()))) || englishVoices[0] || null;
}

function prepareSpeechText(text) {
  return text.replace(/Taipei 101/gi, 'Taipei one oh one');
}

function showToast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2300);
}

function showScreen(id, step = 0) {
  screens.forEach(s => s.classList.toggle('active', s.id === id));
  document.querySelectorAll('.step').forEach(el => {
    const n = Number(el.dataset.step);
    el.classList.toggle('active', n === step);
    el.classList.toggle('done', n < step);
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function spritePosition(index) {
  const col = index % 5;
  const row = Math.floor(index / 5);
  return `${col * 25}% ${row * 100}%`;
}

function renderExplorers() {
  $('explorerGrid').innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'explorer-card';
    btn.style.backgroundPosition = spritePosition(i);
    btn.setAttribute('aria-label', `Choose explorer ${i + 1}`);
    btn.addEventListener('click', () => chooseAvatar(i));
    $('explorerGrid').appendChild(btn);
  }
  chooseAvatar(state.avatar, false);
  $('englishNameInput').value = state.englishName;
  updateIdentityUI();
}

function chooseAvatar(index, speakChoice = true) {
  if (index < 0 || index > 9) return;
  state.avatar = index;
  document.querySelectorAll('.explorer-card').forEach((card, i) => card.classList.toggle('selected', i === index));
  updateIdentityUI();
  applyAvatar($('passportExplorer'));
  if (speakChoice) speak('This is your explorer!');
}

function cleanEnglishName(value) {
  return value.trim().replace(/\s+/g, ' ');
}

function hasUsableName(value) {
  return cleanEnglishName(value).length > 0 && /\p{L}/u.test(value);
}

function identityComplete() {
  return state.avatar >= 0 && hasUsableName(state.englishName);
}

function updateIdentityUI() {
  const inputName = cleanEnglishName($('englishNameInput')?.value || '');
  const avatarChosen = state.avatar >= 0;
  const nameReady = hasUsableName(inputName);
  document.querySelectorAll('.explorer-card').forEach(card => { card.disabled = !nameReady; });
  $('explorerGrid').classList.toggle('locked', !nameReady);
  $('explorerGrid').setAttribute('aria-disabled', String(!nameReady));
  $('startAdventureBtn').disabled = !(avatarChosen && nameReady);
  $('namePreview').textContent = nameReady ? `Hi! I’m ${inputName}.` : 'Type your English name to continue.';
  $('explorerInstruction').textContent = nameReady
    ? `Nice to meet you, ${inputName}! Pick the picture you want on your passport.`
    : 'Enter your English name first to unlock the explorers.';
}

function applyAvatar(el) {
  if (!el) return;
  el.classList.toggle('empty', state.avatar < 0);
  if (state.avatar < 0) {
    el.style.backgroundPosition = '';
    return;
  }
  el.style.backgroundPosition = spritePosition(state.avatar);
}

function flagMarkup(city, alt = true) {
  return `<img src="assets/flags/${city.flagCode}.svg" alt="${alt ? `${city.country} flag` : ''}">`;
}

function renderCitySelect() {
  $('citySelect').innerHTML = '<option value="">Select a city…</option>' + CITIES
    .map(city => `<option value="${city.id}">${city.city}, ${city.country}</option>`)
    .join('');
}

function renderCityCarousel() {
  $('cityCarousel').innerHTML = '';
  CITIES.forEach(city => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'city-chip-btn';
    btn.dataset.city = city.id;
    btn.innerHTML = `${flagMarkup(city, false)}<span>${city.city}</span>`;
    btn.addEventListener('click', () => chooseCity(city));
    $('cityCarousel').appendChild(btn);
  });
}

function renderMarkers() {
  $('cityMarkers').innerHTML = '';
  CITIES.forEach(city => {
    const [offsetX, offsetY] = MARKER_OFFSETS[city.id] || [0, 0];
    const badgeY = offsetY - 10;
    const leaderLength = Math.hypot(offsetX, badgeY);
    const leaderAngle = Math.atan2(badgeY, offsetX) * 180 / Math.PI;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'city-marker';
    btn.style.left = `${city.x}%`;
    btn.style.top = `${city.y}%`;
    btn.style.setProperty('--marker-x', `${offsetX}px`);
    btn.style.setProperty('--marker-y', `${offsetY}px`);
    btn.dataset.city = city.id;
    btn.setAttribute('aria-label', `Choose ${city.city}, ${city.country}`);
    btn.innerHTML = `<span class="marker-leader" style="width:${leaderLength}px; transform:rotate(${leaderAngle}deg)"></span><span class="marker-dot"></span><span class="marker-badge"><span class="flag">${flagMarkup(city, false)}</span><span class="marker-label">${city.city}</span></span>`;
    btn.addEventListener('click', () => chooseCity(city));
    $('cityMarkers').appendChild(btn);
  });
}

function chooseCity(city) {
  state.city = city;
  state.weather = null;
  document.querySelectorAll('.city-marker').forEach(m => m.classList.toggle('selected', m.dataset.city === city.id));
  document.querySelectorAll('.city-chip-btn').forEach(m => m.classList.toggle('selected', m.dataset.city === city.id));
  $('destinationFlag').innerHTML = flagMarkup(city);
  $('destinationName').textContent = `${city.city}, ${city.country}`;
  $('destinationPhrase').textContent = `I want to go to ${city.city}.`;
  $('destinationMeta').textContent = `${city.type} · Landmark: ${city.landmark}`;
  $('destinationPreview').style.backgroundImage = `url("assets/cities/${city.id}.png")`;
  $('choiceSentence').textContent = `I want to go to ${city.city}.`;
  $('weatherBtn').disabled = false;
  $('destinationCard').hidden = false;
  $('citySelect').value = city.id;
  const plane = $('planeToken');
  plane.style.display = 'none';
  speak(`I want to go to ${city.city}.`);
}

function weatherCondition(code, wind) {
  if (code >= 95) return ['stormy', '⛈️'];
  if ([71,73,75,77,85,86].includes(code)) return ['snowy', '🌨️'];
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return ['rainy', '🌧️'];
  if ([45,48].includes(code)) return ['foggy', '🌫️'];
  if (wind >= 30) return ['windy', '💨'];
  if ([1,2,3].includes(code)) return ['cloudy', '☁️'];
  return ['sunny', '☀️'];
}

function temperatureFeel(temp) {
  if (temp >= 30) return 'hot';
  if (temp >= 21) return 'warm';
  if (temp >= 11) return 'cool';
  return 'cold';
}

async function loadWeather() {
  if (!state.city) return;
  showScreen('weatherScreen', 2);
  $('weatherTitle').textContent = `How's the weather in ${state.city.city}?`;
  $('weatherCityChip').innerHTML = `${flagMarkup(state.city)} <span>${state.city.city}</span>`;
  $('weatherSentence').textContent = `Checking today's weather in ${state.city.city}…`;
  $('weatherDetails').textContent = '';
  $('temperature').textContent = '--°C';
  $('weatherEmoji').textContent = '⏳';
  $('packBtn').disabled = true;
  const cacheKey = `weather-${state.city.id}-${new Date().toISOString().slice(0,10)}`;
  try {
    let data = JSON.parse(localStorage.getItem(cacheKey) || 'null');
    if (!data) {
      const params = new URLSearchParams({
        latitude: state.city.lat,
        longitude: state.city.lon,
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',
        forecast_days: '1',
        timezone: 'auto'
      });
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
      if (!response.ok) throw new Error('Forecast unavailable');
      data = await response.json();
      localStorage.setItem(cacheKey, JSON.stringify(data));
    }
    const daily = data.daily;
    const high = Math.round(daily.temperature_2m_max[0]);
    const low = Math.round(daily.temperature_2m_min[0]);
    const average = Math.round((high + low) / 2);
    const wind = Math.round(daily.wind_speed_10m_max[0]);
    const rain = daily.precipitation_probability_max[0] ?? 0;
    const [condition, emoji] = weatherCondition(daily.weather_code[0], wind);
    const feel = temperatureFeel(average);
    state.weather = { high, low, average, wind, rain, condition, feel, emoji, date: daily.time[0] };
    $('weatherEmoji').textContent = emoji;
    $('temperature').textContent = `${average}°C`;
    $('weatherSentence').textContent = `In ${state.city.city}, it's ${average} degrees Celsius. It's ${condition} and ${feel}.`;
    $('weatherDetails').textContent = `${daily.time[0]} · Low ${low}°C / High ${high}°C · Rain ${rain}% · Wind ${wind} km/h`;
    $('packBtn').disabled = false;
    speak($('weatherSentence').textContent);
  } catch (error) {
    $('weatherEmoji').textContent = '📡';
    $('weatherSentence').textContent = `We can't reach today's forecast for ${state.city.city} right now.`;
    $('weatherDetails').textContent = 'Please try again. No practice weather has been substituted.';
    showToast('The live forecast is unavailable.');
  }
}

function packingRules() {
  const { condition, feel } = state.weather;
  const rules = [];
  const secureBottom = condition === 'windy' || condition === 'stormy';

  if (condition === 'snowy' || feel === 'cold') {
    rules.push({
      hint: 'Bring a coat and pants.',
      alternatives: [['coat', 'pants']]
    });
  } else if (feel === 'cool') {
    rules.push({
      hint: 'Bring a sweater or jacket with pants.',
      alternatives: [['sweater', 'pants'], ['jacket', 'pants']]
    });
  } else if (secureBottom) {
    rules.push({
      hint: 'Wear a T-shirt with pants for the wind.',
      alternatives: [['tshirt', 'pants']]
    });
  } else {
    rules.push({
      hint: 'Choose a dress, or wear a T-shirt with shorts, a skirt, or pants.',
      alternatives: [['dress'], ['tshirt', 'shorts'], ['tshirt', 'skirt'], ['tshirt', 'pants']]
    });
  }

  if (condition === 'snowy' || condition === 'stormy') {
    rules.push({ hint: 'Bring boots.', alternatives: [['boots']] });
  } else if (condition === 'rainy') {
    rules.push({ hint: 'Bring shoes or boots. Sandals are not suitable for rain.', alternatives: [['shoes'], ['boots']] });
  } else if (feel === 'hot' || feel === 'warm') {
    rules.push({ hint: 'Bring shoes or sandals.', alternatives: [['shoes'], ['sandals']] });
  } else {
    rules.push({ hint: 'Bring shoes or boots.', alternatives: [['shoes'], ['boots']] });
  }

  if (feel === 'hot') rules.push({ hint: 'Bring a water bottle.', alternatives: [['waterbottle']] });
  if (condition === 'rainy') rules.push({ hint: 'Bring an umbrella or a raincoat.', alternatives: [['umbrella'], ['raincoat']] });
  if (condition === 'stormy') rules.push({ hint: 'Bring a raincoat.', alternatives: [['raincoat']] });
  if (condition === 'snowy') {
    rules.push({ hint: 'Bring gloves and a scarf.', alternatives: [['gloves', 'scarf']] });
  }
  if (condition === 'sunny') {
    rules.push({ hint: 'Bring a hat, sunglasses, or sunscreen.', alternatives: [['hat'], ['sunglasses'], ['sunscreen']] });
  }
  if (condition === 'windy' && feel !== 'cold') {
    rules.push({ hint: 'Bring a light jacket for the wind.', alternatives: [['jacket']] });
  }
  if (condition === 'foggy' && feel !== 'cold') {
    rules.push({ hint: 'Bring a jacket or sweater for the foggy day.', alternatives: [['jacket'], ['sweater']] });
  }
  return rules;
}

function packingRuleIsSatisfied(rule) {
  return rule.alternatives.some(outfit => outfit.every(id => state.packed.has(id)));
}

function packingAdviceLines() {
  const { condition, feel } = state.weather;
  const lines = [];
  const temperatureAdvice = {
    hot: ['Temperature', 'It is hot. Choose a light T-shirt outfit or a dress. Bring a water bottle. A portable fan can help.'],
    warm: ['Temperature', 'It is warm. A T-shirt outfit or a dress will keep you comfortable.'],
    cool: ['Temperature', 'It is cool. Bring a sweater or a light jacket.'],
    cold: ['Temperature', 'It is cold. Bring a warm coat, pants, and a warm accessory.']
  };
  const weatherAdvice = {
    sunny: ['Weather', 'It is sunny. Bring a hat, sunglasses, or sunscreen. Shoes or sandals work on a dry day.'],
    rainy: ['Weather', 'It is rainy. Bring an umbrella or a raincoat. Wear shoes or boots, not sandals.'],
    cloudy: ['Weather', 'It is cloudy. Check the temperature before you choose a top.'],
    windy: ['Weather', feel === 'cold' ? 'It is windy and cold. Wear a warm coat.' : 'It is windy. Wear pants and bring a light jacket.'],
    stormy: ['Weather', 'It is stormy. Wear pants, a raincoat, and boots. Leave the umbrella at home.'],
    snowy: ['Weather', 'It is snowy. Bring boots, gloves, a scarf, and a coat.'],
    foggy: ['Weather', feel === 'cold' ? 'It is foggy and cold. Bring a warm coat.' : 'It is foggy. Bring a light jacket or sweater.']
  };
  lines.push(temperatureAdvice[feel], weatherAdvice[condition]);
  return lines;
}

function openPack() {
  if (!state.weather) return;
  state.packed = new Set();
  const weather = state.weather;
  $('packTitle').textContent = `Let's pack for ${state.city.city}!`;
  $('packPrompt').textContent = `Choose one complete outfit, suitable shoes, and the weather gear you need.${weather.feel === 'hot' ? ' A portable fan can help on a hot day.' : ''}`;
  $('packingAdvice').innerHTML = packingAdviceLines().map(([title, advice]) => `<div class="advice-card"><strong>${title}:</strong> ${advice}</div>`).join('');
  $('packCityFlag').innerHTML = flagMarkup(state.city);
  $('packCityName').textContent = state.city.city;
  $('packWeatherEmoji').textContent = weather.emoji;
  $('packAverageTemp').textContent = `${weather.average}°C`;
  $('packWeatherWords').textContent = `${weather.condition} & ${weather.feel}`;
  $('packCityDate').textContent = `City date: ${weather.date}`;
  $('packTemperatureRange').textContent = `Low ${weather.low}°C / High ${weather.high}°C`;
  $('packRainChance').textContent = `Rain ${weather.rain}%`;
  $('packWindSpeed').textContent = `Wind ${weather.wind} km/h`;
  $('packUpdatedTime').textContent = `Updated: ${new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Taipei', dateStyle:'medium', timeStyle:'short'}).format(new Date())} (Taiwan)`;
  $('packListenSentence').textContent = `Let's pack for ${state.city.city}. It is ${weather.condition} and ${weather.feel}. It is ${weather.average} degrees. Put clothes in your bag.`;
  $('bagFeedback').textContent = `What do you need in ${state.city.city}?`;
  renderItems();
  showScreen('packScreen', 3);
  speak($('packPrompt').textContent);
}

function renderItems() {
  $('itemGrid').innerHTML = '';
  ITEMS.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `item-btn${state.packed.has(item.id) ? ' selected' : ''}`;
    btn.innerHTML = `<span>${item.icon}</span>${item.name}`;
    btn.setAttribute('aria-pressed', String(state.packed.has(item.id)));
    btn.addEventListener('click', () => {
      state.packed.has(item.id) ? state.packed.delete(item.id) : state.packed.add(item.id);
      renderItems();
    });
    $('itemGrid').appendChild(btn);
  });
  $('packedItems').innerHTML = [...state.packed].map(id => {
    const item = ITEMS.find(i => i.id === id);
    return `<span class="packed-tag">${item.icon} ${item.name}</span>`;
  }).join('');
  $('emptyBag').hidden = state.packed.size > 0;
}

function checkBag() {
  const missingRule = packingRules().find(rule => !packingRuleIsSatisfied(rule));
  if (missingRule) {
    $('bagFeedback').textContent = `It's ${state.weather.condition} and ${state.weather.feel}. ${missingRule.hint}`;
    speak($('bagFeedback').textContent);
    return;
  }
  $('bagFeedback').textContent = `Great! Your bag is ready. Let's fly!`;
  speak($('bagFeedback').textContent);
  $('checkBagBtn').textContent = `Let's fly!`;
  $('checkBagBtn').onclick = startFlight;
}

function startFlight() {
  showScreen('mapScreen', 4);
  $('mapScreen').classList.add('flight-mode');
  $('mapTitle').textContent = `Flying to ${state.city.city}!`;
  $('choiceSentence').textContent = `Look out the window. Here we go!`;
  $('citySelect').disabled = true;
  $('surpriseBtn').disabled = true;
  $('cityMarkers').style.pointerEvents = 'none';
  $('arrivalCard').hidden = true;
  requestAnimationFrame(() => $('mapShell').scrollIntoView({ behavior: 'smooth', block: 'center' }));
  setTimeout(animateFlightToSelectedCity, 550);
}

function animateFlightToSelectedCity() {
  if (!state.city) return;
  const plane = $('planeToken');
  const shell = $('mapShell');
  const shellRect = shell.getBoundingClientRect();
  const targetMarker = document.querySelector(`.city-marker[data-city="${state.city.id}"]`);
  const markerRect = targetMarker.getBoundingClientRect();
  const targetX = markerRect.left + markerRect.width / 2 - shellRect.left - shell.clientLeft;
  const targetY = markerRect.top + markerRect.height / 2 - shellRect.top - shell.clientTop;
  const shellWidth = shell.clientWidth;
  const shellHeight = shell.clientHeight;
  plane.style.display = 'block';
  plane.classList.toggle('westbound', targetX < shellWidth / 2);
  applyAvatar(plane.querySelector('.map-plane-avatar'));
  const flightDirection = targetX < shellWidth / 2 ? -1 : 1;
  const planeWidth = plane.offsetWidth;
  const planeHeight = plane.offsetHeight;
  const edgePadding = 14;
  const noseOffset = Math.min(planeWidth * .34, 48);
  const rawLandingX = targetX - flightDirection * noseOffset;
  const rawLandingY = targetY + Math.min(planeHeight * .28, 18);
  const landingX = Math.min(shellWidth - planeWidth / 2 - edgePadding, Math.max(planeWidth / 2 + edgePadding, rawLandingX));
  const landingY = Math.min(shellHeight - planeHeight / 2 - edgePadding, Math.max(planeHeight / 2 + edgePadding, rawLandingY));
  plane.style.transition = 'none';
  plane.style.left = `${shellWidth / 2}px`;
  plane.style.top = `${shellHeight * .56}px`;
  plane.style.transform = `translate(-50%, -50%) scaleX(${flightDirection}) rotate(-8deg) scale(1.4)`;
  void plane.offsetWidth;
  plane.style.transition = 'left 3.8s cubic-bezier(.3,.75,.25,1), top 3.8s cubic-bezier(.3,.75,.25,1), transform 3.8s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    plane.style.left = `${landingX}px`;
    plane.style.top = `${landingY}px`;
    plane.style.transform = `translate(-50%, -50%) scaleX(${flightDirection}) rotate(-5deg) scale(1)`;
  }));
  speak(`Good job! Let's fly to ${state.city.city}.`);
  playFlightSound();
  setTimeout(showArrival, 4100);
}

function showArrival() {
  const city = state.city;
  showScreen('flightScreen', 4);
  $('flightTitle').textContent = `Hello, ${city.city}!`;
  $('cityPostcard').style.backgroundImage = `url("assets/cities/${city.id}.png")`;
  $('arrivalFlag').innerHTML = flagMarkup(city);
  $('stampCity').textContent = city.city;
  $('landmarkIcon').textContent = city.icon;
  $('arrivalTitle').textContent = `Welcome to ${city.city}!`;
  $('arrivalCityType').textContent = `${city.type} in ${city.country}`;
  $('arrivalLandmark').textContent = `Look! It's ${city.landmark}!`;
  $('landmarkFact').innerHTML = city.facts.map(fact => `<p>${fact}</p>`).join('');
  $('landmarkWords').innerHTML = city.words.map(word => `<span>${word}</span>`).join('');
  $('landmarkQuestion').textContent = city.question;
  $('packingPraise').textContent = `You packed for ${state.weather.condition} weather. Well done!`;
  $('arrivalCard').hidden = false;
  applyAvatar(document.querySelector('.postcard-avatar'));
  state.visited.add(city.id);
  renderPassport();
  speak(arrivalSpeech());
  showToast(`${city.city} added to your passport!`);
}

function arrivalSpeech() {
  if (!state.city) return '';
  return `${$('arrivalTitle').textContent} ${$('arrivalLandmark').textContent} ${state.city.facts.join(' ')}`;
}

function renderPassport() {
  applyAvatar($('passportExplorer'));
  $('passportName').textContent = state.englishName ? `Explorer: ${state.englishName}` : 'Explorer: Add your English name';
  $('passportProgress').textContent = `${state.visited.size} of ${CITIES.length} cities visited. Where will you go next?`;
  $('passportGrid').innerHTML = CITIES.map(city => {
    const visited = state.visited.has(city.id);
    return `<article class="passport-stamp ${visited ? 'visited' : ''}">
      <div class="stamp-flag">${flagMarkup(city)}</div><strong>${city.city}</strong><small>${city.type} · ${city.country}</small>
      <small>${city.landmark}</small><div class="visited-mark">${visited ? '✓ Visited' : 'Not yet'}</div>
    </article>`;
  }).join('');
}

function speak(text) {
  if (!state.sound || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  refreshVoices();
  const voice = preferredEnglishVoice();
  const utterance = new SpeechSynthesisUtterance(prepareSpeechText(text));
  utterance.voice = voice;
  utterance.lang = voice?.lang || 'en-US';
  utterance.rate = .82;
  utterance.pitch = 1.06;
  speechSynthesis.speak(utterance);
}

function playFlightSound() {
  if (!state.sound) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  const master = ctx.createGain();
  const lowPass = ctx.createBiquadFilter();
  const engine = ctx.createOscillator();
  const engineGain = ctx.createGain();
  const undertone = ctx.createOscillator();
  const undertoneGain = ctx.createGain();

  master.gain.value = .75;
  lowPass.type = 'lowpass';
  lowPass.frequency.value = 520;
  engine.type = 'sine';
  engine.frequency.setValueAtTime(96, ctx.currentTime);
  engine.frequency.linearRampToValueAtTime(116, ctx.currentTime + 1.4);
  engine.frequency.linearRampToValueAtTime(102, ctx.currentTime + 3.7);
  engineGain.gain.setValueAtTime(.0001, ctx.currentTime);
  engineGain.gain.exponentialRampToValueAtTime(.022, ctx.currentTime + .35);
  engineGain.gain.setValueAtTime(.022, ctx.currentTime + 3.15);
  engineGain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + 3.95);

  undertone.type = 'triangle';
  undertone.frequency.setValueAtTime(48, ctx.currentTime);
  undertone.frequency.linearRampToValueAtTime(58, ctx.currentTime + 1.4);
  undertoneGain.gain.value = .008;

  const windBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 4), ctx.sampleRate);
  const windData = windBuffer.getChannelData(0);
  for (let i = 0; i < windData.length; i++) windData[i] = (Math.random() * 2 - 1) * .22;
  const wind = ctx.createBufferSource();
  const windFilter = ctx.createBiquadFilter();
  const windGain = ctx.createGain();
  wind.buffer = windBuffer;
  windFilter.type = 'bandpass';
  windFilter.frequency.value = 620;
  windFilter.Q.value = .45;
  windGain.gain.setValueAtTime(.0001, ctx.currentTime);
  windGain.gain.exponentialRampToValueAtTime(.018, ctx.currentTime + .7);
  windGain.gain.setValueAtTime(.018, ctx.currentTime + 3.1);
  windGain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + 3.95);

  engine.connect(engineGain).connect(lowPass);
  undertone.connect(undertoneGain).connect(lowPass);
  wind.connect(windFilter).connect(windGain).connect(master);
  lowPass.connect(master).connect(ctx.destination);
  engine.start(); undertone.start(); wind.start();
  engine.stop(ctx.currentTime + 4.05); undertone.stop(ctx.currentTime + 4.05); wind.stop(ctx.currentTime + 4.05);

  [0, .18].forEach((delay, index) => {
    const bell = ctx.createOscillator();
    const bellGain = ctx.createGain();
    bell.type = 'sine';
    bell.frequency.value = index === 0 ? 659 : 784;
    bellGain.gain.setValueAtTime(.0001, ctx.currentTime + 3.45 + delay);
    bellGain.gain.exponentialRampToValueAtTime(.028, ctx.currentTime + 3.49 + delay);
    bellGain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + 3.82 + delay);
    bell.connect(bellGain).connect(master);
    bell.start(ctx.currentTime + 3.45 + delay);
    bell.stop(ctx.currentTime + 3.85 + delay);
  });
  setTimeout(() => ctx.close(), 4300);
}

function updateSoundButton() {
  $('soundBtn').textContent = state.sound ? '♫ Sound on' : '♫ Sound off';
  $('soundBtn').setAttribute('aria-pressed', String(state.sound));
}

renderExplorers();
refreshVoices();
if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = refreshVoices;
renderMarkers();
renderCitySelect();
renderCityCarousel();
renderPassport();
updateSoundButton();

$('englishNameInput').addEventListener('input', updateIdentityUI);
$('explorerIdentityForm').addEventListener('submit', event => {
  event.preventDefault();
  const englishName = cleanEnglishName($('englishNameInput').value);
  if (state.avatar < 0 || !hasUsableName(englishName)) return;
  state.englishName = englishName;
  $('englishNameInput').value = englishName;
  renderPassport();
  showToast(`Welcome, ${englishName}!`);
  showScreen('mapScreen', 1);
  speak('Where do you want to go?');
});
$('citySelect').addEventListener('change', event => {
  const city = CITIES.find(item => item.id === event.target.value);
  if (city) chooseCity(city);
});
$('weatherBtn').addEventListener('click', loadWeather);
$('listenWeatherBtn').addEventListener('click', () => speak($('weatherSentence').textContent));
$('packBtn').addEventListener('click', openPack);
$('listenPackBtn').addEventListener('click', () => speak($('packListenSentence').textContent));
$('checkBagBtn').addEventListener('click', checkBag);
$('listenArrivalBtn').addEventListener('click', () => speak(arrivalSpeech()));
$('nextTripBtn').addEventListener('click', () => { $('checkBagBtn').textContent = 'Check my bag'; $('checkBagBtn').onclick = null; state.city = null; state.weather = null; $('mapScreen').classList.remove('flight-mode'); $('destinationCard').hidden = false; $('planeToken').style.display = 'none'; $('planeToken').style.transition = ''; $('citySelect').disabled = false; $('citySelect').value = ''; $('surpriseBtn').disabled = false; $('cityMarkers').style.pointerEvents = ''; $('mapTitle').textContent = 'Where do you want to go?'; $('destinationFlag').innerHTML = ''; $('destinationName').textContent = 'Pick a city'; $('destinationPhrase').textContent = 'Choose a flag on the map or use the city menu.'; $('destinationMeta').textContent = ''; $('destinationPreview').style.backgroundImage = ''; $('weatherBtn').disabled = true; document.querySelectorAll('.city-marker, .city-chip-btn').forEach(m => m.classList.remove('selected')); $('choiceSentence').textContent = 'Choose a city on the map.'; showScreen('mapScreen', 1); });
$('surpriseBtn').addEventListener('click', () => chooseCity(CITIES[Math.floor(Math.random() * CITIES.length)]));
$('soundBtn').addEventListener('click', () => { state.sound = !state.sound; localStorage.setItem('weatherExplorerSound', state.sound ? 'on' : 'off'); if (!state.sound) speechSynthesis?.cancel(); updateSoundButton(); });
$('passportBtn').addEventListener('click', () => { renderPassport(); $('passportDialog').showModal(); });
$('closePassportBtn').addEventListener('click', () => $('passportDialog').close());
$('changeExplorerBtn').addEventListener('click', () => { $('passportDialog').close(); showScreen('explorerScreen', 0); });
$('homeBtn').addEventListener('click', () => showScreen('explorerScreen', 0));
document.querySelectorAll('[data-back]').forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.back, btn.dataset.back === 'mapScreen' ? 1 : 2)));

showScreen('explorerScreen', 0);
