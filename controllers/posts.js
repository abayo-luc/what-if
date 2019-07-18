import { Post, User } from '../models';

export default class PostControllers {
  static allPosts(req, res) {
    const { page = 1, limit = 12 } = req.query;
    Post.findAll({
      order: [['createdAt', 'DESC']],
      offset: (Number(page) - 1) * Number(limit),
      limit
    })
      .then(posts => {
        if (posts.length === 0) {
          return res.status(404).json({ message: 'No more posts found' });
        }
        res.json({ posts, count: posts.length });
      })
      .catch(err => {
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static create(req, res) {
    const { title, content } = req.body;
    const { id } = req.user;
    Post.create({ title, content, userId: id, slug: '' })
      .then(post => {
        res.json({ post });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.message || 'Unknown error' });
      });
  }

  static async find(req, res) {
    const { slug } = req.params;
    try {
      const post = await Post.findOne({
        where: {
          slug
        },
        include: [{ model: User, as: 'author' }]
      });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json({ post });
    } catch (error) {
      res.status(500).json({ message: err.message || 'Unknown error' });
    }
  }

  static async update(req, res) {
    try {
      const { title, content } = req.body;
      const { slug } = req.params;
      const post = await Post.findOne({ where: { slug } });
      if (!post) {
        return res.status(404).json({ message: 'Record not found' });
      }
      const response = await post.update({ title, content });
      return res.status(201).json({ post: response });
    } catch (err) {
      return res.status(500).json({ message: err.message || 'Unknown error' });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Record not found' });
      }
      await post.destroy();
      return res.json({ message: 'post deleted', status: 'success' });
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message || 'Unknown error' });
    }
  }
}
