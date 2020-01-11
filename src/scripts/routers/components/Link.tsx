import * as React from "react";

import HistoryContext from "../contexts/HistoryContext";

function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const history = React.useContext(HistoryContext);
  const href = `${process.env.BASE_URL || "/"}${(props.href || "/").slice(1)}`;
  const handleClick = React.useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault();
      history.push(href!);
    },
    [history, href]
  );

  return <a onClick={handleClick} {...props} href={href} />;
}

export default Link;
