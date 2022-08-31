import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Register,
  Landing,
  Error,
  ProtectedRoute,
  ForgotPassword,
  ResetPassword,
  Unauthorized,
} from './pages';
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
  Volunteers,
  Events,
  Skills,
  AddVolunteer,
  AddEvent,
} from './pages/dashboard';
import { useAppContext } from './context/appContext';

function App() {
  const { user, logoutUser } = useAppContext();

  // auto log out after 2 hours
  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        logoutUser();
      }, 7200000);
      return () => clearInterval(interval);
    }
  }, [logoutUser]);

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
          <Route path='/databases/volunteers' element={<Volunteers />} />
          <Route path='/databases/volunteers/add' element={<AddVolunteer />} />
          <Route path='/databases/events' element={<Events />} />
          <Route path='/databases/events/add' element={<AddEvent />} />
          <Route path='/databases/user-accounts' element={<UserAccounts />} />
          <Route path='/databases/volunteer-skills' element={<Skills />} />
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
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:resetToken' element={<ResetPassword />} />
        <Route path='*' element={<Error />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
