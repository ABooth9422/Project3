module.exports = function(sequelize, DataTypes) {
    var Forum = sequelize.define("Forum", {
      post: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user: {
          type: DataTypes.STRING,
          allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER
      }
    }, 
    {
      timestamps: false
    });
    Forum.associate = (models) =>{
      Forum.hasMany(models.Comment, {
        onDelete: "cascade"
      })
    }
    return Forum;
  };