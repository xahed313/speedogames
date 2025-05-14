        if ($(window).width() > 768) {

            $(document).ready(function() {
                $(".hover-toggle").hover(
                    function() {
                        $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                        $(this).toggleClass('open');
                    },
                    function() {
                        $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                        $(this).toggleClass('open');
                    }
                );
            });
        }


                	//Custom Seclect Box
	var custom_select_box = $('.custom-select-box');
	if(custom_select_box.length){
		custom_select_box.selectmenu().selectmenu('menuWidget').addClass('overflow');
	}


