
import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; 
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
  const ProtectedLayout = ({ children, authUser, authLoading }) => {
        
    // 1. Loading handle
    if (authLoading) return <p>Loading...</p>;
      
    // 2. Navigate to login if not authenticated
    if (!authUser) return <Navigate to="/login" replace />;
    
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
                {/* -------------------- AUTH ROUTES -------------------- */}
                
                {/* Nếu user đã đăng nhập, truy cập /login sẽ bị chuyển hướng về trang chủ */}
                <Route 
                    path="/login" 
                    element={user ? <Navigate to="/" replace /> : <Login />} 
                />
                
                {/* Register */}
                <Route 
                    path="/register" 
                    element={user ? <Navigate to="/" replace /> : <Register />} 
                />

                {/* -------------------- PROTECTED ROUTES -------------------- */}
                
                {/* Dashboard (Root path) */}
                <Route
                    path="/"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Dashboard user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Team */}
                <Route
                    path="/team"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Team user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Contacts */}
                <Route
                    path="/contacts"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Contacts user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />

                {/* Invoices */}
                <Route
                    path="/invoices"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Invoices user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Form */}
                <Route
                    path="/form"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Form user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Calendar */}
                <Route
                    path="/calendar"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Calendar user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* FAQ */}
                <Route
                    path="/faq"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <FAQ user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Bar */}
                <Route
                    path="/bar"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Bar user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Pie */}
                <Route
                    path="/pie"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Pie user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Line */}
                <Route
                    path="/line"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Line user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />
                
                {/* Geography */}
                <Route
                    path="/geography"
                    element={
                        <ProtectedLayout authUser={user} authLoading={loading}>
                            <Geography user={user} authLoading={loading} />
                        </ProtectedLayout>
                    }
                />

                {/* Catch-all route */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;