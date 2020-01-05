import * as React from "react";
import { Routes } from "universal-router";

const publicPath = (() => {
  switch (process.env.ENV ) {
    case 'GITHUB_PAGES':
      return '/boilerplate_reactweb'
    default:
      return ''
  }
})()

const routes: Routes<any, { default: React.ComponentType }> = [
  {
    path: `${publicPath}/`,
    action: () => import("../views/screen/Counter"),
  },
  {
    path: `${publicPath}/async`,
    action: () => import("../views/screen/AsyncCounter"),
  },
];

export default routes;
