import { kapow, validate } from "../../build/index.js";

export default class TestClass {

  constructor() {}

  @validate
  public add(
    @kapow({ required: true }) a,
    @kapow({ required: true }) b
  ) {
    return a + b;
  }

}