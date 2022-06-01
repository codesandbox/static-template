class DropzoneComponent extends React.Component {
  componentDidMount() {
    new Dropzone(this.el, {
      url: "/file/post",
      addRemoveLinks: true,
      uploadMultiple: true,
      autoProcessQueue: false,
      maxFilesize: 20, // MB
      parallelUploads: 20,
      maxFiles: 20,
      acceptedFiles: ".doc, .docx, .xlsx, .xls, .pdf, .csv, .jpeg,.jpg,.png",
      dictRemoveFile: "<i class='fa fa-trash'></i> ลบ ",
      dictCancelUpload: "<i class='fa fa-times'></i> ยกเลิก",
      dictInvalidFileType: "ประเภทของไฟล์ไม่ถูกต้อง",
      dictFileTooBig:
        "ไฟล์ใหญ่เกินไป ({{filesize}} MB) ขนาดสูงสุดไม่เกิน: {{maxFilesize}} MB",
      dictMaxFilesExceeded: "ไม่สามารถแนบไฟล์ได้อีก แนบไฟล์ได้สูงสุด 20 ไฟล์"
      // init: function () {
      //   approveDropzone = this;

      //   approveDropzone.on("processing", function (file) {
      //     approveDropzone.options.url = "WaterApprove/insertFile";
      //     if ($(approveModal + " [name=action]").val() == "update") {
      //       approveDropzone.options.url = "WaterApprove/insertFileUpload";
      //     }
      //   });

      //   // Set default image for pdf
      //   approveDropzone.on("addedfile", function (file) {
      //     _count_file = 0;
      //     var file_type = file.name.substr(file.name.lastIndexOf(".") + 1);

      //     if ($.inArray(file_type, ["jpeg", "jpg", "png"]) === -1) {
      //       var preview_img = get_preview(file_type);
      //       approveDropzone.emit("thumbnail", file, preview_img);
      //     }
      //   });

      //   approveDropzone.on("success", function (file, responseText) {
      //     if (responseText) {
      //       let result = JSON.parse(responseText);

      //       if ($(approveModal + " [name=action]").val() != "insert") {
      //         if (file.upload) {
      //           let data = result.data;
      //           data.map((v, i) => {
      //             if (v.uuid === file.upload.uuid) {
      //               file.id = v.id;
      //               file.name_new = v.filename;
      //               let file_path = _location_upload + "/" + v.folder;
      //               var file_type = file.name.substr(
      //                 file.name.lastIndexOf(".") + 1
      //               );
      //               var file_name = file.name.substr(
      //                 0,
      //                 file.name.lastIndexOf(".")
      //               );
      //               file_name = file_name.replace(/[.\s]/g, "_");

      //               if ($.inArray(file_type, ["jpeg", "jpg", "png"]) !== -1) {
      //                 var src = file_path + "/" + v.filename;
      //                 var img = $(file.previewElement).find("img");
      //                 $(img).prop("class", "pointer");
      //                 $(img).wrap(
      //                   '<a class="image-popup pointer" href="' +
      //                     src +
      //                     '" target="_blank"></a>'
      //                 );

      //                 // var file_img = $(img).parent();
      //                 // image_popup(file_img);
      //               } else {
      //                 var src = file_path + "/" + v.filename;
      //                 var file_preview = $(file.previewElement).find("img");
      //                 $(file_preview).prop("class", "pointer");
      //                 $(file_preview).wrap(
      //                   '<a class="file-popup pointer" href="' +
      //                     src +
      //                     '" target="_blank"></a>'
      //                 );
      //               }
      //             }
      //           });
      //         }
      //       }

      //       if (result.status == true) {
      //         alert2successBtn("บันทึกข้อมูลเรียบร้อยแล้ว");
      //         if ($(approveModal + " [name=action]").val() == "insert") {
      //           $(approveModal).modal("hide");
      //           dt.ajax.reload();
      //         }
      //       } else {
      //         alert2errorBtn("ไม่สามารถบันทึกข้อมูลได้");
      //       }
      //     }
      //   });
      // },
      // removedfile: function (file) {
      //   if (file.status == "success" && file.from == "approve") {
      //     Swal.fire({
      //       title:
      //         "ต้องการ<span style='color:orange' class='rm_file'>ลบเอกสารแนบ</span>หรือไม่?",
      //       text:
      //         "ชื่อเอกสารแนบ: " +
      //         '"' +
      //         file.name +
      //         '"' +
      //         " กรุณาตรวจสอบความถูกต้องก่อนลบเอกสารแนบ",
      //       icon: "warning",
      //       showCancelButton: true,
      //       confirmButtonColor: "#1bb394",
      //       cancelButtonColor: "#d33",
      //       confirmButtonText: "ใช่",
      //       cancelButtonText: "ไม่ใช่",
      //       reverseButtons: true
      //     }).then((result) => {
      //       if (result.isConfirmed) {
      //         $.ajax({
      //           url: _location_controller + "/WaterApprove/deleteFileUpload",
      //           data: {
      //             id: file.id,
      //             name_new: file.name_new,
      //             // request_code: $("[name=request_code]").val(),
      //             approve_code: $("[name=approve_code]").val()
      //           },
      //           dataType: "JSON",
      //           type: "POST",
      //           success: function (result) {
      //             if (result.status == true) {
      //               alert2successBtn("ลบเอกสารแนบเรียบร้อยแล้ว");
      //               file.previewElement.remove();
      //               deleteFile = false;
      //             } else {
      //               alert2errorBtn("ไม่สามารถลบเอกสารแนบได้");
      //               approveDropzone.files.push(file);
      //             }
      //             show_message(approveDropzone);
      //           },
      //           error: function (xhr, status, error) {
      //             // console.error(xhr, status, error);
      //             show_message(approveDropzone);
      //           }
      //         });
      //       } else {
      //         approveDropzone.files.push(file);
      //         show_message(approveDropzone);
      //       }
      //     });
      //   } else {
      //     file.previewElement.remove();
      //     show_message(approveDropzone);
      //   }
      // },
      // sending: function (file, xhr, formData) {
      //   if (file.upload) {
      //     formData.append("uuid[" + _count_file + "]", file.upload.uuid);
      //     _count_file++;
      //   }

      //   if ($(approveModal + " [name=action]").val() == "insert") {
      //     $.each($(approveModal + " form").serializeArray(), (k, v) => {
      //       formData.append(v.name, v.value);
      //     });

      //     formData.append(
      //       "fileamount",
      //       approveDropzone.getFilesWithStatus("success").length
      //     );
      //     approveDropzone.getFilesWithStatus("success").map((v, i) => {
      //       formData.append("filename_" + i, v.name);
      //       formData.append("filesize_" + i, v.size);
      //     });
      //     formData.append("req_id", $(approveModal + " [name=req_code]").val());
      //     formData.append(
      //       "project_type_name_1",
      //       $(approveModal + " [name=project_type_name]")
      //         .parent()
      //         .eq(0)
      //         .children()
      //         .eq(2)
      //         .text()
      //     );
      //   } else {
      //     formData.append(
      //       "approve_code",
      //       $(approveModal + " [name=approve_code]").val()
      //     );
      //   }
      // }
    });

    // // Get exist file
    // function getDataFile(req_code = null, approve_code = null, cb) {
    //   let dropzone = approveDropzone;
    //   let _data = { req_code };
    //   let file_path =
    //     window.location.origin + "/reqwater/writable/uploads/req_" + req_code;

    //   if (approve_code) {
    //     _data = { approve_code };
    //     file_path = _location_upload + "/" + approve_code;
    //   }

    //   dropzone.options.maxFiles = 20;

    //   $.ajax({
    //     type: "POST",
    //     url: _location_controller + "/WaterApprove/getDataFile",
    //     data: _data,
    //     dataType: "json",
    //     success: function (data) {
    //       if (data) {
    //         $.each(data, function (key, val) {
    //           let mockFile = {};

    //           if (val.req_id) {
    //             mockFile = {
    //               name: val.filename,
    //               name_new: val.filename,
    //               size: val.filesize,
    //               department_code: val.department_code,
    //               id: val.id,
    //               status: "success",
    //               from: "reqwater"
    //             };
    //           } else if (val.approve_id) {
    //             mockFile = {
    //               name: val.filename,
    //               name_new: val.filename_new,
    //               size: val.size,
    //               department_code: val.department_code,
    //               id: val.id,
    //               status: "success",
    //               from: "approve"
    //             };
    //           }

    //           var file_type = val.filename.split(".");
    //           file_type = file_type[file_type.length - 1];

    //           dropzone.options.addedfile.call(dropzone, mockFile);

    //           if ($.inArray(file_type, ["jpeg", "jpg", "png"]) !== -1) {
    //             dropzone.options.thumbnail.call(
    //               dropzone,
    //               mockFile,
    //               file_path + "/" + mockFile.name_new
    //             );

    //             var img = $(mockFile.previewElement).find("img");
    //             var src = $(img).prop("src");
    //             $(img).prop("class", "pointer");
    //             $(img).wrap(
    //               '<a class="image-popup pointer" href="' +
    //                 src +
    //                 '" target="_blank"></a>'
    //             );

    //             // var file_img = $(img).parent();
    //             // image_popup(file_img);
    //           } else {
    //             var preview_img = get_preview(file_type);
    //             dropzone.options.thumbnail.call(
    //               dropzone,
    //               mockFile,
    //               preview_img
    //             );

    //             var src = file_path + "/" + mockFile.name_new;
    //             var file_preview = $(mockFile.previewElement).find("img");
    //             $(file_preview).prop("class", "pointer");
    //             $(file_preview).wrap(
    //               '<a class="file-popup pointer" href="' +
    //                 src +
    //                 '" target="_blank"></a>'
    //             );
    //           }

    //           dropzone.files.push(mockFile);
    //           dropzone.emit("success", mockFile);
    //         });

    //         dropzone.options.maxFiles = dropzone.options.maxFiles - data.length;

    //         cb();
    //       } else {
    //         cb();
    //       }
    //     }
    //   });
    // }

    // function filesize(size) {
    //   var selectedSize = 0;
    //   var selectedUnit = "B";
    //   var base = 1024;
    //   var units = ["B", "KB", "MB", "GB", "TB"];

    //   if (size > 0) {
    //     var i = Math.floor(Math.log(size) / Math.log(base));
    //     selectedSize = parseFloat((size / Math.pow(base, i)).toFixed(2));
    //     selectedUnit = units[i];
    //   }

    //   return "<b>" + selectedSize + "</b> " + selectedUnit;
    // }

    // function get_preview(file_type) {
    //   var preview_img;

    //   if (file_type == "pdf") {
    //     preview_img = _location + "/public/js/pages/images/icon/pdf.png";
    //   } else if ($.inArray(file_type, ["doc", "docx"]) !== -1) {
    //     preview_img = _location + "/public/js/pages/images/icon/doc.png";
    //   } else if ($.inArray(file_type, ["xlsx", "xls", "csv"]) !== -1) {
    //     preview_img = _location + "/public/js/pages/images/icon/xls.png";
    //   }

    //   return preview_img;
    // }

    // function image_popup(file_img) {
    //   file_img.magnificPopup({
    //     type: "image",
    //     closeOnContentClick: true,
    //     closeBtnInside: true,
    //     fixedContentPos: true,
    //     focus: ".image-popup img",
    //     mainClass: "mfp-no-margins mfp-with-zoom",
    //     image: {
    //       verticalFit: true
    //     },
    //     zoom: {
    //       enabled: true,
    //       duration: 300
    //     }
    //   });
    // }

    // function clear_files(dropzone) {
    //   let ele = $(dropzone)[0].element;
    //   $(ele)
    //     .prop("class", $(ele).prop("class").replace("dz-started", ""))
    //     .find(".dz-preview.dz-image-preview")
    //     .remove();
    //   dropzone.files = [];
    // }
  }

  render() {
    return (
      <div>
        <form
          action="/target"
          method="POST"
          class="dropzone"
          ref={(el) => (this.el = el)}
        >
          <div class="dz-message" data-dz-message>
            <span>
              <i class="fa fa-cloud-upload"></i> <br /> เลือกหรือวางไฟล์ลงที่นี่
            </span>
          </div>
        </form>
      </div>
    );
  }
}
