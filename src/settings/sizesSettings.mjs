/**
 * @module "SizesSettings" class
 * @description Class representing an array of size settings
 */

"use strict";

import { SizeSettings } from "./sizeSettings.mjs";

export class SizesSettings extends Array {
    constructor() {
        super();
    }

    validate(pValidator) {
        for (const item of this)
            item.validate(pValidator);
    }

    toData() {
        const data = new Array();
        for (const item of this) {
            const dataItem = item.toData();
            data.push(dataItem);
        }
        return data;
    }

    fromData(pData) {
        if (Array.isArray(pData))
            for (const dataItem of pData) {
                const item = (new SizeSettings()).fromData(dataItem);
                this.push(item);
            }
        return this;
    }
}