import { Card } from "./card.model";

export class ApiResponse {
    data?: Card[];
    page?: number;
    pageSize?: number;
    count?: number;
    totalCount?: number;
}