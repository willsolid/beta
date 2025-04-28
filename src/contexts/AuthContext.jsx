
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, getCurrentUser } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        checkUser();
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function checkUser() {
    try {
      const { user: currentUser, error } = await getCurrentUser();
      if (error) throw error;
      setUser(currentUser);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao carregar usuário",
        variant: "destructive",
      });
    }
  }

  const value = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
