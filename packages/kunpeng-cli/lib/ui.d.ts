declare type Options = {
    host: string;
    port: number;
};
export default function UI(options: Options, context?: string): Promise<void>;
export {};
