import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
  UserAccounts,
  AddSandbox,
  EditUser,
  Databases,
  Help,
  Sandbox,
  SandboxHome,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='edit-user' element={<EditUser />} />
          <Route path='profile' element={<Profile />} />
          <Route path='user-accounts' element={<UserAccounts />} />
          <Route path='add-sandbox' element={<AddSandbox />} />
          <Route path='databases' element={<Databases />} />
          <Route path='help' element={<Help />} />
          <Route path='sandbox' element={<Sandbox />} />
          <Route path='sandbox-home' element={<SandboxHome />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
