jQuery(function($) {
	$.tablesorter.isDigit = function (s, config) {
		// replace all an wanted chars and match.
		return /^[-+]?\d*$/.test($.trim(s.replace(/[,]/g, '')));
	};
	$.tablesorter.addParser({
		id: "eudate",
		is: function(s) {
			return /\d{1,2}[\/\.]\d{1,2}[\/\.]\d{4}/.test(s);
		},
		format: function(s,table) {
			s = s.substring(0, 10); //LÃµikab kuupÃ¤eva pikkuseks
			s = s.replace(/\-/g,"/");
			s = s.replace(/(\d{1,2})[\/\.](\d{1,2})[\/\.](\d{4})/, "$3/$2/$1");
			return $.tablesorter.formatFloat(new Date(s).getTime());
		},
		type: "numeric"
	});
});
