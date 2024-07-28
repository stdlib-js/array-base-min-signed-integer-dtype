// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int8-min@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16-min@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-min@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int8-max@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16-max@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@v0.3.0-esm/index.mjs";function d(d){return d<0?d>=t?"int8":d>=s?"int16":d>=n?"int32":"float64":d<=i?"int8":d<=m?"int16":d<=e?"int32":"float64"}export{d as default};
//# sourceMappingURL=index.mjs.map
