import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Login = React.lazy(() => import("@/pages/login"));
const DashBoard = React.lazy(() => import("@/pages/DashBoard"));
const NoMatch = React.lazy(() => import("@/pages/Error/NoMatch"));

export const SpinIcon = () => (
  <Spin
    className="transform-center"
    indicator={
      <LoadingOutlined
        style={{ fontSize: 24 }}
        spin
      />
    }
  />
);
const Router = () => {
  return (
    <Suspense fallback={<SpinIcon />}>
      <HashRouter>
        <Switch>
          <Route name="Login" path="/login" component={Login} />
          <Route name="DashBoard" path="/" component={DashBoard} />
          <Route name="NoMatch" path="*" component={NoMatch} />
        </Switch>
      </HashRouter>
    </Suspense>
  );
};

export default Router;