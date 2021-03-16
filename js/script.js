$(function() {
  $.get( "./data/data.json")
    .done(function(data) {
      var perPage = 6;
      var page = 1;
      var selectedCategories = [];

      var sorted = {};
      if (data && data.items && data.items.length) {
        data.items.forEach(el => {
          if (sorted[el.category]) {
            sorted[el.category].push(el);
          } else {
            sorted[el.category] = [el];
          }
        });
      }

      for (var el in sorted) {
        if (hasOwnProperty.call(sorted, el)) {
          $("#ch-" + el + " .counter").html(sorted[el].length);
        }
      }

      function reset() {
        $("#show-more").removeClass("d-none");
        page = 1;
        selectedCategories = [];
      }

      function amount(value) {
        if (!value) return '';
        return value.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });
      }

      function printItem(item) {
        return "<div class=\"col-12 col-md-6 col-lg-4\">\n" +
        "              <div class=\"item\">\n" +
        "                <img src=\"" + item.img + "\" alt=\"\" class=\"m-auto\"/>\n" +
        "                <p class=\"name mt-5\">" + item.name + "</p>\n" +
        "                <div class=\"container\">\n" +
        "                  <div class=\"row\">\n" +
        "                    <div class=\"col-6\">\n" +
        "                      <p class=\"old-price\">" + amount(item.old_price) + "</p>\n" +
        "                      <p class=\"price\">" + amount(item.price) + "</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"col-6 pt-1 px-2\">\n" +
        "                      <a href=\"" + item.url + "\" target=\"_blank\">\n" +
        "                        <div class=\"btn-gray buy\">\n" +
        "                          kup\n" +
        "                          <img src=\"./img/basket.png\" alt=\"\"/>\n" +
        "                        </div>\n" +
        "                      </a>\n" +
        "                    </div>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>";
      }

      function printItems (items, nextPage) {
        if (nextPage) {
          ++page;
        }
        var htmlString = '';
        if (items && items.length) {
          items.forEach(function (item, key) {
            if (key < (page * perPage)) {
              htmlString += printItem(item);
            }
          });
        }
        if (items.length <= (page * perPage)) {
          $("#show-more").addClass("d-none");
        }
        $(".pk .items").html(htmlString);
      }

      function filterItems(keys, nextPage) {
        var selectedItems = data.items;
        if (keys && keys.length) {
          selectedItems = data.items.filter(function (el) {
            return keys.indexOf(el.category) !== -1;
          });
        }
        printItems(selectedItems, nextPage);
      }

      $(".pk .category").click(function() {
        reset();
        var selectedCategory = $(this).attr('id');
        $(".pk input[type='checkbox']").each(function() {
          if ($(this).attr('value') === selectedCategory) {
            $(this).prop('checked', true);
          } else {
            $(this).prop('checked', false);
          }
        });
        selectedCategories = [selectedCategory];
        filterItems(selectedCategories);
      });


      $(".pk input[type='checkbox']").change(function() {
        reset();
        $(".pk input:checked").each(function() {
          selectedCategories.push(this.value);
          filterItems(selectedCategories);
        });
      });

      $("#show-more").on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass("d-none")) {
          filterItems(selectedCategories, true);
        }
      });

      filterItems();

    })
    .fail(function() {
      console.log("error");
    });
});
