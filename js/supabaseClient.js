import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ezrednzonbzhhuzirldb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cmVkbnpvbmJ6aGh1emlybGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NTcwMzYsImV4cCI6MjA1ODEzMzAzNn0.vrkWL4jxhKg0mmFtUCqcIhOdo6OUPAy-ddZbbkSd18s';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);