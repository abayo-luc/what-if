'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.DATE,
      organizer: DataTypes.STRING
    },
    {}
  );
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};
