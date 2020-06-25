!(function(t, e) {
  if ("object" === typeof exports && "object" === typeof module)
    module.exports = e();
  else if ("function" === typeof define && define.amd) define([], e);
  else {
    var n = e();
    for (var i in n) ("object" === typeof exports ? exports : t)[i] = n[i];
  }
})("undefined" !== typeof self ? self : this, function() {
  return (function(t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var a = (e[i] = { i, l: !1, exports: {} });
      return t[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (n.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var a in t)
            n.d(
              i,
              a,
              function(e) {
                return t[e];
              }.bind(null, a)
            );
        return i;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 8))
    );
  })([
    function(t, e, n) {
      "use strict";
      e.a = function() {
        var t = this,
          e = "",
          n = this.options,
          i = n.pageSizeOptions,
          a = n.pageSizeDisplayType,
          s = n.pageSize;
        return (
          "Dropdown" === a
            ? ((e = '<select  class="unx-select-pagesize '.concat(
                this.unxSelectors.unxPageSize,
                '">'
              )),
              i.forEach(function(t) {
                e +=
                  s == t
                    ? '<option selected id="'
                        .concat(t, '">')
                        .concat(t, "</option>")
                    : '<option id="'.concat(t, '">').concat(t, "</option>");
              }),
              (e += "</select>"))
            : i.forEach(function(n) {
                var i = s == n ? "selected-page-size" : "";
                e += '<button class="unx-btn-pagesize '
                  .concat(t.unxSelectors.unxPageSize, " ")
                  .concat(i, '" id="')
                  .concat(n, '">')
                  .concat(n, "</button>");
              }),
          "<div>\n        ".concat(e, "\n    </div>")
        );
      };
    },
    function(t, e, n) {
      "use strict";
      e.a = function(t, e, n, i) {
        t.addEventListener(e, function(t) {
          for (var e = t.target; e && e !== this; )
            e.matches(n) && i.call(e, t), (e = e.parentNode);
        });
      };
    },
    function(t, e, n) {
      "use strict";
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var a = {
          facetName: "v_price",
          displayName: "Price",
          position: 20,
          gap: 50,
          start: 0,
          end: 100,
          normalizeFact: 0,
          expo: -2,
          minX: 0,
          minY: 100,
          showValues: !0,
          rangeConfig: { start: 0, end: 100, minLabel: "Min", maxLabel: "Max" }
        },
        s = (function() {
          function t(e) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.options = Object.assign({}, a, e)),
              (this.state = {
                step: 0,
                startX: 0,
                startY: 100,
                x: this.options.minX,
                y: this.options.minY,
                selectedTouch: null,
                initialLeft: 0
              }),
              (this.id = this.options.facetName + "_rangeSlider"),
              (this.slideLeftId = "slider-touch-left"),
              (this.slideRightId = "slider-touch-right"),
              (this.slideLineId = "slider-line"),
              (this.innerLineId = "slider-inner-line"),
              (this.valueId = "valueContainer"),
              this.delegate(
                this.options.wrapper,
                "mousedown",
                "." + this.slideLeftId,
                this.onStart.bind(this)
              ),
              this.delegate(
                this.options.wrapper,
                "mousedown",
                "." + this.slideRightId,
                this.onStart.bind(this)
              ),
              this.delegate(
                this.options.wrapper,
                "touchstart",
                "." + this.slideLeftId,
                this.onStart.bind(this)
              ),
              this.delegate(
                this.options.wrapper,
                "touchstart",
                "." + this.slideRightId,
                this.onStart.bind(this)
              ),
              "function" === typeof this.options.onChange
                ? this.options.onChange.bind(this)
                : (this.options.onChange = function() {}),
              "function" === typeof this.options.onStop
                ? this.options.onStop.bind(this)
                : (this.options.onStop = function() {}),
              (this.onChange = this.onChange.bind(this)),
              (this.onMove = this.onMove.bind(this)),
              (this.onStop = this.onStop.bind(this)),
              (this.onStart = this.onStart.bind(this)),
              this.handleDocElemEvts.bind(this);
          }
          var e, n, s;
          return (
            (e = t),
            (n = [
              {
                key: "getValue",
                value: function() {
                  var t = this.getRangeValue();
                  return {
                    left: t.x,
                    right: t.y,
                    props: this.options,
                    max: this.maxX
                  };
                }
              },
              {
                key: "onChange",
                value: function(t) {
                  var e = this.getValue.bind(this)();
                  "stop" === t
                    ? this.options.onStop(e)
                    : this.options.onChange(e),
                    this.options.showValues &&
                      (this.valueUI.innerHTML = this.renderValuesUI());
                }
              },
              {
                key: "onMove",
                value: function(t) {
                  this.getActionType(t);
                  var e = t;
                  t.touches && (e = t.touches[0]);
                  var n = this.options.normalizeFact;
                  (this.state.x = e.pageX - this.state.startX),
                    (this.state.y = e.pageX - this.state.startY),
                    this.state.selectedTouch === this.touchLeft &&
                      (this.state.x >
                      this.touchRight.offsetLeft -
                        this.state.selectedTouch.offsetWidth +
                        n
                        ? (this.state.x =
                            this.touchRight.offsetLeft -
                            this.state.selectedTouch.offsetWidth +
                            n)
                        : this.state.x < 0 && (this.state.x = 0),
                      this.setPositionLeft.bind(this)()),
                    this.state.selectedTouch === this.touchRight &&
                      (this.state.y <
                      this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - n
                        ? (this.state.y =
                            this.touchLeft.offsetLeft +
                            this.touchLeft.offsetWidth -
                            n)
                        : this.state.y > this.maxX &&
                          (this.state.y = this.maxX),
                      this.setPositionRight.bind(this)()),
                    this.setInnerLine(),
                    this.valueUI &&
                      (this.valueUI.innerHTML = this.renderValuesUI()),
                    this.onChange();
                }
              },
              {
                key: "setPositionLeft",
                value: function() {
                  this.touchLeft.style.left = this.state.x + "px";
                }
              },
              {
                key: "setPositionRight",
                value: function() {
                  this.touchRight.style.left = this.state.y + "px";
                }
              },
              {
                key: "setInnerLine",
                value: function() {
                  (this.innerLine.style.marginLeft =
                    this.touchLeft.offsetLeft + "px"),
                    (this.innerLine.style.width =
                      this.touchRight.offsetLeft -
                      this.touchLeft.offsetLeft +
                      "px");
                }
              },
              {
                key: "onStop",
                value: function(t) {
                  this.handleDocElemEvts(!1),
                    this.setInnerLine(),
                    (this.state.selectedTouch = null),
                    this.onChange("stop");
                }
              },
              {
                key: "getActionType",
                value: function(t) {
                  if (t && t.target && t.target.dataset)
                    return t.target.dataset.action;
                }
              },
              {
                key: "onStart",
                value: function(t) {
                  t.preventDefault();
                  var e = t,
                    n = this.getActionType(t);
                  n &&
                    ("handleLeft" === n &&
                      ((this.state.x = this.touchLeft.offsetLeft),
                      (this.state.selectedTouch = this.touchLeft)),
                    "handleRight" === n &&
                      ((this.state.y = this.touchRight.offsetLeft),
                      (this.state.selectedTouch = this.touchRight))),
                    (this.state.startX = e.pageX - this.state.x),
                    (this.state.startY = e.pageX - this.state.y),
                    this.handleDocElemEvts(!0);
                }
              },
              {
                key: "handleDocElemEvts",
                value: function(t) {
                  t
                    ? (this.wrapper.addEventListener("mousemove", this.onMove),
                      this.wrapper.addEventListener("mouseup", this.onStop),
                      this.wrapper.addEventListener("touchmove", this.onMove),
                      this.wrapper.addEventListener("touchend", this.onStop))
                    : (this.wrapper.removeEventListener(
                        "mousemove",
                        this.onMove
                      ),
                      this.wrapper.removeEventListener("mouseup", this.onStop),
                      this.wrapper.removeEventListener(
                        "touchmove",
                        this.onMove
                      ),
                      this.wrapper.removeEventListener(
                        "touchend",
                        this.onStop
                      ));
                }
              },
              {
                key: "delegate",
                value: function(t, e, n, i) {
                  t.addEventListener(e, function(t) {
                    for (var e = t.target; e && e !== this; )
                      e.matches(n) && i.call(e, t), (e = e.parentNode);
                  });
                }
              },
              {
                key: "setIntialPosition",
                value: function() {
                  var t = this.options.end / 100,
                    e = this.maxX / 100,
                    n = (this.state.x / t) * e,
                    i = (this.state.y / t) * e;
                  (this.state.x = Math.round(n)),
                    (this.state.y = Math.round(i)),
                    (this.innerLine.style.width =
                      this.state.y - this.state.x + "px"),
                    (this.state.initialLeft =
                      this.state.x + this.options.normalizeFact),
                    (this.innerLine.style.marginLeft =
                      this.state.initialLeft + "px"),
                    this.setPositionLeft(),
                    this.setPositionRight(),
                    this.options.showValues &&
                      (this.valueUI.innerHTML = this.renderValuesUI());
                }
              },
              {
                key: "bindElements",
                value: function() {
                  this.touchLeft ||
                    (this.touchLeft = document.querySelector(
                      "#" + this.id + " ." + this.slideLeftId
                    )),
                    this.touchRight ||
                      (this.touchRight = document.querySelector(
                        "#" + this.id + " ." + this.slideRightId
                      )),
                    (this.maxX =
                      this.options.wrapper.offsetWidth -
                      (this.touchRight.offsetWidth + 10)),
                    this.slideLine ||
                      ((this.slideLine = document.querySelector(
                        "#" + this.id + " ." + this.slideLineId
                      )),
                      (this.slideLine.style.width =
                        this.maxX - this.options.normalizeFact + "px")),
                    this.innerLine ||
                      (this.innerLine = document.querySelector(
                        "#" + this.id + " ." + this.innerLineId
                      )),
                    this.wrapper ||
                      (this.wrapper = document.getElementById(this.id)),
                    this.options.showValues &&
                      !this.valueUI &&
                      (this.valueUI = document.querySelector(
                        "#" + this.id + " ." + this.valueId
                      )),
                    this.setIntialPosition();
                }
              },
              {
                key: "getRangeValue",
                value: function() {
                  var t = Number(this.touchLeft.style.left.replace("px", "")),
                    e = Number(this.touchRight.style.left.replace("px", "")),
                    n = this.options.end / this.maxX;
                  return { x: Math.round(t * n), y: Math.round(e * n) };
                }
              },
              {
                key: "renderValuesUI",
                value: function() {
                  var t = this.getRangeValue(),
                    e = t.x,
                    n = t.y,
                    i = this.options.rangeConfig,
                    a = i.minLabel,
                    s = i.maxLabel;
                  return '<div class="unbxd-slider-val-row"  style="display:flex">\n                    <div class="unbxd-min">\n                        <label>'
                    .concat(
                      a,
                      '</label>\n                        <span class="unbxd-range-val unbxd-min-price">'
                    )
                    .concat(
                      e,
                      '</span>\n                    </div>\n                <div class="unbxd-max">\n                    <label>'
                    )
                    .concat(
                      s,
                      '</label>\n                    <span class="unbxd-range-val unbxd-max-price">'
                    )
                    .concat(
                      n,
                      "</span>\n                </div>\n            </div>"
                    );
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.options,
                    e = t.facetName,
                    n = t.displayName;
                  return (
                    setTimeout(this.bindElements.bind(this), 10),
                    '<div id="'
                      .concat(
                        this.id,
                        '" class="range-slider-container unbxd-range-slider-wrap">\n                <h3>'
                      )
                      .concat(
                        n,
                        '</h3>\n                <div class="range-slider unbxd-range-dilder-wrapper" >\n                    <div data-action="handleLeft" class="'
                      )
                      .concat(
                        this.slideLeftId,
                        ' round-handle unbxd-round-handle">\n                    </div>\n                    <div data-action="handleRight" class="'
                      )
                      .concat(
                        this.slideRightId,
                        ' round-handle unbxd-round-handle">\n                    </div>\n                    <div class="'
                      )
                      .concat(
                        this.slideLineId,
                        ' unbxd-line-wrap">\n                        <div class="'
                      )
                      .concat(
                        this.innerLineId,
                        ' unbxd-line-inner"></div>\n                    </div>\n                </div>\n            <div>\n            <div class="valueContainer unbxd-range-value-block" >\n                '
                      )
                      .concat(
                        "",
                        '\n            </div>\n            <div class="unbxd-price-action-row">\n                <button \n                    class="unbxd-primary-btn "\n                    data-facet-name="'
                      )
                      .concat(
                        e,
                        '" \n                    data-action="filterPriceRange"> filter by price </button>\n                <button\n                    class="unbxd-default-btn "\n                    data-facet-name="'
                      )
                      .concat(
                        e,
                        '"\n                    data-action="clearPriceRange"> clear </button>\n            <div>\n        </div>'
                      )
                  );
                }
              }
            ]) && i(e.prototype, n),
            s && i(e, s),
            t
          );
        })();
      e.a = s;
    },
    function(t, e, n) {
      "use strict";
      var i = {
        siteKey: "api key",
        apiKey: "site key",
        isFlag: !0,
        sdkHostName: "https://search.unbxd.io/",
        productType: "SEARCH",
        searchQueryParam: "q",
        productAttributes: ["title"],
        defaultFilters: null,
        spellCheck: !1,
        pageSize: 5,
        startPageNo: 0,
        facetMultiSelect: !0,
        searchQueryParam: null,
        updateUrls: !0,
        showVariants: !1,
        variantConfig: {
          variantsCount: 1,
          variantAttributes: [],
          variantMapping: { image_url: "v_image_url" },
          variantsGroupBy: ""
        },
        extraParams: "",
        facetMultilevel: !0,
        facetDepth: 6,
        productId: "uniqueId",
        showSwatches: !0,
        swatchMap: {},
        callBackFn: () => {},
        getCategoryId: function() {
          return (
            encodeURIComponent(window.UnbxdAnalyticsConf.page) ||
            decodeURIComponent(
              location.pathname
                .split("category-path")[1]
                .split("/")
                .pop()
            )
          );
        }
      };
      const a = {
        extraParamUrlString: function() {
          const { extraParams: t } = this.options;
          let e = "";
          return (
            Object.keys(t).forEach(n => {
              e += "&" + n + "=" + t[n];
            }),
            e
          );
        },
        renderFromUrl: function() {
          let t = !1;
          const e = this.getQueryParams();
          if ("object" === typeof e) {
            const { q: n, filter: i, sort: a, start: s } = e;
            (t = !0), this.state.userInput !== n && (this.state.userInput = n);
            const r = this.getFilterFromParams(i);
            (this.state.rangeFacet = r.rangeFacet),
              (this.state.selectedFacets = r.selectedFilters),
              (this.state.selectedSort = a || ""),
              (this.state.startPageNo = s || 0),
              (this.state.categoryFilter = this.getCategoryFilterFromParams(e));
          }
          t && this.getResults();
        },
        getQueryParams: function() {
          const t = decodeURI(location.hash.substr(1)).split("&");
          let e = [];
          t.forEach((t, n) => {
            t.indexOf("=") > 0 ? e.push(t) : (e[n - 1] = e[n - 1] + "&" + t);
          });
          let n = {};
          for (let t = 0; t < e.length; t++) {
            const i = e[t].split("=");
            "undefined" === typeof n[i[0]]
              ? (n[i[0]] = i[1])
              : "string" === typeof n[i[0]]
              ? ((n[i[0]] = [n[i[0]]]), n[i[0]].push(i[1]))
              : n[i[0]].push(i[1]);
          }
          return n;
        },
        urlFlattenFacets: function() {
          let t = "";
          const { selectedFacets: e } = this.state;
          return (
            Object.keys(e).forEach(n => {
              const i = e[n];
              (t += "&filter="),
                i.forEach((e, i) => {
                  const { name: a } = e;
                  t +=
                    0 === i
                      ? n + ':"' + JSON.stringify(a).replace('"', "")
                      : " OR " + n + ':"' + JSON.stringify(a).replace('"', "");
                });
            }),
            t
          );
        },
        getDefaultFiltersStr: function() {
          let t = "";
          const e = this.options.defaultFilters;
          if (null !== e) {
            Object.keys(e).forEach(n => {
              t += "&filter=" + n + ":" + JSON.stringify(e[n]);
            });
          }
          return t;
        },
        getShowVariantsStr: function() {
          return "&variants=" + this.options.showVariants;
        },
        getVariantAttributesStr: function() {
          return this.options.variantConfig.variantAttributes &&
            this.options.variantConfig.variantAttributes.length
            ? "&variants.fields=" +
                this.options.variantConfig.variantAttributes.join(",")
            : "";
        },
        getVariantsCountStr: function() {
          return this.options.variantConfig.variantsCount
            ? "&variants.count=" + this.options.variantConfig.variantsCount
            : "";
        },
        getVariantsGroupByStr: function() {
          return this.options.variantConfig.variantsGroupBy
            ? "&variants.variantsGroupBy=" +
                this.options.variantConfig.variantsGroupBy
            : "";
        },
        getProductAttributesStr: function() {
          return this.options.productAttributes
            ? "&fields=" + this.options.productAttributes.join(",")
            : "";
        },
        getPageSizeStr: function() {
          return "&rows=" + this.options.pageSize;
        },
        getPageStartStr: function() {
          return "&start=" + this.state.startPageNo;
        },
        getNewUrlState: function() {
          const { productType: t } = this.options;
          let e = this.state.userInput,
            n = "";
          ("CATEGORY" !== t && "BROWSE" !== t) ||
            ((n = "&pagetype=boolean"), (e = this.getCategoryId()));
          const i = this.urlFlattenFacets(),
            a = this.getShowVariantsStr(),
            s = this.getVariantAttributesStr(),
            r = this.getVariantsCountStr(),
            o = this.getVariantsGroupByStr(),
            c = this.getProductAttributesStr() + this.getDefaultFiltersStr(),
            l = this.getSortUrlString(),
            u = this.getRangeFilterStr(),
            h = this.categoryFilterUrlStr();
          let d = this.options.facetMultiSelect
            ? "&facet.multiselect=true"
            : "";
          return (
            (this.state.currentUrl =
              this.url +
              e +
              h +
              d +
              i +
              a +
              s +
              r +
              o +
              c +
              l +
              u +
              n +
              this.getPageSizeStr() +
              this.getPageStartStr() +
              this.extraParamUrlString() +
              "&facet.version=V2"),
            this.state.currentUrl
          );
        },
        getRangeFilterStr: function() {
          const { rangeFacet: t } = this.state,
            e = Object.keys(t);
          let n = "";
          return (
            e.forEach(e => {
              n += "&filter=" + e + ":" + t[e];
            }),
            n
          );
        },
        categoryFilterUrlStr: function() {
          const { categoryFilter: t } = this.state;
          let e = "";
          return (
            Object.keys(t).forEach((n, i) => {
              const a = t[n].map((t, e) => {
                let n = encodeURIComponent(t);
                return e > 0 && (n = ">" + n), n;
              });
              e += "&category-filter=" + a.join("");
            }),
            e
          );
        },
        getSortUrlString: function() {
          const t = this.getSelectedSort();
          return t ? "&sort=" + encodeURI(t) : "";
        },
        getBaseUrl: function() {
          const { sdkHostName: t, siteKey: e, apiKey: n } = this.options;
          return t + n + "/" + e;
        }
      };
      var s = function(t) {
          this.state.startPageNo = t;
        },
        r = function() {
          const t = this.getSearchResults();
          if (!t) return null;
          const { numberOfProducts: e, start: n, products: i } = t,
            a = this.options.pageSize,
            s = Math.floor(e / a) + 1;
          let r = Math.floor(n / a) + 1;
          const o = !(n + a >= e || n >= e),
            c = !(n - a < 0 || n <= 0);
          return {
            numberOfProducts: e,
            start: n,
            productsLn: i.length,
            rows: a,
            noOfPages: s,
            currentPage: r,
            isNext: o,
            isPrev: c
          };
        },
        o = function(t) {
          "number" === typeof t &&
            t === parseInt(t) &&
            (this.options.pageSize = t);
        };
      var c = function(t) {
          Array.isArray(t)
            ? (this.options.productAttributes = t)
            : (this.options.productAttributes = "*");
        },
        l = function(t) {
          this.options.showVariants = "boolean" === typeof t && t;
        },
        u = function(t) {
          "number" === typeof t &&
            t === parseInt(t) &&
            (this.options.variantConfig.variantsCount = t);
        },
        h = function(t) {
          Array.isArray(t)
            ? (this.options.variantConfig.variantAttributes = t)
            : (this.options.variantConfig.variantAttributes = "*");
        },
        d = function(t) {
          "string" === typeof t &&
            t.length > 0 &&
            (this.options.variantConfig.variantsGroupBy = t);
        },
        p = function() {
          return this.state.responseObj.searchMetaData || null;
        },
        f = function() {
          const t = this.getResponseObj();
          if (t) {
            const { response: e } = t;
            return e || null;
          }
          return null;
        },
        g = function() {
          const t = this.getSearchMeta();
          return (t && t.queryParams) || null;
        },
        b = function() {
          return this.getSearchQueryParams().q || "";
        };
      var v = {
        changeInput: "CHANGE_INPUT",
        fetchError: "FETCH_ERROR",
        afterApiCall: "AFTER_API_CALL",
        beforeApiCall: "BEFORE_API_CALL"
      };
      const m = t => {
        let e = [];
        return (
          (t || []).forEach((t, n) => {
            const { values: i } = t;
            (t.values = ((t = []) => {
              let e = [];
              return (
                t.forEach((n, i) => {
                  const a = n;
                  if (n.name) e.push({ ...a, dataId: n.name });
                  else {
                    let n = "";
                    i % 2 === 1 &&
                      ((n = t[i - 1]),
                      e.push({ name: n, count: a, dataId: n }));
                  }
                }),
                e
              );
            })(i)),
              e.push(t);
          }),
          e
        );
      };
      var y = function(t = "") {
          const { userInput: e } = this.state,
            n = "" === t ? e : t;
          (this.state.userInput = n),
            (this.state.currentUrl = this.getNewUrlState()),
            (this.state.isLoading = !0),
            this.callBack(this, v.beforeApiCall);
          const i = fetch(this.state.currentUrl),
            a = this,
            { productType: s } = this.options;
          i.then(t => t.json())
            .then(t => {
              if (((this.state.isLoading = !1), t)) {
                this.options.showVariants && (t = this.processVariantMap(t)),
                  (this.state.responseObj = t);
                const e = this.getDidYouMeanFromResponse();
                if (this.options.spellCheck && e) {
                  this.state.didYouMean = e;
                  if (this.getSpellCheckSuggested())
                    return this.getResults(this.getSpellCheckSuggested()), !1;
                }
                const n = t.facets;
                if (n) {
                  const e = this.getFacets(),
                    i = m.bind(this)(e);
                  t.facets = { ...n, text: { list: i } };
                }
                (this.state.responseObj = t),
                  this.setSort(),
                  this.setStateFromData(),
                  "SEARCH" === s && this.setUrl(),
                  this.callBack(a, v.afterApiCall);
              }
            })
            .catch(t => {
              console.log(this, t),
                (this.state.isLoading = !1),
                this.callBack(a, v.fetchError);
            });
        },
        S = function(t = {}) {
          const e = this;
          if (t.response && t.response.products) {
            let n = t.response.products.map(t => {
              const { variants: n = [], relevantDocument: i } = t;
              let a = t;
              if ("variant" === i && n.length > 0) {
                const t = n[0],
                  i = e.options.variantConfig.variantMapping;
                Object.keys(i).forEach(e => {
                  const n = i[e];
                  a[e] = t[n];
                });
              }
              return a;
            });
            t.response.products = n;
          }
          return t;
        },
        F = function(t, e) {
          const n = this.getSearchResults(),
            { products: i } = n;
          return i.find(n => n[t] === e);
        },
        C = function() {
          const t = this.getSearchQueryParams(),
            { q: e, filter: n } = t;
          this.state.userInput = e;
          const i = this.getFilterFromParams(n);
          (this.state.rangeFacet = i.rangeFacet),
            (this.state.selectedFacets = i.selectedFilters),
            (this.state.categoryFilter = this.getCategoryFilterFromParams(t)),
            (this.state.breadcrumbs = this.getBreadCrumbs());
        };
      var k = function(t, e) {
        let n = {};
        return (
          Object.keys(e).forEach(i => {
            const a = e[i];
            n[i] = t[a];
          }),
          n
        );
      };
      var R = function() {
          const t = this.getResponseObj();
          if (t && t.facets && t.facets.multilevel) {
            const e =
              t.facets.multilevel.bucket || t.facets.multilevel.list || [];
            return m(e);
          }
          return [];
        },
        T = function(t = []) {
          const e = this;
          let n = {},
            i = {};
          return (
            "string" === typeof t && (t = Array(t)),
            t.forEach((t, a) => {
              t.split(" OR ").forEach((t, a) => {
                const s = t.split(":");
                if (2 === s.length) {
                  s[1] = s[1]
                    .replace(/(^")|("$)/g, "")
                    .replace(/\"{2,}/g, '"')
                    .replace(/\\\"/g, '"')
                    .replace(/(^\[)|(\]$)/g, "");
                  if (s[1].indexOf("TO") > 0) {
                    const t = s[1].split(" TO ");
                    i[s[0]] = "[" + Number(t[0]) + " TO " + Number(t[1]) + "]";
                  } else {
                    const t = e.getFacetByValue(s[0], s[1]);
                    if (t) {
                      const { facetName: e, selectedvalue: i } = t;
                      n[e] ? n[e].push(i) : (n[e] = Array(i));
                    }
                  }
                }
              });
            }),
            { selectedFilters: n, rangeFacet: i }
          );
        },
        w = function(t) {
          let e = t["category-filter"];
          if (!e) return {};
          let n = {};
          const i = this.getBreadCrumbsList();
          return (
            i &&
              i.forEach(t => {
                const { filterField: e, level: i, value: a } = t;
                n[e] ? n[e].push(a) : (n[e] = [a]);
              }),
            e && 0 === i.length && (n.categoryPath = e.split(">")),
            n
          );
        },
        L = function() {
          const t = this.getResponseObj();
          if (t) {
            const { facets: e } = t;
            return e && e.range && e.range.list ? e.range.list : [];
          }
          return [];
        },
        I = function() {
          const t = this.getResponseObj();
          if (t) {
            const { facets: e } = t;
            return e && e.text && e.text.list ? e.text.list : [];
          }
          return [];
        },
        P = function() {
          const { selectedFacets: t } = this.state;
          return t;
        },
        E = function(t) {
          return this.getFacets().find(e => {
            const { facetName: n } = e;
            return n === t ? e : null;
          });
        },
        x = function(t) {
          const { selectedFacets: e } = this.state,
            { selectedFacetName: n } = t;
          let i = "",
            a = "";
          const s = this.getSelectedFacetValue(t);
          if (s) {
            const { name: t, dataId: e } = s;
            (i = t), (a = e);
          }
          e[n]
            ? e[n].push({ name: i, dataId: a })
            : (e[n] = [{ name: i, dataId: a }]),
            this.setPageStart(0),
            this.getResults.bind(this)();
        },
        O = function(t) {
          return this.state.selectedFacets[t];
        },
        A = function(t = {}) {
          let { parent: e = null, level: n = null, name: i = null } = t;
          n &&
            this.state.categoryFilter[e] &&
            ((n = Number(n) - 1), this.state.categoryFilter[e].splice(n, 6));
        },
        N = function(t, e) {
          const n = this.getSelectedFacets();
          if (e) {
            const i = n[t];
            this.state.selectedFacets[t] = i.filter(t => t.dataId != e);
          } else delete this.state.selectedFacets[t];
          return this.state.selectedFacets;
        },
        j = function(t, e) {
          const n = this.getSelectedFacet(t);
          let i = null;
          const { values: a } = n,
            s = a.find(function(t) {
              return t.dataId == e;
            });
          if (s) {
            const e = this.findSelectedFacet(t);
            if (e) {
              const { name: t } = s;
              i = e.find(e => e === t);
            }
          }
          return i;
        },
        B = function(t, e) {
          const n = this.getSelectedFacet(t) || { facetName: t };
          let i = !1,
            a = null;
          const { values: s = [] } = n;
          let r = { name: e };
          return (
            s.length > 0 &&
              ((i = !0),
              (r = s.find(function(t) {
                return t.name == e;
              }))),
            r && (a = { ...n, selectedvalue: r, actualFound: i }),
            a
          );
        },
        V = function(t) {
          const { selectedFacetId: e, facetData: n } = t;
          return n.values.find(t => {
            const { dataId: n } = t;
            return n == e;
          });
        },
        M = function(t = {}) {
          let { parent: e = null, level: n = null, name: i = null } = t;
          n &&
            (this.state.categoryFilter[e]
              ? ((n = Number(n)), (this.state.categoryFilter[e][n - 1] = i))
              : (this.state.categoryFilter[e] = [i]));
        },
        U = function(t) {
          const { start: e, end: n, facetName: i } = t;
          this.state.rangeFacet[i] = "[" + e + " TO " + n + "]";
        },
        _ = function(t) {
          let e = this.state.rangeFacet;
          e[t] && delete e[t], (this.state.rangeFacet = e);
        },
        D = function(t, e) {
          this.deleteFacet(t, e),
            this.setPageStart(0),
            this.getResults.bind(this)();
        };
      const z = function() {
          return this.state.categoryFilter;
        },
        H = function() {
          this.getResults.bind(this)();
        };
      var W = function() {
          const t = this.getBreadCrumbs();
          let e = [],
            n = t;
          for (let t = 0; t < this.options.facetDepth; t++) {
            if (n.level) {
              const { level: t, values: i, filterField: a } = n;
              i.forEach(n => {
                e.push({ level: t, filterField: a, value: n.value || n.name });
              });
            }
            if (!n.child) break;
            n = n.child;
          }
          return e;
        },
        G = function() {
          const t = this.getResponseObj();
          return (
            (t &&
              t.facets &&
              t.facets.multilevel &&
              (t.facets.multilevel.breadcrumb ||
                t.facets.multilevel.list[0].breadcrumb)) ||
            []
          );
        };
      var X = function(t) {
          this.setSort(t), this.setPageStart(0), this.getResults.bind(this)();
        },
        q = function(t) {
          if (void 0 !== t) this.state.selectedSort = t;
          else {
            const t = this.getSearchQueryParams();
            this.state.selectedSort = t.sort ? t.sort : "";
          }
        };
      const Y = function() {
        return this.state.selectedSort;
      };
      var Q = function() {
          const t = this.getResponseObj();
          return t && t.didYouMean ? t.didYouMean : null;
        },
        K = function() {
          const t = this.state.didYouMean;
          return t && t[0] ? t[0].suggestion : "";
        };
      var J = function() {
        const t = this.getResponseObj();
        return (t && t.banner && t.banner.banners && t.banner.banners) || [];
      };
      const $ = function(t, e) {
        (this.state.userInput = t), this.callBack(t, e);
      };
      var Z = t => {
        const { prototype: e } = t;
        (e.changeInput = $),
          (t => {
            t = Object.assign(t, a);
          })(e),
          (t => {
            Object.assign(t, {
              setPageStart: s,
              getPaginationInfo: r,
              setPageSize: o
            });
          })(e),
          (t => {
            t = Object.assign(t, {
              setProductAttributes: c,
              setShowVariants: l,
              setVariantsCount: u,
              setVariantAttributes: h,
              setVariantsGroupBy: d,
              getSearchResults: f,
              getSearchMeta: p,
              getSearchQueryParams: g,
              getSearchQuery: b,
              getResults: y,
              processVariantMap: S,
              getProductByPropValue: F,
              setStateFromData: C
            });
          })(e),
          (t => {
            Object.assign(t, { getSwatches: k });
          })(e),
          (t => {
            t = Object.assign(t, {
              getBucketedFacets: R,
              getSelectedBucketedFacet: z,
              getFilterFromParams: T,
              getCategoryFilterFromParams: w,
              getRangeFacets: L,
              getFacets: I,
              getSelectedFacets: P,
              getSelectedFacet: E,
              updateFacets: x,
              findSelectedFacet: O,
              deleteCategoryFilter: A,
              deleteFacet: N,
              getTheFacetTypeByNameId: j,
              getFacetByValue: B,
              getSelectedFacetValue: V,
              setCategoryFilter: M,
              setRangeFacet: U,
              clearARangeFacet: _,
              deleteAFacet: D,
              applyRangeFacet: H
            });
          })(e),
          (t => {
            t = Object.assign(t, { getBreadCrumbsList: W, getBreadCrumbs: G });
          })(e),
          (t => {
            t = Object.assign(t, {
              applySort: X,
              getSelectedSort: Y,
              setSort: q
            });
          })(e),
          (t => {
            t = Object.assign(t, {
              getDidYouMeanFromResponse: Q,
              getSpellCheckSuggested: K
            });
          })(e),
          (t => {
            t = Object.assign(t, { getBanners: J });
          })(e);
      };
      var tt = function t(e) {
        if (!e) return e;
        let n,
          i = Array.isArray(e) ? [] : {};
        for (const a in e)
          (n = e[a]), (i[a] = "object" === typeof n ? t(n) : n);
        return i;
      };
      class et {
        constructor(t) {
          (this.options = Object.assign({}, i, t)),
            (this.state = {
              userInput: "",
              responseObj: null,
              selectedFacets: {},
              currentUrl: "",
              didYouMean: null,
              startPageNo: this.options.startPageNo || 0,
              isLoading: !1,
              selectedSort: "",
              isUrlUpdated: !1,
              rangeSliderList: [],
              rangeFacet: {},
              categoryFilter: {},
              breadcrumbs: {},
              urlState: ""
            });
          const {
            searchQueryParam: e,
            productType: n,
            getCategoryId: a
          } = this.options;
          let s = "/search?";
          "CATEGORY" === n && (s = "/category?"),
            (this.getCategoryId = a),
            (this.url = this.getBaseUrl() + s + e + "=");
        }
        getResponseObj() {
          const { responseObj: t } = this.state;
          return t ? tt(t) : null;
        }
        setUrl() {
          const { productType: t } = this.options,
            e = this.getNewUrlState().split(t.toLocaleLowerCase() + "?")[1];
          (this.state.urlState = e), (location.hash = e);
        }
        callBack(t, e) {
          const { callBackFn: n } = this.options;
          n(this, e);
        }
      }
      Z(et);
      var nt = et;
      e.a = nt;
    },
    function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this.getBanners();
          this.bannerWrapper.innerHTML = this.options.bannerTemplate(t);
        },
        a = function(t, e) {
          var n = this,
            i = t || this.getFacets(),
            a = e || this.getSelectedFacets(),
            s = "",
            r = this.options.selectedFacetSelector,
            o = i
              .map(function(t) {
                t.displayName;
                var e = t.facetName,
                  i = t.values,
                  o = void 0 === i ? [] : i,
                  c = "",
                  l = a[e];
                if (o.length > 0) {
                  var u = o.map(function(e, i) {
                    var a = e.name,
                      o = !1;
                    return (
                      l &&
                        (o = l.some(function(t) {
                          return JSON.stringify(t.name) === JSON.stringify(a);
                        })),
                      o
                        ? r
                          ? void (s += n.options.selectedFacetTemplate(t, e))
                          : n.options.selectedFacetTemplate(t, e)
                        : n.options.facetTemplate(t, e)
                    );
                  });
                  c = n.options.facetItemTemplate(t, u.join(""));
                }
                return (
                  r && (r.innerHTML = s),
                  '<div data-id="'
                    .concat(e, '">\n            ')
                    .concat(c, "\n        </div>")
                );
              })
              .join("");
          return '<div class="'
            .concat(this.options.facetClass, '">\n        ')
            .concat(o, "\n    </div>");
        },
        s = function(t) {
          var e = t.target.dataset,
            n = e.actionType,
            i = e.facetName;
          n === this.events.deleteFacet &&
            this.findSelectedFacet(i) &&
            (this.deleteAFacet.bind(this)(i),
            this.options.callBackFn(this, n, { facetName: i }));
        },
        r = function(t) {
          var e = t.target,
            n = ("click" === this.options.facetAction
              ? e
              : e.options[e.selectedIndex]
            ).dataset,
            i = n.facetName,
            a = n.facetAction,
            s = n.id;
          if (a === this.events.changeFacet) {
            var r = this.getSelectedFacet(i),
              o = { selectedFacetName: i, selectedFacetId: s, facetData: r };
            this.options.callBackFn(this, this.events.facetClick, {
              facetName: i,
              facetData: r
            }),
              this.updateFacets(o),
              this.getCallbackActions(
                { facetName: i, facetAction: a, id: s },
                "facetClick"
              );
          }
          a === this.actions.deleteFacetValue &&
            this.findSelectedFacet(i) &&
            (this.deleteAFacet.bind(this)(i, s),
            this.options.callBackFn(this, a, { facetName: i }),
            this.getCallbackActions(
              { facetName: i, facetAction: a, id: s },
              "facetClick"
            )),
            a === this.actions.deleteFacet &&
              this.findSelectedFacet(i) &&
              (this.deleteAFacet.bind(this)(i),
              this.options.callBackFn(this, a, { facetName: i }),
              this.getCallbackActions(
                { facetName: i, facetAction: a, id: s },
                "facetClick"
              ));
        },
        o = function(t) {
          var e = t.target.dataset,
            n = e.action,
            i = e.facetName;
          n === this.actions.filterPriceRange &&
            (this.applyRangeFacet(),
            this.options.callBackFn(this, n, { facetName: i }),
            this.getCallbackActions({ facetName: i }, "facetClick")),
            n === this.actions.clearPriceRange &&
              i &&
              (this.clearARangeFacet(i),
              this.getResults.bind(this)(),
              this.options.callBackFn(this, n, { facetName: i }),
              this.getCallbackActions({ facetName: i }, "facetClick"));
        },
        c = function(t) {
          var e = t.target.dataset;
          e.action === this.actions.setCategoryFilter &&
            (this.setCategoryFilter(e),
            this.options.callBackFn(this, e.action, e),
            this.getResults(),
            this.getCallbackActions(e, "facetClick")),
            e.action === this.actions.clearCategoryFilter &&
              (this.deleteCategoryFilter(e),
              this.options.callBackFn(this, e.action, e),
              this.getResults(),
              this.getCallbackActions(e, "facetClick"));
        };
      function l() {
        var t = this.getRangeFacets();
        return this.options.rangeFaceTemplate.bind(this)(t);
      }
      function u(t) {
        this.setRangeFacet(t);
      }
      function h() {
        var t = this.getBucketedFacets(),
          e = this.getBreadCrumbsList();
        return this.options.multiLevelFacetTemplate(t, e);
      }
      var d = function() {
          var t = this.getSearchResults();
          if (!t) return "";
          var e = t.products,
            n = this,
            i = this.options.gridCount,
            a = this.viewState.productViewType,
            s = "",
            r = Number(this.state.startPageNo);
          return (
            "GRID" === a
              ? e.forEach(function(t, e) {
                  var a = e % i;
                  0 === a && (s += '<div class="unbxd-row">');
                  var o = e + r + 1;
                  (s += n.options.searchResultsTemplate(t, o)),
                    a === i - 1 && (s += "</div>");
                })
              : (s = e
                  .map(function(t, e) {
                    var i = e + r + 1;
                    return n.options.searchResultsTemplate(t, i);
                  })
                  .join("")),
            "<div>\n        ".concat(s, "\n    </div>")
          );
        },
        p = function(t) {
          var e = t.path,
            n = this.options.productItemClass.replace(".", ""),
            i = t.target.dataset,
            a = e.find(function(t) {
              return t.className.indexOf(n) >= 0;
            });
          if (i.action === this.actions.changeSwatch)
            return (
              this.options.callBackFn(this, i.action),
              (a.querySelector(i.swatchTarget).src = i.swatchImg),
              !1
            );
          var s = this.getProductByPropValue(this.options.productId, a.id);
          s && a && (s.prank = a.dataset.prank),
            this.options.productClick(s),
            this.getCallbackActions(s, "click");
        };
      var f = function(t) {
        return this.options.noResultsUi.bind(this)(t);
      };
      var g = function() {
        if (
          this.options.productViewTypeSelector &&
          this.options.productViewTypeTemplate
        ) {
          var t = this.viewState.productViewType;
          this.options.productViewTypeSelector.innerHTML = this.options.productViewTypeTemplate.bind(
            this
          )(t);
        }
      };
      function b(t) {
        var e = t.target.dataset.viewAction;
        (this.viewState.productViewType = e),
          this.setPageStart(0),
          this.getResults.bind(this)();
      }
      var v = function() {
          var t = "";
          return (
            "FIXED_PAGINATION" === this.options.paginationType &&
              (t = this.options.paginationTemplate(this.getPaginationInfo())),
            t
          );
        },
        m = function(t, e) {
          t.setPageStart(e),
            t.getResults(),
            t.options.callBackFn(t, t.events.pageNext, { value: e });
        };
      function y(t) {
        var e = this.getPaginationInfo(),
          n = this.options,
          i = n.paginationType,
          a = n.callBackFn,
          s = e.start,
          r = (e.productsLn, e.numberOfProducts, e.rows),
          o = e.isNext,
          c = e.isPrev;
        if ("CLICK_N_SCROLL" === i) {
          var l = s + r;
          (this.viewState.isInfiniteStarted = !0), o && m(this, l);
        }
        t === this.actions.next && (o && m(this, s + r));
        if (t === this.actions.prev) {
          var u = s - r;
          c &&
            (this.setPageStart(u),
            this.getResults(),
            a(this, this.events.pagePrev, { value: u }));
        }
      }
      function S(t) {
        var e = t.target.dataset.pageAction;
        this.renderNewResults(e);
      }
      function F(t) {
        var e = t.target,
          n = e.dataset.action,
          i = e.value;
        n === this.actions.clearSort &&
          (this.applySort(""), this.options.callBackFn(this, n)),
          n === this.actions.changeSort &&
            (this.applySort(i), this.options.callBackFn(this, n, { sort: i }));
      }
      var C = function() {
          return this.options.sortTemplate.bind(this)(this.getSelectedSort());
        },
        k = function(t) {
          var e = this.options.searchBoxSelector.value;
          this.changeInput(e, this.events.changeInput),
            e
              ? this.getResults()
              : (this.searchResultsWrapper.innerHTML = null);
        },
        R = function(t) {
          return this.options.spellCheckTemplate.bind(this)(t);
        };
      function T(t) {
        console.log(t, "breadcrumbs");
      }
      function w() {
        var t = this.getBreadCrumbsList();
        return this.options.breadCrumbTemplate(t);
      }
      var L = function(t) {
          var e = this.getSwatches(t, this.options.swatchMap);
          return this.options.swatchTemplate(e);
        },
        I = function(t) {
          var e = t.target;
          "Dropdown" === this.options.pageSizeDisplayType &&
            (e = e.options[e.selectedIndex]);
          var n = e.id;
          n &&
            (this.setPageSize(Number(n)),
            this.getResults.bind(this)(),
            this.options.callBackFn(this, "pageSizeChange", { count: n }));
        },
        P = n(0),
        E = function() {
          this.pageSizeWrapper.innerHTML = this.options.pageSizeContainerTemp.bind(
            this
          )();
        },
        x = function(t) {
          Unbxd.track("search", { query: t });
        },
        O = function(t) {
          var e = t.uniqueId,
            n = t.sku,
            i = t.prank;
          Unbxd.track("click", { pid: e || n, prank: i, requestId: null });
        },
        A = function() {
          var t = this.getSearchResults(),
            e = this.getSearchQuery(),
            n = t.products;
          if (n) {
            var i = [];
            n.forEach(function(t) {
              var e = t.sku,
                n = t.uniqueId,
                a = e || n;
              i.push(a);
            }),
              Unbxd.track("search_impression", { query: e, pids_list: i });
          }
        },
        N = function(t, e) {
          var n = this.getSelectedFacets(),
            i = this.state.rangeFacet,
            a = this.state.categoryFilter,
            s = Object.keys(n),
            r = Object.keys(i),
            o = Object.keys(a),
            c = {};
          s.forEach(function(t) {
            var e = n[t],
              i = [];
            e.forEach(function(t) {
              i.push(t.name);
            }),
              (c[t] = i);
          }),
            r.forEach(function(t) {
              var e = r[t];
              c[t] = e;
            }),
            o.forEach(function(t) {
              var e = a[t].join(">");
              c[t] = e;
            });
          var l = this.getSearchQuery();
          Unbxd.track("facets", { query: l, facets: c });
        },
        j = function(t, e) {
          if (window.Unbxd || null)
            switch (e) {
              case "CHANGE_INPUT":
                this.trackSearch(t);
                break;
              case "click":
                this.trackProductClick(t);
                break;
              case "AFTER_API_CALL":
                this.trackImpression();
                break;
              case "facetClick":
                this.trackFacetClick(t, e);
            }
        };
      e.a = function(t) {
        var e = t.prototype;
        (e.renderBannerUI = i),
          (function(t) {
            t = Object.assign(t, { setInputValue: k });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              onPageViewTypeClick: b,
              renderProductViewTypeUI: g
            });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              renderFacets: a,
              facetsClickFn: s,
              findChangedFacet: r,
              onClickRangeFacet: o,
              renderRangeFacets: l,
              setRangeFilter: u,
              renderBucketedUI: h,
              onBucketedFacet: c
            });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              renderSearch: d,
              onProductItemClick: p,
              renderNoResults: f
            });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              renderPagination: v,
              renderNewResults: y,
              paginationAction: S
            });
          })(e),
          (function(t) {
            t = Object.assign(t, { sortAction: F, renderSort: C });
          })(e),
          (function(t) {
            t = Object.assign(t, { renderDidYouMean: R });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              onBreadCrumbClick: T,
              renderBreadCrumbs: w
            });
          })(e),
          (function(t) {
            t = Object.assign(t, { renderSwatchBtns: L });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              pageSizeUi: P.a,
              onClickPageSize: I,
              renderPageSize: E
            });
          })(e),
          (function(t) {
            t = Object.assign(t, {
              trackSearch: x,
              getCallbackActions: j,
              trackProductClick: O,
              trackImpression: A,
              trackFacetClick: N
            });
          })(e);
      };
    },
    function(t, e, n) {
      "use strict";
      var i = function(t) {
        return "<div>\n        did you mean <strong>".concat(
          t,
          "</strong>\n    </div>"
        );
      };
      var a = function(t) {
        var e = t.noOfPages,
          n = t.currentPage,
          i = '<button class="next-btn" data-page-action="next">next</button>',
          a = '<button class="prev-btn" data-page-action="prev">prev</button>';
        return (
          t.isNext || (i = '<button disabled class="next-btn">next</button>'),
          t.isPrev || (a = '<button disabled class="prev-btn">prev</button>'),
          '<div class="pagination-block">\n       '
            .concat(n, " of ")
            .concat(e, " ----  ")
            .concat(a, " ")
            .concat(i, " \n    </div>")
        );
      };
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function(e) {
                o(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var c,
        l = function(t, e) {
          var n = this,
            i = "",
            a = t;
          return (
            e &&
              e.forEach(function(t) {
                var e = t.level,
                  a = t.filterField,
                  s = t.value,
                  r = ""
                    .concat(n.multiLevelFacetSelector, "  category-level-")
                    .concat(e);
                i += '<button \n            data-parent="'
                  .concat(a, '"\n            data-level="')
                  .concat(e, '"\n            data-name="')
                  .concat(s, '"\n            class=" ')
                  .concat(
                    r,
                    ' selected-crumb"\n            data-action = "clearCategoryFilter">\n            '
                  )
                  .concat(s, " x</button>");
              }),
            a.forEach(function(t) {
              var e = t.level,
                a = (t.displayName, t.values),
                s = t.filterField,
                r = t.multiLevelField;
              r || (r = s);
              var o = "category-level-".concat(e),
                c = a.map(function(t) {
                  var i = t.name,
                    a = t.count;
                  return '<button \n                data-parent="'
                    .concat(r, '"\n                data-level="')
                    .concat(e, '"\n                class="')
                    .concat(n.multiLevelFacetSelector, " ")
                    .concat(o, '"\n                data-name="')
                    .concat(
                      i,
                      '"\n                data-action = "setCategoryFilter">\n                '
                    )
                    .concat(i, "-- ")
                    .concat(a, "</button>");
                });
              i += "".concat(c.join(""));
            }),
            "" !== i
              ? '<div class="bucketed-facet-wrap">\n            <h6>Bucketed facets</h6>\n                '.concat(
                  i,
                  "\n        </div>"
                )
              : ""
          );
        },
        u = function(t) {
          var e = this,
            n = "";
          return (
            t.forEach(function(t, i) {
              var a = t.level,
                s = t.filterField,
                r = t.value,
                o = "".concat(
                  e.options.breadcrumbSelectorClass,
                  " bread-crumb-item"
                );
              i > 0 && (n += "<span> > </span>"),
                (n += '<button \n        data-parent="'
                  .concat(s, '"\n        data-level="')
                  .concat(a, '"\n        class="')
                  .concat(o, '"\n        data-name="')
                  .concat(
                    r,
                    '"\n        data-action = "clearCategoryFilter">\n        '
                  )
                  .concat(r, " x</button>"));
            }),
            '<div class="bread-crumb-main">'.concat(n, "</div>")
          );
        },
        h = function(t) {
          var e = !this.getSearchResults(),
            n = '<button\n            id="listBtn"\n            class="'.concat(
              "LIST" === t ? "selected-view" : "",
              ' view-btn "\n            data-view-action="LIST" >List</button>'
            ),
            i = '<button\n            id="gridBtn"\n            class="'.concat(
              "GRID" === t ? "selected-view" : "",
              ' view-btn"\n            data-view-action="GRID" >Grid</button>'
            );
          return (
            e &&
              ((n = '<button\n            id="listBtn"\n            disabled\n            class="'.concat(
                "LIST" === t ? "selected-view" : "",
                ' view-btn disabled-btn"\n            data-view-action="LIST" >List</button>'
              )),
              (i = '<button\n            id="gridBtn"\n            disabled\n            class="'.concat(
                "GRID" === t ? "selected-view" : "",
                ' view-btn disabled-btn"\n            data-view-action="GRID" >Grid</button>'
              ))),
            "<div class='product-view-container'>\n        "
              .concat(n, "\n        ")
              .concat(i, "\n    </div>")
          );
        },
        d = function(t) {
          var e = t
            .map(function(t) {
              var e = t.imageUrl;
              return '<div><img style="max-width:100%" src="'.concat(
                e,
                '"/></div>'
              );
            })
            .join("");
          return "".concat(e);
        },
        p = n(0);
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var g = (f(
        (c = {
          productId: "uniqueId",
          searchBoxSelector: null,
          siteKey: "demo-spanish-unbxd809051588861207",
          apiKey: "f19768e22b49909798bc2411fa3dd963",
          sdkHostName: "https://search.unbxd.io/",
          searchResultsTemplate: function(t) {
            var e = t.title,
              n = t.sku;
            return '<div id="'
              .concat(
                n,
                '" class="product-item" style="border:solid 1px green">\n         '
              )
              .concat(e, "\n        </div>");
          },
          searchResultsSelector: null,
          productItemClass: ".product-item",
          facetsSelector: null,
          selectedFacetTemplate: function(t, e) {
            var n = t.facetName,
              i = e.name,
              a = e.count,
              s = e.dataId;
            return '<option \n                selected\n                data-facet-name="'
              .concat(
                n,
                '"\n                data-facet-action="deleteFacetValue"\n                data-id= "'
              )
              .concat(s, '">\n                ')
              .concat(i, " (")
              .concat(a, ")\n        </option>");
          },
          facetTemplate: function(t, e) {
            var n = t.facetName,
              i = e.name,
              a = e.count,
              s = e.dataId;
            return '<option\n                data-facet-name="'
              .concat(
                n,
                '" \n                data-facet-action="CHANGE_FACET"\n                class="'
              )
              .concat(this.selectedFacetClass, '"\n                data-id= "')
              .concat(s, '">\n                    ')
              .concat(i, " (")
              .concat(a, ")\n            </option>");
          },
          facetItemTemplate: function(t, e) {
            var n = t.displayName,
              i = t.facetName;
            return '<select multiple id="'
              .concat(
                i,
                '">\n                <option \n                    data-facet-action="deleteFacet"\n                    data-facet-name="'
              )
              .concat(i, '" >\n                        ')
              .concat(
                n,
                "\n                        </option>\n                "
              )
              .concat(e, "\n            </select>");
          },
          facetClass: "select-facets-block",
          facetAction: "change",
          selectedFacetSelector: null,
          selectedFacetClass: "selected-facet",
          productType: "SEARCH",
          searchQueryParam: "q",
          defaultFilters: null,
          spellCheckSelector: null,
          spellCheckTemplate: i,
          noResultsUi: function(t) {
            return "<div> No Results found ".concat(t, " </div>");
          },
          noResultContainer: null,
          callBackFn: function(t, e) {
            console.log(t, e, "state,type");
          },
          pageSize: 10,
          startPageNo: 0,
          sortContainerSelector: null,
          sortOptions: [
            { value: "price desc", text: "Price High to Low" },
            { value: "price asc", text: " Price Low to High" },
            { value: "rating asc", text: " Rating Low to High" },
            { value: "rating desc", text: " Rating High to low" }
          ],
          sortTemplate: function(t) {
            var e = "";
            return (
              this.options.sortOptions.forEach(function(n) {
                var i = n.value,
                  a = n.text;
                e +=
                  i == t
                    ? '<option value="'
                        .concat(i, '" selected>\n                ')
                        .concat(a, "\n            </option>")
                    : '<option value="'.concat(i, '">').concat(a, "</option>");
              }),
              '<div>\n        <select id="unbxdSorter" class="select-class">\n            <option value="">\n                Sort By Relevancy\n            </option>\n            '.concat(
                e,
                '\n        </select>\n        <button data-action="clearSort">clear sort</button>\n    </div>'
              )
            );
          },
          sortAction: "change",
          sortElement: "select",
          productClick: function(t) {
            console.log(t, "product,index");
          },
          fields: ["title", "uniqueId", "sku", "rating"],
          spellCheck: !1,
          facetMultiSelect: !1,
          loaderTemplate: function() {
            return "<div>Loading search results....</div>";
          },
          loaderContainer: null,
          showVariants: !1,
          variantMapping: {},
          rangeFacetContainer: null,
          rangeFaceTemplate: function(t) {
            var e = this,
              n = this,
              i = function(t) {
                var n = t.left,
                  i = t.right,
                  a = t.props,
                  s = ((a = void 0 === a ? {} : a).end,
                  {
                    start: n,
                    end: i,
                    facetName: a.facetName,
                    displayName: a.displayName,
                    gap: a.gap
                  });
                e.setRangeFilter(s);
              },
              a = this.state.rangeFacet,
              s = t
                .map(function(t) {
                  var e = t.facetName,
                    s = t.displayName,
                    o = t.position,
                    c = t.values,
                    l = a[e],
                    u = c.start,
                    h = c.end;
                  if (l) {
                    var d = (function(t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 100,
                        i = t
                          .replace(/(^")|("$)/g, "")
                          .replace(/\"{2,}/g, '"')
                          .replace(/\\\"/g, '"')
                          .replace(/(^\[)|(\]$)/g, ""),
                        a = i.split(" TO "),
                        s = e,
                        r = n;
                      return (
                        2 === a.length &&
                          ((s = Number(a[0])), (r = Number(a[1]))),
                        { start: s, end: r }
                      );
                    })(l, c.start, c.end);
                    (u = d.start), (h = d.end);
                  }
                  return new n.widgets.RangeSlider(
                    r(
                      r({ facetName: e, displayName: s, position: o }, c),
                      {},
                      {
                        onStop: i,
                        minX: u,
                        minY: h,
                        wrapper: n.options.rangeFacetContainer,
                        rangeConfig: n.options.rangeWidgetConfig
                      }
                    )
                  ).render();
                })
                .join("");
            return '<div class="range-facet">\n        '.concat(
              s,
              "\n    </div>"
            );
          },
          rangeWidgetConfig: {
            start: 0,
            end: 100,
            minLabel: "Min",
            maxLabel: "Max"
          },
          extraParams: {
            version: "V2",
            "facet.multilevel": "categoryPath",
            "f.categoryPath.displayName": "category",
            "f.categoryPath.max.depth": "4",
            "f.categoryPath.facet.limit": "100"
          },
          facetMultilevel: !0,
          multiLevelFacetTemplate: l,
          multiLevelFacetContainer: null,
          bucketFacetElem: "",
          bucketFacetEvnt: "click",
          multiLevelFacetSelector: "bucketFacetElem",
          facetDepth: 4,
          breadcrumbContainer: null,
          breadcrump: !0,
          breadcrumbSelectorClass: "bread-crumb",
          breadCrumbTemplate: u,
          showSwatches: !0,
          swatchMap: {},
          swatchTemplate: function(t) {
            return "<div>swatchtemplate</div>";
          },
          paginationType: "FIXED_PAGINATION",
          paginationSelector: null,
          paginationTemplate: a,
          paginationEvt: "click",
          infiniteScrollSelector: window,
          productViewTypes: "GRID",
          gridCount: 3,
          productViewTypeTemplate: h,
          productViewTypeSelector: null,
          pageSizeOptions: [8, 12, 16, 20, 24],
          pageSizeDisplayAction: "change",
          pageSizeTemplate: function(t) {
            return "";
          },
          pageSizeContainerSelector: null,
          bannerSelector: null,
          bannerTemplate: d
        }),
        "pageSizeContainerSelector",
        document.getElementById("changeNoOfProducts")
      ),
      f(c, "pageSizeDisplayType", "LIST"),
      f(c, "pageSizeContainerTemp", p.a),
      f(c, "pageSizeOptions", [6, 8, 12, 16, 20]),
      f(c, "unbxdAnalytics", !1),
      c);
      e.a = g;
    },
    function(t, e, n) {
      "use strict";
      var i;
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var s = (a(
          (i = {
            beforeApiCall: "BEFORE_API_CALL",
            afterApiCall: "AFTER_API_CALL",
            beforeRender: "BEFORE_RENDER",
            beforeNoResultRender: "BEFORE_NO_RESULTS_RENDER",
            afterNoResultRender: "AFTER_NO_RESULTS_RENDER",
            afterRender: "AFTER_RENDER",
            deleteFacet: "DELETE_FACET",
            changeFacet: "CHANGE_FACET",
            facetClick: "FACETS_CLICK",
            deleteFacetValue: "DELETE_FACET_VALUE"
          }),
          "deleteFacet",
          "DELETE_FACET"
        ),
        a(i, "clearSort", "CLEAR_SORT"),
        a(i, "changeSort", "CHANGE_SORT"),
        a(i, "pageNext", "PAGE_NEXT"),
        a(i, "pagePrev", "PAGE_PREV"),
        a(i, "changeInput", "CHANGE_INPUT"),
        i),
        r = {
          clearCategoryFilter: "clearCategoryFilter",
          setCategoryFilter: "setCategoryFilter",
          changeSwatch: "changeSwatch",
          clearPriceRange: "clearPriceRange",
          filterPriceRange: "filterPriceRange",
          prev: "prev",
          next: "next",
          clearSort: "clearSort",
          changeSort: "changeSort",
          deleteFacet: "deleteFacet",
          deleteFacetValue: "deleteFacetValue"
        },
        o = { unxPageSize: "unxPageSize" },
        c = function() {
          var t = this.options,
            e = t.callBackFn,
            n = t.sortContainerSelector,
            i = t.noResultContainer,
            a = t.spellCheckSelector,
            s = t.paginationSelector,
            r = t.paginationType,
            o = (t.pagetype, t.productType),
            c = this.events,
            l = c.beforeRender,
            u = c.beforeNoResultRender,
            h = c.afterNoResultRender,
            d = c.afterRender;
          e(this, l), (this.loaderContainer.innerHTML = null);
          var p = this.getSearchResults();
          if (
            ("SEARCH" === o &&
              (this.options.searchBoxSelector.value = this.state.userInput),
            (this.facetsWrapper.innerHTML = this.renderFacets()),
            (this.rangeFacetsWrapper.innerHTML = this.renderRangeFacets()),
            this.viewState.isInfiniteStarted
              ? ((this.viewState.isInfiniteStarted = !1),
                (this.searchResultsWrapper.innerHTML += this.renderSearch()))
              : (this.searchResultsWrapper.innerHTML = this.renderSearch()),
            "FIXED_PAGINATION" === r && (s.innerHTML = this.renderPagination()),
            (this.bucketedSearchWrapper.innerHTML = this.renderBucketedUI()),
            (this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs()),
            n && (n.innerHTML = this.renderSort()),
            p && 0 === p.numberOfProducts)
          ) {
            e(this, u);
            var f = this.getSearchQuery();
            i && (i.innerHTML = this.renderNoResults(f)), e(this, h);
          } else i.innerHTML = null;
          var g = this.getSpellCheckSuggested();
          a && g && (a.innerHTML = this.renderDidYouMean(g)),
            this.renderProductViewTypeUI(),
            this.renderBannerUI(),
            this.renderPageSize(),
            e(this, d);
        };
      var l = function() {
          (function() {
            var t = document;
            return Math.max(
              t.body.scrollHeight,
              t.documentElement.scrollHeight,
              t.body.offsetHeight,
              t.documentElement.offsetHeight,
              t.body.clientHeight,
              t.documentElement.clientHeight
            );
          })() -
            20 <=
            (function() {
              var t = 0,
                e = 0;
              return (
                "number" == typeof window.pageYOffset
                  ? ((e = window.pageYOffset), (t = window.pageXOffset))
                  : document.body &&
                    (document.body.scrollLeft || document.body.scrollTop)
                  ? ((e = document.body.scrollTop),
                    (t = document.body.scrollLeft))
                  : document.documentElement &&
                    (document.documentElement.scrollLeft ||
                      document.documentElement.scrollTop) &&
                    ((e = document.documentElement.scrollTop),
                    (t = document.documentElement.scrollLeft)),
                [t, e]
              );
            })()[1] +
              window.innerHeight &&
            (this.viewState.isInfiniteStarted ||
              ((this.viewState.isInfiniteStarted = !0),
              this.renderNewResults("next")));
        },
        u = function(t, e) {
          var n;
          return function() {
            var i = this,
              a = arguments;
            clearTimeout(n),
              (n = setTimeout(function() {
                return t.apply(i, a);
              }, e));
          };
        };
      var h = function() {
        var t = this,
          e = this.options,
          n = e.paginationSelector,
          i = e.paginationEvt,
          a = e.sortContainerSelector,
          s = e.searchButtonSelector,
          r = e.searchTrigger,
          o = e.productItemClass,
          c = e.sortElement,
          h = e.sortAction,
          d = e.facetAction,
          p = e.facetClass,
          f = e.selectedFacetSelector,
          g = e.selectedFacetClass,
          b = e.productViewTypeSelector;
        n && n.addEventListener(i, this.paginationAction.bind(this)),
          s.addEventListener(r, this.setInputValue.bind(this)),
          this.delegate(
            this.searchResultsWrapper,
            "click",
            o,
            this.onProductItemClick.bind(this)
          ),
          this.delegate(a, h, c, this.sortAction.bind(this)),
          this.delegate(
            this.facetsWrapper,
            d,
            "." + p,
            this.findChangedFacet.bind(this)
          ),
          f && this.delegate(f, d, "." + g, this.findChangedFacet.bind(this)),
          this.rangeFacetsWrapper &&
            this.delegate(
              this.rangeFacetsWrapper,
              "click",
              "button",
              this.onClickRangeFacet.bind(this)
            ),
          this.bucketedSearchWrapper &&
            this.delegate(
              this.bucketedSearchWrapper,
              this.options.bucketFacetEvnt,
              "." + this.options.multiLevelFacetSelector,
              this.onBucketedFacet.bind(this)
            ),
          this.breadcrumbWrapper &&
            this.delegate(
              this.breadcrumbWrapper,
              "click",
              "." + this.options.breadcrumbSelectorClass,
              this.onBucketedFacet.bind(this)
            ),
          b &&
            this.delegate(
              b,
              "click",
              "button",
              this.onPageViewTypeClick.bind(this)
            ),
          "INFINITE_SCROLL" === this.options.paginationType &&
            document.addEventListener(
              "scroll",
              u(function() {
                l.bind(t)();
              }, 1e3)
            ),
          this.delegate(
            this.pageSizeWrapper,
            "Dropdown" === this.options.pageSizeDisplayType
              ? "change"
              : "click",
            ".".concat(this.unxSelectors.unxPageSize),
            this.onClickPageSize.bind(this)
          ),
          (this.onLocationChange = function(t) {
            var e = this.state.urlState;
            decodeURIComponent(location.hash) !== "#".concat(e) &&
              this.renderFromUrl();
          }),
          (window.onhashchange = this.onLocationChange.bind(this));
      };
      e.a = function() {
        (this.events = s),
          (this.actions = r),
          (this.unxSelectors = o),
          this.renderDidYouMean.bind(this),
          this.options.callBackFn.bind(this),
          this.options.productClick.bind(this),
          (this.reRender = c.bind(this)),
          (this.bindEvents = h.bind(this)()),
          (this.callBack = this.callBack.bind(this)),
          this.getQueryParams()[this.options.searchQueryParam] &&
            this.renderFromUrl(),
          this.renderProductViewTypeUI();
      };
    },
    function(t, e, n) {
      "use strict";
      var i = function(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = document.createElement(t);
        e && i.setAttribute("id", e);
        var a = Object.keys(n);
        return (
          a.forEach(function(t) {
            i.setAttribute(t, n[t]);
          }),
          i
        );
      };
      e.a = function() {
        (this.searchResultsWrapper = i("DIV", "searchResultsBlock", {
          class: "search-results-block"
        })),
          (this.facetsWrapper = i("DIV", "facetsContainer", {
            class: "facets-results-block"
          })),
          (this.rangeFacetsWrapper = i("DIV", "rangeFacetsContainer", {
            class: "range-facets-block"
          })),
          (this.bucketedSearchWrapper = i("DIV", "bucketedSearchContainer", {
            class: "bucketed-facets-block"
          })),
          (this.bannerWrapper = i("DIV", "bannerWrapper", {
            class: "banner-block"
          })),
          (this.breadcrumbWrapper = i("DIV", "breadcrumbContainer", {
            class: "breadcrumbs-block"
          })),
          (this.pageSizeWrapper = i("DIV", "pageSizeContainer", {
            class: "page-size-block"
          })),
          this.options.selectedFacetTemplate.bind(this),
          this.options.multiLevelFacetTemplate.bind(this),
          this.options.facetTemplate.bind(this),
          this.options.facetItemTemplate.bind(this),
          this.options.facetsSelector.appendChild(this.facetsWrapper),
          this.options.breadcrump &&
            (this.options.breadCrumbTemplate = this.options.breadCrumbTemplate.bind(
              this
            )),
          this.options.multiLevelFacetContainer
            ? this.options.multiLevelFacetContainer.appendChild(
                this.bucketedSearchWrapper
              )
            : this.options.facetsSelector.appendChild(
                this.bucketedSearchWrapper
              ),
          this.options.rangeFacetContainer
            ? this.options.rangeFacetContainer.appendChild(
                this.rangeFacetsWrapper
              )
            : this.options.facetsSelector.appendChild(this.rangeFacetsWrapper),
          this.options.breadcrumbContainer &&
            this.options.breadcrumbContainer.appendChild(
              this.breadcrumbWrapper
            ),
          this.options.swatchTemplate && this.options.swatchTemplate.bind(this),
          this.options.bannerSelector &&
            this.options.bannerSelector.appendChild(this.bannerWrapper),
          (this.options.bannerTemplate = this.options.bannerTemplate.bind(
            this
          )),
          (this.options.searchResultsTemplate = this.options.searchResultsTemplate.bind(
            this
          )),
          this.options.searchResultsSelector.appendChild(
            this.searchResultsWrapper
          ),
          (this.loaderContainer =
            this.options.loaderContainer || this.searchResultsWrapper),
          this.options.pageSizeContainerSelector &&
            this.options.pageSizeContainerSelector.appendChild(
              this.pageSizeWrapper
            );
      };
    },
    function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          var i = n(3),
            a = n(1),
            s = n(2),
            r = n(5),
            o = n(7),
            c = n(4),
            l = n(6);
          function u(t) {
            return (u =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function(t) {
                    return typeof t;
                  }
                : function(t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(t);
          }
          function h(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          function d(t, e) {
            return (d =
              Object.setPrototypeOf ||
              function(t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function p(t) {
            var e = (function() {
              if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function() {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function() {
              var n,
                i = b(t);
              if (e) {
                var a = b(this).constructor;
                n = Reflect.construct(i, arguments, a);
              } else n = i.apply(this, arguments);
              return f(this, n);
            };
          }
          function f(t, e) {
            return !e || ("object" !== u(e) && "function" !== typeof e)
              ? g(t)
              : e;
          }
          function g(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          }
          function b(t) {
            return (b = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var v = (function(t) {
            !(function(t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && d(t, e);
            })(u, t);
            var e,
              n,
              i,
              c = p(u);
            function u(t) {
              var e;
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, u),
                ((e = c.call(this, t)).options = Object.assign({}, r.a, t)),
                (e.viewState = {
                  productViewType: e.options.productViewTypes,
                  isInfiniteStarted: !1
                }),
                o.a.bind(g(e))(),
                l.a.bind(g(e))(),
                (e.widgets = { RangeSlider: s.a.bind(g(e)) }),
                e
              );
            }
            return (
              (e = u),
              (n = [
                {
                  key: "callBack",
                  value: function(t, e) {
                    this.getCallbackActions(t, e);
                    var n = this.options,
                      i = n.callBackFn,
                      a = n.loaderTemplate,
                      s = this.events,
                      r = s.beforeApiCall,
                      o = s.afterApiCall;
                    e === r &&
                      (i(this, r), (this.loaderContainer.innerHTML = a(this))),
                      e === o && (i(this, o), this.reRender());
                  }
                },
                {
                  key: "delegate",
                  value: function(t, e, n, i) {
                    return Object(a.a)(t, e, n, i);
                  }
                }
              ]) && h(e.prototype, n),
              i && h(e, i),
              u
            );
          })(i.a);
          Object(c.a)(v),
            (function(t, e) {
              "function" === typeof define && n(10)
                ? define(["UnbxdSearch"], e(t))
                : (t.myPlugin = e(t, t.UnbxdSearch));
            })(
              "undefined" !== typeof t ? t : (void 0).window || (void 0).global,
              function(t) {
                t.UnbxdSearch = v;
              }
            ),
            (e.default = v);
        }.call(this, n(9));
    },
    function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" === typeof window && (n = window);
      }
      t.exports = n;
    },
    function(t, e) {
      (function(e) {
        t.exports = e;
      }.call(this, {}));
    }
  ]).default;
});
