import { Post } from '../models';

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
    const { title, content, cover } = req.body;
    const { id } = req.user;
    Post.create({ title, content, author: id, cover, slug: '' })
      .then(post => {
        res.json({ post });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static find(req, res) {
    const { slug } = req.params;
    Post.findOne({
      where: {
        slug
      }
    })
      .then(post => {
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ post });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static update(req, res) {
    const { title, content, author } = req.body;
    Post.update(
      { title, content },
      { returning: true, where: { id: req.params.id } }
    )
      .then(post => {
        res.json({ post: post[0][0] });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static delete(req, res) {
    Post.findById(req.params.id)
      .then(post => {
        post.destory();
      })
      .then(() => {
        res.json({ message: 'post deleted', status: 'success' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }
}
