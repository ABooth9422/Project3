module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      post: {
        type: DataTypes.STRING,
      },
      slug: {
          type: DataTypes.STRING,  
      }
    }, 
    {
      timestamps: false
    });
    return Comment;
  };