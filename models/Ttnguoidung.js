const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "ttnguoidung",
  {
    nd_id: {
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
    nd_ho: {
      type: Sequelize.STRING
    },
    nd_ten: {
      type: Sequelize.STRING
    },
    nd_gioitinh: {
      type: Sequelize.BOOLEAN
    },
    nd_diachi: {
      type: Sequelize.STRING
    },
    nd_sothich: {
      type: Sequelize.STRING
    },
    nd_ngaysinh: {
      type: Sequelize.DATEONLY
    },
    nd_tinh: {
      type: Sequelize.STRING
    },
    nd_thanhpho: {
      type: Sequelize.STRING
    },
    nd_quoctich: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
