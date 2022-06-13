import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Landing, Error, ProtectedRoute } from './pages';
import {
  Profile,
  SharedLayout,
  DashboardHome,
  UserAccounts,
  AddSandbox,
  Databases,
  Help,
  Sandbox,
  SandboxHome,
  HelpGettingStarted,
  SharedLayoutDatabases,
  SharedLayoutProfile,
  SharedLayoutUserAccounts,
  SharedLayoutHelp,
  SharedLayoutSandbox,
  Phonebanking,
} from './pages/dashboard';

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
          <Route index element={<DashboardHome />} />
        </Route>
        {/* Databases */}
        <Route
          path='/databases'
          element={
            <ProtectedRoute>
              <SharedLayoutDatabases />
            </ProtectedRoute>
          }
        >
          <Route index element={<Databases />} />
          <Route
            path='/databases/phonebanking'
            element={<Phonebanking />}
          />
        </Route>
        {/* Profile */}
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <SharedLayoutProfile />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
        </Route>
        {/* User Accounts Database */}
        <Route
          path='/user-accounts'
          element={
            <ProtectedRoute>
              <SharedLayoutUserAccounts />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserAccounts />} />
        </Route>
        {/* Help */}
        <Route
          path='/help'
          element={
            <ProtectedRoute>
              <SharedLayoutHelp />
            </ProtectedRoute>
          }
        >
          <Route index element={<Help />} />
          <Route
            path='/help/getting-started'
            element={<HelpGettingStarted />}
          />
        </Route>
        {/* Sandbox */}
        <Route
          path='/sandbox'
          element={
            <ProtectedRoute>
              <SharedLayoutSandbox />
            </ProtectedRoute>
          }
        >
          <Route index element={<Sandbox />} />
          <Route path='/sandbox/home' element={<SandboxHome />} />

          <Route path='/sandbox/add' element={<AddSandbox />} />
        </Route>
        {/* Unprotected Routes */}
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
