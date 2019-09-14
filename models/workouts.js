module.exports = function(sequelize, DataTypes) {
    var Workouts = sequelize.define("Workouts", {
      muscleGroup: {
        type: DataTypes.STRING,
        allowNull: false
      },
      workout: {
          type: DataTypes.STRING,
          allowNull: false 
      },
      videoLink: {
          type: DataTypes.STRING,
          allowNull: false
      }
    }, 
    {
      timestamps: false
    });
    return Workouts;
  };