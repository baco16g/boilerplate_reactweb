import * as React from 'react';
import styled from 'styled-components';

import {CounterContext, CounterProvider, ICounterContext} from '../../providers/CounterProvider';
import * as Storage from '../../utils/storage';
import Link from '../../routers/components/Link';
import Button from '../shared/Button';
import Card from '../shared/Card';

const STORAGE_KEY = `${window.location.hostname}-counter-provider`;

const CounterContainer = () => {
  return (
    <CounterProvider>
      <CardWrapper>
        <Card>
          <Counter />
        </Card>
      </CardWrapper>
    </CounterProvider>
  );
};

const Counter = () => {
  // Initialize
  const value = React.useContext(CounterContext);
  if (!value) return null;
  const {state, dispatch} = value;

  // Effects
  React.useEffect(() => {
    const storedState = Storage.loadSessionStorageByKey<ICounterContext['state']>(STORAGE_KEY);
    if (!storedState) return;
    dispatch({type: 'RESTORE', payload: storedState});
  }, []);

  // Handlers
  const handlePress = React.useCallback(() => dispatch({type: 'INCREMENT'}), []);
  const handleSaveCounter = React.useCallback(
    () => Storage.saveSessionStorageByKey(state, STORAGE_KEY),
    [state]
  );

  // Render
  return (
    <>
      <Title>Sync Counter</Title>
      <Count>{state.count}</Count>
      <ButtonWrapper>
        <Button onPress={handlePress} label="INCREMENT" fontsize={18} />
        <Button onPress={handleSaveCounter} label="SAVE" fontsize={18} />
      </ButtonWrapper>
      <Navigation>
        <Link href="/async">To Async page</Link>
      </Navigation>
    </>
  );
};

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const Count = styled.p`
  font-size: 24px;
  line-height: 2;
  text-align: center;
  padding: 18px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  > button:nth-child(n + 2) {
    margin-left: 12px;
  }
`;

const Navigation = styled.p`
  text-align: center;
  margin-top: 24px;
`;

export default CounterContainer;
