"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ItemList(param) {\n    let { session  } = param;\n    _s();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient)();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        desc: \"\",\n        quantity: 1,\n        area: \"\",\n        container: \"\",\n        images: {\n            images: [],\n            descriptions: [],\n            aiDescriptions: []\n        },\n        attributes: {\n            color: null,\n            type: null,\n            size: null,\n            material: null,\n            dimensions: null,\n            brand: null,\n            weight: null,\n            model: null,\n            sku: null,\n            pattern: null,\n            condition: null\n        }\n    });\n    const [errorText, setErrorText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchItems = async ()=>{\n            const { data , error  } = await supabase.from(\"items\").select(\"*\").order(\"id\", {\n                ascending: true\n            });\n            if (error) {\n                console.error(\"error\", error);\n            } else {\n                setItems(data || []);\n            }\n        };\n        fetchItems();\n    }, [\n        supabase\n    ]);\n    const addItem = async (e)=>{\n        e.preventDefault();\n        const { data , error  } = await supabase.from(\"items\").insert([\n            {\n                ...newItem,\n                dateAdded: new Date().toISOString(),\n                lastUpdate: new Date().toISOString()\n            }\n        ]).single();\n        if (error) {\n            setErrorText(error.message);\n        } else if (data) {\n            setItems([\n                ...items,\n                data\n            ]);\n            // Reset newItem\n            setNewItem({\n                name: \"\",\n                desc: \"\",\n                quantity: 1,\n                area: \"\",\n                container: \"\",\n                images: {\n                    images: [],\n                    descriptions: [],\n                    aiDescriptions: []\n                },\n                attributes: {\n                    color: null,\n                    type: null,\n                    size: null,\n                    material: null,\n                    dimensions: null,\n                    brand: null,\n                    weight: null,\n                    model: null,\n                    sku: null,\n                    pattern: null,\n                    condition: null\n                }\n            });\n            setErrorText(\"\"); // Clear any errors on success\n        }\n    };\n    const handleInputChange = (name, value)=>{\n        setNewItem((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleAttributeChange = (name, value)=>{\n        setNewItem((prev)=>({\n                ...prev,\n                attributes: {\n                    ...prev.attributes,\n                    [name]: value\n                }\n            }));\n    };\n    const deleteItem = async (id)=>{\n        const { error  } = await supabase.from(\"items\").delete().eq(\"id\", id);\n        if (error) {\n            console.error(\"error\", error);\n        } else {\n            setItems(items.filter((item)=>item.id !== id));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-12\",\n                children: \"Items List\"\n            }, void 0, false, {\n                fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addItem,\n                className: \"flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"name\",\n                        value: newItem.name,\n                        onChange: (e)=>handleInputChange(\"name\", e.target.value),\n                        placeholder: \"Item Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-black\",\n                        type: \"submit\",\n                        children: \"Add Item\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            !!errorText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-600\",\n                children: errorText\n            }, void 0, false, {\n                fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                lineNumber: 166,\n                columnNumber: 23\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow overflow-hidden rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deleteItem(item.id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 15\n                            }, this)\n                        }, item.id, false, {\n                            fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                            lineNumber: 170,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasklenovich/Documents/GitHub/pim2/components/TodoList.tsx\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemList, \"Q43cA9UpsS9lyZUme7ZwbPNXryY=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient\n    ];\n});\n_c = ItemList;\nvar _c;\n$RefreshReg$(_c, \"ItemList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMEU7QUFDTjtBQThCckQsU0FBU0csU0FBUyxLQUFpQyxFQUFFO1FBQW5DLEVBQUVDLFFBQU8sRUFBd0IsR0FBakM7O0lBQy9CLE1BQU1DLFdBQVdMLCtFQUFpQkE7SUFDbEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFnQjtRQUNwRFEsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFFBQVE7WUFDTkEsUUFBUSxFQUFFO1lBQ1ZDLGNBQWMsRUFBRTtZQUNoQkMsZ0JBQWdCLEVBQUU7UUFDcEI7UUFDQUMsWUFBWTtZQUNWQyxPQUFPLElBQUk7WUFDWEMsTUFBTSxJQUFJO1lBQ1ZDLE1BQU0sSUFBSTtZQUNWQyxVQUFVLElBQUk7WUFDZEMsWUFBWSxJQUFJO1lBQ2hCQyxPQUFPLElBQUk7WUFDWEMsUUFBUSxJQUFJO1lBQ1pDLE9BQU8sSUFBSTtZQUNYQyxLQUFLLElBQUk7WUFDVEMsU0FBUyxJQUFJO1lBQ2JDLFdBQVcsSUFBSTtRQUNqQjtJQUNGO0lBQ0EsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0rQixhQUFhLFVBQVk7WUFDN0IsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU03QixTQUMzQjhCLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUMsS0FDUEMsS0FBSyxDQUFDLE1BQU07Z0JBQUVDLFdBQVcsSUFBSTtZQUFDO1lBRWpDLElBQUlKLE9BQU87Z0JBQ1RLLFFBQVFMLEtBQUssQ0FBQyxTQUFTQTtZQUN6QixPQUFPO2dCQUNMM0IsU0FBUzBCLFFBQVEsRUFBRTtZQUNyQixDQUFDO1FBQ0g7UUFFQUQ7SUFDRixHQUFHO1FBQUMzQjtLQUFTO0lBRWIsTUFBTW1DLFVBQVUsT0FBT0MsSUFBaUI7UUFDdENBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTSxFQUFFVCxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU03QixTQUMzQjhCLElBQUksQ0FBQyxTQUNMUSxNQUFNLENBQUM7WUFDTjtnQkFDRSxHQUFHbkMsT0FBTztnQkFDVm9DLFdBQVcsSUFBSUMsT0FBT0MsV0FBVztnQkFDakNDLFlBQVksSUFBSUYsT0FBT0MsV0FBVztZQUNwQztTQUNELEVBQ0FFLE1BQU07UUFFVCxJQUFJZCxPQUFPO1lBQ1RILGFBQWFHLE1BQU1lLE9BQU87UUFDNUIsT0FBTyxJQUFJaEIsTUFBTTtZQUNmMUIsU0FBUzttQkFBSUQ7Z0JBQU8yQjthQUFLO1lBQ3pCLGdCQUFnQjtZQUNoQnhCLFdBQVc7Z0JBQ1RDLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFdBQVc7Z0JBQ1hDLFFBQVE7b0JBQ05BLFFBQVEsRUFBRTtvQkFDVkMsY0FBYyxFQUFFO29CQUNoQkMsZ0JBQWdCLEVBQUU7Z0JBQ3BCO2dCQUNBQyxZQUFZO29CQUNWQyxPQUFPLElBQUk7b0JBQ1hDLE1BQU0sSUFBSTtvQkFDVkMsTUFBTSxJQUFJO29CQUNWQyxVQUFVLElBQUk7b0JBQ2RDLFlBQVksSUFBSTtvQkFDaEJDLE9BQU8sSUFBSTtvQkFDWEMsUUFBUSxJQUFJO29CQUNaQyxPQUFPLElBQUk7b0JBQ1hDLEtBQUssSUFBSTtvQkFDVEMsU0FBUyxJQUFJO29CQUNiQyxXQUFXLElBQUk7Z0JBQ2pCO1lBQ0Y7WUFDQUUsYUFBYSxLQUFLLDhCQUE4QjtRQUNsRCxDQUFDO0lBQ0g7SUFFQSxNQUFNbUIsb0JBQW9CLENBQUN4QyxNQUFjeUMsUUFBc0M7UUFDN0UxQyxXQUFXLENBQUMyQyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQzFDLEtBQUssRUFBRXlDO1lBQU07SUFDakQ7SUFFQSxNQUFNRSx3QkFBd0IsQ0FBQzNDLE1BQWN5QyxRQUFrQjtRQUM3RDFDLFdBQVcsQ0FBQzJDLE9BQVU7Z0JBQ3BCLEdBQUdBLElBQUk7Z0JBQ1BsQyxZQUFZO29CQUNWLEdBQUdrQyxLQUFLbEMsVUFBVTtvQkFDbEIsQ0FBQ1IsS0FBSyxFQUFFeUM7Z0JBQ1Y7WUFDRjtJQUNGO0lBRUEsTUFBTUcsYUFBYSxPQUFPQyxLQUFlO1FBQ3ZDLE1BQU0sRUFBRXJCLE1BQUssRUFBRSxHQUFHLE1BQU03QixTQUFTOEIsSUFBSSxDQUFDLFNBQVNxQixNQUFNLEdBQUdDLEVBQUUsQ0FBQyxNQUFNRjtRQUNqRSxJQUFJckIsT0FBTztZQUNUSyxRQUFRTCxLQUFLLENBQUMsU0FBU0E7UUFDekIsT0FBTztZQUNMM0IsU0FBU0QsTUFBTW9ELE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLSixFQUFFLEtBQUtBO1FBQzlDLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVE7Ozs7OzswQkFDdEIsOERBQUNFO2dCQUFLQyxVQUFVeEI7Z0JBQVNxQixXQUFVOztrQ0FJakMsOERBQUNJO3dCQUNDdkQsTUFBSzt3QkFDTHlDLE9BQU8zQyxRQUFRRSxJQUFJO3dCQUNuQndELFVBQVUsQ0FBQ3pCLElBQU1TLGtCQUFrQixRQUFRVCxFQUFFMEIsTUFBTSxDQUFDaEIsS0FBSzt3QkFDekRpQixhQUFZOzs7Ozs7a0NBR2QsOERBQUNDO3dCQUFPUixXQUFVO3dCQUFZekMsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBRTdDLENBQUMsQ0FBQ1UsMkJBQWEsOERBQUM4QjtnQkFBSUMsV0FBVTswQkFBZ0IvQjs7Ozs7OzBCQUMvQyw4REFBQzhCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDUzs4QkFDRWhFLE1BQU1pRSxHQUFHLENBQUMsQ0FBQ1oscUJBQ1YsOERBQUNhO3NDQUVDLDRFQUFDSDtnQ0FBT0ksU0FBUyxJQUFNbkIsV0FBV0ssS0FBS0osRUFBRTswQ0FBRzs7Ozs7OzJCQUZyQ0ksS0FBS0osRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzVCLENBQUM7R0FsSnVCcEQ7O1FBQ0xILDJFQUFpQkE7OztLQURaRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnQC9saWIvc2NoZW1hJztcbmltcG9ydCB7IFNlc3Npb24sIHVzZVN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEl0ZW0gPSBEYXRhYmFzZVsncHVibGljJ11bJ1RhYmxlcyddWydpdGVtcyddWydSb3cnXTtcblxuaW50ZXJmYWNlIE5ld0l0ZW1GaWVsZHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgYXJlYTogc3RyaW5nO1xuICBjb250YWluZXI6IHN0cmluZztcbiAgaW1hZ2VzOiB7XG4gICAgaW1hZ2VzOiBzdHJpbmdbXTtcbiAgICBkZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgIGFpRGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgfTtcbiAgYXR0cmlidXRlczoge1xuICAgIGNvbG9yOiBzdHJpbmcgfCBudWxsO1xuICAgIHR5cGU6IHN0cmluZyB8IG51bGw7XG4gICAgc2l6ZTogc3RyaW5nIHwgbnVsbDtcbiAgICBtYXRlcmlhbDogc3RyaW5nIHwgbnVsbDtcbiAgICBkaW1lbnNpb25zOiBzdHJpbmcgfCBudWxsO1xuICAgIGJyYW5kOiBzdHJpbmcgfCBudWxsO1xuICAgIHdlaWdodDogc3RyaW5nIHwgbnVsbDtcbiAgICBtb2RlbDogc3RyaW5nIHwgbnVsbDtcbiAgICBza3U6IHN0cmluZyB8IG51bGw7XG4gICAgcGF0dGVybjogc3RyaW5nIHwgbnVsbDtcbiAgICBjb25kaXRpb246IHN0cmluZyB8IG51bGw7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0KHsgc2Vzc2lvbiB9OiB7IHNlc3Npb246IFNlc3Npb24gfSkge1xuICBjb25zdCBzdXBhYmFzZSA9IHVzZVN1cGFiYXNlQ2xpZW50PERhdGFiYXNlPigpO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPEl0ZW1bXT4oW10pO1xuICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtRmllbGRzPih7XG4gICAgbmFtZTogJycsXG4gICAgZGVzYzogJycsXG4gICAgcXVhbnRpdHk6IDEsIC8vIERlZmF1bHRpbmcgdG8gMSBmb3Igc2ltcGxpY2l0eVxuICAgIGFyZWE6ICcnLFxuICAgIGNvbnRhaW5lcjogJycsXG4gICAgaW1hZ2VzOiB7XG4gICAgICBpbWFnZXM6IFtdLFxuICAgICAgZGVzY3JpcHRpb25zOiBbXSxcbiAgICAgIGFpRGVzY3JpcHRpb25zOiBbXSxcbiAgICB9LFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGNvbG9yOiBudWxsLFxuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIHNpemU6IG51bGwsXG4gICAgICBtYXRlcmlhbDogbnVsbCxcbiAgICAgIGRpbWVuc2lvbnM6IG51bGwsXG4gICAgICBicmFuZDogbnVsbCxcbiAgICAgIHdlaWdodDogbnVsbCxcbiAgICAgIG1vZGVsOiBudWxsLFxuICAgICAgc2t1OiBudWxsLFxuICAgICAgcGF0dGVybjogbnVsbCxcbiAgICAgIGNvbmRpdGlvbjogbnVsbCxcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbZXJyb3JUZXh0LCBzZXRFcnJvclRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKCdpdGVtcycpXG4gICAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgICAub3JkZXIoJ2lkJywgeyBhc2NlbmRpbmc6IHRydWUgfSk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEl0ZW1zKGRhdGEgfHwgW10pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaEl0ZW1zKCk7XG4gIH0sIFtzdXBhYmFzZV0pO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnaXRlbXMnKVxuICAgICAgLmluc2VydChbXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5uZXdJdGVtLCBcbiAgICAgICAgICBkYXRlQWRkZWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgXG4gICAgICAgICAgbGFzdFVwZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgIF0pXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yVGV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEpIHtcbiAgICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgZGF0YV0pO1xuICAgICAgLy8gUmVzZXQgbmV3SXRlbVxuICAgICAgc2V0TmV3SXRlbSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBkZXNjOiAnJyxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIGFyZWE6ICcnLFxuICAgICAgICBjb250YWluZXI6ICcnLFxuICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW10sXG4gICAgICAgICAgYWlEZXNjcmlwdGlvbnM6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY29sb3I6IG51bGwsXG4gICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICBzaXplOiBudWxsLFxuICAgICAgICAgIG1hdGVyaWFsOiBudWxsLFxuICAgICAgICAgIGRpbWVuc2lvbnM6IG51bGwsXG4gICAgICAgICAgYnJhbmQ6IG51bGwsXG4gICAgICAgICAgd2VpZ2h0OiBudWxsLFxuICAgICAgICAgIG1vZGVsOiBudWxsLFxuICAgICAgICAgIHNrdTogbnVsbCxcbiAgICAgICAgICBwYXR0ZXJuOiBudWxsLFxuICAgICAgICAgIGNvbmRpdGlvbjogbnVsbCxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRFcnJvclRleHQoJycpOyAvLyBDbGVhciBhbnkgZXJyb3JzIG9uIHN1Y2Nlc3NcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10pID0+IHtcbiAgICBzZXROZXdJdGVtKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0TmV3SXRlbSgocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIC4uLnByZXYuYXR0cmlidXRlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdpdGVtcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJdGVtcyhpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0xMlwiPkl0ZW1zIExpc3Q8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2FkZEl0ZW19IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgey8qIEFkZGl0aW9uYWwgZm9ybSBmaWVsZHMgd2lsbCBnbyBoZXJlLCBvbWl0dGVkIGZvciBicmV2aXR5ICovfVxuICAgICAgICB7LyogQ2hhbmdlIGVhY2ggaW5wdXQncyBuYW1lIHRvIG1hdGNoIG5ld0l0ZW0ncyBzdHJ1Y3R1cmUgd2hlcmUgbmVlZGVkICovfVxuICAgICAgICB7LyogRm9yIGV4YW1wbGU6ICovfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdmFsdWU9e25ld0l0ZW0ubmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKCduYW1lJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSXRlbSBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qIENvbnRpbnVlIHdpdGggb3RoZXIgaW5wdXRzLCBhIHRleHRhcmVhIGZvciBkZXNjLCBpbnB1dHMgZm9yIGF0dHJpYnV0ZXMsIGV0Yy4gKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsYWNrXCIgdHlwZT1cInN1Ym1pdFwiPkFkZCBJdGVtPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7ISFlcnJvclRleHQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj57ZXJyb3JUZXh0fTwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgey8qIEl0ZW0gZGV0YWlscyBoZXJlICovfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oaXRlbS5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdXBhYmFzZUNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSXRlbUxpc3QiLCJzZXNzaW9uIiwic3VwYWJhc2UiLCJpdGVtcyIsInNldEl0ZW1zIiwibmV3SXRlbSIsInNldE5ld0l0ZW0iLCJuYW1lIiwiZGVzYyIsInF1YW50aXR5IiwiYXJlYSIsImNvbnRhaW5lciIsImltYWdlcyIsImRlc2NyaXB0aW9ucyIsImFpRGVzY3JpcHRpb25zIiwiYXR0cmlidXRlcyIsImNvbG9yIiwidHlwZSIsInNpemUiLCJtYXRlcmlhbCIsImRpbWVuc2lvbnMiLCJicmFuZCIsIndlaWdodCIsIm1vZGVsIiwic2t1IiwicGF0dGVybiIsImNvbmRpdGlvbiIsImVycm9yVGV4dCIsInNldEVycm9yVGV4dCIsImZldGNoSXRlbXMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJjb25zb2xlIiwiYWRkSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydCIsImRhdGVBZGRlZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImxhc3RVcGRhdGUiLCJzaW5nbGUiLCJtZXNzYWdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsInByZXYiLCJoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UiLCJkZWxldGVJdGVtIiwiaWQiLCJkZWxldGUiLCJlcSIsImZpbHRlciIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInVsIiwibWFwIiwibGkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n"));

/***/ })

});