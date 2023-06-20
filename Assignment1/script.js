var currentPage = 1;
var numPages = $(".pagination a").length - 2;
var width = 0;

$(window).on("resize", function () {
  var $width = $(window).width();
  width = $width;
  if ($width < 1280) {
    $(".column").hide();
    $(".column:nth-child(" + 1 + ")").show();
  }
});

function showPage(page) {
  $(".column").hide();
  $(".column")
    .eq(page - 1)
    .show();
  // $(".column:nth-child(" + page + ")").show();
  $(".pagination a").removeClass("active");
  $(".pagination a")
    .eq(page - 1)
    .addClass("active");
  // $(".pagination a:nth-child(" + (page + 1) + ")").addClass("active");
}

$(".pagination a").click(function (e) {
  e.preventDefault();
  var direction = $(this).text();
  currentPage = parseInt(direction);

  showPage(currentPage);
});

function handleWindowResize() {
  if (width < 1280) {
    showPage(currentPage);
  }
}

handleWindowResize();
