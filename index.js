$(document).ready(function () {
  $("#example").DataTable({
    responsive: true,
    dom: "",
    columnDefs: [
      {
        targets: "no-sort",
        orderable: false,
        order: []
      }
    ]
  });
});

// $(document).ready(function () {
//     $('#mainTable tfoot th').each(function () {
//         var title = $(this).text();
//         // $(this).html('<input type="search" class="fas" type="text" placeholder="&#xf002; Search ' + title + '" />');
//         $(this).html('<input type="text" placeholder="Search ' + title + '" />');
//     });

//     $('#mainTable').DataTable({
//         "dom": '<<t>lp>',
//         "language": {
//             "paginate": {
//               "previous": "<",
//               "next":">"
//             },
//             "lengthMenu": "Pages Per Row _MENU_  ",
//           },
//         responsive: {
//             details: {
//                 renderer: function (api, rowIdx, columns) {
//                     var data = $.map(columns, function (col, i) {
//                         return col.hidden ?
//                             '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
//                             '<td>' + col.title + ':' + '</td> ' +
//                             '<td>' + col.data + '</td>' +
//                             '</tr>' :
//                             '';
//                     }).join('');

//                     console.log(data)

//                     return data ?
//                         $('<table/>').append(data) :
//                         false;
//                 }
//             }
//         }
//     });

//     var cc = $('#mainTable_length label:first').html();
//     console.log(cc)
// });

$(document).ready(function () {
  // Setup - add a text input to each footer cell
  $("#mainTable tfoot th").each(function () {
    var title = $(this).text();
    if (title) {
      $(this).html(
        '<input type="text" class="fas" type="text" placeholder="&#xf002; Search ' +
          title +
          '" />'
      );
    }
  });

  // DataTable
  var table = $("#mainTable").DataTable({
    dom: "<<t>lp>",
    language: {
      paginate: {
        previous: "<",
        next: ">"
      },
      lengthMenu: "Pages Per Row _MENU_  "
    },
    columnDefs: [
      {
        // className: 'control',
        orderable: false,
        targets: 0,
        width: "50px"
      }
    ],

    // "columns": [
    //     {
    //         "className":      'details-control',
    //     },
    //     { "data": "name" },
    //     { "data": "position" },
    //     { "data": "office" },
    //     { "data": "salary" }
    // select: {
    //     style: 'os',
    //     selector: 'td:first-child'
    // },
    responsive: {
      details: {
        renderer: function (api, rowIdx, columns) {
          var data = $.map(columns, function (col, i) {
            return col.hidden && col.title
              ? '<div class="div-row col-md" data-dt-row="' +
                  col.rowIndex +
                  '" data-dt-column="' +
                  col.columnIndex +
                  '">' +
                  '<span class="text-align-end">' +
                  col.title +
                  ":" +
                  "</span> " +
                  "<span>" +
                  col.data +
                  "</span>" +
                  "</div>"
              : "";
          }).join("");

          console.log(data);

          var divData = data
            ? '<div class="row background-default">' + data + "</div>"
            : "";

          var email = columns[1].data;

          var expanded_row =
            `    <div class="row expanded-row">
                    <div class="col-lg-4">
                        <ul class="list-group">
                            <li class="list-group-item">` +
            email +
            `</li>
                            <li class="list-group-item"><input class="form-control" type="text" /></li>
                            <li class="list-group-item">
                                <div class="row">
                                    <button class="btn">Alway Redact</button>
                                    <button class="btn">Never Redact</button>
                                    <button class="btn">Proceed Direct</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>BEFORE ML SEARCH</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name" id="radio-name-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio-name" id="radio-name-2">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>REGEX</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name2" id="radio-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio-name2" id="radio-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>CLASSIFICATION</span>
                                    <div class="form-check">
                                    <label class="radio-container">DS
                                    <input type="radio" checked="checked" name="radio-name3" id="radio-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">Non DS
                                    <input type="radio" checked="checked" name="radio-name3" id="radio-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>IS KUDSE</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio-name4" id="radio-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio-name4" id="radio-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item"><button class="btn save"> save </button></li>
                        </ul>
                    </div>
                </div>
                <div class="row expanded-row">
                    <div class="col-lg-4">
                        <ul class="list-group">
                            <li class="list-group-item">` +
            email +
            `</li>
                            <li class="list-group-item"><input class="form-control" type="text" /></li>
                            <li class="list-group-item">
                                <div class="row">
                                    <button class="btn">Alway Redact</button>
                                    <button class="btn">Never Redact</button>
                                    <button class="btn">Proceed Direct</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>BEFORE ML SEARCH</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio1-name" id="radio1-name-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio1-name" id="radio1-name-2">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>REGEX</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio1-name2" id="radio1-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio1-name2" id="radio1-name2-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>CLASSIFICATION</span>
                                    <div class="form-check">
                                    <label class="radio-container">DS
                                    <input type="radio" checked="checked" name="radio1-name3" id="radio1-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">Non DS
                                    <input type="radio" checked="checked" name="radio1-name3" id="radio1-name3-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row radio-box">
                                    <span>IS KUDSE</span>
                                    <div class="form-check">
                                    <label class="radio-container">True
                                    <input type="radio" checked="checked" name="radio1-name4" id="radio1-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                    <div class="form-check">
                                    <label class="radio-container">False
                                    <input type="radio" checked="checked" name="radio1-name4" id="radio1-name4-1">
                                    <span class="checkmark"></span>
                                  </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item"><button class="btn save"> save </button></li>
                        </ul>
                    </div>
                </div>
                `;

          return expanded_row ? divData + expanded_row : false;
        }
      }
    },
    order: [[1, "asc"]],
    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();
            }
          });
        });
    }
  });

  // $('#mainTable tbody').on('click', 'td.details-control', function () {
  //     var tr = $(this).closest('tr');
  //     var row = table.row(tr);
  //     var open = row.child.isShown();

  //     table.rows().every(function (rowIdx, tableLoop, rowLoop) {
  //         if (this.child.isShown()) {
  //             this.child.hide();
  //             $(this.node()).removeClass('shown');
  //         }
  //     });

  //     // Now open this row
  //     if (!open) {
  //         row.child(format(row.data())).show();
  //         tr.addClass('shown');
  //     }
  // });
});
