import { JsonObjectExpression } from "typescript";

export interface quiz {
    id: string;
    ques: string;
    ans: string;
    meow: JsonObjectExpression;
}