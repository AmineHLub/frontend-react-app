import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/configureStore';

const Greeting = () => {
  const ObjMessages = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, []);
  return (
    <h1>{ObjMessages.message}</h1>
  );
};

export default Greeting;
