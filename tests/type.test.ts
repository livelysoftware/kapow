import { test } from "ava";
import TestClass from "./utils/class";

test("type | Correct types", async t => {
  t.is(new TestClass().add(1, 2), 3);
});

test("require | One incorrect type", async t => {
  t.throws(() => {
    new TestClass().add("1", 2);
  }, "Expected argument to be of type `number` but received type `string`");
});

test("require | Both incorrect types", async t => {
  t.throws(() => {
    new TestClass().add("1", "2");
  }, "Expected argument to be of type `number` but received type `string`");
});
