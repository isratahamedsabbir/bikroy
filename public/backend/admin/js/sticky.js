(()=>{"use strict";!function(){var s=$(".sticky");function a(){74,s.css({"margin-bottom":"-74px"}),s.next().css({"padding-top":"74px"})}function e(){$(this).scrollTop()>=75?s.addClass("stickyClass"):s.removeClass("stickyClass")}s.after('<div class="jumps-prevent"></div>'),a(),$(window).resize((function(){a()})),e(),$(window).scroll((function(){e()})),$(".app-sidebar").on("scroll",(function(){$(".app-sidebar .ps__rail-y")[0].style.top.split("px")[0]<=60?$(".app-sidebar").removeClass("sidemenu-scroll"):$(".app-sidebar").addClass("sidemenu-scroll")})),$(".app-sidebar").on("scroll",(function(){$(".app-sidebar .ps__rail-y")[0].style.top.split("px")[0]<=60?$(".app-header").removeClass("res-scroll"):$(".app-header").addClass("res-scroll")}))}()})();