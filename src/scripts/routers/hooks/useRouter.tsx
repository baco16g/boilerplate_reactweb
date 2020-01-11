import { History } from "history";
import * as React from "react";
import UniversalRouter, { Routes } from "universal-router";

import useLocation from "../hooks/useLocation";

function useRouter(routes: Routes<any, { default: React.ComponentType }>, history: History<any>) {
  const location = useLocation(history);
  const options = { baseUrl: process.env.BASE_URL };
  const router = React.useMemo(() => new UniversalRouter(routes, options), [routes]);
  const [Component, setComponent] = React.useState<any>("div");

  React.useEffect(() => {
    const pathname = process.env.BASE_URL
      ? location.pathname.replace(process.env.BASE_URL, "").slice(1)
      : location.pathname;
    const LazyComponent = React.lazy(() => router.resolve(pathname));
    setComponent(() => LazyComponent);
  }, [location]);

  return Component;
}

export default useRouter;
