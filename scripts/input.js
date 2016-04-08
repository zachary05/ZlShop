$(function(){
  $("#inputSearch").focus(function() {
    $(this).addClass('focus');
    if ($(this).val() == "输入商品名称") {
      $(this).val(" ");
    }
  }).blur(function() {
    $(this).removeClass();
    if ($(this).val() == " ") {
      $(this).val("输入商品名称");
    }
  }).keyup(function(event) {
    if (event.which == 13) {
      alert("回车递交表单！")
    }
  })
})
