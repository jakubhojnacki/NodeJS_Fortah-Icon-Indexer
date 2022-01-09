/**
 * @module "ArgName" class
 * @description Enumerator with arg names
 */

import { Enum } from "core-library";
import { EnumItem } from "core-library";

export class ArgName {
    static get sourcePath() { return "SourcePath"; }
    static get destinationPath() { return "DestinationPath"; }

    static get values() { return [
        new EnumItem(ArgName.sourcePath),
        new EnumItem(ArgName.destinationPath)
    ]; }

    static parse(pText) {
        return Enum.parse(pText, ArgName.values, ArgName.name);
    }

    static toString(pValue) {
        return Enum.toString(pValue, ArgName.values, ArgName.name);
    }
}