import { validationError } from "@business/module/validationErrors";
import { AbstractSerializer } from "@controller/serializers/abstractSerializer";
import { ValidationError } from "class-validator";
import { injectable } from "inversify";

@injectable()
export abstract class AbstractOperator<I, O> {
  abstract run(input: I, ...args: unknown[]): Promise<O>;

  protected exec(input: AbstractSerializer<I>): void {
    try {
      input.validate();
    } catch (error) {
      if (
        error instanceof Array &&
        error.length &&
        error[0] instanceof ValidationError
      ) {
        const validationErrors = error as ValidationError[];

        const details = validationErrors.map((error) => ({
          property: error.property,
          value: `value <${error.value}> did not pass validation`,
          errors: Object.entries(error.constraints).map(([, value]) => value),
        }));

        throw validationError(details);
      }
    }
  }
}
