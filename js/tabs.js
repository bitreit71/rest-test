 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");

	$(document) .ready(function() {
    	$('.header__burger').click(function(event) {
        	$('.header__burger,.header__menu-and-phone') .toggleClass('active');   
    	});
	});

	let openedPopup;

	function openPopup(popup, event) {
	  event.stopPropagation();
	  openedPopup = popup;
	  /* Open popup and make accessible screen readers */
	  $(popup).show().attr("aria-hidden", "false");
	  /* Focus on element to guide screen readers to popup */
	  $("#closePopup").focus();
	}

	function closePopup(popup) {
	  /* Close popup and hide from screen readers */
	  $(popup).hide().attr("aria-hidden", "true");
	  /* Focus screen readers back to button */
	  openedPopup = undefined;
	}

	function showSubmitPopup(popup) {
	  $(popup).hide().attr("aria-hidden", "true");
	  $('#myPopup-5').show().attr("aria-hidden", "false");
	}

	$(document).ready(function() {
	  const params = new Proxy(new URLSearchParams(window.location.search), {
	    get: (searchParams, prop) => searchParams.get(prop),
	  });

	  if (params.showSubmitPopup) {
	    showSubmitPopup();
	    openedPopup = '#myPopup-5';
	    history.pushState(null, "", location.href.split("?")[0]);

	    setTimeout(() => closePopup(openedPopup), 5000)
	  }

	  $('.popup-window').click(function(e){
	    e.stopPropagation();
	  });

	  $("body").click(function(){
	    closePopup(openedPopup)
	  });

	  $(".popups__close").click(function(){
	    closePopup(openedPopup)
	  }); 
	   
	});

	