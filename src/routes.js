//pages
import HomePage from "./pages/home";
import AppointmentsPage from "./pages/appointments";
import CostumersPage from "./pages/costumers";
import PendingPaymentsPage from "./pages/pendingPayments";
import ProductsPage from "./pages/products";
import NotFound from "./pages/notFound";
import RegisterPage from "./pages/register";
import VerifyPage from "./pages/verify";
import LoginPage from "./pages/login";

//3rd-party libraries
import {
  HomeOutlined,
  BarcodeOutlined,
  TeamOutlined,
  WalletOutlined,
  ScheduleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//utils
import { ROLES } from "./utils/roles";
import { PAGE_PATHS } from "./utils/pagesPaths";
import Settings from "./pages/settings";

const ALL_ROUTES = [
  {
    path: PAGE_PATHS.REGISTER,
    element: <RegisterPage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    path: PAGE_PATHS.VERIFY,
    element: <VerifyPage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    path: PAGE_PATHS.LOGIN,
    element: <LoginPage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    path: PAGE_PATHS.NOT_FOUND,
    element: <NotFound />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    label: "Ana Sayfa",
    icon: <HomeOutlined />,
    key: PAGE_PATHS.HOME,
    path: PAGE_PATHS.HOME,
    element: <HomePage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    label: "Müşteri İşlemleri",
    icon: <TeamOutlined />,
    key: PAGE_PATHS.COSTUMERS,
    path: PAGE_PATHS.COSTUMERS,
    element: <CostumersPage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    label: "Randevu İşlemleri",
    icon: <ScheduleOutlined />,
    key: PAGE_PATHS.APPOINTMENTS,
    path: PAGE_PATHS.APPOINTMENTS,
    element: <AppointmentsPage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    label: "Ürün İşlemleri",
    icon: <BarcodeOutlined />,
    key: PAGE_PATHS.PRODUCTS,
    path: PAGE_PATHS.PRODUCTS,
    element: <ProductsPage />,
    allow: [ROLES.SUPER, ROLES.ADMIN, ROLES.EMPLOYEE],
  },
  {
    label: "Bekleyen taksitler",
    icon: <WalletOutlined />,
    key: PAGE_PATHS.PENDING_PAYMENT,
    path: PAGE_PATHS.PENDING_PAYMENT,
    element: <PendingPaymentsPage />,
  },
  {
    label: "Ayarlar",
    icon: <SettingOutlined />,
    key: PAGE_PATHS.SETTINGS,
    path: PAGE_PATHS.SETTINGS,
    element: <Settings />,
  },
];

export default ALL_ROUTES;
