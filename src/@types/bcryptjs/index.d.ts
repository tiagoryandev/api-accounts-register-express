declare module "bcryptjs" {
    export declare function hash(s: String, salt: Number | String): Promise<String>;

    export declare function compare(s: String, hash: String): Promise<boolean>;
}