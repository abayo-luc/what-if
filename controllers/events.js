import { Event } from '../models';

export default class EventControllers {
  static allEvents(req, res) {
    Event.findAll()
      .then(events => {
        res.json({ events });
      })
      .catch(err => {
        res.status(500).json('index', { errors: { message: 'Unknown error' } });
      });
  }

  static create(req, res) {
    const { title, date, organizer, description, location } = req.body;
    Event.create({
      title,
      date: new Date(date),
      organizer,
      description,
      location
    })
      .then(event => {
        res.json({ event });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static find(req, res) {
    const { id } = req.params;
    Event.findById(id)
      .then(event => {
        res.json({ event });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }

  static update(req, res) {
    const { title, date, organizer, description, location } = req.body;

    Event.update(
      { title, date, organizer, description, location },
      { returning: true, where: { id: req.params.id } }
    )
      .then(event => {
        res.json({ event: event[1][0] });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }
  static delete(req, res) {
    Event.findById(req.params.id)
      .then(event => {
        event.destroy();
      })
      .then(() => {
        res.json({ message: 'event removed' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unknown error' });
      });
  }
}
