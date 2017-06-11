 $(document).ready(function() {
 	 // Initialize collapse button
  $(".button-collapse").sideNav();
  $('select').material_select();
 $('#reformulation').trigger('autoresize');
 $('.scrollspy').scrollSpy();
  window.picker = $('.datepicker').pickadate({
  	selectMonths: true,
  	selectYears: 15,
  	format: 'dd-mm-yyyy'
 });
})