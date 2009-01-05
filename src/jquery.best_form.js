(function($) {
    $.enhanceFormsBehaviour = function() {
        $('form').enhanceBehaviour();
    }

    $.fn.enhanceBehaviour = function() {
        return this.each(function() {
            var submits = $(this).find(':submit');
            submits.click(function() {
                var hidden = document.createElement('input');
                hidden.type = 'hidden';
                hidden.name = this.name;
                hidden.value = this.value;
                this.parentNode.insertBefore(hidden, this)
            });
            $(this).submit(function() {
                submits.attr("disabled", "disabled");
            });         
            $(window).unload(function() {
                submits.removeAttr("disabled");
            })
         }); 
    }
})(jQuery);

