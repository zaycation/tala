import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cqdboppmbdywrrralqrn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZGJvcHBtYmR5d3JycmFscXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MzAyMDAsImV4cCI6MjA2OTUwNjIwMH0.0A8pZiVPM7viOuQ5G7HCHsJXoUPYgA4ruKxYGsxH_Qw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
