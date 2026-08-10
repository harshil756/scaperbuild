// Suburb location pages removed — Melbourne office only (/melbourne).
import { Navigate } from 'react-router-dom'

export const locationRoutes = [
  { path: 'location', element: <Navigate to="/melbourne" replace /> },
  { path: 'location/*', element: <Navigate to="/melbourne" replace /> },
]
