import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vnyggbwmtncfzdyfgimz.supabase.co';
const supabaseKey = 'sb_publishable_fsksR0oLRdz0HckjHL6NXA_VQR1Mshx';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data: subs, error } = await supabase.from('subjects').select('*');
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Subjects in DB:', subs.map(s => `${s.name_bn} (${s.name_en})`));
  }
}

check();
