var cart = 0;

function addItem(id, name, description, price, moreInfo) {
  let html = '';
  html += '<div class="item" data-id="' + id + '">';
  html += '<div class="name">' + name + '</div>';
  html += '<img src="assets/beach.jpg"></img>';
  html += '<div class="description">' + description + '</div>';
  html += '<div class="price">' + price + '</div>';
  html += '<button class="item-add">Add to cart</button>';
  html += '<button class="item-remove">Remove</button>';
  html += '<br/>';
  html += '<a class="more-info-link" href="#">More info</a>';
  html += '<div class="more-info">' + moreInfo + '</div>';
  html += '</div>';

  $('#container').prepend(html);
}

