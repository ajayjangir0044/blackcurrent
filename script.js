// window.onload(function (){
//     alert("asdf")
//     $("#bg").css("display","none")
//     setTimeout(function (){

//         $("#bg").css("display","block")
//     },500)

// })

$(".closing").click(function () {
  $("#homePage").css("transform", "translateX(0px) scale(1)");
  $("#homePage").css("filter", "blur(0px)");
  $("#sideMenu").css("right", "-22%");
  $("#sideMenu").css("display", "none");
});
$("#menu").click(function () {
  $("#homePage").css("transform", "translateX(-100px) scale(0.7)");
  $("#homePage").css("filter", "blur(0.89px)");
  $("#sideMenu").css("right", "2%");
  $("#sideMenu").css("display", "block");
});

$(".outerDiv:nth-child(1)").mouseenter(function () {
  $(".outerDiv:nth-child(1) .opacityDiv").addClass("opac");
  $(".outerDiv:nth-child(1) .eventText").removeClass("textHide");

  $(".outerDiv:nth-child(1) .textDiv").addClass("show");
});

$(".outerDiv:nth-child(1)").mouseleave(function () {
  $(".outerDiv:nth-child(1)>.imageDiv>.opacityDiv").removeClass("opac");
  $(".outerDiv:nth-child(1)>.imageDiv>.opacityDiv>.eventText").addClass(
    "textHide"
  );

  $(".outerDiv:nth-child(1) .textDiv").removeClass("show");
});
$(".outerDiv:nth-child(2)").mouseenter(function () {
  $(".outerDiv:nth-child(2) .opacityDiv").addClass("opac");
  $(".outerDiv:nth-child(2) .eventText").removeClass("textHide");
  $(".outerDiv:nth-child(2) .textDiv").addClass("show");
});

$(".outerDiv:nth-child(2)").mouseleave(function () {
  $(".outerDiv:nth-child(2) .opacityDiv").removeClass("opac");
  $(".outerDiv:nth-child(2) .eventText").addClass("textHide");
  $(".outerDiv:nth-child(2) .textDiv").removeClass("show");
});
$(".outerDiv:nth-child(3)").mouseenter(function () {
  $(".outerDiv:nth-child(3) .opacityDiv").addClass("opac");
  $(".outerDiv:nth-child(3) .eventText").removeClass("textHide");
  $(".outerDiv:nth-child(3) .textDiv").addClass("show");
});

$(".outerDiv:nth-child(3)").mouseleave(function () {
  $(".outerDiv:nth-child(3)>.imageDiv>.opacityDiv").removeClass("opac");
  $(".outerDiv:nth-child(3)>.imageDiv>.opacityDiv>.eventText").addClass(
    "textHide"
  );

  $(".outerDiv:nth-child(3) .textDiv").removeClass("show");
});

if ($(window).width() > 901 && $(window).width() < 1024) {
  $("#menu").click(function () {
    $("#homePage").css("transform", "translateX(0px) scale(0.7)");
    $("#homePage").css("filter", "blur(0.89px)");
    $("#sideMenu").css("right", "2%");
    $("#sideMenu").css("display", "block");

    $("#sideMenu").css("position", "absolute");

    $("#sideMenu").css("z-index", "9999");
    $("#sideMenu").css("background-color", "white");

    $("#sideMenu").css("height", "auto");
    $("#sidePart2 a:nth-child(5)").css("margin-bottom", "20px");

    $("#sideMenu").css("width", "auto");

    $("#sidePart1 h3").css("margin-right", "10px");
    $("#sidePart1").css("margin-top", "10px");
  });
  $(".closing").click(function () {
    // $("#homePage").css("transform", "translateX(0px) scale(1)")
    // $("#homePage").css("filter", "blur(0px)")
    // $("#sideMenu").css("display", "none")
  });
}

if ($(window).width() > 600 && $(window).width() < 900) {
  $("#menu").click(function () {
    $("#homePage").css("transform", "translateX(0px) scale(0.7)");
    $("#homePage").css("filter", "blur(0.89px)");
    $("#sideMenu").css("right", "2%");
    $("#sideMenu").css("display", "block");

    $("#sideMenu").css("position", "absolute");

    $("#sideMenu").css("z-index", "9999");
    $("#sideMenu").css("background-color", "white");

    $("#sideMenu").css("height", "auto");
    $("#sidePart2 a:nth-child(5)").css("margin-bottom", "20px");

    $("#sideMenu").css("width", "auto");
    // $("#sideMenu").addClass("sideep1")
    $("#sidePart1 h3").css("margin-right", "10px");
    $("#sidePart1").css("margin-top", "10px");
  });
  $(".closing").click(function () {
    // $("#homePage").css("transform", "translateX(0px) scale(1)")
    // $("#homePage").css("filter", "blur(0px)")
    // $("#sideMenu").css("display", "none")
  });
}

if ($(window).width() < 600) {
  $("#menu").click(function () {
    $("#homePage").css("transform", "translateX(0px) scale(0.7)");
    $("#homePage").css("filter", "blur(0.89px)");
    $("#sideMenu").css("right", "2%");
    $("#sideMenu").css("display", "block");

    $("#sideMenu").css("position", "absolute");

    $("#sideMenu").css("z-index", "9999");
    $("#sideMenu").css("background-color", "white");

    $("#sideMenu").css("height", "auto");

    $("#sideMenu").css("width", "auto");
    // $("#sideMenu").addClass("sideep1")
    $("#sidePart1 h3").css("margin-right", "10px");
    $("#sidePart1").css("margin-top", "10px");
  });
  $(".closing").click(function () {
    // $("#homePage").css("transform", "translateX(0px) scale(1)")
    // $("#homePage").css("filter", "blur(0px)")
    // $("#sideMenu").css("display", "none")
  });
}
let x = 0;
$(".testi>div i:nth-child(2)").click(function () {
  x++;
  if (x == 4) {
    x = 0;
    if (x == 0) {
      $(".imageTestimonials").css("background-image", "url(ronal.jpeg)");
      $(".testiPara>p").text("Team Member at Black Current");
      $(".testiPara>h5").text("Ronal poudel");
      $(".textTest>article").text(
        "My experience in Black Current is pretty amazing. It is an organization it bringing lots of events from which i have learnt many things and personally it excites me a lot every time a new event comes up. It has been bringing lots of opportunities for me as well as the team members which is very helpful. "
      );
    }
  }
  if (x == 1) {
    $(".imageTestimonials").css(
      "background-image",
      "url(assets/bharati2.jpeg)"
    );
    $(".testiPara>p").text("Content Head at Black Current");
    $(".testiPara>h5").text("Bharti kalra");
    $(".textTest>article").text(
      "What you do makes a difference, and you have to decide what kind of difference you want to make. Black Current maintains a positive and healthy working environment which is really motivating and It feels amazing to work in such an organization where there is a lot of chances to grow personally and socially. "
    );
  }
  if (x == 2) {
    $(".imageTestimonials").css("background-image", "url(anand.jpeg)");
    $(".testiPara>p").text("Team member at Black Current");
    $(".testiPara>h5").text("Anand Mishra");
    $(".textTest>article").text(
      "If you are looking for a club to enhance your skills, a place where you get a chance to interact with people from all walks of life, black current is for you, it has been a fruitful journey for me yet, you get creative liberty to carry out your ideas and a nice team to work with."
    );
  }
  if (x == 3) {
    $(".imageTestimonials").css(
      "background-image",
      "url(assets/priyanka2.jpeg)"
    );
    $(".testiPara>p").text("Team member at Black Current");
    $(".testiPara>h5").text("Priyanka");
    $(".textTest>article").text(
      "Black current has been a great journey for me. It has provided me great opportunities in quenching thirst from learning up new things to enhancing their skills. Team members and domain heads have been really supportive in a way that helped me in completing my tasks on time by getting the right guidance in well acquainted manner. My confidence level surely is more boosted than when i joined. "
    );
  }
});
$(".testi>div i:nth-child(1)").click(function () {
  x--;

  if (x == -1) {
    x = 3;
    if (x == 3) {
      $(".imageTestimonials").css(
        "background-image",
        "url(assets/priyanka2.jpeg)"
      );
      $(".testiPara>p").text("Team member at Black Current");
      $(".testiPara>h5").text("Priyanka");
      $(".textTest>article").text(
        "Black current has been a great journey for me. It has provided me great opportunities in quenching thirst from learning up new things to enhancing their skills. Team members and domain heads have been really supportive in a way that helped me in completing my tasks on time by getting the right guidance in well acquainted manner. My confidence level surely is more boosted than when i joined. "
      );
    }
  }

  if (x == 0) {
    $(".imageTestimonials").css("background-image", "url(ronal.jpeg)");
    $(".testiPara>p").text("Team Member at Black Current");
    $(".testiPara>h5").text("Ronal poudel");
    $(".textTest>article").text(
      "My experience in Black Current is pretty amazing. It is an organization it bringing lots of events from which i have learnt many things and personally it excites me a lot every time a new event comes up. It has been bringing lots of opportunities for me as well as the team members which is very helpful. "
    );
  }
  if (x == 1) {
    $(".imageTestimonials").css(
      "background-image",
      "url(assets/bharati2.jpeg)"
    );
    $(".testiPara>p").text("Content Head at Black Current");
    $(".testiPara>h5").text("Bharti kalra");
    $(".textTest>article").text(
      "What you do makes a difference, and you have to decide what kind of difference you want to make. Black Current maintains a positive and healthy working environment which is really motivating and It feels amazing to work in such an organization where there is a lot of chances to grow personally and socially. "
    );
  }
  if (x == 2) {
    $(".imageTestimonials").css("background-image", "url(anand.jpeg)");
    $(".testiPara>p").text("Team member at Black Current");
    $(".testiPara>h5").text("Anand Mishra");
    $(".textTest>article").text(
      "If you are looking for a club to enhance your skills, a place where you get a chance to interact with people from all walks of life, black current is for you, it has been a fruitful journey for me yet, you get creative liberty to carry out your ideas and a nice team to work with."
    );
  }
});
$("#midText h1").textillate({
  in: {
    effect: "fadeInUp",
  },
  loop: true,
  out: {
    effect: "fadeOutRight",
  },
});
