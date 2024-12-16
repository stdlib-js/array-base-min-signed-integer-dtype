// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t<0?t>=-128?"int8":t>=-32768?"int16":t>=-2147483648?"int32":"float64":t<=127?"int8":t<=32767?"int16":t<=2147483647?"int32":"float64"}export{t as default};
//# sourceMappingURL=mod.js.map
