import { ItemModel } from '../models/itemModel.js';

export const ItemController = {
  async create(req, res) {
    try {
      const payload = req.body;
      const item = await ItemModel.create(payload);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const { status } = req.query;
      const items = await ItemModel.getAll({ status });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const item = await ItemModel.getById(id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await ItemModel.update(id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      await ItemModel.remove(id);
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
