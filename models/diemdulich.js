var q = require("q");
var db = require("../common/database");

var conn = db.getConnection();

function getAllDiemdulich() {
  var defer = q.defer();

  var query = conn.query("SELECT * FROM diemdulich", function(err, posts) {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(posts);
    }
  });
  return defer.promise;
}

function addDiemdulich(params) {
  if (params) {
    var defer = q.defer();

    var query = conn.query("INSERT INTO diemdulich SET ?", params, function(
      err,
      result
    ) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(result);
      }
    });
    return defer.promise;
  }
  return false;
}

function getDiemdulichByID(id) {
  var defer = q.defer();

  var query = conn.query(
    "SELECT * FROM diemdulich where ?",
    { dl_id: dl_id },
    function(err, posts) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(posts);
      }
    }
  );
  return defer.promise;
}

function updateDiemdulich(params) {
  if (params) {
    var defer = q.defer();

    var query = conn.query(
      "UPDATE diemdulich SET DL_TEN = ?, DL_VITRI = ?, DL_DIEMDANHGIA = ?, DL_HINHANH = ?, DL_MOTA = ?, DL_GIAVE = ?, DL_LOAIHINHDULICH = ?, DL_DICHVU = ?, DL_GIOMOCUA = ?, DL_GIODONGCUA = ?, DL_TOADOGOOGLE = ? Where DL_ID = ?",
      [
        params.dl_ten,
        params.dl_vitri,
        params.dl_diemdanhgia,
        params.dl_hinhanh,
        params.dl_mota,
        params.dl_giave,
        params.dl_loaihinhdulich,
        params.dl_dichvu,
        params.dl_giomocua,
        params.dl_giodongcua,
        params.dl_toadogoogle,
        params.id
      ],
      function(err, result) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(result);
        }
      }
    );
    return defer.promise;
  }
  return false;
}

function deleteDiemdulich(id) {
  if (id) {
    var defer = q.defer();

    var query = conn.query(
      "DELETE FROM diemdulich Where dl_id = ?",
      [id],
      function(err, result) {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(result);
        }
      }
    );
    return defer.promise;
  }
  return false;
}
module.exports = {
  getAllDiemdulich: getAllDiemdulich,
  addDiemdulich: addDiemdulich,
  getDiemdulichByID: getDiemdulichByID,
  updateDiemdulich: updateDiemdulich,
  deleteDiemdulich: deleteDiemdulich
};
