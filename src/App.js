import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";  // <-- make sure this exists

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Login from "./scenes/login";
import Register from "./scenes/register";

function App() {
  const [theme, colorMode] = useMode();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Listen to Firebase Auth state changes
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  // 🔹 Protected Layout (only if logged in)
  const ProtectedLayout = ({ children }) => {
    if (!user) return <Navigate to="/login" replace />;
    return (
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar onLogout={() => signOut(auth)} /> {/* optional logout button */}
          {children}
        </main>
      </div>
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedLayout>
                  <Dashboard />
                </ProtectedLayout>
              }
            />
            <Route
              path="/team"
              element={
                <ProtectedLayout>
                  <Team />
                </ProtectedLayout>
              }
            />
            <Route
              path="/contacts"
              element={
                <ProtectedLayout>
                  <Contacts />
                </ProtectedLayout>
              }
            />
            <Route
              path="/invoices"
              element={
                <ProtectedLayout>
                  <Invoices />
                </ProtectedLayout>
              }
            />
            <Route
              path="/form"
              element={
                <ProtectedLayout>
                  <Form />
                </ProtectedLayout>
              }
            />
            <Route
              path="/calendar"
              element={
                <ProtectedLayout>
                  <Calendar />
                </ProtectedLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <ProtectedLayout>
                  <FAQ />
                </ProtectedLayout>
              }
            />
            <Route
              path="/bar"
              element={
                <ProtectedLayout>
                  <Bar />
                </ProtectedLayout>
              }
            />
            <Route
              path="/pie"
              element={
                <ProtectedLayout>
                  <Pie />
                </ProtectedLayout>
              }
            />
            <Route
              path="/line"
              element={
                <ProtectedLayout>
                  <Line />
                </ProtectedLayout>
              }
            />
            <Route
              path="/geography"
              element={
                <ProtectedLayout>
                  <Geography />
                </ProtectedLayout>
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
