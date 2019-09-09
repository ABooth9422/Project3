module.exports = function(sequelize, DataTypes) {
    var Forum = sequelize.define("Forum", {
      post: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
          type: DataTypes.STRING,
          
      }
    }, 
    {
      timestamps: false
    });
    return Forum;
  };