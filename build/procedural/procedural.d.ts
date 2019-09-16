interface Counter {
    name: string;
    value: number;
    max: number;
}
declare function incrementCounter(counter: Counter): void;
declare function canIncrementCounter(counter: Counter): boolean;
declare const counter1: Counter;
declare const counter2: Counter;
