import { supabase } from '../config/supabaseClient.js';

export const ItemModel = {
  async create(payload) {
    const { data, error } = await supabase
      .from('items')
      .insert([payload])
      .select();
    if (error) throw error;
    return data[0];
  },

  async getAll(filter = {}) {
    let query = supabase.from('items').select('*').order('created_at', { ascending: false });
    if (filter.status) {
      query = query.eq('status', filter.status);
    }
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from('items')
      .update(payload)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async remove(id) {
    const { error } = await supabase.from('items').delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  }
};
