const { User } = require('../models/User');
const { Post } = require('../models/Post');

User.hasMany(Post)
Post.belongsTo(User)