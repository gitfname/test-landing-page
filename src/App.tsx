
import { ApplicationRoutes } from "./routes"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages"
import ApplicationLayout from "./PageLayouts/ApplicationLayout"

function App() {
  return (
    <div>
      <Routes>
        <Route
          path={ApplicationRoutes.home}
          element={
            <ApplicationLayout>
              <HomePage />
            </ApplicationLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default App