import { Login, DashboardContent, SurveyForm, AdminDashboard } from "./components/screens";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user",
    element: <DashboardContent pageTitle="SURVEY FORM">
      <SurveyForm />
    </DashboardContent>,
  },
  {
    path: "/admin",
    element: <AdminDashboard pageTitle="Dashboard">
      {/* <SurveyForm /> */}
    </AdminDashboard>,
  },
];

export default routes;