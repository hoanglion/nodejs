const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "doanhnghiep",
  {
    dn_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    tk_id: {
      type: Sequelize.BIGINT,

      references: {
        // This is a reference to another model
        model: taikhoan,

        // This is the column name of the referenced model
        key: "tk_id"
      }
    },
    dn_ten: {
      type: Sequelize.STRING
    },
    dn_hinhanh: {
      type: Sequelize.STRING
    },
    dn_mota: {
      type: Sequelize.STRING
    },
    dn_diachi: {
      type: Sequelize.STRING
    },
    dn_tinh: {
      type: Sequelize.STRING
    },
    dn_thanhpho: {
      type: Sequelize.STRING
    },
    dn_xaphuong: {
      type: Sequelize.STRING
    },
    dn_giamdoc: {
      type: Sequelize.STRING
    },
    dn_nganhang: {
      type: Sequelize.STRING
    },
    dn_masothue: {
      type: Sequelize.STRING
    },
    dn_website: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
