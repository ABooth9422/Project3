module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      post: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user: {
          type: DataTypes.STRING,
          allowNull: false 
      },
      img: {
        type: DataTypes.STRING
      }
    }, 
    {
      timestamps: false
    });
    Comment.associate = function(models) {
      Comment.belongsTo(models.Forum, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Comment;
  };