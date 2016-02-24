/**
 * Created by LanAnh on 2/21/2016.
 */
function Editor(input, preview) {
  this.update = function () {
    preview.innerHTML = markdown.toHTML(input.value);
  };
  input.editor = this;
  this.update();
}

$(".md").each(function(index, dom){
  console.log(index);
  console.log(dom);
  var html = markdown.toHTML($(dom).html());
  $(dom).html(html)
});
