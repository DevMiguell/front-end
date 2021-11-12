import { Header } from "../components/Header";

import {
  Routes,
  Route
} from 'react-router-dom'
import { Curse } from "../pages/Curse";

export function AppMain() {
  return (
    <main>
      <Header />
      <div style={{ margin: '0 auto' }}>
        <Routes>
          <Route path="/curse" element={<Curse />} />
          {/* <Route path="/grade" element={<Grade />} /> */}

        </Routes>
      </div>
    </main>
  );
}
