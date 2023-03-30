'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//////////////////////////////
//232. Geolocation API

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    // 233. Displaying map
    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // 234. Map Marker
    map.on('click', function (mapEvent) {
      console.log(mapEvent);
      const { lat, lng } = mapEvent.latlng;

      L.marker([lat, lng]).addTo(map).bindPopup('Workout').openPopup();
    }),
      function () {
        alert('Could not get your position');
      };
  });
