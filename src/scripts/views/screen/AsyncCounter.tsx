import * as React from 'react';
import styled from 'styled-components';

import {CounterContext, CounterProvider, ICounterContext} from '../../providers/CounterProvider';
import Link from '../../routers/components/Link';
import sleep from '../../utils/sleep';
import * as Storage from '../../utils/storage';
import Button from '../shared/Button';
import Card from '../shared/Card';

export const STORAGE_KEY = `${window.location.hostname}-counter-provider`;

const AsyncCounterContainer = () => {
  return (
    <CounterProvider>
      <CardWrapper>
        <Card>
          <AsyncCounter />
        </Card>
      </CardWrapper>
    </CounterProvider>
  );
};

const AsyncCounter = () => {
  // Intialize
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
  const handlePress = React.useCallback(async () => {
    await sleep(1000);
    dispatch({type: 'INCREMENT'});
  }, []);
  const handleSaveCounter = React.useCallback(
    () => Storage.saveSessionStorageByKey(state, STORAGE_KEY),
    [state]
  );

  // Render
  return (
    <>
      <Title>Async Counter</Title>
      <Count data-testid="count">Count: {state.count}</Count>
      <ButtonWrapper>
        <Button onPress={handlePress} label="ASYNC INCREMENT" fontsize={18} />
        <Button onPress={handleSaveCounter} label="SAVE" fontsize={18} />
      </ButtonWrapper>
      <Navigation>
        <Link href="/">To Sync page</Link>
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

export default AsyncCounterContainer;
