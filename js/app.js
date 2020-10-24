console.log("hi");

$(".special").html(
    $(".special").text().split("").map(a => `<span class="x">${a}</span>`)
  )

$('#salem').on('click', event => {
  event.preventDefault();
  $('#salempic').dialog("open");
})