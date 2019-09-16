declare class Counter {
    private name;
    private value;
    private max;
    constructor(name: string, max: number);
    getValue(): number;
    canIncrement(): boolean;
    increment(): void;
}
declare const counter1: Counter;
declare const counter2: Counter;
