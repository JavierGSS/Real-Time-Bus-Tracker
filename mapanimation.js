mapboxgl.accessToken = 'pk.eyJ1IjoiYmFiYWxhbyIsImEiOiJjbGlzajE4M3Iwb3hzM2VvMWxkMGM2M28xIn0.33Lyj_l4hDBMiHg4SA08tQ';

var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-71.092761, 42.365554],
      zoom: 14
  });

  var marker = new mapboxgl.Marker({
    color: '#2BE5A6'
  })
    .setLngLat([-71.093729, 42.359244])
    .addTo(map);

const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.095800, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863]
];

const busStations = [
  'Massachussets Ave.',
  'Vassar St.',
  'Albany St.',
  'Sidney St.',
  'Prospect St.',
  'Bigelow St.',
  'Hancock St.',
  'Dana St.',
  'Trowbridge St.',
  'Quincy St.',
  'Holyoke St.',
  'Johnston Gate'
]

var counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) {
      return;
    } else {
      var marcador = new mapboxgl.Marker({
        color: '#2BE5A6'
      })
        .setLngLat(busStops[counter])
        .addTo(map)
        .setPopup(new mapboxgl.Popup({id:"popup"}).setHTML(busStations[counter]))
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
      
    };
  }, 1000);
}

map.on('load', () => {
    map.loadImage(
    'https://64.media.tumblr.com/1cf47e1ec884ff488040fa5bf26ec107/ee83d3c2e1c0e5ea-32/s1280x1920/225d8001b8c7b08bbf3365a94ab9662bf6621705.jpg',
    (error, image) => {
    if (error) throw error;
     
    map.addImage('mit', image);

    map.addSource('point', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-71.095, 42.3585]
    }
    }
    ]
    }
    });
     
    map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'point', 
    'layout': {
    'icon-image': 'mit',
    'icon-size': 0.05
    }
    });
    }
    );
    });