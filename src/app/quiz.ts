import { JsonPipe } from "@angular/common";
import { JsonObjectExpression, ObjectLiteralExpression } from "typescript";

export interface quiz {
    quesno: string;
    ques: string;
    choice: any;
    ans: string;
}