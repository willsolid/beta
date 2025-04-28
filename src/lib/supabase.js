import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variáveis de ambiente do Supabase não encontradas. Por favor, verifique seu arquivo .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper para verificar se o cliente está configurado corretamente
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('_test_connection').select('*').limit(1);
    if (error) throw error;
    console.log('Conexão com Supabase estabelecida com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao conectar com Supabase:', error.message);
    return false;
  }
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  return { data, error };
};

export const signInWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
  });
  return { data, error };
};

export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    return { user: { ...user, profile }, error };
  }
  return { user: null, error };
};
