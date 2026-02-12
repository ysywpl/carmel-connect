import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GroupProfiles from './pages/GroupProfiles';
import DiscipleshipPathway from './pages/DiscipleshipPathway';
import ShepherdResources from './pages/ShepherdResources';
import FacilitatorGuide from './pages/FacilitatorGuide';
import DiscussionGuide from './pages/DiscussionGuide';
import MemberProgress from './pages/MemberProgress';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<GroupProfiles />} />
          <Route path="/discipleship" element={<DiscipleshipPathway />} />
          <Route path="/shepherd" element={<ShepherdResources />} />
          <Route path="/facilitator" element={<FacilitatorGuide />} />
          <Route path="/discussion-guide" element={<DiscussionGuide />} />
          <Route path="/member-log" element={<MemberProgress />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;