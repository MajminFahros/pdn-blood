// ============================================================
// BLOOD STOCK LOCATOR - SAMPLE DATA
// ============================================================

const hospitalsData = [
    // SELANGOR
    { state: 'Selangor', city: 'Kuala Lumpur', hospital: 'Hospital Kuala Lumpur', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    { state: 'Selangor', city: 'Kuala Lumpur', hospital: 'Hospital Universiti Malaya', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    { state: 'Selangor', city: 'Subang Jaya', hospital: 'Subang Jaya Medical Centre', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Medium', 'AB+': 'Medium', 'AB-': 'Low', 'O+': 'Very High', 'O-': 'High' } },
    { state: 'Selangor', city: 'Petaling Jaya', hospital: 'Sunway Medical Centre', bloodStocks: { 'A+': 'High', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Low' } },
    { state: 'Selangor', city: 'Shah Alam', hospital: 'Hospital Sultan Abdul Halim Muadzam Shah', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Very Low', 'AB+': 'Low', 'AB-': 'Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // KUALA LUMPUR
    { state: 'Kuala Lumpur', city: 'Kuala Lumpur', hospital: 'Hospital Pusat Darah Negara', bloodStocks: { 'A+': 'Very High', 'A-': 'High', 'B+': 'Very High', 'B-': 'High', 'AB+': 'Medium', 'AB-': 'Medium', 'O+': 'Very High', 'O-': 'Very High' } },
    { state: 'Kuala Lumpur', city: 'Kuala Lumpur', hospital: 'Hospital Raja Permaisuri Bainun', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // PENANG
    { state: 'Pulau Pinang', city: 'Georgetown', hospital: 'Hospital Penang', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Medium', 'AB+': 'Medium', 'AB-': 'Low', 'O+': 'Very High', 'O-': 'High' } },
    { state: 'Pulau Pinang', city: 'Penang', hospital: 'Penang Adventist Hospital', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Low' } },
    { state: 'Pulau Pinang', city: 'Sungai Petani', hospital: 'Hospital Sungai Petani', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Very Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // JOHOR
    { state: 'Johor', city: 'Johor Bahru', hospital: 'Hospital Johor Bahru', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Low', 'O+': 'Very High', 'O-': 'High' } },
    { state: 'Johor', city: 'Johor Bahru', hospital: 'Mahkota Medical Centre', bloodStocks: { 'A+': 'High', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Low' } },
    { state: 'Johor', city: 'Kota Tinggi', hospital: 'Hospital Kota Tinggi', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Low', 'B-': 'Very Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'Medium', 'O-': 'Low' } },
    
    // KEDAH
    { state: 'Kedah', city: 'Alor Setar', hospital: 'Hospital Alor Setar', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    { state: 'Kedah', city: 'Sungai Petani', hospital: 'Hospital Kuala Muda', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Very Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Low' } },
    
    // PERAK
    { state: 'Perak', city: 'Ipoh', hospital: 'Hospital Raja Permaisuri Bainun', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Medium', 'AB+': 'Medium', 'AB-': 'Low', 'O+': 'Very High', 'O-': 'High' } },
    { state: 'Perak', city: 'Ipoh', hospital: 'Ipoh Specialist Hospital', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // KELANTAN
    { state: 'Kelantan', city: 'Kota Bharu', hospital: 'Hospital Raja Perempuan Zainab II', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // TERENGGANU
    { state: 'Terengganu', city: 'Kuala Terengganu', hospital: 'Hospital Sultan Zainal Abidin', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Low' } },
    
    // PAHANG
    { state: 'Pahang', city: 'Kuantan', hospital: 'Hospital Tengku Ampuan Afzan', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Very Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // SARAWAK
    { state: 'Sarawak', city: 'Kuching', hospital: 'Sarawak General Hospital', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'Very High', 'O-': 'High' } },
    
    // SABAH
    { state: 'Sabah', city: 'Kota Kinabalu', hospital: 'Queen Elizabeth Hospital', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'High', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Low', 'O+': 'Very High', 'O-': 'High' } },
    
    // NEGERI SEMBILAN
    { state: 'Negeri Sembilan', city: 'Seremban', hospital: 'Hospital Kuala Pilah', bloodStocks: { 'A+': 'Medium', 'A-': 'Low', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'Medium', 'O-': 'Low' } },
    
    // MELAKA
    { state: 'Melaka', city: 'Melaka', hospital: 'Hospital Melaka', bloodStocks: { 'A+': 'High', 'A-': 'Medium', 'B+': 'Medium', 'B-': 'Low', 'AB+': 'Low', 'AB-': 'Very Low', 'O+': 'High', 'O-': 'Medium' } },
    
    // PERLIS
    { state: 'Perlis', city: 'Kangar', hospital: 'Hospital Raja Suri Ismail', bloodStocks: { 'A+': 'Low', 'A-': 'Very Low', 'B+': 'Low', 'B-': 'Very Low', 'AB+': 'Very Low', 'AB-': 'Very Low', 'O+': 'Medium', 'O-': 'Low' } }
];

// ============================================================
// LOCATOR LOGIC
// ============================================================

let currentLanguage = 'ms';
let selectedFilters = {
    states: [],
    cities: [],
    hospitals: [],
    bloodTypes: []
};

document.addEventListener('DOMContentLoaded', function() {
    initializeLocator();
});

function initializeLocator() {
    // Language toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });

    // Populate initial filters
    populateStateFilter();
    
    // Add event listeners to filters
    document.getElementById('stateFilter').addEventListener('change', onStateChange);
    document.getElementById('cityFilter').addEventListener('change', onCityChange);
    document.getElementById('hospitalFilter').addEventListener('change', onHospitalChange);
    document.getElementById('bloodTypeFilter').addEventListener('change', applyFilters);
    
    // Reset button
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all data-attributes text
    document.querySelectorAll('[data-ms][data-en]').forEach(element => {
        if (lang === 'ms') {
            element.textContent = element.dataset.ms;
        } else {
            element.textContent = element.dataset.en;
        }
    });
}

function populateStateFilter() {
    const states = [...new Set(hospitalsData.map(h => h.state))].sort();
    const stateFilter = document.getElementById('stateFilter');
    stateFilter.innerHTML = '';
    
    states.forEach(state => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = state;
        input.addEventListener('change', onStateChange);
        label.appendChild(input);
        label.appendChild(document.createTextNode(state));
        stateFilter.appendChild(label);
    });
}

function onStateChange() {
    // Collect selected states
    selectedFilters.states = Array.from(document.querySelectorAll('#stateFilter input:checked')).map(i => i.value);
    selectedFilters.cities = [];
    selectedFilters.hospitals = [];
    
    // Clear city and hospital filters
    document.getElementById('cityFilter').innerHTML = '';
    document.getElementById('hospitalFilter').innerHTML = '';
    
    if (selectedFilters.states.length === 0) {
        document.getElementById('cityFilter').innerHTML = '';
        document.getElementById('hospitalFilter').innerHTML = '';
        document.getElementById('resultsBody').innerHTML = '';
        document.getElementById('noResults').style.display = 'block';
        return;
    }
    
    // Populate cities based on selected states
    populateCityFilter();
    applyFilters();
}

function populateCityFilter() {
    const cities = [...new Set(
        hospitalsData
            .filter(h => selectedFilters.states.includes(h.state))
            .map(h => h.city)
    )].sort();
    
    const cityFilter = document.getElementById('cityFilter');
    cityFilter.innerHTML = '';
    
    cities.forEach(city => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = city;
        input.addEventListener('change', onCityChange);
        label.appendChild(input);
        label.appendChild(document.createTextNode(city));
        cityFilter.appendChild(label);
    });
}

function onCityChange() {
    // Collect selected cities
    selectedFilters.cities = Array.from(document.querySelectorAll('#cityFilter input:checked')).map(i => i.value);
    selectedFilters.hospitals = [];
    
    // Clear hospital filters
    document.getElementById('hospitalFilter').innerHTML = '';
    
    if (selectedFilters.cities.length === 0) {
        document.getElementById('hospitalFilter').innerHTML = '';
        document.getElementById('resultsBody').innerHTML = '';
        document.getElementById('noResults').style.display = 'block';
        return;
    }
    
    // Populate hospitals based on selected cities
    populateHospitalFilter();
    applyFilters();
}

function populateHospitalFilter() {
    const hospitals = [...new Set(
        hospitalsData
            .filter(h => 
                selectedFilters.states.includes(h.state) &&
                selectedFilters.cities.includes(h.city)
            )
            .map(h => h.hospital)
    )].sort();
    
    const hospitalFilter = document.getElementById('hospitalFilter');
    hospitalFilter.innerHTML = '';
    
    hospitals.forEach(hospital => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = hospital;
        input.addEventListener('change', onHospitalChange);
        label.appendChild(input);
        label.appendChild(document.createTextNode(hospital));
        hospitalFilter.appendChild(label);
    });
}

function onHospitalChange() {
    // Collect selected hospitals
    selectedFilters.hospitals = Array.from(document.querySelectorAll('#hospitalFilter input:checked')).map(i => i.value);
    applyFilters();
}

function applyFilters() {
    // Collect selected blood types
    selectedFilters.bloodTypes = Array.from(document.querySelectorAll('#bloodTypeFilter input:checked')).map(i => i.value);
    
    let results = hospitalsData.filter(hospital => {
        const stateMatch = selectedFilters.states.length === 0 || selectedFilters.states.includes(hospital.state);
        const cityMatch = selectedFilters.cities.length === 0 || selectedFilters.cities.includes(hospital.city);
        const hospitalMatch = selectedFilters.hospitals.length === 0 || selectedFilters.hospitals.includes(hospital.hospital);
        
        return stateMatch && cityMatch && hospitalMatch;
    });
    
    // If blood types are selected, filter by blood type
    if (selectedFilters.bloodTypes.length > 0) {
        results = results.filter(hospital => 
            selectedFilters.bloodTypes.some(bloodType => hospital.bloodStocks[bloodType])
        );
    }
    
    displayResults(results);
}

function displayResults(results) {
    const tbody = document.getElementById('resultsBody');
    const noResults = document.getElementById('noResults');
    
    tbody.innerHTML = '';
    
    if (results.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    // Flatten results by blood type
    const flatResults = [];
    results.forEach(hospital => {
        if (selectedFilters.bloodTypes.length === 0) {
            // If no blood type selected, show all blood types
            Object.keys(hospital.bloodStocks).forEach(bloodType => {
                flatResults.push({
                    hospital: hospital.hospital,
                    city: hospital.city,
                    state: hospital.state,
                    bloodType: bloodType,
                    stock: hospital.bloodStocks[bloodType]
                });
            });
        } else {
            // Show only selected blood types
            selectedFilters.bloodTypes.forEach(bloodType => {
                flatResults.push({
                    hospital: hospital.hospital,
                    city: hospital.city,
                    state: hospital.state,
                    bloodType: bloodType,
                    stock: hospital.bloodStocks[bloodType]
                });
            });
        }
    });
    
    flatResults.forEach(result => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${result.hospital}</td>
            <td>${result.city}</td>
            <td>${result.state}</td>
            <td>${result.bloodType}</td>
            <td class="stock-${result.stock.toLowerCase().replace(' ', '-')}">${result.stock}</td>
        `;
        tbody.appendChild(tr);
    });
}

function resetFilters() {
    // Uncheck all filters
    document.querySelectorAll('.checkbox-group input').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset selected filters
    selectedFilters = {
        states: [],
        cities: [],
        hospitals: [],
        bloodTypes: []
    };
    
    // Reset display
    document.getElementById('cityFilter').innerHTML = '';
    document.getElementById('hospitalFilter').innerHTML = '';
    document.getElementById('resultsBody').innerHTML = '';
    document.getElementById('noResults').style.display = 'block';
}
