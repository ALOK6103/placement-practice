import React from "react";
import * as types from "./actionTypes.js";

const initialState = {
  count: 0,
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD:
      return { ...oldState, count: oldState.count + payload };

    case types.REDUCE:
      return { ...oldState, count: oldState.count - payload };

    default:
      return {
        ...oldState,
      };
  }
};
