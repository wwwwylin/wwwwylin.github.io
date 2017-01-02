var index,
	store;

function loadJQuery(href, e) {
	e.preventDefault();
	if (!window.jQuery) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = jQueryJS;
		document.getElementsByTagName("head")[0].appendChild(script);
		var checkReady = function(callback) {
	        if (window.jQuery) {
	            callback(jQuery);
	        }
	        else {
	            window.setTimeout(function() { checkReady(callback); }, 100);
	        }
	    };
		checkReady(function() {
			loadMore(href);
		});
	}else{
		loadModal(href);
	}
}

function loadMore(href) {
	$.when(
		$.getScript(lunrJS),
		$.getScript(modalJS),
		$.Deferred(function(deferred){
			$( deferred.resolve );
		})
	).done(function(){
		loadLunr(href);
	});
}

function loadLunr(href) {

	$.getJSON(lunrAsset, function(response) {
		store = response.store,
		index = lunr.Index.load(response.index);

		loadModal(href);
	});
}

function loadModal(href) {
	$(href).modal();
}
