"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversMap = void 0;
const contracts_1 = require("../contracts");
const classic_1 = require("./classic");
exports.driversMap = {
    [contracts_1.SolvableType.Classic]: classic_1.ClassicDriver
};
