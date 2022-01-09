/**
 * @module "IconIndex" class
 * @description Class representing new icon index
 */

"use strict";

export class IconIndex extends Array {
    constructor() {
        super();
    }

    toString() {
        let string = "";
        for (const item of this) {
            if (string)
                string += ",";
            string += item.directory;
        }
        string += "\n\n";
        for (const item of this)
            string += item.toString() + "\n";
        return string;
    }
}