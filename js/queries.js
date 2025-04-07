import { supabase } from './supabaseClient';

export async function fetchProfiles() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*');
  if (error) console.error('Error fetching profiles:', error);
  return data;
}

export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*');
  if (error) console.error('Error fetching posts:', error);
  return data;
}

export async function createPost(userId, title, content) {
  const { data, error } = await supabase
    .from('posts')
    .insert([
      { user_id: userId, title, content }
    ]);
  if (error) console.error('Error creating post:', error);
  return data;
}