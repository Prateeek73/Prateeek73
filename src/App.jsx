import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SinglePage from './pages/SinglePage'
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/gallery" element={<Gallery />} />

        {/* Deliberately one catch-all rather than one route per section.
            Scrolling rewrites the URL as you go, and a route per section would
            make each rewrite match a different <Route>, remounting the whole
            page mid-scroll. SinglePage decides itself whether the path is a
            real section. Anything above this line is a genuinely separate page
            and is fine to route normally. */}
        <Route path="*" element={<SinglePage />} />
      </Route>
    </Routes>
  )
}
