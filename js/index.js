function moveTo(block_id) {
  let menu_top = $(block_id).offset().top;
  $("html, body").animate({
    "scrollTop": menu_top - 100
  }, 1000);
}

$(function(){
  let slide_num = 0;
  $("#slider img").css("width", $("#slider-wrapper").width());

  $("#arrow-right").click(function(){
    let slide_width = $("#slider img").first().width();
    if(slide_num == $("#slider img").length - 1)
    {
      slide_num = 0;
      $("#slider").animate({"left": 0}, 500);
    }
    else {
      $("#slider").animate({"left": "-=" + slide_width}, 500);
      slide_num += 1;
    }

  })

  $("#arrow-left").click(function(){
    let slide_width = $("#slider img").first().width();
    if(slide_num == 0)
    {
      slide_num = $("#slider img").length - 1;
      $("#slider").animate({"left": - slide_width * ($("#slider img").length - 1)}, 500);
    }
    else {
      $("#slider").animate({"left": "+=" + slide_width}, 500);
      slide_num -= 1;
    }

  })


  $(".to-products-menu").click(function(){
    moveTo("#products-menu");
  });

  $(".to-about-us-menu").click(function(){
    moveTo("#about");
  });

  $(".to-contacts-menu").click(function(){
    moveTo("#contacts-block");
  });

  $(".section").click(function(){
    let block_number = $("#section-list").children(".section").index(this);
    $(".section-active").removeClass("section-active");
    $(this).addClass("section-active");
    $(".product-section").animate({"opacity": 0}, 500, function(){
      $(".product-section").css("display", "none");
      let current_section = $(".product-section")[block_number];
      $(current_section).css("display", "block");
      $(current_section).animate({"opacity": 1}, 500);
    })
  })

})
