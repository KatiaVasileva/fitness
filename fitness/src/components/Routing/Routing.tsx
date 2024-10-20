// import PrivateRoute from "../../routes/PrivateRoute";
import { AppRoutes } from "../../lib/appRoutes";
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import WorkoutVideoPage from "../../pages/WorkoutVideoPage";

export default function Routing() {
  return (
    <>
      <Routes>
        {/* <Route element={<PrivateRoute />}>
          <Route path={AppRoutes.MAIN} element={<MainPage />}>
            <Route path={AppRoutes.EXIT} element={<ExitPage />} />
          </Route>
        </Route> */}

        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={AppRoutes.WORKOUT} element={<WorkoutVideoPage/>} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
