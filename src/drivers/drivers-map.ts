import { SolvableType } from "../contracts";
import { ClassicDriver } from "./classic";

export const driversMap = {
    [SolvableType.Classic]: ClassicDriver
}