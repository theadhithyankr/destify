import { supabase } from "./supabaseClient";

const HomePage = () => {
  return (
    <div>
      <div>Logged in!</div>
      <button onClick={() => supabase.auth.signOut()}>Sign out</button>
    </div>
  );
};

export default HomePage;