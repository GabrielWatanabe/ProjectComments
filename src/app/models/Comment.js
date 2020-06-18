const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
    static init(sequelize) {
        super.init(
        {
           st_comment: Sequelize.STRING
        }, {
            sequelize
        }
      );

      return this
    }
}

module.exports = Comment;