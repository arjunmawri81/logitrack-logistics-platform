import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/public/Home";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Merchant Pages
import Dashboard from "./pages/merchant/Dashboard";
import CreateShipment from "./pages/merchant/CreateShipment";
import Shipments from "./pages/merchant/Shipments";
import Tracking from "./pages/merchant/Tracking";
import Profile from "./pages/merchant/Profile";
import Settings from "./pages/merchant/Settings";
import Wallet from "./pages/merchant/Wallet";
import Billing from "./pages/merchant/Billing";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Merchants from "./pages/admin/Merchants";
import Couriers from "./pages/admin/Couriers";
import Pricing from "./pages/admin/Pricing";
import Revenue from "./pages/admin/Revenue";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";

// Protected Routes
import AdminRoute from "./routes/AdminRoute";
import MerchantRoute from "./routes/MerchantRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Merchant Routes */}

        <Route
          path="/dashboard"
          element={
            <MerchantRoute>
              <Dashboard />
            </MerchantRoute>
          }
        />

        <Route
          path="/create-shipment"
          element={
            <MerchantRoute>
              <CreateShipment />
            </MerchantRoute>
          }
        />

        <Route
          path="/shipments"
          element={
            <MerchantRoute>
              <Shipments />
            </MerchantRoute>
          }
        />

        <Route
          path="/tracking"
          element={
            <MerchantRoute>
              <Tracking />
            </MerchantRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <MerchantRoute>
              <Profile />
            </MerchantRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <MerchantRoute>
              <Settings />
            </MerchantRoute>
          }
        />

        <Route
          path="/wallet"
          element={
            <MerchantRoute>
              <Wallet />
            </MerchantRoute>
          }
        />

        <Route
          path="/billing"
          element={
            <MerchantRoute>
              <Billing />
            </MerchantRoute>
          }
        />

        {/* Admin Routes */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/merchants"
          element={
            <AdminRoute>
              <Merchants />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/couriers"
          element={
            <AdminRoute>
              <Couriers />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/pricing"
          element={
            <AdminRoute>
              <Pricing />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/revenue"
          element={
            <AdminRoute>
              <Revenue />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <AdminRoute>
              <Reports />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminRoute>
              <AdminSettings />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;