import React, { useState } from "react";

const AdminToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <h3>Subscription</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Disable Subscription" : "Enable Subscription"}
      </button>
    </div>
  );
};

export default AdminToggle;

/*
⚠️ FUTURE:
Yahan Supabase admin logic + UID allow hoga
*/
