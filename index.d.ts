declare module "turbolinks";
declare module "body-scroll-lock";
declare module "scriptjs";
declare module "@heintouchable/functions";

type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
        ? []
        : T extends Array<any> | string
            ? string[]
            : never;

interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
}
