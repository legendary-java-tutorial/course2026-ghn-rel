#!/usr/bin/env node
import { translit } from "./index.ts";
console.log(translit(process.argv.slice(2).join(" ")));
