$(function() {
	var $body = $('body');
	//----------  Close on click Outside of Container
	//------------------------------------------------------------------------------
	function clickOutsideContainer(selector, container, callback) {
		selector.on('mouseup', function (e) {
			e.stopPropagation();
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				callback();
			}
		});
	};

	//----------  Modal
	//------------------------------------------------------------------------------
	function modal() {
		var modalInit = $('.js-modal-init');
		var modalInner = $('.js-modal-inner');
		var modalSel = $('.js-modal');
		var itemForm = $('.item-form');
		var modalShowClass = 'is-visible';

		modalInit.on('click', function() {
			modalSel.addClass(modalShowClass);
		});

		function closeModal() {
			modalSel.removeClass(modalShowClass);
		};

		clickOutsideContainer($body, modalInner, closeModal);

		itemForm.submit(function(){
			closeModal();
			this.reset();
		});
	}

	modal();

	function settings() {
		var setInit = $('.js-settings-init');
		var setInner = $('.js-settings-inner');
		var setSel = $('.js-settings');
		var setForm = $('.settings-form');
		var setShowClass = 'is-visible';

		setInit.on('click', function () {
			setSel.addClass(setShowClass);
		});

		function closeSet() {
			setSel.removeClass(setShowClass);
		};

		clickOutsideContainer($body, setInner, closeSet);

		setForm.submit(function () {
			closeSet();
			this.reset();
		});
	}

	settings();
});
