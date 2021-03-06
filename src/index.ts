import "reflect-metadata";
import ow from "ow";

const kapowMetadataKey = Symbol("Kapow");

interface KapowOptions {
  required?: boolean
}

export function kapow(options: KapowOptions) {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let requirements: any[] = Reflect.getOwnMetadata(kapowMetadataKey, target, propertyKey) || [];

    if (options.required) {
      requirements.push({ index: parameterIndex, options });
    }

    Reflect.defineMetadata(kapowMetadataKey, requirements, target, propertyKey);
  }
}

export function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  let method = descriptor.value;

  descriptor.value = function () {
    let requirements: any[] = Reflect.getOwnMetadata(kapowMetadataKey, target, propertyName);

    for (let requirement of requirements) {
      const parameter = arguments[requirement.index];

      if (requirement.options.required && typeof parameter === "undefined") {
        throw new Error("Missing required argument")
      }

      if (requirement.options.type) {
        ow(parameter, ow[requirement.options.type]);
      }
    }

    return method.apply(this, arguments);
  }

}
