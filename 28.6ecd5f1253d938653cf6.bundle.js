(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1236:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _datatables=_interopRequireDefault(__webpack_require__(970)),_propTypes=_interopRequireDefault(__webpack_require__(2)),_numberFormat=__webpack_require__(311),_fixTableHeight=_interopRequireDefault(__webpack_require__(1238));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}__webpack_require__(972);var $=_datatables.default.$,propTypes={data:_propTypes.default.shape({html:_propTypes.default.string,columns:_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.arrayOf(_propTypes.default.string)]))}),height:_propTypes.default.number,columnFormats:_propTypes.default.objectOf(_propTypes.default.string),numberFormat:_propTypes.default.string,numGroups:_propTypes.default.number,verboseMap:_propTypes.default.objectOf(_propTypes.default.string)};function PivotTable(a,b){var c=b.data,d=b.height,e=b.columnFormats,f=b.numberFormat,g=b.numGroups,h=b.verboseMap,i=c.html,j=c.columns,k=a,l=$(a);k.innerHTML=i;var m=Array.isArray(j[0])?j.map(function(a){return a[0]}):j,n=function(){var a=$(this)[0].textContent;$(this)[0].textContent=h[a]||a};(l.find("thead tr:first th").each(n),l.find("thead tr th:first-child").each(n),l.find("tbody tr").each(function(){$(this).find("td").each(function(a){var b=Number.isNaN,c=m[a],d=e[c]||f||".3s",g=$(this)[0].textContent;b(g)||""===g||($(this)[0].textContent=(0,_numberFormat.formatNumber)(d,g),$(this).attr("data-sort",g))})}),1===g)?(k.style.overflow="hidden",l.find("table").DataTable({paging:!1,searching:!1,bInfo:!1,scrollY:d+"px",scrollCollapse:!0,scrollX:!0}).column("-1").order("desc").draw(),(0,_fixTableHeight.default)(l.find(".dataTables_wrapper"),d)):(k.style.overflow="auto",k.style.height=d+10+"px")}PivotTable.displayName="PivotTable",PivotTable.propTypes=propTypes;var _default=PivotTable;exports.default=_default},1238:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a,b){var c=a.find(".dataTables_scrollHead").height(),d=a.find(".dataTables_filter").height()||0,e=a.find(".dataTables_length").height()||0,f=a.find(".dataTables_paginate").height()||0,g=e>d?e:d;a.find(".dataTables_scrollBody").css("max-height",b-c-g-f)}},850:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var a,_chart=__webpack_require__(1),_PivotTable=(a=__webpack_require__(1236))&&a.__esModule?a:{default:a};var _default=(0,_chart.reactify)(_PivotTable.default);exports.default=_default}}]);
//# sourceMappingURL=28.6ecd5f1253d938653cf6.bundle.js.map