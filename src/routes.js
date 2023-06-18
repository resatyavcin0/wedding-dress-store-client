//icons
import {
  HomeOutlined,
  BarcodeOutlined,
  TeamOutlined,
  WalletOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

//pages
import RegisterPage from "./pages/register";
import SigninPage from "./pages/signin";
import HomePage from "./pages/home";
import AppointmentsPage from "./pages/appointments";
import CostumersPage from "./pages/costumers";
import PendingPaymentsPage from "./pages/pendingPayments";
import ProductsPage from "./pages/products";
import NotFound from "./pages/notFound";
import VerifyPage from "./pages/verify";

const ALL_ROUTES = [
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/verify",
    element: <VerifyPage />,
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
    icon: <ScheduleOutlined />,
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
];

export default ALL_ROUTES;
