// ── 1. CITY DATA ─────────────────────────────────────────────
// Maps state keys to their list of cities/districts
const cities = {
  selangor:   ['Shah Alam','Petaling Jaya','Subang Jaya','Klang','Ampang','Sepang','Kajang','Rawang'],
  kl:         ['Chow Kit','Bukit Bintang','Kepong','Wangsa Maju','Bangsar','Titiwangsa','Setiawangsa'],
  johor:      ['Johor Bahru','Muar','Batu Pahat','Kluang','Segamat','Pontian','Kota Tinggi'],
  perak:      ['Ipoh','Taiping','Teluk Intan','Seri Manjung','Kampar','Batu Gajah'],
  penang:     ['George Town','Butterworth','Bukit Mertajam','Nibong Tebal','Bayan Lepas'],
  pahang:     ['Kuantan','Temerloh','Bentong','Raub','Pekan','Jerantut','Maran'],
  kedah:      ['Alor Setar','Sungai Petani','Kulim','Langkawi','Baling','Pendang'],
  ns:         ['Seremban','Port Dickson','Nilai','Rembau','Tampin','Kuala Pilah'],
  melaka:     ['Melaka Tengah','Alor Gajah','Jasin'],
  kelantan:   ['Kota Bharu','Pasir Mas','Tumpat','Machang','Tanah Merah'],
  terengganu: ['Kuala Terengganu','Kemaman','Dungun','Besut','Marang'],
  sabah:      ['Kota Kinabalu','Sandakan','Tawau','Lahad Datu','Keningau'],
  sarawak:    ['Kuching','Miri','Sibu','Bintulu','Sarikei']
};


// ── 2. DUMMY LOCATION DATA ───────────────────────────────────
// Add more states/cities/locations here as needed
const dummyLocations = {
  selangor: {
    'Shah Alam': [
      { name:'Hospital Shah Alam',         address:'Persiaran Kayangan, Seksyen 7, Shah Alam',      type:'Hospital',        status:'active',   time:'8:00 pagi – 5:00 petang',    slots:'23 slot tersisa',   icon:'🏥' },
      { name:'Kempen Derma Darah UITM',    address:'Universiti Teknologi MARA, Shah Alam',           type:'Kempen Bergerak', status:'upcoming', time:'Bermula jam 2:00 petang',     slots:'Tempahan dibuka',   icon:'🚐' },
      { name:'Pusat Komuniti Seksyen 13',  address:'Jalan Masjid, Seksyen 13, Shah Alam',            type:'Pusat Komuniti',  status:'active',   time:'9:00 pagi – 4:00 petang',    slots:'8 slot tersisa',    icon:'🏢' },
    ],
    'Subang Jaya': [
      { name:'Hospital Subang Jaya',       address:'Jalan SS12/1, Subang Jaya',                      type:'Hospital',        status:'active',   time:'8:00 pagi – 4:30 petang',    slots:'15 slot tersisa',   icon:'🏥' },
      { name:'Kempen MySS15 Courtyard',    address:'SS15 Courtyard, Subang Jaya',                    type:'Kempen Bergerak', status:'full',     time:'8:00 pagi – 1:00 petang',    slots:'Penuh',             icon:'🚐' },
    ],
    'Petaling Jaya': [
      { name:'Hospital Pantai PJ',         address:'Jalan Bukit Pantai, Petaling Jaya',              type:'Hospital',        status:'active',   time:'8:00 pagi – 5:00 petang',    slots:'31 slot tersisa',   icon:'🏥' },
      { name:'Kempen 1 Utama',             address:'1 Utama Shopping Centre, Bandar Utama, PJ',      type:'Kempen Bergerak', status:'upcoming', time:'Bermula jam 10:00 pagi',      slots:'Tempahan dibuka',   icon:'🚐' },
    ]
  },
  pahang: {
    'Kuantan': [
      { name:'Hospital Tengku Ampuan Afzan', address:'Jalan Tanah Putih, Kuantan',                   type:'Hospital',        status:'active',   time:'8:00 pagi – 5:00 petang',    slots:'19 slot tersisa',   icon:'🏥' },
      { name:'Kempen Derma Darah IIUM',    address:'International Islamic University Malaysia, Kuantan', type:'Kempen Bergerak', status:'active', time:'9:00 pagi – 3:00 petang',  slots:'12 slot tersisa',   icon:'🚐' },
      { name:'Pusat Kesihatan Bandar Kuantan', address:'Jalan Haji Abdul Aziz, Kuantan',             type:'Klinik',          status:'upcoming', time:'Bermula jam 2:30 petang',     slots:'Tempahan dibuka',   icon:'🏥' },
    ],
    'Temerloh': [
      { name:'Hospital Temerloh',          address:'Jalan Dato Hamzah, Temerloh',                    type:'Hospital',        status:'active',   time:'8:00 pagi – 4:00 petang',    slots:'7 slot tersisa',    icon:'🏥' },
    ],
    'Bentong': [
      { name:'Hospital Bentong',           address:'Jalan Hospital, Bentong',                        type:'Hospital',        status:'full',     time:'8:00 pagi – 12:00 tengahari', slots:'Penuh',            icon:'🏥' },
    ]
  },
  kl: {
    'Chow Kit': [
      { name:'Pusat Darah Negara (HQ)',    address:'Jalan Tun Razak, 50400 Kuala Lumpur',            type:'PDN Utama',       status:'active',   time:'8:00 pagi – 5:00 petang',    slots:'Sentiasa Buka',     icon:'🏛️' },
    ],
    'Titiwangsa': [
      { name:'Hospital Kuala Lumpur',      address:'Jalan Pahang, Kuala Lumpur',                     type:'Hospital',        status:'active',   time:'8:00 pagi – 5:00 petang',    slots:'44 slot tersisa',   icon:'🏥' },
      { name:'Kempen Titiwangsa Mall',     address:'Titiwangsa Mall, KL',                            type:'Kempen Bergerak', status:'upcoming', time:'Bermula jam 11:00 pagi',      slots:'Tempahan dibuka',   icon:'🚐' },
    ],
    'Wangsa Maju': [
      { name:'Klinik Kesihatan Wangsa Maju', address:'Seksyen 5, Wangsa Maju, KL',                  type:'Klinik',          status:'active',   time:'8:00 pagi – 4:00 petang',    slots:'5 slot tersisa',    icon:'🏥' },
    ]
  }
};


// ── 3. DROPDOWN LOGIC ────────────────────────────────────────

function loadCities() {
  const state   = document.getElementById('stateSelect').value;
  const cityEl  = document.getElementById('citySelect');
  const searchBtn = document.getElementById('searchBtn');

  // Reset city dropdown
  cityEl.innerHTML = '<option value="">— Pilih Bandar —</option>';
  cityEl.disabled  = !state;
  searchBtn.disabled = true;

  // Reset results panel
  document.getElementById('resultsArea').innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">🏙️</span>
      <h3>Pilih Bandar Anda</h3>
      <p>Negeri dipilih. Kini sila pilih bandar atau daerah untuk mencari lokasi derma darah.</p>
    </div>`;

  if (!state) return;

  // Populate cities for selected state
  (cities[state] || []).forEach(city => {
    const opt = document.createElement('option');
    opt.value = city;
    opt.textContent = city;
    cityEl.appendChild(opt);
  });
}

function enableSearch() {
  document.getElementById('searchBtn').disabled =
    !document.getElementById('citySelect').value;
}


// ── 4. FILTER LOGIC ──────────────────────────────────────────

let activeFilter = 'semua'; // tracks current active filter

function toggleFilter(el, val) {
  document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  activeFilter = val;
  // Re-render with new filter if results already loaded
  if (lastResults.length > 0) renderResults(lastResults);
}


// ── 5. SEARCH LOGIC ──────────────────────────────────────────

let lastResults = []; // stores last search results for re-filtering

function doSearch() {
  const state = document.getElementById('stateSelect').value;
  const city  = document.getElementById('citySelect').value;
  if (!state || !city) return;

  // Show loading spinner
  document.getElementById('loadingState').style.display = 'block';
  document.getElementById('resultsArea').innerHTML = '';

  // Simulate network delay (replace setTimeout with fetch() for real API)
  setTimeout(() => {
    document.getElementById('loadingState').style.display = 'none';

    // ── REPLACE THIS BLOCK WITH YOUR API CALL IF NEEDED ──
    const results = (dummyLocations[state] || {})[city] || [];
    // ─────────────────────────────────────────────────────

    lastResults = results;
    renderResults(results, city);
  }, 1000);
}


// ── 6. RENDER RESULTS ────────────────────────────────────────

function renderResults(results, city) {
  const area      = document.getElementById('resultsArea');
  const cityLabel = city || document.getElementById('citySelect').value;

  // Apply active filter
  let filtered = results;
  if      (activeFilter === 'aktif')   filtered = results.filter(r => r.status === 'active');
  else if (activeFilter === 'akan')    filtered = results.filter(r => r.status === 'upcoming');
  else if (activeFilter === 'hospital')filtered = results.filter(r => r.type.includes('Hospital') || r.type.includes('Klinik') || r.type.includes('PDN'));
  else if (activeFilter === 'kempen')  filtered = results.filter(r => r.type.includes('Kempen') || r.type.includes('Komuniti'));

  // No results
  if (filtered.length === 0) {
    area.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">😔</span>
        <h3>Tiada Lokasi Dijumpai</h3>
        <p>Tiada kempen derma darah yang aktif di <strong>${cityLabel}</strong> pada masa ini, atau tiada yang sepadan dengan penapis anda.</p>
      </div>`;
    return;
  }

  const timeStr = new Date().toLocaleTimeString('ms-MY', { hour:'2-digit', minute:'2-digit' });

  // Inject results header + grid container
  area.innerHTML = `
    <div class="results-header">
      <div class="results-title">📍 Lokasi di <strong>${cityLabel}</strong></div>
      <div class="results-count">${filtered.length} lokasi dijumpai • Dikemaskini ${timeStr}</div>
    </div>
    <div class="results-grid" id="resultsGrid"></div>`;

  const grid = document.getElementById('resultsGrid');

  // Build each location card
  filtered.forEach((loc, i) => {
    const statusLabel = loc.status === 'active'   ? 'Sedang Aktif'   :
                        loc.status === 'upcoming' ? 'Akan Datang'    : 'Penuh / Ditutup';
    const badgeClass  = loc.status === 'active'   ? 'badge-active'   :
                        loc.status === 'upcoming' ? 'badge-upcoming' : 'badge-full';
    const iconClass   = loc.status === 'active'   ? 'active-icon'    :
                        loc.status === 'upcoming' ? 'upcoming-icon'  : 'full-icon';
    const slotClass   = loc.status === 'full'     ? 'chip-full'      : 'chip-slots';

    const card = document.createElement('div');
    card.className = 'location-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="loc-icon ${iconClass}">${loc.icon}</div>
      <div class="loc-info">
        <h3>${loc.name}</h3>
        <div class="loc-address">📍 ${loc.address}</div>
        <div class="loc-meta">
          <span class="meta-chip chip-time">🕐 ${loc.time}</span>
          <span class="meta-chip chip-type">🩸 ${loc.type}</span>
          <span class="meta-chip ${slotClass}">${loc.status === 'full' ? '❌' : '✅'} ${loc.slots}</span>
        </div>
      </div>
      <div class="loc-action">
        <div class="status-badge ${badgeClass}">
          <div class="badge-dot"></div> ${statusLabel}
        </div><br>
        <button class="map-btn" onclick="openMap('${loc.name}', '${loc.address}')">
          🗺️ Lihat Peta
        </button>
      </div>`;
    grid.appendChild(card);
  });
}


// ── 7. MAP HANDLER ───────────────────────────────────────────
// Replace this with real Google Maps integration if needed

function openMap(name, address) {
  // TODO: Replace alert with actual Google Maps embed or redirect
  alert(`Dalam implementasi sebenar, ini akan membuka Google Maps ke:\n\n📍 ${name}\n${address}`);
}


// ── ADD YOUR EXTRA JS BELOW THIS LINE ────────────────────────