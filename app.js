const CITIES = [
  { id:'taipei', city:'Taipei', country:'Taiwan', flagCode:'tw', lat:25.04, lon:121.56, x:80, y:48, landmark:'Taipei 101', icon:'🏙️', fact:'Taipei 101 is very tall.' },
  { id:'bern', city:'Bern', country:'Switzerland', flagCode:'ch', lat:46.95, lon:7.45, x:47.1, y:37, landmark:'the Zytglogge Clock Tower', icon:'🕰️', fact:'The clock tower is very old.' },
  { id:'berlin', city:'Berlin', country:'Germany', flagCode:'de', lat:52.52, lon:13.41, x:50, y:32, landmark:'the Brandenburg Gate', icon:'🏛️', fact:'The Brandenburg Gate is famous.' },
  { id:'tokyo', city:'Tokyo', country:'Japan', flagCode:'jp', lat:35.68, lon:139.69, x:88, y:42, landmark:'Mount Fuji', icon:'🗻', fact:'Mount Fuji is big and beautiful.' },
  { id:'washington', city:'Washington, D.C.', country:'the USA', flagCode:'us', lat:38.91, lon:-77.04, x:22, y:37, landmark:'the White House', icon:'🏛️', fact:'The White House is in Washington, D.C.' },
  { id:'rome', city:'Rome', country:'Italy', flagCode:'it', lat:41.9, lon:12.5, x:49.5, y:43, landmark:'the Colosseum', icon:'🏟️', fact:'The Colosseum is very old.' },
  { id:'mexico', city:'Mexico City', country:'Mexico', flagCode:'mx', lat:19.43, lon:-99.13, x:15, y:49, landmark:'the Angel of Independence', icon:'🪽', fact:'The golden angel has wings.' },
  { id:'abudhabi', city:'Abu Dhabi', country:'the UAE', flagCode:'ae', lat:24.45, lon:54.38, x:61, y:49, landmark:'the Sheikh Zayed Grand Mosque', icon:'🕌', fact:'The mosque is bright and beautiful.' },
  { id:'bangkok', city:'Bangkok', country:'Thailand', flagCode:'th', lat:13.76, lon:100.5, x:71, y:57, landmark:'the Grand Palace', icon:'🛕', fact:'The Grand Palace is beautiful.' },
  { id:'london', city:'London', country:'the UK', flagCode:'gb', lat:51.51, lon:-0.13, x:44, y:31, landmark:'Big Ben', icon:'🕰️', fact:'Big Ben is a famous clock.' },
  { id:'canberra', city:'Canberra', country:'Australia', flagCode:'au', lat:-35.28, lon:149.13, x:88, y:79, landmark:'Parliament House', icon:'🏛️', fact:'Parliament House has a big flag.' },
  { id:'buenosaires', city:'Buenos Aires', country:'Argentina', flagCode:'ar', lat:-34.6, lon:-58.38, x:30, y:79, landmark:'the Obelisk', icon:'🔺', fact:'The Obelisk is tall and white.' },
  { id:'seoul', city:'Seoul', country:'South Korea', flagCode:'kr', lat:37.57, lon:126.98, x:83, y:39, landmark:'Gyeongbokgung Palace', icon:'🏯', fact:'The palace has colorful roofs.' },
  { id:'singapore', city:'Singapore', country:'Singapore', flagCode:'sg', lat:1.35, lon:103.82, x:73, y:67, landmark:'the Merlion', icon:'🦁', fact:"The Merlion has a lion's head." },
  { id:'reykjavik', city:'Reykjavík', country:'Iceland', flagCode:'is', lat:64.15, lon:-21.94, x:42, y:19, landmark:'Hallgrímskirkja Church', icon:'⛪', fact:'The church looks like a mountain.' },
  { id:'ottawa', city:'Ottawa', country:'Canada', flagCode:'ca', lat:45.42, lon:-75.7, x:23.5, y:31, landmark:'Parliament Hill', icon:'🏛️', fact:'Parliament Hill has a tall clock tower.' },
  { id:'wellington', city:'Wellington', country:'New Zealand', flagCode:'nz', lat:-41.29, lon:174.78, x:96, y:88, landmark:'the Beehive', icon:'🐝', fact:'The Beehive looks like a beehive.' },
  { id:'lima', city:'Lima', country:'Peru', flagCode:'pe', lat:-12.05, lon:-77.04, x:20, y:66, landmark:'Plaza Mayor', icon:'⛲', fact:'Plaza Mayor has a beautiful fountain.' },
  { id:'santiago', city:'Santiago', country:'Chile', flagCode:'cl', lat:-33.45, lon:-70.67, x:25, y:78, landmark:'La Moneda Palace', icon:'🏛️', fact:'La Moneda Palace is an important building.' },
  { id:'paris', city:'Paris', country:'France', flagCode:'fr', lat:48.86, lon:2.35, x:46, y:34, landmark:'the Eiffel Tower', icon:'🗼', fact:'The Eiffel Tower is very tall.' }
];

const ITEMS = [
  {id:'tshirt', name:'T-shirt', icon:itemIcon('tshirt')}, {id:'sweater', name:'sweater', icon:itemIcon('sweater')},
  {id:'jacket', name:'jacket', icon:itemIcon('jacket')}, {id:'coat', name:'coat', icon:itemIcon('coat')},
  {id:'shorts', name:'shorts', icon:itemIcon('shorts')}, {id:'pants', name:'pants', icon:itemIcon('pants')},
  {id:'shoes', name:'shoes', icon:itemIcon('shoes')}, {id:'boots', name:'boots', icon:itemIcon('boots')},
  {id:'hat', name:'hat', icon:itemIcon('hat')}, {id:'scarf', name:'scarf', icon:itemIcon('scarf')},
  {id:'gloves', name:'gloves', icon:itemIcon('gloves')}, {id:'umbrella', name:'umbrella', icon:itemIcon('umbrella')},
  {id:'sunglasses', name:'sunglasses', icon:itemIcon('sunglasses')}, {id:'raincoat', name:'raincoat', icon:itemIcon('raincoat')},
  {id:'sunscreen', name:'sunscreen', icon:itemIcon('sunscreen')}, {id:'waterbottle', name:'water bottle', icon:itemIcon('waterbottle')}
];

function itemIcon(id) {
  return `<img src="assets/items/${id}.png" alt="">`;
}

const MARKER_OFFSETS = {
  ottawa: [26, -18], washington: [-24, 22],
  london: [-34, -20], paris: [-18, 22], bern: [14, 36], berlin: [34, -18], rome: [38, 28],
  seoul: [-34, -20], tokyo: [32, -12], taipei: [4, 28],
  bangkok: [-12, 8], singapore: [24, 18],
  lima: [-24, -8], santiago: [-18, 25], buenosaires: [28, 12]
};

const state = {
  avatar: Number(localStorage.getItem('weatherExplorerAvatar') ?? -1),
  sound: localStorage.getItem('weatherExplorerSound') !== 'off',
  city: null,
  weather: null,
  packed: new Set(),
  visited: new Set(JSON.parse(localStorage.getItem('weatherExplorerVisited') || '[]'))
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
}

function chooseAvatar(index, speakChoice = true) {
  if (index < 0 || index > 9) return;
  state.avatar = index;
  localStorage.setItem('weatherExplorerAvatar', String(index));
  document.querySelectorAll('.explorer-card').forEach((card, i) => card.classList.toggle('selected', i === index));
  $('startAdventureBtn').disabled = false;
  applyAvatar($('passportExplorer'));
  if (speakChoice) speak('This is your explorer!');
}

function applyAvatar(el) {
  if (!el || state.avatar < 0) return;
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
  $('destinationMeta').textContent = `Landmark: ${city.landmark}`;
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

function packingGroups() {
  const { condition, feel } = state.weather;
  const groups = [];
  if (condition === 'snowy' || condition === 'stormy') groups.push(['boots']);
  else groups.push(['shoes', 'boots']);
  if (feel === 'hot') groups.push(['tshirt'], ['shorts', 'pants'], ['waterbottle']);
  if (feel === 'warm') groups.push(['tshirt'], ['shorts', 'pants']);
  if (feel === 'cool') groups.push(['sweater', 'jacket'], ['pants']);
  if (feel === 'cold') groups.push(['coat'], ['pants'], ['gloves', 'scarf']);
  if (condition === 'rainy') groups.push(['umbrella', 'raincoat']);
  if (condition === 'stormy') groups.push(['raincoat']);
  if (condition === 'snowy') groups.push(['coat'], ['boots'], ['gloves'], ['scarf']);
  if (condition === 'sunny') {
    groups.push(['hat', 'sunglasses', 'sunscreen']);
    if (feel === 'warm') groups.push(['waterbottle']);
  }
  if (condition === 'windy') groups.push(feel === 'cold' ? ['coat'] : ['jacket']);
  if (condition === 'foggy') groups.push(feel === 'cold' ? ['coat'] : ['jacket', 'sweater']);
  return groups;
}

function packingAdviceLines() {
  const { condition, feel } = state.weather;
  const lines = [];
  const temperatureAdvice = {
    hot: ['Temperature', 'It is hot. Bring a T-shirt, shorts, and a water bottle.'],
    warm: ['Temperature', 'It is warm. Choose light clothes and comfortable shoes.'],
    cool: ['Temperature', 'It is cool. Bring a sweater or a light jacket.'],
    cold: ['Temperature', 'It is cold. Bring a warm coat, pants, and a warm accessory.']
  };
  const weatherAdvice = {
    sunny: ['Weather', 'It is sunny. Bring a hat, sunglasses, or sunscreen.'],
    rainy: ['Weather', 'It is rainy. Bring an umbrella or a raincoat. Boots can keep your feet dry.'],
    cloudy: ['Weather', 'It is cloudy. Check the temperature before you choose a top.'],
    windy: ['Weather', feel === 'cold' ? 'It is windy and cold. Wear a warm coat.' : 'It is windy. Bring a light jacket.'],
    stormy: ['Weather', 'It is stormy. Bring a raincoat and boots. Leave the umbrella at home.'],
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
  const req = packingGroups().map(group => ITEMS.find(i => i.id === group[0]).name);
  $('packPrompt').textContent = `You should bring ${req.slice(0,3).join(', ')}. Use both the weather and the temperature to pack.`;
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
  const missingGroup = packingGroups().find(group => !group.some(id => state.packed.has(id)));
  if (missingGroup) {
    const choices = missingGroup.map(id => ITEMS.find(i => i.id === id).name);
    const suggestion = choices.length === 1 ? choices[0] : `${choices.slice(0, -1).join(', ')} or ${choices.at(-1)}`;
    $('bagFeedback').textContent = `It's ${state.weather.condition} and ${state.weather.feel}. Don't forget to bring ${suggestion}!`;
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
  const plane = $('planeToken');
  const shellRect = $('mapShell').getBoundingClientRect();
  const targetMarker = document.querySelector(`.city-marker[data-city="${state.city.id}"]`);
  const markerRect = targetMarker.getBoundingClientRect();
  const targetX = markerRect.left + markerRect.width / 2 - shellRect.left;
  const targetY = markerRect.top + markerRect.height / 2 - shellRect.top;
  plane.style.display = 'block';
  plane.classList.toggle('westbound', targetX < shellRect.width / 2);
  applyAvatar(plane.querySelector('.map-plane-avatar'));
  const flightDirection = targetX < shellRect.width / 2 ? -1 : 1;
  plane.style.transition = 'none';
  plane.style.left = `${shellRect.width / 2}px`;
  plane.style.top = `${shellRect.height * .56}px`;
  plane.style.transform = `translate(-50%, -50%) scaleX(${flightDirection}) rotate(-8deg) scale(1.4)`;
  void plane.offsetWidth;
  plane.style.transition = 'left 3.8s cubic-bezier(.3,.75,.25,1), top 3.8s cubic-bezier(.3,.75,.25,1), transform 3.8s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    plane.style.left = `${targetX}px`;
    plane.style.top = `${targetY}px`;
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
  $('arrivalLandmark').textContent = `Look! It's ${city.landmark}!`;
  $('landmarkFact').textContent = city.fact;
  $('packingPraise').textContent = `You packed for ${state.weather.condition} weather. Well done!`;
  $('arrivalCard').hidden = false;
  applyAvatar(document.querySelector('.postcard-avatar'));
  state.visited.add(city.id);
  localStorage.setItem('weatherExplorerVisited', JSON.stringify([...state.visited]));
  renderPassport();
  speak(`${$('arrivalTitle').textContent} ${$('arrivalLandmark').textContent} ${city.fact}`);
  showToast(`${city.city} added to your passport!`);
}

function renderPassport() {
  applyAvatar($('passportExplorer'));
  $('passportProgress').textContent = `${state.visited.size} of ${CITIES.length} cities visited. Where will you go next?`;
  $('passportGrid').innerHTML = CITIES.map(city => {
    const visited = state.visited.has(city.id);
    return `<article class="passport-stamp ${visited ? 'visited' : ''}">
      <div class="stamp-flag">${flagMarkup(city)}</div><strong>${city.city}</strong><small>${city.country}</small>
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

$('startAdventureBtn').addEventListener('click', () => { showScreen('mapScreen', 1); speak('Where do you want to go?'); });
$('citySelect').addEventListener('change', event => {
  const city = CITIES.find(item => item.id === event.target.value);
  if (city) chooseCity(city);
});
$('weatherBtn').addEventListener('click', loadWeather);
$('listenWeatherBtn').addEventListener('click', () => speak($('weatherSentence').textContent));
$('packBtn').addEventListener('click', openPack);
$('listenPackBtn').addEventListener('click', () => speak($('packListenSentence').textContent));
$('checkBagBtn').addEventListener('click', checkBag);
$('listenArrivalBtn').addEventListener('click', () => speak(`${$('arrivalTitle').textContent} ${$('arrivalLandmark').textContent} ${$('landmarkFact').textContent}`));
$('nextTripBtn').addEventListener('click', () => { $('checkBagBtn').textContent = 'Check my bag'; $('checkBagBtn').onclick = null; state.city = null; state.weather = null; $('mapScreen').classList.remove('flight-mode'); $('destinationCard').hidden = false; $('planeToken').style.display = 'none'; $('planeToken').style.transition = ''; $('citySelect').disabled = false; $('citySelect').value = ''; $('surpriseBtn').disabled = false; $('cityMarkers').style.pointerEvents = ''; $('mapTitle').textContent = 'Where do you want to go?'; $('destinationFlag').innerHTML = ''; $('destinationName').textContent = 'Pick a city'; $('destinationPhrase').textContent = 'Choose a flag on the map or use the city menu.'; $('destinationMeta').textContent = ''; $('destinationPreview').style.backgroundImage = ''; $('weatherBtn').disabled = true; document.querySelectorAll('.city-marker, .city-chip-btn').forEach(m => m.classList.remove('selected')); $('choiceSentence').textContent = 'Choose a city on the map.'; showScreen('mapScreen', 1); });
$('surpriseBtn').addEventListener('click', () => chooseCity(CITIES[Math.floor(Math.random() * CITIES.length)]));
$('soundBtn').addEventListener('click', () => { state.sound = !state.sound; localStorage.setItem('weatherExplorerSound', state.sound ? 'on' : 'off'); if (!state.sound) speechSynthesis?.cancel(); updateSoundButton(); });
$('passportBtn').addEventListener('click', () => { renderPassport(); $('passportDialog').showModal(); });
$('closePassportBtn').addEventListener('click', () => $('passportDialog').close());
$('changeExplorerBtn').addEventListener('click', () => { $('passportDialog').close(); showScreen('explorerScreen', 0); });
$('homeBtn').addEventListener('click', () => showScreen(state.avatar >= 0 ? 'mapScreen' : 'explorerScreen', state.avatar >= 0 ? 1 : 0));
document.querySelectorAll('[data-back]').forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.back, btn.dataset.back === 'mapScreen' ? 1 : 2)));

if (state.avatar >= 0) showScreen('mapScreen', 1);
