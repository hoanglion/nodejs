function DDLS() {
  function bindEvent() {
    $(".ddls_edit").click(function(e) {
      var params = {
        DL_TEN: $(".DL_TEN").val(),
        DL_VITRI: $(".DL_VITRI").val(),
        DL_DIEMDANHGIA: $(".DL_DIEMDANHGIA").val(),
        DL_MOTA: $(".DL_MOTA").val(),
        DL_GIAVE: $(".DL_GIAVE").val(),
        DL_LOAIHINHDULICH: $(".DL_LOAIHINHDULICH").val(),
        DL_DICHVU: $(".DL_DICHVU").val(),
        DL_GIOMOCUA: $(".DL_GIOMOCUA").val(),
        DL_GIODONGCUA: $(".DL_GIODONGCUA").val(),
        DL_TOADOGOOGLE: $(".DL_TOADOGOOGLE").val()
      };

      var base_url =
        location.protocol + "//" + document.domain + ":" + location.port;

      $.ajax({
        url: base_url + "/diemdulich-edit",
        type: "PUT",
        data: params,
        dataType: "json",
        success: function(res) {
          if (res && res.status_code == 200) {
            location.reload();
          }
        }
      });
    });

    $(".ddls_delete").click(function(e) {
      var dl_id = $(this).attr("dl_id");

      var base_url =
        location.protocol + "//" + document.domain + ":" + location.port;

      $.ajax({
        url: base_url + "/diemdulich-delete",
        type: "DELETE",
        data: { DL_ID: dl_id },
        dataType: "json",
        success: function(res) {
          if (res && res.status_code == 200) {
            location.reload();
          }
        }
      });
    });
  }
  bindEvent();
}

$(document).ready(function() {
  new Post();
});
