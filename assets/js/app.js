// @codekit-prepend "/../node_modules/jquery/dist/jquery.js";
// @codekit-prepend "/../node_modules/foundation-sites/dist/js/foundation.js";
// @codekit-prepend "/../node_modules/motion-ui/dist/motion-ui.js";
// @codekit-prepend "/../node_modules/what-input/dist/what-input.js";
// @codekit-prepend "/../node_modules/aos/dist/aos.js";
// @codekit-prepend "/../node_modules/lightgallery/dist/js/lightgallery-all.js";

$(document).on('turbolinks:load', function() {

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
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoibWRoWDZWUSJ9.n1A58EO10IDrB5yIAKqAPA';
});

$(function(){
  if($('body').is('.contact')){
    
           var london = new mapboxgl.Map({
                container: 'london',
                style: 'mapbox://styles/garethjohnsdesign/cjl4u2rwc31nd2sqakytpdf6b',
                center: [-0.138580, 51.541603],
                zoom: 13.88,
                scrollZoom: false
            });
            
            var losangeles = new mapboxgl.Map({
                container: 'losangeles',
                style: 'mapbox://styles/garethjohnsdesign/ck1ja3pwy01di1cn08g5khe5a',
                center: [-118.263695, 34.114348],
                zoom: 10.36,
                scrollZoom: false
            });

            var londonNav = new mapboxgl.NavigationControl();
            london.addControl(londonNav, 'top-left');
            
            var losangelesNav = new mapboxgl.NavigationControl();
            losangeles.addControl(losangelesNav, 'top-left');
      
    }
  });

});