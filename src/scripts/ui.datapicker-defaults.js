/* Estonian initialisation for the jQuery UI date picker plugin. */
/* Written by Raigo Ukkivi(raigo.ukkivi@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ee'] = {
		closeText: 'Sulge',
		prevText: '&laquo;Eelmine',
		nextText: 'J&auml;rgmine&raquo;',
		currentText: 'T&auml;na',
		monthNames: ['Jaanuar','Veebruar','M&auml;rts','Aprill','Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember'],
		monthNamesShort: ['Jaan','Veebr','M&auml;rts','Apr','Mai','Juuni','Juuli','Aug','Sep','Okt','Nov','Dets'],
		dayNamesShort: ['P','E','T','K','N','R','L'],
		dayNames: ['P&uuml;hap&auml;ev','Esmasp&auml;ev','Teisip&auml;ev','Kolmap&auml;ev','Neljap&auml;ev','Reede','Laup&auml;ev'],
		dayNamesMin: ['P','E','T','K','N','R','L'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['ee']);
	/* STAR specific defaults. */
	$.datepicker.setDefaults({
		showOn: "button",
		buttonImage: "../img/calendar.gif",
		buttonText: "kalender",
		buttonImageOnly: true,
		changeMonth: true,
		changeYear: true});
});
