import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SinglePage from './pages/SinglePage'

export default function App() {
  return (
    <Routes>
      {/* Deliberately one catch-all route rather than one per section. Scrolling
          rewrites the URL as you go, and a route per section would make each
          rewrite match a different <Route>, remounting the whole page mid-scroll.
          SinglePage decides itself whether the path is a real section. */}
      <Route element={<Layout />}>
        <Route path="*" element={<SinglePage />} />
      </Route>
    </Routes>
  )
}
