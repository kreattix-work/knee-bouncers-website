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
});
