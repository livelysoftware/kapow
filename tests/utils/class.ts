import { kapow, validate } from "../../build/index.js";

export default class TestClass {

  constructor() {}

  @validate
  public add(
    @kapow({
      required: true,
      type: "number"
    }) a,
    @kapow({
      required: true,
      type: "number"
    }) b
  ) {
    return a + b;
  }

}