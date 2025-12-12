
import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; 
=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";  // <-- make sure this exists
>>>>>>> 9e713fe71311b4aa1de19fbaa962b3b7b5935dfb

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
<<<<<<< HEAD

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
        
    // 1. Xử lý Loading
    if (authLoading) return <p>Loading...</p>;
      
    // 2. Chuyển hướng nếu chưa đăng nhập
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
            {/* Giả định BrowserRouter được bọc ở index.js */}
            <Routes>
                {/* -------------------- AUTH ROUTES (ĐÃ SỬA VÒNG LẶP) -------------------- */}
                
                {/* Nếu user đã đăng nhập, truy cập /login sẽ bị chuyển hướng về trang chủ */}
                <Route 
                    path="/login" 
                    element={user ? <Navigate to="/" replace /> : <Login />} 
                />
                
                {/* Tương tự cho Register */}
                <Route 
                    path="/register" 
                    element={user ? <Navigate to="/" replace /> : <Register />} 
                />

                {/* -------------------- PROTECTED ROUTES (TRUYỀN PROPS) -------------------- */}
                
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
                
                {/* Contacts (Đã sửa lỗi và truyền props) */}
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
                {/* Đặt cuối cùng để bắt mọi đường dẫn không khớp và chuyển hướng về trang chủ */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ThemeProvider>
=======

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
>>>>>>> 9e713fe71311b4aa1de19fbaa962b3b7b5935dfb
    </ColorModeContext.Provider>
  );
}

export default App;