const InputOtp = {
  maxLength: 4,
  init: function (options) {
    if (options && options.maxLength) {
      this.maxLength = options.maxLength;
    }
    this.generateInputs();
  },
  generateInputs: function () {
    const inputWrapper = $(".input-otp");
    const name = inputWrapper.attr("data-name");
    var inputs = "";
    for (let i = 0; i < this.maxLength; i++) {
      inputs +=
        '<input type="text" maxlength="1" class="otp-input" oninput="this.value=this.value.replace(/[^0-9]/g,\'\');"  />';
    }
    if (name) {
      inputs += `<input name="${name}" type="hidden" id="otp-value" />`;
    } else {
      inputs += `<input type="hidden" id="otp-value" />`;
    }
    inputWrapper.html(inputs);
    this.addListeners();
  },
  addListeners: function () {
    $(".input-otp input.otp-input").on("keyup", function () {
      var $this = $(this);
      if ($this.val().length === 1) {
        $this.next(".otp-input").focus();
      } else if ($this.val().length === 0) {
        $this.prev(".otp-input").focus();
      }
      InputOtp.updateHiddenInput();
    });
  },
  updateHiddenInput: function () {
    var otpValue = "";
    $(".input-otp input.otp-input").each(function () {
      otpValue += $(this).val();
    });
    $("#otp-value").val(otpValue);
  },
};

$(function () {
  InputOtp.init();
  $(".menu-toggler").on("click", function () {
    $("body").toggleClass("menu-open");
  });

  $(".form-password-control .password-icon").on("click", function () {
    var input = $(this).parent().find("input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).parent().addClass("show");
    } else {
      input.attr("type", "password");
      $(this).parent().removeClass("show");
    }
  });

  $(".brand-items").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 3000,
    dots: false,
    prevArrow: null,
    nextArrow: null,
    cssEase: "linear",
    waitForAnimate: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false,
    prevArrow: null,
    nextArrow: null,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".wizard-go-next").click(function () {
    $(this).parents(".card-wizard").addClass("show-next");
  });
  $(".wizard-go-default").click(function () {
    $(this).parents(".card-wizard").removeClass("show-next");
  });

  $("[data-slidenext]").click(function (e) {
    e.preventDefault();
    const wrapper = $(this).data("slidenext");
    if (wrapper) {
      const count = Number($(wrapper).attr("data-count")) || 0;
      $(wrapper).css("translate", `-${100 * (count + 1)}% 0px`);
      $(wrapper).children(`.card-slider-content`).removeClass("active");
      $(wrapper)
        .children(`.card-slider-content:nth-child(${count + 2})`)
        .addClass("active");
      $(wrapper).attr("data-count", count + 1);
    }
  });
  $("[data-slideprev]").click(function (e) {
    e.preventDefault();
    const wrapper = $(this).data("slideprev");
    if (wrapper) {
      const count = Number($(wrapper).attr("data-count"));
      if (count) {
        $(wrapper).children(`.card-slider-content`).removeClass("active");
        $(wrapper)
          .children(`.card-slider-content:nth-child(${count})`)
          .addClass("active");
        $(wrapper).css("translate", `-${100 * (count - 1)}% 0px`);
        $(wrapper).attr("data-count", count - 1);
      }
    }
  });

  $(".single-item").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow:
      '<div class="slider-button-left"> <img class="img-fluid" src="./assets/images/arroworange.svg" alt=""/></div>',
    nextArrow:
      '<div class="slider-button-right"> <img class="img-fluid" src="./assets/images/arroworange.svg" alt="" /></div>',
  });

  $(".table-logo").slick({
    prevArrow:
      '<div class="onboard-button-left"> <img class="img-fluid" src="./assets/images/arrow_r.svg" alt=""/></div>',
    nextArrow:
      '<div class="onboard-button-right"> <img class="img-fluid" src="./assets/images/arrow_r.svg" alt="" /></div>',
  });
});

const froggyCanvas = document.getElementById("canvas-froggy");
if (froggyCanvas) {
  const r1 = new rive.Rive({
    src: "./assets/riv/froggy.riv",
    canvas: froggyCanvas,
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.none,
    onLoad: () => {
      r1.resizeDrawingSurfaceToCanvas();
    },
  });
}

const chickyCanvas = document.getElementById("canvas-chicky");
if (chickyCanvas) {
  const r2 = new rive.Rive({
    src: "./assets/riv/chicky.riv",
    canvas: chickyCanvas,
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.FitWidth,
    onLoad: () => {
      r2.resizeDrawingSurfaceToCanvas();
    },
  });
}

const bugabooCanvas = document.getElementById("canvas-bugaboo");
if (bugabooCanvas) {
  const r3 = new rive.Rive({
    src: "./assets/riv/bugaboo.riv",
    canvas: bugabooCanvas,
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.FitWidth,
    onLoad: () => {
      r3.resizeDrawingSurfaceToCanvas();
    },
  });
}

const cowCanvas = document.getElementById("canvas-cow");
if (cowCanvas) {
  const r4 = new rive.Rive({
    src: "./assets/riv/cow.riv",
    canvas: cowCanvas,
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.FitWidth,
    onLoad: () => {
      r4.resizeDrawingSurfaceToCanvas();
    },
  });
}

const trexCanvas = document.getElementById("canvas-trex");
if (trexCanvas) {
  const r5 = new rive.Rive({
    src: "./assets/riv/trex.riv",
    canvas: trexCanvas,
    autoplay: true,
    stateMachines: "State Machine 1",
    fit: rive.Fit.FitWidth,
    onLoad: () => {
      r5.resizeDrawingSurfaceToCanvas();
    },
  });
}

const crabbyCanvas = document.getElementById("canvas-crabby");
if (crabbyCanvas) {
  const r4 = new rive.Rive({
    src: "./assets/riv/crabby.riv",
    canvas: crabbyCanvas,
    autoplay: true,
    stateMachines: "Crabbier",
    fit: rive.Fit.FitWidth,
    onLoad: () => {
      r4.resizeDrawingSurfaceToCanvas();
    },
  });
}

$(".responsive").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow:
    "<img class='played-arrow prev slick-prev' src='./assets/images/arrow_scroll_L.svg'>",
  nextArrow:
    "<img class='played-arrow next slick-next' src='./assets/images/arrow_scroll_R.svg'>",
});

let otpInputValue = [];

$(".input-verify-button [data-value]").on("click", function () {
  const currentValue = $(this).data("value");
  if (currentValue === "erase") {
    otpInputValue.pop();
  } else if (otpInputValue.length < 4) {
    otpInputValue.push(currentValue.toString());
  } else {
    const firstEmptySlot = otpInputValue.findIndex((item) => !item);
    if (firstEmptySlot >= 0) {
      otpInputValue[firstEmptySlot] = currentValue.toString();
    }
  }
  showOtpInputValue(otpInputValue);
});

$(document).on("keyup", ".js-input-verify-container .otp-input", function () {
  const inputs = $(".js-input-verify-container .otp-input");
  otpInputValue = [];
  $(inputs).each((index, element) => {
    otpInputValue.push($(element).val());
  });
  InputOtp.updateHiddenInput();
});

function showOtpInputValue(values) {
  const inputs = $(".js-input-verify-container .otp-input");
  for (let index = 0; index < 4; index++) {
    const value = values[index];
    const input = inputs[index];
    $(input).val(value);
  }
  InputOtp.updateHiddenInput();
}

$("[data-toggle=element]").on("click", function () {
  const wrapper = $(this).data("target");
  $(wrapper).toggleClass("editable");
});

$(".navigation-profile-star").on("click", function () {
  $(".navigation-profile-show-details").toggleClass("remove");
});
