//icons
import {
  HomeOutlined,
  SettingOutlined,
  BarcodeOutlined,
  TeamOutlined,
  WalletOutlined,
  FormOutlined,
} from "@ant-design/icons";

//pages
import VerifyPage from "./pages/verify";
import RegisterPage from "./pages/register";
import SigninPage from "./pages/signin";
import HomePage from "./pages/home";
import AppointmentsPage from "./pages/appointments";
import CostumersPage from "./pages/costumers";
import PendingPaymentsPage from "./pages/pendingPayments";
import ProductsPage from "./pages/products";
import NotFound from "./pages/notFound";
import EmployeesPage from "./pages/employees";
import Settings from "./pages/settings";

const ALL_ROUTES = [
  {
    path: "/verify",
    element: <VerifyPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    label: "Ana Sayfa",
    key: "/",
    icon: <HomeOutlined />,
    path: "/",
    element: <HomePage />,
  },
  {
    label: "Müşteri İşlemleri",
    key: "/costumers",
    icon: <TeamOutlined />,
    path: "/costumers",
    element: <CostumersPage />,
  },
  {
    label: "Randevu İşlemleri",
    key: "/appointments",
    icon: <FormOutlined />,
    path: "/appointments",
    element: <AppointmentsPage />,
  },
  {
    label: "Ürün İşlemleri",
    key: "/products",
    icon: <BarcodeOutlined />,
    path: "/products",
    element: <ProductsPage />,
  },

  {
    label: "Bekleyen taksitler",
    key: "/pending-payments",
    icon: <WalletOutlined />,
    path: "/pending-payments",
    element: <PendingPaymentsPage />,
  },
  {
    label: "Çalışan İşlemleri",
    key: "/employees",
    icon: <SettingOutlined />,
    disabled: true,
    path: "/employees",
    element: <EmployeesPage />,
  },
  {
    label: "Ayarlar",
    key: "/settings",
    icon: <SettingOutlined />,
    path: "/settings",
    element: <Settings />,
  },
];

export default ALL_ROUTES;
