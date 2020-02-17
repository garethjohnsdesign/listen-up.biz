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