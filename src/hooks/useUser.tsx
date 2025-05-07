import { useState } from "react";
// import { createSupabaseClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

export function useUser() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  async function getUser() {
    if (user) {
      setLoading(false);
      return;
    }

    // const supabase = createSupabaseClient();

    // const {
    //   data: { user: supabaseUser },
    // } = await supabase.auth.getUser();
    // setUser(supabaseUser || undefined);
    setUser({
      id: "123",
      name: "asdf"
    });
    setLoading(false);
  }

  return {
    getUser,
    user,
    loading,
  };
}
