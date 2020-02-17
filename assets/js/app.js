// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import AOS from 'aos';
import mapboxgl from 'mapbox-gl';

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
  window.addEventListener('load', AOS.refresh);
});

$(function() {  
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoiY2s2cWl1a3pzMTByajNucDk3OTlzbGNsbyJ9.rPrZ8SXk_i_WVzvfDYdWcQ';
});

$(function(){

   var london = new mapboxgl.Map({
        container: 'london',
        style: 'mapbox://styles/garethjohnsdesign/ck6qijlqv3kw91iofqnvoieyz',
        center: [-0.138580, 51.541603],
        zoom: 13.88,
        scrollZoom: false
    });
    
    var losangeles = new mapboxgl.Map({
        container: 'losangeles',
        style: 'mapbox://styles/garethjohnsdesign/ck6qijlqv3kw91iofqnvoieyz',
        center: [-118.263695, 34.114348],
        zoom: 10.36,
        scrollZoom: false
    });

    var geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.138580, 51.541603]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.138580, 51.541603]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }]
    };

    // add markers to map
    geojson.features.forEach(function(marker) {
    
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(london);
    });

    var londonNav = new mapboxgl.NavigationControl();
    london.addControl(londonNav, 'top-left');
    
    var losangelesNav = new mapboxgl.NavigationControl();
    losangeles.addControl(losangelesNav, 'top-left');

});
