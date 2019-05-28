import {History} from 'history';
import {useEffect, useState} from 'react';

function useLocation(history: History<any>) {
  const [location, setLocation] = useState(history.location);
  useEffect(() => {
    const unlisten = history.listen(l => setLocation(l));
    return () => unlisten();
  }, [history]);
  return location;
}

export default useLocation;
