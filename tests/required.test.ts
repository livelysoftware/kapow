import { test } from "ava";
import TestClass from "./utils/class";

test("require | All parameters correct", async t => {
  t.is(new TestClass().add(1, 2), 3);
});

test("require | Missing parameter", async t => {
  t.throws(() => {
    // @ts-ignore
    new TestClass().add(1);
  });
});
