import React from "react";
import Andrew from "./Andrew";
import Brady from "./Brady";
import { Link, Routes, Route } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <h1>Teams</h1>
      <div>
        <Link to="/team/andrew">
          <button>Andrew</button>
        </Link>
        <Link to="/team/brady">
          <button>Brady</button>
        </Link>
      </div>
      <Routes>
        <Route path="andrew" element={<Andrew />} />
        <Route path="brady" element={<Brady />} />
      </Routes>
    </div>
  );
};

export default Team;
