import { createClient } from "@supabase/supabase-js"; // es la forma de decirle a supabase que tenemos autorizacion de pedir datos o hacer alguna opearcion en el backend

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);
