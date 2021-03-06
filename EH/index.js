(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRequest = exports.getServerUnavailableMangaTiles = exports.extractID = exports.DEFAULT_EHENTAI_PAGE = void 0;
exports.DEFAULT_EHENTAI_PAGE = "https://e-hentai.org";
const extractID = (url) => {
    return url.replace("https://e-hentai.org/g/", "").slice(0, -1);
};
exports.extractID = extractID;
function getServerUnavailableMangaTiles() {
    // This tile is used as a placeholder when the server is unavailable
    return [
        createMangaTile({
            id: "placeholder-id",
            title: createIconText({ text: "Server" }),
            image: "",
            subtitleText: createIconText({ text: "unavailable" }),
        }),
    ];
}
exports.getServerUnavailableMangaTiles = getServerUnavailableMangaTiles;
async function searchRequest(searchQuery, metadata, requestManager, cheerio, cookies) {
    // This function is also called when the user search in an other source. It should not throw if the server is unavailable.
    const page = metadata?.page ?? 0;
    let searchString = "";
    let paramsList = [];
    if (page > 0) {
        paramsList.push("page=" + page.toString());
    }
    if (searchQuery.title !== undefined && searchQuery.title !== "") {
        searchString += "f_search=" + encodeURIComponent(searchQuery.title);
    }
    if (searchQuery.includedTags !== undefined) {
        searchQuery.includedTags.forEach((tag) => {
            // you can apply tags to search for content
            searchString += encodeURIComponent(tag.id);
        });
    }
    paramsList.push(searchString);
    let paramsString = "";
    if (paramsList.length > 0) {
        paramsString = "?" + paramsList.join("&");
    }
    const request = createRequestObject({
        url: exports.DEFAULT_EHENTAI_PAGE + "/" + paramsString,
        method: "GET",
        cookies: cookies
    });
    // We don't want to throw if the server is unavailable
    let data;
    try {
        data = await requestManager.schedule(request, 1);
    }
    catch (error) {
        console.log(`searchRequest failed with error: ${error}`);
        return createPagedResults({
            results: getServerUnavailableMangaTiles(),
        });
    }
    const $ = cheerio.load(data.data);
    const tiles = [];
    $("table.itg.gltc tr").each((i, elm) => {
        if (i === 0)
            return;
        const data = $(elm).find("td.gl2c div.glthumb img").first();
        let image = data.attr("data-src");
        if (typeof image === "undefined") {
            image = data.attr("src");
        }
        const title = data.attr("title");
        const id = $(elm).find("td.gl3c.glname a").attr("href");
        if (typeof image !== "undefined" &&
            typeof title !== "undefined" &&
            typeof id !== "undefined") {
            tiles.push(createMangaTile({
                id: (0, exports.extractID)(id),
                title: createIconText({ text: title }),
                image: image,
            }));
        }
    });
    // If no series were returned we are on the last page
    metadata = tiles.length === 0 ? undefined : { page: page + 1 };
    return createPagedResults({
        results: tiles,
        metadata,
    });
}
exports.searchRequest = searchRequest;

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EH = exports.capitalize = exports.parseMangaStatus = exports.EHInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const Common_1 = require("./Common");
exports.EHInfo = {
    version: "0.0.1",
    name: "E-Hentai",
    icon: "icon.png",
    author: "Anon",
    description: "E-Hentai extension for Paperback",
    contentRating: paperback_extensions_common_1.ContentRating.ADULT,
    websiteBaseURL: "https://e-hentai.org/",
    sourceTags: [
        {
            text: "Self hosted",
            type: paperback_extensions_common_1.TagType.RED,
        },
    ],
};
// number of images that can be loaded on one page
const MAX_IMAGES = 40;
const parseMangaStatus = (status) => {
    switch (status) {
        case "ENDED":
            return paperback_extensions_common_1.MangaStatus.COMPLETED;
        case "ONGOING":
            return paperback_extensions_common_1.MangaStatus.ONGOING;
        case "ABANDONED":
            return paperback_extensions_common_1.MangaStatus.ONGOING;
        case "HIATUS":
            return paperback_extensions_common_1.MangaStatus.ONGOING;
    }
    return paperback_extensions_common_1.MangaStatus.ONGOING;
};
exports.parseMangaStatus = parseMangaStatus;
const capitalize = (tag) => {
    return tag.replace(/^\w/, (c) => c.toUpperCase());
};
exports.capitalize = capitalize;
class EH extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.stateManager = createSourceStateManager({});
        this.cookies = [
            {
                name: "nw",
                value: "1",
                domain: "https://e-hentai.org/",
            },
        ];
        this.requestManager = createRequestManager({
            requestsPerSecond: 4,
            requestTimeout: 20000,
        });
    }
    async getMangaDetails(mangaId) {
        const request = createRequestObject({
            url: `${Common_1.DEFAULT_EHENTAI_PAGE}/g/${mangaId}`,
            method: "GET",
            cookies: this.cookies,
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const title = $("title").text().replace(" - E-Hentai Galleries", "");
        const id = (0, Common_1.extractID)($("td.ptds a").first().attr("href"));
        //thumbnail
        const thumbnailUrl = $("div#gdt").first().find("div > a").attr("href");
        const imageRequest = createRequestObject({
            url: thumbnailUrl,
            method: "GET",
            cookies: this.cookies,
        });
        const imageResponse = await this.requestManager.schedule(imageRequest, 1);
        const $1 = this.cheerio.load(imageResponse.data);
        const thumbnail = $1("img#img").attr("src");
        return createManga({
            id: id,
            titles: [title],
            image: thumbnail,
            status: paperback_extensions_common_1.MangaStatus.UNKNOWN,
        });
    }
    async getChapters(mangaId) {
        const chapters = [
            createChapter({
                id: "0",
                mangaId: mangaId,
                chapNum: 1,
                langCode: paperback_extensions_common_1.LanguageCode.ENGLISH,
            }),
        ];
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        const request = createRequestObject({
            url: `${Common_1.DEFAULT_EHENTAI_PAGE}/g/${mangaId}`,
            method: "GET",
            cookies: this.cookies,
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        const numberRegex = /\d+(?= images)/;
        const numImagesText = $("p.gpc").text();
        const match = numImagesText.match(numberRegex);
        // get the number of pages you need to parse through to load all the images
        const numPages = match !== null ? Math.ceil(parseInt(match[0]) / MAX_IMAGES) : 0;
        // page links don't lead to the image directly
        const pageLinks = [];
        const pages = [];
        $("div#gdt")
            .find("div.gdtm > div > a")
            .each((_, elm) => {
            pageLinks.push($(elm).attr("href"));
        });
        if (numPages > 1) {
            for (let i = 1; i < numPages; i++) {
                const request = createRequestObject({
                    url: `${Common_1.DEFAULT_EHENTAI_PAGE}/g/${mangaId}/?p=${i}`,
                    method: "GET",
                    cookies: this.cookies,
                });
                const data = await this.requestManager.schedule(request, 1);
                const $ = this.cheerio.load(data.data);
                $("div#gdt")
                    .find("div.gdtm > div > a")
                    .each((_, elm) => {
                    pageLinks.push($(elm).attr("href"));
                });
            }
        }
        for (const page of pageLinks) {
            const request = createRequestObject({
                url: page,
                method: "GET",
                cookies: this.cookies,
            });
            const data = await this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(data.data);
            const imageLink = $("img#img").attr("src");
            if (typeof imageLink !== undefined && imageLink) {
                pages.push(imageLink);
            }
        }
        return createChapterDetails({
            id: chapterId,
            longStrip: false,
            mangaId: mangaId,
            pages: pages,
        });
    }
    async getSearchResults(searchQuery, metadata) {
        return await (0, Common_1.searchRequest)(searchQuery, metadata, this.requestManager, this.cheerio, this.cookies);
    }
    async getHomePageSections(sectionCallback) {
        // This function is called on the homepage and should not throw if the server is unavailable
        const request = createRequestObject({
            url: Common_1.DEFAULT_EHENTAI_PAGE,
            method: "GET",
            cookies: this.cookies,
        });
        // We don't want to throw if the server is unavailable
        let data;
        try {
            data = await this.requestManager.schedule(request, 1);
        }
        catch (error) {
            console.log("homepage failed because website could not be reached");
            const section = createHomeSection({
                id: "error",
                title: "Could not load E-Hentai",
                view_more: false,
                items: (0, Common_1.getServerUnavailableMangaTiles)(),
            });
            sectionCallback(section);
            return;
        }
        // The source define two homepage sections: new and latest
        const sections = [
            createHomeSection({
                id: "",
                title: "Front Page",
                view_more: true,
            }),
            createHomeSection({
                id: "popular",
                title: "Popular",
                view_more: false,
            }),
        ];
        const promises = [];
        for (const section of sections) {
            // Let the app load empty tagSections
            sectionCallback(section);
            const request = createRequestObject({
                url: `${Common_1.DEFAULT_EHENTAI_PAGE}/${section.id}`,
                method: "GET",
                cookies: this.cookies,
            });
            // Get the section data
            promises.push(this.requestManager.schedule(request, 1).then((data) => {
                const $ = this.cheerio.load(data.data);
                const tiles = [];
                $("table.itg.gltc tr").each((i, elm) => {
                    if (i === 0)
                        return;
                    const data = $(elm).find("td.gl2c div.glthumb img").first();
                    let image = data.attr("data-src");
                    if (typeof image === "undefined") {
                        image = data.attr("src");
                    }
                    const title = data.attr("title");
                    const id = $(elm).find("td.gl3c.glname a").attr("href");
                    if (typeof image !== "undefined" &&
                        typeof title !== "undefined" &&
                        typeof id !== "undefined") {
                        tiles.push(createMangaTile({
                            id: (0, Common_1.extractID)(id),
                            title: createIconText({ text: title }),
                            image: image,
                        }));
                    }
                });
                section.items = tiles;
                sectionCallback(section);
            }));
        }
        // Make sure the function completes
        await Promise.all(promises);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 0;
        let searchString = "";
        let paramsList = [];
        if (page > 0) {
            paramsList.push("page=" + page.toString());
        }
        paramsList.push(searchString);
        let paramsString = "";
        if (paramsList.length > 0) {
            paramsString = "?" + paramsList.join("&");
        }
        const request = createRequestObject({
            url: Common_1.DEFAULT_EHENTAI_PAGE + "/" + paramsString,
            method: "GET",
            cookies: this.cookies,
        });
        // We don't want to throw if the server is unavailable
        let data;
        try {
            data = await this.requestManager.schedule(request, 1);
        }
        catch (error) {
            console.log(`searchRequest failed with error: ${error}`);
            return createPagedResults({
                results: (0, Common_1.getServerUnavailableMangaTiles)(),
            });
        }
        const $ = this.cheerio.load(data.data);
        const tiles = [];
        $("table.itg.gltc tr").each((i, elm) => {
            if (i === 0)
                return;
            const data = $(elm).find("td.gl2c div.glthumb img").first();
            let image = data.attr("data-src");
            if (typeof image === "undefined") {
                image = data.attr("src");
            }
            const title = data.attr("title");
            const id = $(elm).find("td.gl3c.glname a").attr("href");
            if (typeof image !== "undefined" &&
                typeof title !== "undefined" &&
                typeof id !== "undefined") {
                tiles.push(createMangaTile({
                    id: (0, Common_1.extractID)(id),
                    title: createIconText({ text: title }),
                    image: image,
                }));
            }
        });
        // If no series were returned we are on the last page
        metadata = tiles.length === 0 ? undefined : { page: page + 1 };
        return createPagedResults({
            results: tiles,
            metadata,
        });
    }
}
exports.EH = EH;

},{"./Common":48,"paperback-extensions-common":4}]},{},[49])(49)
});
