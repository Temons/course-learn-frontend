import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "../../types/counterSchema";
import { getCounter } from "../../../model/selectors/getCounter/getCounter";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
)