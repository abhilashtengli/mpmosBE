
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Quarter
 * 
 */
export type Quarter = $Result.DefaultSelection<Prisma.$QuarterPayload>
/**
 * Model InputDistribution
 * 
 */
export type InputDistribution = $Result.DefaultSelection<Prisma.$InputDistributionPayload>
/**
 * Model PredefinedInputDistribution
 * 
 */
export type PredefinedInputDistribution = $Result.DefaultSelection<Prisma.$PredefinedInputDistributionPayload>
/**
 * Model CustomInputDistribution
 * 
 */
export type CustomInputDistribution = $Result.DefaultSelection<Prisma.$CustomInputDistributionPayload>
/**
 * Model Training
 * 
 */
export type Training = $Result.DefaultSelection<Prisma.$TrainingPayload>
/**
 * Model FLD
 * 
 */
export type FLD = $Result.DefaultSelection<Prisma.$FLDPayload>
/**
 * Model AwarenessProgram
 * 
 */
export type AwarenessProgram = $Result.DefaultSelection<Prisma.$AwarenessProgramPayload>
/**
 * Model InfrastructureDevelopment
 * 
 */
export type InfrastructureDevelopment = $Result.DefaultSelection<Prisma.$InfrastructureDevelopmentPayload>
/**
 * Model UpcomingEvent
 * 
 */
export type UpcomingEvent = $Result.DefaultSelection<Prisma.$UpcomingEventPayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model ProjectDetails
 * 
 */
export type ProjectDetails = $Result.DefaultSelection<Prisma.$ProjectDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quarter`: Exposes CRUD operations for the **Quarter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quarters
    * const quarters = await prisma.quarter.findMany()
    * ```
    */
  get quarter(): Prisma.QuarterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inputDistribution`: Exposes CRUD operations for the **InputDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InputDistributions
    * const inputDistributions = await prisma.inputDistribution.findMany()
    * ```
    */
  get inputDistribution(): Prisma.InputDistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predefinedInputDistribution`: Exposes CRUD operations for the **PredefinedInputDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PredefinedInputDistributions
    * const predefinedInputDistributions = await prisma.predefinedInputDistribution.findMany()
    * ```
    */
  get predefinedInputDistribution(): Prisma.PredefinedInputDistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customInputDistribution`: Exposes CRUD operations for the **CustomInputDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomInputDistributions
    * const customInputDistributions = await prisma.customInputDistribution.findMany()
    * ```
    */
  get customInputDistribution(): Prisma.CustomInputDistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.training`: Exposes CRUD operations for the **Training** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trainings
    * const trainings = await prisma.training.findMany()
    * ```
    */
  get training(): Prisma.TrainingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fLD`: Exposes CRUD operations for the **FLD** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FLDS
    * const fLDS = await prisma.fLD.findMany()
    * ```
    */
  get fLD(): Prisma.FLDDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.awarenessProgram`: Exposes CRUD operations for the **AwarenessProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AwarenessPrograms
    * const awarenessPrograms = await prisma.awarenessProgram.findMany()
    * ```
    */
  get awarenessProgram(): Prisma.AwarenessProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infrastructureDevelopment`: Exposes CRUD operations for the **InfrastructureDevelopment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfrastructureDevelopments
    * const infrastructureDevelopments = await prisma.infrastructureDevelopment.findMany()
    * ```
    */
  get infrastructureDevelopment(): Prisma.InfrastructureDevelopmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upcomingEvent`: Exposes CRUD operations for the **UpcomingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpcomingEvents
    * const upcomingEvents = await prisma.upcomingEvent.findMany()
    * ```
    */
  get upcomingEvent(): Prisma.UpcomingEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectDetails`: Exposes CRUD operations for the **ProjectDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDetails
    * const projectDetails = await prisma.projectDetails.findMany()
    * ```
    */
  get projectDetails(): Prisma.ProjectDetailsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Quarter: 'Quarter',
    InputDistribution: 'InputDistribution',
    PredefinedInputDistribution: 'PredefinedInputDistribution',
    CustomInputDistribution: 'CustomInputDistribution',
    Training: 'Training',
    FLD: 'FLD',
    AwarenessProgram: 'AwarenessProgram',
    InfrastructureDevelopment: 'InfrastructureDevelopment',
    UpcomingEvent: 'UpcomingEvent',
    Publication: 'Publication',
    Gallery: 'Gallery',
    ProjectDetails: 'ProjectDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "quarter" | "inputDistribution" | "predefinedInputDistribution" | "customInputDistribution" | "training" | "fLD" | "awarenessProgram" | "infrastructureDevelopment" | "upcomingEvent" | "publication" | "gallery" | "projectDetails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Quarter: {
        payload: Prisma.$QuarterPayload<ExtArgs>
        fields: Prisma.QuarterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuarterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuarterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>
          }
          findFirst: {
            args: Prisma.QuarterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuarterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>
          }
          findMany: {
            args: Prisma.QuarterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>[]
          }
          create: {
            args: Prisma.QuarterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>
          }
          createMany: {
            args: Prisma.QuarterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuarterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>[]
          }
          delete: {
            args: Prisma.QuarterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>
          }
          update: {
            args: Prisma.QuarterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>
          }
          deleteMany: {
            args: Prisma.QuarterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuarterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuarterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>[]
          }
          upsert: {
            args: Prisma.QuarterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuarterPayload>
          }
          aggregate: {
            args: Prisma.QuarterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuarter>
          }
          groupBy: {
            args: Prisma.QuarterGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuarterGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuarterCountArgs<ExtArgs>
            result: $Utils.Optional<QuarterCountAggregateOutputType> | number
          }
        }
      }
      InputDistribution: {
        payload: Prisma.$InputDistributionPayload<ExtArgs>
        fields: Prisma.InputDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InputDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InputDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>
          }
          findFirst: {
            args: Prisma.InputDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InputDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>
          }
          findMany: {
            args: Prisma.InputDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>[]
          }
          create: {
            args: Prisma.InputDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>
          }
          createMany: {
            args: Prisma.InputDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InputDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>[]
          }
          delete: {
            args: Prisma.InputDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>
          }
          update: {
            args: Prisma.InputDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>
          }
          deleteMany: {
            args: Prisma.InputDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InputDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InputDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>[]
          }
          upsert: {
            args: Prisma.InputDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputDistributionPayload>
          }
          aggregate: {
            args: Prisma.InputDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInputDistribution>
          }
          groupBy: {
            args: Prisma.InputDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InputDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InputDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<InputDistributionCountAggregateOutputType> | number
          }
        }
      }
      PredefinedInputDistribution: {
        payload: Prisma.$PredefinedInputDistributionPayload<ExtArgs>
        fields: Prisma.PredefinedInputDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredefinedInputDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredefinedInputDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>
          }
          findFirst: {
            args: Prisma.PredefinedInputDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredefinedInputDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>
          }
          findMany: {
            args: Prisma.PredefinedInputDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>[]
          }
          create: {
            args: Prisma.PredefinedInputDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>
          }
          createMany: {
            args: Prisma.PredefinedInputDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredefinedInputDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>[]
          }
          delete: {
            args: Prisma.PredefinedInputDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>
          }
          update: {
            args: Prisma.PredefinedInputDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>
          }
          deleteMany: {
            args: Prisma.PredefinedInputDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredefinedInputDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredefinedInputDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>[]
          }
          upsert: {
            args: Prisma.PredefinedInputDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedInputDistributionPayload>
          }
          aggregate: {
            args: Prisma.PredefinedInputDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredefinedInputDistribution>
          }
          groupBy: {
            args: Prisma.PredefinedInputDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredefinedInputDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredefinedInputDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<PredefinedInputDistributionCountAggregateOutputType> | number
          }
        }
      }
      CustomInputDistribution: {
        payload: Prisma.$CustomInputDistributionPayload<ExtArgs>
        fields: Prisma.CustomInputDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomInputDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomInputDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>
          }
          findFirst: {
            args: Prisma.CustomInputDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomInputDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>
          }
          findMany: {
            args: Prisma.CustomInputDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>[]
          }
          create: {
            args: Prisma.CustomInputDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>
          }
          createMany: {
            args: Prisma.CustomInputDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomInputDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>[]
          }
          delete: {
            args: Prisma.CustomInputDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>
          }
          update: {
            args: Prisma.CustomInputDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>
          }
          deleteMany: {
            args: Prisma.CustomInputDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomInputDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomInputDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>[]
          }
          upsert: {
            args: Prisma.CustomInputDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomInputDistributionPayload>
          }
          aggregate: {
            args: Prisma.CustomInputDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomInputDistribution>
          }
          groupBy: {
            args: Prisma.CustomInputDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomInputDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomInputDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<CustomInputDistributionCountAggregateOutputType> | number
          }
        }
      }
      Training: {
        payload: Prisma.$TrainingPayload<ExtArgs>
        fields: Prisma.TrainingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          findFirst: {
            args: Prisma.TrainingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          findMany: {
            args: Prisma.TrainingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>[]
          }
          create: {
            args: Prisma.TrainingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          createMany: {
            args: Prisma.TrainingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>[]
          }
          delete: {
            args: Prisma.TrainingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          update: {
            args: Prisma.TrainingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          deleteMany: {
            args: Prisma.TrainingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>[]
          }
          upsert: {
            args: Prisma.TrainingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPayload>
          }
          aggregate: {
            args: Prisma.TrainingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTraining>
          }
          groupBy: {
            args: Prisma.TrainingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingCountAggregateOutputType> | number
          }
        }
      }
      FLD: {
        payload: Prisma.$FLDPayload<ExtArgs>
        fields: Prisma.FLDFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FLDFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FLDFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>
          }
          findFirst: {
            args: Prisma.FLDFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FLDFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>
          }
          findMany: {
            args: Prisma.FLDFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>[]
          }
          create: {
            args: Prisma.FLDCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>
          }
          createMany: {
            args: Prisma.FLDCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FLDCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>[]
          }
          delete: {
            args: Prisma.FLDDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>
          }
          update: {
            args: Prisma.FLDUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>
          }
          deleteMany: {
            args: Prisma.FLDDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FLDUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FLDUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>[]
          }
          upsert: {
            args: Prisma.FLDUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FLDPayload>
          }
          aggregate: {
            args: Prisma.FLDAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFLD>
          }
          groupBy: {
            args: Prisma.FLDGroupByArgs<ExtArgs>
            result: $Utils.Optional<FLDGroupByOutputType>[]
          }
          count: {
            args: Prisma.FLDCountArgs<ExtArgs>
            result: $Utils.Optional<FLDCountAggregateOutputType> | number
          }
        }
      }
      AwarenessProgram: {
        payload: Prisma.$AwarenessProgramPayload<ExtArgs>
        fields: Prisma.AwarenessProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwarenessProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwarenessProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>
          }
          findFirst: {
            args: Prisma.AwarenessProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwarenessProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>
          }
          findMany: {
            args: Prisma.AwarenessProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>[]
          }
          create: {
            args: Prisma.AwarenessProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>
          }
          createMany: {
            args: Prisma.AwarenessProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwarenessProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>[]
          }
          delete: {
            args: Prisma.AwarenessProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>
          }
          update: {
            args: Prisma.AwarenessProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>
          }
          deleteMany: {
            args: Prisma.AwarenessProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwarenessProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwarenessProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>[]
          }
          upsert: {
            args: Prisma.AwarenessProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwarenessProgramPayload>
          }
          aggregate: {
            args: Prisma.AwarenessProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAwarenessProgram>
          }
          groupBy: {
            args: Prisma.AwarenessProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwarenessProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwarenessProgramCountArgs<ExtArgs>
            result: $Utils.Optional<AwarenessProgramCountAggregateOutputType> | number
          }
        }
      }
      InfrastructureDevelopment: {
        payload: Prisma.$InfrastructureDevelopmentPayload<ExtArgs>
        fields: Prisma.InfrastructureDevelopmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfrastructureDevelopmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfrastructureDevelopmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>
          }
          findFirst: {
            args: Prisma.InfrastructureDevelopmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfrastructureDevelopmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>
          }
          findMany: {
            args: Prisma.InfrastructureDevelopmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>[]
          }
          create: {
            args: Prisma.InfrastructureDevelopmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>
          }
          createMany: {
            args: Prisma.InfrastructureDevelopmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfrastructureDevelopmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>[]
          }
          delete: {
            args: Prisma.InfrastructureDevelopmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>
          }
          update: {
            args: Prisma.InfrastructureDevelopmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>
          }
          deleteMany: {
            args: Prisma.InfrastructureDevelopmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfrastructureDevelopmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfrastructureDevelopmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>[]
          }
          upsert: {
            args: Prisma.InfrastructureDevelopmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfrastructureDevelopmentPayload>
          }
          aggregate: {
            args: Prisma.InfrastructureDevelopmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfrastructureDevelopment>
          }
          groupBy: {
            args: Prisma.InfrastructureDevelopmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfrastructureDevelopmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfrastructureDevelopmentCountArgs<ExtArgs>
            result: $Utils.Optional<InfrastructureDevelopmentCountAggregateOutputType> | number
          }
        }
      }
      UpcomingEvent: {
        payload: Prisma.$UpcomingEventPayload<ExtArgs>
        fields: Prisma.UpcomingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpcomingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpcomingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>
          }
          findFirst: {
            args: Prisma.UpcomingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpcomingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>
          }
          findMany: {
            args: Prisma.UpcomingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>[]
          }
          create: {
            args: Prisma.UpcomingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>
          }
          createMany: {
            args: Prisma.UpcomingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpcomingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>[]
          }
          delete: {
            args: Prisma.UpcomingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>
          }
          update: {
            args: Prisma.UpcomingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>
          }
          deleteMany: {
            args: Prisma.UpcomingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpcomingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpcomingEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>[]
          }
          upsert: {
            args: Prisma.UpcomingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingEventPayload>
          }
          aggregate: {
            args: Prisma.UpcomingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpcomingEvent>
          }
          groupBy: {
            args: Prisma.UpcomingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpcomingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpcomingEventCountArgs<ExtArgs>
            result: $Utils.Optional<UpcomingEventCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      ProjectDetails: {
        payload: Prisma.$ProjectDetailsPayload<ExtArgs>
        fields: Prisma.ProjectDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          findFirst: {
            args: Prisma.ProjectDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          findMany: {
            args: Prisma.ProjectDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>[]
          }
          create: {
            args: Prisma.ProjectDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          createMany: {
            args: Prisma.ProjectDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>[]
          }
          delete: {
            args: Prisma.ProjectDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          update: {
            args: Prisma.ProjectDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>[]
          }
          upsert: {
            args: Prisma.ProjectDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          aggregate: {
            args: Prisma.ProjectDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDetails>
          }
          groupBy: {
            args: Prisma.ProjectDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    quarter?: QuarterOmit
    inputDistribution?: InputDistributionOmit
    predefinedInputDistribution?: PredefinedInputDistributionOmit
    customInputDistribution?: CustomInputDistributionOmit
    training?: TrainingOmit
    fLD?: FLDOmit
    awarenessProgram?: AwarenessProgramOmit
    infrastructureDevelopment?: InfrastructureDevelopmentOmit
    upcomingEvent?: UpcomingEventOmit
    publication?: PublicationOmit
    gallery?: GalleryOmit
    projectDetails?: ProjectDetailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    trainings: number
    flds: number
    awarenessPrograms: number
    infrastructureDevelopments: number
    inputDistributions: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainings?: boolean | ProjectCountOutputTypeCountTrainingsArgs
    flds?: boolean | ProjectCountOutputTypeCountFldsArgs
    awarenessPrograms?: boolean | ProjectCountOutputTypeCountAwarenessProgramsArgs
    infrastructureDevelopments?: boolean | ProjectCountOutputTypeCountInfrastructureDevelopmentsArgs
    inputDistributions?: boolean | ProjectCountOutputTypeCountInputDistributionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTrainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FLDWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAwarenessProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwarenessProgramWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountInfrastructureDevelopmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfrastructureDevelopmentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountInputDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputDistributionWhereInput
  }


  /**
   * Count Type QuarterCountOutputType
   */

  export type QuarterCountOutputType = {
    trainings: number
    flds: number
    awarenessPrograms: number
    inputDistributions: number
    infrastructureDevelopments: number
  }

  export type QuarterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainings?: boolean | QuarterCountOutputTypeCountTrainingsArgs
    flds?: boolean | QuarterCountOutputTypeCountFldsArgs
    awarenessPrograms?: boolean | QuarterCountOutputTypeCountAwarenessProgramsArgs
    inputDistributions?: boolean | QuarterCountOutputTypeCountInputDistributionsArgs
    infrastructureDevelopments?: boolean | QuarterCountOutputTypeCountInfrastructureDevelopmentsArgs
  }

  // Custom InputTypes
  /**
   * QuarterCountOutputType without action
   */
  export type QuarterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuarterCountOutputType
     */
    select?: QuarterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuarterCountOutputType without action
   */
  export type QuarterCountOutputTypeCountTrainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingWhereInput
  }

  /**
   * QuarterCountOutputType without action
   */
  export type QuarterCountOutputTypeCountFldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FLDWhereInput
  }

  /**
   * QuarterCountOutputType without action
   */
  export type QuarterCountOutputTypeCountAwarenessProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwarenessProgramWhereInput
  }

  /**
   * QuarterCountOutputType without action
   */
  export type QuarterCountOutputTypeCountInputDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputDistributionWhereInput
  }

  /**
   * QuarterCountOutputType without action
   */
  export type QuarterCountOutputTypeCountInfrastructureDevelopmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfrastructureDevelopmentWhereInput
  }


  /**
   * Count Type InputDistributionCountOutputType
   */

  export type InputDistributionCountOutputType = {
    predefinedItems: number
    customItems: number
  }

  export type InputDistributionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predefinedItems?: boolean | InputDistributionCountOutputTypeCountPredefinedItemsArgs
    customItems?: boolean | InputDistributionCountOutputTypeCountCustomItemsArgs
  }

  // Custom InputTypes
  /**
   * InputDistributionCountOutputType without action
   */
  export type InputDistributionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistributionCountOutputType
     */
    select?: InputDistributionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InputDistributionCountOutputType without action
   */
  export type InputDistributionCountOutputTypeCountPredefinedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredefinedInputDistributionWhereInput
  }

  /**
   * InputDistributionCountOutputType without action
   */
  export type InputDistributionCountOutputTypeCountCustomItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomInputDistributionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    implementingAgency: string | null
    title: string | null
    locationState: string | null
    director: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    implementingAgency: string | null
    title: string | null
    locationState: string | null
    director: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    implementingAgency: number
    title: number
    locationState: number
    director: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    implementingAgency?: true
    title?: true
    locationState?: true
    director?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    implementingAgency?: true
    title?: true
    locationState?: true
    director?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    implementingAgency?: true
    title?: true
    locationState?: true
    director?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    implementingAgency?: boolean
    title?: boolean
    locationState?: boolean
    director?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainings?: boolean | Project$trainingsArgs<ExtArgs>
    flds?: boolean | Project$fldsArgs<ExtArgs>
    awarenessPrograms?: boolean | Project$awarenessProgramsArgs<ExtArgs>
    infrastructureDevelopments?: boolean | Project$infrastructureDevelopmentsArgs<ExtArgs>
    inputDistributions?: boolean | Project$inputDistributionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    implementingAgency?: boolean
    title?: boolean
    locationState?: boolean
    director?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    implementingAgency?: boolean
    title?: boolean
    locationState?: boolean
    director?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    implementingAgency?: boolean
    title?: boolean
    locationState?: boolean
    director?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "implementingAgency" | "title" | "locationState" | "director" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainings?: boolean | Project$trainingsArgs<ExtArgs>
    flds?: boolean | Project$fldsArgs<ExtArgs>
    awarenessPrograms?: boolean | Project$awarenessProgramsArgs<ExtArgs>
    infrastructureDevelopments?: boolean | Project$infrastructureDevelopmentsArgs<ExtArgs>
    inputDistributions?: boolean | Project$inputDistributionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      trainings: Prisma.$TrainingPayload<ExtArgs>[]
      flds: Prisma.$FLDPayload<ExtArgs>[]
      awarenessPrograms: Prisma.$AwarenessProgramPayload<ExtArgs>[]
      infrastructureDevelopments: Prisma.$InfrastructureDevelopmentPayload<ExtArgs>[]
      inputDistributions: Prisma.$InputDistributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      implementingAgency: string
      title: string
      locationState: string
      director: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainings<T extends Project$trainingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$trainingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flds<T extends Project$fldsArgs<ExtArgs> = {}>(args?: Subset<T, Project$fldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awarenessPrograms<T extends Project$awarenessProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Project$awarenessProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    infrastructureDevelopments<T extends Project$infrastructureDevelopmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$infrastructureDevelopmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inputDistributions<T extends Project$inputDistributionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$inputDistributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly implementingAgency: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly locationState: FieldRef<"Project", 'String'>
    readonly director: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.trainings
   */
  export type Project$trainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    where?: TrainingWhereInput
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    cursor?: TrainingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }

  /**
   * Project.flds
   */
  export type Project$fldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    where?: FLDWhereInput
    orderBy?: FLDOrderByWithRelationInput | FLDOrderByWithRelationInput[]
    cursor?: FLDWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FLDScalarFieldEnum | FLDScalarFieldEnum[]
  }

  /**
   * Project.awarenessPrograms
   */
  export type Project$awarenessProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    where?: AwarenessProgramWhereInput
    orderBy?: AwarenessProgramOrderByWithRelationInput | AwarenessProgramOrderByWithRelationInput[]
    cursor?: AwarenessProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwarenessProgramScalarFieldEnum | AwarenessProgramScalarFieldEnum[]
  }

  /**
   * Project.infrastructureDevelopments
   */
  export type Project$infrastructureDevelopmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    where?: InfrastructureDevelopmentWhereInput
    orderBy?: InfrastructureDevelopmentOrderByWithRelationInput | InfrastructureDevelopmentOrderByWithRelationInput[]
    cursor?: InfrastructureDevelopmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InfrastructureDevelopmentScalarFieldEnum | InfrastructureDevelopmentScalarFieldEnum[]
  }

  /**
   * Project.inputDistributions
   */
  export type Project$inputDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    where?: InputDistributionWhereInput
    orderBy?: InputDistributionOrderByWithRelationInput | InputDistributionOrderByWithRelationInput[]
    cursor?: InputDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InputDistributionScalarFieldEnum | InputDistributionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Quarter
   */

  export type AggregateQuarter = {
    _count: QuarterCountAggregateOutputType | null
    _avg: QuarterAvgAggregateOutputType | null
    _sum: QuarterSumAggregateOutputType | null
    _min: QuarterMinAggregateOutputType | null
    _max: QuarterMaxAggregateOutputType | null
  }

  export type QuarterAvgAggregateOutputType = {
    number: number | null
    year: number | null
  }

  export type QuarterSumAggregateOutputType = {
    number: number | null
    year: number | null
  }

  export type QuarterMinAggregateOutputType = {
    id: string | null
    number: number | null
    year: number | null
  }

  export type QuarterMaxAggregateOutputType = {
    id: string | null
    number: number | null
    year: number | null
  }

  export type QuarterCountAggregateOutputType = {
    id: number
    number: number
    year: number
    _all: number
  }


  export type QuarterAvgAggregateInputType = {
    number?: true
    year?: true
  }

  export type QuarterSumAggregateInputType = {
    number?: true
    year?: true
  }

  export type QuarterMinAggregateInputType = {
    id?: true
    number?: true
    year?: true
  }

  export type QuarterMaxAggregateInputType = {
    id?: true
    number?: true
    year?: true
  }

  export type QuarterCountAggregateInputType = {
    id?: true
    number?: true
    year?: true
    _all?: true
  }

  export type QuarterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quarter to aggregate.
     */
    where?: QuarterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quarters to fetch.
     */
    orderBy?: QuarterOrderByWithRelationInput | QuarterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuarterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quarters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quarters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quarters
    **/
    _count?: true | QuarterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuarterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuarterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuarterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuarterMaxAggregateInputType
  }

  export type GetQuarterAggregateType<T extends QuarterAggregateArgs> = {
        [P in keyof T & keyof AggregateQuarter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuarter[P]>
      : GetScalarType<T[P], AggregateQuarter[P]>
  }




  export type QuarterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuarterWhereInput
    orderBy?: QuarterOrderByWithAggregationInput | QuarterOrderByWithAggregationInput[]
    by: QuarterScalarFieldEnum[] | QuarterScalarFieldEnum
    having?: QuarterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuarterCountAggregateInputType | true
    _avg?: QuarterAvgAggregateInputType
    _sum?: QuarterSumAggregateInputType
    _min?: QuarterMinAggregateInputType
    _max?: QuarterMaxAggregateInputType
  }

  export type QuarterGroupByOutputType = {
    id: string
    number: number
    year: number
    _count: QuarterCountAggregateOutputType | null
    _avg: QuarterAvgAggregateOutputType | null
    _sum: QuarterSumAggregateOutputType | null
    _min: QuarterMinAggregateOutputType | null
    _max: QuarterMaxAggregateOutputType | null
  }

  type GetQuarterGroupByPayload<T extends QuarterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuarterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuarterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuarterGroupByOutputType[P]>
            : GetScalarType<T[P], QuarterGroupByOutputType[P]>
        }
      >
    >


  export type QuarterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    year?: boolean
    trainings?: boolean | Quarter$trainingsArgs<ExtArgs>
    flds?: boolean | Quarter$fldsArgs<ExtArgs>
    awarenessPrograms?: boolean | Quarter$awarenessProgramsArgs<ExtArgs>
    inputDistributions?: boolean | Quarter$inputDistributionsArgs<ExtArgs>
    infrastructureDevelopments?: boolean | Quarter$infrastructureDevelopmentsArgs<ExtArgs>
    _count?: boolean | QuarterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarter"]>

  export type QuarterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    year?: boolean
  }, ExtArgs["result"]["quarter"]>

  export type QuarterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    year?: boolean
  }, ExtArgs["result"]["quarter"]>

  export type QuarterSelectScalar = {
    id?: boolean
    number?: boolean
    year?: boolean
  }

  export type QuarterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "year", ExtArgs["result"]["quarter"]>
  export type QuarterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainings?: boolean | Quarter$trainingsArgs<ExtArgs>
    flds?: boolean | Quarter$fldsArgs<ExtArgs>
    awarenessPrograms?: boolean | Quarter$awarenessProgramsArgs<ExtArgs>
    inputDistributions?: boolean | Quarter$inputDistributionsArgs<ExtArgs>
    infrastructureDevelopments?: boolean | Quarter$infrastructureDevelopmentsArgs<ExtArgs>
    _count?: boolean | QuarterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuarterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuarterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuarterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quarter"
    objects: {
      trainings: Prisma.$TrainingPayload<ExtArgs>[]
      flds: Prisma.$FLDPayload<ExtArgs>[]
      awarenessPrograms: Prisma.$AwarenessProgramPayload<ExtArgs>[]
      inputDistributions: Prisma.$InputDistributionPayload<ExtArgs>[]
      infrastructureDevelopments: Prisma.$InfrastructureDevelopmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      year: number
    }, ExtArgs["result"]["quarter"]>
    composites: {}
  }

  type QuarterGetPayload<S extends boolean | null | undefined | QuarterDefaultArgs> = $Result.GetResult<Prisma.$QuarterPayload, S>

  type QuarterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuarterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuarterCountAggregateInputType | true
    }

  export interface QuarterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quarter'], meta: { name: 'Quarter' } }
    /**
     * Find zero or one Quarter that matches the filter.
     * @param {QuarterFindUniqueArgs} args - Arguments to find a Quarter
     * @example
     * // Get one Quarter
     * const quarter = await prisma.quarter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuarterFindUniqueArgs>(args: SelectSubset<T, QuarterFindUniqueArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quarter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuarterFindUniqueOrThrowArgs} args - Arguments to find a Quarter
     * @example
     * // Get one Quarter
     * const quarter = await prisma.quarter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuarterFindUniqueOrThrowArgs>(args: SelectSubset<T, QuarterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quarter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterFindFirstArgs} args - Arguments to find a Quarter
     * @example
     * // Get one Quarter
     * const quarter = await prisma.quarter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuarterFindFirstArgs>(args?: SelectSubset<T, QuarterFindFirstArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quarter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterFindFirstOrThrowArgs} args - Arguments to find a Quarter
     * @example
     * // Get one Quarter
     * const quarter = await prisma.quarter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuarterFindFirstOrThrowArgs>(args?: SelectSubset<T, QuarterFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quarters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quarters
     * const quarters = await prisma.quarter.findMany()
     * 
     * // Get first 10 Quarters
     * const quarters = await prisma.quarter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quarterWithIdOnly = await prisma.quarter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuarterFindManyArgs>(args?: SelectSubset<T, QuarterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quarter.
     * @param {QuarterCreateArgs} args - Arguments to create a Quarter.
     * @example
     * // Create one Quarter
     * const Quarter = await prisma.quarter.create({
     *   data: {
     *     // ... data to create a Quarter
     *   }
     * })
     * 
     */
    create<T extends QuarterCreateArgs>(args: SelectSubset<T, QuarterCreateArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quarters.
     * @param {QuarterCreateManyArgs} args - Arguments to create many Quarters.
     * @example
     * // Create many Quarters
     * const quarter = await prisma.quarter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuarterCreateManyArgs>(args?: SelectSubset<T, QuarterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quarters and returns the data saved in the database.
     * @param {QuarterCreateManyAndReturnArgs} args - Arguments to create many Quarters.
     * @example
     * // Create many Quarters
     * const quarter = await prisma.quarter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quarters and only return the `id`
     * const quarterWithIdOnly = await prisma.quarter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuarterCreateManyAndReturnArgs>(args?: SelectSubset<T, QuarterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quarter.
     * @param {QuarterDeleteArgs} args - Arguments to delete one Quarter.
     * @example
     * // Delete one Quarter
     * const Quarter = await prisma.quarter.delete({
     *   where: {
     *     // ... filter to delete one Quarter
     *   }
     * })
     * 
     */
    delete<T extends QuarterDeleteArgs>(args: SelectSubset<T, QuarterDeleteArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quarter.
     * @param {QuarterUpdateArgs} args - Arguments to update one Quarter.
     * @example
     * // Update one Quarter
     * const quarter = await prisma.quarter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuarterUpdateArgs>(args: SelectSubset<T, QuarterUpdateArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quarters.
     * @param {QuarterDeleteManyArgs} args - Arguments to filter Quarters to delete.
     * @example
     * // Delete a few Quarters
     * const { count } = await prisma.quarter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuarterDeleteManyArgs>(args?: SelectSubset<T, QuarterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quarters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quarters
     * const quarter = await prisma.quarter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuarterUpdateManyArgs>(args: SelectSubset<T, QuarterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quarters and returns the data updated in the database.
     * @param {QuarterUpdateManyAndReturnArgs} args - Arguments to update many Quarters.
     * @example
     * // Update many Quarters
     * const quarter = await prisma.quarter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quarters and only return the `id`
     * const quarterWithIdOnly = await prisma.quarter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuarterUpdateManyAndReturnArgs>(args: SelectSubset<T, QuarterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quarter.
     * @param {QuarterUpsertArgs} args - Arguments to update or create a Quarter.
     * @example
     * // Update or create a Quarter
     * const quarter = await prisma.quarter.upsert({
     *   create: {
     *     // ... data to create a Quarter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quarter we want to update
     *   }
     * })
     */
    upsert<T extends QuarterUpsertArgs>(args: SelectSubset<T, QuarterUpsertArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quarters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterCountArgs} args - Arguments to filter Quarters to count.
     * @example
     * // Count the number of Quarters
     * const count = await prisma.quarter.count({
     *   where: {
     *     // ... the filter for the Quarters we want to count
     *   }
     * })
    **/
    count<T extends QuarterCountArgs>(
      args?: Subset<T, QuarterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuarterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quarter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuarterAggregateArgs>(args: Subset<T, QuarterAggregateArgs>): Prisma.PrismaPromise<GetQuarterAggregateType<T>>

    /**
     * Group by Quarter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuarterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuarterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuarterGroupByArgs['orderBy'] }
        : { orderBy?: QuarterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuarterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuarterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quarter model
   */
  readonly fields: QuarterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quarter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuarterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainings<T extends Quarter$trainingsArgs<ExtArgs> = {}>(args?: Subset<T, Quarter$trainingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flds<T extends Quarter$fldsArgs<ExtArgs> = {}>(args?: Subset<T, Quarter$fldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awarenessPrograms<T extends Quarter$awarenessProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Quarter$awarenessProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inputDistributions<T extends Quarter$inputDistributionsArgs<ExtArgs> = {}>(args?: Subset<T, Quarter$inputDistributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    infrastructureDevelopments<T extends Quarter$infrastructureDevelopmentsArgs<ExtArgs> = {}>(args?: Subset<T, Quarter$infrastructureDevelopmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quarter model
   */
  interface QuarterFieldRefs {
    readonly id: FieldRef<"Quarter", 'String'>
    readonly number: FieldRef<"Quarter", 'Int'>
    readonly year: FieldRef<"Quarter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quarter findUnique
   */
  export type QuarterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * Filter, which Quarter to fetch.
     */
    where: QuarterWhereUniqueInput
  }

  /**
   * Quarter findUniqueOrThrow
   */
  export type QuarterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * Filter, which Quarter to fetch.
     */
    where: QuarterWhereUniqueInput
  }

  /**
   * Quarter findFirst
   */
  export type QuarterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * Filter, which Quarter to fetch.
     */
    where?: QuarterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quarters to fetch.
     */
    orderBy?: QuarterOrderByWithRelationInput | QuarterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quarters.
     */
    cursor?: QuarterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quarters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quarters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quarters.
     */
    distinct?: QuarterScalarFieldEnum | QuarterScalarFieldEnum[]
  }

  /**
   * Quarter findFirstOrThrow
   */
  export type QuarterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * Filter, which Quarter to fetch.
     */
    where?: QuarterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quarters to fetch.
     */
    orderBy?: QuarterOrderByWithRelationInput | QuarterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quarters.
     */
    cursor?: QuarterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quarters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quarters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quarters.
     */
    distinct?: QuarterScalarFieldEnum | QuarterScalarFieldEnum[]
  }

  /**
   * Quarter findMany
   */
  export type QuarterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * Filter, which Quarters to fetch.
     */
    where?: QuarterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quarters to fetch.
     */
    orderBy?: QuarterOrderByWithRelationInput | QuarterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quarters.
     */
    cursor?: QuarterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quarters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quarters.
     */
    skip?: number
    distinct?: QuarterScalarFieldEnum | QuarterScalarFieldEnum[]
  }

  /**
   * Quarter create
   */
  export type QuarterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * The data needed to create a Quarter.
     */
    data: XOR<QuarterCreateInput, QuarterUncheckedCreateInput>
  }

  /**
   * Quarter createMany
   */
  export type QuarterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quarters.
     */
    data: QuarterCreateManyInput | QuarterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quarter createManyAndReturn
   */
  export type QuarterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * The data used to create many Quarters.
     */
    data: QuarterCreateManyInput | QuarterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quarter update
   */
  export type QuarterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * The data needed to update a Quarter.
     */
    data: XOR<QuarterUpdateInput, QuarterUncheckedUpdateInput>
    /**
     * Choose, which Quarter to update.
     */
    where: QuarterWhereUniqueInput
  }

  /**
   * Quarter updateMany
   */
  export type QuarterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quarters.
     */
    data: XOR<QuarterUpdateManyMutationInput, QuarterUncheckedUpdateManyInput>
    /**
     * Filter which Quarters to update
     */
    where?: QuarterWhereInput
    /**
     * Limit how many Quarters to update.
     */
    limit?: number
  }

  /**
   * Quarter updateManyAndReturn
   */
  export type QuarterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * The data used to update Quarters.
     */
    data: XOR<QuarterUpdateManyMutationInput, QuarterUncheckedUpdateManyInput>
    /**
     * Filter which Quarters to update
     */
    where?: QuarterWhereInput
    /**
     * Limit how many Quarters to update.
     */
    limit?: number
  }

  /**
   * Quarter upsert
   */
  export type QuarterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * The filter to search for the Quarter to update in case it exists.
     */
    where: QuarterWhereUniqueInput
    /**
     * In case the Quarter found by the `where` argument doesn't exist, create a new Quarter with this data.
     */
    create: XOR<QuarterCreateInput, QuarterUncheckedCreateInput>
    /**
     * In case the Quarter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuarterUpdateInput, QuarterUncheckedUpdateInput>
  }

  /**
   * Quarter delete
   */
  export type QuarterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
    /**
     * Filter which Quarter to delete.
     */
    where: QuarterWhereUniqueInput
  }

  /**
   * Quarter deleteMany
   */
  export type QuarterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quarters to delete
     */
    where?: QuarterWhereInput
    /**
     * Limit how many Quarters to delete.
     */
    limit?: number
  }

  /**
   * Quarter.trainings
   */
  export type Quarter$trainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    where?: TrainingWhereInput
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    cursor?: TrainingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }

  /**
   * Quarter.flds
   */
  export type Quarter$fldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    where?: FLDWhereInput
    orderBy?: FLDOrderByWithRelationInput | FLDOrderByWithRelationInput[]
    cursor?: FLDWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FLDScalarFieldEnum | FLDScalarFieldEnum[]
  }

  /**
   * Quarter.awarenessPrograms
   */
  export type Quarter$awarenessProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    where?: AwarenessProgramWhereInput
    orderBy?: AwarenessProgramOrderByWithRelationInput | AwarenessProgramOrderByWithRelationInput[]
    cursor?: AwarenessProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwarenessProgramScalarFieldEnum | AwarenessProgramScalarFieldEnum[]
  }

  /**
   * Quarter.inputDistributions
   */
  export type Quarter$inputDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    where?: InputDistributionWhereInput
    orderBy?: InputDistributionOrderByWithRelationInput | InputDistributionOrderByWithRelationInput[]
    cursor?: InputDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InputDistributionScalarFieldEnum | InputDistributionScalarFieldEnum[]
  }

  /**
   * Quarter.infrastructureDevelopments
   */
  export type Quarter$infrastructureDevelopmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    where?: InfrastructureDevelopmentWhereInput
    orderBy?: InfrastructureDevelopmentOrderByWithRelationInput | InfrastructureDevelopmentOrderByWithRelationInput[]
    cursor?: InfrastructureDevelopmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InfrastructureDevelopmentScalarFieldEnum | InfrastructureDevelopmentScalarFieldEnum[]
  }

  /**
   * Quarter without action
   */
  export type QuarterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarter
     */
    select?: QuarterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarter
     */
    omit?: QuarterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuarterInclude<ExtArgs> | null
  }


  /**
   * Model InputDistribution
   */

  export type AggregateInputDistribution = {
    _count: InputDistributionCountAggregateOutputType | null
    _min: InputDistributionMinAggregateOutputType | null
    _max: InputDistributionMaxAggregateOutputType | null
  }

  export type InputDistributionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InputDistributionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InputDistributionCountAggregateOutputType = {
    id: number
    projectId: number
    quarterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InputDistributionMinAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InputDistributionMaxAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InputDistributionCountAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InputDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputDistribution to aggregate.
     */
    where?: InputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputDistributions to fetch.
     */
    orderBy?: InputDistributionOrderByWithRelationInput | InputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InputDistributions
    **/
    _count?: true | InputDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InputDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InputDistributionMaxAggregateInputType
  }

  export type GetInputDistributionAggregateType<T extends InputDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateInputDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInputDistribution[P]>
      : GetScalarType<T[P], AggregateInputDistribution[P]>
  }




  export type InputDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputDistributionWhereInput
    orderBy?: InputDistributionOrderByWithAggregationInput | InputDistributionOrderByWithAggregationInput[]
    by: InputDistributionScalarFieldEnum[] | InputDistributionScalarFieldEnum
    having?: InputDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InputDistributionCountAggregateInputType | true
    _min?: InputDistributionMinAggregateInputType
    _max?: InputDistributionMaxAggregateInputType
  }

  export type InputDistributionGroupByOutputType = {
    id: string
    projectId: string
    quarterId: string
    createdAt: Date
    updatedAt: Date
    _count: InputDistributionCountAggregateOutputType | null
    _min: InputDistributionMinAggregateOutputType | null
    _max: InputDistributionMaxAggregateOutputType | null
  }

  type GetInputDistributionGroupByPayload<T extends InputDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InputDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InputDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InputDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], InputDistributionGroupByOutputType[P]>
        }
      >
    >


  export type InputDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
    predefinedItems?: boolean | InputDistribution$predefinedItemsArgs<ExtArgs>
    customItems?: boolean | InputDistribution$customItemsArgs<ExtArgs>
    _count?: boolean | InputDistributionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inputDistribution"]>

  export type InputDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inputDistribution"]>

  export type InputDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inputDistribution"]>

  export type InputDistributionSelectScalar = {
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InputDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "quarterId" | "createdAt" | "updatedAt", ExtArgs["result"]["inputDistribution"]>
  export type InputDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
    predefinedItems?: boolean | InputDistribution$predefinedItemsArgs<ExtArgs>
    customItems?: boolean | InputDistribution$customItemsArgs<ExtArgs>
    _count?: boolean | InputDistributionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InputDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type InputDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }

  export type $InputDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InputDistribution"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      quarter: Prisma.$QuarterPayload<ExtArgs>
      predefinedItems: Prisma.$PredefinedInputDistributionPayload<ExtArgs>[]
      customItems: Prisma.$CustomInputDistributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      quarterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inputDistribution"]>
    composites: {}
  }

  type InputDistributionGetPayload<S extends boolean | null | undefined | InputDistributionDefaultArgs> = $Result.GetResult<Prisma.$InputDistributionPayload, S>

  type InputDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InputDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InputDistributionCountAggregateInputType | true
    }

  export interface InputDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InputDistribution'], meta: { name: 'InputDistribution' } }
    /**
     * Find zero or one InputDistribution that matches the filter.
     * @param {InputDistributionFindUniqueArgs} args - Arguments to find a InputDistribution
     * @example
     * // Get one InputDistribution
     * const inputDistribution = await prisma.inputDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InputDistributionFindUniqueArgs>(args: SelectSubset<T, InputDistributionFindUniqueArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InputDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InputDistributionFindUniqueOrThrowArgs} args - Arguments to find a InputDistribution
     * @example
     * // Get one InputDistribution
     * const inputDistribution = await prisma.inputDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InputDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, InputDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InputDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionFindFirstArgs} args - Arguments to find a InputDistribution
     * @example
     * // Get one InputDistribution
     * const inputDistribution = await prisma.inputDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InputDistributionFindFirstArgs>(args?: SelectSubset<T, InputDistributionFindFirstArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InputDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionFindFirstOrThrowArgs} args - Arguments to find a InputDistribution
     * @example
     * // Get one InputDistribution
     * const inputDistribution = await prisma.inputDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InputDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, InputDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InputDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InputDistributions
     * const inputDistributions = await prisma.inputDistribution.findMany()
     * 
     * // Get first 10 InputDistributions
     * const inputDistributions = await prisma.inputDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inputDistributionWithIdOnly = await prisma.inputDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InputDistributionFindManyArgs>(args?: SelectSubset<T, InputDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InputDistribution.
     * @param {InputDistributionCreateArgs} args - Arguments to create a InputDistribution.
     * @example
     * // Create one InputDistribution
     * const InputDistribution = await prisma.inputDistribution.create({
     *   data: {
     *     // ... data to create a InputDistribution
     *   }
     * })
     * 
     */
    create<T extends InputDistributionCreateArgs>(args: SelectSubset<T, InputDistributionCreateArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InputDistributions.
     * @param {InputDistributionCreateManyArgs} args - Arguments to create many InputDistributions.
     * @example
     * // Create many InputDistributions
     * const inputDistribution = await prisma.inputDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InputDistributionCreateManyArgs>(args?: SelectSubset<T, InputDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InputDistributions and returns the data saved in the database.
     * @param {InputDistributionCreateManyAndReturnArgs} args - Arguments to create many InputDistributions.
     * @example
     * // Create many InputDistributions
     * const inputDistribution = await prisma.inputDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InputDistributions and only return the `id`
     * const inputDistributionWithIdOnly = await prisma.inputDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InputDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, InputDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InputDistribution.
     * @param {InputDistributionDeleteArgs} args - Arguments to delete one InputDistribution.
     * @example
     * // Delete one InputDistribution
     * const InputDistribution = await prisma.inputDistribution.delete({
     *   where: {
     *     // ... filter to delete one InputDistribution
     *   }
     * })
     * 
     */
    delete<T extends InputDistributionDeleteArgs>(args: SelectSubset<T, InputDistributionDeleteArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InputDistribution.
     * @param {InputDistributionUpdateArgs} args - Arguments to update one InputDistribution.
     * @example
     * // Update one InputDistribution
     * const inputDistribution = await prisma.inputDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InputDistributionUpdateArgs>(args: SelectSubset<T, InputDistributionUpdateArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InputDistributions.
     * @param {InputDistributionDeleteManyArgs} args - Arguments to filter InputDistributions to delete.
     * @example
     * // Delete a few InputDistributions
     * const { count } = await prisma.inputDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InputDistributionDeleteManyArgs>(args?: SelectSubset<T, InputDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InputDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InputDistributions
     * const inputDistribution = await prisma.inputDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InputDistributionUpdateManyArgs>(args: SelectSubset<T, InputDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InputDistributions and returns the data updated in the database.
     * @param {InputDistributionUpdateManyAndReturnArgs} args - Arguments to update many InputDistributions.
     * @example
     * // Update many InputDistributions
     * const inputDistribution = await prisma.inputDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InputDistributions and only return the `id`
     * const inputDistributionWithIdOnly = await prisma.inputDistribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InputDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, InputDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InputDistribution.
     * @param {InputDistributionUpsertArgs} args - Arguments to update or create a InputDistribution.
     * @example
     * // Update or create a InputDistribution
     * const inputDistribution = await prisma.inputDistribution.upsert({
     *   create: {
     *     // ... data to create a InputDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InputDistribution we want to update
     *   }
     * })
     */
    upsert<T extends InputDistributionUpsertArgs>(args: SelectSubset<T, InputDistributionUpsertArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InputDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionCountArgs} args - Arguments to filter InputDistributions to count.
     * @example
     * // Count the number of InputDistributions
     * const count = await prisma.inputDistribution.count({
     *   where: {
     *     // ... the filter for the InputDistributions we want to count
     *   }
     * })
    **/
    count<T extends InputDistributionCountArgs>(
      args?: Subset<T, InputDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InputDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InputDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InputDistributionAggregateArgs>(args: Subset<T, InputDistributionAggregateArgs>): Prisma.PrismaPromise<GetInputDistributionAggregateType<T>>

    /**
     * Group by InputDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputDistributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InputDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InputDistributionGroupByArgs['orderBy'] }
        : { orderBy?: InputDistributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InputDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInputDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InputDistribution model
   */
  readonly fields: InputDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InputDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InputDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarter<T extends QuarterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuarterDefaultArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    predefinedItems<T extends InputDistribution$predefinedItemsArgs<ExtArgs> = {}>(args?: Subset<T, InputDistribution$predefinedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customItems<T extends InputDistribution$customItemsArgs<ExtArgs> = {}>(args?: Subset<T, InputDistribution$customItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InputDistribution model
   */
  interface InputDistributionFieldRefs {
    readonly id: FieldRef<"InputDistribution", 'String'>
    readonly projectId: FieldRef<"InputDistribution", 'String'>
    readonly quarterId: FieldRef<"InputDistribution", 'String'>
    readonly createdAt: FieldRef<"InputDistribution", 'DateTime'>
    readonly updatedAt: FieldRef<"InputDistribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InputDistribution findUnique
   */
  export type InputDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which InputDistribution to fetch.
     */
    where: InputDistributionWhereUniqueInput
  }

  /**
   * InputDistribution findUniqueOrThrow
   */
  export type InputDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which InputDistribution to fetch.
     */
    where: InputDistributionWhereUniqueInput
  }

  /**
   * InputDistribution findFirst
   */
  export type InputDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which InputDistribution to fetch.
     */
    where?: InputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputDistributions to fetch.
     */
    orderBy?: InputDistributionOrderByWithRelationInput | InputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputDistributions.
     */
    cursor?: InputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputDistributions.
     */
    distinct?: InputDistributionScalarFieldEnum | InputDistributionScalarFieldEnum[]
  }

  /**
   * InputDistribution findFirstOrThrow
   */
  export type InputDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which InputDistribution to fetch.
     */
    where?: InputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputDistributions to fetch.
     */
    orderBy?: InputDistributionOrderByWithRelationInput | InputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputDistributions.
     */
    cursor?: InputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputDistributions.
     */
    distinct?: InputDistributionScalarFieldEnum | InputDistributionScalarFieldEnum[]
  }

  /**
   * InputDistribution findMany
   */
  export type InputDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which InputDistributions to fetch.
     */
    where?: InputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputDistributions to fetch.
     */
    orderBy?: InputDistributionOrderByWithRelationInput | InputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InputDistributions.
     */
    cursor?: InputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputDistributions.
     */
    skip?: number
    distinct?: InputDistributionScalarFieldEnum | InputDistributionScalarFieldEnum[]
  }

  /**
   * InputDistribution create
   */
  export type InputDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a InputDistribution.
     */
    data: XOR<InputDistributionCreateInput, InputDistributionUncheckedCreateInput>
  }

  /**
   * InputDistribution createMany
   */
  export type InputDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InputDistributions.
     */
    data: InputDistributionCreateManyInput | InputDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InputDistribution createManyAndReturn
   */
  export type InputDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many InputDistributions.
     */
    data: InputDistributionCreateManyInput | InputDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InputDistribution update
   */
  export type InputDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a InputDistribution.
     */
    data: XOR<InputDistributionUpdateInput, InputDistributionUncheckedUpdateInput>
    /**
     * Choose, which InputDistribution to update.
     */
    where: InputDistributionWhereUniqueInput
  }

  /**
   * InputDistribution updateMany
   */
  export type InputDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InputDistributions.
     */
    data: XOR<InputDistributionUpdateManyMutationInput, InputDistributionUncheckedUpdateManyInput>
    /**
     * Filter which InputDistributions to update
     */
    where?: InputDistributionWhereInput
    /**
     * Limit how many InputDistributions to update.
     */
    limit?: number
  }

  /**
   * InputDistribution updateManyAndReturn
   */
  export type InputDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * The data used to update InputDistributions.
     */
    data: XOR<InputDistributionUpdateManyMutationInput, InputDistributionUncheckedUpdateManyInput>
    /**
     * Filter which InputDistributions to update
     */
    where?: InputDistributionWhereInput
    /**
     * Limit how many InputDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InputDistribution upsert
   */
  export type InputDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the InputDistribution to update in case it exists.
     */
    where: InputDistributionWhereUniqueInput
    /**
     * In case the InputDistribution found by the `where` argument doesn't exist, create a new InputDistribution with this data.
     */
    create: XOR<InputDistributionCreateInput, InputDistributionUncheckedCreateInput>
    /**
     * In case the InputDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InputDistributionUpdateInput, InputDistributionUncheckedUpdateInput>
  }

  /**
   * InputDistribution delete
   */
  export type InputDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
    /**
     * Filter which InputDistribution to delete.
     */
    where: InputDistributionWhereUniqueInput
  }

  /**
   * InputDistribution deleteMany
   */
  export type InputDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputDistributions to delete
     */
    where?: InputDistributionWhereInput
    /**
     * Limit how many InputDistributions to delete.
     */
    limit?: number
  }

  /**
   * InputDistribution.predefinedItems
   */
  export type InputDistribution$predefinedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    where?: PredefinedInputDistributionWhereInput
    orderBy?: PredefinedInputDistributionOrderByWithRelationInput | PredefinedInputDistributionOrderByWithRelationInput[]
    cursor?: PredefinedInputDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredefinedInputDistributionScalarFieldEnum | PredefinedInputDistributionScalarFieldEnum[]
  }

  /**
   * InputDistribution.customItems
   */
  export type InputDistribution$customItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    where?: CustomInputDistributionWhereInput
    orderBy?: CustomInputDistributionOrderByWithRelationInput | CustomInputDistributionOrderByWithRelationInput[]
    cursor?: CustomInputDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomInputDistributionScalarFieldEnum | CustomInputDistributionScalarFieldEnum[]
  }

  /**
   * InputDistribution without action
   */
  export type InputDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputDistribution
     */
    select?: InputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InputDistribution
     */
    omit?: InputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputDistributionInclude<ExtArgs> | null
  }


  /**
   * Model PredefinedInputDistribution
   */

  export type AggregatePredefinedInputDistribution = {
    _count: PredefinedInputDistributionCountAggregateOutputType | null
    _avg: PredefinedInputDistributionAvgAggregateOutputType | null
    _sum: PredefinedInputDistributionSumAggregateOutputType | null
    _min: PredefinedInputDistributionMinAggregateOutputType | null
    _max: PredefinedInputDistributionMaxAggregateOutputType | null
  }

  export type PredefinedInputDistributionAvgAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type PredefinedInputDistributionSumAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type PredefinedInputDistributionMinAggregateOutputType = {
    id: string | null
    inputDistributionId: string | null
    activityType: string | null
    name: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    remarks: string | null
    units: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredefinedInputDistributionMaxAggregateOutputType = {
    id: string | null
    inputDistributionId: string | null
    activityType: string | null
    name: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    remarks: string | null
    units: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredefinedInputDistributionCountAggregateOutputType = {
    id: number
    inputDistributionId: number
    activityType: number
    name: number
    target: number
    achieved: number
    district: number
    village: number
    block: number
    remarks: number
    units: number
    imageUrl: number
    imageKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredefinedInputDistributionAvgAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type PredefinedInputDistributionSumAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type PredefinedInputDistributionMinAggregateInputType = {
    id?: true
    inputDistributionId?: true
    activityType?: true
    name?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    units?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredefinedInputDistributionMaxAggregateInputType = {
    id?: true
    inputDistributionId?: true
    activityType?: true
    name?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    units?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredefinedInputDistributionCountAggregateInputType = {
    id?: true
    inputDistributionId?: true
    activityType?: true
    name?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    units?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredefinedInputDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredefinedInputDistribution to aggregate.
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedInputDistributions to fetch.
     */
    orderBy?: PredefinedInputDistributionOrderByWithRelationInput | PredefinedInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredefinedInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedInputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PredefinedInputDistributions
    **/
    _count?: true | PredefinedInputDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredefinedInputDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredefinedInputDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredefinedInputDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredefinedInputDistributionMaxAggregateInputType
  }

  export type GetPredefinedInputDistributionAggregateType<T extends PredefinedInputDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregatePredefinedInputDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredefinedInputDistribution[P]>
      : GetScalarType<T[P], AggregatePredefinedInputDistribution[P]>
  }




  export type PredefinedInputDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredefinedInputDistributionWhereInput
    orderBy?: PredefinedInputDistributionOrderByWithAggregationInput | PredefinedInputDistributionOrderByWithAggregationInput[]
    by: PredefinedInputDistributionScalarFieldEnum[] | PredefinedInputDistributionScalarFieldEnum
    having?: PredefinedInputDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredefinedInputDistributionCountAggregateInputType | true
    _avg?: PredefinedInputDistributionAvgAggregateInputType
    _sum?: PredefinedInputDistributionSumAggregateInputType
    _min?: PredefinedInputDistributionMinAggregateInputType
    _max?: PredefinedInputDistributionMaxAggregateInputType
  }

  export type PredefinedInputDistributionGroupByOutputType = {
    id: string
    inputDistributionId: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks: string | null
    units: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: PredefinedInputDistributionCountAggregateOutputType | null
    _avg: PredefinedInputDistributionAvgAggregateOutputType | null
    _sum: PredefinedInputDistributionSumAggregateOutputType | null
    _min: PredefinedInputDistributionMinAggregateOutputType | null
    _max: PredefinedInputDistributionMaxAggregateOutputType | null
  }

  type GetPredefinedInputDistributionGroupByPayload<T extends PredefinedInputDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredefinedInputDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredefinedInputDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredefinedInputDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], PredefinedInputDistributionGroupByOutputType[P]>
        }
      >
    >


  export type PredefinedInputDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedInputDistribution"]>

  export type PredefinedInputDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedInputDistribution"]>

  export type PredefinedInputDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedInputDistribution"]>

  export type PredefinedInputDistributionSelectScalar = {
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredefinedInputDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inputDistributionId" | "activityType" | "name" | "target" | "achieved" | "district" | "village" | "block" | "remarks" | "units" | "imageUrl" | "imageKey" | "createdAt" | "updatedAt", ExtArgs["result"]["predefinedInputDistribution"]>
  export type PredefinedInputDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }
  export type PredefinedInputDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }
  export type PredefinedInputDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }

  export type $PredefinedInputDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PredefinedInputDistribution"
    objects: {
      inputDistribution: Prisma.$InputDistributionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inputDistributionId: string
      activityType: string
      name: string
      target: number
      achieved: number
      district: string
      village: string
      block: string
      remarks: string | null
      units: string | null
      imageUrl: string | null
      imageKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["predefinedInputDistribution"]>
    composites: {}
  }

  type PredefinedInputDistributionGetPayload<S extends boolean | null | undefined | PredefinedInputDistributionDefaultArgs> = $Result.GetResult<Prisma.$PredefinedInputDistributionPayload, S>

  type PredefinedInputDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredefinedInputDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredefinedInputDistributionCountAggregateInputType | true
    }

  export interface PredefinedInputDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PredefinedInputDistribution'], meta: { name: 'PredefinedInputDistribution' } }
    /**
     * Find zero or one PredefinedInputDistribution that matches the filter.
     * @param {PredefinedInputDistributionFindUniqueArgs} args - Arguments to find a PredefinedInputDistribution
     * @example
     * // Get one PredefinedInputDistribution
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredefinedInputDistributionFindUniqueArgs>(args: SelectSubset<T, PredefinedInputDistributionFindUniqueArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PredefinedInputDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredefinedInputDistributionFindUniqueOrThrowArgs} args - Arguments to find a PredefinedInputDistribution
     * @example
     * // Get one PredefinedInputDistribution
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredefinedInputDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredefinedInputDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredefinedInputDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionFindFirstArgs} args - Arguments to find a PredefinedInputDistribution
     * @example
     * // Get one PredefinedInputDistribution
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredefinedInputDistributionFindFirstArgs>(args?: SelectSubset<T, PredefinedInputDistributionFindFirstArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredefinedInputDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionFindFirstOrThrowArgs} args - Arguments to find a PredefinedInputDistribution
     * @example
     * // Get one PredefinedInputDistribution
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredefinedInputDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredefinedInputDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PredefinedInputDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PredefinedInputDistributions
     * const predefinedInputDistributions = await prisma.predefinedInputDistribution.findMany()
     * 
     * // Get first 10 PredefinedInputDistributions
     * const predefinedInputDistributions = await prisma.predefinedInputDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predefinedInputDistributionWithIdOnly = await prisma.predefinedInputDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredefinedInputDistributionFindManyArgs>(args?: SelectSubset<T, PredefinedInputDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PredefinedInputDistribution.
     * @param {PredefinedInputDistributionCreateArgs} args - Arguments to create a PredefinedInputDistribution.
     * @example
     * // Create one PredefinedInputDistribution
     * const PredefinedInputDistribution = await prisma.predefinedInputDistribution.create({
     *   data: {
     *     // ... data to create a PredefinedInputDistribution
     *   }
     * })
     * 
     */
    create<T extends PredefinedInputDistributionCreateArgs>(args: SelectSubset<T, PredefinedInputDistributionCreateArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PredefinedInputDistributions.
     * @param {PredefinedInputDistributionCreateManyArgs} args - Arguments to create many PredefinedInputDistributions.
     * @example
     * // Create many PredefinedInputDistributions
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredefinedInputDistributionCreateManyArgs>(args?: SelectSubset<T, PredefinedInputDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PredefinedInputDistributions and returns the data saved in the database.
     * @param {PredefinedInputDistributionCreateManyAndReturnArgs} args - Arguments to create many PredefinedInputDistributions.
     * @example
     * // Create many PredefinedInputDistributions
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PredefinedInputDistributions and only return the `id`
     * const predefinedInputDistributionWithIdOnly = await prisma.predefinedInputDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredefinedInputDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, PredefinedInputDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PredefinedInputDistribution.
     * @param {PredefinedInputDistributionDeleteArgs} args - Arguments to delete one PredefinedInputDistribution.
     * @example
     * // Delete one PredefinedInputDistribution
     * const PredefinedInputDistribution = await prisma.predefinedInputDistribution.delete({
     *   where: {
     *     // ... filter to delete one PredefinedInputDistribution
     *   }
     * })
     * 
     */
    delete<T extends PredefinedInputDistributionDeleteArgs>(args: SelectSubset<T, PredefinedInputDistributionDeleteArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PredefinedInputDistribution.
     * @param {PredefinedInputDistributionUpdateArgs} args - Arguments to update one PredefinedInputDistribution.
     * @example
     * // Update one PredefinedInputDistribution
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredefinedInputDistributionUpdateArgs>(args: SelectSubset<T, PredefinedInputDistributionUpdateArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PredefinedInputDistributions.
     * @param {PredefinedInputDistributionDeleteManyArgs} args - Arguments to filter PredefinedInputDistributions to delete.
     * @example
     * // Delete a few PredefinedInputDistributions
     * const { count } = await prisma.predefinedInputDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredefinedInputDistributionDeleteManyArgs>(args?: SelectSubset<T, PredefinedInputDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredefinedInputDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PredefinedInputDistributions
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredefinedInputDistributionUpdateManyArgs>(args: SelectSubset<T, PredefinedInputDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredefinedInputDistributions and returns the data updated in the database.
     * @param {PredefinedInputDistributionUpdateManyAndReturnArgs} args - Arguments to update many PredefinedInputDistributions.
     * @example
     * // Update many PredefinedInputDistributions
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PredefinedInputDistributions and only return the `id`
     * const predefinedInputDistributionWithIdOnly = await prisma.predefinedInputDistribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PredefinedInputDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, PredefinedInputDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PredefinedInputDistribution.
     * @param {PredefinedInputDistributionUpsertArgs} args - Arguments to update or create a PredefinedInputDistribution.
     * @example
     * // Update or create a PredefinedInputDistribution
     * const predefinedInputDistribution = await prisma.predefinedInputDistribution.upsert({
     *   create: {
     *     // ... data to create a PredefinedInputDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PredefinedInputDistribution we want to update
     *   }
     * })
     */
    upsert<T extends PredefinedInputDistributionUpsertArgs>(args: SelectSubset<T, PredefinedInputDistributionUpsertArgs<ExtArgs>>): Prisma__PredefinedInputDistributionClient<$Result.GetResult<Prisma.$PredefinedInputDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PredefinedInputDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionCountArgs} args - Arguments to filter PredefinedInputDistributions to count.
     * @example
     * // Count the number of PredefinedInputDistributions
     * const count = await prisma.predefinedInputDistribution.count({
     *   where: {
     *     // ... the filter for the PredefinedInputDistributions we want to count
     *   }
     * })
    **/
    count<T extends PredefinedInputDistributionCountArgs>(
      args?: Subset<T, PredefinedInputDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredefinedInputDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PredefinedInputDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredefinedInputDistributionAggregateArgs>(args: Subset<T, PredefinedInputDistributionAggregateArgs>): Prisma.PrismaPromise<GetPredefinedInputDistributionAggregateType<T>>

    /**
     * Group by PredefinedInputDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedInputDistributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredefinedInputDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredefinedInputDistributionGroupByArgs['orderBy'] }
        : { orderBy?: PredefinedInputDistributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredefinedInputDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredefinedInputDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PredefinedInputDistribution model
   */
  readonly fields: PredefinedInputDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PredefinedInputDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredefinedInputDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inputDistribution<T extends InputDistributionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InputDistributionDefaultArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PredefinedInputDistribution model
   */
  interface PredefinedInputDistributionFieldRefs {
    readonly id: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly inputDistributionId: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly activityType: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly name: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly target: FieldRef<"PredefinedInputDistribution", 'Int'>
    readonly achieved: FieldRef<"PredefinedInputDistribution", 'Int'>
    readonly district: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly village: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly block: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly remarks: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly units: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly imageUrl: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly imageKey: FieldRef<"PredefinedInputDistribution", 'String'>
    readonly createdAt: FieldRef<"PredefinedInputDistribution", 'DateTime'>
    readonly updatedAt: FieldRef<"PredefinedInputDistribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PredefinedInputDistribution findUnique
   */
  export type PredefinedInputDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedInputDistribution to fetch.
     */
    where: PredefinedInputDistributionWhereUniqueInput
  }

  /**
   * PredefinedInputDistribution findUniqueOrThrow
   */
  export type PredefinedInputDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedInputDistribution to fetch.
     */
    where: PredefinedInputDistributionWhereUniqueInput
  }

  /**
   * PredefinedInputDistribution findFirst
   */
  export type PredefinedInputDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedInputDistribution to fetch.
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedInputDistributions to fetch.
     */
    orderBy?: PredefinedInputDistributionOrderByWithRelationInput | PredefinedInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredefinedInputDistributions.
     */
    cursor?: PredefinedInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedInputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredefinedInputDistributions.
     */
    distinct?: PredefinedInputDistributionScalarFieldEnum | PredefinedInputDistributionScalarFieldEnum[]
  }

  /**
   * PredefinedInputDistribution findFirstOrThrow
   */
  export type PredefinedInputDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedInputDistribution to fetch.
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedInputDistributions to fetch.
     */
    orderBy?: PredefinedInputDistributionOrderByWithRelationInput | PredefinedInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredefinedInputDistributions.
     */
    cursor?: PredefinedInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedInputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredefinedInputDistributions.
     */
    distinct?: PredefinedInputDistributionScalarFieldEnum | PredefinedInputDistributionScalarFieldEnum[]
  }

  /**
   * PredefinedInputDistribution findMany
   */
  export type PredefinedInputDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedInputDistributions to fetch.
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedInputDistributions to fetch.
     */
    orderBy?: PredefinedInputDistributionOrderByWithRelationInput | PredefinedInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PredefinedInputDistributions.
     */
    cursor?: PredefinedInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedInputDistributions.
     */
    skip?: number
    distinct?: PredefinedInputDistributionScalarFieldEnum | PredefinedInputDistributionScalarFieldEnum[]
  }

  /**
   * PredefinedInputDistribution create
   */
  export type PredefinedInputDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a PredefinedInputDistribution.
     */
    data: XOR<PredefinedInputDistributionCreateInput, PredefinedInputDistributionUncheckedCreateInput>
  }

  /**
   * PredefinedInputDistribution createMany
   */
  export type PredefinedInputDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PredefinedInputDistributions.
     */
    data: PredefinedInputDistributionCreateManyInput | PredefinedInputDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredefinedInputDistribution createManyAndReturn
   */
  export type PredefinedInputDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many PredefinedInputDistributions.
     */
    data: PredefinedInputDistributionCreateManyInput | PredefinedInputDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredefinedInputDistribution update
   */
  export type PredefinedInputDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a PredefinedInputDistribution.
     */
    data: XOR<PredefinedInputDistributionUpdateInput, PredefinedInputDistributionUncheckedUpdateInput>
    /**
     * Choose, which PredefinedInputDistribution to update.
     */
    where: PredefinedInputDistributionWhereUniqueInput
  }

  /**
   * PredefinedInputDistribution updateMany
   */
  export type PredefinedInputDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PredefinedInputDistributions.
     */
    data: XOR<PredefinedInputDistributionUpdateManyMutationInput, PredefinedInputDistributionUncheckedUpdateManyInput>
    /**
     * Filter which PredefinedInputDistributions to update
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * Limit how many PredefinedInputDistributions to update.
     */
    limit?: number
  }

  /**
   * PredefinedInputDistribution updateManyAndReturn
   */
  export type PredefinedInputDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * The data used to update PredefinedInputDistributions.
     */
    data: XOR<PredefinedInputDistributionUpdateManyMutationInput, PredefinedInputDistributionUncheckedUpdateManyInput>
    /**
     * Filter which PredefinedInputDistributions to update
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * Limit how many PredefinedInputDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredefinedInputDistribution upsert
   */
  export type PredefinedInputDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the PredefinedInputDistribution to update in case it exists.
     */
    where: PredefinedInputDistributionWhereUniqueInput
    /**
     * In case the PredefinedInputDistribution found by the `where` argument doesn't exist, create a new PredefinedInputDistribution with this data.
     */
    create: XOR<PredefinedInputDistributionCreateInput, PredefinedInputDistributionUncheckedCreateInput>
    /**
     * In case the PredefinedInputDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredefinedInputDistributionUpdateInput, PredefinedInputDistributionUncheckedUpdateInput>
  }

  /**
   * PredefinedInputDistribution delete
   */
  export type PredefinedInputDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
    /**
     * Filter which PredefinedInputDistribution to delete.
     */
    where: PredefinedInputDistributionWhereUniqueInput
  }

  /**
   * PredefinedInputDistribution deleteMany
   */
  export type PredefinedInputDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredefinedInputDistributions to delete
     */
    where?: PredefinedInputDistributionWhereInput
    /**
     * Limit how many PredefinedInputDistributions to delete.
     */
    limit?: number
  }

  /**
   * PredefinedInputDistribution without action
   */
  export type PredefinedInputDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedInputDistribution
     */
    select?: PredefinedInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedInputDistribution
     */
    omit?: PredefinedInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedInputDistributionInclude<ExtArgs> | null
  }


  /**
   * Model CustomInputDistribution
   */

  export type AggregateCustomInputDistribution = {
    _count: CustomInputDistributionCountAggregateOutputType | null
    _avg: CustomInputDistributionAvgAggregateOutputType | null
    _sum: CustomInputDistributionSumAggregateOutputType | null
    _min: CustomInputDistributionMinAggregateOutputType | null
    _max: CustomInputDistributionMaxAggregateOutputType | null
  }

  export type CustomInputDistributionAvgAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type CustomInputDistributionSumAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type CustomInputDistributionMinAggregateOutputType = {
    id: string | null
    inputDistributionId: string | null
    activityType: string | null
    name: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    remarks: string | null
    units: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomInputDistributionMaxAggregateOutputType = {
    id: string | null
    inputDistributionId: string | null
    activityType: string | null
    name: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    remarks: string | null
    units: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomInputDistributionCountAggregateOutputType = {
    id: number
    inputDistributionId: number
    activityType: number
    name: number
    target: number
    achieved: number
    district: number
    village: number
    block: number
    remarks: number
    units: number
    imageUrl: number
    imageKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomInputDistributionAvgAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type CustomInputDistributionSumAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type CustomInputDistributionMinAggregateInputType = {
    id?: true
    inputDistributionId?: true
    activityType?: true
    name?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    units?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomInputDistributionMaxAggregateInputType = {
    id?: true
    inputDistributionId?: true
    activityType?: true
    name?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    units?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomInputDistributionCountAggregateInputType = {
    id?: true
    inputDistributionId?: true
    activityType?: true
    name?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    units?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomInputDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomInputDistribution to aggregate.
     */
    where?: CustomInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInputDistributions to fetch.
     */
    orderBy?: CustomInputDistributionOrderByWithRelationInput | CustomInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomInputDistributions
    **/
    _count?: true | CustomInputDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomInputDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomInputDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomInputDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomInputDistributionMaxAggregateInputType
  }

  export type GetCustomInputDistributionAggregateType<T extends CustomInputDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomInputDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomInputDistribution[P]>
      : GetScalarType<T[P], AggregateCustomInputDistribution[P]>
  }




  export type CustomInputDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomInputDistributionWhereInput
    orderBy?: CustomInputDistributionOrderByWithAggregationInput | CustomInputDistributionOrderByWithAggregationInput[]
    by: CustomInputDistributionScalarFieldEnum[] | CustomInputDistributionScalarFieldEnum
    having?: CustomInputDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomInputDistributionCountAggregateInputType | true
    _avg?: CustomInputDistributionAvgAggregateInputType
    _sum?: CustomInputDistributionSumAggregateInputType
    _min?: CustomInputDistributionMinAggregateInputType
    _max?: CustomInputDistributionMaxAggregateInputType
  }

  export type CustomInputDistributionGroupByOutputType = {
    id: string
    inputDistributionId: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks: string | null
    units: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomInputDistributionCountAggregateOutputType | null
    _avg: CustomInputDistributionAvgAggregateOutputType | null
    _sum: CustomInputDistributionSumAggregateOutputType | null
    _min: CustomInputDistributionMinAggregateOutputType | null
    _max: CustomInputDistributionMaxAggregateOutputType | null
  }

  type GetCustomInputDistributionGroupByPayload<T extends CustomInputDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomInputDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomInputDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomInputDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], CustomInputDistributionGroupByOutputType[P]>
        }
      >
    >


  export type CustomInputDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customInputDistribution"]>

  export type CustomInputDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customInputDistribution"]>

  export type CustomInputDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customInputDistribution"]>

  export type CustomInputDistributionSelectScalar = {
    id?: boolean
    inputDistributionId?: boolean
    activityType?: boolean
    name?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    units?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomInputDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inputDistributionId" | "activityType" | "name" | "target" | "achieved" | "district" | "village" | "block" | "remarks" | "units" | "imageUrl" | "imageKey" | "createdAt" | "updatedAt", ExtArgs["result"]["customInputDistribution"]>
  export type CustomInputDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }
  export type CustomInputDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }
  export type CustomInputDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputDistribution?: boolean | InputDistributionDefaultArgs<ExtArgs>
  }

  export type $CustomInputDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomInputDistribution"
    objects: {
      inputDistribution: Prisma.$InputDistributionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inputDistributionId: string
      activityType: string
      name: string
      target: number
      achieved: number
      district: string
      village: string
      block: string
      remarks: string | null
      units: string | null
      imageUrl: string | null
      imageKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customInputDistribution"]>
    composites: {}
  }

  type CustomInputDistributionGetPayload<S extends boolean | null | undefined | CustomInputDistributionDefaultArgs> = $Result.GetResult<Prisma.$CustomInputDistributionPayload, S>

  type CustomInputDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomInputDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomInputDistributionCountAggregateInputType | true
    }

  export interface CustomInputDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomInputDistribution'], meta: { name: 'CustomInputDistribution' } }
    /**
     * Find zero or one CustomInputDistribution that matches the filter.
     * @param {CustomInputDistributionFindUniqueArgs} args - Arguments to find a CustomInputDistribution
     * @example
     * // Get one CustomInputDistribution
     * const customInputDistribution = await prisma.customInputDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomInputDistributionFindUniqueArgs>(args: SelectSubset<T, CustomInputDistributionFindUniqueArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomInputDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomInputDistributionFindUniqueOrThrowArgs} args - Arguments to find a CustomInputDistribution
     * @example
     * // Get one CustomInputDistribution
     * const customInputDistribution = await prisma.customInputDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomInputDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomInputDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomInputDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionFindFirstArgs} args - Arguments to find a CustomInputDistribution
     * @example
     * // Get one CustomInputDistribution
     * const customInputDistribution = await prisma.customInputDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomInputDistributionFindFirstArgs>(args?: SelectSubset<T, CustomInputDistributionFindFirstArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomInputDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionFindFirstOrThrowArgs} args - Arguments to find a CustomInputDistribution
     * @example
     * // Get one CustomInputDistribution
     * const customInputDistribution = await prisma.customInputDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomInputDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomInputDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomInputDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomInputDistributions
     * const customInputDistributions = await prisma.customInputDistribution.findMany()
     * 
     * // Get first 10 CustomInputDistributions
     * const customInputDistributions = await prisma.customInputDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customInputDistributionWithIdOnly = await prisma.customInputDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomInputDistributionFindManyArgs>(args?: SelectSubset<T, CustomInputDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomInputDistribution.
     * @param {CustomInputDistributionCreateArgs} args - Arguments to create a CustomInputDistribution.
     * @example
     * // Create one CustomInputDistribution
     * const CustomInputDistribution = await prisma.customInputDistribution.create({
     *   data: {
     *     // ... data to create a CustomInputDistribution
     *   }
     * })
     * 
     */
    create<T extends CustomInputDistributionCreateArgs>(args: SelectSubset<T, CustomInputDistributionCreateArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomInputDistributions.
     * @param {CustomInputDistributionCreateManyArgs} args - Arguments to create many CustomInputDistributions.
     * @example
     * // Create many CustomInputDistributions
     * const customInputDistribution = await prisma.customInputDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomInputDistributionCreateManyArgs>(args?: SelectSubset<T, CustomInputDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomInputDistributions and returns the data saved in the database.
     * @param {CustomInputDistributionCreateManyAndReturnArgs} args - Arguments to create many CustomInputDistributions.
     * @example
     * // Create many CustomInputDistributions
     * const customInputDistribution = await prisma.customInputDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomInputDistributions and only return the `id`
     * const customInputDistributionWithIdOnly = await prisma.customInputDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomInputDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomInputDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomInputDistribution.
     * @param {CustomInputDistributionDeleteArgs} args - Arguments to delete one CustomInputDistribution.
     * @example
     * // Delete one CustomInputDistribution
     * const CustomInputDistribution = await prisma.customInputDistribution.delete({
     *   where: {
     *     // ... filter to delete one CustomInputDistribution
     *   }
     * })
     * 
     */
    delete<T extends CustomInputDistributionDeleteArgs>(args: SelectSubset<T, CustomInputDistributionDeleteArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomInputDistribution.
     * @param {CustomInputDistributionUpdateArgs} args - Arguments to update one CustomInputDistribution.
     * @example
     * // Update one CustomInputDistribution
     * const customInputDistribution = await prisma.customInputDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomInputDistributionUpdateArgs>(args: SelectSubset<T, CustomInputDistributionUpdateArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomInputDistributions.
     * @param {CustomInputDistributionDeleteManyArgs} args - Arguments to filter CustomInputDistributions to delete.
     * @example
     * // Delete a few CustomInputDistributions
     * const { count } = await prisma.customInputDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomInputDistributionDeleteManyArgs>(args?: SelectSubset<T, CustomInputDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomInputDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomInputDistributions
     * const customInputDistribution = await prisma.customInputDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomInputDistributionUpdateManyArgs>(args: SelectSubset<T, CustomInputDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomInputDistributions and returns the data updated in the database.
     * @param {CustomInputDistributionUpdateManyAndReturnArgs} args - Arguments to update many CustomInputDistributions.
     * @example
     * // Update many CustomInputDistributions
     * const customInputDistribution = await prisma.customInputDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomInputDistributions and only return the `id`
     * const customInputDistributionWithIdOnly = await prisma.customInputDistribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomInputDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomInputDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomInputDistribution.
     * @param {CustomInputDistributionUpsertArgs} args - Arguments to update or create a CustomInputDistribution.
     * @example
     * // Update or create a CustomInputDistribution
     * const customInputDistribution = await prisma.customInputDistribution.upsert({
     *   create: {
     *     // ... data to create a CustomInputDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomInputDistribution we want to update
     *   }
     * })
     */
    upsert<T extends CustomInputDistributionUpsertArgs>(args: SelectSubset<T, CustomInputDistributionUpsertArgs<ExtArgs>>): Prisma__CustomInputDistributionClient<$Result.GetResult<Prisma.$CustomInputDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomInputDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionCountArgs} args - Arguments to filter CustomInputDistributions to count.
     * @example
     * // Count the number of CustomInputDistributions
     * const count = await prisma.customInputDistribution.count({
     *   where: {
     *     // ... the filter for the CustomInputDistributions we want to count
     *   }
     * })
    **/
    count<T extends CustomInputDistributionCountArgs>(
      args?: Subset<T, CustomInputDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomInputDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomInputDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomInputDistributionAggregateArgs>(args: Subset<T, CustomInputDistributionAggregateArgs>): Prisma.PrismaPromise<GetCustomInputDistributionAggregateType<T>>

    /**
     * Group by CustomInputDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomInputDistributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomInputDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomInputDistributionGroupByArgs['orderBy'] }
        : { orderBy?: CustomInputDistributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomInputDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomInputDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomInputDistribution model
   */
  readonly fields: CustomInputDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomInputDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomInputDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inputDistribution<T extends InputDistributionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InputDistributionDefaultArgs<ExtArgs>>): Prisma__InputDistributionClient<$Result.GetResult<Prisma.$InputDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomInputDistribution model
   */
  interface CustomInputDistributionFieldRefs {
    readonly id: FieldRef<"CustomInputDistribution", 'String'>
    readonly inputDistributionId: FieldRef<"CustomInputDistribution", 'String'>
    readonly activityType: FieldRef<"CustomInputDistribution", 'String'>
    readonly name: FieldRef<"CustomInputDistribution", 'String'>
    readonly target: FieldRef<"CustomInputDistribution", 'Int'>
    readonly achieved: FieldRef<"CustomInputDistribution", 'Int'>
    readonly district: FieldRef<"CustomInputDistribution", 'String'>
    readonly village: FieldRef<"CustomInputDistribution", 'String'>
    readonly block: FieldRef<"CustomInputDistribution", 'String'>
    readonly remarks: FieldRef<"CustomInputDistribution", 'String'>
    readonly units: FieldRef<"CustomInputDistribution", 'String'>
    readonly imageUrl: FieldRef<"CustomInputDistribution", 'String'>
    readonly imageKey: FieldRef<"CustomInputDistribution", 'String'>
    readonly createdAt: FieldRef<"CustomInputDistribution", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomInputDistribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomInputDistribution findUnique
   */
  export type CustomInputDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CustomInputDistribution to fetch.
     */
    where: CustomInputDistributionWhereUniqueInput
  }

  /**
   * CustomInputDistribution findUniqueOrThrow
   */
  export type CustomInputDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CustomInputDistribution to fetch.
     */
    where: CustomInputDistributionWhereUniqueInput
  }

  /**
   * CustomInputDistribution findFirst
   */
  export type CustomInputDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CustomInputDistribution to fetch.
     */
    where?: CustomInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInputDistributions to fetch.
     */
    orderBy?: CustomInputDistributionOrderByWithRelationInput | CustomInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomInputDistributions.
     */
    cursor?: CustomInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomInputDistributions.
     */
    distinct?: CustomInputDistributionScalarFieldEnum | CustomInputDistributionScalarFieldEnum[]
  }

  /**
   * CustomInputDistribution findFirstOrThrow
   */
  export type CustomInputDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CustomInputDistribution to fetch.
     */
    where?: CustomInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInputDistributions to fetch.
     */
    orderBy?: CustomInputDistributionOrderByWithRelationInput | CustomInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomInputDistributions.
     */
    cursor?: CustomInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInputDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomInputDistributions.
     */
    distinct?: CustomInputDistributionScalarFieldEnum | CustomInputDistributionScalarFieldEnum[]
  }

  /**
   * CustomInputDistribution findMany
   */
  export type CustomInputDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CustomInputDistributions to fetch.
     */
    where?: CustomInputDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomInputDistributions to fetch.
     */
    orderBy?: CustomInputDistributionOrderByWithRelationInput | CustomInputDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomInputDistributions.
     */
    cursor?: CustomInputDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomInputDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomInputDistributions.
     */
    skip?: number
    distinct?: CustomInputDistributionScalarFieldEnum | CustomInputDistributionScalarFieldEnum[]
  }

  /**
   * CustomInputDistribution create
   */
  export type CustomInputDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomInputDistribution.
     */
    data: XOR<CustomInputDistributionCreateInput, CustomInputDistributionUncheckedCreateInput>
  }

  /**
   * CustomInputDistribution createMany
   */
  export type CustomInputDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomInputDistributions.
     */
    data: CustomInputDistributionCreateManyInput | CustomInputDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomInputDistribution createManyAndReturn
   */
  export type CustomInputDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many CustomInputDistributions.
     */
    data: CustomInputDistributionCreateManyInput | CustomInputDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomInputDistribution update
   */
  export type CustomInputDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomInputDistribution.
     */
    data: XOR<CustomInputDistributionUpdateInput, CustomInputDistributionUncheckedUpdateInput>
    /**
     * Choose, which CustomInputDistribution to update.
     */
    where: CustomInputDistributionWhereUniqueInput
  }

  /**
   * CustomInputDistribution updateMany
   */
  export type CustomInputDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomInputDistributions.
     */
    data: XOR<CustomInputDistributionUpdateManyMutationInput, CustomInputDistributionUncheckedUpdateManyInput>
    /**
     * Filter which CustomInputDistributions to update
     */
    where?: CustomInputDistributionWhereInput
    /**
     * Limit how many CustomInputDistributions to update.
     */
    limit?: number
  }

  /**
   * CustomInputDistribution updateManyAndReturn
   */
  export type CustomInputDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * The data used to update CustomInputDistributions.
     */
    data: XOR<CustomInputDistributionUpdateManyMutationInput, CustomInputDistributionUncheckedUpdateManyInput>
    /**
     * Filter which CustomInputDistributions to update
     */
    where?: CustomInputDistributionWhereInput
    /**
     * Limit how many CustomInputDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomInputDistribution upsert
   */
  export type CustomInputDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomInputDistribution to update in case it exists.
     */
    where: CustomInputDistributionWhereUniqueInput
    /**
     * In case the CustomInputDistribution found by the `where` argument doesn't exist, create a new CustomInputDistribution with this data.
     */
    create: XOR<CustomInputDistributionCreateInput, CustomInputDistributionUncheckedCreateInput>
    /**
     * In case the CustomInputDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomInputDistributionUpdateInput, CustomInputDistributionUncheckedUpdateInput>
  }

  /**
   * CustomInputDistribution delete
   */
  export type CustomInputDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
    /**
     * Filter which CustomInputDistribution to delete.
     */
    where: CustomInputDistributionWhereUniqueInput
  }

  /**
   * CustomInputDistribution deleteMany
   */
  export type CustomInputDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomInputDistributions to delete
     */
    where?: CustomInputDistributionWhereInput
    /**
     * Limit how many CustomInputDistributions to delete.
     */
    limit?: number
  }

  /**
   * CustomInputDistribution without action
   */
  export type CustomInputDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomInputDistribution
     */
    select?: CustomInputDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomInputDistribution
     */
    omit?: CustomInputDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomInputDistributionInclude<ExtArgs> | null
  }


  /**
   * Model Training
   */

  export type AggregateTraining = {
    _count: TrainingCountAggregateOutputType | null
    _avg: TrainingAvgAggregateOutputType | null
    _sum: TrainingSumAggregateOutputType | null
    _min: TrainingMinAggregateOutputType | null
    _max: TrainingMaxAggregateOutputType | null
  }

  export type TrainingAvgAggregateOutputType = {
    target: number | null
    achieved: number | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
  }

  export type TrainingSumAggregateOutputType = {
    target: number | null
    achieved: number | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
  }

  export type TrainingMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    title: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
    remarks: string | null
    imageUrl: string | null
    imageKey: string | null
    pdfUrl: string | null
    pdfKey: string | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    title: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
    remarks: string | null
    imageUrl: string | null
    imageKey: string | null
    pdfUrl: string | null
    pdfKey: string | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingCountAggregateOutputType = {
    id: number
    projectId: number
    quarterId: number
    title: number
    target: number
    achieved: number
    district: number
    village: number
    block: number
    beneficiaryMale: number
    beneficiaryFemale: number
    remarks: number
    imageUrl: number
    imageKey: number
    pdfUrl: number
    pdfKey: number
    units: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainingAvgAggregateInputType = {
    target?: true
    achieved?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
  }

  export type TrainingSumAggregateInputType = {
    target?: true
    achieved?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
  }

  export type TrainingMinAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    title?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
    remarks?: true
    imageUrl?: true
    imageKey?: true
    pdfUrl?: true
    pdfKey?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingMaxAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    title?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
    remarks?: true
    imageUrl?: true
    imageKey?: true
    pdfUrl?: true
    pdfKey?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingCountAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    title?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
    remarks?: true
    imageUrl?: true
    imageKey?: true
    pdfUrl?: true
    pdfKey?: true
    units?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Training to aggregate.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trainings
    **/
    _count?: true | TrainingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingMaxAggregateInputType
  }

  export type GetTrainingAggregateType<T extends TrainingAggregateArgs> = {
        [P in keyof T & keyof AggregateTraining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraining[P]>
      : GetScalarType<T[P], AggregateTraining[P]>
  }




  export type TrainingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingWhereInput
    orderBy?: TrainingOrderByWithAggregationInput | TrainingOrderByWithAggregationInput[]
    by: TrainingScalarFieldEnum[] | TrainingScalarFieldEnum
    having?: TrainingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingCountAggregateInputType | true
    _avg?: TrainingAvgAggregateInputType
    _sum?: TrainingSumAggregateInputType
    _min?: TrainingMinAggregateInputType
    _max?: TrainingMaxAggregateInputType
  }

  export type TrainingGroupByOutputType = {
    id: string
    projectId: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale: number
    beneficiaryFemale: number
    remarks: string | null
    imageUrl: string | null
    imageKey: string | null
    pdfUrl: string | null
    pdfKey: string | null
    units: string | null
    createdAt: Date
    updatedAt: Date
    _count: TrainingCountAggregateOutputType | null
    _avg: TrainingAvgAggregateOutputType | null
    _sum: TrainingSumAggregateOutputType | null
    _min: TrainingMinAggregateOutputType | null
    _max: TrainingMaxAggregateOutputType | null
  }

  type GetTrainingGroupByPayload<T extends TrainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingGroupByOutputType[P]>
        }
      >
    >


  export type TrainingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["training"]>

  export type TrainingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["training"]>

  export type TrainingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["training"]>

  export type TrainingSelectScalar = {
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "quarterId" | "title" | "target" | "achieved" | "district" | "village" | "block" | "beneficiaryMale" | "beneficiaryFemale" | "remarks" | "imageUrl" | "imageKey" | "pdfUrl" | "pdfKey" | "units" | "createdAt" | "updatedAt", ExtArgs["result"]["training"]>
  export type TrainingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type TrainingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type TrainingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }

  export type $TrainingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Training"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      quarter: Prisma.$QuarterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      quarterId: string
      title: string
      target: number
      achieved: number
      district: string
      village: string
      block: string
      beneficiaryMale: number
      beneficiaryFemale: number
      remarks: string | null
      imageUrl: string | null
      imageKey: string | null
      pdfUrl: string | null
      pdfKey: string | null
      units: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["training"]>
    composites: {}
  }

  type TrainingGetPayload<S extends boolean | null | undefined | TrainingDefaultArgs> = $Result.GetResult<Prisma.$TrainingPayload, S>

  type TrainingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingCountAggregateInputType | true
    }

  export interface TrainingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Training'], meta: { name: 'Training' } }
    /**
     * Find zero or one Training that matches the filter.
     * @param {TrainingFindUniqueArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingFindUniqueArgs>(args: SelectSubset<T, TrainingFindUniqueArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Training that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingFindUniqueOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Training that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindFirstArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingFindFirstArgs>(args?: SelectSubset<T, TrainingFindFirstArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Training that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindFirstOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainings
     * const trainings = await prisma.training.findMany()
     * 
     * // Get first 10 Trainings
     * const trainings = await prisma.training.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingWithIdOnly = await prisma.training.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingFindManyArgs>(args?: SelectSubset<T, TrainingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Training.
     * @param {TrainingCreateArgs} args - Arguments to create a Training.
     * @example
     * // Create one Training
     * const Training = await prisma.training.create({
     *   data: {
     *     // ... data to create a Training
     *   }
     * })
     * 
     */
    create<T extends TrainingCreateArgs>(args: SelectSubset<T, TrainingCreateArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trainings.
     * @param {TrainingCreateManyArgs} args - Arguments to create many Trainings.
     * @example
     * // Create many Trainings
     * const training = await prisma.training.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingCreateManyArgs>(args?: SelectSubset<T, TrainingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trainings and returns the data saved in the database.
     * @param {TrainingCreateManyAndReturnArgs} args - Arguments to create many Trainings.
     * @example
     * // Create many Trainings
     * const training = await prisma.training.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trainings and only return the `id`
     * const trainingWithIdOnly = await prisma.training.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Training.
     * @param {TrainingDeleteArgs} args - Arguments to delete one Training.
     * @example
     * // Delete one Training
     * const Training = await prisma.training.delete({
     *   where: {
     *     // ... filter to delete one Training
     *   }
     * })
     * 
     */
    delete<T extends TrainingDeleteArgs>(args: SelectSubset<T, TrainingDeleteArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Training.
     * @param {TrainingUpdateArgs} args - Arguments to update one Training.
     * @example
     * // Update one Training
     * const training = await prisma.training.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingUpdateArgs>(args: SelectSubset<T, TrainingUpdateArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trainings.
     * @param {TrainingDeleteManyArgs} args - Arguments to filter Trainings to delete.
     * @example
     * // Delete a few Trainings
     * const { count } = await prisma.training.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingDeleteManyArgs>(args?: SelectSubset<T, TrainingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainings
     * const training = await prisma.training.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingUpdateManyArgs>(args: SelectSubset<T, TrainingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainings and returns the data updated in the database.
     * @param {TrainingUpdateManyAndReturnArgs} args - Arguments to update many Trainings.
     * @example
     * // Update many Trainings
     * const training = await prisma.training.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trainings and only return the `id`
     * const trainingWithIdOnly = await prisma.training.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Training.
     * @param {TrainingUpsertArgs} args - Arguments to update or create a Training.
     * @example
     * // Update or create a Training
     * const training = await prisma.training.upsert({
     *   create: {
     *     // ... data to create a Training
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Training we want to update
     *   }
     * })
     */
    upsert<T extends TrainingUpsertArgs>(args: SelectSubset<T, TrainingUpsertArgs<ExtArgs>>): Prisma__TrainingClient<$Result.GetResult<Prisma.$TrainingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingCountArgs} args - Arguments to filter Trainings to count.
     * @example
     * // Count the number of Trainings
     * const count = await prisma.training.count({
     *   where: {
     *     // ... the filter for the Trainings we want to count
     *   }
     * })
    **/
    count<T extends TrainingCountArgs>(
      args?: Subset<T, TrainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingAggregateArgs>(args: Subset<T, TrainingAggregateArgs>): Prisma.PrismaPromise<GetTrainingAggregateType<T>>

    /**
     * Group by Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingGroupByArgs['orderBy'] }
        : { orderBy?: TrainingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Training model
   */
  readonly fields: TrainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Training.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarter<T extends QuarterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuarterDefaultArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Training model
   */
  interface TrainingFieldRefs {
    readonly id: FieldRef<"Training", 'String'>
    readonly projectId: FieldRef<"Training", 'String'>
    readonly quarterId: FieldRef<"Training", 'String'>
    readonly title: FieldRef<"Training", 'String'>
    readonly target: FieldRef<"Training", 'Int'>
    readonly achieved: FieldRef<"Training", 'Int'>
    readonly district: FieldRef<"Training", 'String'>
    readonly village: FieldRef<"Training", 'String'>
    readonly block: FieldRef<"Training", 'String'>
    readonly beneficiaryMale: FieldRef<"Training", 'Int'>
    readonly beneficiaryFemale: FieldRef<"Training", 'Int'>
    readonly remarks: FieldRef<"Training", 'String'>
    readonly imageUrl: FieldRef<"Training", 'String'>
    readonly imageKey: FieldRef<"Training", 'String'>
    readonly pdfUrl: FieldRef<"Training", 'String'>
    readonly pdfKey: FieldRef<"Training", 'String'>
    readonly units: FieldRef<"Training", 'String'>
    readonly createdAt: FieldRef<"Training", 'DateTime'>
    readonly updatedAt: FieldRef<"Training", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Training findUnique
   */
  export type TrainingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where: TrainingWhereUniqueInput
  }

  /**
   * Training findUniqueOrThrow
   */
  export type TrainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where: TrainingWhereUniqueInput
  }

  /**
   * Training findFirst
   */
  export type TrainingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainings.
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainings.
     */
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }

  /**
   * Training findFirstOrThrow
   */
  export type TrainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Training to fetch.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainings.
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainings.
     */
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }

  /**
   * Training findMany
   */
  export type TrainingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter, which Trainings to fetch.
     */
    where?: TrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainings to fetch.
     */
    orderBy?: TrainingOrderByWithRelationInput | TrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trainings.
     */
    cursor?: TrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainings.
     */
    skip?: number
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[]
  }

  /**
   * Training create
   */
  export type TrainingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * The data needed to create a Training.
     */
    data: XOR<TrainingCreateInput, TrainingUncheckedCreateInput>
  }

  /**
   * Training createMany
   */
  export type TrainingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trainings.
     */
    data: TrainingCreateManyInput | TrainingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Training createManyAndReturn
   */
  export type TrainingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * The data used to create many Trainings.
     */
    data: TrainingCreateManyInput | TrainingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Training update
   */
  export type TrainingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * The data needed to update a Training.
     */
    data: XOR<TrainingUpdateInput, TrainingUncheckedUpdateInput>
    /**
     * Choose, which Training to update.
     */
    where: TrainingWhereUniqueInput
  }

  /**
   * Training updateMany
   */
  export type TrainingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trainings.
     */
    data: XOR<TrainingUpdateManyMutationInput, TrainingUncheckedUpdateManyInput>
    /**
     * Filter which Trainings to update
     */
    where?: TrainingWhereInput
    /**
     * Limit how many Trainings to update.
     */
    limit?: number
  }

  /**
   * Training updateManyAndReturn
   */
  export type TrainingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * The data used to update Trainings.
     */
    data: XOR<TrainingUpdateManyMutationInput, TrainingUncheckedUpdateManyInput>
    /**
     * Filter which Trainings to update
     */
    where?: TrainingWhereInput
    /**
     * Limit how many Trainings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Training upsert
   */
  export type TrainingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * The filter to search for the Training to update in case it exists.
     */
    where: TrainingWhereUniqueInput
    /**
     * In case the Training found by the `where` argument doesn't exist, create a new Training with this data.
     */
    create: XOR<TrainingCreateInput, TrainingUncheckedCreateInput>
    /**
     * In case the Training was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingUpdateInput, TrainingUncheckedUpdateInput>
  }

  /**
   * Training delete
   */
  export type TrainingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
    /**
     * Filter which Training to delete.
     */
    where: TrainingWhereUniqueInput
  }

  /**
   * Training deleteMany
   */
  export type TrainingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trainings to delete
     */
    where?: TrainingWhereInput
    /**
     * Limit how many Trainings to delete.
     */
    limit?: number
  }

  /**
   * Training without action
   */
  export type TrainingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Training
     */
    select?: TrainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Training
     */
    omit?: TrainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingInclude<ExtArgs> | null
  }


  /**
   * Model FLD
   */

  export type AggregateFLD = {
    _count: FLDCountAggregateOutputType | null
    _avg: FLDAvgAggregateOutputType | null
    _sum: FLDSumAggregateOutputType | null
    _min: FLDMinAggregateOutputType | null
    _max: FLDMaxAggregateOutputType | null
  }

  export type FLDAvgAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type FLDSumAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type FLDMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    target: number | null
    achieved: number | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FLDMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    target: number | null
    achieved: number | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FLDCountAggregateOutputType = {
    id: number
    projectId: number
    quarterId: number
    target: number
    achieved: number
    units: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FLDAvgAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type FLDSumAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type FLDMinAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    target?: true
    achieved?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FLDMaxAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    target?: true
    achieved?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FLDCountAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    target?: true
    achieved?: true
    units?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FLDAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FLD to aggregate.
     */
    where?: FLDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLDS to fetch.
     */
    orderBy?: FLDOrderByWithRelationInput | FLDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FLDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FLDS
    **/
    _count?: true | FLDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FLDAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FLDSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FLDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FLDMaxAggregateInputType
  }

  export type GetFLDAggregateType<T extends FLDAggregateArgs> = {
        [P in keyof T & keyof AggregateFLD]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFLD[P]>
      : GetScalarType<T[P], AggregateFLD[P]>
  }




  export type FLDGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FLDWhereInput
    orderBy?: FLDOrderByWithAggregationInput | FLDOrderByWithAggregationInput[]
    by: FLDScalarFieldEnum[] | FLDScalarFieldEnum
    having?: FLDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FLDCountAggregateInputType | true
    _avg?: FLDAvgAggregateInputType
    _sum?: FLDSumAggregateInputType
    _min?: FLDMinAggregateInputType
    _max?: FLDMaxAggregateInputType
  }

  export type FLDGroupByOutputType = {
    id: string
    projectId: string
    quarterId: string
    target: number
    achieved: number
    units: string | null
    createdAt: Date
    updatedAt: Date
    _count: FLDCountAggregateOutputType | null
    _avg: FLDAvgAggregateOutputType | null
    _sum: FLDSumAggregateOutputType | null
    _min: FLDMinAggregateOutputType | null
    _max: FLDMaxAggregateOutputType | null
  }

  type GetFLDGroupByPayload<T extends FLDGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FLDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FLDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FLDGroupByOutputType[P]>
            : GetScalarType<T[P], FLDGroupByOutputType[P]>
        }
      >
    >


  export type FLDSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fLD"]>

  export type FLDSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fLD"]>

  export type FLDSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fLD"]>

  export type FLDSelectScalar = {
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FLDOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "quarterId" | "target" | "achieved" | "units" | "createdAt" | "updatedAt", ExtArgs["result"]["fLD"]>
  export type FLDInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type FLDIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type FLDIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }

  export type $FLDPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FLD"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      quarter: Prisma.$QuarterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      quarterId: string
      target: number
      achieved: number
      units: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fLD"]>
    composites: {}
  }

  type FLDGetPayload<S extends boolean | null | undefined | FLDDefaultArgs> = $Result.GetResult<Prisma.$FLDPayload, S>

  type FLDCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FLDFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FLDCountAggregateInputType | true
    }

  export interface FLDDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FLD'], meta: { name: 'FLD' } }
    /**
     * Find zero or one FLD that matches the filter.
     * @param {FLDFindUniqueArgs} args - Arguments to find a FLD
     * @example
     * // Get one FLD
     * const fLD = await prisma.fLD.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FLDFindUniqueArgs>(args: SelectSubset<T, FLDFindUniqueArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FLD that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FLDFindUniqueOrThrowArgs} args - Arguments to find a FLD
     * @example
     * // Get one FLD
     * const fLD = await prisma.fLD.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FLDFindUniqueOrThrowArgs>(args: SelectSubset<T, FLDFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FLD that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDFindFirstArgs} args - Arguments to find a FLD
     * @example
     * // Get one FLD
     * const fLD = await prisma.fLD.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FLDFindFirstArgs>(args?: SelectSubset<T, FLDFindFirstArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FLD that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDFindFirstOrThrowArgs} args - Arguments to find a FLD
     * @example
     * // Get one FLD
     * const fLD = await prisma.fLD.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FLDFindFirstOrThrowArgs>(args?: SelectSubset<T, FLDFindFirstOrThrowArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FLDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FLDS
     * const fLDS = await prisma.fLD.findMany()
     * 
     * // Get first 10 FLDS
     * const fLDS = await prisma.fLD.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fLDWithIdOnly = await prisma.fLD.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FLDFindManyArgs>(args?: SelectSubset<T, FLDFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FLD.
     * @param {FLDCreateArgs} args - Arguments to create a FLD.
     * @example
     * // Create one FLD
     * const FLD = await prisma.fLD.create({
     *   data: {
     *     // ... data to create a FLD
     *   }
     * })
     * 
     */
    create<T extends FLDCreateArgs>(args: SelectSubset<T, FLDCreateArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FLDS.
     * @param {FLDCreateManyArgs} args - Arguments to create many FLDS.
     * @example
     * // Create many FLDS
     * const fLD = await prisma.fLD.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FLDCreateManyArgs>(args?: SelectSubset<T, FLDCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FLDS and returns the data saved in the database.
     * @param {FLDCreateManyAndReturnArgs} args - Arguments to create many FLDS.
     * @example
     * // Create many FLDS
     * const fLD = await prisma.fLD.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FLDS and only return the `id`
     * const fLDWithIdOnly = await prisma.fLD.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FLDCreateManyAndReturnArgs>(args?: SelectSubset<T, FLDCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FLD.
     * @param {FLDDeleteArgs} args - Arguments to delete one FLD.
     * @example
     * // Delete one FLD
     * const FLD = await prisma.fLD.delete({
     *   where: {
     *     // ... filter to delete one FLD
     *   }
     * })
     * 
     */
    delete<T extends FLDDeleteArgs>(args: SelectSubset<T, FLDDeleteArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FLD.
     * @param {FLDUpdateArgs} args - Arguments to update one FLD.
     * @example
     * // Update one FLD
     * const fLD = await prisma.fLD.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FLDUpdateArgs>(args: SelectSubset<T, FLDUpdateArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FLDS.
     * @param {FLDDeleteManyArgs} args - Arguments to filter FLDS to delete.
     * @example
     * // Delete a few FLDS
     * const { count } = await prisma.fLD.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FLDDeleteManyArgs>(args?: SelectSubset<T, FLDDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FLDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FLDS
     * const fLD = await prisma.fLD.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FLDUpdateManyArgs>(args: SelectSubset<T, FLDUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FLDS and returns the data updated in the database.
     * @param {FLDUpdateManyAndReturnArgs} args - Arguments to update many FLDS.
     * @example
     * // Update many FLDS
     * const fLD = await prisma.fLD.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FLDS and only return the `id`
     * const fLDWithIdOnly = await prisma.fLD.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FLDUpdateManyAndReturnArgs>(args: SelectSubset<T, FLDUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FLD.
     * @param {FLDUpsertArgs} args - Arguments to update or create a FLD.
     * @example
     * // Update or create a FLD
     * const fLD = await prisma.fLD.upsert({
     *   create: {
     *     // ... data to create a FLD
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FLD we want to update
     *   }
     * })
     */
    upsert<T extends FLDUpsertArgs>(args: SelectSubset<T, FLDUpsertArgs<ExtArgs>>): Prisma__FLDClient<$Result.GetResult<Prisma.$FLDPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FLDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDCountArgs} args - Arguments to filter FLDS to count.
     * @example
     * // Count the number of FLDS
     * const count = await prisma.fLD.count({
     *   where: {
     *     // ... the filter for the FLDS we want to count
     *   }
     * })
    **/
    count<T extends FLDCountArgs>(
      args?: Subset<T, FLDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FLDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FLD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FLDAggregateArgs>(args: Subset<T, FLDAggregateArgs>): Prisma.PrismaPromise<GetFLDAggregateType<T>>

    /**
     * Group by FLD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FLDGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FLDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FLDGroupByArgs['orderBy'] }
        : { orderBy?: FLDGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FLDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFLDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FLD model
   */
  readonly fields: FLDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FLD.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FLDClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarter<T extends QuarterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuarterDefaultArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FLD model
   */
  interface FLDFieldRefs {
    readonly id: FieldRef<"FLD", 'String'>
    readonly projectId: FieldRef<"FLD", 'String'>
    readonly quarterId: FieldRef<"FLD", 'String'>
    readonly target: FieldRef<"FLD", 'Int'>
    readonly achieved: FieldRef<"FLD", 'Int'>
    readonly units: FieldRef<"FLD", 'String'>
    readonly createdAt: FieldRef<"FLD", 'DateTime'>
    readonly updatedAt: FieldRef<"FLD", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FLD findUnique
   */
  export type FLDFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * Filter, which FLD to fetch.
     */
    where: FLDWhereUniqueInput
  }

  /**
   * FLD findUniqueOrThrow
   */
  export type FLDFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * Filter, which FLD to fetch.
     */
    where: FLDWhereUniqueInput
  }

  /**
   * FLD findFirst
   */
  export type FLDFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * Filter, which FLD to fetch.
     */
    where?: FLDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLDS to fetch.
     */
    orderBy?: FLDOrderByWithRelationInput | FLDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FLDS.
     */
    cursor?: FLDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FLDS.
     */
    distinct?: FLDScalarFieldEnum | FLDScalarFieldEnum[]
  }

  /**
   * FLD findFirstOrThrow
   */
  export type FLDFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * Filter, which FLD to fetch.
     */
    where?: FLDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLDS to fetch.
     */
    orderBy?: FLDOrderByWithRelationInput | FLDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FLDS.
     */
    cursor?: FLDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FLDS.
     */
    distinct?: FLDScalarFieldEnum | FLDScalarFieldEnum[]
  }

  /**
   * FLD findMany
   */
  export type FLDFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * Filter, which FLDS to fetch.
     */
    where?: FLDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FLDS to fetch.
     */
    orderBy?: FLDOrderByWithRelationInput | FLDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FLDS.
     */
    cursor?: FLDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FLDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FLDS.
     */
    skip?: number
    distinct?: FLDScalarFieldEnum | FLDScalarFieldEnum[]
  }

  /**
   * FLD create
   */
  export type FLDCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * The data needed to create a FLD.
     */
    data: XOR<FLDCreateInput, FLDUncheckedCreateInput>
  }

  /**
   * FLD createMany
   */
  export type FLDCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FLDS.
     */
    data: FLDCreateManyInput | FLDCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FLD createManyAndReturn
   */
  export type FLDCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * The data used to create many FLDS.
     */
    data: FLDCreateManyInput | FLDCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FLD update
   */
  export type FLDUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * The data needed to update a FLD.
     */
    data: XOR<FLDUpdateInput, FLDUncheckedUpdateInput>
    /**
     * Choose, which FLD to update.
     */
    where: FLDWhereUniqueInput
  }

  /**
   * FLD updateMany
   */
  export type FLDUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FLDS.
     */
    data: XOR<FLDUpdateManyMutationInput, FLDUncheckedUpdateManyInput>
    /**
     * Filter which FLDS to update
     */
    where?: FLDWhereInput
    /**
     * Limit how many FLDS to update.
     */
    limit?: number
  }

  /**
   * FLD updateManyAndReturn
   */
  export type FLDUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * The data used to update FLDS.
     */
    data: XOR<FLDUpdateManyMutationInput, FLDUncheckedUpdateManyInput>
    /**
     * Filter which FLDS to update
     */
    where?: FLDWhereInput
    /**
     * Limit how many FLDS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FLD upsert
   */
  export type FLDUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * The filter to search for the FLD to update in case it exists.
     */
    where: FLDWhereUniqueInput
    /**
     * In case the FLD found by the `where` argument doesn't exist, create a new FLD with this data.
     */
    create: XOR<FLDCreateInput, FLDUncheckedCreateInput>
    /**
     * In case the FLD was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FLDUpdateInput, FLDUncheckedUpdateInput>
  }

  /**
   * FLD delete
   */
  export type FLDDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
    /**
     * Filter which FLD to delete.
     */
    where: FLDWhereUniqueInput
  }

  /**
   * FLD deleteMany
   */
  export type FLDDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FLDS to delete
     */
    where?: FLDWhereInput
    /**
     * Limit how many FLDS to delete.
     */
    limit?: number
  }

  /**
   * FLD without action
   */
  export type FLDDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FLD
     */
    select?: FLDSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FLD
     */
    omit?: FLDOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FLDInclude<ExtArgs> | null
  }


  /**
   * Model AwarenessProgram
   */

  export type AggregateAwarenessProgram = {
    _count: AwarenessProgramCountAggregateOutputType | null
    _avg: AwarenessProgramAvgAggregateOutputType | null
    _sum: AwarenessProgramSumAggregateOutputType | null
    _min: AwarenessProgramMinAggregateOutputType | null
    _max: AwarenessProgramMaxAggregateOutputType | null
  }

  export type AwarenessProgramAvgAggregateOutputType = {
    target: number | null
    achieved: number | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
  }

  export type AwarenessProgramSumAggregateOutputType = {
    target: number | null
    achieved: number | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
  }

  export type AwarenessProgramMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    title: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
    imageUrl: string | null
    imageKey: string | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwarenessProgramMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    title: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    beneficiaryMale: number | null
    beneficiaryFemale: number | null
    imageUrl: string | null
    imageKey: string | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwarenessProgramCountAggregateOutputType = {
    id: number
    projectId: number
    quarterId: number
    title: number
    target: number
    achieved: number
    district: number
    village: number
    block: number
    beneficiaryMale: number
    beneficiaryFemale: number
    imageUrl: number
    imageKey: number
    units: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AwarenessProgramAvgAggregateInputType = {
    target?: true
    achieved?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
  }

  export type AwarenessProgramSumAggregateInputType = {
    target?: true
    achieved?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
  }

  export type AwarenessProgramMinAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    title?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
    imageUrl?: true
    imageKey?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwarenessProgramMaxAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    title?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
    imageUrl?: true
    imageKey?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwarenessProgramCountAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    title?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    beneficiaryMale?: true
    beneficiaryFemale?: true
    imageUrl?: true
    imageKey?: true
    units?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AwarenessProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AwarenessProgram to aggregate.
     */
    where?: AwarenessProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwarenessPrograms to fetch.
     */
    orderBy?: AwarenessProgramOrderByWithRelationInput | AwarenessProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwarenessProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwarenessPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwarenessPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AwarenessPrograms
    **/
    _count?: true | AwarenessProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwarenessProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwarenessProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwarenessProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwarenessProgramMaxAggregateInputType
  }

  export type GetAwarenessProgramAggregateType<T extends AwarenessProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateAwarenessProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAwarenessProgram[P]>
      : GetScalarType<T[P], AggregateAwarenessProgram[P]>
  }




  export type AwarenessProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwarenessProgramWhereInput
    orderBy?: AwarenessProgramOrderByWithAggregationInput | AwarenessProgramOrderByWithAggregationInput[]
    by: AwarenessProgramScalarFieldEnum[] | AwarenessProgramScalarFieldEnum
    having?: AwarenessProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwarenessProgramCountAggregateInputType | true
    _avg?: AwarenessProgramAvgAggregateInputType
    _sum?: AwarenessProgramSumAggregateInputType
    _min?: AwarenessProgramMinAggregateInputType
    _max?: AwarenessProgramMaxAggregateInputType
  }

  export type AwarenessProgramGroupByOutputType = {
    id: string
    projectId: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale: number
    beneficiaryFemale: number
    imageUrl: string | null
    imageKey: string | null
    units: string | null
    createdAt: Date
    updatedAt: Date
    _count: AwarenessProgramCountAggregateOutputType | null
    _avg: AwarenessProgramAvgAggregateOutputType | null
    _sum: AwarenessProgramSumAggregateOutputType | null
    _min: AwarenessProgramMinAggregateOutputType | null
    _max: AwarenessProgramMaxAggregateOutputType | null
  }

  type GetAwarenessProgramGroupByPayload<T extends AwarenessProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwarenessProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwarenessProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwarenessProgramGroupByOutputType[P]>
            : GetScalarType<T[P], AwarenessProgramGroupByOutputType[P]>
        }
      >
    >


  export type AwarenessProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awarenessProgram"]>

  export type AwarenessProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awarenessProgram"]>

  export type AwarenessProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["awarenessProgram"]>

  export type AwarenessProgramSelectScalar = {
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    title?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    beneficiaryMale?: boolean
    beneficiaryFemale?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AwarenessProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "quarterId" | "title" | "target" | "achieved" | "district" | "village" | "block" | "beneficiaryMale" | "beneficiaryFemale" | "imageUrl" | "imageKey" | "units" | "createdAt" | "updatedAt", ExtArgs["result"]["awarenessProgram"]>
  export type AwarenessProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type AwarenessProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type AwarenessProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }

  export type $AwarenessProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AwarenessProgram"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      quarter: Prisma.$QuarterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      quarterId: string
      title: string
      target: number
      achieved: number
      district: string
      village: string
      block: string
      beneficiaryMale: number
      beneficiaryFemale: number
      imageUrl: string | null
      imageKey: string | null
      units: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["awarenessProgram"]>
    composites: {}
  }

  type AwarenessProgramGetPayload<S extends boolean | null | undefined | AwarenessProgramDefaultArgs> = $Result.GetResult<Prisma.$AwarenessProgramPayload, S>

  type AwarenessProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwarenessProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwarenessProgramCountAggregateInputType | true
    }

  export interface AwarenessProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AwarenessProgram'], meta: { name: 'AwarenessProgram' } }
    /**
     * Find zero or one AwarenessProgram that matches the filter.
     * @param {AwarenessProgramFindUniqueArgs} args - Arguments to find a AwarenessProgram
     * @example
     * // Get one AwarenessProgram
     * const awarenessProgram = await prisma.awarenessProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwarenessProgramFindUniqueArgs>(args: SelectSubset<T, AwarenessProgramFindUniqueArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AwarenessProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwarenessProgramFindUniqueOrThrowArgs} args - Arguments to find a AwarenessProgram
     * @example
     * // Get one AwarenessProgram
     * const awarenessProgram = await prisma.awarenessProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwarenessProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, AwarenessProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AwarenessProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramFindFirstArgs} args - Arguments to find a AwarenessProgram
     * @example
     * // Get one AwarenessProgram
     * const awarenessProgram = await prisma.awarenessProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwarenessProgramFindFirstArgs>(args?: SelectSubset<T, AwarenessProgramFindFirstArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AwarenessProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramFindFirstOrThrowArgs} args - Arguments to find a AwarenessProgram
     * @example
     * // Get one AwarenessProgram
     * const awarenessProgram = await prisma.awarenessProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwarenessProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, AwarenessProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AwarenessPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AwarenessPrograms
     * const awarenessPrograms = await prisma.awarenessProgram.findMany()
     * 
     * // Get first 10 AwarenessPrograms
     * const awarenessPrograms = await prisma.awarenessProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awarenessProgramWithIdOnly = await prisma.awarenessProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwarenessProgramFindManyArgs>(args?: SelectSubset<T, AwarenessProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AwarenessProgram.
     * @param {AwarenessProgramCreateArgs} args - Arguments to create a AwarenessProgram.
     * @example
     * // Create one AwarenessProgram
     * const AwarenessProgram = await prisma.awarenessProgram.create({
     *   data: {
     *     // ... data to create a AwarenessProgram
     *   }
     * })
     * 
     */
    create<T extends AwarenessProgramCreateArgs>(args: SelectSubset<T, AwarenessProgramCreateArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AwarenessPrograms.
     * @param {AwarenessProgramCreateManyArgs} args - Arguments to create many AwarenessPrograms.
     * @example
     * // Create many AwarenessPrograms
     * const awarenessProgram = await prisma.awarenessProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwarenessProgramCreateManyArgs>(args?: SelectSubset<T, AwarenessProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AwarenessPrograms and returns the data saved in the database.
     * @param {AwarenessProgramCreateManyAndReturnArgs} args - Arguments to create many AwarenessPrograms.
     * @example
     * // Create many AwarenessPrograms
     * const awarenessProgram = await prisma.awarenessProgram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AwarenessPrograms and only return the `id`
     * const awarenessProgramWithIdOnly = await prisma.awarenessProgram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwarenessProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, AwarenessProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AwarenessProgram.
     * @param {AwarenessProgramDeleteArgs} args - Arguments to delete one AwarenessProgram.
     * @example
     * // Delete one AwarenessProgram
     * const AwarenessProgram = await prisma.awarenessProgram.delete({
     *   where: {
     *     // ... filter to delete one AwarenessProgram
     *   }
     * })
     * 
     */
    delete<T extends AwarenessProgramDeleteArgs>(args: SelectSubset<T, AwarenessProgramDeleteArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AwarenessProgram.
     * @param {AwarenessProgramUpdateArgs} args - Arguments to update one AwarenessProgram.
     * @example
     * // Update one AwarenessProgram
     * const awarenessProgram = await prisma.awarenessProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwarenessProgramUpdateArgs>(args: SelectSubset<T, AwarenessProgramUpdateArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AwarenessPrograms.
     * @param {AwarenessProgramDeleteManyArgs} args - Arguments to filter AwarenessPrograms to delete.
     * @example
     * // Delete a few AwarenessPrograms
     * const { count } = await prisma.awarenessProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwarenessProgramDeleteManyArgs>(args?: SelectSubset<T, AwarenessProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AwarenessPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AwarenessPrograms
     * const awarenessProgram = await prisma.awarenessProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwarenessProgramUpdateManyArgs>(args: SelectSubset<T, AwarenessProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AwarenessPrograms and returns the data updated in the database.
     * @param {AwarenessProgramUpdateManyAndReturnArgs} args - Arguments to update many AwarenessPrograms.
     * @example
     * // Update many AwarenessPrograms
     * const awarenessProgram = await prisma.awarenessProgram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AwarenessPrograms and only return the `id`
     * const awarenessProgramWithIdOnly = await prisma.awarenessProgram.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AwarenessProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, AwarenessProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AwarenessProgram.
     * @param {AwarenessProgramUpsertArgs} args - Arguments to update or create a AwarenessProgram.
     * @example
     * // Update or create a AwarenessProgram
     * const awarenessProgram = await prisma.awarenessProgram.upsert({
     *   create: {
     *     // ... data to create a AwarenessProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AwarenessProgram we want to update
     *   }
     * })
     */
    upsert<T extends AwarenessProgramUpsertArgs>(args: SelectSubset<T, AwarenessProgramUpsertArgs<ExtArgs>>): Prisma__AwarenessProgramClient<$Result.GetResult<Prisma.$AwarenessProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AwarenessPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramCountArgs} args - Arguments to filter AwarenessPrograms to count.
     * @example
     * // Count the number of AwarenessPrograms
     * const count = await prisma.awarenessProgram.count({
     *   where: {
     *     // ... the filter for the AwarenessPrograms we want to count
     *   }
     * })
    **/
    count<T extends AwarenessProgramCountArgs>(
      args?: Subset<T, AwarenessProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwarenessProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AwarenessProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AwarenessProgramAggregateArgs>(args: Subset<T, AwarenessProgramAggregateArgs>): Prisma.PrismaPromise<GetAwarenessProgramAggregateType<T>>

    /**
     * Group by AwarenessProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwarenessProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AwarenessProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwarenessProgramGroupByArgs['orderBy'] }
        : { orderBy?: AwarenessProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AwarenessProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwarenessProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AwarenessProgram model
   */
  readonly fields: AwarenessProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AwarenessProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwarenessProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarter<T extends QuarterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuarterDefaultArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AwarenessProgram model
   */
  interface AwarenessProgramFieldRefs {
    readonly id: FieldRef<"AwarenessProgram", 'String'>
    readonly projectId: FieldRef<"AwarenessProgram", 'String'>
    readonly quarterId: FieldRef<"AwarenessProgram", 'String'>
    readonly title: FieldRef<"AwarenessProgram", 'String'>
    readonly target: FieldRef<"AwarenessProgram", 'Int'>
    readonly achieved: FieldRef<"AwarenessProgram", 'Int'>
    readonly district: FieldRef<"AwarenessProgram", 'String'>
    readonly village: FieldRef<"AwarenessProgram", 'String'>
    readonly block: FieldRef<"AwarenessProgram", 'String'>
    readonly beneficiaryMale: FieldRef<"AwarenessProgram", 'Int'>
    readonly beneficiaryFemale: FieldRef<"AwarenessProgram", 'Int'>
    readonly imageUrl: FieldRef<"AwarenessProgram", 'String'>
    readonly imageKey: FieldRef<"AwarenessProgram", 'String'>
    readonly units: FieldRef<"AwarenessProgram", 'String'>
    readonly createdAt: FieldRef<"AwarenessProgram", 'DateTime'>
    readonly updatedAt: FieldRef<"AwarenessProgram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AwarenessProgram findUnique
   */
  export type AwarenessProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * Filter, which AwarenessProgram to fetch.
     */
    where: AwarenessProgramWhereUniqueInput
  }

  /**
   * AwarenessProgram findUniqueOrThrow
   */
  export type AwarenessProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * Filter, which AwarenessProgram to fetch.
     */
    where: AwarenessProgramWhereUniqueInput
  }

  /**
   * AwarenessProgram findFirst
   */
  export type AwarenessProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * Filter, which AwarenessProgram to fetch.
     */
    where?: AwarenessProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwarenessPrograms to fetch.
     */
    orderBy?: AwarenessProgramOrderByWithRelationInput | AwarenessProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AwarenessPrograms.
     */
    cursor?: AwarenessProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwarenessPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwarenessPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwarenessPrograms.
     */
    distinct?: AwarenessProgramScalarFieldEnum | AwarenessProgramScalarFieldEnum[]
  }

  /**
   * AwarenessProgram findFirstOrThrow
   */
  export type AwarenessProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * Filter, which AwarenessProgram to fetch.
     */
    where?: AwarenessProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwarenessPrograms to fetch.
     */
    orderBy?: AwarenessProgramOrderByWithRelationInput | AwarenessProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AwarenessPrograms.
     */
    cursor?: AwarenessProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwarenessPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwarenessPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AwarenessPrograms.
     */
    distinct?: AwarenessProgramScalarFieldEnum | AwarenessProgramScalarFieldEnum[]
  }

  /**
   * AwarenessProgram findMany
   */
  export type AwarenessProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * Filter, which AwarenessPrograms to fetch.
     */
    where?: AwarenessProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AwarenessPrograms to fetch.
     */
    orderBy?: AwarenessProgramOrderByWithRelationInput | AwarenessProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AwarenessPrograms.
     */
    cursor?: AwarenessProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AwarenessPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AwarenessPrograms.
     */
    skip?: number
    distinct?: AwarenessProgramScalarFieldEnum | AwarenessProgramScalarFieldEnum[]
  }

  /**
   * AwarenessProgram create
   */
  export type AwarenessProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a AwarenessProgram.
     */
    data: XOR<AwarenessProgramCreateInput, AwarenessProgramUncheckedCreateInput>
  }

  /**
   * AwarenessProgram createMany
   */
  export type AwarenessProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AwarenessPrograms.
     */
    data: AwarenessProgramCreateManyInput | AwarenessProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AwarenessProgram createManyAndReturn
   */
  export type AwarenessProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * The data used to create many AwarenessPrograms.
     */
    data: AwarenessProgramCreateManyInput | AwarenessProgramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AwarenessProgram update
   */
  export type AwarenessProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a AwarenessProgram.
     */
    data: XOR<AwarenessProgramUpdateInput, AwarenessProgramUncheckedUpdateInput>
    /**
     * Choose, which AwarenessProgram to update.
     */
    where: AwarenessProgramWhereUniqueInput
  }

  /**
   * AwarenessProgram updateMany
   */
  export type AwarenessProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AwarenessPrograms.
     */
    data: XOR<AwarenessProgramUpdateManyMutationInput, AwarenessProgramUncheckedUpdateManyInput>
    /**
     * Filter which AwarenessPrograms to update
     */
    where?: AwarenessProgramWhereInput
    /**
     * Limit how many AwarenessPrograms to update.
     */
    limit?: number
  }

  /**
   * AwarenessProgram updateManyAndReturn
   */
  export type AwarenessProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * The data used to update AwarenessPrograms.
     */
    data: XOR<AwarenessProgramUpdateManyMutationInput, AwarenessProgramUncheckedUpdateManyInput>
    /**
     * Filter which AwarenessPrograms to update
     */
    where?: AwarenessProgramWhereInput
    /**
     * Limit how many AwarenessPrograms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AwarenessProgram upsert
   */
  export type AwarenessProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the AwarenessProgram to update in case it exists.
     */
    where: AwarenessProgramWhereUniqueInput
    /**
     * In case the AwarenessProgram found by the `where` argument doesn't exist, create a new AwarenessProgram with this data.
     */
    create: XOR<AwarenessProgramCreateInput, AwarenessProgramUncheckedCreateInput>
    /**
     * In case the AwarenessProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwarenessProgramUpdateInput, AwarenessProgramUncheckedUpdateInput>
  }

  /**
   * AwarenessProgram delete
   */
  export type AwarenessProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
    /**
     * Filter which AwarenessProgram to delete.
     */
    where: AwarenessProgramWhereUniqueInput
  }

  /**
   * AwarenessProgram deleteMany
   */
  export type AwarenessProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AwarenessPrograms to delete
     */
    where?: AwarenessProgramWhereInput
    /**
     * Limit how many AwarenessPrograms to delete.
     */
    limit?: number
  }

  /**
   * AwarenessProgram without action
   */
  export type AwarenessProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AwarenessProgram
     */
    select?: AwarenessProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AwarenessProgram
     */
    omit?: AwarenessProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwarenessProgramInclude<ExtArgs> | null
  }


  /**
   * Model InfrastructureDevelopment
   */

  export type AggregateInfrastructureDevelopment = {
    _count: InfrastructureDevelopmentCountAggregateOutputType | null
    _avg: InfrastructureDevelopmentAvgAggregateOutputType | null
    _sum: InfrastructureDevelopmentSumAggregateOutputType | null
    _min: InfrastructureDevelopmentMinAggregateOutputType | null
    _max: InfrastructureDevelopmentMaxAggregateOutputType | null
  }

  export type InfrastructureDevelopmentAvgAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type InfrastructureDevelopmentSumAggregateOutputType = {
    target: number | null
    achieved: number | null
  }

  export type InfrastructureDevelopmentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    remarks: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfrastructureDevelopmentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    quarterId: string | null
    target: number | null
    achieved: number | null
    district: string | null
    village: string | null
    block: string | null
    remarks: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfrastructureDevelopmentCountAggregateOutputType = {
    id: number
    projectId: number
    quarterId: number
    target: number
    achieved: number
    district: number
    village: number
    block: number
    remarks: number
    imageUrl: number
    imageKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InfrastructureDevelopmentAvgAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type InfrastructureDevelopmentSumAggregateInputType = {
    target?: true
    achieved?: true
  }

  export type InfrastructureDevelopmentMinAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfrastructureDevelopmentMaxAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfrastructureDevelopmentCountAggregateInputType = {
    id?: true
    projectId?: true
    quarterId?: true
    target?: true
    achieved?: true
    district?: true
    village?: true
    block?: true
    remarks?: true
    imageUrl?: true
    imageKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InfrastructureDevelopmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfrastructureDevelopment to aggregate.
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfrastructureDevelopments to fetch.
     */
    orderBy?: InfrastructureDevelopmentOrderByWithRelationInput | InfrastructureDevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfrastructureDevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfrastructureDevelopments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfrastructureDevelopments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfrastructureDevelopments
    **/
    _count?: true | InfrastructureDevelopmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfrastructureDevelopmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfrastructureDevelopmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfrastructureDevelopmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfrastructureDevelopmentMaxAggregateInputType
  }

  export type GetInfrastructureDevelopmentAggregateType<T extends InfrastructureDevelopmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInfrastructureDevelopment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfrastructureDevelopment[P]>
      : GetScalarType<T[P], AggregateInfrastructureDevelopment[P]>
  }




  export type InfrastructureDevelopmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfrastructureDevelopmentWhereInput
    orderBy?: InfrastructureDevelopmentOrderByWithAggregationInput | InfrastructureDevelopmentOrderByWithAggregationInput[]
    by: InfrastructureDevelopmentScalarFieldEnum[] | InfrastructureDevelopmentScalarFieldEnum
    having?: InfrastructureDevelopmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfrastructureDevelopmentCountAggregateInputType | true
    _avg?: InfrastructureDevelopmentAvgAggregateInputType
    _sum?: InfrastructureDevelopmentSumAggregateInputType
    _min?: InfrastructureDevelopmentMinAggregateInputType
    _max?: InfrastructureDevelopmentMaxAggregateInputType
  }

  export type InfrastructureDevelopmentGroupByOutputType = {
    id: string
    projectId: string
    quarterId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks: string | null
    imageUrl: string | null
    imageKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: InfrastructureDevelopmentCountAggregateOutputType | null
    _avg: InfrastructureDevelopmentAvgAggregateOutputType | null
    _sum: InfrastructureDevelopmentSumAggregateOutputType | null
    _min: InfrastructureDevelopmentMinAggregateOutputType | null
    _max: InfrastructureDevelopmentMaxAggregateOutputType | null
  }

  type GetInfrastructureDevelopmentGroupByPayload<T extends InfrastructureDevelopmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfrastructureDevelopmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfrastructureDevelopmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfrastructureDevelopmentGroupByOutputType[P]>
            : GetScalarType<T[P], InfrastructureDevelopmentGroupByOutputType[P]>
        }
      >
    >


  export type InfrastructureDevelopmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infrastructureDevelopment"]>

  export type InfrastructureDevelopmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infrastructureDevelopment"]>

  export type InfrastructureDevelopmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infrastructureDevelopment"]>

  export type InfrastructureDevelopmentSelectScalar = {
    id?: boolean
    projectId?: boolean
    quarterId?: boolean
    target?: boolean
    achieved?: boolean
    district?: boolean
    village?: boolean
    block?: boolean
    remarks?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InfrastructureDevelopmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "quarterId" | "target" | "achieved" | "district" | "village" | "block" | "remarks" | "imageUrl" | "imageKey" | "createdAt" | "updatedAt", ExtArgs["result"]["infrastructureDevelopment"]>
  export type InfrastructureDevelopmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type InfrastructureDevelopmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }
  export type InfrastructureDevelopmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    quarter?: boolean | QuarterDefaultArgs<ExtArgs>
  }

  export type $InfrastructureDevelopmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfrastructureDevelopment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      quarter: Prisma.$QuarterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      quarterId: string
      target: number
      achieved: number
      district: string
      village: string
      block: string
      remarks: string | null
      imageUrl: string | null
      imageKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["infrastructureDevelopment"]>
    composites: {}
  }

  type InfrastructureDevelopmentGetPayload<S extends boolean | null | undefined | InfrastructureDevelopmentDefaultArgs> = $Result.GetResult<Prisma.$InfrastructureDevelopmentPayload, S>

  type InfrastructureDevelopmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfrastructureDevelopmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfrastructureDevelopmentCountAggregateInputType | true
    }

  export interface InfrastructureDevelopmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfrastructureDevelopment'], meta: { name: 'InfrastructureDevelopment' } }
    /**
     * Find zero or one InfrastructureDevelopment that matches the filter.
     * @param {InfrastructureDevelopmentFindUniqueArgs} args - Arguments to find a InfrastructureDevelopment
     * @example
     * // Get one InfrastructureDevelopment
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfrastructureDevelopmentFindUniqueArgs>(args: SelectSubset<T, InfrastructureDevelopmentFindUniqueArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfrastructureDevelopment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfrastructureDevelopmentFindUniqueOrThrowArgs} args - Arguments to find a InfrastructureDevelopment
     * @example
     * // Get one InfrastructureDevelopment
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfrastructureDevelopmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InfrastructureDevelopmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfrastructureDevelopment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentFindFirstArgs} args - Arguments to find a InfrastructureDevelopment
     * @example
     * // Get one InfrastructureDevelopment
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfrastructureDevelopmentFindFirstArgs>(args?: SelectSubset<T, InfrastructureDevelopmentFindFirstArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfrastructureDevelopment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentFindFirstOrThrowArgs} args - Arguments to find a InfrastructureDevelopment
     * @example
     * // Get one InfrastructureDevelopment
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfrastructureDevelopmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InfrastructureDevelopmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfrastructureDevelopments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfrastructureDevelopments
     * const infrastructureDevelopments = await prisma.infrastructureDevelopment.findMany()
     * 
     * // Get first 10 InfrastructureDevelopments
     * const infrastructureDevelopments = await prisma.infrastructureDevelopment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infrastructureDevelopmentWithIdOnly = await prisma.infrastructureDevelopment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfrastructureDevelopmentFindManyArgs>(args?: SelectSubset<T, InfrastructureDevelopmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfrastructureDevelopment.
     * @param {InfrastructureDevelopmentCreateArgs} args - Arguments to create a InfrastructureDevelopment.
     * @example
     * // Create one InfrastructureDevelopment
     * const InfrastructureDevelopment = await prisma.infrastructureDevelopment.create({
     *   data: {
     *     // ... data to create a InfrastructureDevelopment
     *   }
     * })
     * 
     */
    create<T extends InfrastructureDevelopmentCreateArgs>(args: SelectSubset<T, InfrastructureDevelopmentCreateArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfrastructureDevelopments.
     * @param {InfrastructureDevelopmentCreateManyArgs} args - Arguments to create many InfrastructureDevelopments.
     * @example
     * // Create many InfrastructureDevelopments
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfrastructureDevelopmentCreateManyArgs>(args?: SelectSubset<T, InfrastructureDevelopmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InfrastructureDevelopments and returns the data saved in the database.
     * @param {InfrastructureDevelopmentCreateManyAndReturnArgs} args - Arguments to create many InfrastructureDevelopments.
     * @example
     * // Create many InfrastructureDevelopments
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InfrastructureDevelopments and only return the `id`
     * const infrastructureDevelopmentWithIdOnly = await prisma.infrastructureDevelopment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfrastructureDevelopmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InfrastructureDevelopmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InfrastructureDevelopment.
     * @param {InfrastructureDevelopmentDeleteArgs} args - Arguments to delete one InfrastructureDevelopment.
     * @example
     * // Delete one InfrastructureDevelopment
     * const InfrastructureDevelopment = await prisma.infrastructureDevelopment.delete({
     *   where: {
     *     // ... filter to delete one InfrastructureDevelopment
     *   }
     * })
     * 
     */
    delete<T extends InfrastructureDevelopmentDeleteArgs>(args: SelectSubset<T, InfrastructureDevelopmentDeleteArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfrastructureDevelopment.
     * @param {InfrastructureDevelopmentUpdateArgs} args - Arguments to update one InfrastructureDevelopment.
     * @example
     * // Update one InfrastructureDevelopment
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfrastructureDevelopmentUpdateArgs>(args: SelectSubset<T, InfrastructureDevelopmentUpdateArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfrastructureDevelopments.
     * @param {InfrastructureDevelopmentDeleteManyArgs} args - Arguments to filter InfrastructureDevelopments to delete.
     * @example
     * // Delete a few InfrastructureDevelopments
     * const { count } = await prisma.infrastructureDevelopment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfrastructureDevelopmentDeleteManyArgs>(args?: SelectSubset<T, InfrastructureDevelopmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfrastructureDevelopments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfrastructureDevelopments
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfrastructureDevelopmentUpdateManyArgs>(args: SelectSubset<T, InfrastructureDevelopmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfrastructureDevelopments and returns the data updated in the database.
     * @param {InfrastructureDevelopmentUpdateManyAndReturnArgs} args - Arguments to update many InfrastructureDevelopments.
     * @example
     * // Update many InfrastructureDevelopments
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InfrastructureDevelopments and only return the `id`
     * const infrastructureDevelopmentWithIdOnly = await prisma.infrastructureDevelopment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfrastructureDevelopmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InfrastructureDevelopmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InfrastructureDevelopment.
     * @param {InfrastructureDevelopmentUpsertArgs} args - Arguments to update or create a InfrastructureDevelopment.
     * @example
     * // Update or create a InfrastructureDevelopment
     * const infrastructureDevelopment = await prisma.infrastructureDevelopment.upsert({
     *   create: {
     *     // ... data to create a InfrastructureDevelopment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfrastructureDevelopment we want to update
     *   }
     * })
     */
    upsert<T extends InfrastructureDevelopmentUpsertArgs>(args: SelectSubset<T, InfrastructureDevelopmentUpsertArgs<ExtArgs>>): Prisma__InfrastructureDevelopmentClient<$Result.GetResult<Prisma.$InfrastructureDevelopmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InfrastructureDevelopments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentCountArgs} args - Arguments to filter InfrastructureDevelopments to count.
     * @example
     * // Count the number of InfrastructureDevelopments
     * const count = await prisma.infrastructureDevelopment.count({
     *   where: {
     *     // ... the filter for the InfrastructureDevelopments we want to count
     *   }
     * })
    **/
    count<T extends InfrastructureDevelopmentCountArgs>(
      args?: Subset<T, InfrastructureDevelopmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfrastructureDevelopmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfrastructureDevelopment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfrastructureDevelopmentAggregateArgs>(args: Subset<T, InfrastructureDevelopmentAggregateArgs>): Prisma.PrismaPromise<GetInfrastructureDevelopmentAggregateType<T>>

    /**
     * Group by InfrastructureDevelopment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfrastructureDevelopmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfrastructureDevelopmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfrastructureDevelopmentGroupByArgs['orderBy'] }
        : { orderBy?: InfrastructureDevelopmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfrastructureDevelopmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfrastructureDevelopmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfrastructureDevelopment model
   */
  readonly fields: InfrastructureDevelopmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfrastructureDevelopment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfrastructureDevelopmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarter<T extends QuarterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuarterDefaultArgs<ExtArgs>>): Prisma__QuarterClient<$Result.GetResult<Prisma.$QuarterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InfrastructureDevelopment model
   */
  interface InfrastructureDevelopmentFieldRefs {
    readonly id: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly projectId: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly quarterId: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly target: FieldRef<"InfrastructureDevelopment", 'Int'>
    readonly achieved: FieldRef<"InfrastructureDevelopment", 'Int'>
    readonly district: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly village: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly block: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly remarks: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly imageUrl: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly imageKey: FieldRef<"InfrastructureDevelopment", 'String'>
    readonly createdAt: FieldRef<"InfrastructureDevelopment", 'DateTime'>
    readonly updatedAt: FieldRef<"InfrastructureDevelopment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InfrastructureDevelopment findUnique
   */
  export type InfrastructureDevelopmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * Filter, which InfrastructureDevelopment to fetch.
     */
    where: InfrastructureDevelopmentWhereUniqueInput
  }

  /**
   * InfrastructureDevelopment findUniqueOrThrow
   */
  export type InfrastructureDevelopmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * Filter, which InfrastructureDevelopment to fetch.
     */
    where: InfrastructureDevelopmentWhereUniqueInput
  }

  /**
   * InfrastructureDevelopment findFirst
   */
  export type InfrastructureDevelopmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * Filter, which InfrastructureDevelopment to fetch.
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfrastructureDevelopments to fetch.
     */
    orderBy?: InfrastructureDevelopmentOrderByWithRelationInput | InfrastructureDevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfrastructureDevelopments.
     */
    cursor?: InfrastructureDevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfrastructureDevelopments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfrastructureDevelopments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfrastructureDevelopments.
     */
    distinct?: InfrastructureDevelopmentScalarFieldEnum | InfrastructureDevelopmentScalarFieldEnum[]
  }

  /**
   * InfrastructureDevelopment findFirstOrThrow
   */
  export type InfrastructureDevelopmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * Filter, which InfrastructureDevelopment to fetch.
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfrastructureDevelopments to fetch.
     */
    orderBy?: InfrastructureDevelopmentOrderByWithRelationInput | InfrastructureDevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfrastructureDevelopments.
     */
    cursor?: InfrastructureDevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfrastructureDevelopments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfrastructureDevelopments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfrastructureDevelopments.
     */
    distinct?: InfrastructureDevelopmentScalarFieldEnum | InfrastructureDevelopmentScalarFieldEnum[]
  }

  /**
   * InfrastructureDevelopment findMany
   */
  export type InfrastructureDevelopmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * Filter, which InfrastructureDevelopments to fetch.
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfrastructureDevelopments to fetch.
     */
    orderBy?: InfrastructureDevelopmentOrderByWithRelationInput | InfrastructureDevelopmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfrastructureDevelopments.
     */
    cursor?: InfrastructureDevelopmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfrastructureDevelopments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfrastructureDevelopments.
     */
    skip?: number
    distinct?: InfrastructureDevelopmentScalarFieldEnum | InfrastructureDevelopmentScalarFieldEnum[]
  }

  /**
   * InfrastructureDevelopment create
   */
  export type InfrastructureDevelopmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * The data needed to create a InfrastructureDevelopment.
     */
    data: XOR<InfrastructureDevelopmentCreateInput, InfrastructureDevelopmentUncheckedCreateInput>
  }

  /**
   * InfrastructureDevelopment createMany
   */
  export type InfrastructureDevelopmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfrastructureDevelopments.
     */
    data: InfrastructureDevelopmentCreateManyInput | InfrastructureDevelopmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfrastructureDevelopment createManyAndReturn
   */
  export type InfrastructureDevelopmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * The data used to create many InfrastructureDevelopments.
     */
    data: InfrastructureDevelopmentCreateManyInput | InfrastructureDevelopmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InfrastructureDevelopment update
   */
  export type InfrastructureDevelopmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * The data needed to update a InfrastructureDevelopment.
     */
    data: XOR<InfrastructureDevelopmentUpdateInput, InfrastructureDevelopmentUncheckedUpdateInput>
    /**
     * Choose, which InfrastructureDevelopment to update.
     */
    where: InfrastructureDevelopmentWhereUniqueInput
  }

  /**
   * InfrastructureDevelopment updateMany
   */
  export type InfrastructureDevelopmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfrastructureDevelopments.
     */
    data: XOR<InfrastructureDevelopmentUpdateManyMutationInput, InfrastructureDevelopmentUncheckedUpdateManyInput>
    /**
     * Filter which InfrastructureDevelopments to update
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * Limit how many InfrastructureDevelopments to update.
     */
    limit?: number
  }

  /**
   * InfrastructureDevelopment updateManyAndReturn
   */
  export type InfrastructureDevelopmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * The data used to update InfrastructureDevelopments.
     */
    data: XOR<InfrastructureDevelopmentUpdateManyMutationInput, InfrastructureDevelopmentUncheckedUpdateManyInput>
    /**
     * Filter which InfrastructureDevelopments to update
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * Limit how many InfrastructureDevelopments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InfrastructureDevelopment upsert
   */
  export type InfrastructureDevelopmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * The filter to search for the InfrastructureDevelopment to update in case it exists.
     */
    where: InfrastructureDevelopmentWhereUniqueInput
    /**
     * In case the InfrastructureDevelopment found by the `where` argument doesn't exist, create a new InfrastructureDevelopment with this data.
     */
    create: XOR<InfrastructureDevelopmentCreateInput, InfrastructureDevelopmentUncheckedCreateInput>
    /**
     * In case the InfrastructureDevelopment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfrastructureDevelopmentUpdateInput, InfrastructureDevelopmentUncheckedUpdateInput>
  }

  /**
   * InfrastructureDevelopment delete
   */
  export type InfrastructureDevelopmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
    /**
     * Filter which InfrastructureDevelopment to delete.
     */
    where: InfrastructureDevelopmentWhereUniqueInput
  }

  /**
   * InfrastructureDevelopment deleteMany
   */
  export type InfrastructureDevelopmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfrastructureDevelopments to delete
     */
    where?: InfrastructureDevelopmentWhereInput
    /**
     * Limit how many InfrastructureDevelopments to delete.
     */
    limit?: number
  }

  /**
   * InfrastructureDevelopment without action
   */
  export type InfrastructureDevelopmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfrastructureDevelopment
     */
    select?: InfrastructureDevelopmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfrastructureDevelopment
     */
    omit?: InfrastructureDevelopmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfrastructureDevelopmentInclude<ExtArgs> | null
  }


  /**
   * Model UpcomingEvent
   */

  export type AggregateUpcomingEvent = {
    _count: UpcomingEventCountAggregateOutputType | null
    _min: UpcomingEventMinAggregateOutputType | null
    _max: UpcomingEventMaxAggregateOutputType | null
  }

  export type UpcomingEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    location: string | null
    description: string | null
  }

  export type UpcomingEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    location: string | null
    description: string | null
  }

  export type UpcomingEventCountAggregateOutputType = {
    id: number
    title: number
    date: number
    location: number
    description: number
    _all: number
  }


  export type UpcomingEventMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    location?: true
    description?: true
  }

  export type UpcomingEventMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    location?: true
    description?: true
  }

  export type UpcomingEventCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    location?: true
    description?: true
    _all?: true
  }

  export type UpcomingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpcomingEvent to aggregate.
     */
    where?: UpcomingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingEvents to fetch.
     */
    orderBy?: UpcomingEventOrderByWithRelationInput | UpcomingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpcomingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpcomingEvents
    **/
    _count?: true | UpcomingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpcomingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpcomingEventMaxAggregateInputType
  }

  export type GetUpcomingEventAggregateType<T extends UpcomingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUpcomingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpcomingEvent[P]>
      : GetScalarType<T[P], AggregateUpcomingEvent[P]>
  }




  export type UpcomingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpcomingEventWhereInput
    orderBy?: UpcomingEventOrderByWithAggregationInput | UpcomingEventOrderByWithAggregationInput[]
    by: UpcomingEventScalarFieldEnum[] | UpcomingEventScalarFieldEnum
    having?: UpcomingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpcomingEventCountAggregateInputType | true
    _min?: UpcomingEventMinAggregateInputType
    _max?: UpcomingEventMaxAggregateInputType
  }

  export type UpcomingEventGroupByOutputType = {
    id: string
    title: string
    date: Date
    location: string
    description: string | null
    _count: UpcomingEventCountAggregateOutputType | null
    _min: UpcomingEventMinAggregateOutputType | null
    _max: UpcomingEventMaxAggregateOutputType | null
  }

  type GetUpcomingEventGroupByPayload<T extends UpcomingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpcomingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpcomingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpcomingEventGroupByOutputType[P]>
            : GetScalarType<T[P], UpcomingEventGroupByOutputType[P]>
        }
      >
    >


  export type UpcomingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
  }, ExtArgs["result"]["upcomingEvent"]>

  export type UpcomingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
  }, ExtArgs["result"]["upcomingEvent"]>

  export type UpcomingEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
  }, ExtArgs["result"]["upcomingEvent"]>

  export type UpcomingEventSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
  }

  export type UpcomingEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "location" | "description", ExtArgs["result"]["upcomingEvent"]>

  export type $UpcomingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpcomingEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: Date
      location: string
      description: string | null
    }, ExtArgs["result"]["upcomingEvent"]>
    composites: {}
  }

  type UpcomingEventGetPayload<S extends boolean | null | undefined | UpcomingEventDefaultArgs> = $Result.GetResult<Prisma.$UpcomingEventPayload, S>

  type UpcomingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpcomingEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpcomingEventCountAggregateInputType | true
    }

  export interface UpcomingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpcomingEvent'], meta: { name: 'UpcomingEvent' } }
    /**
     * Find zero or one UpcomingEvent that matches the filter.
     * @param {UpcomingEventFindUniqueArgs} args - Arguments to find a UpcomingEvent
     * @example
     * // Get one UpcomingEvent
     * const upcomingEvent = await prisma.upcomingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpcomingEventFindUniqueArgs>(args: SelectSubset<T, UpcomingEventFindUniqueArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpcomingEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpcomingEventFindUniqueOrThrowArgs} args - Arguments to find a UpcomingEvent
     * @example
     * // Get one UpcomingEvent
     * const upcomingEvent = await prisma.upcomingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpcomingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UpcomingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpcomingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventFindFirstArgs} args - Arguments to find a UpcomingEvent
     * @example
     * // Get one UpcomingEvent
     * const upcomingEvent = await prisma.upcomingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpcomingEventFindFirstArgs>(args?: SelectSubset<T, UpcomingEventFindFirstArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpcomingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventFindFirstOrThrowArgs} args - Arguments to find a UpcomingEvent
     * @example
     * // Get one UpcomingEvent
     * const upcomingEvent = await prisma.upcomingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpcomingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UpcomingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpcomingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpcomingEvents
     * const upcomingEvents = await prisma.upcomingEvent.findMany()
     * 
     * // Get first 10 UpcomingEvents
     * const upcomingEvents = await prisma.upcomingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upcomingEventWithIdOnly = await prisma.upcomingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpcomingEventFindManyArgs>(args?: SelectSubset<T, UpcomingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpcomingEvent.
     * @param {UpcomingEventCreateArgs} args - Arguments to create a UpcomingEvent.
     * @example
     * // Create one UpcomingEvent
     * const UpcomingEvent = await prisma.upcomingEvent.create({
     *   data: {
     *     // ... data to create a UpcomingEvent
     *   }
     * })
     * 
     */
    create<T extends UpcomingEventCreateArgs>(args: SelectSubset<T, UpcomingEventCreateArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpcomingEvents.
     * @param {UpcomingEventCreateManyArgs} args - Arguments to create many UpcomingEvents.
     * @example
     * // Create many UpcomingEvents
     * const upcomingEvent = await prisma.upcomingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpcomingEventCreateManyArgs>(args?: SelectSubset<T, UpcomingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpcomingEvents and returns the data saved in the database.
     * @param {UpcomingEventCreateManyAndReturnArgs} args - Arguments to create many UpcomingEvents.
     * @example
     * // Create many UpcomingEvents
     * const upcomingEvent = await prisma.upcomingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpcomingEvents and only return the `id`
     * const upcomingEventWithIdOnly = await prisma.upcomingEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpcomingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, UpcomingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpcomingEvent.
     * @param {UpcomingEventDeleteArgs} args - Arguments to delete one UpcomingEvent.
     * @example
     * // Delete one UpcomingEvent
     * const UpcomingEvent = await prisma.upcomingEvent.delete({
     *   where: {
     *     // ... filter to delete one UpcomingEvent
     *   }
     * })
     * 
     */
    delete<T extends UpcomingEventDeleteArgs>(args: SelectSubset<T, UpcomingEventDeleteArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpcomingEvent.
     * @param {UpcomingEventUpdateArgs} args - Arguments to update one UpcomingEvent.
     * @example
     * // Update one UpcomingEvent
     * const upcomingEvent = await prisma.upcomingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpcomingEventUpdateArgs>(args: SelectSubset<T, UpcomingEventUpdateArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpcomingEvents.
     * @param {UpcomingEventDeleteManyArgs} args - Arguments to filter UpcomingEvents to delete.
     * @example
     * // Delete a few UpcomingEvents
     * const { count } = await prisma.upcomingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpcomingEventDeleteManyArgs>(args?: SelectSubset<T, UpcomingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpcomingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpcomingEvents
     * const upcomingEvent = await prisma.upcomingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpcomingEventUpdateManyArgs>(args: SelectSubset<T, UpcomingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpcomingEvents and returns the data updated in the database.
     * @param {UpcomingEventUpdateManyAndReturnArgs} args - Arguments to update many UpcomingEvents.
     * @example
     * // Update many UpcomingEvents
     * const upcomingEvent = await prisma.upcomingEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpcomingEvents and only return the `id`
     * const upcomingEventWithIdOnly = await prisma.upcomingEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpcomingEventUpdateManyAndReturnArgs>(args: SelectSubset<T, UpcomingEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpcomingEvent.
     * @param {UpcomingEventUpsertArgs} args - Arguments to update or create a UpcomingEvent.
     * @example
     * // Update or create a UpcomingEvent
     * const upcomingEvent = await prisma.upcomingEvent.upsert({
     *   create: {
     *     // ... data to create a UpcomingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpcomingEvent we want to update
     *   }
     * })
     */
    upsert<T extends UpcomingEventUpsertArgs>(args: SelectSubset<T, UpcomingEventUpsertArgs<ExtArgs>>): Prisma__UpcomingEventClient<$Result.GetResult<Prisma.$UpcomingEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpcomingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventCountArgs} args - Arguments to filter UpcomingEvents to count.
     * @example
     * // Count the number of UpcomingEvents
     * const count = await prisma.upcomingEvent.count({
     *   where: {
     *     // ... the filter for the UpcomingEvents we want to count
     *   }
     * })
    **/
    count<T extends UpcomingEventCountArgs>(
      args?: Subset<T, UpcomingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpcomingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpcomingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpcomingEventAggregateArgs>(args: Subset<T, UpcomingEventAggregateArgs>): Prisma.PrismaPromise<GetUpcomingEventAggregateType<T>>

    /**
     * Group by UpcomingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpcomingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpcomingEventGroupByArgs['orderBy'] }
        : { orderBy?: UpcomingEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpcomingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpcomingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpcomingEvent model
   */
  readonly fields: UpcomingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpcomingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpcomingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpcomingEvent model
   */
  interface UpcomingEventFieldRefs {
    readonly id: FieldRef<"UpcomingEvent", 'String'>
    readonly title: FieldRef<"UpcomingEvent", 'String'>
    readonly date: FieldRef<"UpcomingEvent", 'DateTime'>
    readonly location: FieldRef<"UpcomingEvent", 'String'>
    readonly description: FieldRef<"UpcomingEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UpcomingEvent findUnique
   */
  export type UpcomingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingEvent to fetch.
     */
    where: UpcomingEventWhereUniqueInput
  }

  /**
   * UpcomingEvent findUniqueOrThrow
   */
  export type UpcomingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingEvent to fetch.
     */
    where: UpcomingEventWhereUniqueInput
  }

  /**
   * UpcomingEvent findFirst
   */
  export type UpcomingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingEvent to fetch.
     */
    where?: UpcomingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingEvents to fetch.
     */
    orderBy?: UpcomingEventOrderByWithRelationInput | UpcomingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpcomingEvents.
     */
    cursor?: UpcomingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpcomingEvents.
     */
    distinct?: UpcomingEventScalarFieldEnum | UpcomingEventScalarFieldEnum[]
  }

  /**
   * UpcomingEvent findFirstOrThrow
   */
  export type UpcomingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingEvent to fetch.
     */
    where?: UpcomingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingEvents to fetch.
     */
    orderBy?: UpcomingEventOrderByWithRelationInput | UpcomingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpcomingEvents.
     */
    cursor?: UpcomingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpcomingEvents.
     */
    distinct?: UpcomingEventScalarFieldEnum | UpcomingEventScalarFieldEnum[]
  }

  /**
   * UpcomingEvent findMany
   */
  export type UpcomingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingEvents to fetch.
     */
    where?: UpcomingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingEvents to fetch.
     */
    orderBy?: UpcomingEventOrderByWithRelationInput | UpcomingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpcomingEvents.
     */
    cursor?: UpcomingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingEvents.
     */
    skip?: number
    distinct?: UpcomingEventScalarFieldEnum | UpcomingEventScalarFieldEnum[]
  }

  /**
   * UpcomingEvent create
   */
  export type UpcomingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * The data needed to create a UpcomingEvent.
     */
    data: XOR<UpcomingEventCreateInput, UpcomingEventUncheckedCreateInput>
  }

  /**
   * UpcomingEvent createMany
   */
  export type UpcomingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpcomingEvents.
     */
    data: UpcomingEventCreateManyInput | UpcomingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpcomingEvent createManyAndReturn
   */
  export type UpcomingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * The data used to create many UpcomingEvents.
     */
    data: UpcomingEventCreateManyInput | UpcomingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpcomingEvent update
   */
  export type UpcomingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * The data needed to update a UpcomingEvent.
     */
    data: XOR<UpcomingEventUpdateInput, UpcomingEventUncheckedUpdateInput>
    /**
     * Choose, which UpcomingEvent to update.
     */
    where: UpcomingEventWhereUniqueInput
  }

  /**
   * UpcomingEvent updateMany
   */
  export type UpcomingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpcomingEvents.
     */
    data: XOR<UpcomingEventUpdateManyMutationInput, UpcomingEventUncheckedUpdateManyInput>
    /**
     * Filter which UpcomingEvents to update
     */
    where?: UpcomingEventWhereInput
    /**
     * Limit how many UpcomingEvents to update.
     */
    limit?: number
  }

  /**
   * UpcomingEvent updateManyAndReturn
   */
  export type UpcomingEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * The data used to update UpcomingEvents.
     */
    data: XOR<UpcomingEventUpdateManyMutationInput, UpcomingEventUncheckedUpdateManyInput>
    /**
     * Filter which UpcomingEvents to update
     */
    where?: UpcomingEventWhereInput
    /**
     * Limit how many UpcomingEvents to update.
     */
    limit?: number
  }

  /**
   * UpcomingEvent upsert
   */
  export type UpcomingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * The filter to search for the UpcomingEvent to update in case it exists.
     */
    where: UpcomingEventWhereUniqueInput
    /**
     * In case the UpcomingEvent found by the `where` argument doesn't exist, create a new UpcomingEvent with this data.
     */
    create: XOR<UpcomingEventCreateInput, UpcomingEventUncheckedCreateInput>
    /**
     * In case the UpcomingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpcomingEventUpdateInput, UpcomingEventUncheckedUpdateInput>
  }

  /**
   * UpcomingEvent delete
   */
  export type UpcomingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
    /**
     * Filter which UpcomingEvent to delete.
     */
    where: UpcomingEventWhereUniqueInput
  }

  /**
   * UpcomingEvent deleteMany
   */
  export type UpcomingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpcomingEvents to delete
     */
    where?: UpcomingEventWhereInput
    /**
     * Limit how many UpcomingEvents to delete.
     */
    limit?: number
  }

  /**
   * UpcomingEvent without action
   */
  export type UpcomingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingEvent
     */
    select?: UpcomingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingEvent
     */
    omit?: UpcomingEventOmit<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    category: string | null
    thumbnailUrl: string | null
    thumbnailKey: string | null
    pdfUrl: string | null
    pdfKey: string | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    category: string | null
    thumbnailUrl: string | null
    thumbnailKey: string | null
    pdfUrl: string | null
    pdfKey: string | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    title: number
    type: number
    category: number
    thumbnailUrl: number
    thumbnailKey: number
    pdfUrl: number
    pdfKey: number
    _all: number
  }


  export type PublicationMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    thumbnailUrl?: true
    thumbnailKey?: true
    pdfUrl?: true
    pdfKey?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    thumbnailUrl?: true
    thumbnailKey?: true
    pdfUrl?: true
    pdfKey?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    thumbnailUrl?: true
    thumbnailKey?: true
    pdfUrl?: true
    pdfKey?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: string
    title: string
    type: string
    category: string | null
    thumbnailUrl: string | null
    thumbnailKey: string | null
    pdfUrl: string | null
    pdfKey: string | null
    _count: PublicationCountAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
  }

  export type PublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "category" | "thumbnailUrl" | "thumbnailKey" | "pdfUrl" | "pdfKey", ExtArgs["result"]["publication"]>

  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      category: string | null
      thumbnailUrl: string | null
      thumbnailKey: string | null
      pdfUrl: string | null
      pdfKey: string | null
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {PublicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications and returns the data updated in the database.
     * @param {PublicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publication model
   */
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'String'>
    readonly title: FieldRef<"Publication", 'String'>
    readonly type: FieldRef<"Publication", 'String'>
    readonly category: FieldRef<"Publication", 'String'>
    readonly thumbnailUrl: FieldRef<"Publication", 'String'>
    readonly thumbnailKey: FieldRef<"Publication", 'String'>
    readonly pdfUrl: FieldRef<"Publication", 'String'>
    readonly pdfKey: FieldRef<"Publication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication createManyAndReturn
   */
  export type PublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication updateManyAndReturn
   */
  export type PublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to delete.
     */
    limit?: number
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
  }


  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    imageKey: string | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    imageKey: string | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    imageKey: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    imageKey?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    imageKey?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    imageKey?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: string
    title: string
    imageUrl: string
    imageKey: string
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    imageKey?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    imageKey?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    imageKey?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    imageKey?: boolean
  }

  export type GalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageUrl" | "imageKey", ExtArgs["result"]["gallery"]>

  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      imageUrl: string
      imageKey: string
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryFindManyArgs>(args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends GalleryCreateArgs>(args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCreateManyArgs>(args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galleries and returns the data saved in the database.
     * @param {GalleryCreateManyAndReturnArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends GalleryDeleteArgs>(args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryUpdateArgs>(args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryDeleteManyArgs>(args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryUpdateManyArgs>(args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries and returns the data updated in the database.
     * @param {GalleryUpdateManyAndReturnArgs} args - Arguments to update many Galleries.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'String'>
    readonly title: FieldRef<"Gallery", 'String'>
    readonly imageUrl: FieldRef<"Gallery", 'String'>
    readonly imageKey: FieldRef<"Gallery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery createManyAndReturn
   */
  export type GalleryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery updateManyAndReturn
   */
  export type GalleryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number
  }

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
  }


  /**
   * Model ProjectDetails
   */

  export type AggregateProjectDetails = {
    _count: ProjectDetailsCountAggregateOutputType | null
    _avg: ProjectDetailsAvgAggregateOutputType | null
    _sum: ProjectDetailsSumAggregateOutputType | null
    _min: ProjectDetailsMinAggregateOutputType | null
    _max: ProjectDetailsMaxAggregateOutputType | null
  }

  export type ProjectDetailsAvgAggregateOutputType = {
    year: number | null
    budget: number | null
  }

  export type ProjectDetailsSumAggregateOutputType = {
    year: number | null
    budget: number | null
  }

  export type ProjectDetailsMinAggregateOutputType = {
    id: string | null
    title: string | null
    region: string | null
    year: number | null
    budget: number | null
    center: string | null
    location: string | null
    director: string | null
  }

  export type ProjectDetailsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    region: string | null
    year: number | null
    budget: number | null
    center: string | null
    location: string | null
    director: string | null
  }

  export type ProjectDetailsCountAggregateOutputType = {
    id: number
    title: number
    region: number
    year: number
    budget: number
    center: number
    location: number
    objectives: number
    director: number
    coDirectors: number
    achievements: number
    _all: number
  }


  export type ProjectDetailsAvgAggregateInputType = {
    year?: true
    budget?: true
  }

  export type ProjectDetailsSumAggregateInputType = {
    year?: true
    budget?: true
  }

  export type ProjectDetailsMinAggregateInputType = {
    id?: true
    title?: true
    region?: true
    year?: true
    budget?: true
    center?: true
    location?: true
    director?: true
  }

  export type ProjectDetailsMaxAggregateInputType = {
    id?: true
    title?: true
    region?: true
    year?: true
    budget?: true
    center?: true
    location?: true
    director?: true
  }

  export type ProjectDetailsCountAggregateInputType = {
    id?: true
    title?: true
    region?: true
    year?: true
    budget?: true
    center?: true
    location?: true
    objectives?: true
    director?: true
    coDirectors?: true
    achievements?: true
    _all?: true
  }

  export type ProjectDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to aggregate.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDetails
    **/
    _count?: true | ProjectDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDetailsMaxAggregateInputType
  }

  export type GetProjectDetailsAggregateType<T extends ProjectDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDetails[P]>
      : GetScalarType<T[P], AggregateProjectDetails[P]>
  }




  export type ProjectDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDetailsWhereInput
    orderBy?: ProjectDetailsOrderByWithAggregationInput | ProjectDetailsOrderByWithAggregationInput[]
    by: ProjectDetailsScalarFieldEnum[] | ProjectDetailsScalarFieldEnum
    having?: ProjectDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDetailsCountAggregateInputType | true
    _avg?: ProjectDetailsAvgAggregateInputType
    _sum?: ProjectDetailsSumAggregateInputType
    _min?: ProjectDetailsMinAggregateInputType
    _max?: ProjectDetailsMaxAggregateInputType
  }

  export type ProjectDetailsGroupByOutputType = {
    id: string
    title: string
    region: string
    year: number
    budget: number | null
    center: string | null
    location: string | null
    objectives: string[]
    director: string
    coDirectors: string[]
    achievements: string[]
    _count: ProjectDetailsCountAggregateOutputType | null
    _avg: ProjectDetailsAvgAggregateOutputType | null
    _sum: ProjectDetailsSumAggregateOutputType | null
    _min: ProjectDetailsMinAggregateOutputType | null
    _max: ProjectDetailsMaxAggregateOutputType | null
  }

  type GetProjectDetailsGroupByPayload<T extends ProjectDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    region?: boolean
    year?: boolean
    budget?: boolean
    center?: boolean
    location?: boolean
    objectives?: boolean
    director?: boolean
    coDirectors?: boolean
    achievements?: boolean
  }, ExtArgs["result"]["projectDetails"]>

  export type ProjectDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    region?: boolean
    year?: boolean
    budget?: boolean
    center?: boolean
    location?: boolean
    objectives?: boolean
    director?: boolean
    coDirectors?: boolean
    achievements?: boolean
  }, ExtArgs["result"]["projectDetails"]>

  export type ProjectDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    region?: boolean
    year?: boolean
    budget?: boolean
    center?: boolean
    location?: boolean
    objectives?: boolean
    director?: boolean
    coDirectors?: boolean
    achievements?: boolean
  }, ExtArgs["result"]["projectDetails"]>

  export type ProjectDetailsSelectScalar = {
    id?: boolean
    title?: boolean
    region?: boolean
    year?: boolean
    budget?: boolean
    center?: boolean
    location?: boolean
    objectives?: boolean
    director?: boolean
    coDirectors?: boolean
    achievements?: boolean
  }

  export type ProjectDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "region" | "year" | "budget" | "center" | "location" | "objectives" | "director" | "coDirectors" | "achievements", ExtArgs["result"]["projectDetails"]>

  export type $ProjectDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      region: string
      year: number
      budget: number | null
      center: string | null
      location: string | null
      objectives: string[]
      director: string
      coDirectors: string[]
      achievements: string[]
    }, ExtArgs["result"]["projectDetails"]>
    composites: {}
  }

  type ProjectDetailsGetPayload<S extends boolean | null | undefined | ProjectDetailsDefaultArgs> = $Result.GetResult<Prisma.$ProjectDetailsPayload, S>

  type ProjectDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDetailsCountAggregateInputType | true
    }

  export interface ProjectDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDetails'], meta: { name: 'ProjectDetails' } }
    /**
     * Find zero or one ProjectDetails that matches the filter.
     * @param {ProjectDetailsFindUniqueArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDetailsFindUniqueArgs>(args: SelectSubset<T, ProjectDetailsFindUniqueArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDetailsFindUniqueOrThrowArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsFindFirstArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDetailsFindFirstArgs>(args?: SelectSubset<T, ProjectDetailsFindFirstArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsFindFirstOrThrowArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDetails
     * const projectDetails = await prisma.projectDetails.findMany()
     * 
     * // Get first 10 ProjectDetails
     * const projectDetails = await prisma.projectDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDetailsWithIdOnly = await prisma.projectDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDetailsFindManyArgs>(args?: SelectSubset<T, ProjectDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDetails.
     * @param {ProjectDetailsCreateArgs} args - Arguments to create a ProjectDetails.
     * @example
     * // Create one ProjectDetails
     * const ProjectDetails = await prisma.projectDetails.create({
     *   data: {
     *     // ... data to create a ProjectDetails
     *   }
     * })
     * 
     */
    create<T extends ProjectDetailsCreateArgs>(args: SelectSubset<T, ProjectDetailsCreateArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDetails.
     * @param {ProjectDetailsCreateManyArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetails = await prisma.projectDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDetailsCreateManyArgs>(args?: SelectSubset<T, ProjectDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDetails and returns the data saved in the database.
     * @param {ProjectDetailsCreateManyAndReturnArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetails = await prisma.projectDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDetails and only return the `id`
     * const projectDetailsWithIdOnly = await prisma.projectDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectDetails.
     * @param {ProjectDetailsDeleteArgs} args - Arguments to delete one ProjectDetails.
     * @example
     * // Delete one ProjectDetails
     * const ProjectDetails = await prisma.projectDetails.delete({
     *   where: {
     *     // ... filter to delete one ProjectDetails
     *   }
     * })
     * 
     */
    delete<T extends ProjectDetailsDeleteArgs>(args: SelectSubset<T, ProjectDetailsDeleteArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDetails.
     * @param {ProjectDetailsUpdateArgs} args - Arguments to update one ProjectDetails.
     * @example
     * // Update one ProjectDetails
     * const projectDetails = await prisma.projectDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDetailsUpdateArgs>(args: SelectSubset<T, ProjectDetailsUpdateArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDetails.
     * @param {ProjectDetailsDeleteManyArgs} args - Arguments to filter ProjectDetails to delete.
     * @example
     * // Delete a few ProjectDetails
     * const { count } = await prisma.projectDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDetailsDeleteManyArgs>(args?: SelectSubset<T, ProjectDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDetails
     * const projectDetails = await prisma.projectDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDetailsUpdateManyArgs>(args: SelectSubset<T, ProjectDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails and returns the data updated in the database.
     * @param {ProjectDetailsUpdateManyAndReturnArgs} args - Arguments to update many ProjectDetails.
     * @example
     * // Update many ProjectDetails
     * const projectDetails = await prisma.projectDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectDetails and only return the `id`
     * const projectDetailsWithIdOnly = await prisma.projectDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectDetails.
     * @param {ProjectDetailsUpsertArgs} args - Arguments to update or create a ProjectDetails.
     * @example
     * // Update or create a ProjectDetails
     * const projectDetails = await prisma.projectDetails.upsert({
     *   create: {
     *     // ... data to create a ProjectDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDetails we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDetailsUpsertArgs>(args: SelectSubset<T, ProjectDetailsUpsertArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsCountArgs} args - Arguments to filter ProjectDetails to count.
     * @example
     * // Count the number of ProjectDetails
     * const count = await prisma.projectDetails.count({
     *   where: {
     *     // ... the filter for the ProjectDetails we want to count
     *   }
     * })
    **/
    count<T extends ProjectDetailsCountArgs>(
      args?: Subset<T, ProjectDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectDetailsAggregateArgs>(args: Subset<T, ProjectDetailsAggregateArgs>): Prisma.PrismaPromise<GetProjectDetailsAggregateType<T>>

    /**
     * Group by ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDetails model
   */
  readonly fields: ProjectDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectDetails model
   */
  interface ProjectDetailsFieldRefs {
    readonly id: FieldRef<"ProjectDetails", 'String'>
    readonly title: FieldRef<"ProjectDetails", 'String'>
    readonly region: FieldRef<"ProjectDetails", 'String'>
    readonly year: FieldRef<"ProjectDetails", 'Int'>
    readonly budget: FieldRef<"ProjectDetails", 'Float'>
    readonly center: FieldRef<"ProjectDetails", 'String'>
    readonly location: FieldRef<"ProjectDetails", 'String'>
    readonly objectives: FieldRef<"ProjectDetails", 'String[]'>
    readonly director: FieldRef<"ProjectDetails", 'String'>
    readonly coDirectors: FieldRef<"ProjectDetails", 'String[]'>
    readonly achievements: FieldRef<"ProjectDetails", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDetails findUnique
   */
  export type ProjectDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails findUniqueOrThrow
   */
  export type ProjectDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails findFirst
   */
  export type ProjectDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailsScalarFieldEnum | ProjectDetailsScalarFieldEnum[]
  }

  /**
   * ProjectDetails findFirstOrThrow
   */
  export type ProjectDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailsScalarFieldEnum | ProjectDetailsScalarFieldEnum[]
  }

  /**
   * ProjectDetails findMany
   */
  export type ProjectDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDetails.
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    distinct?: ProjectDetailsScalarFieldEnum | ProjectDetailsScalarFieldEnum[]
  }

  /**
   * ProjectDetails create
   */
  export type ProjectDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data needed to create a ProjectDetails.
     */
    data: XOR<ProjectDetailsCreateInput, ProjectDetailsUncheckedCreateInput>
  }

  /**
   * ProjectDetails createMany
   */
  export type ProjectDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailsCreateManyInput | ProjectDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetails createManyAndReturn
   */
  export type ProjectDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailsCreateManyInput | ProjectDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetails update
   */
  export type ProjectDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data needed to update a ProjectDetails.
     */
    data: XOR<ProjectDetailsUpdateInput, ProjectDetailsUncheckedUpdateInput>
    /**
     * Choose, which ProjectDetails to update.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails updateMany
   */
  export type ProjectDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailsUpdateManyMutationInput, ProjectDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailsWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
  }

  /**
   * ProjectDetails updateManyAndReturn
   */
  export type ProjectDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailsUpdateManyMutationInput, ProjectDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailsWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
  }

  /**
   * ProjectDetails upsert
   */
  export type ProjectDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The filter to search for the ProjectDetails to update in case it exists.
     */
    where: ProjectDetailsWhereUniqueInput
    /**
     * In case the ProjectDetails found by the `where` argument doesn't exist, create a new ProjectDetails with this data.
     */
    create: XOR<ProjectDetailsCreateInput, ProjectDetailsUncheckedCreateInput>
    /**
     * In case the ProjectDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDetailsUpdateInput, ProjectDetailsUncheckedUpdateInput>
  }

  /**
   * ProjectDetails delete
   */
  export type ProjectDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter which ProjectDetails to delete.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails deleteMany
   */
  export type ProjectDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to delete
     */
    where?: ProjectDetailsWhereInput
    /**
     * Limit how many ProjectDetails to delete.
     */
    limit?: number
  }

  /**
   * ProjectDetails without action
   */
  export type ProjectDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    implementingAgency: 'implementingAgency',
    title: 'title',
    locationState: 'locationState',
    director: 'director',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const QuarterScalarFieldEnum: {
    id: 'id',
    number: 'number',
    year: 'year'
  };

  export type QuarterScalarFieldEnum = (typeof QuarterScalarFieldEnum)[keyof typeof QuarterScalarFieldEnum]


  export const InputDistributionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    quarterId: 'quarterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InputDistributionScalarFieldEnum = (typeof InputDistributionScalarFieldEnum)[keyof typeof InputDistributionScalarFieldEnum]


  export const PredefinedInputDistributionScalarFieldEnum: {
    id: 'id',
    inputDistributionId: 'inputDistributionId',
    activityType: 'activityType',
    name: 'name',
    target: 'target',
    achieved: 'achieved',
    district: 'district',
    village: 'village',
    block: 'block',
    remarks: 'remarks',
    units: 'units',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PredefinedInputDistributionScalarFieldEnum = (typeof PredefinedInputDistributionScalarFieldEnum)[keyof typeof PredefinedInputDistributionScalarFieldEnum]


  export const CustomInputDistributionScalarFieldEnum: {
    id: 'id',
    inputDistributionId: 'inputDistributionId',
    activityType: 'activityType',
    name: 'name',
    target: 'target',
    achieved: 'achieved',
    district: 'district',
    village: 'village',
    block: 'block',
    remarks: 'remarks',
    units: 'units',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomInputDistributionScalarFieldEnum = (typeof CustomInputDistributionScalarFieldEnum)[keyof typeof CustomInputDistributionScalarFieldEnum]


  export const TrainingScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    quarterId: 'quarterId',
    title: 'title',
    target: 'target',
    achieved: 'achieved',
    district: 'district',
    village: 'village',
    block: 'block',
    beneficiaryMale: 'beneficiaryMale',
    beneficiaryFemale: 'beneficiaryFemale',
    remarks: 'remarks',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    pdfUrl: 'pdfUrl',
    pdfKey: 'pdfKey',
    units: 'units',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainingScalarFieldEnum = (typeof TrainingScalarFieldEnum)[keyof typeof TrainingScalarFieldEnum]


  export const FLDScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    quarterId: 'quarterId',
    target: 'target',
    achieved: 'achieved',
    units: 'units',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FLDScalarFieldEnum = (typeof FLDScalarFieldEnum)[keyof typeof FLDScalarFieldEnum]


  export const AwarenessProgramScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    quarterId: 'quarterId',
    title: 'title',
    target: 'target',
    achieved: 'achieved',
    district: 'district',
    village: 'village',
    block: 'block',
    beneficiaryMale: 'beneficiaryMale',
    beneficiaryFemale: 'beneficiaryFemale',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    units: 'units',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AwarenessProgramScalarFieldEnum = (typeof AwarenessProgramScalarFieldEnum)[keyof typeof AwarenessProgramScalarFieldEnum]


  export const InfrastructureDevelopmentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    quarterId: 'quarterId',
    target: 'target',
    achieved: 'achieved',
    district: 'district',
    village: 'village',
    block: 'block',
    remarks: 'remarks',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InfrastructureDevelopmentScalarFieldEnum = (typeof InfrastructureDevelopmentScalarFieldEnum)[keyof typeof InfrastructureDevelopmentScalarFieldEnum]


  export const UpcomingEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    location: 'location',
    description: 'description'
  };

  export type UpcomingEventScalarFieldEnum = (typeof UpcomingEventScalarFieldEnum)[keyof typeof UpcomingEventScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    category: 'category',
    thumbnailUrl: 'thumbnailUrl',
    thumbnailKey: 'thumbnailKey',
    pdfUrl: 'pdfUrl',
    pdfKey: 'pdfKey'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const ProjectDetailsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    region: 'region',
    year: 'year',
    budget: 'budget',
    center: 'center',
    location: 'location',
    objectives: 'objectives',
    director: 'director',
    coDirectors: 'coDirectors',
    achievements: 'achievements'
  };

  export type ProjectDetailsScalarFieldEnum = (typeof ProjectDetailsScalarFieldEnum)[keyof typeof ProjectDetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    implementingAgency?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    locationState?: StringFilter<"Project"> | string
    director?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    trainings?: TrainingListRelationFilter
    flds?: FLDListRelationFilter
    awarenessPrograms?: AwarenessProgramListRelationFilter
    infrastructureDevelopments?: InfrastructureDevelopmentListRelationFilter
    inputDistributions?: InputDistributionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    implementingAgency?: SortOrder
    title?: SortOrder
    locationState?: SortOrder
    director?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainings?: TrainingOrderByRelationAggregateInput
    flds?: FLDOrderByRelationAggregateInput
    awarenessPrograms?: AwarenessProgramOrderByRelationAggregateInput
    infrastructureDevelopments?: InfrastructureDevelopmentOrderByRelationAggregateInput
    inputDistributions?: InputDistributionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    implementingAgency?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    locationState?: StringFilter<"Project"> | string
    director?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    trainings?: TrainingListRelationFilter
    flds?: FLDListRelationFilter
    awarenessPrograms?: AwarenessProgramListRelationFilter
    infrastructureDevelopments?: InfrastructureDevelopmentListRelationFilter
    inputDistributions?: InputDistributionListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    implementingAgency?: SortOrder
    title?: SortOrder
    locationState?: SortOrder
    director?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    implementingAgency?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    locationState?: StringWithAggregatesFilter<"Project"> | string
    director?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type QuarterWhereInput = {
    AND?: QuarterWhereInput | QuarterWhereInput[]
    OR?: QuarterWhereInput[]
    NOT?: QuarterWhereInput | QuarterWhereInput[]
    id?: StringFilter<"Quarter"> | string
    number?: IntFilter<"Quarter"> | number
    year?: IntFilter<"Quarter"> | number
    trainings?: TrainingListRelationFilter
    flds?: FLDListRelationFilter
    awarenessPrograms?: AwarenessProgramListRelationFilter
    inputDistributions?: InputDistributionListRelationFilter
    infrastructureDevelopments?: InfrastructureDevelopmentListRelationFilter
  }

  export type QuarterOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
    trainings?: TrainingOrderByRelationAggregateInput
    flds?: FLDOrderByRelationAggregateInput
    awarenessPrograms?: AwarenessProgramOrderByRelationAggregateInput
    inputDistributions?: InputDistributionOrderByRelationAggregateInput
    infrastructureDevelopments?: InfrastructureDevelopmentOrderByRelationAggregateInput
  }

  export type QuarterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number_year?: QuarterNumberYearCompoundUniqueInput
    AND?: QuarterWhereInput | QuarterWhereInput[]
    OR?: QuarterWhereInput[]
    NOT?: QuarterWhereInput | QuarterWhereInput[]
    number?: IntFilter<"Quarter"> | number
    year?: IntFilter<"Quarter"> | number
    trainings?: TrainingListRelationFilter
    flds?: FLDListRelationFilter
    awarenessPrograms?: AwarenessProgramListRelationFilter
    inputDistributions?: InputDistributionListRelationFilter
    infrastructureDevelopments?: InfrastructureDevelopmentListRelationFilter
  }, "id" | "number_year">

  export type QuarterOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
    _count?: QuarterCountOrderByAggregateInput
    _avg?: QuarterAvgOrderByAggregateInput
    _max?: QuarterMaxOrderByAggregateInput
    _min?: QuarterMinOrderByAggregateInput
    _sum?: QuarterSumOrderByAggregateInput
  }

  export type QuarterScalarWhereWithAggregatesInput = {
    AND?: QuarterScalarWhereWithAggregatesInput | QuarterScalarWhereWithAggregatesInput[]
    OR?: QuarterScalarWhereWithAggregatesInput[]
    NOT?: QuarterScalarWhereWithAggregatesInput | QuarterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quarter"> | string
    number?: IntWithAggregatesFilter<"Quarter"> | number
    year?: IntWithAggregatesFilter<"Quarter"> | number
  }

  export type InputDistributionWhereInput = {
    AND?: InputDistributionWhereInput | InputDistributionWhereInput[]
    OR?: InputDistributionWhereInput[]
    NOT?: InputDistributionWhereInput | InputDistributionWhereInput[]
    id?: StringFilter<"InputDistribution"> | string
    projectId?: StringFilter<"InputDistribution"> | string
    quarterId?: StringFilter<"InputDistribution"> | string
    createdAt?: DateTimeFilter<"InputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"InputDistribution"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
    predefinedItems?: PredefinedInputDistributionListRelationFilter
    customItems?: CustomInputDistributionListRelationFilter
  }

  export type InputDistributionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    quarter?: QuarterOrderByWithRelationInput
    predefinedItems?: PredefinedInputDistributionOrderByRelationAggregateInput
    customItems?: CustomInputDistributionOrderByRelationAggregateInput
  }

  export type InputDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InputDistributionWhereInput | InputDistributionWhereInput[]
    OR?: InputDistributionWhereInput[]
    NOT?: InputDistributionWhereInput | InputDistributionWhereInput[]
    projectId?: StringFilter<"InputDistribution"> | string
    quarterId?: StringFilter<"InputDistribution"> | string
    createdAt?: DateTimeFilter<"InputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"InputDistribution"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
    predefinedItems?: PredefinedInputDistributionListRelationFilter
    customItems?: CustomInputDistributionListRelationFilter
  }, "id">

  export type InputDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InputDistributionCountOrderByAggregateInput
    _max?: InputDistributionMaxOrderByAggregateInput
    _min?: InputDistributionMinOrderByAggregateInput
  }

  export type InputDistributionScalarWhereWithAggregatesInput = {
    AND?: InputDistributionScalarWhereWithAggregatesInput | InputDistributionScalarWhereWithAggregatesInput[]
    OR?: InputDistributionScalarWhereWithAggregatesInput[]
    NOT?: InputDistributionScalarWhereWithAggregatesInput | InputDistributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InputDistribution"> | string
    projectId?: StringWithAggregatesFilter<"InputDistribution"> | string
    quarterId?: StringWithAggregatesFilter<"InputDistribution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InputDistribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InputDistribution"> | Date | string
  }

  export type PredefinedInputDistributionWhereInput = {
    AND?: PredefinedInputDistributionWhereInput | PredefinedInputDistributionWhereInput[]
    OR?: PredefinedInputDistributionWhereInput[]
    NOT?: PredefinedInputDistributionWhereInput | PredefinedInputDistributionWhereInput[]
    id?: StringFilter<"PredefinedInputDistribution"> | string
    inputDistributionId?: StringFilter<"PredefinedInputDistribution"> | string
    activityType?: StringFilter<"PredefinedInputDistribution"> | string
    name?: StringFilter<"PredefinedInputDistribution"> | string
    target?: IntFilter<"PredefinedInputDistribution"> | number
    achieved?: IntFilter<"PredefinedInputDistribution"> | number
    district?: StringFilter<"PredefinedInputDistribution"> | string
    village?: StringFilter<"PredefinedInputDistribution"> | string
    block?: StringFilter<"PredefinedInputDistribution"> | string
    remarks?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    units?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    imageUrl?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    imageKey?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    createdAt?: DateTimeFilter<"PredefinedInputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedInputDistribution"> | Date | string
    inputDistribution?: XOR<InputDistributionScalarRelationFilter, InputDistributionWhereInput>
  }

  export type PredefinedInputDistributionOrderByWithRelationInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputDistribution?: InputDistributionOrderByWithRelationInput
  }

  export type PredefinedInputDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PredefinedInputDistributionWhereInput | PredefinedInputDistributionWhereInput[]
    OR?: PredefinedInputDistributionWhereInput[]
    NOT?: PredefinedInputDistributionWhereInput | PredefinedInputDistributionWhereInput[]
    inputDistributionId?: StringFilter<"PredefinedInputDistribution"> | string
    activityType?: StringFilter<"PredefinedInputDistribution"> | string
    name?: StringFilter<"PredefinedInputDistribution"> | string
    target?: IntFilter<"PredefinedInputDistribution"> | number
    achieved?: IntFilter<"PredefinedInputDistribution"> | number
    district?: StringFilter<"PredefinedInputDistribution"> | string
    village?: StringFilter<"PredefinedInputDistribution"> | string
    block?: StringFilter<"PredefinedInputDistribution"> | string
    remarks?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    units?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    imageUrl?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    imageKey?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    createdAt?: DateTimeFilter<"PredefinedInputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedInputDistribution"> | Date | string
    inputDistribution?: XOR<InputDistributionScalarRelationFilter, InputDistributionWhereInput>
  }, "id">

  export type PredefinedInputDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredefinedInputDistributionCountOrderByAggregateInput
    _avg?: PredefinedInputDistributionAvgOrderByAggregateInput
    _max?: PredefinedInputDistributionMaxOrderByAggregateInput
    _min?: PredefinedInputDistributionMinOrderByAggregateInput
    _sum?: PredefinedInputDistributionSumOrderByAggregateInput
  }

  export type PredefinedInputDistributionScalarWhereWithAggregatesInput = {
    AND?: PredefinedInputDistributionScalarWhereWithAggregatesInput | PredefinedInputDistributionScalarWhereWithAggregatesInput[]
    OR?: PredefinedInputDistributionScalarWhereWithAggregatesInput[]
    NOT?: PredefinedInputDistributionScalarWhereWithAggregatesInput | PredefinedInputDistributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    inputDistributionId?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    activityType?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    name?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    target?: IntWithAggregatesFilter<"PredefinedInputDistribution"> | number
    achieved?: IntWithAggregatesFilter<"PredefinedInputDistribution"> | number
    district?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    village?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    block?: StringWithAggregatesFilter<"PredefinedInputDistribution"> | string
    remarks?: StringNullableWithAggregatesFilter<"PredefinedInputDistribution"> | string | null
    units?: StringNullableWithAggregatesFilter<"PredefinedInputDistribution"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"PredefinedInputDistribution"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"PredefinedInputDistribution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PredefinedInputDistribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PredefinedInputDistribution"> | Date | string
  }

  export type CustomInputDistributionWhereInput = {
    AND?: CustomInputDistributionWhereInput | CustomInputDistributionWhereInput[]
    OR?: CustomInputDistributionWhereInput[]
    NOT?: CustomInputDistributionWhereInput | CustomInputDistributionWhereInput[]
    id?: StringFilter<"CustomInputDistribution"> | string
    inputDistributionId?: StringFilter<"CustomInputDistribution"> | string
    activityType?: StringFilter<"CustomInputDistribution"> | string
    name?: StringFilter<"CustomInputDistribution"> | string
    target?: IntFilter<"CustomInputDistribution"> | number
    achieved?: IntFilter<"CustomInputDistribution"> | number
    district?: StringFilter<"CustomInputDistribution"> | string
    village?: StringFilter<"CustomInputDistribution"> | string
    block?: StringFilter<"CustomInputDistribution"> | string
    remarks?: StringNullableFilter<"CustomInputDistribution"> | string | null
    units?: StringNullableFilter<"CustomInputDistribution"> | string | null
    imageUrl?: StringNullableFilter<"CustomInputDistribution"> | string | null
    imageKey?: StringNullableFilter<"CustomInputDistribution"> | string | null
    createdAt?: DateTimeFilter<"CustomInputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"CustomInputDistribution"> | Date | string
    inputDistribution?: XOR<InputDistributionScalarRelationFilter, InputDistributionWhereInput>
  }

  export type CustomInputDistributionOrderByWithRelationInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inputDistribution?: InputDistributionOrderByWithRelationInput
  }

  export type CustomInputDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomInputDistributionWhereInput | CustomInputDistributionWhereInput[]
    OR?: CustomInputDistributionWhereInput[]
    NOT?: CustomInputDistributionWhereInput | CustomInputDistributionWhereInput[]
    inputDistributionId?: StringFilter<"CustomInputDistribution"> | string
    activityType?: StringFilter<"CustomInputDistribution"> | string
    name?: StringFilter<"CustomInputDistribution"> | string
    target?: IntFilter<"CustomInputDistribution"> | number
    achieved?: IntFilter<"CustomInputDistribution"> | number
    district?: StringFilter<"CustomInputDistribution"> | string
    village?: StringFilter<"CustomInputDistribution"> | string
    block?: StringFilter<"CustomInputDistribution"> | string
    remarks?: StringNullableFilter<"CustomInputDistribution"> | string | null
    units?: StringNullableFilter<"CustomInputDistribution"> | string | null
    imageUrl?: StringNullableFilter<"CustomInputDistribution"> | string | null
    imageKey?: StringNullableFilter<"CustomInputDistribution"> | string | null
    createdAt?: DateTimeFilter<"CustomInputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"CustomInputDistribution"> | Date | string
    inputDistribution?: XOR<InputDistributionScalarRelationFilter, InputDistributionWhereInput>
  }, "id">

  export type CustomInputDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomInputDistributionCountOrderByAggregateInput
    _avg?: CustomInputDistributionAvgOrderByAggregateInput
    _max?: CustomInputDistributionMaxOrderByAggregateInput
    _min?: CustomInputDistributionMinOrderByAggregateInput
    _sum?: CustomInputDistributionSumOrderByAggregateInput
  }

  export type CustomInputDistributionScalarWhereWithAggregatesInput = {
    AND?: CustomInputDistributionScalarWhereWithAggregatesInput | CustomInputDistributionScalarWhereWithAggregatesInput[]
    OR?: CustomInputDistributionScalarWhereWithAggregatesInput[]
    NOT?: CustomInputDistributionScalarWhereWithAggregatesInput | CustomInputDistributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    inputDistributionId?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    activityType?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    name?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    target?: IntWithAggregatesFilter<"CustomInputDistribution"> | number
    achieved?: IntWithAggregatesFilter<"CustomInputDistribution"> | number
    district?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    village?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    block?: StringWithAggregatesFilter<"CustomInputDistribution"> | string
    remarks?: StringNullableWithAggregatesFilter<"CustomInputDistribution"> | string | null
    units?: StringNullableWithAggregatesFilter<"CustomInputDistribution"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"CustomInputDistribution"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"CustomInputDistribution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomInputDistribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomInputDistribution"> | Date | string
  }

  export type TrainingWhereInput = {
    AND?: TrainingWhereInput | TrainingWhereInput[]
    OR?: TrainingWhereInput[]
    NOT?: TrainingWhereInput | TrainingWhereInput[]
    id?: StringFilter<"Training"> | string
    projectId?: StringFilter<"Training"> | string
    quarterId?: StringFilter<"Training"> | string
    title?: StringFilter<"Training"> | string
    target?: IntFilter<"Training"> | number
    achieved?: IntFilter<"Training"> | number
    district?: StringFilter<"Training"> | string
    village?: StringFilter<"Training"> | string
    block?: StringFilter<"Training"> | string
    beneficiaryMale?: IntFilter<"Training"> | number
    beneficiaryFemale?: IntFilter<"Training"> | number
    remarks?: StringNullableFilter<"Training"> | string | null
    imageUrl?: StringNullableFilter<"Training"> | string | null
    imageKey?: StringNullableFilter<"Training"> | string | null
    pdfUrl?: StringNullableFilter<"Training"> | string | null
    pdfKey?: StringNullableFilter<"Training"> | string | null
    units?: StringNullableFilter<"Training"> | string | null
    createdAt?: DateTimeFilter<"Training"> | Date | string
    updatedAt?: DateTimeFilter<"Training"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }

  export type TrainingOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    remarks?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    quarter?: QuarterOrderByWithRelationInput
  }

  export type TrainingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainingWhereInput | TrainingWhereInput[]
    OR?: TrainingWhereInput[]
    NOT?: TrainingWhereInput | TrainingWhereInput[]
    projectId?: StringFilter<"Training"> | string
    quarterId?: StringFilter<"Training"> | string
    title?: StringFilter<"Training"> | string
    target?: IntFilter<"Training"> | number
    achieved?: IntFilter<"Training"> | number
    district?: StringFilter<"Training"> | string
    village?: StringFilter<"Training"> | string
    block?: StringFilter<"Training"> | string
    beneficiaryMale?: IntFilter<"Training"> | number
    beneficiaryFemale?: IntFilter<"Training"> | number
    remarks?: StringNullableFilter<"Training"> | string | null
    imageUrl?: StringNullableFilter<"Training"> | string | null
    imageKey?: StringNullableFilter<"Training"> | string | null
    pdfUrl?: StringNullableFilter<"Training"> | string | null
    pdfKey?: StringNullableFilter<"Training"> | string | null
    units?: StringNullableFilter<"Training"> | string | null
    createdAt?: DateTimeFilter<"Training"> | Date | string
    updatedAt?: DateTimeFilter<"Training"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }, "id">

  export type TrainingOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    remarks?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainingCountOrderByAggregateInput
    _avg?: TrainingAvgOrderByAggregateInput
    _max?: TrainingMaxOrderByAggregateInput
    _min?: TrainingMinOrderByAggregateInput
    _sum?: TrainingSumOrderByAggregateInput
  }

  export type TrainingScalarWhereWithAggregatesInput = {
    AND?: TrainingScalarWhereWithAggregatesInput | TrainingScalarWhereWithAggregatesInput[]
    OR?: TrainingScalarWhereWithAggregatesInput[]
    NOT?: TrainingScalarWhereWithAggregatesInput | TrainingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Training"> | string
    projectId?: StringWithAggregatesFilter<"Training"> | string
    quarterId?: StringWithAggregatesFilter<"Training"> | string
    title?: StringWithAggregatesFilter<"Training"> | string
    target?: IntWithAggregatesFilter<"Training"> | number
    achieved?: IntWithAggregatesFilter<"Training"> | number
    district?: StringWithAggregatesFilter<"Training"> | string
    village?: StringWithAggregatesFilter<"Training"> | string
    block?: StringWithAggregatesFilter<"Training"> | string
    beneficiaryMale?: IntWithAggregatesFilter<"Training"> | number
    beneficiaryFemale?: IntWithAggregatesFilter<"Training"> | number
    remarks?: StringNullableWithAggregatesFilter<"Training"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Training"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"Training"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Training"> | string | null
    pdfKey?: StringNullableWithAggregatesFilter<"Training"> | string | null
    units?: StringNullableWithAggregatesFilter<"Training"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Training"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Training"> | Date | string
  }

  export type FLDWhereInput = {
    AND?: FLDWhereInput | FLDWhereInput[]
    OR?: FLDWhereInput[]
    NOT?: FLDWhereInput | FLDWhereInput[]
    id?: StringFilter<"FLD"> | string
    projectId?: StringFilter<"FLD"> | string
    quarterId?: StringFilter<"FLD"> | string
    target?: IntFilter<"FLD"> | number
    achieved?: IntFilter<"FLD"> | number
    units?: StringNullableFilter<"FLD"> | string | null
    createdAt?: DateTimeFilter<"FLD"> | Date | string
    updatedAt?: DateTimeFilter<"FLD"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }

  export type FLDOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    units?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    quarter?: QuarterOrderByWithRelationInput
  }

  export type FLDWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FLDWhereInput | FLDWhereInput[]
    OR?: FLDWhereInput[]
    NOT?: FLDWhereInput | FLDWhereInput[]
    projectId?: StringFilter<"FLD"> | string
    quarterId?: StringFilter<"FLD"> | string
    target?: IntFilter<"FLD"> | number
    achieved?: IntFilter<"FLD"> | number
    units?: StringNullableFilter<"FLD"> | string | null
    createdAt?: DateTimeFilter<"FLD"> | Date | string
    updatedAt?: DateTimeFilter<"FLD"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }, "id">

  export type FLDOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    units?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FLDCountOrderByAggregateInput
    _avg?: FLDAvgOrderByAggregateInput
    _max?: FLDMaxOrderByAggregateInput
    _min?: FLDMinOrderByAggregateInput
    _sum?: FLDSumOrderByAggregateInput
  }

  export type FLDScalarWhereWithAggregatesInput = {
    AND?: FLDScalarWhereWithAggregatesInput | FLDScalarWhereWithAggregatesInput[]
    OR?: FLDScalarWhereWithAggregatesInput[]
    NOT?: FLDScalarWhereWithAggregatesInput | FLDScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FLD"> | string
    projectId?: StringWithAggregatesFilter<"FLD"> | string
    quarterId?: StringWithAggregatesFilter<"FLD"> | string
    target?: IntWithAggregatesFilter<"FLD"> | number
    achieved?: IntWithAggregatesFilter<"FLD"> | number
    units?: StringNullableWithAggregatesFilter<"FLD"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FLD"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FLD"> | Date | string
  }

  export type AwarenessProgramWhereInput = {
    AND?: AwarenessProgramWhereInput | AwarenessProgramWhereInput[]
    OR?: AwarenessProgramWhereInput[]
    NOT?: AwarenessProgramWhereInput | AwarenessProgramWhereInput[]
    id?: StringFilter<"AwarenessProgram"> | string
    projectId?: StringFilter<"AwarenessProgram"> | string
    quarterId?: StringFilter<"AwarenessProgram"> | string
    title?: StringFilter<"AwarenessProgram"> | string
    target?: IntFilter<"AwarenessProgram"> | number
    achieved?: IntFilter<"AwarenessProgram"> | number
    district?: StringFilter<"AwarenessProgram"> | string
    village?: StringFilter<"AwarenessProgram"> | string
    block?: StringFilter<"AwarenessProgram"> | string
    beneficiaryMale?: IntFilter<"AwarenessProgram"> | number
    beneficiaryFemale?: IntFilter<"AwarenessProgram"> | number
    imageUrl?: StringNullableFilter<"AwarenessProgram"> | string | null
    imageKey?: StringNullableFilter<"AwarenessProgram"> | string | null
    units?: StringNullableFilter<"AwarenessProgram"> | string | null
    createdAt?: DateTimeFilter<"AwarenessProgram"> | Date | string
    updatedAt?: DateTimeFilter<"AwarenessProgram"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }

  export type AwarenessProgramOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    quarter?: QuarterOrderByWithRelationInput
  }

  export type AwarenessProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AwarenessProgramWhereInput | AwarenessProgramWhereInput[]
    OR?: AwarenessProgramWhereInput[]
    NOT?: AwarenessProgramWhereInput | AwarenessProgramWhereInput[]
    projectId?: StringFilter<"AwarenessProgram"> | string
    quarterId?: StringFilter<"AwarenessProgram"> | string
    title?: StringFilter<"AwarenessProgram"> | string
    target?: IntFilter<"AwarenessProgram"> | number
    achieved?: IntFilter<"AwarenessProgram"> | number
    district?: StringFilter<"AwarenessProgram"> | string
    village?: StringFilter<"AwarenessProgram"> | string
    block?: StringFilter<"AwarenessProgram"> | string
    beneficiaryMale?: IntFilter<"AwarenessProgram"> | number
    beneficiaryFemale?: IntFilter<"AwarenessProgram"> | number
    imageUrl?: StringNullableFilter<"AwarenessProgram"> | string | null
    imageKey?: StringNullableFilter<"AwarenessProgram"> | string | null
    units?: StringNullableFilter<"AwarenessProgram"> | string | null
    createdAt?: DateTimeFilter<"AwarenessProgram"> | Date | string
    updatedAt?: DateTimeFilter<"AwarenessProgram"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }, "id">

  export type AwarenessProgramOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AwarenessProgramCountOrderByAggregateInput
    _avg?: AwarenessProgramAvgOrderByAggregateInput
    _max?: AwarenessProgramMaxOrderByAggregateInput
    _min?: AwarenessProgramMinOrderByAggregateInput
    _sum?: AwarenessProgramSumOrderByAggregateInput
  }

  export type AwarenessProgramScalarWhereWithAggregatesInput = {
    AND?: AwarenessProgramScalarWhereWithAggregatesInput | AwarenessProgramScalarWhereWithAggregatesInput[]
    OR?: AwarenessProgramScalarWhereWithAggregatesInput[]
    NOT?: AwarenessProgramScalarWhereWithAggregatesInput | AwarenessProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    projectId?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    quarterId?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    title?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    target?: IntWithAggregatesFilter<"AwarenessProgram"> | number
    achieved?: IntWithAggregatesFilter<"AwarenessProgram"> | number
    district?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    village?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    block?: StringWithAggregatesFilter<"AwarenessProgram"> | string
    beneficiaryMale?: IntWithAggregatesFilter<"AwarenessProgram"> | number
    beneficiaryFemale?: IntWithAggregatesFilter<"AwarenessProgram"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"AwarenessProgram"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"AwarenessProgram"> | string | null
    units?: StringNullableWithAggregatesFilter<"AwarenessProgram"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AwarenessProgram"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AwarenessProgram"> | Date | string
  }

  export type InfrastructureDevelopmentWhereInput = {
    AND?: InfrastructureDevelopmentWhereInput | InfrastructureDevelopmentWhereInput[]
    OR?: InfrastructureDevelopmentWhereInput[]
    NOT?: InfrastructureDevelopmentWhereInput | InfrastructureDevelopmentWhereInput[]
    id?: StringFilter<"InfrastructureDevelopment"> | string
    projectId?: StringFilter<"InfrastructureDevelopment"> | string
    quarterId?: StringFilter<"InfrastructureDevelopment"> | string
    target?: IntFilter<"InfrastructureDevelopment"> | number
    achieved?: IntFilter<"InfrastructureDevelopment"> | number
    district?: StringFilter<"InfrastructureDevelopment"> | string
    village?: StringFilter<"InfrastructureDevelopment"> | string
    block?: StringFilter<"InfrastructureDevelopment"> | string
    remarks?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    imageUrl?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    imageKey?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    createdAt?: DateTimeFilter<"InfrastructureDevelopment"> | Date | string
    updatedAt?: DateTimeFilter<"InfrastructureDevelopment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }

  export type InfrastructureDevelopmentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    quarter?: QuarterOrderByWithRelationInput
  }

  export type InfrastructureDevelopmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InfrastructureDevelopmentWhereInput | InfrastructureDevelopmentWhereInput[]
    OR?: InfrastructureDevelopmentWhereInput[]
    NOT?: InfrastructureDevelopmentWhereInput | InfrastructureDevelopmentWhereInput[]
    projectId?: StringFilter<"InfrastructureDevelopment"> | string
    quarterId?: StringFilter<"InfrastructureDevelopment"> | string
    target?: IntFilter<"InfrastructureDevelopment"> | number
    achieved?: IntFilter<"InfrastructureDevelopment"> | number
    district?: StringFilter<"InfrastructureDevelopment"> | string
    village?: StringFilter<"InfrastructureDevelopment"> | string
    block?: StringFilter<"InfrastructureDevelopment"> | string
    remarks?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    imageUrl?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    imageKey?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    createdAt?: DateTimeFilter<"InfrastructureDevelopment"> | Date | string
    updatedAt?: DateTimeFilter<"InfrastructureDevelopment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    quarter?: XOR<QuarterScalarRelationFilter, QuarterWhereInput>
  }, "id">

  export type InfrastructureDevelopmentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InfrastructureDevelopmentCountOrderByAggregateInput
    _avg?: InfrastructureDevelopmentAvgOrderByAggregateInput
    _max?: InfrastructureDevelopmentMaxOrderByAggregateInput
    _min?: InfrastructureDevelopmentMinOrderByAggregateInput
    _sum?: InfrastructureDevelopmentSumOrderByAggregateInput
  }

  export type InfrastructureDevelopmentScalarWhereWithAggregatesInput = {
    AND?: InfrastructureDevelopmentScalarWhereWithAggregatesInput | InfrastructureDevelopmentScalarWhereWithAggregatesInput[]
    OR?: InfrastructureDevelopmentScalarWhereWithAggregatesInput[]
    NOT?: InfrastructureDevelopmentScalarWhereWithAggregatesInput | InfrastructureDevelopmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InfrastructureDevelopment"> | string
    projectId?: StringWithAggregatesFilter<"InfrastructureDevelopment"> | string
    quarterId?: StringWithAggregatesFilter<"InfrastructureDevelopment"> | string
    target?: IntWithAggregatesFilter<"InfrastructureDevelopment"> | number
    achieved?: IntWithAggregatesFilter<"InfrastructureDevelopment"> | number
    district?: StringWithAggregatesFilter<"InfrastructureDevelopment"> | string
    village?: StringWithAggregatesFilter<"InfrastructureDevelopment"> | string
    block?: StringWithAggregatesFilter<"InfrastructureDevelopment"> | string
    remarks?: StringNullableWithAggregatesFilter<"InfrastructureDevelopment"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"InfrastructureDevelopment"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"InfrastructureDevelopment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InfrastructureDevelopment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InfrastructureDevelopment"> | Date | string
  }

  export type UpcomingEventWhereInput = {
    AND?: UpcomingEventWhereInput | UpcomingEventWhereInput[]
    OR?: UpcomingEventWhereInput[]
    NOT?: UpcomingEventWhereInput | UpcomingEventWhereInput[]
    id?: StringFilter<"UpcomingEvent"> | string
    title?: StringFilter<"UpcomingEvent"> | string
    date?: DateTimeFilter<"UpcomingEvent"> | Date | string
    location?: StringFilter<"UpcomingEvent"> | string
    description?: StringNullableFilter<"UpcomingEvent"> | string | null
  }

  export type UpcomingEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type UpcomingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpcomingEventWhereInput | UpcomingEventWhereInput[]
    OR?: UpcomingEventWhereInput[]
    NOT?: UpcomingEventWhereInput | UpcomingEventWhereInput[]
    title?: StringFilter<"UpcomingEvent"> | string
    date?: DateTimeFilter<"UpcomingEvent"> | Date | string
    location?: StringFilter<"UpcomingEvent"> | string
    description?: StringNullableFilter<"UpcomingEvent"> | string | null
  }, "id">

  export type UpcomingEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: UpcomingEventCountOrderByAggregateInput
    _max?: UpcomingEventMaxOrderByAggregateInput
    _min?: UpcomingEventMinOrderByAggregateInput
  }

  export type UpcomingEventScalarWhereWithAggregatesInput = {
    AND?: UpcomingEventScalarWhereWithAggregatesInput | UpcomingEventScalarWhereWithAggregatesInput[]
    OR?: UpcomingEventScalarWhereWithAggregatesInput[]
    NOT?: UpcomingEventScalarWhereWithAggregatesInput | UpcomingEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpcomingEvent"> | string
    title?: StringWithAggregatesFilter<"UpcomingEvent"> | string
    date?: DateTimeWithAggregatesFilter<"UpcomingEvent"> | Date | string
    location?: StringWithAggregatesFilter<"UpcomingEvent"> | string
    description?: StringNullableWithAggregatesFilter<"UpcomingEvent"> | string | null
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: StringFilter<"Publication"> | string
    title?: StringFilter<"Publication"> | string
    type?: StringFilter<"Publication"> | string
    category?: StringNullableFilter<"Publication"> | string | null
    thumbnailUrl?: StringNullableFilter<"Publication"> | string | null
    thumbnailKey?: StringNullableFilter<"Publication"> | string | null
    pdfUrl?: StringNullableFilter<"Publication"> | string | null
    pdfKey?: StringNullableFilter<"Publication"> | string | null
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    thumbnailKey?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    title?: StringFilter<"Publication"> | string
    type?: StringFilter<"Publication"> | string
    category?: StringNullableFilter<"Publication"> | string | null
    thumbnailUrl?: StringNullableFilter<"Publication"> | string | null
    thumbnailKey?: StringNullableFilter<"Publication"> | string | null
    pdfUrl?: StringNullableFilter<"Publication"> | string | null
    pdfKey?: StringNullableFilter<"Publication"> | string | null
  }, "id">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    thumbnailKey?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publication"> | string
    title?: StringWithAggregatesFilter<"Publication"> | string
    type?: StringWithAggregatesFilter<"Publication"> | string
    category?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    thumbnailKey?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    pdfKey?: StringNullableWithAggregatesFilter<"Publication"> | string | null
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: StringFilter<"Gallery"> | string
    title?: StringFilter<"Gallery"> | string
    imageUrl?: StringFilter<"Gallery"> | string
    imageKey?: StringFilter<"Gallery"> | string
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    title?: StringFilter<"Gallery"> | string
    imageUrl?: StringFilter<"Gallery"> | string
    imageKey?: StringFilter<"Gallery"> | string
  }, "id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gallery"> | string
    title?: StringWithAggregatesFilter<"Gallery"> | string
    imageUrl?: StringWithAggregatesFilter<"Gallery"> | string
    imageKey?: StringWithAggregatesFilter<"Gallery"> | string
  }

  export type ProjectDetailsWhereInput = {
    AND?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    OR?: ProjectDetailsWhereInput[]
    NOT?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    id?: StringFilter<"ProjectDetails"> | string
    title?: StringFilter<"ProjectDetails"> | string
    region?: StringFilter<"ProjectDetails"> | string
    year?: IntFilter<"ProjectDetails"> | number
    budget?: FloatNullableFilter<"ProjectDetails"> | number | null
    center?: StringNullableFilter<"ProjectDetails"> | string | null
    location?: StringNullableFilter<"ProjectDetails"> | string | null
    objectives?: StringNullableListFilter<"ProjectDetails">
    director?: StringFilter<"ProjectDetails"> | string
    coDirectors?: StringNullableListFilter<"ProjectDetails">
    achievements?: StringNullableListFilter<"ProjectDetails">
  }

  export type ProjectDetailsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    region?: SortOrder
    year?: SortOrder
    budget?: SortOrderInput | SortOrder
    center?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    objectives?: SortOrder
    director?: SortOrder
    coDirectors?: SortOrder
    achievements?: SortOrder
  }

  export type ProjectDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    OR?: ProjectDetailsWhereInput[]
    NOT?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    title?: StringFilter<"ProjectDetails"> | string
    region?: StringFilter<"ProjectDetails"> | string
    year?: IntFilter<"ProjectDetails"> | number
    budget?: FloatNullableFilter<"ProjectDetails"> | number | null
    center?: StringNullableFilter<"ProjectDetails"> | string | null
    location?: StringNullableFilter<"ProjectDetails"> | string | null
    objectives?: StringNullableListFilter<"ProjectDetails">
    director?: StringFilter<"ProjectDetails"> | string
    coDirectors?: StringNullableListFilter<"ProjectDetails">
    achievements?: StringNullableListFilter<"ProjectDetails">
  }, "id">

  export type ProjectDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    region?: SortOrder
    year?: SortOrder
    budget?: SortOrderInput | SortOrder
    center?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    objectives?: SortOrder
    director?: SortOrder
    coDirectors?: SortOrder
    achievements?: SortOrder
    _count?: ProjectDetailsCountOrderByAggregateInput
    _avg?: ProjectDetailsAvgOrderByAggregateInput
    _max?: ProjectDetailsMaxOrderByAggregateInput
    _min?: ProjectDetailsMinOrderByAggregateInput
    _sum?: ProjectDetailsSumOrderByAggregateInput
  }

  export type ProjectDetailsScalarWhereWithAggregatesInput = {
    AND?: ProjectDetailsScalarWhereWithAggregatesInput | ProjectDetailsScalarWhereWithAggregatesInput[]
    OR?: ProjectDetailsScalarWhereWithAggregatesInput[]
    NOT?: ProjectDetailsScalarWhereWithAggregatesInput | ProjectDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectDetails"> | string
    title?: StringWithAggregatesFilter<"ProjectDetails"> | string
    region?: StringWithAggregatesFilter<"ProjectDetails"> | string
    year?: IntWithAggregatesFilter<"ProjectDetails"> | number
    budget?: FloatNullableWithAggregatesFilter<"ProjectDetails"> | number | null
    center?: StringNullableWithAggregatesFilter<"ProjectDetails"> | string | null
    location?: StringNullableWithAggregatesFilter<"ProjectDetails"> | string | null
    objectives?: StringNullableListFilter<"ProjectDetails">
    director?: StringWithAggregatesFilter<"ProjectDetails"> | string
    coDirectors?: StringNullableListFilter<"ProjectDetails">
    achievements?: StringNullableListFilter<"ProjectDetails">
  }

  export type ProjectCreateInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingCreateNestedManyWithoutProjectInput
    flds?: FLDCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutProjectInput
    flds?: FLDUncheckedCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUpdateManyWithoutProjectNestedInput
    flds?: FLDUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutProjectNestedInput
    flds?: FLDUncheckedUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuarterCreateInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingCreateNestedManyWithoutQuarterInput
    flds?: FLDCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUncheckedCreateInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingUncheckedCreateNestedManyWithoutQuarterInput
    flds?: FLDUncheckedCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUpdateManyWithoutQuarterNestedInput
    flds?: FLDUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUncheckedUpdateManyWithoutQuarterNestedInput
    flds?: FLDUncheckedUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterCreateManyInput = {
    id?: string
    number: number
    year: number
  }

  export type QuarterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type QuarterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type InputDistributionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutInputDistributionsInput
    quarter: QuarterCreateNestedOneWithoutInputDistributionsInput
    predefinedItems?: PredefinedInputDistributionCreateNestedManyWithoutInputDistributionInput
    customItems?: CustomInputDistributionCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionUncheckedCreateInput = {
    id?: string
    projectId: string
    quarterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
    customItems?: CustomInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutInputDistributionsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutInputDistributionsNestedInput
    predefinedItems?: PredefinedInputDistributionUpdateManyWithoutInputDistributionNestedInput
    customItems?: CustomInputDistributionUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
    customItems?: CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionCreateManyInput = {
    id?: string
    projectId: string
    quarterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InputDistributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InputDistributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedInputDistributionCreateInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inputDistribution: InputDistributionCreateNestedOneWithoutPredefinedItemsInput
  }

  export type PredefinedInputDistributionUncheckedCreateInput = {
    id?: string
    inputDistributionId: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedInputDistributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputDistribution?: InputDistributionUpdateOneRequiredWithoutPredefinedItemsNestedInput
  }

  export type PredefinedInputDistributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputDistributionId?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedInputDistributionCreateManyInput = {
    id?: string
    inputDistributionId: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedInputDistributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedInputDistributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputDistributionId?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInputDistributionCreateInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inputDistribution: InputDistributionCreateNestedOneWithoutCustomItemsInput
  }

  export type CustomInputDistributionUncheckedCreateInput = {
    id?: string
    inputDistributionId: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomInputDistributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputDistribution?: InputDistributionUpdateOneRequiredWithoutCustomItemsNestedInput
  }

  export type CustomInputDistributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputDistributionId?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInputDistributionCreateManyInput = {
    id?: string
    inputDistributionId: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomInputDistributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInputDistributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputDistributionId?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingCreateInput = {
    id?: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTrainingsInput
    quarter: QuarterCreateNestedOneWithoutTrainingsInput
  }

  export type TrainingUncheckedCreateInput = {
    id?: string
    projectId: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTrainingsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutTrainingsNestedInput
  }

  export type TrainingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingCreateManyInput = {
    id?: string
    projectId: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDCreateInput = {
    id?: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFldsInput
    quarter: QuarterCreateNestedOneWithoutFldsInput
  }

  export type FLDUncheckedCreateInput = {
    id?: string
    projectId: string
    quarterId: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FLDUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFldsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutFldsNestedInput
  }

  export type FLDUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDCreateManyInput = {
    id?: string
    projectId: string
    quarterId: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FLDUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramCreateInput = {
    id?: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAwarenessProgramsInput
    quarter: QuarterCreateNestedOneWithoutAwarenessProgramsInput
  }

  export type AwarenessProgramUncheckedCreateInput = {
    id?: string
    projectId: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwarenessProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAwarenessProgramsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutAwarenessProgramsNestedInput
  }

  export type AwarenessProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramCreateManyInput = {
    id?: string
    projectId: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwarenessProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentCreateInput = {
    id?: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutInfrastructureDevelopmentsInput
    quarter: QuarterCreateNestedOneWithoutInfrastructureDevelopmentsInput
  }

  export type InfrastructureDevelopmentUncheckedCreateInput = {
    id?: string
    projectId: string
    quarterId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfrastructureDevelopmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutInfrastructureDevelopmentsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutInfrastructureDevelopmentsNestedInput
  }

  export type InfrastructureDevelopmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentCreateManyInput = {
    id?: string
    projectId: string
    quarterId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfrastructureDevelopmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpcomingEventCreateInput = {
    id?: string
    title: string
    date: Date | string
    location: string
    description?: string | null
  }

  export type UpcomingEventUncheckedCreateInput = {
    id?: string
    title: string
    date: Date | string
    location: string
    description?: string | null
  }

  export type UpcomingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpcomingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpcomingEventCreateManyInput = {
    id?: string
    title: string
    date: Date | string
    location: string
    description?: string | null
  }

  export type UpcomingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpcomingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationCreateInput = {
    id?: string
    title: string
    type: string
    category?: string | null
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
  }

  export type PublicationUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    category?: string | null
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
  }

  export type PublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationCreateManyInput = {
    id?: string
    title: string
    type: string
    category?: string | null
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
  }

  export type PublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GalleryCreateInput = {
    id?: string
    title: string
    imageUrl: string
    imageKey: string
  }

  export type GalleryUncheckedCreateInput = {
    id?: string
    title: string
    imageUrl: string
    imageKey: string
  }

  export type GalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCreateManyInput = {
    id?: string
    title: string
    imageUrl: string
    imageKey: string
  }

  export type GalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectDetailsCreateInput = {
    id?: string
    title: string
    region: string
    year: number
    budget?: number | null
    center?: string | null
    location?: string | null
    objectives?: ProjectDetailsCreateobjectivesInput | string[]
    director: string
    coDirectors?: ProjectDetailsCreatecoDirectorsInput | string[]
    achievements?: ProjectDetailsCreateachievementsInput | string[]
  }

  export type ProjectDetailsUncheckedCreateInput = {
    id?: string
    title: string
    region: string
    year: number
    budget?: number | null
    center?: string | null
    location?: string | null
    objectives?: ProjectDetailsCreateobjectivesInput | string[]
    director: string
    coDirectors?: ProjectDetailsCreatecoDirectorsInput | string[]
    achievements?: ProjectDetailsCreateachievementsInput | string[]
  }

  export type ProjectDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    center?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: ProjectDetailsUpdateobjectivesInput | string[]
    director?: StringFieldUpdateOperationsInput | string
    coDirectors?: ProjectDetailsUpdatecoDirectorsInput | string[]
    achievements?: ProjectDetailsUpdateachievementsInput | string[]
  }

  export type ProjectDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    center?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: ProjectDetailsUpdateobjectivesInput | string[]
    director?: StringFieldUpdateOperationsInput | string
    coDirectors?: ProjectDetailsUpdatecoDirectorsInput | string[]
    achievements?: ProjectDetailsUpdateachievementsInput | string[]
  }

  export type ProjectDetailsCreateManyInput = {
    id?: string
    title: string
    region: string
    year: number
    budget?: number | null
    center?: string | null
    location?: string | null
    objectives?: ProjectDetailsCreateobjectivesInput | string[]
    director: string
    coDirectors?: ProjectDetailsCreatecoDirectorsInput | string[]
    achievements?: ProjectDetailsCreateachievementsInput | string[]
  }

  export type ProjectDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    center?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: ProjectDetailsUpdateobjectivesInput | string[]
    director?: StringFieldUpdateOperationsInput | string
    coDirectors?: ProjectDetailsUpdatecoDirectorsInput | string[]
    achievements?: ProjectDetailsUpdateachievementsInput | string[]
  }

  export type ProjectDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    center?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    objectives?: ProjectDetailsUpdateobjectivesInput | string[]
    director?: StringFieldUpdateOperationsInput | string
    coDirectors?: ProjectDetailsUpdatecoDirectorsInput | string[]
    achievements?: ProjectDetailsUpdateachievementsInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrainingListRelationFilter = {
    every?: TrainingWhereInput
    some?: TrainingWhereInput
    none?: TrainingWhereInput
  }

  export type FLDListRelationFilter = {
    every?: FLDWhereInput
    some?: FLDWhereInput
    none?: FLDWhereInput
  }

  export type AwarenessProgramListRelationFilter = {
    every?: AwarenessProgramWhereInput
    some?: AwarenessProgramWhereInput
    none?: AwarenessProgramWhereInput
  }

  export type InfrastructureDevelopmentListRelationFilter = {
    every?: InfrastructureDevelopmentWhereInput
    some?: InfrastructureDevelopmentWhereInput
    none?: InfrastructureDevelopmentWhereInput
  }

  export type InputDistributionListRelationFilter = {
    every?: InputDistributionWhereInput
    some?: InputDistributionWhereInput
    none?: InputDistributionWhereInput
  }

  export type TrainingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FLDOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AwarenessProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InfrastructureDevelopmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InputDistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    implementingAgency?: SortOrder
    title?: SortOrder
    locationState?: SortOrder
    director?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    implementingAgency?: SortOrder
    title?: SortOrder
    locationState?: SortOrder
    director?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    implementingAgency?: SortOrder
    title?: SortOrder
    locationState?: SortOrder
    director?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuarterNumberYearCompoundUniqueInput = {
    number: number
    year: number
  }

  export type QuarterCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
  }

  export type QuarterAvgOrderByAggregateInput = {
    number?: SortOrder
    year?: SortOrder
  }

  export type QuarterMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
  }

  export type QuarterMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
  }

  export type QuarterSumOrderByAggregateInput = {
    number?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type QuarterScalarRelationFilter = {
    is?: QuarterWhereInput
    isNot?: QuarterWhereInput
  }

  export type PredefinedInputDistributionListRelationFilter = {
    every?: PredefinedInputDistributionWhereInput
    some?: PredefinedInputDistributionWhereInput
    none?: PredefinedInputDistributionWhereInput
  }

  export type CustomInputDistributionListRelationFilter = {
    every?: CustomInputDistributionWhereInput
    some?: CustomInputDistributionWhereInput
    none?: CustomInputDistributionWhereInput
  }

  export type PredefinedInputDistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomInputDistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InputDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InputDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InputDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InputDistributionScalarRelationFilter = {
    is?: InputDistributionWhereInput
    isNot?: InputDistributionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PredefinedInputDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    units?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedInputDistributionAvgOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type PredefinedInputDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    units?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedInputDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    units?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedInputDistributionSumOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomInputDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    units?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomInputDistributionAvgOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type CustomInputDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    units?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomInputDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    inputDistributionId?: SortOrder
    activityType?: SortOrder
    name?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    units?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomInputDistributionSumOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type TrainingCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    remarks?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingAvgOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
  }

  export type TrainingMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    remarks?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    remarks?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingSumOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
  }

  export type FLDCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FLDAvgOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type FLDMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FLDMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FLDSumOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type AwarenessProgramCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwarenessProgramAvgOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
  }

  export type AwarenessProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwarenessProgramMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    title?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwarenessProgramSumOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
    beneficiaryMale?: SortOrder
    beneficiaryFemale?: SortOrder
  }

  export type InfrastructureDevelopmentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfrastructureDevelopmentAvgOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type InfrastructureDevelopmentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfrastructureDevelopmentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    quarterId?: SortOrder
    target?: SortOrder
    achieved?: SortOrder
    district?: SortOrder
    village?: SortOrder
    block?: SortOrder
    remarks?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfrastructureDevelopmentSumOrderByAggregateInput = {
    target?: SortOrder
    achieved?: SortOrder
  }

  export type UpcomingEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
  }

  export type UpcomingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
  }

  export type UpcomingEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailKey?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailKey?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailKey?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    region?: SortOrder
    year?: SortOrder
    budget?: SortOrder
    center?: SortOrder
    location?: SortOrder
    objectives?: SortOrder
    director?: SortOrder
    coDirectors?: SortOrder
    achievements?: SortOrder
  }

  export type ProjectDetailsAvgOrderByAggregateInput = {
    year?: SortOrder
    budget?: SortOrder
  }

  export type ProjectDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    region?: SortOrder
    year?: SortOrder
    budget?: SortOrder
    center?: SortOrder
    location?: SortOrder
    director?: SortOrder
  }

  export type ProjectDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    region?: SortOrder
    year?: SortOrder
    budget?: SortOrder
    center?: SortOrder
    location?: SortOrder
    director?: SortOrder
  }

  export type ProjectDetailsSumOrderByAggregateInput = {
    year?: SortOrder
    budget?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TrainingCreateNestedManyWithoutProjectInput = {
    create?: XOR<TrainingCreateWithoutProjectInput, TrainingUncheckedCreateWithoutProjectInput> | TrainingCreateWithoutProjectInput[] | TrainingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutProjectInput | TrainingCreateOrConnectWithoutProjectInput[]
    createMany?: TrainingCreateManyProjectInputEnvelope
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
  }

  export type FLDCreateNestedManyWithoutProjectInput = {
    create?: XOR<FLDCreateWithoutProjectInput, FLDUncheckedCreateWithoutProjectInput> | FLDCreateWithoutProjectInput[] | FLDUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutProjectInput | FLDCreateOrConnectWithoutProjectInput[]
    createMany?: FLDCreateManyProjectInputEnvelope
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
  }

  export type AwarenessProgramCreateNestedManyWithoutProjectInput = {
    create?: XOR<AwarenessProgramCreateWithoutProjectInput, AwarenessProgramUncheckedCreateWithoutProjectInput> | AwarenessProgramCreateWithoutProjectInput[] | AwarenessProgramUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutProjectInput | AwarenessProgramCreateOrConnectWithoutProjectInput[]
    createMany?: AwarenessProgramCreateManyProjectInputEnvelope
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
  }

  export type InfrastructureDevelopmentCreateNestedManyWithoutProjectInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutProjectInput, InfrastructureDevelopmentUncheckedCreateWithoutProjectInput> | InfrastructureDevelopmentCreateWithoutProjectInput[] | InfrastructureDevelopmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutProjectInput | InfrastructureDevelopmentCreateOrConnectWithoutProjectInput[]
    createMany?: InfrastructureDevelopmentCreateManyProjectInputEnvelope
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
  }

  export type InputDistributionCreateNestedManyWithoutProjectInput = {
    create?: XOR<InputDistributionCreateWithoutProjectInput, InputDistributionUncheckedCreateWithoutProjectInput> | InputDistributionCreateWithoutProjectInput[] | InputDistributionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutProjectInput | InputDistributionCreateOrConnectWithoutProjectInput[]
    createMany?: InputDistributionCreateManyProjectInputEnvelope
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
  }

  export type TrainingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TrainingCreateWithoutProjectInput, TrainingUncheckedCreateWithoutProjectInput> | TrainingCreateWithoutProjectInput[] | TrainingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutProjectInput | TrainingCreateOrConnectWithoutProjectInput[]
    createMany?: TrainingCreateManyProjectInputEnvelope
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
  }

  export type FLDUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FLDCreateWithoutProjectInput, FLDUncheckedCreateWithoutProjectInput> | FLDCreateWithoutProjectInput[] | FLDUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutProjectInput | FLDCreateOrConnectWithoutProjectInput[]
    createMany?: FLDCreateManyProjectInputEnvelope
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
  }

  export type AwarenessProgramUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AwarenessProgramCreateWithoutProjectInput, AwarenessProgramUncheckedCreateWithoutProjectInput> | AwarenessProgramCreateWithoutProjectInput[] | AwarenessProgramUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutProjectInput | AwarenessProgramCreateOrConnectWithoutProjectInput[]
    createMany?: AwarenessProgramCreateManyProjectInputEnvelope
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
  }

  export type InfrastructureDevelopmentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutProjectInput, InfrastructureDevelopmentUncheckedCreateWithoutProjectInput> | InfrastructureDevelopmentCreateWithoutProjectInput[] | InfrastructureDevelopmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutProjectInput | InfrastructureDevelopmentCreateOrConnectWithoutProjectInput[]
    createMany?: InfrastructureDevelopmentCreateManyProjectInputEnvelope
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
  }

  export type InputDistributionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<InputDistributionCreateWithoutProjectInput, InputDistributionUncheckedCreateWithoutProjectInput> | InputDistributionCreateWithoutProjectInput[] | InputDistributionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutProjectInput | InputDistributionCreateOrConnectWithoutProjectInput[]
    createMany?: InputDistributionCreateManyProjectInputEnvelope
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TrainingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TrainingCreateWithoutProjectInput, TrainingUncheckedCreateWithoutProjectInput> | TrainingCreateWithoutProjectInput[] | TrainingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutProjectInput | TrainingCreateOrConnectWithoutProjectInput[]
    upsert?: TrainingUpsertWithWhereUniqueWithoutProjectInput | TrainingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TrainingCreateManyProjectInputEnvelope
    set?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    disconnect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    delete?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    update?: TrainingUpdateWithWhereUniqueWithoutProjectInput | TrainingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TrainingUpdateManyWithWhereWithoutProjectInput | TrainingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
  }

  export type FLDUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FLDCreateWithoutProjectInput, FLDUncheckedCreateWithoutProjectInput> | FLDCreateWithoutProjectInput[] | FLDUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutProjectInput | FLDCreateOrConnectWithoutProjectInput[]
    upsert?: FLDUpsertWithWhereUniqueWithoutProjectInput | FLDUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FLDCreateManyProjectInputEnvelope
    set?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    disconnect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    delete?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    update?: FLDUpdateWithWhereUniqueWithoutProjectInput | FLDUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FLDUpdateManyWithWhereWithoutProjectInput | FLDUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FLDScalarWhereInput | FLDScalarWhereInput[]
  }

  export type AwarenessProgramUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AwarenessProgramCreateWithoutProjectInput, AwarenessProgramUncheckedCreateWithoutProjectInput> | AwarenessProgramCreateWithoutProjectInput[] | AwarenessProgramUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutProjectInput | AwarenessProgramCreateOrConnectWithoutProjectInput[]
    upsert?: AwarenessProgramUpsertWithWhereUniqueWithoutProjectInput | AwarenessProgramUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AwarenessProgramCreateManyProjectInputEnvelope
    set?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    disconnect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    delete?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    update?: AwarenessProgramUpdateWithWhereUniqueWithoutProjectInput | AwarenessProgramUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AwarenessProgramUpdateManyWithWhereWithoutProjectInput | AwarenessProgramUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AwarenessProgramScalarWhereInput | AwarenessProgramScalarWhereInput[]
  }

  export type InfrastructureDevelopmentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutProjectInput, InfrastructureDevelopmentUncheckedCreateWithoutProjectInput> | InfrastructureDevelopmentCreateWithoutProjectInput[] | InfrastructureDevelopmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutProjectInput | InfrastructureDevelopmentCreateOrConnectWithoutProjectInput[]
    upsert?: InfrastructureDevelopmentUpsertWithWhereUniqueWithoutProjectInput | InfrastructureDevelopmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: InfrastructureDevelopmentCreateManyProjectInputEnvelope
    set?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    disconnect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    delete?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    update?: InfrastructureDevelopmentUpdateWithWhereUniqueWithoutProjectInput | InfrastructureDevelopmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: InfrastructureDevelopmentUpdateManyWithWhereWithoutProjectInput | InfrastructureDevelopmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: InfrastructureDevelopmentScalarWhereInput | InfrastructureDevelopmentScalarWhereInput[]
  }

  export type InputDistributionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<InputDistributionCreateWithoutProjectInput, InputDistributionUncheckedCreateWithoutProjectInput> | InputDistributionCreateWithoutProjectInput[] | InputDistributionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutProjectInput | InputDistributionCreateOrConnectWithoutProjectInput[]
    upsert?: InputDistributionUpsertWithWhereUniqueWithoutProjectInput | InputDistributionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: InputDistributionCreateManyProjectInputEnvelope
    set?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    disconnect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    delete?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    update?: InputDistributionUpdateWithWhereUniqueWithoutProjectInput | InputDistributionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: InputDistributionUpdateManyWithWhereWithoutProjectInput | InputDistributionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: InputDistributionScalarWhereInput | InputDistributionScalarWhereInput[]
  }

  export type TrainingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TrainingCreateWithoutProjectInput, TrainingUncheckedCreateWithoutProjectInput> | TrainingCreateWithoutProjectInput[] | TrainingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutProjectInput | TrainingCreateOrConnectWithoutProjectInput[]
    upsert?: TrainingUpsertWithWhereUniqueWithoutProjectInput | TrainingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TrainingCreateManyProjectInputEnvelope
    set?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    disconnect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    delete?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    update?: TrainingUpdateWithWhereUniqueWithoutProjectInput | TrainingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TrainingUpdateManyWithWhereWithoutProjectInput | TrainingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
  }

  export type FLDUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FLDCreateWithoutProjectInput, FLDUncheckedCreateWithoutProjectInput> | FLDCreateWithoutProjectInput[] | FLDUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutProjectInput | FLDCreateOrConnectWithoutProjectInput[]
    upsert?: FLDUpsertWithWhereUniqueWithoutProjectInput | FLDUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FLDCreateManyProjectInputEnvelope
    set?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    disconnect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    delete?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    update?: FLDUpdateWithWhereUniqueWithoutProjectInput | FLDUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FLDUpdateManyWithWhereWithoutProjectInput | FLDUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FLDScalarWhereInput | FLDScalarWhereInput[]
  }

  export type AwarenessProgramUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AwarenessProgramCreateWithoutProjectInput, AwarenessProgramUncheckedCreateWithoutProjectInput> | AwarenessProgramCreateWithoutProjectInput[] | AwarenessProgramUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutProjectInput | AwarenessProgramCreateOrConnectWithoutProjectInput[]
    upsert?: AwarenessProgramUpsertWithWhereUniqueWithoutProjectInput | AwarenessProgramUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AwarenessProgramCreateManyProjectInputEnvelope
    set?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    disconnect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    delete?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    update?: AwarenessProgramUpdateWithWhereUniqueWithoutProjectInput | AwarenessProgramUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AwarenessProgramUpdateManyWithWhereWithoutProjectInput | AwarenessProgramUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AwarenessProgramScalarWhereInput | AwarenessProgramScalarWhereInput[]
  }

  export type InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutProjectInput, InfrastructureDevelopmentUncheckedCreateWithoutProjectInput> | InfrastructureDevelopmentCreateWithoutProjectInput[] | InfrastructureDevelopmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutProjectInput | InfrastructureDevelopmentCreateOrConnectWithoutProjectInput[]
    upsert?: InfrastructureDevelopmentUpsertWithWhereUniqueWithoutProjectInput | InfrastructureDevelopmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: InfrastructureDevelopmentCreateManyProjectInputEnvelope
    set?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    disconnect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    delete?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    update?: InfrastructureDevelopmentUpdateWithWhereUniqueWithoutProjectInput | InfrastructureDevelopmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: InfrastructureDevelopmentUpdateManyWithWhereWithoutProjectInput | InfrastructureDevelopmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: InfrastructureDevelopmentScalarWhereInput | InfrastructureDevelopmentScalarWhereInput[]
  }

  export type InputDistributionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<InputDistributionCreateWithoutProjectInput, InputDistributionUncheckedCreateWithoutProjectInput> | InputDistributionCreateWithoutProjectInput[] | InputDistributionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutProjectInput | InputDistributionCreateOrConnectWithoutProjectInput[]
    upsert?: InputDistributionUpsertWithWhereUniqueWithoutProjectInput | InputDistributionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: InputDistributionCreateManyProjectInputEnvelope
    set?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    disconnect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    delete?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    update?: InputDistributionUpdateWithWhereUniqueWithoutProjectInput | InputDistributionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: InputDistributionUpdateManyWithWhereWithoutProjectInput | InputDistributionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: InputDistributionScalarWhereInput | InputDistributionScalarWhereInput[]
  }

  export type TrainingCreateNestedManyWithoutQuarterInput = {
    create?: XOR<TrainingCreateWithoutQuarterInput, TrainingUncheckedCreateWithoutQuarterInput> | TrainingCreateWithoutQuarterInput[] | TrainingUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutQuarterInput | TrainingCreateOrConnectWithoutQuarterInput[]
    createMany?: TrainingCreateManyQuarterInputEnvelope
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
  }

  export type FLDCreateNestedManyWithoutQuarterInput = {
    create?: XOR<FLDCreateWithoutQuarterInput, FLDUncheckedCreateWithoutQuarterInput> | FLDCreateWithoutQuarterInput[] | FLDUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutQuarterInput | FLDCreateOrConnectWithoutQuarterInput[]
    createMany?: FLDCreateManyQuarterInputEnvelope
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
  }

  export type AwarenessProgramCreateNestedManyWithoutQuarterInput = {
    create?: XOR<AwarenessProgramCreateWithoutQuarterInput, AwarenessProgramUncheckedCreateWithoutQuarterInput> | AwarenessProgramCreateWithoutQuarterInput[] | AwarenessProgramUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutQuarterInput | AwarenessProgramCreateOrConnectWithoutQuarterInput[]
    createMany?: AwarenessProgramCreateManyQuarterInputEnvelope
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
  }

  export type InputDistributionCreateNestedManyWithoutQuarterInput = {
    create?: XOR<InputDistributionCreateWithoutQuarterInput, InputDistributionUncheckedCreateWithoutQuarterInput> | InputDistributionCreateWithoutQuarterInput[] | InputDistributionUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutQuarterInput | InputDistributionCreateOrConnectWithoutQuarterInput[]
    createMany?: InputDistributionCreateManyQuarterInputEnvelope
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
  }

  export type InfrastructureDevelopmentCreateNestedManyWithoutQuarterInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutQuarterInput, InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput> | InfrastructureDevelopmentCreateWithoutQuarterInput[] | InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput | InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput[]
    createMany?: InfrastructureDevelopmentCreateManyQuarterInputEnvelope
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
  }

  export type TrainingUncheckedCreateNestedManyWithoutQuarterInput = {
    create?: XOR<TrainingCreateWithoutQuarterInput, TrainingUncheckedCreateWithoutQuarterInput> | TrainingCreateWithoutQuarterInput[] | TrainingUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutQuarterInput | TrainingCreateOrConnectWithoutQuarterInput[]
    createMany?: TrainingCreateManyQuarterInputEnvelope
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
  }

  export type FLDUncheckedCreateNestedManyWithoutQuarterInput = {
    create?: XOR<FLDCreateWithoutQuarterInput, FLDUncheckedCreateWithoutQuarterInput> | FLDCreateWithoutQuarterInput[] | FLDUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutQuarterInput | FLDCreateOrConnectWithoutQuarterInput[]
    createMany?: FLDCreateManyQuarterInputEnvelope
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
  }

  export type AwarenessProgramUncheckedCreateNestedManyWithoutQuarterInput = {
    create?: XOR<AwarenessProgramCreateWithoutQuarterInput, AwarenessProgramUncheckedCreateWithoutQuarterInput> | AwarenessProgramCreateWithoutQuarterInput[] | AwarenessProgramUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutQuarterInput | AwarenessProgramCreateOrConnectWithoutQuarterInput[]
    createMany?: AwarenessProgramCreateManyQuarterInputEnvelope
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
  }

  export type InputDistributionUncheckedCreateNestedManyWithoutQuarterInput = {
    create?: XOR<InputDistributionCreateWithoutQuarterInput, InputDistributionUncheckedCreateWithoutQuarterInput> | InputDistributionCreateWithoutQuarterInput[] | InputDistributionUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutQuarterInput | InputDistributionCreateOrConnectWithoutQuarterInput[]
    createMany?: InputDistributionCreateManyQuarterInputEnvelope
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
  }

  export type InfrastructureDevelopmentUncheckedCreateNestedManyWithoutQuarterInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutQuarterInput, InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput> | InfrastructureDevelopmentCreateWithoutQuarterInput[] | InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput | InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput[]
    createMany?: InfrastructureDevelopmentCreateManyQuarterInputEnvelope
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrainingUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<TrainingCreateWithoutQuarterInput, TrainingUncheckedCreateWithoutQuarterInput> | TrainingCreateWithoutQuarterInput[] | TrainingUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutQuarterInput | TrainingCreateOrConnectWithoutQuarterInput[]
    upsert?: TrainingUpsertWithWhereUniqueWithoutQuarterInput | TrainingUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: TrainingCreateManyQuarterInputEnvelope
    set?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    disconnect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    delete?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    update?: TrainingUpdateWithWhereUniqueWithoutQuarterInput | TrainingUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: TrainingUpdateManyWithWhereWithoutQuarterInput | TrainingUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
  }

  export type FLDUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<FLDCreateWithoutQuarterInput, FLDUncheckedCreateWithoutQuarterInput> | FLDCreateWithoutQuarterInput[] | FLDUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutQuarterInput | FLDCreateOrConnectWithoutQuarterInput[]
    upsert?: FLDUpsertWithWhereUniqueWithoutQuarterInput | FLDUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: FLDCreateManyQuarterInputEnvelope
    set?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    disconnect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    delete?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    update?: FLDUpdateWithWhereUniqueWithoutQuarterInput | FLDUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: FLDUpdateManyWithWhereWithoutQuarterInput | FLDUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: FLDScalarWhereInput | FLDScalarWhereInput[]
  }

  export type AwarenessProgramUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<AwarenessProgramCreateWithoutQuarterInput, AwarenessProgramUncheckedCreateWithoutQuarterInput> | AwarenessProgramCreateWithoutQuarterInput[] | AwarenessProgramUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutQuarterInput | AwarenessProgramCreateOrConnectWithoutQuarterInput[]
    upsert?: AwarenessProgramUpsertWithWhereUniqueWithoutQuarterInput | AwarenessProgramUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: AwarenessProgramCreateManyQuarterInputEnvelope
    set?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    disconnect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    delete?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    update?: AwarenessProgramUpdateWithWhereUniqueWithoutQuarterInput | AwarenessProgramUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: AwarenessProgramUpdateManyWithWhereWithoutQuarterInput | AwarenessProgramUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: AwarenessProgramScalarWhereInput | AwarenessProgramScalarWhereInput[]
  }

  export type InputDistributionUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<InputDistributionCreateWithoutQuarterInput, InputDistributionUncheckedCreateWithoutQuarterInput> | InputDistributionCreateWithoutQuarterInput[] | InputDistributionUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutQuarterInput | InputDistributionCreateOrConnectWithoutQuarterInput[]
    upsert?: InputDistributionUpsertWithWhereUniqueWithoutQuarterInput | InputDistributionUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: InputDistributionCreateManyQuarterInputEnvelope
    set?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    disconnect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    delete?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    update?: InputDistributionUpdateWithWhereUniqueWithoutQuarterInput | InputDistributionUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: InputDistributionUpdateManyWithWhereWithoutQuarterInput | InputDistributionUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: InputDistributionScalarWhereInput | InputDistributionScalarWhereInput[]
  }

  export type InfrastructureDevelopmentUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutQuarterInput, InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput> | InfrastructureDevelopmentCreateWithoutQuarterInput[] | InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput | InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput[]
    upsert?: InfrastructureDevelopmentUpsertWithWhereUniqueWithoutQuarterInput | InfrastructureDevelopmentUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: InfrastructureDevelopmentCreateManyQuarterInputEnvelope
    set?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    disconnect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    delete?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    update?: InfrastructureDevelopmentUpdateWithWhereUniqueWithoutQuarterInput | InfrastructureDevelopmentUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: InfrastructureDevelopmentUpdateManyWithWhereWithoutQuarterInput | InfrastructureDevelopmentUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: InfrastructureDevelopmentScalarWhereInput | InfrastructureDevelopmentScalarWhereInput[]
  }

  export type TrainingUncheckedUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<TrainingCreateWithoutQuarterInput, TrainingUncheckedCreateWithoutQuarterInput> | TrainingCreateWithoutQuarterInput[] | TrainingUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: TrainingCreateOrConnectWithoutQuarterInput | TrainingCreateOrConnectWithoutQuarterInput[]
    upsert?: TrainingUpsertWithWhereUniqueWithoutQuarterInput | TrainingUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: TrainingCreateManyQuarterInputEnvelope
    set?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    disconnect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    delete?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    connect?: TrainingWhereUniqueInput | TrainingWhereUniqueInput[]
    update?: TrainingUpdateWithWhereUniqueWithoutQuarterInput | TrainingUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: TrainingUpdateManyWithWhereWithoutQuarterInput | TrainingUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
  }

  export type FLDUncheckedUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<FLDCreateWithoutQuarterInput, FLDUncheckedCreateWithoutQuarterInput> | FLDCreateWithoutQuarterInput[] | FLDUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: FLDCreateOrConnectWithoutQuarterInput | FLDCreateOrConnectWithoutQuarterInput[]
    upsert?: FLDUpsertWithWhereUniqueWithoutQuarterInput | FLDUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: FLDCreateManyQuarterInputEnvelope
    set?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    disconnect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    delete?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    connect?: FLDWhereUniqueInput | FLDWhereUniqueInput[]
    update?: FLDUpdateWithWhereUniqueWithoutQuarterInput | FLDUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: FLDUpdateManyWithWhereWithoutQuarterInput | FLDUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: FLDScalarWhereInput | FLDScalarWhereInput[]
  }

  export type AwarenessProgramUncheckedUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<AwarenessProgramCreateWithoutQuarterInput, AwarenessProgramUncheckedCreateWithoutQuarterInput> | AwarenessProgramCreateWithoutQuarterInput[] | AwarenessProgramUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: AwarenessProgramCreateOrConnectWithoutQuarterInput | AwarenessProgramCreateOrConnectWithoutQuarterInput[]
    upsert?: AwarenessProgramUpsertWithWhereUniqueWithoutQuarterInput | AwarenessProgramUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: AwarenessProgramCreateManyQuarterInputEnvelope
    set?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    disconnect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    delete?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    connect?: AwarenessProgramWhereUniqueInput | AwarenessProgramWhereUniqueInput[]
    update?: AwarenessProgramUpdateWithWhereUniqueWithoutQuarterInput | AwarenessProgramUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: AwarenessProgramUpdateManyWithWhereWithoutQuarterInput | AwarenessProgramUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: AwarenessProgramScalarWhereInput | AwarenessProgramScalarWhereInput[]
  }

  export type InputDistributionUncheckedUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<InputDistributionCreateWithoutQuarterInput, InputDistributionUncheckedCreateWithoutQuarterInput> | InputDistributionCreateWithoutQuarterInput[] | InputDistributionUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InputDistributionCreateOrConnectWithoutQuarterInput | InputDistributionCreateOrConnectWithoutQuarterInput[]
    upsert?: InputDistributionUpsertWithWhereUniqueWithoutQuarterInput | InputDistributionUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: InputDistributionCreateManyQuarterInputEnvelope
    set?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    disconnect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    delete?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    connect?: InputDistributionWhereUniqueInput | InputDistributionWhereUniqueInput[]
    update?: InputDistributionUpdateWithWhereUniqueWithoutQuarterInput | InputDistributionUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: InputDistributionUpdateManyWithWhereWithoutQuarterInput | InputDistributionUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: InputDistributionScalarWhereInput | InputDistributionScalarWhereInput[]
  }

  export type InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterNestedInput = {
    create?: XOR<InfrastructureDevelopmentCreateWithoutQuarterInput, InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput> | InfrastructureDevelopmentCreateWithoutQuarterInput[] | InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput[]
    connectOrCreate?: InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput | InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput[]
    upsert?: InfrastructureDevelopmentUpsertWithWhereUniqueWithoutQuarterInput | InfrastructureDevelopmentUpsertWithWhereUniqueWithoutQuarterInput[]
    createMany?: InfrastructureDevelopmentCreateManyQuarterInputEnvelope
    set?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    disconnect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    delete?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    connect?: InfrastructureDevelopmentWhereUniqueInput | InfrastructureDevelopmentWhereUniqueInput[]
    update?: InfrastructureDevelopmentUpdateWithWhereUniqueWithoutQuarterInput | InfrastructureDevelopmentUpdateWithWhereUniqueWithoutQuarterInput[]
    updateMany?: InfrastructureDevelopmentUpdateManyWithWhereWithoutQuarterInput | InfrastructureDevelopmentUpdateManyWithWhereWithoutQuarterInput[]
    deleteMany?: InfrastructureDevelopmentScalarWhereInput | InfrastructureDevelopmentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutInputDistributionsInput = {
    create?: XOR<ProjectCreateWithoutInputDistributionsInput, ProjectUncheckedCreateWithoutInputDistributionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInputDistributionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type QuarterCreateNestedOneWithoutInputDistributionsInput = {
    create?: XOR<QuarterCreateWithoutInputDistributionsInput, QuarterUncheckedCreateWithoutInputDistributionsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutInputDistributionsInput
    connect?: QuarterWhereUniqueInput
  }

  export type PredefinedInputDistributionCreateNestedManyWithoutInputDistributionInput = {
    create?: XOR<PredefinedInputDistributionCreateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput> | PredefinedInputDistributionCreateWithoutInputDistributionInput[] | PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput | PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    createMany?: PredefinedInputDistributionCreateManyInputDistributionInputEnvelope
    connect?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
  }

  export type CustomInputDistributionCreateNestedManyWithoutInputDistributionInput = {
    create?: XOR<CustomInputDistributionCreateWithoutInputDistributionInput, CustomInputDistributionUncheckedCreateWithoutInputDistributionInput> | CustomInputDistributionCreateWithoutInputDistributionInput[] | CustomInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: CustomInputDistributionCreateOrConnectWithoutInputDistributionInput | CustomInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    createMany?: CustomInputDistributionCreateManyInputDistributionInputEnvelope
    connect?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
  }

  export type PredefinedInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput = {
    create?: XOR<PredefinedInputDistributionCreateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput> | PredefinedInputDistributionCreateWithoutInputDistributionInput[] | PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput | PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    createMany?: PredefinedInputDistributionCreateManyInputDistributionInputEnvelope
    connect?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
  }

  export type CustomInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput = {
    create?: XOR<CustomInputDistributionCreateWithoutInputDistributionInput, CustomInputDistributionUncheckedCreateWithoutInputDistributionInput> | CustomInputDistributionCreateWithoutInputDistributionInput[] | CustomInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: CustomInputDistributionCreateOrConnectWithoutInputDistributionInput | CustomInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    createMany?: CustomInputDistributionCreateManyInputDistributionInputEnvelope
    connect?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutInputDistributionsNestedInput = {
    create?: XOR<ProjectCreateWithoutInputDistributionsInput, ProjectUncheckedCreateWithoutInputDistributionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInputDistributionsInput
    upsert?: ProjectUpsertWithoutInputDistributionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutInputDistributionsInput, ProjectUpdateWithoutInputDistributionsInput>, ProjectUncheckedUpdateWithoutInputDistributionsInput>
  }

  export type QuarterUpdateOneRequiredWithoutInputDistributionsNestedInput = {
    create?: XOR<QuarterCreateWithoutInputDistributionsInput, QuarterUncheckedCreateWithoutInputDistributionsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutInputDistributionsInput
    upsert?: QuarterUpsertWithoutInputDistributionsInput
    connect?: QuarterWhereUniqueInput
    update?: XOR<XOR<QuarterUpdateToOneWithWhereWithoutInputDistributionsInput, QuarterUpdateWithoutInputDistributionsInput>, QuarterUncheckedUpdateWithoutInputDistributionsInput>
  }

  export type PredefinedInputDistributionUpdateManyWithoutInputDistributionNestedInput = {
    create?: XOR<PredefinedInputDistributionCreateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput> | PredefinedInputDistributionCreateWithoutInputDistributionInput[] | PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput | PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    upsert?: PredefinedInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput | PredefinedInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput[]
    createMany?: PredefinedInputDistributionCreateManyInputDistributionInputEnvelope
    set?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    disconnect?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    delete?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    connect?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    update?: PredefinedInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput | PredefinedInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput[]
    updateMany?: PredefinedInputDistributionUpdateManyWithWhereWithoutInputDistributionInput | PredefinedInputDistributionUpdateManyWithWhereWithoutInputDistributionInput[]
    deleteMany?: PredefinedInputDistributionScalarWhereInput | PredefinedInputDistributionScalarWhereInput[]
  }

  export type CustomInputDistributionUpdateManyWithoutInputDistributionNestedInput = {
    create?: XOR<CustomInputDistributionCreateWithoutInputDistributionInput, CustomInputDistributionUncheckedCreateWithoutInputDistributionInput> | CustomInputDistributionCreateWithoutInputDistributionInput[] | CustomInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: CustomInputDistributionCreateOrConnectWithoutInputDistributionInput | CustomInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    upsert?: CustomInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput | CustomInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput[]
    createMany?: CustomInputDistributionCreateManyInputDistributionInputEnvelope
    set?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    disconnect?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    delete?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    connect?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    update?: CustomInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput | CustomInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput[]
    updateMany?: CustomInputDistributionUpdateManyWithWhereWithoutInputDistributionInput | CustomInputDistributionUpdateManyWithWhereWithoutInputDistributionInput[]
    deleteMany?: CustomInputDistributionScalarWhereInput | CustomInputDistributionScalarWhereInput[]
  }

  export type PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput = {
    create?: XOR<PredefinedInputDistributionCreateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput> | PredefinedInputDistributionCreateWithoutInputDistributionInput[] | PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput | PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    upsert?: PredefinedInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput | PredefinedInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput[]
    createMany?: PredefinedInputDistributionCreateManyInputDistributionInputEnvelope
    set?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    disconnect?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    delete?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    connect?: PredefinedInputDistributionWhereUniqueInput | PredefinedInputDistributionWhereUniqueInput[]
    update?: PredefinedInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput | PredefinedInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput[]
    updateMany?: PredefinedInputDistributionUpdateManyWithWhereWithoutInputDistributionInput | PredefinedInputDistributionUpdateManyWithWhereWithoutInputDistributionInput[]
    deleteMany?: PredefinedInputDistributionScalarWhereInput | PredefinedInputDistributionScalarWhereInput[]
  }

  export type CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput = {
    create?: XOR<CustomInputDistributionCreateWithoutInputDistributionInput, CustomInputDistributionUncheckedCreateWithoutInputDistributionInput> | CustomInputDistributionCreateWithoutInputDistributionInput[] | CustomInputDistributionUncheckedCreateWithoutInputDistributionInput[]
    connectOrCreate?: CustomInputDistributionCreateOrConnectWithoutInputDistributionInput | CustomInputDistributionCreateOrConnectWithoutInputDistributionInput[]
    upsert?: CustomInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput | CustomInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput[]
    createMany?: CustomInputDistributionCreateManyInputDistributionInputEnvelope
    set?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    disconnect?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    delete?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    connect?: CustomInputDistributionWhereUniqueInput | CustomInputDistributionWhereUniqueInput[]
    update?: CustomInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput | CustomInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput[]
    updateMany?: CustomInputDistributionUpdateManyWithWhereWithoutInputDistributionInput | CustomInputDistributionUpdateManyWithWhereWithoutInputDistributionInput[]
    deleteMany?: CustomInputDistributionScalarWhereInput | CustomInputDistributionScalarWhereInput[]
  }

  export type InputDistributionCreateNestedOneWithoutPredefinedItemsInput = {
    create?: XOR<InputDistributionCreateWithoutPredefinedItemsInput, InputDistributionUncheckedCreateWithoutPredefinedItemsInput>
    connectOrCreate?: InputDistributionCreateOrConnectWithoutPredefinedItemsInput
    connect?: InputDistributionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InputDistributionUpdateOneRequiredWithoutPredefinedItemsNestedInput = {
    create?: XOR<InputDistributionCreateWithoutPredefinedItemsInput, InputDistributionUncheckedCreateWithoutPredefinedItemsInput>
    connectOrCreate?: InputDistributionCreateOrConnectWithoutPredefinedItemsInput
    upsert?: InputDistributionUpsertWithoutPredefinedItemsInput
    connect?: InputDistributionWhereUniqueInput
    update?: XOR<XOR<InputDistributionUpdateToOneWithWhereWithoutPredefinedItemsInput, InputDistributionUpdateWithoutPredefinedItemsInput>, InputDistributionUncheckedUpdateWithoutPredefinedItemsInput>
  }

  export type InputDistributionCreateNestedOneWithoutCustomItemsInput = {
    create?: XOR<InputDistributionCreateWithoutCustomItemsInput, InputDistributionUncheckedCreateWithoutCustomItemsInput>
    connectOrCreate?: InputDistributionCreateOrConnectWithoutCustomItemsInput
    connect?: InputDistributionWhereUniqueInput
  }

  export type InputDistributionUpdateOneRequiredWithoutCustomItemsNestedInput = {
    create?: XOR<InputDistributionCreateWithoutCustomItemsInput, InputDistributionUncheckedCreateWithoutCustomItemsInput>
    connectOrCreate?: InputDistributionCreateOrConnectWithoutCustomItemsInput
    upsert?: InputDistributionUpsertWithoutCustomItemsInput
    connect?: InputDistributionWhereUniqueInput
    update?: XOR<XOR<InputDistributionUpdateToOneWithWhereWithoutCustomItemsInput, InputDistributionUpdateWithoutCustomItemsInput>, InputDistributionUncheckedUpdateWithoutCustomItemsInput>
  }

  export type ProjectCreateNestedOneWithoutTrainingsInput = {
    create?: XOR<ProjectCreateWithoutTrainingsInput, ProjectUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTrainingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type QuarterCreateNestedOneWithoutTrainingsInput = {
    create?: XOR<QuarterCreateWithoutTrainingsInput, QuarterUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutTrainingsInput
    connect?: QuarterWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTrainingsNestedInput = {
    create?: XOR<ProjectCreateWithoutTrainingsInput, ProjectUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTrainingsInput
    upsert?: ProjectUpsertWithoutTrainingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTrainingsInput, ProjectUpdateWithoutTrainingsInput>, ProjectUncheckedUpdateWithoutTrainingsInput>
  }

  export type QuarterUpdateOneRequiredWithoutTrainingsNestedInput = {
    create?: XOR<QuarterCreateWithoutTrainingsInput, QuarterUncheckedCreateWithoutTrainingsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutTrainingsInput
    upsert?: QuarterUpsertWithoutTrainingsInput
    connect?: QuarterWhereUniqueInput
    update?: XOR<XOR<QuarterUpdateToOneWithWhereWithoutTrainingsInput, QuarterUpdateWithoutTrainingsInput>, QuarterUncheckedUpdateWithoutTrainingsInput>
  }

  export type ProjectCreateNestedOneWithoutFldsInput = {
    create?: XOR<ProjectCreateWithoutFldsInput, ProjectUncheckedCreateWithoutFldsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFldsInput
    connect?: ProjectWhereUniqueInput
  }

  export type QuarterCreateNestedOneWithoutFldsInput = {
    create?: XOR<QuarterCreateWithoutFldsInput, QuarterUncheckedCreateWithoutFldsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutFldsInput
    connect?: QuarterWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFldsNestedInput = {
    create?: XOR<ProjectCreateWithoutFldsInput, ProjectUncheckedCreateWithoutFldsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFldsInput
    upsert?: ProjectUpsertWithoutFldsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFldsInput, ProjectUpdateWithoutFldsInput>, ProjectUncheckedUpdateWithoutFldsInput>
  }

  export type QuarterUpdateOneRequiredWithoutFldsNestedInput = {
    create?: XOR<QuarterCreateWithoutFldsInput, QuarterUncheckedCreateWithoutFldsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutFldsInput
    upsert?: QuarterUpsertWithoutFldsInput
    connect?: QuarterWhereUniqueInput
    update?: XOR<XOR<QuarterUpdateToOneWithWhereWithoutFldsInput, QuarterUpdateWithoutFldsInput>, QuarterUncheckedUpdateWithoutFldsInput>
  }

  export type ProjectCreateNestedOneWithoutAwarenessProgramsInput = {
    create?: XOR<ProjectCreateWithoutAwarenessProgramsInput, ProjectUncheckedCreateWithoutAwarenessProgramsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAwarenessProgramsInput
    connect?: ProjectWhereUniqueInput
  }

  export type QuarterCreateNestedOneWithoutAwarenessProgramsInput = {
    create?: XOR<QuarterCreateWithoutAwarenessProgramsInput, QuarterUncheckedCreateWithoutAwarenessProgramsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutAwarenessProgramsInput
    connect?: QuarterWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutAwarenessProgramsNestedInput = {
    create?: XOR<ProjectCreateWithoutAwarenessProgramsInput, ProjectUncheckedCreateWithoutAwarenessProgramsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAwarenessProgramsInput
    upsert?: ProjectUpsertWithoutAwarenessProgramsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAwarenessProgramsInput, ProjectUpdateWithoutAwarenessProgramsInput>, ProjectUncheckedUpdateWithoutAwarenessProgramsInput>
  }

  export type QuarterUpdateOneRequiredWithoutAwarenessProgramsNestedInput = {
    create?: XOR<QuarterCreateWithoutAwarenessProgramsInput, QuarterUncheckedCreateWithoutAwarenessProgramsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutAwarenessProgramsInput
    upsert?: QuarterUpsertWithoutAwarenessProgramsInput
    connect?: QuarterWhereUniqueInput
    update?: XOR<XOR<QuarterUpdateToOneWithWhereWithoutAwarenessProgramsInput, QuarterUpdateWithoutAwarenessProgramsInput>, QuarterUncheckedUpdateWithoutAwarenessProgramsInput>
  }

  export type ProjectCreateNestedOneWithoutInfrastructureDevelopmentsInput = {
    create?: XOR<ProjectCreateWithoutInfrastructureDevelopmentsInput, ProjectUncheckedCreateWithoutInfrastructureDevelopmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInfrastructureDevelopmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type QuarterCreateNestedOneWithoutInfrastructureDevelopmentsInput = {
    create?: XOR<QuarterCreateWithoutInfrastructureDevelopmentsInput, QuarterUncheckedCreateWithoutInfrastructureDevelopmentsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutInfrastructureDevelopmentsInput
    connect?: QuarterWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutInfrastructureDevelopmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutInfrastructureDevelopmentsInput, ProjectUncheckedCreateWithoutInfrastructureDevelopmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutInfrastructureDevelopmentsInput
    upsert?: ProjectUpsertWithoutInfrastructureDevelopmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutInfrastructureDevelopmentsInput, ProjectUpdateWithoutInfrastructureDevelopmentsInput>, ProjectUncheckedUpdateWithoutInfrastructureDevelopmentsInput>
  }

  export type QuarterUpdateOneRequiredWithoutInfrastructureDevelopmentsNestedInput = {
    create?: XOR<QuarterCreateWithoutInfrastructureDevelopmentsInput, QuarterUncheckedCreateWithoutInfrastructureDevelopmentsInput>
    connectOrCreate?: QuarterCreateOrConnectWithoutInfrastructureDevelopmentsInput
    upsert?: QuarterUpsertWithoutInfrastructureDevelopmentsInput
    connect?: QuarterWhereUniqueInput
    update?: XOR<XOR<QuarterUpdateToOneWithWhereWithoutInfrastructureDevelopmentsInput, QuarterUpdateWithoutInfrastructureDevelopmentsInput>, QuarterUncheckedUpdateWithoutInfrastructureDevelopmentsInput>
  }

  export type ProjectDetailsCreateobjectivesInput = {
    set: string[]
  }

  export type ProjectDetailsCreatecoDirectorsInput = {
    set: string[]
  }

  export type ProjectDetailsCreateachievementsInput = {
    set: string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectDetailsUpdateobjectivesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectDetailsUpdatecoDirectorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectDetailsUpdateachievementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TrainingCreateWithoutProjectInput = {
    id?: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quarter: QuarterCreateNestedOneWithoutTrainingsInput
  }

  export type TrainingUncheckedCreateWithoutProjectInput = {
    id?: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingCreateOrConnectWithoutProjectInput = {
    where: TrainingWhereUniqueInput
    create: XOR<TrainingCreateWithoutProjectInput, TrainingUncheckedCreateWithoutProjectInput>
  }

  export type TrainingCreateManyProjectInputEnvelope = {
    data: TrainingCreateManyProjectInput | TrainingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type FLDCreateWithoutProjectInput = {
    id?: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quarter: QuarterCreateNestedOneWithoutFldsInput
  }

  export type FLDUncheckedCreateWithoutProjectInput = {
    id?: string
    quarterId: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FLDCreateOrConnectWithoutProjectInput = {
    where: FLDWhereUniqueInput
    create: XOR<FLDCreateWithoutProjectInput, FLDUncheckedCreateWithoutProjectInput>
  }

  export type FLDCreateManyProjectInputEnvelope = {
    data: FLDCreateManyProjectInput | FLDCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AwarenessProgramCreateWithoutProjectInput = {
    id?: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quarter: QuarterCreateNestedOneWithoutAwarenessProgramsInput
  }

  export type AwarenessProgramUncheckedCreateWithoutProjectInput = {
    id?: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwarenessProgramCreateOrConnectWithoutProjectInput = {
    where: AwarenessProgramWhereUniqueInput
    create: XOR<AwarenessProgramCreateWithoutProjectInput, AwarenessProgramUncheckedCreateWithoutProjectInput>
  }

  export type AwarenessProgramCreateManyProjectInputEnvelope = {
    data: AwarenessProgramCreateManyProjectInput | AwarenessProgramCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type InfrastructureDevelopmentCreateWithoutProjectInput = {
    id?: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quarter: QuarterCreateNestedOneWithoutInfrastructureDevelopmentsInput
  }

  export type InfrastructureDevelopmentUncheckedCreateWithoutProjectInput = {
    id?: string
    quarterId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfrastructureDevelopmentCreateOrConnectWithoutProjectInput = {
    where: InfrastructureDevelopmentWhereUniqueInput
    create: XOR<InfrastructureDevelopmentCreateWithoutProjectInput, InfrastructureDevelopmentUncheckedCreateWithoutProjectInput>
  }

  export type InfrastructureDevelopmentCreateManyProjectInputEnvelope = {
    data: InfrastructureDevelopmentCreateManyProjectInput | InfrastructureDevelopmentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type InputDistributionCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quarter: QuarterCreateNestedOneWithoutInputDistributionsInput
    predefinedItems?: PredefinedInputDistributionCreateNestedManyWithoutInputDistributionInput
    customItems?: CustomInputDistributionCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionUncheckedCreateWithoutProjectInput = {
    id?: string
    quarterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
    customItems?: CustomInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionCreateOrConnectWithoutProjectInput = {
    where: InputDistributionWhereUniqueInput
    create: XOR<InputDistributionCreateWithoutProjectInput, InputDistributionUncheckedCreateWithoutProjectInput>
  }

  export type InputDistributionCreateManyProjectInputEnvelope = {
    data: InputDistributionCreateManyProjectInput | InputDistributionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TrainingUpsertWithWhereUniqueWithoutProjectInput = {
    where: TrainingWhereUniqueInput
    update: XOR<TrainingUpdateWithoutProjectInput, TrainingUncheckedUpdateWithoutProjectInput>
    create: XOR<TrainingCreateWithoutProjectInput, TrainingUncheckedCreateWithoutProjectInput>
  }

  export type TrainingUpdateWithWhereUniqueWithoutProjectInput = {
    where: TrainingWhereUniqueInput
    data: XOR<TrainingUpdateWithoutProjectInput, TrainingUncheckedUpdateWithoutProjectInput>
  }

  export type TrainingUpdateManyWithWhereWithoutProjectInput = {
    where: TrainingScalarWhereInput
    data: XOR<TrainingUpdateManyMutationInput, TrainingUncheckedUpdateManyWithoutProjectInput>
  }

  export type TrainingScalarWhereInput = {
    AND?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
    OR?: TrainingScalarWhereInput[]
    NOT?: TrainingScalarWhereInput | TrainingScalarWhereInput[]
    id?: StringFilter<"Training"> | string
    projectId?: StringFilter<"Training"> | string
    quarterId?: StringFilter<"Training"> | string
    title?: StringFilter<"Training"> | string
    target?: IntFilter<"Training"> | number
    achieved?: IntFilter<"Training"> | number
    district?: StringFilter<"Training"> | string
    village?: StringFilter<"Training"> | string
    block?: StringFilter<"Training"> | string
    beneficiaryMale?: IntFilter<"Training"> | number
    beneficiaryFemale?: IntFilter<"Training"> | number
    remarks?: StringNullableFilter<"Training"> | string | null
    imageUrl?: StringNullableFilter<"Training"> | string | null
    imageKey?: StringNullableFilter<"Training"> | string | null
    pdfUrl?: StringNullableFilter<"Training"> | string | null
    pdfKey?: StringNullableFilter<"Training"> | string | null
    units?: StringNullableFilter<"Training"> | string | null
    createdAt?: DateTimeFilter<"Training"> | Date | string
    updatedAt?: DateTimeFilter<"Training"> | Date | string
  }

  export type FLDUpsertWithWhereUniqueWithoutProjectInput = {
    where: FLDWhereUniqueInput
    update: XOR<FLDUpdateWithoutProjectInput, FLDUncheckedUpdateWithoutProjectInput>
    create: XOR<FLDCreateWithoutProjectInput, FLDUncheckedCreateWithoutProjectInput>
  }

  export type FLDUpdateWithWhereUniqueWithoutProjectInput = {
    where: FLDWhereUniqueInput
    data: XOR<FLDUpdateWithoutProjectInput, FLDUncheckedUpdateWithoutProjectInput>
  }

  export type FLDUpdateManyWithWhereWithoutProjectInput = {
    where: FLDScalarWhereInput
    data: XOR<FLDUpdateManyMutationInput, FLDUncheckedUpdateManyWithoutProjectInput>
  }

  export type FLDScalarWhereInput = {
    AND?: FLDScalarWhereInput | FLDScalarWhereInput[]
    OR?: FLDScalarWhereInput[]
    NOT?: FLDScalarWhereInput | FLDScalarWhereInput[]
    id?: StringFilter<"FLD"> | string
    projectId?: StringFilter<"FLD"> | string
    quarterId?: StringFilter<"FLD"> | string
    target?: IntFilter<"FLD"> | number
    achieved?: IntFilter<"FLD"> | number
    units?: StringNullableFilter<"FLD"> | string | null
    createdAt?: DateTimeFilter<"FLD"> | Date | string
    updatedAt?: DateTimeFilter<"FLD"> | Date | string
  }

  export type AwarenessProgramUpsertWithWhereUniqueWithoutProjectInput = {
    where: AwarenessProgramWhereUniqueInput
    update: XOR<AwarenessProgramUpdateWithoutProjectInput, AwarenessProgramUncheckedUpdateWithoutProjectInput>
    create: XOR<AwarenessProgramCreateWithoutProjectInput, AwarenessProgramUncheckedCreateWithoutProjectInput>
  }

  export type AwarenessProgramUpdateWithWhereUniqueWithoutProjectInput = {
    where: AwarenessProgramWhereUniqueInput
    data: XOR<AwarenessProgramUpdateWithoutProjectInput, AwarenessProgramUncheckedUpdateWithoutProjectInput>
  }

  export type AwarenessProgramUpdateManyWithWhereWithoutProjectInput = {
    where: AwarenessProgramScalarWhereInput
    data: XOR<AwarenessProgramUpdateManyMutationInput, AwarenessProgramUncheckedUpdateManyWithoutProjectInput>
  }

  export type AwarenessProgramScalarWhereInput = {
    AND?: AwarenessProgramScalarWhereInput | AwarenessProgramScalarWhereInput[]
    OR?: AwarenessProgramScalarWhereInput[]
    NOT?: AwarenessProgramScalarWhereInput | AwarenessProgramScalarWhereInput[]
    id?: StringFilter<"AwarenessProgram"> | string
    projectId?: StringFilter<"AwarenessProgram"> | string
    quarterId?: StringFilter<"AwarenessProgram"> | string
    title?: StringFilter<"AwarenessProgram"> | string
    target?: IntFilter<"AwarenessProgram"> | number
    achieved?: IntFilter<"AwarenessProgram"> | number
    district?: StringFilter<"AwarenessProgram"> | string
    village?: StringFilter<"AwarenessProgram"> | string
    block?: StringFilter<"AwarenessProgram"> | string
    beneficiaryMale?: IntFilter<"AwarenessProgram"> | number
    beneficiaryFemale?: IntFilter<"AwarenessProgram"> | number
    imageUrl?: StringNullableFilter<"AwarenessProgram"> | string | null
    imageKey?: StringNullableFilter<"AwarenessProgram"> | string | null
    units?: StringNullableFilter<"AwarenessProgram"> | string | null
    createdAt?: DateTimeFilter<"AwarenessProgram"> | Date | string
    updatedAt?: DateTimeFilter<"AwarenessProgram"> | Date | string
  }

  export type InfrastructureDevelopmentUpsertWithWhereUniqueWithoutProjectInput = {
    where: InfrastructureDevelopmentWhereUniqueInput
    update: XOR<InfrastructureDevelopmentUpdateWithoutProjectInput, InfrastructureDevelopmentUncheckedUpdateWithoutProjectInput>
    create: XOR<InfrastructureDevelopmentCreateWithoutProjectInput, InfrastructureDevelopmentUncheckedCreateWithoutProjectInput>
  }

  export type InfrastructureDevelopmentUpdateWithWhereUniqueWithoutProjectInput = {
    where: InfrastructureDevelopmentWhereUniqueInput
    data: XOR<InfrastructureDevelopmentUpdateWithoutProjectInput, InfrastructureDevelopmentUncheckedUpdateWithoutProjectInput>
  }

  export type InfrastructureDevelopmentUpdateManyWithWhereWithoutProjectInput = {
    where: InfrastructureDevelopmentScalarWhereInput
    data: XOR<InfrastructureDevelopmentUpdateManyMutationInput, InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectInput>
  }

  export type InfrastructureDevelopmentScalarWhereInput = {
    AND?: InfrastructureDevelopmentScalarWhereInput | InfrastructureDevelopmentScalarWhereInput[]
    OR?: InfrastructureDevelopmentScalarWhereInput[]
    NOT?: InfrastructureDevelopmentScalarWhereInput | InfrastructureDevelopmentScalarWhereInput[]
    id?: StringFilter<"InfrastructureDevelopment"> | string
    projectId?: StringFilter<"InfrastructureDevelopment"> | string
    quarterId?: StringFilter<"InfrastructureDevelopment"> | string
    target?: IntFilter<"InfrastructureDevelopment"> | number
    achieved?: IntFilter<"InfrastructureDevelopment"> | number
    district?: StringFilter<"InfrastructureDevelopment"> | string
    village?: StringFilter<"InfrastructureDevelopment"> | string
    block?: StringFilter<"InfrastructureDevelopment"> | string
    remarks?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    imageUrl?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    imageKey?: StringNullableFilter<"InfrastructureDevelopment"> | string | null
    createdAt?: DateTimeFilter<"InfrastructureDevelopment"> | Date | string
    updatedAt?: DateTimeFilter<"InfrastructureDevelopment"> | Date | string
  }

  export type InputDistributionUpsertWithWhereUniqueWithoutProjectInput = {
    where: InputDistributionWhereUniqueInput
    update: XOR<InputDistributionUpdateWithoutProjectInput, InputDistributionUncheckedUpdateWithoutProjectInput>
    create: XOR<InputDistributionCreateWithoutProjectInput, InputDistributionUncheckedCreateWithoutProjectInput>
  }

  export type InputDistributionUpdateWithWhereUniqueWithoutProjectInput = {
    where: InputDistributionWhereUniqueInput
    data: XOR<InputDistributionUpdateWithoutProjectInput, InputDistributionUncheckedUpdateWithoutProjectInput>
  }

  export type InputDistributionUpdateManyWithWhereWithoutProjectInput = {
    where: InputDistributionScalarWhereInput
    data: XOR<InputDistributionUpdateManyMutationInput, InputDistributionUncheckedUpdateManyWithoutProjectInput>
  }

  export type InputDistributionScalarWhereInput = {
    AND?: InputDistributionScalarWhereInput | InputDistributionScalarWhereInput[]
    OR?: InputDistributionScalarWhereInput[]
    NOT?: InputDistributionScalarWhereInput | InputDistributionScalarWhereInput[]
    id?: StringFilter<"InputDistribution"> | string
    projectId?: StringFilter<"InputDistribution"> | string
    quarterId?: StringFilter<"InputDistribution"> | string
    createdAt?: DateTimeFilter<"InputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"InputDistribution"> | Date | string
  }

  export type TrainingCreateWithoutQuarterInput = {
    id?: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTrainingsInput
  }

  export type TrainingUncheckedCreateWithoutQuarterInput = {
    id?: string
    projectId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingCreateOrConnectWithoutQuarterInput = {
    where: TrainingWhereUniqueInput
    create: XOR<TrainingCreateWithoutQuarterInput, TrainingUncheckedCreateWithoutQuarterInput>
  }

  export type TrainingCreateManyQuarterInputEnvelope = {
    data: TrainingCreateManyQuarterInput | TrainingCreateManyQuarterInput[]
    skipDuplicates?: boolean
  }

  export type FLDCreateWithoutQuarterInput = {
    id?: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFldsInput
  }

  export type FLDUncheckedCreateWithoutQuarterInput = {
    id?: string
    projectId: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FLDCreateOrConnectWithoutQuarterInput = {
    where: FLDWhereUniqueInput
    create: XOR<FLDCreateWithoutQuarterInput, FLDUncheckedCreateWithoutQuarterInput>
  }

  export type FLDCreateManyQuarterInputEnvelope = {
    data: FLDCreateManyQuarterInput | FLDCreateManyQuarterInput[]
    skipDuplicates?: boolean
  }

  export type AwarenessProgramCreateWithoutQuarterInput = {
    id?: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAwarenessProgramsInput
  }

  export type AwarenessProgramUncheckedCreateWithoutQuarterInput = {
    id?: string
    projectId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwarenessProgramCreateOrConnectWithoutQuarterInput = {
    where: AwarenessProgramWhereUniqueInput
    create: XOR<AwarenessProgramCreateWithoutQuarterInput, AwarenessProgramUncheckedCreateWithoutQuarterInput>
  }

  export type AwarenessProgramCreateManyQuarterInputEnvelope = {
    data: AwarenessProgramCreateManyQuarterInput | AwarenessProgramCreateManyQuarterInput[]
    skipDuplicates?: boolean
  }

  export type InputDistributionCreateWithoutQuarterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutInputDistributionsInput
    predefinedItems?: PredefinedInputDistributionCreateNestedManyWithoutInputDistributionInput
    customItems?: CustomInputDistributionCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionUncheckedCreateWithoutQuarterInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
    customItems?: CustomInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionCreateOrConnectWithoutQuarterInput = {
    where: InputDistributionWhereUniqueInput
    create: XOR<InputDistributionCreateWithoutQuarterInput, InputDistributionUncheckedCreateWithoutQuarterInput>
  }

  export type InputDistributionCreateManyQuarterInputEnvelope = {
    data: InputDistributionCreateManyQuarterInput | InputDistributionCreateManyQuarterInput[]
    skipDuplicates?: boolean
  }

  export type InfrastructureDevelopmentCreateWithoutQuarterInput = {
    id?: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutInfrastructureDevelopmentsInput
  }

  export type InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput = {
    id?: string
    projectId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfrastructureDevelopmentCreateOrConnectWithoutQuarterInput = {
    where: InfrastructureDevelopmentWhereUniqueInput
    create: XOR<InfrastructureDevelopmentCreateWithoutQuarterInput, InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput>
  }

  export type InfrastructureDevelopmentCreateManyQuarterInputEnvelope = {
    data: InfrastructureDevelopmentCreateManyQuarterInput | InfrastructureDevelopmentCreateManyQuarterInput[]
    skipDuplicates?: boolean
  }

  export type TrainingUpsertWithWhereUniqueWithoutQuarterInput = {
    where: TrainingWhereUniqueInput
    update: XOR<TrainingUpdateWithoutQuarterInput, TrainingUncheckedUpdateWithoutQuarterInput>
    create: XOR<TrainingCreateWithoutQuarterInput, TrainingUncheckedCreateWithoutQuarterInput>
  }

  export type TrainingUpdateWithWhereUniqueWithoutQuarterInput = {
    where: TrainingWhereUniqueInput
    data: XOR<TrainingUpdateWithoutQuarterInput, TrainingUncheckedUpdateWithoutQuarterInput>
  }

  export type TrainingUpdateManyWithWhereWithoutQuarterInput = {
    where: TrainingScalarWhereInput
    data: XOR<TrainingUpdateManyMutationInput, TrainingUncheckedUpdateManyWithoutQuarterInput>
  }

  export type FLDUpsertWithWhereUniqueWithoutQuarterInput = {
    where: FLDWhereUniqueInput
    update: XOR<FLDUpdateWithoutQuarterInput, FLDUncheckedUpdateWithoutQuarterInput>
    create: XOR<FLDCreateWithoutQuarterInput, FLDUncheckedCreateWithoutQuarterInput>
  }

  export type FLDUpdateWithWhereUniqueWithoutQuarterInput = {
    where: FLDWhereUniqueInput
    data: XOR<FLDUpdateWithoutQuarterInput, FLDUncheckedUpdateWithoutQuarterInput>
  }

  export type FLDUpdateManyWithWhereWithoutQuarterInput = {
    where: FLDScalarWhereInput
    data: XOR<FLDUpdateManyMutationInput, FLDUncheckedUpdateManyWithoutQuarterInput>
  }

  export type AwarenessProgramUpsertWithWhereUniqueWithoutQuarterInput = {
    where: AwarenessProgramWhereUniqueInput
    update: XOR<AwarenessProgramUpdateWithoutQuarterInput, AwarenessProgramUncheckedUpdateWithoutQuarterInput>
    create: XOR<AwarenessProgramCreateWithoutQuarterInput, AwarenessProgramUncheckedCreateWithoutQuarterInput>
  }

  export type AwarenessProgramUpdateWithWhereUniqueWithoutQuarterInput = {
    where: AwarenessProgramWhereUniqueInput
    data: XOR<AwarenessProgramUpdateWithoutQuarterInput, AwarenessProgramUncheckedUpdateWithoutQuarterInput>
  }

  export type AwarenessProgramUpdateManyWithWhereWithoutQuarterInput = {
    where: AwarenessProgramScalarWhereInput
    data: XOR<AwarenessProgramUpdateManyMutationInput, AwarenessProgramUncheckedUpdateManyWithoutQuarterInput>
  }

  export type InputDistributionUpsertWithWhereUniqueWithoutQuarterInput = {
    where: InputDistributionWhereUniqueInput
    update: XOR<InputDistributionUpdateWithoutQuarterInput, InputDistributionUncheckedUpdateWithoutQuarterInput>
    create: XOR<InputDistributionCreateWithoutQuarterInput, InputDistributionUncheckedCreateWithoutQuarterInput>
  }

  export type InputDistributionUpdateWithWhereUniqueWithoutQuarterInput = {
    where: InputDistributionWhereUniqueInput
    data: XOR<InputDistributionUpdateWithoutQuarterInput, InputDistributionUncheckedUpdateWithoutQuarterInput>
  }

  export type InputDistributionUpdateManyWithWhereWithoutQuarterInput = {
    where: InputDistributionScalarWhereInput
    data: XOR<InputDistributionUpdateManyMutationInput, InputDistributionUncheckedUpdateManyWithoutQuarterInput>
  }

  export type InfrastructureDevelopmentUpsertWithWhereUniqueWithoutQuarterInput = {
    where: InfrastructureDevelopmentWhereUniqueInput
    update: XOR<InfrastructureDevelopmentUpdateWithoutQuarterInput, InfrastructureDevelopmentUncheckedUpdateWithoutQuarterInput>
    create: XOR<InfrastructureDevelopmentCreateWithoutQuarterInput, InfrastructureDevelopmentUncheckedCreateWithoutQuarterInput>
  }

  export type InfrastructureDevelopmentUpdateWithWhereUniqueWithoutQuarterInput = {
    where: InfrastructureDevelopmentWhereUniqueInput
    data: XOR<InfrastructureDevelopmentUpdateWithoutQuarterInput, InfrastructureDevelopmentUncheckedUpdateWithoutQuarterInput>
  }

  export type InfrastructureDevelopmentUpdateManyWithWhereWithoutQuarterInput = {
    where: InfrastructureDevelopmentScalarWhereInput
    data: XOR<InfrastructureDevelopmentUpdateManyMutationInput, InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterInput>
  }

  export type ProjectCreateWithoutInputDistributionsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingCreateNestedManyWithoutProjectInput
    flds?: FLDCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutInputDistributionsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutProjectInput
    flds?: FLDUncheckedCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutInputDistributionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutInputDistributionsInput, ProjectUncheckedCreateWithoutInputDistributionsInput>
  }

  export type QuarterCreateWithoutInputDistributionsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingCreateNestedManyWithoutQuarterInput
    flds?: FLDCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUncheckedCreateWithoutInputDistributionsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingUncheckedCreateNestedManyWithoutQuarterInput
    flds?: FLDUncheckedCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutQuarterInput
  }

  export type QuarterCreateOrConnectWithoutInputDistributionsInput = {
    where: QuarterWhereUniqueInput
    create: XOR<QuarterCreateWithoutInputDistributionsInput, QuarterUncheckedCreateWithoutInputDistributionsInput>
  }

  export type PredefinedInputDistributionCreateWithoutInputDistributionInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedInputDistributionCreateOrConnectWithoutInputDistributionInput = {
    where: PredefinedInputDistributionWhereUniqueInput
    create: XOR<PredefinedInputDistributionCreateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput>
  }

  export type PredefinedInputDistributionCreateManyInputDistributionInputEnvelope = {
    data: PredefinedInputDistributionCreateManyInputDistributionInput | PredefinedInputDistributionCreateManyInputDistributionInput[]
    skipDuplicates?: boolean
  }

  export type CustomInputDistributionCreateWithoutInputDistributionInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomInputDistributionUncheckedCreateWithoutInputDistributionInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomInputDistributionCreateOrConnectWithoutInputDistributionInput = {
    where: CustomInputDistributionWhereUniqueInput
    create: XOR<CustomInputDistributionCreateWithoutInputDistributionInput, CustomInputDistributionUncheckedCreateWithoutInputDistributionInput>
  }

  export type CustomInputDistributionCreateManyInputDistributionInputEnvelope = {
    data: CustomInputDistributionCreateManyInputDistributionInput | CustomInputDistributionCreateManyInputDistributionInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutInputDistributionsInput = {
    update: XOR<ProjectUpdateWithoutInputDistributionsInput, ProjectUncheckedUpdateWithoutInputDistributionsInput>
    create: XOR<ProjectCreateWithoutInputDistributionsInput, ProjectUncheckedCreateWithoutInputDistributionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutInputDistributionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutInputDistributionsInput, ProjectUncheckedUpdateWithoutInputDistributionsInput>
  }

  export type ProjectUpdateWithoutInputDistributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUpdateManyWithoutProjectNestedInput
    flds?: FLDUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutInputDistributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutProjectNestedInput
    flds?: FLDUncheckedUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type QuarterUpsertWithoutInputDistributionsInput = {
    update: XOR<QuarterUpdateWithoutInputDistributionsInput, QuarterUncheckedUpdateWithoutInputDistributionsInput>
    create: XOR<QuarterCreateWithoutInputDistributionsInput, QuarterUncheckedCreateWithoutInputDistributionsInput>
    where?: QuarterWhereInput
  }

  export type QuarterUpdateToOneWithWhereWithoutInputDistributionsInput = {
    where?: QuarterWhereInput
    data: XOR<QuarterUpdateWithoutInputDistributionsInput, QuarterUncheckedUpdateWithoutInputDistributionsInput>
  }

  export type QuarterUpdateWithoutInputDistributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUpdateManyWithoutQuarterNestedInput
    flds?: FLDUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterUncheckedUpdateWithoutInputDistributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUncheckedUpdateManyWithoutQuarterNestedInput
    flds?: FLDUncheckedUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterNestedInput
  }

  export type PredefinedInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput = {
    where: PredefinedInputDistributionWhereUniqueInput
    update: XOR<PredefinedInputDistributionUpdateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedUpdateWithoutInputDistributionInput>
    create: XOR<PredefinedInputDistributionCreateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedCreateWithoutInputDistributionInput>
  }

  export type PredefinedInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput = {
    where: PredefinedInputDistributionWhereUniqueInput
    data: XOR<PredefinedInputDistributionUpdateWithoutInputDistributionInput, PredefinedInputDistributionUncheckedUpdateWithoutInputDistributionInput>
  }

  export type PredefinedInputDistributionUpdateManyWithWhereWithoutInputDistributionInput = {
    where: PredefinedInputDistributionScalarWhereInput
    data: XOR<PredefinedInputDistributionUpdateManyMutationInput, PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionInput>
  }

  export type PredefinedInputDistributionScalarWhereInput = {
    AND?: PredefinedInputDistributionScalarWhereInput | PredefinedInputDistributionScalarWhereInput[]
    OR?: PredefinedInputDistributionScalarWhereInput[]
    NOT?: PredefinedInputDistributionScalarWhereInput | PredefinedInputDistributionScalarWhereInput[]
    id?: StringFilter<"PredefinedInputDistribution"> | string
    inputDistributionId?: StringFilter<"PredefinedInputDistribution"> | string
    activityType?: StringFilter<"PredefinedInputDistribution"> | string
    name?: StringFilter<"PredefinedInputDistribution"> | string
    target?: IntFilter<"PredefinedInputDistribution"> | number
    achieved?: IntFilter<"PredefinedInputDistribution"> | number
    district?: StringFilter<"PredefinedInputDistribution"> | string
    village?: StringFilter<"PredefinedInputDistribution"> | string
    block?: StringFilter<"PredefinedInputDistribution"> | string
    remarks?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    units?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    imageUrl?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    imageKey?: StringNullableFilter<"PredefinedInputDistribution"> | string | null
    createdAt?: DateTimeFilter<"PredefinedInputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedInputDistribution"> | Date | string
  }

  export type CustomInputDistributionUpsertWithWhereUniqueWithoutInputDistributionInput = {
    where: CustomInputDistributionWhereUniqueInput
    update: XOR<CustomInputDistributionUpdateWithoutInputDistributionInput, CustomInputDistributionUncheckedUpdateWithoutInputDistributionInput>
    create: XOR<CustomInputDistributionCreateWithoutInputDistributionInput, CustomInputDistributionUncheckedCreateWithoutInputDistributionInput>
  }

  export type CustomInputDistributionUpdateWithWhereUniqueWithoutInputDistributionInput = {
    where: CustomInputDistributionWhereUniqueInput
    data: XOR<CustomInputDistributionUpdateWithoutInputDistributionInput, CustomInputDistributionUncheckedUpdateWithoutInputDistributionInput>
  }

  export type CustomInputDistributionUpdateManyWithWhereWithoutInputDistributionInput = {
    where: CustomInputDistributionScalarWhereInput
    data: XOR<CustomInputDistributionUpdateManyMutationInput, CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionInput>
  }

  export type CustomInputDistributionScalarWhereInput = {
    AND?: CustomInputDistributionScalarWhereInput | CustomInputDistributionScalarWhereInput[]
    OR?: CustomInputDistributionScalarWhereInput[]
    NOT?: CustomInputDistributionScalarWhereInput | CustomInputDistributionScalarWhereInput[]
    id?: StringFilter<"CustomInputDistribution"> | string
    inputDistributionId?: StringFilter<"CustomInputDistribution"> | string
    activityType?: StringFilter<"CustomInputDistribution"> | string
    name?: StringFilter<"CustomInputDistribution"> | string
    target?: IntFilter<"CustomInputDistribution"> | number
    achieved?: IntFilter<"CustomInputDistribution"> | number
    district?: StringFilter<"CustomInputDistribution"> | string
    village?: StringFilter<"CustomInputDistribution"> | string
    block?: StringFilter<"CustomInputDistribution"> | string
    remarks?: StringNullableFilter<"CustomInputDistribution"> | string | null
    units?: StringNullableFilter<"CustomInputDistribution"> | string | null
    imageUrl?: StringNullableFilter<"CustomInputDistribution"> | string | null
    imageKey?: StringNullableFilter<"CustomInputDistribution"> | string | null
    createdAt?: DateTimeFilter<"CustomInputDistribution"> | Date | string
    updatedAt?: DateTimeFilter<"CustomInputDistribution"> | Date | string
  }

  export type InputDistributionCreateWithoutPredefinedItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutInputDistributionsInput
    quarter: QuarterCreateNestedOneWithoutInputDistributionsInput
    customItems?: CustomInputDistributionCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionUncheckedCreateWithoutPredefinedItemsInput = {
    id?: string
    projectId: string
    quarterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customItems?: CustomInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionCreateOrConnectWithoutPredefinedItemsInput = {
    where: InputDistributionWhereUniqueInput
    create: XOR<InputDistributionCreateWithoutPredefinedItemsInput, InputDistributionUncheckedCreateWithoutPredefinedItemsInput>
  }

  export type InputDistributionUpsertWithoutPredefinedItemsInput = {
    update: XOR<InputDistributionUpdateWithoutPredefinedItemsInput, InputDistributionUncheckedUpdateWithoutPredefinedItemsInput>
    create: XOR<InputDistributionCreateWithoutPredefinedItemsInput, InputDistributionUncheckedCreateWithoutPredefinedItemsInput>
    where?: InputDistributionWhereInput
  }

  export type InputDistributionUpdateToOneWithWhereWithoutPredefinedItemsInput = {
    where?: InputDistributionWhereInput
    data: XOR<InputDistributionUpdateWithoutPredefinedItemsInput, InputDistributionUncheckedUpdateWithoutPredefinedItemsInput>
  }

  export type InputDistributionUpdateWithoutPredefinedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutInputDistributionsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutInputDistributionsNestedInput
    customItems?: CustomInputDistributionUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateWithoutPredefinedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customItems?: CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionCreateWithoutCustomItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutInputDistributionsInput
    quarter: QuarterCreateNestedOneWithoutInputDistributionsInput
    predefinedItems?: PredefinedInputDistributionCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionUncheckedCreateWithoutCustomItemsInput = {
    id?: string
    projectId: string
    quarterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedCreateNestedManyWithoutInputDistributionInput
  }

  export type InputDistributionCreateOrConnectWithoutCustomItemsInput = {
    where: InputDistributionWhereUniqueInput
    create: XOR<InputDistributionCreateWithoutCustomItemsInput, InputDistributionUncheckedCreateWithoutCustomItemsInput>
  }

  export type InputDistributionUpsertWithoutCustomItemsInput = {
    update: XOR<InputDistributionUpdateWithoutCustomItemsInput, InputDistributionUncheckedUpdateWithoutCustomItemsInput>
    create: XOR<InputDistributionCreateWithoutCustomItemsInput, InputDistributionUncheckedCreateWithoutCustomItemsInput>
    where?: InputDistributionWhereInput
  }

  export type InputDistributionUpdateToOneWithWhereWithoutCustomItemsInput = {
    where?: InputDistributionWhereInput
    data: XOR<InputDistributionUpdateWithoutCustomItemsInput, InputDistributionUncheckedUpdateWithoutCustomItemsInput>
  }

  export type InputDistributionUpdateWithoutCustomItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutInputDistributionsNestedInput
    quarter?: QuarterUpdateOneRequiredWithoutInputDistributionsNestedInput
    predefinedItems?: PredefinedInputDistributionUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateWithoutCustomItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
  }

  export type ProjectCreateWithoutTrainingsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flds?: FLDCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTrainingsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flds?: FLDUncheckedCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTrainingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTrainingsInput, ProjectUncheckedCreateWithoutTrainingsInput>
  }

  export type QuarterCreateWithoutTrainingsInput = {
    id?: string
    number: number
    year: number
    flds?: FLDCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUncheckedCreateWithoutTrainingsInput = {
    id?: string
    number: number
    year: number
    flds?: FLDUncheckedCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutQuarterInput
  }

  export type QuarterCreateOrConnectWithoutTrainingsInput = {
    where: QuarterWhereUniqueInput
    create: XOR<QuarterCreateWithoutTrainingsInput, QuarterUncheckedCreateWithoutTrainingsInput>
  }

  export type ProjectUpsertWithoutTrainingsInput = {
    update: XOR<ProjectUpdateWithoutTrainingsInput, ProjectUncheckedUpdateWithoutTrainingsInput>
    create: XOR<ProjectCreateWithoutTrainingsInput, ProjectUncheckedCreateWithoutTrainingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTrainingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTrainingsInput, ProjectUncheckedUpdateWithoutTrainingsInput>
  }

  export type ProjectUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flds?: FLDUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flds?: FLDUncheckedUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type QuarterUpsertWithoutTrainingsInput = {
    update: XOR<QuarterUpdateWithoutTrainingsInput, QuarterUncheckedUpdateWithoutTrainingsInput>
    create: XOR<QuarterCreateWithoutTrainingsInput, QuarterUncheckedCreateWithoutTrainingsInput>
    where?: QuarterWhereInput
  }

  export type QuarterUpdateToOneWithWhereWithoutTrainingsInput = {
    where?: QuarterWhereInput
    data: XOR<QuarterUpdateWithoutTrainingsInput, QuarterUncheckedUpdateWithoutTrainingsInput>
  }

  export type QuarterUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    flds?: FLDUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterUncheckedUpdateWithoutTrainingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    flds?: FLDUncheckedUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterNestedInput
  }

  export type ProjectCreateWithoutFldsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFldsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFldsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFldsInput, ProjectUncheckedCreateWithoutFldsInput>
  }

  export type QuarterCreateWithoutFldsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUncheckedCreateWithoutFldsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingUncheckedCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutQuarterInput
  }

  export type QuarterCreateOrConnectWithoutFldsInput = {
    where: QuarterWhereUniqueInput
    create: XOR<QuarterCreateWithoutFldsInput, QuarterUncheckedCreateWithoutFldsInput>
  }

  export type ProjectUpsertWithoutFldsInput = {
    update: XOR<ProjectUpdateWithoutFldsInput, ProjectUncheckedUpdateWithoutFldsInput>
    create: XOR<ProjectCreateWithoutFldsInput, ProjectUncheckedCreateWithoutFldsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFldsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFldsInput, ProjectUncheckedUpdateWithoutFldsInput>
  }

  export type ProjectUpdateWithoutFldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type QuarterUpsertWithoutFldsInput = {
    update: XOR<QuarterUpdateWithoutFldsInput, QuarterUncheckedUpdateWithoutFldsInput>
    create: XOR<QuarterCreateWithoutFldsInput, QuarterUncheckedCreateWithoutFldsInput>
    where?: QuarterWhereInput
  }

  export type QuarterUpdateToOneWithWhereWithoutFldsInput = {
    where?: QuarterWhereInput
    data: XOR<QuarterUpdateWithoutFldsInput, QuarterUncheckedUpdateWithoutFldsInput>
  }

  export type QuarterUpdateWithoutFldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterUncheckedUpdateWithoutFldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUncheckedUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterNestedInput
  }

  export type ProjectCreateWithoutAwarenessProgramsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingCreateNestedManyWithoutProjectInput
    flds?: FLDCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAwarenessProgramsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutProjectInput
    flds?: FLDUncheckedCreateNestedManyWithoutProjectInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAwarenessProgramsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAwarenessProgramsInput, ProjectUncheckedCreateWithoutAwarenessProgramsInput>
  }

  export type QuarterCreateWithoutAwarenessProgramsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingCreateNestedManyWithoutQuarterInput
    flds?: FLDCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUncheckedCreateWithoutAwarenessProgramsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingUncheckedCreateNestedManyWithoutQuarterInput
    flds?: FLDUncheckedCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutQuarterInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedCreateNestedManyWithoutQuarterInput
  }

  export type QuarterCreateOrConnectWithoutAwarenessProgramsInput = {
    where: QuarterWhereUniqueInput
    create: XOR<QuarterCreateWithoutAwarenessProgramsInput, QuarterUncheckedCreateWithoutAwarenessProgramsInput>
  }

  export type ProjectUpsertWithoutAwarenessProgramsInput = {
    update: XOR<ProjectUpdateWithoutAwarenessProgramsInput, ProjectUncheckedUpdateWithoutAwarenessProgramsInput>
    create: XOR<ProjectCreateWithoutAwarenessProgramsInput, ProjectUncheckedCreateWithoutAwarenessProgramsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAwarenessProgramsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAwarenessProgramsInput, ProjectUncheckedUpdateWithoutAwarenessProgramsInput>
  }

  export type ProjectUpdateWithoutAwarenessProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUpdateManyWithoutProjectNestedInput
    flds?: FLDUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAwarenessProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutProjectNestedInput
    flds?: FLDUncheckedUpdateManyWithoutProjectNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type QuarterUpsertWithoutAwarenessProgramsInput = {
    update: XOR<QuarterUpdateWithoutAwarenessProgramsInput, QuarterUncheckedUpdateWithoutAwarenessProgramsInput>
    create: XOR<QuarterCreateWithoutAwarenessProgramsInput, QuarterUncheckedCreateWithoutAwarenessProgramsInput>
    where?: QuarterWhereInput
  }

  export type QuarterUpdateToOneWithWhereWithoutAwarenessProgramsInput = {
    where?: QuarterWhereInput
    data: XOR<QuarterUpdateWithoutAwarenessProgramsInput, QuarterUncheckedUpdateWithoutAwarenessProgramsInput>
  }

  export type QuarterUpdateWithoutAwarenessProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUpdateManyWithoutQuarterNestedInput
    flds?: FLDUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterUncheckedUpdateWithoutAwarenessProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUncheckedUpdateManyWithoutQuarterNestedInput
    flds?: FLDUncheckedUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutQuarterNestedInput
    infrastructureDevelopments?: InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterNestedInput
  }

  export type ProjectCreateWithoutInfrastructureDevelopmentsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingCreateNestedManyWithoutProjectInput
    flds?: FLDCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutInfrastructureDevelopmentsInput = {
    id?: string
    implementingAgency: string
    title: string
    locationState: string
    director: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainings?: TrainingUncheckedCreateNestedManyWithoutProjectInput
    flds?: FLDUncheckedCreateNestedManyWithoutProjectInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutProjectInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutInfrastructureDevelopmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutInfrastructureDevelopmentsInput, ProjectUncheckedCreateWithoutInfrastructureDevelopmentsInput>
  }

  export type QuarterCreateWithoutInfrastructureDevelopmentsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingCreateNestedManyWithoutQuarterInput
    flds?: FLDCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionCreateNestedManyWithoutQuarterInput
  }

  export type QuarterUncheckedCreateWithoutInfrastructureDevelopmentsInput = {
    id?: string
    number: number
    year: number
    trainings?: TrainingUncheckedCreateNestedManyWithoutQuarterInput
    flds?: FLDUncheckedCreateNestedManyWithoutQuarterInput
    awarenessPrograms?: AwarenessProgramUncheckedCreateNestedManyWithoutQuarterInput
    inputDistributions?: InputDistributionUncheckedCreateNestedManyWithoutQuarterInput
  }

  export type QuarterCreateOrConnectWithoutInfrastructureDevelopmentsInput = {
    where: QuarterWhereUniqueInput
    create: XOR<QuarterCreateWithoutInfrastructureDevelopmentsInput, QuarterUncheckedCreateWithoutInfrastructureDevelopmentsInput>
  }

  export type ProjectUpsertWithoutInfrastructureDevelopmentsInput = {
    update: XOR<ProjectUpdateWithoutInfrastructureDevelopmentsInput, ProjectUncheckedUpdateWithoutInfrastructureDevelopmentsInput>
    create: XOR<ProjectCreateWithoutInfrastructureDevelopmentsInput, ProjectUncheckedCreateWithoutInfrastructureDevelopmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutInfrastructureDevelopmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutInfrastructureDevelopmentsInput, ProjectUncheckedUpdateWithoutInfrastructureDevelopmentsInput>
  }

  export type ProjectUpdateWithoutInfrastructureDevelopmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUpdateManyWithoutProjectNestedInput
    flds?: FLDUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutInfrastructureDevelopmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    implementingAgency?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    locationState?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainings?: TrainingUncheckedUpdateManyWithoutProjectNestedInput
    flds?: FLDUncheckedUpdateManyWithoutProjectNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutProjectNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type QuarterUpsertWithoutInfrastructureDevelopmentsInput = {
    update: XOR<QuarterUpdateWithoutInfrastructureDevelopmentsInput, QuarterUncheckedUpdateWithoutInfrastructureDevelopmentsInput>
    create: XOR<QuarterCreateWithoutInfrastructureDevelopmentsInput, QuarterUncheckedCreateWithoutInfrastructureDevelopmentsInput>
    where?: QuarterWhereInput
  }

  export type QuarterUpdateToOneWithWhereWithoutInfrastructureDevelopmentsInput = {
    where?: QuarterWhereInput
    data: XOR<QuarterUpdateWithoutInfrastructureDevelopmentsInput, QuarterUncheckedUpdateWithoutInfrastructureDevelopmentsInput>
  }

  export type QuarterUpdateWithoutInfrastructureDevelopmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUpdateManyWithoutQuarterNestedInput
    flds?: FLDUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUpdateManyWithoutQuarterNestedInput
  }

  export type QuarterUncheckedUpdateWithoutInfrastructureDevelopmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    trainings?: TrainingUncheckedUpdateManyWithoutQuarterNestedInput
    flds?: FLDUncheckedUpdateManyWithoutQuarterNestedInput
    awarenessPrograms?: AwarenessProgramUncheckedUpdateManyWithoutQuarterNestedInput
    inputDistributions?: InputDistributionUncheckedUpdateManyWithoutQuarterNestedInput
  }

  export type TrainingCreateManyProjectInput = {
    id?: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FLDCreateManyProjectInput = {
    id?: string
    quarterId: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwarenessProgramCreateManyProjectInput = {
    id?: string
    quarterId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfrastructureDevelopmentCreateManyProjectInput = {
    id?: string
    quarterId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InputDistributionCreateManyProjectInput = {
    id?: string
    quarterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarter?: QuarterUpdateOneRequiredWithoutTrainingsNestedInput
  }

  export type TrainingUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarter?: QuarterUpdateOneRequiredWithoutFldsNestedInput
  }

  export type FLDUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarter?: QuarterUpdateOneRequiredWithoutAwarenessProgramsNestedInput
  }

  export type AwarenessProgramUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarter?: QuarterUpdateOneRequiredWithoutInfrastructureDevelopmentsNestedInput
  }

  export type InfrastructureDevelopmentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InputDistributionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarter?: QuarterUpdateOneRequiredWithoutInputDistributionsNestedInput
    predefinedItems?: PredefinedInputDistributionUpdateManyWithoutInputDistributionNestedInput
    customItems?: CustomInputDistributionUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
    customItems?: CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    quarterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingCreateManyQuarterInput = {
    id?: string
    projectId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FLDCreateManyQuarterInput = {
    id?: string
    projectId: string
    target: number
    achieved: number
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwarenessProgramCreateManyQuarterInput = {
    id?: string
    projectId: string
    title: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    beneficiaryMale?: number
    beneficiaryFemale?: number
    imageUrl?: string | null
    imageKey?: string | null
    units?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InputDistributionCreateManyQuarterInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfrastructureDevelopmentCreateManyQuarterInput = {
    id?: string
    projectId: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTrainingsNestedInput
  }

  export type TrainingUncheckedUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingUncheckedUpdateManyWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFldsNestedInput
  }

  export type FLDUncheckedUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FLDUncheckedUpdateManyWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAwarenessProgramsNestedInput
  }

  export type AwarenessProgramUncheckedUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwarenessProgramUncheckedUpdateManyWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    beneficiaryMale?: IntFieldUpdateOperationsInput | number
    beneficiaryFemale?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InputDistributionUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutInputDistributionsNestedInput
    predefinedItems?: PredefinedInputDistributionUpdateManyWithoutInputDistributionNestedInput
    customItems?: CustomInputDistributionUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predefinedItems?: PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
    customItems?: CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionNestedInput
  }

  export type InputDistributionUncheckedUpdateManyWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutInfrastructureDevelopmentsNestedInput
  }

  export type InfrastructureDevelopmentUncheckedUpdateWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfrastructureDevelopmentUncheckedUpdateManyWithoutQuarterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedInputDistributionCreateManyInputDistributionInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomInputDistributionCreateManyInputDistributionInput = {
    id?: string
    activityType: string
    name: string
    target: number
    achieved: number
    district: string
    village: string
    block: string
    remarks?: string | null
    units?: string | null
    imageUrl?: string | null
    imageKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedInputDistributionUpdateWithoutInputDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedInputDistributionUncheckedUpdateWithoutInputDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedInputDistributionUncheckedUpdateManyWithoutInputDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInputDistributionUpdateWithoutInputDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInputDistributionUncheckedUpdateWithoutInputDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomInputDistributionUncheckedUpdateManyWithoutInputDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    target?: IntFieldUpdateOperationsInput | number
    achieved?: IntFieldUpdateOperationsInput | number
    district?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}