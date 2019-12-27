(function (e) {
    function t(t) {
        for (var a, o, s = t[0], l = t[1], c = t[2], d = 0, p = []; d < s.length; d++)
            o = s[d],
                i[o] && p.push(i[o][0]),
                i[o] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        u && u(t);
        while (p.length)
            p.shift()();
        return r.push.apply(r, c || []),
            n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== i[l] && (a = !1)
            }
            a && (r.splice(t--, 1),
                e = o(o.s = n[0]))
        }
        return e
    }
    var a = {}
        , i = {
            app: 0
        }
        , r = [];
    function o(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
            n.l = !0,
            n.exports
    }
    o.m = e,
        o.c = a,
        o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function (e, t) {
            if (1 & t && (e = o(e)),
                8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var a in e)
                    o.d(n, a, function (t) {
                        return e[t]
                    }
                        .bind(null, a));
            return n
        }
        ,
        o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return o.d(t, "a", t),
                t
        }
        ,
        o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
        , l = s.push.bind(s);
    s.push = t,
        s = s.slice();
    for (var c = 0; c < s.length; c++)
        t(s[c]);
    var u = l;
    r.push([1, "chunk-vendors"]),
        n()
}
)({
    "00df": function (e, t, n) {
        e.exports = {
            bannerContainer: "BannerList-module_bannerContainer_b0gw5",
            banner: "BannerList-module_banner_2U34h"
        }
    },
    "01aa": function (e, t, n) {
        e.exports = {
            searchContainer: "styles-module_searchContainer_2bS4N",
            iconGrey: "styles-module_iconGrey_fxz6T",
            iconWhite: "styles-module_iconWhite_Skhzp",
            input: "styles-module_input_3eikl",
            searchForm: "styles-module_searchForm_2Nk3-",
            iconWhiteContainer: "styles-module_iconWhiteContainer_1WjuI"
        }
    },
    "01c3": function (e, t, n) {
        e.exports = n.p + "img/about_us_eng.c76667c2.jpg"
    },
    "034f": function (e, t, n) {
        "use strict";
        var a = n("c21b")
            , i = n.n(a);
        i.a
    },
    "04ef": function (e, t, n) {
        e.exports = {
            text: "styles-module_text_1mS86"
        }
    },
    "0b2a": function (e, t, n) {
        e.exports = n.p + "img/icon_close_white.e4999f19.svg"
    },
    1: function (e, t, n) {
        e.exports = n("cd49")
    },
    "10b2": function (e, t, n) {
        e.exports = n.p + "img/top_narrow.070ec0dc.png"
    },
    1406: function (e, t, n) {
        e.exports = {
            container: "RecommendList-module_container_ZUxHH",
            header: "RecommendList-module_header_2Koo9",
            fitImage: "RecommendList-module_fitImage_1vAiD",
            title: "RecommendList-module_title_3NIE9",
            item: "RecommendList-module_item_1toTC"
        }
    },
    "16f4": function (e, t, n) {
        e.exports = n.p + "img/404.6ac245e6.png"
    },
    "19d0": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAkFBMVEUAAAD//wD/2QD/1wD/1wD/1wD/1wD/5wD/1gD/2QD//wD/1wD/1wD/1wD/1wD/5wD/1wD/1wD/1wD/1gD/1wD/1wD/1wD/2AD/1wD/1wD/1wD/2AD/2QD/1wD/2AD/1wD/3gD/1wD/1gD/1wD/2AD/3AD/1wD/1wD/1gD/1wD/2QD/2AD/2gD/1gD/1gD/1gAcB5WTAAAAL3RSTlMAAkns05rmCvofBLefroUH4NzYwqumcj/xsnhiNY1PLA9+OM46F/fAvJdEaSnDaqCfa58AAAJSSURBVEjHlZdpg6IwDIZbbvDkRsR71Nmd2e3//3dDGjsdKLTTfFCKPJqkb9JIZs1hLHK3uV91lFgYgMKa4pjYgdLcNrQDpQV7agN6rkQ9xwJ0yN1ZbwW6phZgb7RePpBchTYgWLx6uRtbgWB/M0xvbAuSEH/UC21BQtcYJ7UDwT4wt/JGfZoA37ze3ob3DmzwbZs0uvxOjHTBwxTOtv3i9tlfdHlW6ckzz+0eF/cGFr1TSdC//9GTNdctZvYC1yXsMmNA6rO2g2da7jdI8RHDVcpJX0ueuAwSkfYl+hExvtCSS3jk2F8UGKHw2khe4YmCEOpCgkW635EsNSSFFDaUfA7EcA+QLDT76sMDHdmPioChrRK9FiuM9SxvX17kbjMHbiJIPYGosp8hPI0k7FpObvz1h91Ff1rMkSDYLQkgIFgqYbL3mZotQQLkwR0e2FqQz81sWiMSqcKm/wRZaUCXK3xosQjzpnF1C2mYa/+pJjn55OeHl2g128EdVpKQPLGJagRQoeQU8nILylgnuY5xXjGjyGkDTUQpI3NZYSFfzcC4kMlxOn3m1pHw3VZ6ublZkZYXkQlQ2yMJebuoTYTakLF7ZGcDoh4BhHq8bqndoSM1fdAy6jEnS/fDxP0fH6yErvA3qdbPw8RRHnrYn86avCzk8KAWfVbP7kOGI51SMbH3aqenSb3slAFpNMeAbq90FNx1yXQjGf1ui4HvbL7r3fED4xDoeExYlC5K3y8XafSrsZPuAybNatANWznaWo7WybFoJGE3zNOu8vOtG+n+PnwBGJ2IhrwWd+8AAAAASUVORK5CYII="
    },
    "1c78": function (e, t, n) {
        e.exports = {
            container: "styles-module_container_10L4A",
            img: "styles-module_img_1RSLp"
        }
    },
    "1fc0": function (e, t, n) {
        e.exports = {
            languageSettingBtn: "styles-module_languageSettingBtn_1MrGF",
            text: "styles-module_text_NZjpR"
        }
    },
    "2a28": function (e, t, n) {
        e.exports = {
            searchContainer: "styles-module_searchContainer_3ncHG",
            icon: "styles-module_icon_2BPdA",
            button_background: "styles-module_button_background_3117u",
            searchForm: "styles-module_searchForm_2eVUa",
            divider: "styles-module_divider_2EYj5",
            resultName: "styles-module_resultName_2EzE8",
            nothingMatched: "styles-module_nothingMatched_2sf-W",
            allTitles: "styles-module_allTitles_2Mr3b"
        }
    },
    "2b85": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA+xD0Ar1cBdigUO3p497VxcCmjjoiz7m1gHtwQj0eDdnJh1hINCokGgqtp5hiSzAtFLeXdlkbFUkAAAGrSURBVDjLjZPpdoIwEEYTAggogoLaivu+1K3tvP+rtYQkJCMcuP/m8x4TZiakhuBE2jEPD+3EM+3O25ljYPtW4hCgd2wjTgGg3+aLAvhnYDeLD8j5bBYXXKTNn74ETngmiNETBRQqD+/EMxRAAVuY+Sfc8B0FQyNOKVxN0QWJPnTbA2AvQ/xQ4peWbnFA9qBglr4BOa7WHA9KflW8Aw7N5MROY9CIlDiQ0Xi7zFs6ZWAwEt4BSmgYdQGTCTGDBhzcCYy8Eu0Uw2I13qXTg4IHF2c1nt9RZ7lizFWEd/4eChLxjN7pZ0v9sG8urt+sn53o/Egka16FhhVNtUdqiXDFK73B3XvlmvdEofAWxET0h/JCa+OcIPpi03ixUt6VYJh+x4ESb9h7yVnyylfiHotbOST0jEZYvBgjtKgUZ8h7il+oeDWOFDemZztoHwPVbssQNzIPZBLLZFjpxSpKQZnqP4/l3qdEkaiw557zpd/55WAT/doTUFBv3adQMrGJhhVBDZFFDKxJtTcRXomdVHkJPxeRxliLU1JN4NDSok5A6rFc3/EY8xzfRZf7A65Eo7A9rgunAAAAAElFTkSuQmCC"
    },
    "2c12": function (e, t, n) {
        e.exports = {
            commentItem: "CommentItem-module_commentItem_MvMgs",
            wrapper: "CommentItem-module_wrapper_3PmOK",
            icon: "CommentItem-module_icon_2MbYw",
            userName: "CommentItem-module_userName_1vLNi",
            body: "CommentItem-module_body_8LyBg",
            date: "CommentItem-module_date_3FMXp",
            like: "CommentItem-module_like_1u_7h",
            likeText: "CommentItem-module_likeText_38Im_",
            likeIcon: "CommentItem-module_likeIcon_3ILAP",
            likeBtn: "CommentItem-module_likeBtn_1UuyF",
            numberOfLikes: "CommentItem-module_numberOfLikes_3q-S0"
        }
    },
    "2e6e": function (e, t, n) {
        e.exports = {
            sideMenu: "SideMenu-module_sideMenu_3ffJA",
            modal: "SideMenu-module_modal_ilcbL",
            chapterList: "SideMenu-module_chapterList_2K4-E",
            chapter: "SideMenu-module_chapter_2tPvv",
            appear: "SideMenu-module_appear_3Eu1G",
            hidden: "SideMenu-module_hidden_338ZK",
            routerActive: "SideMenu-module_routerActive_3_co7"
        }
    },
    "2f51": function (e, t, n) {
        e.exports = {
            textarea: "styles-module_textarea_3K1Ap"
        }
    },
    3068: function (e, t, n) {
        e.exports = {
            container: "styles-module_container_1h4NA",
            image: "styles-module_image_mS3ok",
            yellow: "styles-module_yellow_3JEL3",
            body: "styles-module_body_3bClK",
            message: "styles-module_message_WagEa",
            btn: "styles-module_btn_2LWvg"
        }
    },
    "34ae": function (e, t, n) {
        e.exports = n.p + "img/AppStoreIcon.1b659262.svg"
    },
    "35e3": function (e, t, n) {
        e.exports = {
            container: "styles-module_container_2s5eX",
            wrapper: "styles-module_wrapper_2SYcN",
            title: "styles-module_title_3K1kj",
            titleWithShown: "styles-module_titleWithShown_MRUCP",
            titleNoCheck: "styles-module_titleNoCheck_38Tj_",
            titleText: "styles-module_titleText_1HL1P",
            titleChecked: "styles-module_titleChecked_3_1Hw",
            item: "styles-module_item_2Q1Ev",
            border: "styles-module_border_1FdMM"
        }
    },
    "35f6": function (e, t, n) {
        e.exports = {
            titleBox: "styles-module_titleBox_3niQm",
            titleNoCheck: "styles-module_titleNoCheck_Snhkr",
            titleChecked: "styles-module_titleChecked_1CQfA",
            titleText: "styles-module_titleText_2zpTn",
            arrow: "styles-module_arrow_3HkQf",
            fadeEnterActive: "styles-module_fadeEnterActive_1yyn4",
            in: "styles-module_in_1j-c5",
            fadeLeaveActive: "styles-module_fadeLeaveActive_2Ry5x",
            out: "styles-module_out_if2nB"
        }
    },
    "3a09": function (e, t, n) {
        e.exports = {
            modal: "ModalBanner-module_modal_23c5H",
            banner: "ModalBanner-module_banner_bTno_",
            bannerImage: "ModalBanner-module_bannerImage_3YTi2",
            closeButton: "ModalBanner-module_closeButton_1yAkM",
            closeButtonImage: "ModalBanner-module_closeButtonImage_3clBN"
        }
    },
    "3df2": function (e, t, n) {
        e.exports = {
            header: "styles-module_header_2_n3A",
            navigation: "styles-module_navigation_YdAIm",
            logo: "styles-module_logo_3q5z1",
            searchForm: "styles-module_searchForm_rhCn-",
            invisibleSearchForm: "styles-module_invisibleSearchForm_zyAP6",
            settingBtn: "styles-module_settingBtn_2xojh",
            hamburger: "styles-module_hamburger_22tm_",
            modal: "styles-module_modal_3F4WT",
            menu: "styles-module_menu_3I6fb"
        }
    },
    "3e28": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAgBj0hwSKyYLihGpbQSAB+/jvptXNX00tCMa+spuYUDkqEujl3a9yVS/mkXkX4MN39wAAAbFJREFUaN7t12lvgkAQxvGhuCoqqGC9qvVo69Hj+f4fr4bFQMF22IRJTDq/d5us808ky0FKKXW3PGQ8qiHq2M0PQoFTDMnAYg1IBuYTiAb6Y0gG9gdANNCBcGAqHRg+ppuWYgHa4qJt5AKUIJ4RCQaip4hkAjkNaEADGtCABjRwN4ErDWjg3wbMIJnE49dl9ywTmAa4OkTNB8waBXHYeOADP/i7hgMzlEyMxEdg0aDRQAjrKYyun/yPjQbadtNyUfi39gJf+rPiYtNkwB6Bkb2wn0j1mwz46Z7ALgbsL9wD9sK+2cVJIPCS7hnbxTH7iwQu8jxdrJiD4PkFI2RGfkGl9mw3relih7x2WxuMNpVtYB0NnQOk4iExBYf5ZF5g+QEyCX8w+fm5Kcq29JcWftWiW4ZJaVuHiC/w83Pm2fFm2mLmV4WJD/iw3g2xBXZ+1T7qo/4pa7HzqxavduOboRp6KOnVPvhTqqXnOv8ruwSTITkX+Pn5HQMbqqubz+8SazfKz4BzoUu8FayQXAqV+fyrBTnxSk8D/t1oS84Ffn7+KMaKXHm15i+C7Mk0J6WUul/fiw734ZIi4GIAAAAASUVORK5CYII="
    },
    "3e42": function (e, t, n) {
        e.exports = {
            contents: "Featured-module_contents_poS84",
            bannerContainer: "Featured-module_bannerContainer_1MxSs",
            largeBanner: "Featured-module_largeBanner_1mpmG",
            banner: "Featured-module_banner_uZxg-",
            smallBanner1: "Featured-module_smallBanner1_21-iu",
            smallBanner2: "Featured-module_smallBanner2_3_y27",
            contentsBanner: "Featured-module_contentsBanner_1WFBA"
        }
    },
    "3e97": function (e, t, n) {
        e.exports = {
            divider: "styles-module_divider_84j1N"
        }
    },
    "428e": function (e, t, n) {
        e.exports = n.p + "img/img_vertical@4x.bfeb627b.png"
    },
    "4a6a": function (e, t, n) {
        e.exports = {
            s: "styles-module_s_1dYOu",
            m: "styles-module_m_1410x",
            l: "styles-module_l_2xDvF"
        }
    },
    "4dcf": function (e, t, n) {
        e.exports = {
            header: "Navigation-module_header_37C_9",
            chapterTitleWrapper: "Navigation-module_chapterTitleWrapper_3UMsZ",
            appear: "Navigation-module_appear_30FBL",
            hidden: "Navigation-module_hidden_1uUaZ",
            imageContainer: "Navigation-module_imageContainer_AShLe",
            detailContainer: "Navigation-module_detailContainer_1aDk8",
            title: "Navigation-module_title_180OT",
            chapterTitle: "Navigation-module_chapterTitle_20juD",
            settingsContainer: "Navigation-module_settingsContainer_1rlLY",
            kebabMenu: "Navigation-module_kebabMenu_3gR5D",
            circle: "Navigation-module_circle_1fTQK",
            logo: "Navigation-module_logo_2UY22"
        }
    },
    "4f3c": function (e, t, n) {
        e.exports = {
            setting: "styles-module_setting_6Uurn",
            menu: "styles-module_menu_23iWo"
        }
    },
    "513e": function (e, t, n) {
        e.exports = {
            mangaList: "MangaList-module_mangaList_Owudt",
            title: "MangaList-module_title_3b2sX",
            header: "MangaList-module_header_3pFMs",
            toggle: "MangaList-module_toggle_2znd9",
            toggleItem: "MangaList-module_toggleItem_2bwjB",
            linkActive: "MangaList-module_linkActive_2FFDQ"
        }
    },
    5185: function (e, t, n) {
        e.exports = n.p + "img/app_icon.04f38cf9.png"
    },
    5225: function (e, t, n) {
        e.exports = n.p + "img/abj1092_1042.57cf314d.png"
    },
    5764: function (e, t, n) {
        e.exports = {
            label: "styles-module_label_1F6TH"
        }
    },
    "596b": function (e, t, n) {
        e.exports = {
            overviewTitle: "ChapterList-module_overviewTitle_28uKZ",
            overviewTitleWrapper: "ChapterList-module_overviewTitleWrapper_xJ5aV",
            numberOfViews: "ChapterList-module_numberOfViews_14bIt",
            viewIcon: "ChapterList-module_viewIcon_1p37L",
            overview: "ChapterList-module_overview_3ajSr",
            separator: "ChapterList-module_separator_1Oam1",
            sort: "ChapterList-module_sort_3OHNF",
            message: "ChapterList-module_message_bxe9x",
            sortIcon: "ChapterList-module_sortIcon_1dGE4",
            chapterHeader: "ChapterList-module_chapterHeader_1_HCB"
        }
    },
    "5dfb": function (e, t, n) {
        e.exports = {
            flexContainer: "TitleDetailHeader-module_flexContainer_3D03N",
            right1: "TitleDetailHeader-module_right1_1o9Bj",
            fitImage: "TitleDetailHeader-module_fitImage_1-ino",
            sns: "TitleDetailHeader-module_sns_1IxNf",
            updateHeader: "TitleDetailHeader-module_updateHeader_2ReAr",
            title: "TitleDetailHeader-module_title_Iy33M",
            author: "TitleDetailHeader-module_author_3Q2QN",
            simulrelease: "TitleDetailHeader-module_simulrelease_1S2cw",
            updateInfo: "TitleDetailHeader-module_updateInfo_L3R3R",
            updateDescription: "TitleDetailHeader-module_updateDescription_1Iwsu",
            gridContainer: "TitleDetailHeader-module_gridContainer_3ITlG",
            gridItemFacebook: "TitleDetailHeader-module_gridItemFacebook_1qZrv",
            gridItemTwitter: "TitleDetailHeader-module_gridItemTwitter_3xQMP",
            favoritedBtn: "TitleDetailHeader-module_favoritedBtn_Z2Lrg",
            left1: "TitleDetailHeader-module_left1_3C2Fx",
            left2: "TitleDetailHeader-module_left2_D2OP0"
        }
    },
    "5e49": function (e, t, n) {
        e.exports = {
            showBtn: "Updates-module_showBtn_WUpS9",
            fadeIn: "Updates-module_fadeIn_1Afxc",
            hideBtn: "Updates-module_hideBtn_1ydgH",
            fadeOut: "Updates-module_fadeOut_2DqcJ",
            group: "Updates-module_group_V_oYD",
            fluidImage: "Updates-module_fluidImage_1NMT9",
            topImage: "Updates-module_topImage_1i-aW",
            featureTitle: "Updates-module_featureTitle_2bqgw",
            VueCarousel: "Updates-module_VueCarousel_3Rhjh",
            subHeader: "Updates-module_subHeader_Nc89q",
            subShowAll: "Updates-module_subShowAll_IFDwn",
            banner: "Updates-module_banner_2xL6d",
            flexContainer: "Updates-module_flexContainer_1FDso",
            main: "Updates-module_main_1jRHq",
            sub: "Updates-module_sub_2KMYR",
            subInnerWrapper: "Updates-module_subInnerWrapper_1P-W9",
            rankingTitle: "Updates-module_rankingTitle_Ky0uL",
            rankingHeaderTitle: "Updates-module_rankingHeaderTitle__rR8m"
        }
    },
    "5eec": function (e, t, n) {
        e.exports = n.p + "img/app_es.8c69b2c3.png"
    },
    "60fe": function (e, t, n) {
        e.exports = {
            title: "styles-module_title_3gUV9"
        }
    },
    "63e4": function (e, t, n) {
        e.exports = {
            input: "styles-module_input_1_xZD",
            radio: "styles-module_radio_311JI"
        }
    },
    "660a": function (e, t, n) {
        e.exports = n.p + "img/app_banner_en.580bb8aa.png"
    },
    "6ae4": function (e, t, n) {
        e.exports = {
            btn: "styles-module_btn_1VADN",
            icon: "styles-module_icon_127IQ"
        }
    },
    "6c9f": function (e, t, n) {
        e.exports = {
            gridContainer: "SubscribedTitles-module_gridContainer_1cbmH",
            empty: "SubscribedTitles-module_empty_34wNC",
            emptyImage: "SubscribedTitles-module_emptyImage_hsIMK"
        }
    },
    "6e75d": function (e, t, n) {
        e.exports = n.p + "img/search_2white.9b6e178c.svg"
    },
    "6f17": function (e, t, n) {
        e.exports = {
            image: "AllTitle-module_image_JIEI9",
            allTitle: "AllTitle-module_allTitle_1CIUC",
            title: "AllTitle-module_title_20PzS",
            author: "AllTitle-module_author_2rV8i"
        }
    },
    7078: function (e, t, n) {
        e.exports = n.p + "img/img_gdpr_pc.a1bbcf4e.png"
    },
    7090: function (e, t, n) {
        e.exports = {
            container: "styles-module_container_1fWRa",
            img: "styles-module_img_1km_M"
        }
    },
    72: function (e, t) { },
    "720a": function (e, t, n) {
        e.exports = {
            container: "styles-module_container_3bCyC",
            toggle: "styles-module_toggle_1Ez_j",
            appInfo: "styles-module_appInfo_1BHlS",
            abj: "styles-module_abj_3Qpv-",
            abjLogo: "styles-module_abjLogo_2yZ-i",
            abjText: "styles-module_abjText_1tKPN",
            vertical: "styles-module_vertical_1oSu4",
            horizontal: "styles-module_horizontal_1i3Jc",
            footerNavigation: "styles-module_footerNavigation_2XusU",
            sns: "styles-module_sns_1MuOK",
            copyright: "styles-module_copyright_w9bq2"
        }
    },
    "721c": function (e, t, n) {
        e.exports = {
            modal: "Modal-module_modal_35zWl",
            settings: "Modal-module_settings_ZBqqu",
            modeContainer: "Modal-module_modeContainer_2orqk",
            postComment: "Modal-module_postComment_2S6LH",
            commentContainer: "Modal-module_commentContainer_3Hpf1",
            modeMessage: "Modal-module_modeMessage_3kUyi",
            modeItemWrapper: "Modal-module_modeItemWrapper_3ZWSe",
            viewMode: "Modal-module_viewMode_1z8Jn",
            share: "Modal-module_share_iu4Nv",
            facebook: "Modal-module_facebook_1TKE1",
            twitter: "Modal-module_twitter_7USC6",
            shareButton: "Modal-module_shareButton_3pDy8",
            commentIcon: "Modal-module_commentIcon_2niZA"
        }
    },
    "72f4": function (e, t, n) {
        e.exports = {
            form: "styles-module_form_XBgs-"
        }
    },
    73: function (e, t) { },
    "753f": function (e, t, n) {
        e.exports = {
            hamburger: "styles-module_hamburger_12E6I",
            border: "styles-module_border_QuRbe"
        }
    },
    "77b0": function (e, t, n) {
        e.exports = n.p + "img/search_1_grey.08730882.svg"
    },
    "77bc": function (e, t, n) {
        e.exports = n.p + "img/img_eng_outside_error.581f96c1.png"
    },
    "785d": function (e, t, n) {
        e.exports = {
            container: "styles-module_container_2RlKD",
            border: "styles-module_border_14dph",
            wrapper: "styles-module_wrapper_2_k3z"
        }
    },
    "7e1c": function (e, t, n) {
        e.exports = {
            container: "styles-module_container_1rtol",
            mainContainer: "styles-module_mainContainer_2tQWW",
            otherContainer: "styles-module_otherContainer_27uJu",
            footer: "styles-module_footer_3vV0p"
        }
    },
    "809d": function (e, t, n) {
        e.exports = {
            message: "styles-module_message_1dxVo",
            container: "styles-module_container_aAOj-",
            icon: "styles-module_icon_2bT0W"
        }
    },
    "821e": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAtCAMAAAAtKE1VAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAAvoHC/O09uAiyTIWEdHNvXRcKebXxrmZj7CsOhrbS0VwYlYtqJSKgB7t6qWEaT/BoHrnn+SoAAACp0lEQVRIx5VWWYKCMAxFEJFVBAVRdhj33fvfbSYpZSibkB9pmr4kL0kr1yPT+O1dTcNwr947nnKjRU5c6VMRyU3kUQD+9tMiO3UwQGx+OsSMh6Xg0gOr19KK8zy2lq8L1c1OXwEmy4KC9ZsJW32viV5MJv0I6oIYKlETPFOKvbwPIeWJ0aODJOJAyrqT2LChTvzDVpkvZvtIqKV560AQtgxh0yNySFA3AUv2VmhtRhODTIultWLKKR0pi3ceHbVgCE+so1pEvP/UxdVp363aMYQZ6EO5QIAVyFmZOfPie00xZNRs68W9opFWrDw8w298NLNvIulNeijAHtmwCEfQzWnnZXjCsMttjTB9oOsA41hWESzkQaZJoYHLzLeHYcnlFCAfWaUnJUi7bLolxlC7IXag/CmXOeQmlnHq4JX/H8IQrOuDrZ/BSC/XEQ/kUT+Y6L3ctFl/TGzW/zrBK6ToFfh+1WybYxYgcr2IKW6JkHmlUTYQcUvzwYwtqu28BjqgD27QvnZlawb1xa8moauqIpew0OTEvrrjsN7Y6Boa8+/3AOFUb+ft0ChkoMD7+zhBOMpkPBcCKKRTWQFvfEXwgkrIWJpY8bF9keLI0yFaQUT+uO588ECNRpc+LC/ymBmxL4BI3dIGDbXhk3pCk7RhYehD7wstZJaEUoxT0YfdWrpBRoyV6RMda0PuzsBAwEbrTB3kw/5+g9uI6QBVrRhi9u0dyUREIIDNXECuWt9rpv0QWqYdL+ILty8W1/WmcumZuAFFuyQ8Sbvj+VdNUqmE65FHSCKfPVr23KIyPtcrwo0nhs79xNwNd4Xo+aPAfZMcbdGdl0ZqEKhR6q2pzrG5ATKxjE+HLLIJN1Ci5/i/jE3ybwv2vHJUudGiWfudE4pi6Oz2ltZp9gsvZ7KKibRD8wAAAABJRU5ErkJggg=="
    },
    "842b": function (e, t, n) {
        e.exports = {
            logo: "styles-module_logo_2sj8Q"
        }
    },
    8514: function (e, t, n) {
        e.exports = {
            container: "styles-module_container_Du5fK",
            divider: "styles-module_divider_3mhyE"
        }
    },
    "855f": function (e, t, n) {
        e.exports = {
            container: "TitleDetail-module_container_3O1MS",
            flexContainer: "TitleDetail-module_flexContainer_1oGb4",
            mainContainer: "TitleDetail-module_mainContainer_1niDR",
            main: "TitleDetail-module_main_19fsJ",
            sub: "TitleDetail-module_sub_3Gl_e"
        }
    },
    "89c2": function (e, t, n) {
        e.exports = {
            input: "styles-module_input_1Joni",
            arrow: "styles-module_arrow_20a2y"
        }
    },
    "8b7a": function (e, t, n) {
        e.exports = {
            rankingTitle: "RankingTitle-module_rankingTitle_2E0E-",
            titleImg: "RankingTitle-module_titleImg_18ZMt",
            titleDetail: "RankingTitle-module_titleDetail_35zr8",
            title: "RankingTitle-module_title_2rg5n",
            author: "RankingTitle-module_author_2DBfa",
            viewCount: "RankingTitle-module_viewCount_1E3Re",
            icon: "RankingTitle-module_icon_hKj5L",
            rankingNumber: "RankingTitle-module_rankingNumber_a7Dbg",
            viewCountIcon: "RankingTitle-module_viewCountIcon_Haavo"
        }
    },
    "8c4f": function (e, t, n) {
        e.exports = {
            wrapper: "styles-module_wrapper_2fJBn",
            item: "styles-module_item_1b7tA",
            main: "styles-module_main_3Z8cE",
            divider: "styles-module_divider_2Wjtk",
            languageSetting: "styles-module_languageSetting_2zO6P",
            languageSettingContainer: "styles-module_languageSettingContainer_2yrsA"
        }
    },
    "8ce6": function (e, t, n) {
        e.exports = {
            text: "styles-module_text_2gkQu",
            items: "styles-module_items_2sfN5",
            item: "styles-module_item_3w45u",
            message: "styles-module_message_SR0HP"
        }
    },
    "8d45": function (e, t, n) {
        e.exports = n.p + "img/app_en.94f8b54e.png"
    },
    "8e44": function (e, t, n) {
        e.exports = {
            flexContainer: "HotTitles-module_flexContainer_2sQEA",
            gridContainer: "HotTitles-module_gridContainer_2jaSS"
        }
    },
    "8e4e": function (e, t, n) {
        e.exports = {
            container: "Error-module_container_mzmCx",
            img: "Error-module_img_PgTn-"
        }
    },
    "92b0": function (e, t, n) {
        e.exports = {
            wrapper: "styles-module_wrapper_1E4FG"
        }
    },
    9400: function (e, t, n) {
        e.exports = {
            shareButton: "ShareButton-module_shareButton_217yQ",
            content: "ShareButton-module_content_1Zhkq",
            twitter: "ShareButton-module_twitter_36sb8",
            facebook: "ShareButton-module_facebook_2v5Yx"
        }
    },
    9904: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABgCAMAAADPemeEAAAAq1BMVEUAAAD/1wD/1wD/1wD/1wD/2QD/1wD/1wD/2AD/2AD/1wD/7QD/1wD/2AD//wD/3gD/1wD/1wD/1wD/5wD/1wD/1wD/1wD/1wD/2AD/2wD/2gD/3AD//wD/1wD/1wD/1wD/1wD/2AD/2AD/1wD/2AD/3QD/1wD/1wD/2AD/1wD/2AD/2AD/2wD/1wD/1wD/2QD/2gD/1wD/1wD/1wD/1wD/1gD/2AD/1wD/1gDvYqtAAAAAOHRSTlMAmIDu1ig5+Xxc6Ab8MwISk8hvCvXy484sHxsOA8KwpJ12aGNCFrapiYRXSSTajj0w3lLRvZZNuSa0UAUAAAOCSURBVGjexZnrVuowEEaHa7EFCghyBwFFUBQV0b7/k521jqYT/I5J6STH/cu2mrFpZmY3pbPZPU3DUrswIP/E83ryyWxEnhmWk5Qrzzc3DBON3jN5ZDJNTihfkj+2yTeuyRuVIPnOnnyxToB+k/zwriLUOxfpPa7IC1G66rdEHfVzOCYfLNT4LxFRs6+OnsgDtyU1/CsR0V4dBTtyz7Uaffp5PFfHa3LOc12tjq+yMeyqaDfkmrR2HNWZWlpHJuSWezVy6VadurxS5zrklOhFGxj/gZhcwlMWGabWDaN0MTyQRiMtKc46Gy5zTIc3ckY1TeDKt0TvcaI7otmG0gQl7DEiN6zSohvDKn1U1xbkhHGI7QTbTu+WXLBR4x0mhHyoq3MnQhUYa+Cgri43SM5MDXZH/6SlrrdJzE267Ic/KHLa5y7EpnhgF/iBZWrIWS1SMNJEcxMBMEeWme4OSQI//Wa2NSSgkq7rKhnYBS4E+SOj028Egoy1aJR6T1WjgRVtSZmxV9lyolEixQULslyBzcFEgoyd0RaMqgJBhp5vDCYXZFbggTEYOpFMgY3BRIKMBmoOJhJk/FNLMLkgF3lSbMFw4gsCBbYGwyWVT4FndEpfDxbSKYUcggwpCt2ErUMuyFx8NtjgGGxfHS5wORR4jMNpbH4u3TUXCvyqB8N+8oBNifK3woYe7EEkyPYmH+vBKmaRkCtwN2EuCXliRRIoMGZ1KBZkVuCibRuwLRbkjuV3j5BmBmGXKvAC0izLc8j5AnSvpZlQkO2vdlVIM9Pro1CBR5Bmhk3yAy//XK/jzcCQZiZBzrXR8GhIMxTk+BwFRt5gCRm3aewK/J7FXe/O3IDKs+1VM6RZdkFugK+Yn8cyhzGhibXIRKX1xSDHdqjJMV1v9HrbXn6FLWyLAiNxQwM8I6MgD+GBGpcHKpT9swNzxwosDYaCPCUGPuMIg+GnonubAsuDoSCjAsuD4ee9mk2B5cFYkLsjmwLLg7GLza0KLA/GH5urKCiyYGZBhr1J58Hi8HT5r1GB5cFQkPt/p/Ws/eRxRSMmO82D7nVbvk8v7HU7XLO/+GGmzWPo5guYXX6CiEhVywH5gV9WI5bOq8K26IHtUQXosXT6p8wV3yecleNe8l+oj7goeGfBxdI33GOW3cQzwYI75a4VJh4pXZ8m8WS/qrUKHjgWVzcR/QZ/APm4X9WW765HAAAAAElFTkSuQmCC"
    },
    "99de": function (e, t, n) {
        e.exports = n.p + "img/hamb_white.0ed53033.svg"
    },
    "9b54": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABdRJREFUeAHtnU+MFEUUxmd1JYSQGCOJLhHMHjyoURIuXgwsHLwQgl4gIRoOctCDchBIMGuYXXYXFvSiHABjAgkHgQNRCHjQGA+S1Y1RD+IR2AT/JMJyQVlYXb63qd7p6Zl61d1V3dPje5U8uvq9qupXv6+6p6enN9RqWpSAElACSkAJKAEloASUgBJQAkpACSgBJaAElEBAAnNzc3WYq9QDHjLTUEhsEWwr7ATsV9hN2AzsOuwSbBi2KtOgVWqM5CsrAHLbBpuCpSln0ag/JNsHQg7WTWMBZC/sY+R8HLYiZe4vo90k+g2kbO9sJlYAkPkAtt1JqLXBo3CdgwjPtIaye0QKAHgbgert7LgWeixF7QzGeXDBk7MiTgBA6wGrkZy84t3oDNgad+SpixMAkNbDnmdgfWXaPIXtW7A7TNsdTCxVqDdVq/9Xo5eY6UwgtqGnp2fGtDmMM+Yq6ufMfnKzGvFlaP9XMpB2X+IZsJaBMxaDP98M++dR+c7Shy5nL1piqdwSBeizkPkX/ouW2GcWP7mXMzFnSKIAyyxUfsNqn7XErln85LaNx3RphCQKYLt1jK77DTqN2t1GtaVGl6HcRaIAtyy0nrD4yf0kE5tmYs6QRAGmLFQW447Gdnu6xtKH3DeYmDMkUYAfGCp0399UIMqzcGxscjbv/Ny8m21PogBfMIi2A/hO2EPUBlt6BE13RrbrPF3OfoHlLhIFuABafzLEDiF2C/DpUvUTjHtSegF3TnPMWM6QOAEA7B6o7HGQWYI4Bz7q/lFUybsVJ4ABdRzbT/NCM/0mISY9uvAqIgUwl43XQO6oB70PPfoudBUpAM0eIszC3kB1AHYadhsWlb+jimX7O/zUx7uIFSAiBxG+gW2B0Y8s9FihH/ZOFLdsR9Ge+3Zs6dbqlvg4upWC8QDqDdz9/IPd96yNarUriB1j4plC4s+ANrRo9XNPOOsQiu6kghQVIIYRq/8x7O6OuZLVy3CcTDp99lWAZnrD2KXPAlsZxOr/zxbM41cBDDWsfvqR/XUGIt33n2XiuUIqQAPbQVRtvxVQq3cbTcPVVACwxOpfh80GBuvXWP1fMvHcIfECAD496XzfQbCQ1U/HFC8AGLwKW00wLOVzrH7vZz6WsWULgNW/GGBGbXDgpzueQSbuHRL9TRgrm956W+lN0WMAvQR5wAvRVQUIQdFjDBXAA16IripACIoeY6gAHvBCdFUBQlD0GEMF8IAXoqsKEKOIL2b9sAmYrTweax6kqgIYjCC+GdUfYS8EIZtyEPECAPwSGP298CnYwym5BWsm+lEEwD9nwD8djGjGgcSeAYD/Jlh9D+sYfNJK3BkA8I9g3p/AXiEAnS7iBABwet281A9aTmSJl6AjHJCyYxIFOAHItr+SuaQCFEwAP8LQH1TsSByGfPS78NqEv/BdiWcAvRn9LcjSfT+Vadgm+HbBZuc9Jf4j8UM4wkuvINKjhW0Afy1ylr0VKwCgTwH2QNnAk8cTeQlKQujkPr2UlKngi8xedNiVqVOttgjt5//0k+lHr3zfZeLtQoewkofaBfL6MD/6QLaVPhzvD1uwND9yPEiJdrjQu5zBi2NOwR9H554AEh13JFtkeDx34o6OjqSrIwDNo0MiFAbfzInToFoCmIQPcBkHjh2gYxZZHPlWTwCCgaTLEKFw+GYunAbVFMAkvp/L3DO2n45RRnHkWV0BCA6SH3NMIE94rAzw0TEcCVZbgAJEKBW+yZ/ToPoCmEmMcrNIGePe248WbPCtI7fuEMCIMOKYDBceCU425YBcUoh1jwAeInQMvsmZ06C7BDAT2sfNKBHbl3KhFtYskU9yt/sEMCLQfwHiKsOFUc0wsCPJ7hQghQiVgG/y5DToXgHM5IbazC7o4+QMi71t0zb5xV3dLYARoR6bUb0thQ46Y7m1qwYXoPSfJPGDBgkwj5jqHWSth1YCSkAJKAEloASUgBJQAkpACSgBJaAElIASUAKlErgPc08pyRztVe0AAAAASUVORK5CYII="
    },
    "9cc0": function (e, t, n) {
        e.exports = n.p + "img/img_horizontal@4x.40649675.png"
    },
    a177: function (e, t, n) {
        e.exports = n.p + "img/flogo-HexRBG-Wht-58.e3d3a393.svg"
    },
    a5b5: function (e, t, n) {
        e.exports = {
            container: "HotTitle-module_container_1c2RB",
            texts: "HotTitle-module_texts_3ApHq",
            textNotTop: "HotTitle-module_textNotTop_3If7r",
            icon: "HotTitle-module_icon_38IkY",
            viewCountIcon: "HotTitle-module_viewCountIcon_dq9_c",
            rank: "HotTitle-module_rank_3tDWo",
            title: "HotTitle-module_title_3jraN",
            author: "HotTitle-module_author_1Xt4T",
            hotTitle: "HotTitle-module_hotTitle_3XHp9",
            count: "HotTitle-module_count_2oe7s",
            textsNotTop: "HotTitle-module_textsNotTop_12GJZ"
        }
    },
    a7ed: function (e, t, n) {
        e.exports = {
            input: "styles-module_input_3SzMJ",
            checkbox: "styles-module_checkbox_2pXpO"
        }
    },
    ac0d: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAAnFBMVEUAAAC/YiW6XSW6XCXAZS2/YSrUfjzGZjW6XCS6XSS6XSW6XCS6XSXBZCm6XSW6XCS6XSS6XSS6XSW6XSS6XSW6XSS7Xia6XSS7XSW6XCS6XSS6XSS6XSW7XSW6Xya9Xya9YCm6XCS6XSS6XSS6XCW7XiW7XSW7XSa8XSa+Xyi6XSW7Xya7Xia6XSW7Xyi6XCS6XCW6XSW7XSW5XCRekoKXAAAAM3RSTlMAG+T6DhcECO32nsGJEqTUxn9q3Xp2TnBg8amTZVQ/KR/or5iORFpJOCS0PDPQLcvXuoNzIiZOAAAGZklEQVR42uzZ2XKiQBQG4F9AwAVE0ahE4xbcNXH+93+3yVgTGgVbGhVv/C6V6qZOn6WrwMuLmjcLzzNd4GmMShVPM6Rt4lkCMsSTWH1yhid5IznBk7j8scFTmDZ/vOMpFvxHQ2HMsuDyKBS/OHisVoUXNUZ4sH2DF8wsPJw1Yxr7DYUY2kyolVCQUo2n9CaKYzZ1xmgbFOqDgmegWFsKOxSszpgViuUzpoNC7XlU4dEXCtX8X9z/S36MIjWOxR2VfBcFGpH0l6LkPRSoTQZRcW80sozi7CoDCM6ULRRmvBvhxGCNwoytRBLg5eXl/pztsPNeDda1w9Sd1VuLlYVijHuuxnP6V31h4MFWTZ+X6Ie5hYexBh7l+tUlHsLoTJhBLcTdWW2bGXn33n7hU0FQxv2UplTT7+JeFjaVHcq4B7POPCYfuJ1TYxrbqza7g+G81alPGzrTdHCr0jcTNLc3Rpy5bB8qTPjEbUZaso+ESGOkdCDXxA32Nk9NOobkTV2dp6YmchtrPGG3LEitXJ6qIi/n+2wlB1d9NHiijnwsj3Fattox//BEC7m8M27tIKNwwhh9ixzeGPcH2ZV3jPENKBvb+YNn1BgTQNmBMXOosdaMGULR8LaksWoUNANKDI1CE+qMRv4+W6cwRR6rPiP6CAqciixb1Q/OhYJYo9CXSFde9LrNdmu+tZBuFltkhcyM/rXzWlZ9sfKuuZLkjWqPb1/J1MWOZw5bJM0Z0UvI6lta4Y7LFO8mEmo5rjVLRnwzuXeDqQ7JGIWMNHJMlIG8gEl5SnuMbFW+FB5ppiSHE+ay4fSpHPU6zn0wQRJacyL+VM71Pc6tGfF6m9J2OKWwxLlPRsqK82yHc2U9Kp75byx0/uri3FZxtlkVSdR7KRt1Zecq8meGDPaMhJcHziQWDVkfC/jrS20g6NbltQIIE8lVtcVffbV82yETSxe1Jjt0A9e5qpevMIpUGQkGIyNc5yneWB1fOrrEaNvgOtE+e0iQTbhJCZANl1Dpc90bJLbdH/VAvKq9QZq1ZDlZZYbX81LwxkgVKHUZXXTL7Jv7bRPpqkqX/4r65jURcdnmDwp75as5wj3C7md7us0zwd/2zW1JURgIoM1luIuAgiAM42297qpr//+/7W7VTiVOTCZhgvPCebQsj5ru0J2GhYaAI8VhoyRHbwcPSJRSLZQ7VTilf9msLhax+yfhKu4l5IFan3Soid502f1P7f6CHN+5ghSNqEDeq11YCom3y1+zZyQkJGfj4vgUlDdo84M9AQmcinQhzAoa73Cu2W/MhynWziuyafKLdjqwX/mtQav6N87YWlhcK9ZsfcymjmWDYgW55jZf1o68aJFXmZtThfWjuPjwbG4H4v8/AnYzj2oW+aGYqh/I5PwOBL15lKX0dJGtfa7MFqOSbEsX7jAqFLC0uccyCchyQW4H1CADN6CdX12O8jJqsMDGL5c1P22qEcjiLgUt/xoJwpHKS9Xt2D1HweaQPVx3r+FvVui/gDy2R30qU44bzCwF/fWLYO2wBuj40xOHbdPzuyIibGy2rqffYIAKzvizKY3bZukmWEd5eXbEsyH18V6LFNHXZkNXBxSJkWKq6r4gRav+3c3uk8nFFSlqUGdvIUXsgjRnEykuLnQg73jzeuMjRXWATqyQpirllmvO3+/VpzSEUOLHl173gaL4kNeqDRDyI8F7UuiOMcEP+rVgCQuiFgW6+mSSQO2lNOfIxI/c4GvYITJYya0dAcViG0yQJYOv4sackimM62iabtbzsY+PqF5BA42PHfj1Blo4X5FL/w+1uJGFSkx2oJG3EOXxby7o5XWMcljxAfRTXGTUwQH6oQ0qFHKdGtAf7vboc6Os3kPfOKc09Bhx3BzgWdjnXZnNprdbPmu27cKBAe0Yq5+qcVGG2uSIv08qKZGZaGqUI4Y7kGOULxE1yxGXdft5FpRHC1Gv/B2T+Plm7XKCn9QP+lK7ncVXJOiX099gHkTTbLsryllax8cJEvqWswzyQT7IB/kgH+Qa5NYmeaKcPRprvG+ReyX8YxR8gzwYkccYniwfn4DgTP0nyv3cgTsWx6fJVwtgKMynyCcFPMLeWL3LrcgFDuekZ7n41LvxepR7JYgZBfrlSs8u6ZaT1BZAkl6vnKS2DIujVjlJbTkKU6PcLEANO5qAJhwHlLFhYIDlDz2jrBwe4Y/0AAAAAElFTkSuQmCC"
    },
    ad6e: function (e, t, n) {
        e.exports = {
            anchor: "styles-module_anchor_8_ptB"
        }
    },
    b3d2: function (e, t, n) {
        e.exports = n.p + "img/maintenance.2515d118.png"
    },
    b5b6: function (e, t, n) {
        e.exports = {
            container: "styles-module_container_kWnuS",
            appIcon: "styles-module_appIcon_rGZ68",
            appStoreIcon: "styles-module_appStoreIcon_3joeo",
            playStoreIcon: "styles-module_playStoreIcon_2Wzvj",
            vertical: "styles-module_vertical_2WFUo",
            text: "styles-module_text_2Gg98",
            horizontal: "styles-module_horizontal_nhDKQ"
        }
    },
    b89d: function (e, t, n) {
        e.exports = n.p + "img/favorited_empty.91b0b32f.png"
    },
    b9f1: function (e, t, n) {
        e.exports = {
            body: "styles-module_body_x8lhZ",
            type: "styles-module_type_1pTYR",
            container: "styles-module_container_q5GjM",
            btn: "styles-module_btn_2ZN9X",
            enable: "styles-module_enable_8vopY",
            disabled: "styles-module_disabled_2iutC"
        }
    },
    bb28: function (e, t, n) {
        e.exports = n.p + "img/app_banner_es.5b47a8da.png"
    },
    bc8e: function (e, t, n) {
        e.exports = {
            wrapper: "styles-module_wrapper_1wAOz",
            border: "styles-module_border_1bONz"
        }
    },
    be22: function (e, t, n) {
        e.exports = n.p + "img/google-play-badge.5cdbd5c8.png"
    },
    be42: function (e, t, n) {
        e.exports = {
            btn: "styles-module_btn_17GWO",
            done: "styles-module_done_3BFzO",
            default: "styles-module_default_uUjEB",
            outline: "styles-module_outline_TKY5K"
        }
    },
    be59: function (e, t, n) {
        e.exports = n.p + "img/web_logo_190118_light.96b51339.png"
    },
    c21b: function (e, t, n) { },
    c243: function (e, t, n) {
        e.exports = {
            chapterListItem: "ChapterListItem-module_chapterListItem_ykICp",
            endTime: "ChapterListItem-module_endTime_4r_4L",
            chapterWrapper: "ChapterListItem-module_chapterWrapper_3CxyE",
            thumbnail: "ChapterListItem-module_thumbnail_1w6kS",
            thumbnail_alreadyRead: "ChapterListItem-module_thumbnail_alreadyRead_1u3_a",
            name: "ChapterListItem-module_name_3h9dj",
            name_alreadyRead: "ChapterListItem-module_name_alreadyRead_1HYKk",
            title: "ChapterListItem-module_title_3Id89",
            title_alreadyRead: "ChapterListItem-module_title_alreadyRead_3tKxq",
            commentContainer: "ChapterListItem-module_commentContainer_1P6qt",
            commentIcon: "ChapterListItem-module_commentIcon_3lw4k",
            limitIcon: "ChapterListItem-module_limitIcon_tGiFP",
            limitContainer: "ChapterListItem-module_limitContainer_2JLZi",
            limitTime: "ChapterListItem-module_limitTime_14zxT",
            date: "ChapterListItem-module_date_xe1XF",
            date_alreadyRead: "ChapterListItem-module_date_alreadyRead_31MGZ",
            limitDate: "ChapterListItem-module_limitDate_20Cs2"
        }
    },
    c510: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAAh1BMVEUAAAClpaWfn5+fn5+0tLShoaGjo6Oenp6kpKTDw8Ofn5+fn5+enp6fn5+fn5+fn5+hoaGqqqqfn5+fn5+enp6goKCfn5+ioqKfn5+fn5+fn5+goKCgoKCfn5+fn5+fn5+fn5+fn5+fn5+fn5+goKCfn5+fn5+mpqagoKCjo6OgoKCfn5+enp5pFB12AAAALHRSTlMAF+WhBjQc+g8DxYry7HK+JQvfkdhbtivSeGtGVK+lTfbLgGFAmWYTOyCFqQRfa8cAAAaiSURBVHja7ZppY6IwEIajgOG+BAUUUMGz8/9/3263u01UyEXsfvH5PPVlkrlgit68GcPZittudYtfImHTa6ZbfInPoqYhrDWLp9CJmrpw0KttAawETRcAhV5xDwDbYqYVAMSaTx0gFzONAKDUqb2G39RCpjMMAHud4gf4zS4RMT3BJ1eN4hl8IlQ8VvBJOFHQnn1zgT/UM4IzYhpj+MSlTE0F8XgPo+Dy/p4jGMczkQKmByOk1qNtiWGY+QYpspnDEMZAxlspDLGaIWVmK3jCz4dDpIEn8MS4Cx/Pcz9avXIf7smsyVU9Y4QPM0SNBE0miYCwYYcoffQnpAMXCD3blBbvdGjPgOLI9tynA12HeAUUc4dl2gIFtjWIR/CHv05dWKbGnWk+XfuMv5L7b8ovWRNu8JXctgGkBU+i+0rufymfsgrid3LnPr8Fi7ZIzyQpzygcR5Lc8Z60YHVsTPWGxADwWKfu53RXaqaK5/e9IffHz70H93rXlXxzovjHQ2+47tdjpsub89CV2oniT1JmzDMlxOjNmzdTsK1tuTQ+VlFUN0ev2sQm+hmunTGHR/De2yToxcSHDMbAq/yF+ubJBTa+cUEvIQnnIEC00S9tlgEIsu81a29SkKCZaZRe1CCHHzq6tNsApIn0OO94oMJcx82fh9MrcI1D2G3zKvTqDMMQ4fTrzgacMrrF/eFYZYThieXUKWr+XEeGz9MeqECNOUk7eHQ6TBjWzaP7tTPhzB/8DiqOK3ED9xjqsZY9/NIZcekLuMNTraiuSu6YB7ijUlwuAM3qrPYBDVsq2luguSFxZgVQpLbCwBKoH54dAcWH0qsxIZcNlxootpMO/TQtWOeJ5NhCB81BZb4t1PPNA0KtNuT6VMSvpcrLjhGtChfXIAluAnlqb/LqUJ62lsOvEziWuDCf1xfjJbnTXVTZg78yp79cClNSkTr0u9YK7tkdh+pfTrkuPlVlzAx3DhieCIaSOVIYayz4JnOeUzgC0amph28KhY7SPftdwwgV82u5YH9xAnLj5uBykYYZ0q10obFYf3HdwSgRy49COtafK5NBjZLL3GrLFAgx6wbF4j0iT8vaJdSLry5wZDUBS7K3meRgPcYl7s1/R+uyNhuBXJ1Zs3ZJ3sCNbFj3+kGeVq4h4GT8yt2hDdB8eJ3+hS8XbwUjHgzqnkhJYqaOSHc0WMOX+Q+HajKMXEM2nQt8XNkJ5sAccUlruyA+heRO0A6YJdSlwpdPysxMVjy77Cm4RXwCqUdFN07vaKR8wVKNqOS1DlIAcynxi0ywQeTwxFWPnd/5C5sXElvFgOPv6rMZ97Wr1ZlqScTQVky1SHD4mO2pM58J3OJFqrzWLLM4pWJtvGyf5cpryegTBIt4BLU5bnchZgni04r0oY1PrAwHjROSyV5okwH8+Myx6AeTFV18+Tg+9/tlCIRQ5sf41OTtmPvyjjllq2ccI8+vC6e07DbCqYNtJDlBHtmlJeC1nsRnz4/M4SNIWKUF59YDj7Wmk/+wcxsPp1kKLKqHcMvESww599E3RQtkxLcgnGiEPe26urhTqHzKO8E3/kxdvKJ+xhYWN0nIQaMsPvN5Ixa/hLWq4jVVD2S2bElAJfNCTbxS3jPRrrtU17oaTHrqMTHl+EJK3MwmbmmucyCUSI4eKLxpu6HMRJI0MOHRz3ug6OWfPVXfTC6yqVvNCwaKJlHdge5NpEAJNEUsXB93QOFfkRI10Pid2HU1cEerZ6UI0Rpx6QIgkIaivKUh4CWnWmxcuOeA1Fmk8CB/HL96p91rXd+TqYngnuzBEPfmAHy/FTeTBOzeept2+ZobKaPNqGM2MPYfG0uvPHjHutjBEP4WqUPnrQykLmhhnYE0RxNpIvEwSJG2SCPrCMTBtwTpZVuISjcx0k+7Bx6kCumnN3xgkpUL9DqSfDWaeOnSQq/GvByi4Em4OcXop7DXbVeFh9utDE95fzXRG+0saks2LrpImzjA6iKTElUKc43iAO7GEYzFcg6gWRxgvuwdrnK3wgC6xYk+V1m7OGHnLru186Tbh00GBP3i9BN8HL2yyjdtFx6WxorS1S/O5S3+Fn+Lv8Xf4m9xDeJ46f43cXeN0Cn4L+JB9/XRz/gP4uQ/Xfvsh8ULepQ2y90Piu9C52GvsPox8XrxbLNNf0Q8bRkfjV4rjr1kzGztvkqcpDaDU/AKcZLabM6GfnGS2lwuhW5xktoMSNLrFiepzedaaxUnqS1Gm2oUT1vpL8WpLnHHRNLY6M2bZ34BEyxYNB5OGAoAAAAASUVORK5CYII="
    },
    c544: function (e, t, n) {
        e.exports = {
            label: "styles-module_label_3C1G0",
            wrapper: "styles-module_wrapper_HMi7g",
            disabled: "styles-module_disabled_2TdUA"
        }
    },
    c72d: function (e, t, n) {
        e.exports = {
            navigation: "styles-module_navigation_2JSpv",
            navigationItem: "styles-module_navigationItem_2PF0W"
        }
    },
    c8e1: function (e, t, n) {
        e.exports = n.p + "img/like.a24b6823.svg"
    },
    c9f1: function (e, t, n) {
        e.exports = {
            allTitles: "AllTitles-module_allTitles_2zHO8"
        }
    },
    ccc1: function (e, t, n) {
        e.exports = n.p + "img/top_wide.6353573d.png"
    },
    cd08: function (e, t, n) {
        e.exports = {
            title: "styles-module_title_3bfs3",
            contentsWrapper: "styles-module_contentsWrapper_1-Qek",
            content: "styles-module_content_20XZI",
            date: "styles-module_date_3ND4b",
            body: "styles-module_body_146J0",
            border: "styles-module_border_1yWLl"
        }
    },
    cd49: function (e, t, n) {
        "use strict";
        n.r(t);
        n("28a5"),
            n("cadf"),
            n("551c"),
            n("097d");
        var a = n("2b0e")
            , i = (n("9f29"),
                n("65d9"))
            , r = n.n(i);
        r.a.registerHooks(["beforeRouteEnter", "beforeRouteLeave", "beforeRouteUpdate"]);
        var o = n("8c4f5")
            , s = function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view", {
                    key: e.$route.fullPath
                })], 1)
            }
            , l = []
            , c = n("9ab4")
            , u = n("60a3")
            , d = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t = c["b"]([u["a"]], t),
                    t
            }(u["c"])
            , p = d
            , m = p
            , h = (n("034f"),
                n("2877"))
            , g = Object(h["a"])(m, s, l, !1, null, null, null);
        g.options.__file = "App.vue";
        var f = g.exports
            , b = n("ec71")
            , y = n.n(b)
            , v = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.onClickRemove = function () {
                        this.$emit("remove")
                    }
                    ,
                    t.prototype.onClickUndo = function () {
                        this.$emit("undo")
                    }
                    ,
                    t.prototype.render = function (e) {
                        var t = this
                            , n = this.title.isRemoved ? e("p", {
                                class: y.a.btn,
                                on: {
                                    click: function () {
                                        return t.onClickUndo()
                                    }
                                }
                            }, [this.$t("UNDO")]) : e("p", {
                                class: y.a.btn,
                                on: {
                                    click: function () {
                                        return t.onClickRemove()
                                    }
                                }
                            }, [this.$t("REMOVE")]);
                        return e("div", {
                            class: y.a.contents
                        }, [e("div", {
                            class: y.a.imgWrapper
                        }, [e("p", {
                            directives: [{
                                name: "show",
                                value: this.title.isRemoved
                            }],
                            class: y.a.removedMessage
                        }, [this.$t("REMOVED")]), e("router-link", {
                            attrs: {
                                to: "/titles/" + this.title.titleId,
                                disabled: this.title.isRemoved
                            }
                        }, [e("img", {
                            directives: [{
                                name: "lazy",
                                value: this.title.portraitImageUrl
                            }],
                            key: this.title.titleId,
                            class: this.title.isRemoved ? y.a.removed + " " + y.a.image : y.a.image,
                            attrs: {
                                alt: "image"
                            }
                        })]), n])])
                    }
                    ,
                    c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , w = v
            , A = n("6c9f")
            , _ = n.n(A)
            , k = n("60fe")
            , T = n.n(k)
            , S = u["c"].extend({
                functional: !0,
                render: function (e, t) {
                    return e("h1", {
                        class: T.a.title + " " + t.data.class
                    }, [t.slots().default])
                }
            })
            , P = (n("a481"),
                n("7f7f"),
                n("ac6a"),
                n("456d"),
                n("543b"))
            , C = P["Reader"]
            , O = P["Writer"]
            , I = P["util"]
            , L = P["roots"]["default"] || (P["roots"]["default"] = {})
            , E = L.Proto = function () {
                var e = {};
                return e.AdNetworkList = function () {
                    function e(e) {
                        if (this.adNetworks = [],
                            e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.adNetworks = I.emptyArray,
                        e.encode = function (e, t) {
                            if (t || (t = O.create()),
                                null != e.adNetworks && e.adNetworks.length)
                                for (var n = 0; n < e.adNetworks.length; ++n)
                                    L.Proto.AdNetwork.encode(e.adNetworks[n], t.uint32(10).fork()).ldelim();
                            return t
                        }
                        ,
                        e.decode = function (e, t) {
                            e instanceof C || (e = C.create(e));
                            var n = void 0 === t ? e.len : e.pos + t
                                , a = new L.Proto.AdNetworkList;
                            while (e.pos < n) {
                                var i = e.uint32();
                                switch (i >>> 3) {
                                    case 1:
                                        a.adNetworks && a.adNetworks.length || (a.adNetworks = []),
                                            a.adNetworks.push(L.Proto.AdNetwork.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & i);
                                        break
                                }
                            }
                            return a
                        }
                        ,
                        e
                }(),
                    e.AdNetwork = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var t;
                        return e.prototype.facebook = null,
                            e.prototype.admob = null,
                            e.prototype.mopub = null,
                            e.prototype.adsense = null,
                            e.prototype.applovin = null,
                            Object.defineProperty(e.prototype, "Network", {
                                get: I.oneOfGetter(t = ["facebook", "admob", "mopub", "adsense", "applovin"]),
                                set: I.oneOfSetter(t)
                            }),
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.facebook && e.hasOwnProperty("facebook") && L.Proto.AdNetwork.Facebook.encode(e.facebook, t.uint32(10).fork()).ldelim(),
                                    null != e.admob && e.hasOwnProperty("admob") && L.Proto.AdNetwork.Admob.encode(e.admob, t.uint32(18).fork()).ldelim(),
                                    null != e.mopub && e.hasOwnProperty("mopub") && L.Proto.AdNetwork.Mopub.encode(e.mopub, t.uint32(26).fork()).ldelim(),
                                    null != e.adsense && e.hasOwnProperty("adsense") && L.Proto.AdNetwork.Adsense.encode(e.adsense, t.uint32(34).fork()).ldelim(),
                                    null != e.applovin && e.hasOwnProperty("applovin") && L.Proto.AdNetwork.Applovin.encode(e.applovin, t.uint32(42).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.AdNetwork;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.facebook = L.Proto.AdNetwork.Facebook.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.admob = L.Proto.AdNetwork.Admob.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.mopub = L.Proto.AdNetwork.Mopub.decode(e, e.uint32());
                                            break;
                                        case 4:
                                            a.adsense = L.Proto.AdNetwork.Adsense.decode(e, e.uint32());
                                            break;
                                        case 5:
                                            a.applovin = L.Proto.AdNetwork.Applovin.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.Facebook = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.placementID = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.placementID && e.hasOwnProperty("placementID") && t.uint32(10).string(e.placementID),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.AdNetwork.Facebook;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.placementID = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.Admob = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.unitID = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.unitID && e.hasOwnProperty("unitID") && t.uint32(10).string(e.unitID),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.AdNetwork.Admob;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.unitID = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.Adsense = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.unitID = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.unitID && e.hasOwnProperty("unitID") && t.uint32(10).string(e.unitID),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.AdNetwork.Adsense;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.unitID = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.Applovin = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.unitID = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.unitID && e.hasOwnProperty("unitID") && t.uint32(10).string(e.unitID),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.AdNetwork.Applovin;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.unitID = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.Mopub = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.unitID = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.unitID && e.hasOwnProperty("unitID") && t.uint32(10).string(e.unitID),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.AdNetwork.Mopub;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.unitID = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e
                    }(),
                    e.Banner = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.imageUrl = "",
                            e.prototype.action = null,
                            e.prototype.id = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.imageUrl && e.hasOwnProperty("imageUrl") && t.uint32(10).string(e.imageUrl),
                                    null != e.action && e.hasOwnProperty("action") && L.Proto.TransitionAction.encode(e.action, t.uint32(18).fork()).ldelim(),
                                    null != e.id && e.hasOwnProperty("id") && t.uint32(24).uint32(e.id),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Banner;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.imageUrl = e.string();
                                            break;
                                        case 2:
                                            a.action = L.Proto.TransitionAction.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.id = e.uint32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.Chapter = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.titleId = 0,
                            e.prototype.chapterId = 0,
                            e.prototype.name = "",
                            e.prototype.subTitle = "",
                            e.prototype.thumbnailUrl = "",
                            e.prototype.startTimeStamp = 0,
                            e.prototype.endTimeStamp = 0,
                            e.prototype.alreadyViewed = !1,
                            e.prototype.isVerticalOnly = !1,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.titleId && e.hasOwnProperty("titleId") && t.uint32(8).uint32(e.titleId),
                                    null != e.chapterId && e.hasOwnProperty("chapterId") && t.uint32(16).uint32(e.chapterId),
                                    null != e.name && e.hasOwnProperty("name") && t.uint32(26).string(e.name),
                                    null != e.subTitle && e.hasOwnProperty("subTitle") && t.uint32(34).string(e.subTitle),
                                    null != e.thumbnailUrl && e.hasOwnProperty("thumbnailUrl") && t.uint32(42).string(e.thumbnailUrl),
                                    null != e.startTimeStamp && e.hasOwnProperty("startTimeStamp") && t.uint32(48).uint32(e.startTimeStamp),
                                    null != e.endTimeStamp && e.hasOwnProperty("endTimeStamp") && t.uint32(56).uint32(e.endTimeStamp),
                                    null != e.alreadyViewed && e.hasOwnProperty("alreadyViewed") && t.uint32(64).bool(e.alreadyViewed),
                                    null != e.isVerticalOnly && e.hasOwnProperty("isVerticalOnly") && t.uint32(72).bool(e.isVerticalOnly),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Chapter;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.titleId = e.uint32();
                                            break;
                                        case 2:
                                            a.chapterId = e.uint32();
                                            break;
                                        case 3:
                                            a.name = e.string();
                                            break;
                                        case 4:
                                            a.subTitle = e.string();
                                            break;
                                        case 5:
                                            a.thumbnailUrl = e.string();
                                            break;
                                        case 6:
                                            a.startTimeStamp = e.uint32();
                                            break;
                                        case 7:
                                            a.endTimeStamp = e.uint32();
                                            break;
                                        case 8:
                                            a.alreadyViewed = e.bool();
                                            break;
                                        case 9:
                                            a.isVerticalOnly = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.Comment = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.id = 0,
                            e.prototype.index = 0,
                            e.prototype.userName = "",
                            e.prototype.iconUrl = "",
                            e.prototype.isMyComment = !1,
                            e.prototype.alreadyLiked = !1,
                            e.prototype.numberOfLikes = 0,
                            e.prototype.body = "",
                            e.prototype.created = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.id && e.hasOwnProperty("id") && t.uint32(8).uint32(e.id),
                                    null != e.index && e.hasOwnProperty("index") && t.uint32(16).uint32(e.index),
                                    null != e.userName && e.hasOwnProperty("userName") && t.uint32(26).string(e.userName),
                                    null != e.iconUrl && e.hasOwnProperty("iconUrl") && t.uint32(34).string(e.iconUrl),
                                    null != e.isMyComment && e.hasOwnProperty("isMyComment") && t.uint32(48).bool(e.isMyComment),
                                    null != e.alreadyLiked && e.hasOwnProperty("alreadyLiked") && t.uint32(56).bool(e.alreadyLiked),
                                    null != e.numberOfLikes && e.hasOwnProperty("numberOfLikes") && t.uint32(72).uint32(e.numberOfLikes),
                                    null != e.body && e.hasOwnProperty("body") && t.uint32(82).string(e.body),
                                    null != e.created && e.hasOwnProperty("created") && t.uint32(88).uint32(e.created),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Comment;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.id = e.uint32();
                                            break;
                                        case 2:
                                            a.index = e.uint32();
                                            break;
                                        case 3:
                                            a.userName = e.string();
                                            break;
                                        case 4:
                                            a.iconUrl = e.string();
                                            break;
                                        case 6:
                                            a.isMyComment = e.bool();
                                            break;
                                        case 7:
                                            a.alreadyLiked = e.bool();
                                            break;
                                        case 9:
                                            a.numberOfLikes = e.uint32();
                                            break;
                                        case 10:
                                            a.body = e.string();
                                            break;
                                        case 11:
                                            a.created = e.uint32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.CommentIcon = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.id = 0,
                            e.prototype.imageUrl = "",
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.id && e.hasOwnProperty("id") && t.uint32(8).uint32(e.id),
                                    null != e.imageUrl && e.hasOwnProperty("imageUrl") && t.uint32(18).string(e.imageUrl),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.CommentIcon;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.id = e.uint32();
                                            break;
                                        case 2:
                                            a.imageUrl = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.Feedback = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.timeStamp = 0,
                            e.prototype.body = "",
                            e.prototype.responseType = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.timeStamp && e.hasOwnProperty("timeStamp") && t.uint32(8).uint32(e.timeStamp),
                                    null != e.body && e.hasOwnProperty("body") && t.uint32(18).string(e.body),
                                    null != e.responseType && e.hasOwnProperty("responseType") && t.uint32(24).int32(e.responseType),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Feedback;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.timeStamp = e.uint32();
                                            break;
                                        case 2:
                                            a.body = e.string();
                                            break;
                                        case 3:
                                            a.responseType = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.ResponseType = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "QUESTION"] = 0,
                                    t[e[1] = "ANSWER"] = 1,
                                    t
                            }(),
                            e
                    }(),
                    e.Page = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var t;
                        return e.prototype.mangaPage = null,
                            e.prototype.bannerList = null,
                            e.prototype.lastPage = null,
                            e.prototype.advertisement = null,
                            Object.defineProperty(e.prototype, "data", {
                                get: I.oneOfGetter(t = ["mangaPage", "bannerList", "lastPage", "advertisement"]),
                                set: I.oneOfSetter(t)
                            }),
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.mangaPage && e.hasOwnProperty("mangaPage") && L.Proto.Page.MangaPage.encode(e.mangaPage, t.uint32(10).fork()).ldelim(),
                                    null != e.bannerList && e.hasOwnProperty("bannerList") && L.Proto.Page.BannerList.encode(e.bannerList, t.uint32(18).fork()).ldelim(),
                                    null != e.lastPage && e.hasOwnProperty("lastPage") && L.Proto.Page.LastPage.encode(e.lastPage, t.uint32(26).fork()).ldelim(),
                                    null != e.advertisement && e.hasOwnProperty("advertisement") && L.Proto.AdNetworkList.encode(e.advertisement, t.uint32(34).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Page;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.mangaPage = L.Proto.Page.MangaPage.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.bannerList = L.Proto.Page.BannerList.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.lastPage = L.Proto.Page.LastPage.decode(e, e.uint32());
                                            break;
                                        case 4:
                                            a.advertisement = L.Proto.AdNetworkList.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.MangaPage = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.imageUrl = "",
                                    e.prototype.width = 0,
                                    e.prototype.height = 0,
                                    e.prototype.type = 0,
                                    e.prototype.encryptionKey = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.imageUrl && e.hasOwnProperty("imageUrl") && t.uint32(10).string(e.imageUrl),
                                            null != e.width && e.hasOwnProperty("width") && t.uint32(16).uint32(e.width),
                                            null != e.height && e.hasOwnProperty("height") && t.uint32(24).uint32(e.height),
                                            null != e.type && e.hasOwnProperty("type") && t.uint32(32).int32(e.type),
                                            null != e.encryptionKey && e.hasOwnProperty("encryptionKey") && t.uint32(42).string(e.encryptionKey),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.Page.MangaPage;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.imageUrl = e.string();
                                                    break;
                                                case 2:
                                                    a.width = e.uint32();
                                                    break;
                                                case 3:
                                                    a.height = e.uint32();
                                                    break;
                                                case 4:
                                                    a.type = e.int32();
                                                    break;
                                                case 5:
                                                    a.encryptionKey = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.LastPage = function () {
                                function e(e) {
                                    if (this.topComments = [],
                                        e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.currentChapter = null,
                                    e.prototype.nextChapter = null,
                                    e.prototype.topComments = I.emptyArray,
                                    e.prototype.isSubscribed = !1,
                                    e.prototype.nextTimeStamp = 0,
                                    e.prototype.chapterType = 0,
                                    e.prototype.advertisement = null,
                                    e.prototype.movieReward = null,
                                    e.encode = function (e, t) {
                                        if (t || (t = O.create()),
                                            null != e.currentChapter && e.hasOwnProperty("currentChapter") && L.Proto.Chapter.encode(e.currentChapter, t.uint32(10).fork()).ldelim(),
                                            null != e.nextChapter && e.hasOwnProperty("nextChapter") && L.Proto.Chapter.encode(e.nextChapter, t.uint32(18).fork()).ldelim(),
                                            null != e.topComments && e.topComments.length)
                                            for (var n = 0; n < e.topComments.length; ++n)
                                                L.Proto.Comment.encode(e.topComments[n], t.uint32(26).fork()).ldelim();
                                        return null != e.isSubscribed && e.hasOwnProperty("isSubscribed") && t.uint32(32).bool(e.isSubscribed),
                                            null != e.nextTimeStamp && e.hasOwnProperty("nextTimeStamp") && t.uint32(40).uint32(e.nextTimeStamp),
                                            null != e.chapterType && e.hasOwnProperty("chapterType") && t.uint32(48).int32(e.chapterType),
                                            null != e.advertisement && e.hasOwnProperty("advertisement") && L.Proto.AdNetworkList.encode(e.advertisement, t.uint32(58).fork()).ldelim(),
                                            null != e.movieReward && e.hasOwnProperty("movieReward") && L.Proto.Popup.encode(e.movieReward, t.uint32(66).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.Page.LastPage;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.currentChapter = L.Proto.Chapter.decode(e, e.uint32());
                                                    break;
                                                case 2:
                                                    a.nextChapter = L.Proto.Chapter.decode(e, e.uint32());
                                                    break;
                                                case 3:
                                                    a.topComments && a.topComments.length || (a.topComments = []),
                                                        a.topComments.push(L.Proto.Comment.decode(e, e.uint32()));
                                                    break;
                                                case 4:
                                                    a.isSubscribed = e.bool();
                                                    break;
                                                case 5:
                                                    a.nextTimeStamp = e.uint32();
                                                    break;
                                                case 6:
                                                    a.chapterType = e.int32();
                                                    break;
                                                case 7:
                                                    a.advertisement = L.Proto.AdNetworkList.decode(e, e.uint32());
                                                    break;
                                                case 8:
                                                    a.movieReward = L.Proto.Popup.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.BannerList = function () {
                                function e(e) {
                                    if (this.banners = [],
                                        e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.bannerTitle = "",
                                    e.prototype.banners = I.emptyArray,
                                    e.encode = function (e, t) {
                                        if (t || (t = O.create()),
                                            null != e.bannerTitle && e.hasOwnProperty("bannerTitle") && t.uint32(10).string(e.bannerTitle),
                                            null != e.banners && e.banners.length)
                                            for (var n = 0; n < e.banners.length; ++n)
                                                L.Proto.Banner.encode(e.banners[n], t.uint32(18).fork()).ldelim();
                                        return t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.Page.BannerList;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.bannerTitle = e.string();
                                                    break;
                                                case 2:
                                                    a.banners && a.banners.length || (a.banners = []),
                                                        a.banners.push(L.Proto.Banner.decode(e, e.uint32()));
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.ChapterType = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "LATEST"] = 0,
                                    t[e[1] = "SEQUENCE"] = 1,
                                    t[e[2] = "NOSEQUENCE"] = 2,
                                    t
                            }(),
                            e.PageType = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "SINGLE"] = 0,
                                    t[e[1] = "LEFT"] = 1,
                                    t[e[2] = "RIGHT"] = 2,
                                    t[e[3] = "DOUBLE"] = 3,
                                    t
                            }(),
                            e
                    }(),
                    e.Popup = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var t;
                        return e.prototype.osDefault = null,
                            e.prototype.appDefault = null,
                            e.prototype.movieReward = null,
                            Object.defineProperty(e.prototype, "popup", {
                                get: I.oneOfGetter(t = ["osDefault", "appDefault", "movieReward"]),
                                set: I.oneOfSetter(t)
                            }),
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.osDefault && e.hasOwnProperty("osDefault") && L.Proto.Popup.OSDefault.encode(e.osDefault, t.uint32(10).fork()).ldelim(),
                                    null != e.appDefault && e.hasOwnProperty("appDefault") && L.Proto.Popup.AppDefault.encode(e.appDefault, t.uint32(18).fork()).ldelim(),
                                    null != e.movieReward && e.hasOwnProperty("movieReward") && L.Proto.MovieReward.encode(e.movieReward, t.uint32(26).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Popup;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.osDefault = L.Proto.Popup.OSDefault.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.appDefault = L.Proto.Popup.AppDefault.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.movieReward = L.Proto.MovieReward.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.OSDefault = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.subject = "",
                                    e.prototype.body = "",
                                    e.prototype.okButton = null,
                                    e.prototype.neutralButton = null,
                                    e.prototype.cancelButton = null,
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.subject && e.hasOwnProperty("subject") && t.uint32(10).string(e.subject),
                                            null != e.body && e.hasOwnProperty("body") && t.uint32(18).string(e.body),
                                            null != e.okButton && e.hasOwnProperty("okButton") && L.Proto.Popup.Button.encode(e.okButton, t.uint32(26).fork()).ldelim(),
                                            null != e.neutralButton && e.hasOwnProperty("neutralButton") && L.Proto.Popup.Button.encode(e.neutralButton, t.uint32(34).fork()).ldelim(),
                                            null != e.cancelButton && e.hasOwnProperty("cancelButton") && L.Proto.Popup.Button.encode(e.cancelButton, t.uint32(42).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.Popup.OSDefault;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.subject = e.string();
                                                    break;
                                                case 2:
                                                    a.body = e.string();
                                                    break;
                                                case 3:
                                                    a.okButton = L.Proto.Popup.Button.decode(e, e.uint32());
                                                    break;
                                                case 4:
                                                    a.neutralButton = L.Proto.Popup.Button.decode(e, e.uint32());
                                                    break;
                                                case 5:
                                                    a.cancelButton = L.Proto.Popup.Button.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.AppDefault = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.subject = "",
                                    e.prototype.body = "",
                                    e.prototype.action = null,
                                    e.prototype.imageUrl = "",
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.subject && e.hasOwnProperty("subject") && t.uint32(10).string(e.subject),
                                            null != e.body && e.hasOwnProperty("body") && t.uint32(18).string(e.body),
                                            null != e.action && e.hasOwnProperty("action") && L.Proto.TransitionAction.encode(e.action, t.uint32(26).fork()).ldelim(),
                                            null != e.imageUrl && e.hasOwnProperty("imageUrl") && t.uint32(34).string(e.imageUrl),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.Popup.AppDefault;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.subject = e.string();
                                                    break;
                                                case 2:
                                                    a.body = e.string();
                                                    break;
                                                case 3:
                                                    a.action = L.Proto.TransitionAction.decode(e, e.uint32());
                                                    break;
                                                case 4:
                                                    a.imageUrl = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e.Button = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                return e.prototype.text = "",
                                    e.prototype.action = null,
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.text && e.hasOwnProperty("text") && t.uint32(10).string(e.text),
                                            null != e.action && e.hasOwnProperty("action") && L.Proto.TransitionAction.encode(e.action, t.uint32(18).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.Popup.Button;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.text = e.string();
                                                    break;
                                                case 2:
                                                    a.action = L.Proto.TransitionAction.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e
                    }(),
                    e.MovieReward = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.imageUrl = "",
                            e.prototype.advertisement = null,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.imageUrl && e.hasOwnProperty("imageUrl") && t.uint32(10).string(e.imageUrl),
                                    null != e.advertisement && e.hasOwnProperty("advertisement") && L.Proto.AdNetworkList.encode(e.advertisement, t.uint32(18).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.MovieReward;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.imageUrl = e.string();
                                            break;
                                        case 2:
                                            a.advertisement = L.Proto.AdNetworkList.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.ServiceAnnouncement = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.title = "",
                            e.prototype.body = "",
                            e.prototype.date = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.title && e.hasOwnProperty("title") && t.uint32(10).string(e.title),
                                    null != e.body && e.hasOwnProperty("body") && t.uint32(18).string(e.body),
                                    null != e.date && e.hasOwnProperty("date") && t.uint32(24).int32(e.date),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.ServiceAnnouncement;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.title = e.string();
                                            break;
                                        case 2:
                                            a.body = e.string();
                                            break;
                                        case 3:
                                            a.date = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.Sns = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.body = "",
                            e.prototype.url = "",
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.body && e.hasOwnProperty("body") && t.uint32(10).string(e.body),
                                    null != e.url && e.hasOwnProperty("url") && t.uint32(18).string(e.url),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Sns;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.body = e.string();
                                            break;
                                        case 2:
                                            a.url = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.Title = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.titleId = 0,
                            e.prototype.name = "",
                            e.prototype.author = "",
                            e.prototype.portraitImageUrl = "",
                            e.prototype.landscapeImageUrl = "",
                            e.prototype.viewCount = 0,
                            e.prototype.language = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.titleId && e.hasOwnProperty("titleId") && t.uint32(8).uint32(e.titleId),
                                    null != e.name && e.hasOwnProperty("name") && t.uint32(18).string(e.name),
                                    null != e.author && e.hasOwnProperty("author") && t.uint32(26).string(e.author),
                                    null != e.portraitImageUrl && e.hasOwnProperty("portraitImageUrl") && t.uint32(34).string(e.portraitImageUrl),
                                    null != e.landscapeImageUrl && e.hasOwnProperty("landscapeImageUrl") && t.uint32(42).string(e.landscapeImageUrl),
                                    null != e.viewCount && e.hasOwnProperty("viewCount") && t.uint32(48).uint32(e.viewCount),
                                    null != e.language && e.hasOwnProperty("language") && t.uint32(56).int32(e.language),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Title;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.titleId = e.uint32();
                                            break;
                                        case 2:
                                            a.name = e.string();
                                            break;
                                        case 3:
                                            a.author = e.string();
                                            break;
                                        case 4:
                                            a.portraitImageUrl = e.string();
                                            break;
                                        case 5:
                                            a.landscapeImageUrl = e.string();
                                            break;
                                        case 6:
                                            a.viewCount = e.uint32();
                                            break;
                                        case 7:
                                            a.language = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.Language = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "ENGLISH"] = 0,
                                    t[e[1] = "SPANISH"] = 1,
                                    t
                            }(),
                            e
                    }(),
                    e.TitleList = function () {
                        function e(e) {
                            if (this.featuredTitles = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.listName = "",
                            e.prototype.featuredTitles = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.listName && e.hasOwnProperty("listName") && t.uint32(10).string(e.listName),
                                    null != e.featuredTitles && e.featuredTitles.length)
                                    for (var n = 0; n < e.featuredTitles.length; ++n)
                                        L.Proto.Title.encode(e.featuredTitles[n], t.uint32(18).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.TitleList;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.listName = e.string();
                                            break;
                                        case 2:
                                            a.featuredTitles && a.featuredTitles.length || (a.featuredTitles = []),
                                                a.featuredTitles.push(L.Proto.Title.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.TransitionAction = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.method = 0,
                            e.prototype.url = "",
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.method && e.hasOwnProperty("method") && t.uint32(8).int32(e.method),
                                    null != e.url && e.hasOwnProperty("url") && t.uint32(18).string(e.url),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.TransitionAction;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.method = e.int32();
                                            break;
                                        case 2:
                                            a.url = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.PresentationMethod = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "PUSH"] = 0,
                                    t[e[1] = "MODAL"] = 1,
                                    t[e[2] = "EXTERNAL"] = 2,
                                    t
                            }(),
                            e
                    }(),
                    e.UpdatedTitle = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.title = null,
                            e.prototype.chapterId = 0,
                            e.prototype.chapterName = "",
                            e.prototype.chapterSubTitle = "",
                            e.prototype.isLatest = !1,
                            e.prototype.isVerticalOnly = !1,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.title && e.hasOwnProperty("title") && L.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                                    null != e.chapterId && e.hasOwnProperty("chapterId") && t.uint32(16).uint32(e.chapterId),
                                    null != e.chapterName && e.hasOwnProperty("chapterName") && t.uint32(26).string(e.chapterName),
                                    null != e.chapterSubTitle && e.hasOwnProperty("chapterSubTitle") && t.uint32(34).string(e.chapterSubTitle),
                                    null != e.isLatest && e.hasOwnProperty("isLatest") && t.uint32(40).bool(e.isLatest),
                                    null != e.isVerticalOnly && e.hasOwnProperty("isVerticalOnly") && t.uint32(48).bool(e.isVerticalOnly),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.UpdatedTitle;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.title = L.Proto.Title.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.chapterId = e.uint32();
                                            break;
                                        case 3:
                                            a.chapterName = e.string();
                                            break;
                                        case 4:
                                            a.chapterSubTitle = e.string();
                                            break;
                                        case 5:
                                            a.isLatest = e.bool();
                                            break;
                                        case 6:
                                            a.isVerticalOnly = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.UpdatedTitleGroup = function () {
                        function e(e) {
                            if (this.titles = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.groupName = "",
                            e.prototype.titles = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.groupName && e.hasOwnProperty("groupName") && t.uint32(10).string(e.groupName),
                                    null != e.titles && e.titles.length)
                                    for (var n = 0; n < e.titles.length; ++n)
                                        L.Proto.UpdatedTitle.encode(e.titles[n], t.uint32(18).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.UpdatedTitleGroup;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.groupName = e.string();
                                            break;
                                        case 2:
                                            a.titles && a.titles.length || (a.titles = []),
                                                a.titles.push(L.Proto.UpdatedTitle.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.AllTitlesView = function () {
                        function e(e) {
                            if (this.titles = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.titles = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.titles && e.titles.length)
                                    for (var n = 0; n < e.titles.length; ++n)
                                        L.Proto.Title.encode(e.titles[n], t.uint32(10).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.AllTitlesView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.titles && a.titles.length || (a.titles = []),
                                                a.titles.push(L.Proto.Title.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.CommentListView = function () {
                        function e(e) {
                            if (this.comments = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.comments = I.emptyArray,
                            e.prototype.ifSetUserName = !1,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.comments && e.comments.length)
                                    for (var n = 0; n < e.comments.length; ++n)
                                        L.Proto.Comment.encode(e.comments[n], t.uint32(10).fork()).ldelim();
                                return null != e.ifSetUserName && e.hasOwnProperty("ifSetUserName") && t.uint32(16).bool(e.ifSetUserName),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.CommentListView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.comments && a.comments.length || (a.comments = []),
                                                a.comments.push(L.Proto.Comment.decode(e, e.uint32()));
                                            break;
                                        case 2:
                                            a.ifSetUserName = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.FeaturedTitlesView = function () {
                        function e(e) {
                            if (this.contents = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.mainBanner = null,
                            e.prototype.subBanner_1 = null,
                            e.prototype.subBanner_2 = null,
                            e.prototype.contents = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.mainBanner && e.hasOwnProperty("mainBanner") && L.Proto.Banner.encode(e.mainBanner, t.uint32(10).fork()).ldelim(),
                                    null != e.subBanner_1 && e.hasOwnProperty("subBanner_1") && L.Proto.Banner.encode(e.subBanner_1, t.uint32(18).fork()).ldelim(),
                                    null != e.subBanner_2 && e.hasOwnProperty("subBanner_2") && L.Proto.Banner.encode(e.subBanner_2, t.uint32(26).fork()).ldelim(),
                                    null != e.contents && e.contents.length)
                                    for (var n = 0; n < e.contents.length; ++n)
                                        L.Proto.FeaturedTitlesView.Contents.encode(e.contents[n], t.uint32(34).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.FeaturedTitlesView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.mainBanner = L.Proto.Banner.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.subBanner_1 = L.Proto.Banner.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.subBanner_2 = L.Proto.Banner.decode(e, e.uint32());
                                            break;
                                        case 4:
                                            a.contents && a.contents.length || (a.contents = []),
                                                a.contents.push(L.Proto.FeaturedTitlesView.Contents.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.Contents = function () {
                                function e(e) {
                                    if (e)
                                        for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                            null != e[t[n]] && (this[t[n]] = e[t[n]])
                                }
                                var t;
                                return e.prototype.banner = null,
                                    e.prototype.titleList = null,
                                    Object.defineProperty(e.prototype, "data", {
                                        get: I.oneOfGetter(t = ["banner", "titleList"]),
                                        set: I.oneOfSetter(t)
                                    }),
                                    e.encode = function (e, t) {
                                        return t || (t = O.create()),
                                            null != e.banner && e.hasOwnProperty("banner") && L.Proto.Banner.encode(e.banner, t.uint32(10).fork()).ldelim(),
                                            null != e.titleList && e.hasOwnProperty("titleList") && L.Proto.TitleList.encode(e.titleList, t.uint32(18).fork()).ldelim(),
                                            t
                                    }
                                    ,
                                    e.decode = function (e, t) {
                                        e instanceof C || (e = C.create(e));
                                        var n = void 0 === t ? e.len : e.pos + t
                                            , a = new L.Proto.FeaturedTitlesView.Contents;
                                        while (e.pos < n) {
                                            var i = e.uint32();
                                            switch (i >>> 3) {
                                                case 1:
                                                    a.banner = L.Proto.Banner.decode(e, e.uint32());
                                                    break;
                                                case 2:
                                                    a.titleList = L.Proto.TitleList.decode(e, e.uint32());
                                                    break;
                                                default:
                                                    e.skipType(7 & i);
                                                    break
                                            }
                                        }
                                        return a
                                    }
                                    ,
                                    e
                            }(),
                            e
                    }(),
                    e.FeedbackView = function () {
                        function e(e) {
                            if (this.feedbackList = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.feedbackList = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.feedbackList && e.feedbackList.length)
                                    for (var n = 0; n < e.feedbackList.length; ++n)
                                        L.Proto.Feedback.encode(e.feedbackList[n], t.uint32(10).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.FeedbackView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.feedbackList && a.feedbackList.length || (a.feedbackList = []),
                                                a.feedbackList.push(L.Proto.Feedback.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.HomeView = function () {
                        function e(e) {
                            if (this.topBanners = [],
                                this.groups = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.topBanners = I.emptyArray,
                            e.prototype.groups = I.emptyArray,
                            e.prototype.popup = null,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.topBanners && e.topBanners.length)
                                    for (var n = 0; n < e.topBanners.length; ++n)
                                        L.Proto.Banner.encode(e.topBanners[n], t.uint32(10).fork()).ldelim();
                                if (null != e.groups && e.groups.length)
                                    for (n = 0; n < e.groups.length; ++n)
                                        L.Proto.UpdatedTitleGroup.encode(e.groups[n], t.uint32(18).fork()).ldelim();
                                return null != e.popup && e.hasOwnProperty("popup") && L.Proto.Popup.encode(e.popup, t.uint32(74).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.HomeView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.topBanners && a.topBanners.length || (a.topBanners = []),
                                                a.topBanners.push(L.Proto.Banner.decode(e, e.uint32()));
                                            break;
                                        case 2:
                                            a.groups && a.groups.length || (a.groups = []),
                                                a.groups.push(L.Proto.UpdatedTitleGroup.decode(e, e.uint32()));
                                            break;
                                        case 9:
                                            a.popup = L.Proto.Popup.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.InitialView = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.gdprAgreementRequired = !1,
                            e.prototype.englishTitlesCount = 0,
                            e.prototype.spanishTitlesCount = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.gdprAgreementRequired && e.hasOwnProperty("gdprAgreementRequired") && t.uint32(8).bool(e.gdprAgreementRequired),
                                    null != e.englishTitlesCount && e.hasOwnProperty("englishTitlesCount") && t.uint32(16).uint32(e.englishTitlesCount),
                                    null != e.spanishTitlesCount && e.hasOwnProperty("spanishTitlesCount") && t.uint32(24).uint32(e.spanishTitlesCount),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.InitialView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.gdprAgreementRequired = e.bool();
                                            break;
                                        case 2:
                                            a.englishTitlesCount = e.uint32();
                                            break;
                                        case 3:
                                            a.spanishTitlesCount = e.uint32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.MangaViewer = function () {
                        function e(e) {
                            if (this.pages = [],
                                this.chapters = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.pages = I.emptyArray,
                            e.prototype.chapterId = 0,
                            e.prototype.chapters = I.emptyArray,
                            e.prototype.sns = null,
                            e.prototype.titleName = "",
                            e.prototype.chapterName = "",
                            e.prototype.numberOfComments = 0,
                            e.prototype.isVerticalOnly = !1,
                            e.prototype.titleId = 0,
                            e.prototype.startFromRight = !1,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.pages && e.pages.length)
                                    for (var n = 0; n < e.pages.length; ++n)
                                        L.Proto.Page.encode(e.pages[n], t.uint32(10).fork()).ldelim();
                                if (null != e.chapterId && e.hasOwnProperty("chapterId") && t.uint32(16).uint32(e.chapterId),
                                    null != e.chapters && e.chapters.length)
                                    for (n = 0; n < e.chapters.length; ++n)
                                        L.Proto.Chapter.encode(e.chapters[n], t.uint32(26).fork()).ldelim();
                                return null != e.sns && e.hasOwnProperty("sns") && L.Proto.Sns.encode(e.sns, t.uint32(34).fork()).ldelim(),
                                    null != e.titleName && e.hasOwnProperty("titleName") && t.uint32(42).string(e.titleName),
                                    null != e.chapterName && e.hasOwnProperty("chapterName") && t.uint32(50).string(e.chapterName),
                                    null != e.numberOfComments && e.hasOwnProperty("numberOfComments") && t.uint32(56).uint32(e.numberOfComments),
                                    null != e.isVerticalOnly && e.hasOwnProperty("isVerticalOnly") && t.uint32(64).bool(e.isVerticalOnly),
                                    null != e.titleId && e.hasOwnProperty("titleId") && t.uint32(72).uint32(e.titleId),
                                    null != e.startFromRight && e.hasOwnProperty("startFromRight") && t.uint32(80).bool(e.startFromRight),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.MangaViewer;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.pages && a.pages.length || (a.pages = []),
                                                a.pages.push(L.Proto.Page.decode(e, e.uint32()));
                                            break;
                                        case 2:
                                            a.chapterId = e.uint32();
                                            break;
                                        case 3:
                                            a.chapters && a.chapters.length || (a.chapters = []),
                                                a.chapters.push(L.Proto.Chapter.decode(e, e.uint32()));
                                            break;
                                        case 4:
                                            a.sns = L.Proto.Sns.decode(e, e.uint32());
                                            break;
                                        case 5:
                                            a.titleName = e.string();
                                            break;
                                        case 6:
                                            a.chapterName = e.string();
                                            break;
                                        case 7:
                                            a.numberOfComments = e.uint32();
                                            break;
                                        case 8:
                                            a.isVerticalOnly = e.bool();
                                            break;
                                        case 9:
                                            a.titleId = e.uint32();
                                            break;
                                        case 10:
                                            a.startFromRight = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.ProfileSettingsView = function () {
                        function e(e) {
                            if (this.iconList = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.iconList = I.emptyArray,
                            e.prototype.userName = "",
                            e.prototype.myIcon = null,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.iconList && e.iconList.length)
                                    for (var n = 0; n < e.iconList.length; ++n)
                                        L.Proto.CommentIcon.encode(e.iconList[n], t.uint32(10).fork()).ldelim();
                                return null != e.userName && e.hasOwnProperty("userName") && t.uint32(18).string(e.userName),
                                    null != e.myIcon && e.hasOwnProperty("myIcon") && L.Proto.CommentIcon.encode(e.myIcon, t.uint32(26).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.ProfileSettingsView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.iconList && a.iconList.length || (a.iconList = []),
                                                a.iconList.push(L.Proto.CommentIcon.decode(e, e.uint32()));
                                            break;
                                        case 2:
                                            a.userName = e.string();
                                            break;
                                        case 3:
                                            a.myIcon = L.Proto.CommentIcon.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.RegistrationData = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.deviceSecret = "",
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.deviceSecret && e.hasOwnProperty("deviceSecret") && t.uint32(10).string(e.deviceSecret),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.RegistrationData;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.deviceSecret = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.ServiceAnnouncementsView = function () {
                        function e(e) {
                            if (this.serviceAnnouncements = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.serviceAnnouncements = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.serviceAnnouncements && e.serviceAnnouncements.length)
                                    for (var n = 0; n < e.serviceAnnouncements.length; ++n)
                                        L.Proto.ServiceAnnouncement.encode(e.serviceAnnouncements[n], t.uint32(10).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.ServiceAnnouncementsView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.serviceAnnouncements && a.serviceAnnouncements.length || (a.serviceAnnouncements = []),
                                                a.serviceAnnouncements.push(L.Proto.ServiceAnnouncement.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.SettingsView = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.myIcon = null,
                            e.prototype.userName = "",
                            e.prototype.noticeOfNewsAndEvents = !1,
                            e.prototype.noticeOfUpdatesOfSubscribedTitles = !1,
                            e.prototype.englishTitlesCount = 0,
                            e.prototype.spanishTitlesCount = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.myIcon && e.hasOwnProperty("myIcon") && L.Proto.CommentIcon.encode(e.myIcon, t.uint32(10).fork()).ldelim(),
                                    null != e.userName && e.hasOwnProperty("userName") && t.uint32(18).string(e.userName),
                                    null != e.noticeOfNewsAndEvents && e.hasOwnProperty("noticeOfNewsAndEvents") && t.uint32(24).bool(e.noticeOfNewsAndEvents),
                                    null != e.noticeOfUpdatesOfSubscribedTitles && e.hasOwnProperty("noticeOfUpdatesOfSubscribedTitles") && t.uint32(32).bool(e.noticeOfUpdatesOfSubscribedTitles),
                                    null != e.englishTitlesCount && e.hasOwnProperty("englishTitlesCount") && t.uint32(40).uint32(e.englishTitlesCount),
                                    null != e.spanishTitlesCount && e.hasOwnProperty("spanishTitlesCount") && t.uint32(48).uint32(e.spanishTitlesCount),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.SettingsView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.myIcon = L.Proto.CommentIcon.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.userName = e.string();
                                            break;
                                        case 3:
                                            a.noticeOfNewsAndEvents = e.bool();
                                            break;
                                        case 4:
                                            a.noticeOfUpdatesOfSubscribedTitles = e.bool();
                                            break;
                                        case 5:
                                            a.englishTitlesCount = e.uint32();
                                            break;
                                        case 6:
                                            a.spanishTitlesCount = e.uint32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.SubscribedTitlesView = function () {
                        function e(e) {
                            if (this.titles = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.titles = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.titles && e.titles.length)
                                    for (var n = 0; n < e.titles.length; ++n)
                                        L.Proto.Title.encode(e.titles[n], t.uint32(10).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.SubscribedTitlesView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.titles && a.titles.length || (a.titles = []),
                                                a.titles.push(L.Proto.Title.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.TitleDetailView = function () {
                        function e(e) {
                            if (this.firstChapterList = [],
                                this.lastChapterList = [],
                                this.banners = [],
                                this.recommendedTitleList = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.title = null,
                            e.prototype.titleImageUrl = "",
                            e.prototype.overview = "",
                            e.prototype.backgroundImageUrl = "",
                            e.prototype.nextTimeStamp = 0,
                            e.prototype.updateTiming = 0,
                            e.prototype.viewingPeriodDescription = "",
                            e.prototype.nonAppearanceInfo = "",
                            e.prototype.firstChapterList = I.emptyArray,
                            e.prototype.lastChapterList = I.emptyArray,
                            e.prototype.banners = I.emptyArray,
                            e.prototype.recommendedTitleList = I.emptyArray,
                            e.prototype.sns = null,
                            e.prototype.isSimulReleased = !1,
                            e.prototype.isSubscribed = !1,
                            e.prototype.rating = 0,
                            e.prototype.chaptersDescending = !1,
                            e.prototype.numberOfViews = 0,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.title && e.hasOwnProperty("title") && L.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                                    null != e.titleImageUrl && e.hasOwnProperty("titleImageUrl") && t.uint32(18).string(e.titleImageUrl),
                                    null != e.overview && e.hasOwnProperty("overview") && t.uint32(26).string(e.overview),
                                    null != e.backgroundImageUrl && e.hasOwnProperty("backgroundImageUrl") && t.uint32(34).string(e.backgroundImageUrl),
                                    null != e.nextTimeStamp && e.hasOwnProperty("nextTimeStamp") && t.uint32(40).uint32(e.nextTimeStamp),
                                    null != e.updateTiming && e.hasOwnProperty("updateTiming") && t.uint32(48).int32(e.updateTiming),
                                    null != e.viewingPeriodDescription && e.hasOwnProperty("viewingPeriodDescription") && t.uint32(58).string(e.viewingPeriodDescription),
                                    null != e.nonAppearanceInfo && e.hasOwnProperty("nonAppearanceInfo") && t.uint32(66).string(e.nonAppearanceInfo),
                                    null != e.firstChapterList && e.firstChapterList.length)
                                    for (var n = 0; n < e.firstChapterList.length; ++n)
                                        L.Proto.Chapter.encode(e.firstChapterList[n], t.uint32(74).fork()).ldelim();
                                if (null != e.lastChapterList && e.lastChapterList.length)
                                    for (n = 0; n < e.lastChapterList.length; ++n)
                                        L.Proto.Chapter.encode(e.lastChapterList[n], t.uint32(82).fork()).ldelim();
                                if (null != e.banners && e.banners.length)
                                    for (n = 0; n < e.banners.length; ++n)
                                        L.Proto.Banner.encode(e.banners[n], t.uint32(90).fork()).ldelim();
                                if (null != e.recommendedTitleList && e.recommendedTitleList.length)
                                    for (n = 0; n < e.recommendedTitleList.length; ++n)
                                        L.Proto.Title.encode(e.recommendedTitleList[n], t.uint32(98).fork()).ldelim();
                                return null != e.sns && e.hasOwnProperty("sns") && L.Proto.Sns.encode(e.sns, t.uint32(106).fork()).ldelim(),
                                    null != e.isSimulReleased && e.hasOwnProperty("isSimulReleased") && t.uint32(112).bool(e.isSimulReleased),
                                    null != e.isSubscribed && e.hasOwnProperty("isSubscribed") && t.uint32(120).bool(e.isSubscribed),
                                    null != e.rating && e.hasOwnProperty("rating") && t.uint32(128).int32(e.rating),
                                    null != e.chaptersDescending && e.hasOwnProperty("chaptersDescending") && t.uint32(136).bool(e.chaptersDescending),
                                    null != e.numberOfViews && e.hasOwnProperty("numberOfViews") && t.uint32(144).uint32(e.numberOfViews),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.TitleDetailView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.title = L.Proto.Title.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.titleImageUrl = e.string();
                                            break;
                                        case 3:
                                            a.overview = e.string();
                                            break;
                                        case 4:
                                            a.backgroundImageUrl = e.string();
                                            break;
                                        case 5:
                                            a.nextTimeStamp = e.uint32();
                                            break;
                                        case 6:
                                            a.updateTiming = e.int32();
                                            break;
                                        case 7:
                                            a.viewingPeriodDescription = e.string();
                                            break;
                                        case 8:
                                            a.nonAppearanceInfo = e.string();
                                            break;
                                        case 9:
                                            a.firstChapterList && a.firstChapterList.length || (a.firstChapterList = []),
                                                a.firstChapterList.push(L.Proto.Chapter.decode(e, e.uint32()));
                                            break;
                                        case 10:
                                            a.lastChapterList && a.lastChapterList.length || (a.lastChapterList = []),
                                                a.lastChapterList.push(L.Proto.Chapter.decode(e, e.uint32()));
                                            break;
                                        case 11:
                                            a.banners && a.banners.length || (a.banners = []),
                                                a.banners.push(L.Proto.Banner.decode(e, e.uint32()));
                                            break;
                                        case 12:
                                            a.recommendedTitleList && a.recommendedTitleList.length || (a.recommendedTitleList = []),
                                                a.recommendedTitleList.push(L.Proto.Title.decode(e, e.uint32()));
                                            break;
                                        case 13:
                                            a.sns = L.Proto.Sns.decode(e, e.uint32());
                                            break;
                                        case 14:
                                            a.isSimulReleased = e.bool();
                                            break;
                                        case 15:
                                            a.isSubscribed = e.bool();
                                            break;
                                        case 16:
                                            a.rating = e.int32();
                                            break;
                                        case 17:
                                            a.chaptersDescending = e.bool();
                                            break;
                                        case 18:
                                            a.numberOfViews = e.uint32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.UpdateTiming = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "NOT_REGULARLY"] = 0,
                                    t[e[1] = "MONDAY"] = 1,
                                    t[e[2] = "TUESDAY"] = 2,
                                    t[e[3] = "WEDNESDAY"] = 3,
                                    t[e[4] = "THURSDAY"] = 4,
                                    t[e[5] = "FRIDAY"] = 5,
                                    t[e[6] = "SATURDAY"] = 6,
                                    t[e[7] = "SUNDAY"] = 7,
                                    t[e[8] = "DAY"] = 8,
                                    t
                            }(),
                            e.Rating = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "ALLAGE"] = 0,
                                    t[e[1] = "TEEN"] = 1,
                                    t[e[2] = "TEENPLUS"] = 2,
                                    t[e[3] = "MATURE"] = 3,
                                    t
                            }(),
                            e
                    }(),
                    e.TitleRankingView = function () {
                        function e(e) {
                            if (this.titles = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.titles = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.titles && e.titles.length)
                                    for (var n = 0; n < e.titles.length; ++n)
                                        L.Proto.Title.encode(e.titles[n], t.uint32(10).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.TitleRankingView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.titles && a.titles.length || (a.titles = []),
                                                a.titles.push(L.Proto.Title.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.UpdateProfileResultView = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.result = 0,
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.result && e.hasOwnProperty("result") && t.uint32(8).int32(e.result),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.UpdateProfileResultView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.result = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.Result = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "SUCCESS"] = 0,
                                    t[e[1] = "DUPLICATED"] = 1,
                                    t[e[2] = "NG_WORD"] = 2,
                                    t
                            }(),
                            e
                    }(),
                    e.ErrorResult = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.action = 0,
                            e.prototype.englishPopup = null,
                            e.prototype.spanishPopup = null,
                            e.prototype.debugInfo = "",
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.action && e.hasOwnProperty("action") && t.uint32(8).int32(e.action),
                                    null != e.englishPopup && e.hasOwnProperty("englishPopup") && L.Proto.Popup.OSDefault.encode(e.englishPopup, t.uint32(18).fork()).ldelim(),
                                    null != e.spanishPopup && e.hasOwnProperty("spanishPopup") && L.Proto.Popup.OSDefault.encode(e.spanishPopup, t.uint32(26).fork()).ldelim(),
                                    null != e.debugInfo && e.hasOwnProperty("debugInfo") && t.uint32(34).string(e.debugInfo),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.ErrorResult;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.action = e.int32();
                                            break;
                                        case 2:
                                            a.englishPopup = L.Proto.Popup.OSDefault.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.spanishPopup = L.Proto.Popup.OSDefault.decode(e, e.uint32());
                                            break;
                                        case 4:
                                            a.debugInfo = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e.Action = function () {
                                var e = {}
                                    , t = Object.create(e);
                                return t[e[0] = "DEFAULT"] = 0,
                                    t[e[1] = "UNAUTHORIZED"] = 1,
                                    t[e[2] = "MAINTENANCE"] = 2,
                                    t[e[3] = "GEOIP_BLOCKING"] = 3,
                                    t
                            }(),
                            e
                    }(),
                    e.Response = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var t;
                        return e.prototype.success = null,
                            e.prototype.error = null,
                            Object.defineProperty(e.prototype, "result", {
                                get: I.oneOfGetter(t = ["success", "error"]),
                                set: I.oneOfSetter(t)
                            }),
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.success && e.hasOwnProperty("success") && L.Proto.SuccessResult.encode(e.success, t.uint32(10).fork()).ldelim(),
                                    null != e.error && e.hasOwnProperty("error") && L.Proto.ErrorResult.encode(e.error, t.uint32(18).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.Response;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.success = L.Proto.SuccessResult.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            a.error = L.Proto.ErrorResult.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.SuccessResult = function () {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        var t;
                        return e.prototype.isFeaturedUpdated = !1,
                            e.prototype.registerationData = null,
                            e.prototype.homeView = null,
                            e.prototype.featuredTitlesView = null,
                            e.prototype.allTitlesView = null,
                            e.prototype.titleRankingView = null,
                            e.prototype.subscribedTitlesView = null,
                            e.prototype.titleDetailView = null,
                            e.prototype.commentListView = null,
                            e.prototype.mangaViewer = null,
                            e.prototype.webHomeView = null,
                            e.prototype.settingsView = null,
                            e.prototype.profileSettingsView = null,
                            e.prototype.updateProfileResultView = null,
                            e.prototype.serviceAnnouncementsView = null,
                            e.prototype.initialView = null,
                            e.prototype.feedbackView = null,
                            Object.defineProperty(e.prototype, "data", {
                                get: I.oneOfGetter(t = ["registerationData", "homeView", "featuredTitlesView", "allTitlesView", "titleRankingView", "subscribedTitlesView", "titleDetailView", "commentListView", "mangaViewer", "webHomeView", "settingsView", "profileSettingsView", "updateProfileResultView", "serviceAnnouncementsView", "initialView", "feedbackView"]),
                                set: I.oneOfSetter(t)
                            }),
                            e.encode = function (e, t) {
                                return t || (t = O.create()),
                                    null != e.isFeaturedUpdated && e.hasOwnProperty("isFeaturedUpdated") && t.uint32(8).bool(e.isFeaturedUpdated),
                                    null != e.registerationData && e.hasOwnProperty("registerationData") && L.Proto.RegistrationData.encode(e.registerationData, t.uint32(18).fork()).ldelim(),
                                    null != e.homeView && e.hasOwnProperty("homeView") && L.Proto.HomeView.encode(e.homeView, t.uint32(26).fork()).ldelim(),
                                    null != e.featuredTitlesView && e.hasOwnProperty("featuredTitlesView") && L.Proto.FeaturedTitlesView.encode(e.featuredTitlesView, t.uint32(34).fork()).ldelim(),
                                    null != e.allTitlesView && e.hasOwnProperty("allTitlesView") && L.Proto.AllTitlesView.encode(e.allTitlesView, t.uint32(42).fork()).ldelim(),
                                    null != e.titleRankingView && e.hasOwnProperty("titleRankingView") && L.Proto.TitleRankingView.encode(e.titleRankingView, t.uint32(50).fork()).ldelim(),
                                    null != e.subscribedTitlesView && e.hasOwnProperty("subscribedTitlesView") && L.Proto.SubscribedTitlesView.encode(e.subscribedTitlesView, t.uint32(58).fork()).ldelim(),
                                    null != e.titleDetailView && e.hasOwnProperty("titleDetailView") && L.Proto.TitleDetailView.encode(e.titleDetailView, t.uint32(66).fork()).ldelim(),
                                    null != e.commentListView && e.hasOwnProperty("commentListView") && L.Proto.CommentListView.encode(e.commentListView, t.uint32(74).fork()).ldelim(),
                                    null != e.mangaViewer && e.hasOwnProperty("mangaViewer") && L.Proto.MangaViewer.encode(e.mangaViewer, t.uint32(82).fork()).ldelim(),
                                    null != e.webHomeView && e.hasOwnProperty("webHomeView") && L.Proto.WebHomeView.encode(e.webHomeView, t.uint32(90).fork()).ldelim(),
                                    null != e.settingsView && e.hasOwnProperty("settingsView") && L.Proto.SettingsView.encode(e.settingsView, t.uint32(98).fork()).ldelim(),
                                    null != e.profileSettingsView && e.hasOwnProperty("profileSettingsView") && L.Proto.ProfileSettingsView.encode(e.profileSettingsView, t.uint32(106).fork()).ldelim(),
                                    null != e.updateProfileResultView && e.hasOwnProperty("updateProfileResultView") && L.Proto.UpdateProfileResultView.encode(e.updateProfileResultView, t.uint32(114).fork()).ldelim(),
                                    null != e.serviceAnnouncementsView && e.hasOwnProperty("serviceAnnouncementsView") && L.Proto.ServiceAnnouncementsView.encode(e.serviceAnnouncementsView, t.uint32(122).fork()).ldelim(),
                                    null != e.initialView && e.hasOwnProperty("initialView") && L.Proto.InitialView.encode(e.initialView, t.uint32(130).fork()).ldelim(),
                                    null != e.feedbackView && e.hasOwnProperty("feedbackView") && L.Proto.FeedbackView.encode(e.feedbackView, t.uint32(138).fork()).ldelim(),
                                    t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.SuccessResult;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.isFeaturedUpdated = e.bool();
                                            break;
                                        case 2:
                                            a.registerationData = L.Proto.RegistrationData.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            a.homeView = L.Proto.HomeView.decode(e, e.uint32());
                                            break;
                                        case 4:
                                            a.featuredTitlesView = L.Proto.FeaturedTitlesView.decode(e, e.uint32());
                                            break;
                                        case 5:
                                            a.allTitlesView = L.Proto.AllTitlesView.decode(e, e.uint32());
                                            break;
                                        case 6:
                                            a.titleRankingView = L.Proto.TitleRankingView.decode(e, e.uint32());
                                            break;
                                        case 7:
                                            a.subscribedTitlesView = L.Proto.SubscribedTitlesView.decode(e, e.uint32());
                                            break;
                                        case 8:
                                            a.titleDetailView = L.Proto.TitleDetailView.decode(e, e.uint32());
                                            break;
                                        case 9:
                                            a.commentListView = L.Proto.CommentListView.decode(e, e.uint32());
                                            break;
                                        case 10:
                                            a.mangaViewer = L.Proto.MangaViewer.decode(e, e.uint32());
                                            break;
                                        case 11:
                                            a.webHomeView = L.Proto.WebHomeView.decode(e, e.uint32());
                                            break;
                                        case 12:
                                            a.settingsView = L.Proto.SettingsView.decode(e, e.uint32());
                                            break;
                                        case 13:
                                            a.profileSettingsView = L.Proto.ProfileSettingsView.decode(e, e.uint32());
                                            break;
                                        case 14:
                                            a.updateProfileResultView = L.Proto.UpdateProfileResultView.decode(e, e.uint32());
                                            break;
                                        case 15:
                                            a.serviceAnnouncementsView = L.Proto.ServiceAnnouncementsView.decode(e, e.uint32());
                                            break;
                                        case 16:
                                            a.initialView = L.Proto.InitialView.decode(e, e.uint32());
                                            break;
                                        case 17:
                                            a.feedbackView = L.Proto.FeedbackView.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e.WebHomeView = function () {
                        function e(e) {
                            if (this.topBanners = [],
                                this.groups = [],
                                this.ranking = [],
                                e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.topBanners = I.emptyArray,
                            e.prototype.groups = I.emptyArray,
                            e.prototype.ranking = I.emptyArray,
                            e.encode = function (e, t) {
                                if (t || (t = O.create()),
                                    null != e.topBanners && e.topBanners.length)
                                    for (var n = 0; n < e.topBanners.length; ++n)
                                        L.Proto.Banner.encode(e.topBanners[n], t.uint32(10).fork()).ldelim();
                                if (null != e.groups && e.groups.length)
                                    for (n = 0; n < e.groups.length; ++n)
                                        L.Proto.UpdatedTitleGroup.encode(e.groups[n], t.uint32(18).fork()).ldelim();
                                if (null != e.ranking && e.ranking.length)
                                    for (n = 0; n < e.ranking.length; ++n)
                                        L.Proto.Title.encode(e.ranking[n], t.uint32(26).fork()).ldelim();
                                return t
                            }
                            ,
                            e.decode = function (e, t) {
                                e instanceof C || (e = C.create(e));
                                var n = void 0 === t ? e.len : e.pos + t
                                    , a = new L.Proto.WebHomeView;
                                while (e.pos < n) {
                                    var i = e.uint32();
                                    switch (i >>> 3) {
                                        case 1:
                                            a.topBanners && a.topBanners.length || (a.topBanners = []),
                                                a.topBanners.push(L.Proto.Banner.decode(e, e.uint32()));
                                            break;
                                        case 2:
                                            a.groups && a.groups.length || (a.groups = []),
                                                a.groups.push(L.Proto.UpdatedTitleGroup.decode(e, e.uint32()));
                                            break;
                                        case 3:
                                            a.ranking && a.ranking.length || (a.ranking = []),
                                                a.ranking.push(L.Proto.Title.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & i);
                                            break
                                    }
                                }
                                return a
                            }
                            ,
                            e
                    }(),
                    e
            }()
            , D = function (e, t) {
                switch (t.error.action) {
                    case E.ErrorResult.Action.MAINTENANCE:
                        e.replace("/maintenance");
                        break;
                    case E.ErrorResult.Action.GEOIP_BLOCKING:
                        e.replace("/blocking");
                        break;
                    default:
                        e.replace("/error")
                }
            }
            , N = n("3a09")
            , V = n.n(N)
            , R = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        var t = this;
                        return e("div", {
                            class: V.a.modal
                        }, [e("div", {
                            class: V.a.banner
                        }, [e("a", {
                            attrs: {
                                href: function () {
                                    return "iPhone" === navigator.platform || "iPod" === navigator.platform || "iPad" === navigator.platform ? "https://itunes.apple.com/app/id1442476536" : "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus"
                                }()
                            }
                        }, [e("img", {
                            attrs: {
                                src: function () {
                                    return "en" === t.$store.state.language.serviceStatus ? n("660a") : n("bb28")
                                }(),
                                alt: "Banner"
                            },
                            class: V.a.bannerImage
                        })]), e("div", {
                            class: V.a.closeButton,
                            on: {
                                click: function () {
                                    localStorage.setItem("isBannerShowed", ""),
                                        t.$emit("click")
                                }
                            }
                        }, [e("img", {
                            attrs: {
                                src: n("0b2a")
                            },
                            class: V.a.closeButtonImage
                        })])])])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , x = R
            , U = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isBannerShowed = !1,
                        t
                }
                return c["c"](t, e),
                    t.prototype.beforeRouteLeave = function (e, t, n) {
                        this.$store.commit("hideSettingModal"),
                            n()
                    }
                    ,
                    t.prototype.created = function () {
                        var e = this;
                        this.$store.dispatch("favorited/fetchData").catch(function (t) {
                            D(e.$router, t)
                        })
                    }
                    ,
                    t.prototype.callRemoveAPI = function (e) {
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (t) {
                                return this.$store.dispatch("favorited/unsubscribe", e),
                                    [2]
                            })
                        })
                    }
                    ,
                    t.prototype.callUndoAPI = function (e) {
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (t) {
                                return this.$store.dispatch("favorited/subscribe", e),
                                    [2]
                            })
                        })
                    }
                    ,
                    t.prototype.render = function (e) {
                        var t = this
                            , a = this.$store.state.favorited.titles.map(function (n, a) {
                                return e(w, {
                                    attrs: {
                                        title: t.$store.state.favorited.titles[a]
                                    },
                                    on: {
                                        remove: function () {
                                            t.callRemoveAPI(a)
                                        },
                                        undo: function () {
                                            t.callUndoAPI(a)
                                        }
                                    }
                                })
                            });
                        return e("div", {
                            class: "container"
                        }, [e(S, [this.$t("FAVORITED")]), function () {
                            return t.$store.state.favorited.loading ? e("div", ["loading..."]) : e("div", [function () {
                                if ((!localStorage || null === localStorage.getItem("isBannerShowed")) && t.$store.state.favorited.titles.length > 0)
                                    return e(x, {
                                        style: {
                                            display: t.isBannerShowed ? "none" : ""
                                        },
                                        on: {
                                            click: function () {
                                                t.isBannerShowed = !0
                                            }
                                        },
                                        attrs: {
                                            serviceLanguage: t.$store.state.language.serviceStatus
                                        }
                                    })
                            }(), e("div", {
                                class: _.a.gridContainer,
                                directives: [{
                                    name: "show",
                                    value: t.$store.state.favorited.titles.length > 0
                                }]
                            }, [a]), e("div", {
                                class: _.a.empty,
                                directives: [{
                                    name: "show",
                                    value: 0 == t.$store.state.favorited.titles.length
                                }]
                            }, [e("img", {
                                attrs: {
                                    src: n("b89d"),
                                    alt: "empty"
                                },
                                class: _.a.emptyImage
                            })])])
                        }()])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , B = U
            , M = n("a5b5")
            , H = n.n(M)
            , j = n("d682")
            , G = n.n(j)
            , W = n("c510")
            , F = n.n(W)
            , Y = n("ac0d")
            , z = n.n(Y)
            , Q = n("2b85")
            , $ = n.n(Q)
            , q = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        var t = this;
                        return e("router-link", {
                            attrs: {
                                to: "/titles/" + this.title.titleId
                            }
                        }, [e("div", {
                            class: H.a.hotTitle
                        }, [e("div", {
                            class: H.a.container
                        }, [e("img", {
                            directives: [{
                                name: "lazy",
                                value: this.title.portraitImageUrl
                            }],
                            key: this.title.titleId,
                            attrs: {
                                alt: "",
                                width: "70",
                                height: "105"
                            },
                            class: H.a.icon
                        }), e("div", {
                            class: this.index > 3 ? H.a.textsNotTop : H.a.texts
                        }, [function () {
                            switch (t.index) {
                                case 0:
                                    return e("img", {
                                        class: H.a.rank,
                                        attrs: {
                                            src: G.a
                                        }
                                    });
                                case 1:
                                    return e("img", {
                                        class: H.a.rank,
                                        attrs: {
                                            src: F.a
                                        }
                                    });
                                case 2:
                                    return e("img", {
                                        class: H.a.rank,
                                        attrs: {
                                            src: z.a
                                        }
                                    });
                                default:
                                    return e("h3", {
                                        class: H.a.rank
                                    }, [t.index])
                            }
                        }(), e("p", {
                            class: H.a.title
                        }, [this.title.name]), e("p", {
                            class: H.a.author
                        }, [this.title.author]), e("p", {
                            class: H.a.count
                        }, [e("img", {
                            attrs: {
                                src: $.a
                            },
                            class: H.a.viewCountIcon
                        }), this.title.viewCount])])])])])
                    }
                    ,
                    c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                    c["b"]([Object(u["b"])()], t.prototype, "index", void 0),
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , K = q
            , X = n("8e44")
            , J = n.n(X)
            , Z = 3
            , ee = 30
            , te = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.created = function () {
                        var e = this;
                        0 === this.$store.state.ranking.model.titles.length && this.$store.dispatch("ranking/fetchData").catch(function (t) {
                            D(e.$router, t)
                        })
                    }
                    ,
                    Object.defineProperty(t.prototype, "currentTitles", {
                        get: function () {
                            var e = this;
                            return this.$store.state.ranking.model.titles.filter(function (t) {
                                return t.language === E.Title.Language.ENGLISH ? e.$store.state.language.contentsStatus.en : t.language === E.Title.Language.SPANISH ? e.$store.state.language.contentsStatus.es : void 0
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.render = function (e) {
                        return e("div", [e("div", {
                            class: J.a.flexContainer
                        }, [this.currentTitles.slice(0, Z).map(function (t, n) {
                            return e(K, {
                                attrs: {
                                    title: t,
                                    index: n
                                }
                            })
                        })]), e("div", {
                            class: J.a.gridContainer
                        }, [this.currentTitles.slice(Z, ee).map(function (t, n) {
                            return e(K, {
                                attrs: {
                                    title: t,
                                    index: n + Z + 1
                                }
                            })
                        })])])
                    }
                    ,
                    t = c["b"]([r()({
                        components: {
                            HotTitle: K
                        }
                    })], t),
                    t
            }(u["c"])
            , ne = te
            , ae = n("3e42")
            , ie = n.n(ae)
            , re = n("f6a5")
            , oe = n.n(re)
            , se = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentIndex = 0,
                        t
                }
                return c["c"](t, e),
                    t.prototype.onClickRightCursor = function () {
                        this.currentIndex + 3 !== this.currentTitles.length && (this.currentIndex += 1,
                            this.$el.querySelector("." + oe.a.itemList).style.transform = "translateX(-" + 20 * this.currentIndex + "%)")
                    }
                    ,
                    t.prototype.onClickLeftCursor = function () {
                        0 !== this.currentIndex && (this.currentIndex -= 1,
                            this.$el.querySelector("." + oe.a.itemList).style.transform = "translateX(-" + 20 * this.currentIndex + "%)")
                    }
                    ,
                    t.prototype.order = function (e) {
                        var t = e - this.currentIndex;
                        return t < 0 ? t + this.currentTitles.length : t
                    }
                    ,
                    Object.defineProperty(t.prototype, "currentTitles", {
                        get: function () {
                            var e = this;
                            return this.titleList.featuredTitles.filter(function (t) {
                                return t.language === E.Title.Language.ENGLISH ? e.$store.state.language.contentsStatus.en : t.language === E.Title.Language.SPANISH ? e.$store.state.language.contentsStatus.es : void 0
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.render = function (e) {
                        return e("div", [e(S, [this.titleList.listName]), e("div", {
                            class: oe.a.horizontalList
                        }, [e("div", {
                            class: oe.a.leftCursor,
                            on: {
                                click: this.onClickLeftCursor
                            }
                        }), e("div", {
                            class: oe.a.itemListWrapper
                        }, [e("div", {
                            class: "" + oe.a.itemList,
                            style: "transform: translateX(-" + 20 * this.currentIndex + ")"
                        }, [this.currentTitles.map(function (t, n) {
                            return e("router-link", {
                                attrs: {
                                    to: "/titles/" + t.titleId,
                                    tag: "div"
                                },
                                class: "" + oe.a.item,
                                style: {}
                            }, [e("img", {
                                directives: [{
                                    name: "lazy",
                                    value: t.portraitImageUrl
                                }],
                                key: t.titleId,
                                class: oe.a.image,
                                attrs: {
                                    alt: ""
                                }
                            })])
                        })])]), e("div", {
                            class: oe.a.rightCursor,
                            on: {
                                click: this.onClickRightCursor
                            }
                        })])])
                    }
                    ,
                    c["b"]([Object(u["b"])()], t.prototype, "titleList", void 0),
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , le = se;
        function ce(e, t) {
            var n = new URL(t);
            switch (n.protocol) {
                case "mangaplus:":
                    switch (t.split("/")[3].split("?")[0]) {
                        case "viewer":
                            var a = n.searchParams.get("id");
                            e.push("/viewer/" + a);
                            break;
                        case "detail":
                            var i = n.searchParams.get("id");
                            e.push("/titles/" + i);
                            break;
                        case "webview":
                            window.location.href = n.searchParams.get("url")
                    }
                    break;
                default:
                    window.location.href = t
            }
        }
        var ue, de = E.FeaturedTitlesView, pe = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.model = new de,
                    t
            }
            return c["c"](t, e),
                t.prototype.beforeRouteLeave = function (e, t, n) {
                    this.$store.commit("hideSettingModal"),
                        n()
                }
                ,
                t.prototype.created = function () {
                    var e = this;
                    0 === this.$store.state.featured.model.contents.length && this.$store.dispatch("featured/fetchData").catch(function (t) {
                        D(e.$router, t)
                    })
                }
                ,
                t.prototype.beforeDestroy = function () { }
                ,
                t.prototype.render = function (e) {
                    var t = this;
                    return e("div", [e("div", {
                        class: ie.a.bannerContainer
                    }, [e("img", {
                        attrs: {
                            src: this.$store.state.featured.model.mainBanner.imageUrl
                        },
                        class: ie.a.largeBanner + " " + ie.a.banner,
                        on: {
                            click: function () {
                                return ce(t.$router, t.$store.state.featured.model.mainBanner.action.url)
                            }
                        }
                    }), e("img", {
                        attrs: {
                            src: this.$store.state.featured.model.subBanner_1.imageUrl
                        },
                        class: ie.a.smallBanner1 + " " + ie.a.banner,
                        on: {
                            click: function () {
                                return ce(t.$router, t.$store.state.featured.model.subBanner_1.action.url)
                            }
                        }
                    }), e("img", {
                        attrs: {
                            src: this.$store.state.featured.model.subBanner_2.imageUrl
                        },
                        class: ie.a.smallBanner2 + " " + ie.a.banner,
                        on: {
                            click: function () {
                                return ce(t.$router, t.$store.state.featured.model.subBanner_2.action.url)
                            }
                        }
                    })]), this.$store.state.featured.model.contents.map(function (n) {
                        var a = function () {
                            return n.banner ? e("img", {
                                class: ie.a.contentsBanner + " " + ie.a.banner,
                                attrs: {
                                    src: n.banner.imageUrl
                                },
                                on: {
                                    click: function () {
                                        return ce(t.$router, n.banner.action.url)
                                    }
                                }
                            }) : n.titleList ? e(le, {
                                attrs: {
                                    titleList: n.titleList
                                }
                            }) : void 0
                        };
                        return e("div", {
                            class: ie.a.contents
                        }, [a()])
                    })])
                }
                ,
                t = c["b"]([r()({
                    components: {
                        HorizontalTitleList: le
                    }
                })], t),
                t
        }(u["c"]), me = pe, he = n("92fa"), ge = n.n(he), fe = (n("673e"),
            n("5dfb")), be = n.n(fe), ye = n("be42"), ve = n.n(ye), we = u["c"].extend({
                functional: !0,
                render: function (e, t) {
                    return e("button", {
                        class: ve.a.btn + " " + ("default" === t.data.attrs.state ? ve.a.default : ve.a.done) + " " + t.data.class,
                        on: {
                            click: t.data.on.click
                        }
                    }, [t.slots().default])
                }
            }), Ae = n("9400"), _e = n.n(Ae), ke = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.shareUrl = function () {
                        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.text) + "&url=" + encodeURIComponent(this.url)
                    }
                    ,
                    t.prototype.render = function (e) {
                        return e("a", {
                            attrs: {
                                href: this.shareUrl()
                            },
                            class: _e.a.shareButton + " " + _e.a.twitter
                        }, [this.$t("TWEET")])
                    }
                    ,
                    c["b"]([Object(u["b"])()], t.prototype, "url", void 0),
                    c["b"]([Object(u["b"])()], t.prototype, "text", void 0),
                    t = c["b"]([r.a], t),
                    t
            }(u["c"]), Te = ke, Se = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.shareUrl = function () {
                        return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.url)
                    }
                    ,
                    t.prototype.render = function (e) {
                        return e("a", {
                            attrs: {
                                href: this.shareUrl()
                            },
                            class: _e.a.shareButton + " " + _e.a.facebook
                        }, [this.$t("SHARE")])
                    }
                    ,
                    c["b"]([Object(u["b"])()], t.prototype, "url", void 0),
                    t = c["b"]([r.a], t),
                    t
            }(u["c"]), Pe = Se, Ce = n("fd5c"), Oe = n.n(Ce), Ie = (n("9e30"),
                n("e072"),
                n("5a0c")), Le = n.n(Ie), Ee = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c["c"](t, e),
                        t.prototype.render = function (e) {
                            var t = this
                                , n = "en" === navigator.language || "es" === navigator.language ? navigator.language : "en";
                            return Le()(n),
                                e("div", {
                                    class: be.a.flexContainer
                                }, [e("div", {
                                    class: be.a.left1
                                }, [e("img", {
                                    class: be.a.fitImage,
                                    attrs: {
                                        src: this.topImage,
                                        alt: ""
                                    }
                                })]), e("div", {
                                    class: be.a.right1
                                }, [e("h1", {
                                    class: be.a.title
                                }, [this.title.name]), e("p", {
                                    class: be.a.author
                                }, [this.title.author]), function () {
                                    if (t.isSimulReleased)
                                        return e("img", {
                                            attrs: {
                                                src: Oe.a,
                                                alt: ""
                                            },
                                            class: be.a.simulrelease
                                        })
                                }(), function () {
                                    if (0 !== t.updateInfo)
                                        return e("div", [e("h6", {
                                            class: be.a.updateHeader
                                        }, [t.$t("UPDATE_SCHEDULE")]), e("p", {
                                            class: be.a.updateInfo
                                        }, [function () {
                                            var n = t.updateTiming
                                                , a = Le()(new Date(1e3 * t.updateInfo));
                                            switch (n) {
                                                case E.TitleDetailView.UpdateTiming.NOT_REGULARLY:
                                                    return e("span", [t.$t("NEW_CHAPTER_ARRIVES_ON"), e("br"), a.format("dddd, MMM DD, HH:mm")]);
                                                case E.TitleDetailView.UpdateTiming.MONDAY:
                                                case E.TitleDetailView.UpdateTiming.TUESDAY:
                                                case E.TitleDetailView.UpdateTiming.WEDNESDAY:
                                                case E.TitleDetailView.UpdateTiming.THURSDAY:
                                                case E.TitleDetailView.UpdateTiming.FRIDAY:
                                                case E.TitleDetailView.UpdateTiming.SATURDAY:
                                                case E.TitleDetailView.UpdateTiming.SUNDAY:
                                                    return e("span", [t.$t("NEW_CHAPTER_ARRIVES"), e("br"), t.$t("EVERY"), " ", a.format("dddd, HH:mm")]);
                                                case E.TitleDetailView.UpdateTiming.DAY:
                                                    return e("span", [t.$t("NEW_CHAPTER_ARRIVES"), e("br"), t.$t("EVERY_DAY"), " ", a.format("HH:mm")])
                                            }
                                        }()]), e("p", {
                                            class: be.a.updateDescription
                                        }, [t.viewingPeriod])])
                                }(), e("div", {
                                    class: be.a.gridContainer
                                }, [e(we, {
                                    class: be.a.favoritedBtn,
                                    attrs: {
                                        state: this.$store.state.detail.model[this.title.titleId] && this.$store.state.detail.model[this.title.titleId].isSubscribed ? "done" : "default"
                                    },
                                    on: {
                                        click: function (e) {
                                            t.$store.state.detail.model[t.title.titleId].isSubscribed ? t.$store.dispatch("detail/unsubscribe", t.title.titleId) : t.$store.dispatch("detail/subscribe", t.title.titleId)
                                        }
                                    }
                                }, [function () {
                                    return t.$store.state.detail.isLoading ? "loading" : t.$store.state.detail.model[t.title.titleId] && t.$store.state.detail.model[t.title.titleId].isSubscribed ? t.$t("doneFAVORITED") : t.$t("addFAVORITED")
                                }()]), e("div", {
                                    class: be.a.gridItemFacebook
                                }, [e(Pe, {
                                    attrs: {
                                        url: this.sns.url,
                                        text: this.sns.body
                                    }
                                })]), e("div", {
                                    class: be.a.gridItemTwitter
                                }, [e(Te, {
                                    attrs: {
                                        url: this.sns.url,
                                        text: this.sns.body
                                    }
                                })])])])])
                        }
                        ,
                        c["b"]([Object(u["b"])()], t.prototype, "topImage", void 0),
                        c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                        c["b"]([Object(u["b"])()], t.prototype, "sns", void 0),
                        c["b"]([Object(u["b"])()], t.prototype, "updateInfo", void 0),
                        c["b"]([Object(u["b"])()], t.prototype, "updateTiming", void 0),
                        c["b"]([Object(u["b"])()], t.prototype, "viewingPeriod", void 0),
                        c["b"]([Object(u["b"])()], t.prototype, "isSimulReleased", void 0),
                        t = c["b"]([r()({
                            components: {
                                FavoritedButton: we,
                                FB: Pe,
                                Twitter: Te
                            }
                        })], t),
                        t
                }(u["c"]), De = Ee, Ne = n("855f"), Ve = n.n(Ne), Re = (n("55dd"),
                    n("596b")), xe = n.n(Re), Ue = n("c243"), Be = n.n(Ue), Me = n("f0e0"), He = n.n(Me), je = n("19d0"), Ge = n.n(je), We = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this
                                    , n = "en" === navigator.language || "es" === navigator.language ? navigator.language : "en";
                                return Le()(n),
                                    e("div", {
                                        class: Be.a.chapterListItem
                                    }, [function () {
                                        return t.chapter.alreadyViewed ? e("router-link", {
                                            class: Be.a.chapterWrapper,
                                            attrs: {
                                                tag: "div",
                                                to: "/viewer/" + t.chapter.chapterId
                                            }
                                        }, [e("img", {
                                            directives: [{
                                                name: "lazy",
                                                value: t.chapter.thumbnailUrl
                                            }],
                                            key: t.chapter.chapterId,
                                            attrs: {
                                                alt: "thumbnail"
                                            },
                                            class: Be.a.thumbnail_alreadyRead
                                        }), e("p", {
                                            class: Be.a.name_alreadyRead
                                        }, [t.chapter.name]), e("p", {
                                            class: Be.a.title_alreadyRead
                                        }, [t.chapter.subTitle]), e("p", {
                                            class: Be.a.date_alreadyRead
                                        }, [new Date(1e3 * t.chapter.startTimeStamp).toLocaleDateString(navigator.language, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })])]) : e("router-link", {
                                            class: Be.a.chapterWrapper,
                                            attrs: {
                                                tag: "div",
                                                to: "/viewer/" + t.chapter.chapterId
                                            }
                                        }, [e("img", {
                                            directives: [{
                                                name: "lazy",
                                                value: t.chapter.thumbnailUrl
                                            }],
                                            key: t.chapter.chapterId,
                                            attrs: {
                                                alt: "thumbnail"
                                            },
                                            class: Be.a.thumbnail
                                        }), e("p", {
                                            class: Be.a.name
                                        }, [t.chapter.name]), e("p", {
                                            class: Be.a.title
                                        }, [t.chapter.subTitle]), e("p", {
                                            class: Be.a.date
                                        }, [new Date(1e3 * t.chapter.startTimeStamp).toLocaleDateString(navigator.language, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })])])
                                    }(), e("router-link", {
                                        attrs: {
                                            to: "/comments/" + this.chapter.chapterId
                                        },
                                        class: Be.a.commentContainer
                                    }, [e("img", {
                                        attrs: {
                                            src: He.a,
                                            alt: "commentIcon"
                                        },
                                        class: Be.a.commentIcon
                                    })]), e("div", {
                                        class: Be.a.limitContainer
                                    }, [function () {
                                        var n = Le()(new Date(1e3 * t.chapter.endTimeStamp))
                                            , a = Le()();
                                        if (a.add(7, "day").isAfter(n)) {
                                            var i = n.format("MMM Do")
                                                , r = n.format("H:mm");
                                            return e("div", {
                                                class: Be.a.endTime
                                            }, [e("img", {
                                                attrs: {
                                                    src: Ge.a,
                                                    alt: "commentIcon"
                                                },
                                                class: Be.a.limitIcon
                                            }), e("p", {
                                                class: Be.a.limitTime
                                            }, [e("div", [e("p", {
                                                class: Be.a.limitDate
                                            }, [i]), e("p", {
                                                class: Be.a.limitDate
                                            }, [r])])])])
                                        }
                                    }()])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "chapter", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Fe = We, Ye = n("9b54"), ze = n.n(Ye), Qe = n("3e28"), $e = n.n(Qe), qe = n("821e"), Ke = n.n(qe), Xe = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.ascSort = !1,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.sortChapters = function () {
                                this.ascSort = !this.ascSort;
                                var e = this.newChapters.slice().reverse();
                                this.newChapters = this.oldChapters.slice().reverse(),
                                    this.oldChapters = e
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", [e("div", [e("div", {
                                    class: xe.a.overviewTitleWrapper
                                }, [e("h6", {
                                    class: xe.a.overviewTitle
                                }, [this.$i18n.t("OVERVIEW")]), e("p", {
                                    class: xe.a.numberOfViews
                                }, [e("img", {
                                    attrs: {
                                        src: Ke.a
                                    },
                                    class: xe.a.viewIcon
                                }), this.numberOfViews.toLocaleString()])]), e("p", {
                                    class: xe.a.overview
                                }, [this.overview])]), e("div", {
                                    class: xe.a.chapterHeader
                                }, [e("h3", {
                                    class: xe.a.message
                                }, [this.nonAppearanceInfo]), e("div", {
                                    class: xe.a.sort
                                }, [e("img", {
                                    attrs: {
                                        src: this.ascSort ? $e.a : ze.a,
                                        alt: "sort"
                                    },
                                    class: xe.a.sortIcon,
                                    on: {
                                        click: this.sortChapters
                                    }
                                })])]), this.newChapters.map(function (t) {
                                    return e(Fe, {
                                        attrs: {
                                            chapter: t
                                        }
                                    })
                                }), function () {
                                    if (0 != t.oldChapters.length && 0 != t.newChapters.length)
                                        return e("div", {
                                            class: xe.a.separator
                                        }, [t.$t("CHAPTERS_NOT_AVAILABLE")])
                                }(), this.oldChapters.map(function (t) {
                                    return e(Fe, {
                                        attrs: {
                                            chapter: t
                                        }
                                    })
                                })])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "newChapters", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "oldChapters", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "overview", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "rating", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "nonAppearanceInfo", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "numberOfViews", void 0),
                            t = c["b"]([r()({
                                components: {
                                    ChapterListItem: Fe
                                }
                            })], t),
                            t
                    }(u["c"]), Je = Xe, Ze = n("00df"), et = n.n(Ze), tt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                return e("div", [this.banners.map(function (t) {
                                    return e("div", {
                                        class: et.a.bannerContainer
                                    }, [e("a", {
                                        attrs: {
                                            href: t.action.url
                                        }
                                    }, [e("img", {
                                        attrs: {
                                            src: t.imageUrl,
                                            alt: "banner"
                                        },
                                        class: et.a.banner
                                    })])])
                                })])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "banners", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), nt = tt, at = n("1406"), it = n.n(at), rt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                return e("div", {
                                    class: it.a.container
                                }, [e("h5", {
                                    class: it.a.header
                                }, [this.$t("RECOMMEND")]), e("nav", {
                                    class: it.a.recommendContainer
                                }, [e("ul", [this.titles.map(function (t) {
                                    return e("li", {
                                        class: it.a.item
                                    }, [e("router-link", {
                                        attrs: {
                                            to: "/titles/" + t.titleId
                                        }
                                    }, [e("img", {
                                        directives: [{
                                            name: "lazy",
                                            value: t.landscapeImageUrl
                                        }],
                                        key: t.titleId,
                                        attrs: {
                                            alt: t.name
                                        },
                                        class: it.a.fitImage
                                    }), e("p", {
                                        class: it.a.title
                                    }, [t.name])])])
                                })])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "titles", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), ot = rt, st = {
                        en: {
                            100018: 200001,
                            100002: 200002,
                            100022: 200003,
                            100007: 200005,
                            100027: 200006,
                            100030: 200007,
                            100001: 200008,
                            100008: 200009,
                            100011: 200010,
                            100023: 200011,
                            100004: 200012,
                            100016: 200013,
                            100020: 200016,
                            100026: 200017,
                            100034: 200018,
                            100017: 200019,
                            100003: 200020,
                            100006: 200021,
                            100028: 200023,
                            100021: 200024,
                            100012: 200025,
                            100040: 200026,
                            100057: 200028,
                            100056: 200031,
                            100005: null,
                            100009: 200030,
                            100010: 200022,
                            100013: null,
                            100014: null,
                            100015: null,
                            100019: 200004,
                            100024: null,
                            100025: null,
                            100029: null,
                            100031: null,
                            100032: null,
                            100033: null,
                            100035: null,
                            100036: null,
                            100037: null,
                            100038: null,
                            100039: null,
                            100041: null,
                            100042: null,
                            100043: 200027,
                            100044: null,
                            100045: null,
                            100046: null,
                            100047: null,
                            100048: null,
                            100049: null,
                            100050: null,
                            100051: null,
                            100052: null,
                            100053: null,
                            100054: null,
                            100055: null,
                            100059: 200029,
                            100060: null,
                            100061: null,
                            100062: null,
                            100063: null,
                            100064: null,
                            100065: null,
                            100066: null,
                            100067: null
                        },
                        es: {
                            200001: 100018,
                            200002: 100002,
                            200003: 100022,
                            200005: 100007,
                            200006: 100027,
                            200007: 100030,
                            200008: 100001,
                            200009: 100008,
                            200010: 100011,
                            200011: 100023,
                            200012: 100004,
                            200013: 100016,
                            200016: 100020,
                            200017: 100026,
                            200018: 100034,
                            200019: 100017,
                            200020: 100003,
                            200021: 100006,
                            200023: 100028,
                            200024: 100021,
                            200025: 100012,
                            200026: 100040,
                            200028: 100057,
                            200031: 100056,
                            200030: 100009,
                            200022: 100010,
                            200004: 100019,
                            200027: 100043,
                            200029: 100059,
                            200014: null,
                            200015: null
                        }
                    }, lt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                var e = this;
                                this.id = this.$route.params["id"],
                                    this.$store.dispatch("detail/fetchData", this.id).catch(function (t) {
                                        D(e.$router, t)
                                    })
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: Ve.a.mainContainer
                                }, [function () {
                                    if (t.$store.state.detail.model[t.id])
                                        return e("div", [e(De, {
                                            attrs: {
                                                title: t.$store.state.detail.model[t.id].title,
                                                sns: t.$store.state.detail.model[t.id].sns,
                                                updateInfo: t.$store.state.detail.model[t.id].nextTimeStamp,
                                                updateTiming: t.$store.state.detail.model[t.id].updateTiming,
                                                viewingPeriod: t.$store.state.detail.model[t.id].viewingPeriodDescription,
                                                isSimulReleased: t.$store.state.detail.model[t.id].isSimulReleased,
                                                topImage: t.$store.state.detail.model[t.id].titleImageUrl
                                            }
                                        }), e("div", {
                                            class: Ve.a.flexContainer
                                        }, [e("main", {
                                            class: Ve.a.main
                                        }, [e(Je, {
                                            attrs: {
                                                newChapters: t.$store.state.detail.model[t.id].firstChapterList,
                                                oldChapters: t.$store.state.detail.model[t.id].lastChapterList,
                                                overview: t.$store.state.detail.model[t.id].overview,
                                                nonAppearanceInfo: t.$store.state.detail.model[t.id].nonAppearanceInfo,
                                                numberOfViews: t.$store.state.detail.model[t.id].numberOfViews,
                                                rating: function () {
                                                    switch (t.$store.state.detail.model[t.id].rating) {
                                                        case E.TitleDetailView.Rating.ALLAGE:
                                                            return "ALLAGE";
                                                        case E.TitleDetailView.Rating.MATURE:
                                                            return "MATURE";
                                                        case E.TitleDetailView.Rating.TEEN:
                                                            return "TEEN";
                                                        case E.TitleDetailView.Rating.TEENPLUS:
                                                            return "TEENPLUS"
                                                    }
                                                }()
                                            }
                                        })]), e("aside", {
                                            class: Ve.a.sub
                                        }, [e(nt, {
                                            attrs: {
                                                banners: t.$store.state.detail.model[t.id].banners
                                            }
                                        }), e(ot, ge()([{
                                            attrs: {
                                                titles: t.$store.state.detail.model[t.id].recommendedTitleList
                                            }
                                        }, {
                                            directives: [{
                                                name: "show",
                                                value: 0 !== t.$store.state.detail.model[t.id].recommendedTitleList.length
                                            }]
                                        }]))])])])
                                }()])
                            }
                            ,
                            t = c["b"]([r()({
                                metaInfo: function () {
                                    var e = this.$store.state.detail.model[this.$route.params["id"]]
                                        , t = e ? e.title.name + " - " + e.title.author : "MANGA Plus by SHUEISHA"
                                        , n = e ? "" + e.overview : "Loading..."
                                        , a = null != st["en"][this.$route.params["id"]]
                                        , i = null != st["es"][this.$route.params["id"]]
                                        , r = a || i
                                        , o = r ? a ? st["en"][this.$route.params["id"]] : st["es"][this.$route.params["id"]] : 0
                                        , s = r ? a ? "es" : "en" : ""
                                        , l = i ? "Somos un lector de manga oficial entregado desde Japón. Leer manga gratis y simultáneamente." : "We are an official manga reader delivered from Japan. Read manga totally free and fastest!";
                                    return {
                                        title: t,
                                        titleTemplate: "%s | MANGA Plus",
                                        meta: [{
                                            hid: "description",
                                            name: "description",
                                            content: l + "\n " + t + " | " + n
                                        }],
                                        link: r ? [{
                                            rel: "alternate",
                                            hreflang: s,
                                            href: "https://mangaplus.shueisha.co.jp/titles/" + o
                                        }] : []
                                    }
                                }
                            })], t),
                            t
                    }(u["c"]), ct = lt, ut = n("c9f1"), dt = n.n(ut), pt = n("6f17"), mt = n.n(pt), ht = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                return e("router-link", {
                                    attrs: {
                                        to: "/titles/" + this.title.titleId,
                                        tag: "div"
                                    },
                                    class: mt.a.allTitle
                                }, [e("img", {
                                    directives: [{
                                        name: "lazy",
                                        value: this.title.portraitImageUrl
                                    }],
                                    attrs: {
                                        alt: this.title.name
                                    },
                                    class: mt.a.image,
                                    key: this.title.titleId
                                }), e("p", {
                                    class: mt.a.title
                                }, [this.title.name]), e("p", {
                                    class: mt.a.author
                                }, [this.title.author])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), gt = ht, ft = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.titles = [],
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                var e = this;
                                0 === this.$store.state.mangaList.model.titles.length && this.$store.dispatch("mangaList/fetchData").catch(function (t) {
                                    D(e.$router, t)
                                })
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this
                                    , n = this.$store.state.mangaList.model.titles.filter(function (e) {
                                        return e.language === E.Title.Language.ENGLISH ? t.$store.state.language.contentsStatus.en : e.language === E.Title.Language.SPANISH ? t.$store.state.language.contentsStatus.es : void 0
                                    }).map(function (t) {
                                        return e(gt, {
                                            attrs: {
                                                title: t
                                            }
                                        })
                                    });
                                return e("div", {
                                    class: dt.a.allTitles
                                }, [n])
                            }
                            ,
                            t = c["b"]([r()({
                                components: {
                                    AllTitle: gt
                                }
                            })], t),
                            t
                    }(u["c"]), bt = ft, yt = n("513e"), vt = n.n(yt), wt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.beforeRouteLeave = function (e, t, n) {
                                this.$store.commit("hideSettingModal"),
                                    n()
                            }
                            ,
                            t.prototype.render = function (e) {
                                return e("div", {
                                    class: vt.a.mangaList
                                }, [e("div", {
                                    class: vt.a.header
                                }, [e(S, {
                                    class: vt.a.title
                                }, [this.$t("MANGALIST")]), e("nav", {
                                    class: "toggle"
                                }, [e("ul", [e("li", {
                                    class: vt.a.toggleItem
                                }, [e("router-link", {
                                    attrs: {
                                        to: "/manga_list/all",
                                        "active-class": vt.a.linkActive
                                    }
                                }, [this.$t("ALL")])]), e("li", {
                                    class: vt.a.toggleItem
                                }, [e("router-link", {
                                    attrs: {
                                        to: "/manga_list/hot",
                                        "active-class": vt.a.linkActive
                                    }
                                }, [this.$t("HOTTEST")])])])])]), e("router-view")])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), At = wt, _t = n("0a63"), kt = n.n(_t), Tt = n("8b7a"), St = n.n(Tt), Pt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("router-link", {
                                    attrs: {
                                        to: "/titles/" + this.title.titleId
                                    }
                                }, [e("div", {
                                    class: St.a.rankingTitle
                                }, [e("img", {
                                    directives: [{
                                        name: "lazy",
                                        value: this.title.portraitImageUrl
                                    }],
                                    key: this.title.titleId,
                                    attrs: {
                                        alt: this.title.name
                                    },
                                    class: St.a.titleImg
                                }), e("div", {
                                    class: St.a.titleDetail
                                }, [function () {
                                    switch (t.index) {
                                        case 0:
                                            return e("img", {
                                                attrs: {
                                                    src: G.a
                                                },
                                                class: St.a.icon
                                            });
                                        case 1:
                                            return e("img", {
                                                attrs: {
                                                    src: F.a
                                                },
                                                class: St.a.icon
                                            });
                                        case 2:
                                            return e("img", {
                                                attrs: {
                                                    src: z.a
                                                },
                                                class: St.a.icon
                                            });
                                        default:
                                            return e("p", {
                                                class: St.a.icon + " " + St.a.rankingNumber
                                            }, [t.index + 1])
                                    }
                                }(), e("p", {
                                    class: St.a.title
                                }, [" ", this.title.name]), e("p", {
                                    class: St.a.author
                                }, [" ", this.title.author]), e("p", {
                                    class: St.a.viewCount
                                }, [e("img", {
                                    class: St.a.viewCountIcon,
                                    attrs: {
                                        src: $.a
                                    }
                                }), this.title.viewCount.toLocaleString()])])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "index", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Ct = Pt, Ot = n("5e49"), It = n.n(Ot), Lt = n("eda8"), Et = n.n(Lt), Dt = n("d72e"), Nt = n.n(Dt), Vt = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("p", {
                                class: Nt.a.badge
                            }, [t.slots().default])
                        }
                    }), Rt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: Et.a.titleWrapper
                                }, [e("router-link", {
                                    attrs: {
                                        to: "/titles/" + this.title.title.titleId
                                    }
                                }, [e("div", {
                                    class: Et.a.title
                                }, [e("img", {
                                    directives: [{
                                        name: "lazy",
                                        value: this.title.title.landscapeImageUrl
                                    }],
                                    class: Et.a.titleImage,
                                    key: this.title.title.titleId,
                                    attrs: {
                                        alt: "ComicImage"
                                    }
                                }), e("div", {
                                    class: Et.a.titleDescription
                                }, [e("p", {
                                    class: Et.a.titleName
                                }, [this.title.title.name]), e("p", {
                                    class: Et.a.author
                                }, [this.title.title.author])])])]), e("router-link", {
                                    attrs: {
                                        to: "/viewer/" + this.title.chapterId,
                                        tag: "div"
                                    },
                                    class: Et.a.chapter
                                }, [e("div", {
                                    class: Et.a.chapterTitleWrapper
                                }, [e("p", {
                                    class: Et.a.chapterTitle
                                }, [this.title.chapterName]), function () {
                                    if (t.title.isLatest)
                                        return e(Vt, [t.$t("New")])
                                }()]), e("p", {
                                    class: Et.a.chapterDescription
                                }, [this.title.chapterSubTitle]), e("p", {
                                    class: Et.a.latest
                                }, [this.$t("READ_LATEST")])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), xt = Rt, Ut = n("f877"), Bt = n.n(Ut), Mt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", [e(S, [this.group.groupName]), e("div", {
                                    class: Bt.a.gridContainer
                                }, [this.group.titles.filter(function (e) {
                                    return e.title.language === E.Title.Language.ENGLISH ? t.$store.state.language.contentsStatus.en : e.title.language === E.Title.Language.SPANISH ? t.$store.state.language.contentsStatus.es : void 0
                                }).map(function (t) {
                                    return e(xt, {
                                        attrs: {
                                            title: t
                                        }
                                    })
                                })])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "group", void 0),
                            t = c["b"]([r()({
                                components: {
                                    UpdatedTitle: xt
                                }
                            })], t),
                            t
                    }(u["c"]), Ht = Mt, jt = n("6ae4"), Gt = n.n(jt), Wt = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = function e(t) {
                                    t && (t.preventDefault(),
                                        t.stopPropagation());
                                    var n = window.pageYOffset;
                                    window.scrollTo(0, Math.floor(.7 * n)),
                                        n > 0 && window.setTimeout(e, 10)
                                };
                                return e("div", {
                                    class: Gt.a.btn,
                                    on: {
                                        click: t
                                    }
                                }, [e("div", {
                                    class: Gt.a.icon
                                })])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Ft = Wt, Yt = n("2bd2"), zt = n("ebb6"), Qt = n("a744"), $t = n("69dd"), qt = n("d263"), Kt = E.WebHomeView, Xt = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.model = new Kt,
                                t.isWide = !1,
                                t.buttonClass = "",
                                t.scroll = new Yt["a"],
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.beforeRouteLeave = function (e, t, n) {
                                this.$store.commit("hideSettingModal"),
                                    n()
                            }
                            ,
                            t.prototype.created = function () {
                                var e = this;
                                window.addEventListener("resize", this.handleResizeEvent, !1),
                                    0 === this.$store.state.home.model.topBanners.length && this.$store.dispatch("home/fetchData").catch(function (t) {
                                        D(e.$router, t)
                                    }),
                                    window.addEventListener("scroll", this.handleScrollEvent, !1),
                                    this.subscription = this.scroll.asObservable().pipe(Object(zt["a"])(function (e) {
                                        return e > 100
                                    })).pipe(Object(Qt["a"])(!1)).pipe(Object($t["a"])()).pipe(Object(qt["a"])(1)).pipe(Object(zt["a"])(function (e) {
                                        return e ? It.a.showBtn : It.a.hideBtn
                                    })).subscribe(function (t) {
                                        e.buttonClass = t
                                    }),
                                    this.handleResizeEvent()
                            }
                            ,
                            t.prototype.handleResizeEvent = function () {
                                this.isWide = window.innerWidth > 768
                            }
                            ,
                            t.prototype.handleScrollEvent = function () {
                                this.scroll.next(scrollY)
                            }
                            ,
                            t.prototype.beforeDestroy = function () {
                                window.removeEventListener("resize", this.handleResizeEvent, !1),
                                    this.subscription.unsubscribe()
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", [e(Ft, {
                                    class: "" + this.buttonClass
                                }), e("div", {
                                    class: It.a.fluidImage
                                }, [e("img", {
                                    class: It.a.topImage,
                                    attrs: {
                                        src: this.isWide ? n("ccc1") : n("10b2")
                                    }
                                })]), e("div", {
                                    class: It.a.flexContainer
                                }, [e("main", {
                                    class: It.a.main
                                }, [e("carousel", {
                                    attrs: {
                                        "per-page": 1,
                                        autoplayTimeout: 3e3,
                                        paginationActiveColor: "#ffd600",
                                        paginationColor: "#6e6e6e",
                                        autoplay: !0,
                                        paginationSize: this.isWide ? 10 : 5
                                    },
                                    ref: "carousel"
                                }, [this.$store.state.home.model.topBanners.map(function (n) {
                                    return e("slide", [e("img", {
                                        attrs: {
                                            src: n.imageUrl
                                        },
                                        class: It.a.banner,
                                        on: {
                                            click: function (e) {
                                                ce(t.$router, n.action.url)
                                            }
                                        }
                                    })])
                                })]), this.$store.state.home.model.groups.map(function (t) {
                                    var n = {
                                        attrs: {
                                            group: t
                                        }
                                    };
                                    return e("div", {
                                        class: It.a.group
                                    }, [e(Ht, n)])
                                })]), e("aside", {
                                    class: It.a.sub
                                }, [e("div", {
                                    class: It.a.subInnerWrapper
                                }, [e("div", {
                                    class: It.a.subHeader
                                }, [e(S, {
                                    class: It.a.rankingHeaderTitle
                                }, [this.$t("HOTTEST")]), e("router-link", {
                                    attrs: {
                                        to: "/manga_list/hot"
                                    },
                                    class: It.a.subShowAll
                                }, [this.$t("VIEW_ALL")])]), this.$store.state.home.model.ranking.filter(function (e) {
                                    return e.language === E.Title.Language.ENGLISH ? t.$store.state.language.contentsStatus.en : e.language === E.Title.Language.SPANISH ? t.$store.state.language.contentsStatus.es : void 0
                                }).map(function (t, n) {
                                    var a = {
                                        attrs: {
                                            title: t,
                                            index: n
                                        }
                                    };
                                    return e("div", {
                                        class: It.a.rankingTitle
                                    }, [e(Ct, a)])
                                })])])])])
                            }
                            ,
                            t = c["b"]([r()({
                                components: {
                                    Carousel: _t["Carousel"],
                                    Slide: _t["Slide"],
                                    RankingTitle: Ct,
                                    UpdatedTitles: Ht,
                                    ScrollToTopButton: Ft
                                },
                                metaInfo: function () {
                                    return {
                                        link: [{
                                            rel: "canonical",
                                            href: "https://mangaplus.shueisha.co.jp/updates"
                                        }],
                                        meta: [{
                                            hid: "description",
                                            name: "description",
                                            content: '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\nWe publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\nYou can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! '
                                        }]
                                    }
                                }
                            })], t),
                            t
                    }(u["c"]), Jt = Xt, Zt = n("a925"), en = n("25b4"), tn = n.n(en), nn = n("428e"), an = n.n(nn), rn = n("9cc0"), on = n.n(rn), sn = n("8d45"), ln = n.n(sn), cn = n("5eec"), un = n.n(cn), dn = n("f6ca"), pn = n.n(dn), mn = n("4dcf"), hn = n.n(mn), gn = new u["c"], fn = "toggle_modal", bn = "toggle_mode", yn = "toggle_side_menu", vn = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.isShowingNavigation = !0,
                                t.mode = ue.vertical,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.toggleModal = function () {
                                gn.$emit(fn)
                            }
                            ,
                            t.prototype.toggleSideMenu = function () {
                                gn.$emit(yn)
                            }
                            ,
                            t.prototype.render = function (e) {
                                return e("div", {
                                    class: hn.a.header + " " + (this.isShowingNavigation ? hn.a.appear : hn.a.hidden)
                                }, [e("div", {
                                    class: hn.a.imageContainer
                                }, [e("router-link", {
                                    attrs: {
                                        to: "/updates"
                                    }
                                }, [e("img", {
                                    attrs: {
                                        src: n("be59"),
                                        alt: "logo",
                                        width: "130"
                                    },
                                    class: hn.a.logo
                                })])]), e("div", {
                                    class: hn.a.detailContainer
                                }, [e("router-link", {
                                    attrs: {
                                        to: "/titles/" + this.titleId
                                    }
                                }, [e("h1", {
                                    class: hn.a.title
                                }, [this.title])]), e("div", {
                                    on: {
                                        click: this.toggleSideMenu
                                    },
                                    class: hn.a.chapterTitleWrapper
                                }, [e("p", {
                                    class: hn.a.chapterTitle
                                }, [" ", this.chapterTitle])])]), e("div", {
                                    class: hn.a.settingsContainer,
                                    on: {
                                        click: this.toggleModal
                                    }
                                }, [e("div", {
                                    class: hn.a.kebabMenu,
                                    on: {
                                        click: function () {
                                            gn.$emit("onShowModal")
                                        }
                                    }
                                }, [e("div", {
                                    class: hn.a.circle
                                }), e("div", {
                                    class: hn.a.circle
                                }), e("div", {
                                    class: hn.a.circle
                                })])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "titleId", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "chapterTitle", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "isShowingNavigation", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), wn = vn, An = n("721c"), _n = n.n(An), kn = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.mode = ue.vertical,
                                t.sns = new E.Sns,
                                t.chapterId = 0,
                                t.canChangeMode = !0,
                                t.isShowingModal = !1,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.mounted = function () {
                                var e = this;
                                gn.$on(fn, this.toggleModal),
                                    gn.$on(yn, function () {
                                        e.isShowingModal = !1
                                    })
                            }
                            ,
                            t.prototype.toggleModal = function () {
                                this.isShowingModal = !this.isShowingModal
                            }
                            ,
                            t.prototype.shareFacebookUrl = function () {
                                return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.sns.url)
                            }
                            ,
                            t.prototype.shareTwitterUrl = function () {
                                return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.sns.url) + "&url=" + encodeURIComponent(this.sns.body)
                            }
                            ,
                            t.prototype.onChangeMode = function (e) {
                                gn.$emit(bn, e.target.value === ue.horizontal ? ue.horizontal : ue.vertical)
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: _n.a.modal,
                                    directives: [{
                                        name: "show",
                                        value: this.isShowingModal
                                    }],
                                    on: {
                                        click: function (e) {
                                            t.isShowingModal = !t.isShowingModal
                                        }
                                    }
                                }, [e("div", {
                                    class: _n.a.settings,
                                    on: {
                                        click: function (e) {
                                            e.stopPropagation()
                                        }
                                    }
                                }, [e("router-link", {
                                    attrs: {
                                        to: "/comments/" + this.chapterId,
                                        tag: "div"
                                    },
                                    class: _n.a.commentContainer
                                }, [e("p", {
                                    class: _n.a.postComment
                                }, [this.$t("VIEW_COMMENTS")]), e("img", {
                                    attrs: {
                                        src: He.a,
                                        alt: ""
                                    },
                                    class: _n.a.commentIcon
                                })]), e("div", {
                                    class: _n.a.modeContainer
                                }, [e("p", {
                                    class: _n.a.modeMessage
                                }, [this.$t("READING_DIRECTION")]), e("div", {
                                    class: _n.a.modeItemWrapper
                                }, [e("input", {
                                    attrs: {
                                        type: "radio",
                                        name: "mode",
                                        value: "vertical",
                                        id: "mode-vertical"
                                    },
                                    class: _n.a.viewMode,
                                    domProps: {
                                        checked: this.mode === ue.vertical
                                    },
                                    on: {
                                        change: this.onChangeMode
                                    }
                                }), e("label", {
                                    attrs: {
                                        for: "mode-vertical"
                                    }
                                }, [" Vertical"])]), e("div", {
                                    class: _n.a.modeItemWrapper
                                }, [e("input", {
                                    attrs: {
                                        type: "radio",
                                        name: "mode",
                                        value: "horizontal",
                                        id: "mode-horizontal",
                                        disabled: !this.canChangeMode
                                    },
                                    class: _n.a.viewMode,
                                    domProps: {
                                        checked: this.mode === ue.horizontal
                                    },
                                    on: {
                                        change: this.onChangeMode
                                    }
                                }), e("label", {
                                    attrs: {
                                        for: "mode-horizontal"
                                    }
                                }, [" Horizontal"])])]), e("div", {
                                    class: _n.a.shareContainer
                                }, [e("p", {
                                    class: _n.a.share
                                }, [this.$t("SHARE")]), e("br"), e("a", {
                                    class: _n.a.facebook + " " + _n.a.shareButton,
                                    attrs: {
                                        href: this.shareFacebookUrl(),
                                        target: "_blank"
                                    }
                                }, [this.$t("SHARE")]), e("a", {
                                    class: _n.a.twitter + " " + _n.a.shareButton,
                                    attrs: {
                                        href: this.shareTwitterUrl(),
                                        target: "_blank"
                                    }
                                }, [this.$t("TWEET")])])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "mode", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "sns", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "chapterId", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "canChangeMode", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Tn = kn, Sn = n("808d"), Pn = n("a748"), Cn = n("9f2d"), On = n("2e6e"), In = n.n(On), Ln = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.chapters = [],
                                t.isShowingSideMenu = !1,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                var e = this;
                                gn.$on(yn, function () {
                                    e.isShowingSideMenu = !e.isShowingSideMenu
                                }),
                                    gn.$on(fn, function () {
                                        e.isShowingSideMenu = !1
                                    })
                            }
                            ,
                            t.prototype.render = function (e) {
                                return e("div", {
                                    class: In.a.sideMenu + " " + (this.isShowingSideMenu ? In.a.appear : In.a.hidden)
                                }, [e("div", {
                                    class: In.a.modal + " " + (this.isShowingSideMenu ? In.a.appear : In.a.hidden)
                                }, [e("div", {
                                    class: In.a.chapterList
                                }, [e("ul", [this.chapters.map(function (t) {
                                    return e("router-link", {
                                        attrs: {
                                            to: "/viewer/" + t.chapterId,
                                            tag: "li",
                                            "active-class": In.a.routerActive
                                        },
                                        class: In.a.chapter
                                    }, [t.name])
                                })])])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "chapters", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), En = Ln, Dn = n("9904"), Nn = n.n(Dn), Vn = n("3068"), Rn = n.n(Vn), xn = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.show = !0,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                this.show = void 0 === localStorage.getItem("gdpr") || "true" !== localStorage.getItem("gdpr")
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: Rn.a.container,
                                    directives: [{
                                        name: "show",
                                        value: this.show
                                    }]
                                }, [e("div", {
                                    class: Rn.a.yellow
                                }), e("img", {
                                    class: Rn.a.image,
                                    attrs: {
                                        src: n("7078"),
                                        alt: ""
                                    }
                                }), e("div", {
                                    class: Rn.a.body
                                }, [e("p", {
                                    class: Rn.a.message
                                }, [e("span", ["We use cookies to analyze traffic and improve experience. Just wanted to let you know! Learn more about cookies and similar technologies", " ", e("a", {
                                    attrs: {
                                        href: "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/"
                                    }
                                }, [" ", "here"]), "."])]), e("button", {
                                    class: Rn.a.btn,
                                    on: {
                                        click: function () {
                                            localStorage.setItem("gdpr", "true"),
                                                t.show = !1
                                        }
                                    }
                                }, [e("span", ["Okay, "]), e("span", ["Got it"])])])])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Un = xn, Bn = function () {
                        for (var e = ["iPod", "iPad", "iPhone", "Android"], t = 0; t < e.length; t++)
                            if (navigator.userAgent.indexOf(e[t]) > 0)
                                return e[t];
                        return "Other"
                    };
        (function (e) {
            e["vertical"] = "vertical",
                e["horizontal"] = "horizontal"
        }
        )(ue || (ue = {}));
        var Mn, Hn = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isShowingNavigation = !0,
                    t.mode = ue.vertical,
                    t.currentPageNumber = 1,
                    t.numberOfPages = 0,
                    t.toggleNavigationSubject = new Yt["a"],
                    t.toggleSideMenuSubjcet = new Yt["a"],
                    t.horizontalOption = {
                        startPageNumber: 1,
                        direction: ue.horizontal
                    },
                    t.verticalOption = {
                        startPageNumber: 1,
                        spread: "single",
                        direction: ue.vertical,
                        enabledJoinPages: !0,
                        verticalPageMargin: 30,
                        monospaced: "100%"
                    },
                    t
            }
            var n;
            return c["c"](t, e),
                n = t,
                t.prototype.heightAdjust = function () {
                    var e = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", e + "px")
                }
                ,
                t.prototype.destroyed = function () {
                    gn.$off(bn),
                        gn.$off(fn),
                        gn.$off(yn),
                        this.t.off("tap_center", this.tapOrClickCenter),
                        this.t.off("reset_surface", this.onResetSurface),
                        this.t.off("click_center", this.tapOrClickCenter),
                        this.t.off("viewer_opened", this.onViewerOpened),
                        this.t.off("after_move_page", this.onAfterMovePage),
                        document.documentElement.style.removeProperty("--vh"),
                        window.removeEventListener("resize", this.heightAdjust)
                }
                ,
                t.prototype.mounted = function () {
                    var e = this;
                    gn.$on(bn, this.onChangeMode),
                        gn.$on(fn, function () {
                            e.toggleNavigationSubject.next()
                        }),
                        gn.$on(yn, function () {
                            e.toggleSideMenuSubjcet.next()
                        }),
                        this.id = this.$route.params["chapterId"],
                        this.$store.dispatch("viewer/fetchData", this.id).then(function (t) {
                            e.mode = e.$store.state.viewer.model[e.id].model.isVerticalOnly ? ue.vertical : n.loadMode(),
                                e.loadZao()
                        }).catch(function (t) {
                            D(e.$router, t)
                        });
                    var t = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", t + "px"),
                        window.addEventListener("resize", this.heightAdjust)
                }
                ,
                t.prototype.createLastPage = function (e) {
                    var t = document.querySelector("#last-page").querySelector(".wrapper");
                    while (t.firstChild)
                        t.removeChild(t.firstChild);
                    var n = document.createElement("div");
                    n.className = pn.a.chapterContainer;
                    var a = document.createElement("div");
                    switch (a.className = pn.a.thumbnailContainer,
                    e.chapterType) {
                        case E.Page.ChapterType.SEQUENCE:
                        case E.Page.ChapterType.NOSEQUENCE:
                            var i = document.createElement("img");
                            i.src = e.nextChapter.thumbnailUrl,
                                i.className = pn.a.nextChapterThumbnail,
                                a.appendChild(i);
                            break;
                        case E.Page.ChapterType.LATEST:
                            if (0 !== e.nextTimeStamp) {
                                var r = document.createElement("div");
                                r.className = pn.a.latestWrapper;
                                var o = document.createElement("p");
                                o.className = pn.a.comming,
                                    o.innerText = "THE NEXT CHAPTER WILL ARRIVE ON";
                                var s = document.createElement("p");
                                s.className = pn.a.date,
                                    s.innerText = new Date(1e3 * e.nextTimeStamp).toLocaleString();
                                var l = document.createElement("p");
                                l.className = pn.a.mayChange,
                                    l.innerText = "*UPDATE SCHEDULES MAY SUBJECT TO CHANGE",
                                    r.appendChild(o),
                                    r.appendChild(s),
                                    r.appendChild(l),
                                    a.appendChild(r)
                            }
                    }
                    var c = document.createElement("div");
                    if (c.className = pn.a.nextChapterContainer,
                        n.style.margin = this.mode === ue.vertical ? "0 auto 10vh auto" : "auto auto",
                        e.chapterType === E.Page.ChapterType.NOSEQUENCE || e.chapterType === E.Page.ChapterType.SEQUENCE) {
                        var u = document.createElement("p");
                        if (u.className = pn.a.nextChapterBtn,
                            u.innerHTML = this.$t("TO_CHAPTER") + " " + e.nextChapter.name,
                            c.appendChild(u),
                            e.chapterType === E.Page.ChapterType.NOSEQUENCE) {
                            var d = document.createElement("div");
                            d.className = pn.a.cautionContainer;
                            var p = document.createElement("img");
                            p.src = Nn.a,
                                p.className = pn.a.cautionImage;
                            var m = document.createElement("p");
                            m.className = pn.a.announce,
                                m.innerText = String(this.$t("LATER_VOLUME_AHEAD")),
                                d.appendChild(p),
                                d.appendChild(m),
                                c.appendChild(d)
                        }
                    }
                    var h = document.createElement("p");
                    h.classList.add(pn.a.subscribeBtn),
                        h.classList.add(pn.a.btn),
                        e.isSubscribed ? h.classList.add(pn.a.done) : h.classList.add(pn.a.default),
                        h.innerHTML = e.isSubscribed ? String(this.$t("doneFAVORITED")) : String(this.$t("addFAVORITED"));
                    var g = document.createElement("p");
                    g.classList.add(pn.a.btn),
                        g.classList.add(pn.a.commentsBtn),
                        g.innerText = String(this.$t("COMMENTS"));
                    var f = document.createElement("a")
                        , b = Bn();
                    f.classList.add(pn.a.appBannerWrapper),
                        f.href = function () {
                            switch (b) {
                                case "iPod":
                                case "iPad":
                                case "iPhone":
                                    return "https://itunes.apple.com/app/id1442476536";
                                case "Android":
                                case "Other":
                                    return "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus"
                            }
                        }();
                    var y = document.createElement("img");
                    return y.classList.add(pn.a.appBanner),
                        y.src = "en" === this.$store.state.language.serviceStatus ? ln.a : un.a,
                        y.alt = "",
                        f.appendChild(y),
                        n.appendChild(a),
                        n.appendChild(c),
                        n.appendChild(g),
                        n.appendChild(h),
                        n.appendChild(f),
                        t.appendChild(n),
                        t.outerHTML
                }
                ,
                t.prototype.createBannerPage = function (e) {
                    var t = document.querySelector("#banner-page").querySelector(".wrapper");
                    while (t.firstChild)
                        t.removeChild(t.firstChild);
                    return e.banners.map(function (e) {
                        var n = document.createElement("a");
                        n.href = e.action.url,
                            n.className = pn.a.banner;
                        var a = document.createElement("img");
                        a.src = e.imageUrl,
                            a.className = pn.a.bannerImg,
                            a.style.height = "auto",
                            n.appendChild(a),
                            t.appendChild(n)
                    }),
                        t.outerHTML
                }
                ,
                t.prototype.onResetSurface = function () {
                    this.$store.state.viewer.model[this.id].model.pages.filter(function (e) {
                        return e.advertisement
                    }).forEach(function (e) { })
                }
                ,
                t.prototype.onViewerOpened = function () {
                    var e = this;
                    Object(Sn["a"])(2e3).pipe(Object(Cn["a"])(Object(Pn["a"])(this.toggleNavigationSubject, this.toggleSideMenuSubjcet))).subscribe(function (t) {
                        e.isShowingNavigation = !1
                    })
                }
                ,
                t.prototype.onAfterMovePage = function (e, t, n) {
                    t > this.t.pageCount - 2 && (this.isShowingNavigation = !0),
                        this.currentPageNumber = t,
                        (this.$store.state.viewer.model[this.id].model.pages[t + 1] && this.$store.state.viewer.model[this.id].model.pages[t + 1].advertisement || this.$store.state.viewer.model[this.id].model.pages[t] && this.$store.state.viewer.model[this.id].model.pages[t].advertisement) && (adsbygoogle = window.adsbygoogle || []).push({})
                }
                ,
                t.prototype.loadZao = function () {
                    var e = this
                        , t = this.createViewerPage(this.mode)
                        , n = document.querySelector(".zao");
                    this.verticalOption.verticalPageMargin = this.$store.state.viewer.model[this.id].model.isVerticalOnly ? 0 : 30,
                        this.t = new tn.a.Viewer(n, t, this.mode === ue.horizontal ? this.horizontalOption : this.verticalOption),
                        this.slider || this.mode !== ue.horizontal || (this.slider = new tn.a.Slider(document.querySelector(".slider"), this.t)),
                        this.t.on("tap_center", this.tapOrClickCenter),
                        this.t.on("reset_surface", this.onResetSurface),
                        this.t.on("click_center", this.tapOrClickCenter),
                        this.t.on("viewer_opened", this.onViewerOpened),
                        this.t.on("after_move_page", this.onAfterMovePage),
                        this.numberOfPages = this.t.pageCount,
                        this.t.open().then(function () {
                            e.$forceUpdate()
                        })
                }
                ,
                t.prototype.tapOrClickCenter = function () {
                    this.t.currentPageNumber > this.t.pageCount - 2 || this.toggleNavigation()
                }
                ,
                t.loadMode = function () {
                    var e, t = localStorage.getItem("viewerMode");
                    switch (null == t && (t = "vertical"),
                    t) {
                        case "horizontal":
                            e = ue.horizontal;
                            break;
                        case "vertical":
                            e = ue.vertical
                    }
                    return e
                }
                ,
                t.prototype.toggleNavigation = function () {
                    this.isShowingNavigation = !this.isShowingNavigation
                }
                ,
                Object.defineProperty(t.prototype, "isShowingSlider", {
                    get: function () {
                        return this.isShowingNavigation && this.mode === ue.horizontal
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.createViewerPage = function (e) {
                    var t = this;
                    return this.$store.state.viewer.model[this.id].model.pages.map(function (e, n) {
                        return e.mangaPage ? t.$store.state.viewer.model[t.id].model.startFromRight || 0 !== n ? e.mangaPage.type === E.Page.PageType.RIGHT || e.mangaPage.type === E.Page.PageType.LEFT ? {
                            src: e.mangaPage.imageUrl,
                            group: 1,
                            encryption_hex: e.mangaPage.encryptionKey
                        } : {
                                src: e.mangaPage.imageUrl,
                                encryption_hex: e.mangaPage.encryptionKey
                            } : {
                                src: e.mangaPage.imageUrl,
                                encryption_hex: e.mangaPage.encryptionKey,
                                spread: "single"
                            } : e.bannerList ? {
                                html: t.createBannerPage(e.bannerList),
                                spread: "auto",
                                width: 300
                            } : e.advertisement ? {
                                html: '\n                    <div id="inner-ad" style="height:100%; display:flex; align-items: center;">\n                        <ins class="adsbygoogle" \n                         style="display:inline-block;width:336px;height:280px;margin:auto;" \n                         data-ad-client="ca-pub-4065733730259149" \n                         data-ad-slot="' + e.advertisement.adNetworks[0].adsense.unitID + '"></ins> \n                    </div>',
                                spread: "single",
                                width: 500
                            } : e.lastPage ? {
                                html: t.createLastPage(e.lastPage),
                                width: 400,
                                event: [{
                                    selector: "." + pn.a.nextChapterContainer,
                                    type: "click",
                                    callback: function (n) {
                                        t.$router.push("/viewer/" + e.lastPage.nextChapter.chapterId)
                                    }
                                }, {
                                    selector: "." + pn.a.subscribeBtn,
                                    type: "click",
                                    callback: t.onClickSubscribeBtn
                                }, {
                                    selector: "." + pn.a.commentsBtn,
                                    type: "click",
                                    callback: function (e) {
                                        t.$router.push("/comments/" + t.$store.state.viewer.model[t.id].model.chapterId)
                                    }
                                }]
                            } : void 0
                    })
                }
                ,
                t.prototype.onClickSubscribeBtn = function (e) {
                    var t = this;
                    this.$store.state.viewer.model[this.id].isSubscribed ? this.$store.dispatch("viewer/unsubscribe", {
                        chapterId: this.id,
                        titleId: this.$store.state.viewer.model[this.id].model.titleId
                    }).then(function (e) {
                        var n = document.querySelector("." + pn.a.subscribeBtn);
                        n.classList.remove(pn.a.done),
                            n.classList.add(pn.a.default),
                            n.innerHTML = String(t.$t("addFAVORITED"))
                    }) : this.$store.dispatch("viewer/subscribe", {
                        chapterId: this.id,
                        titleId: this.$store.state.viewer.model[this.id].model.titleId
                    }).then(function (e) {
                        var n = document.querySelector("." + pn.a.subscribeBtn);
                        n.classList.remove(pn.a.default),
                            n.classList.add(pn.a.done),
                            n.innerHTML = String(t.$t("doneFAVORITED"))
                    })
                }
                ,
                t.prototype.onChangeMode = function (e) {
                    this.t.toggleDirection(),
                        this.mode = e,
                        this.verticalOption.verticalPageMargin = this.$store.state.viewer.model[this.id].model.isVerticalOnly ? 0 : 30,
                        this.t.setOptions(this.t.direction === ue.horizontal ? this.horizontalOption : this.verticalOption);
                    var t = this.createViewerPage(this.mode);
                    this.t.setPageData(t),
                        this.t.resetSurface(),
                        this.slider || this.mode !== ue.horizontal || (this.slider = new tn.a.Slider(document.querySelector(".slider"), this.t)),
                        localStorage.setItem("viewerMode", e);
                    var n = document.querySelector("." + pn.a.toast);
                    n.className = "",
                        n.classList.add(this.mode === ue.horizontal ? pn.a.toastHorizontal : pn.a.toastVertical),
                        n.classList.add(pn.a.toast)
                }
                ,
                t.prototype.render = function (e) {
                    var t = this;
                    return e("div", [e(Un), e("div", {
                        class: pn.a.wrapper
                    }, [e("div", {
                        class: pn.a.viewerContainer + " zao"
                    }), e("div", {
                        class: pn.a.footer + " " + (this.isShowingSlider ? pn.a.appear : pn.a.hidden)
                    }, [e("div", {
                        class: "slider " + pn.a.slider
                    }), e("p", {
                        class: pn.a.pageNumber
                    }, [this.currentPageNumber, " / ", this.numberOfPages])]), function () {
                        if (t.$store.state.viewer.model[t.id])
                            return e("div", [e(wn, {
                                attrs: {
                                    title: t.$store.state.viewer.model[t.id].model.titleName,
                                    chapterTitle: t.$store.state.viewer.model[t.id].model.chapterName,
                                    isShowingNavigation: t.isShowingNavigation,
                                    titleId: t.$store.state.viewer.model[t.id].model.titleId
                                }
                            }), e("div", {
                                class: (t.mode === ue.horizontal ? pn.a.toastHorizontal : pn.a.toastVertical) + " " + pn.a.toast
                            }, [e("img", {
                                attrs: {
                                    src: t.mode === ue.horizontal ? on.a : an.a,
                                    alt: ""
                                },
                                class: pn.a.modeIcon
                            })]), e(Tn, {
                                attrs: {
                                    sns: t.$store.state.viewer.model[t.id].model.sns,
                                    mode: t.mode,
                                    chapterId: t.$store.state.viewer.model[t.id].model.chapterId,
                                    canChangeMode: !t.$store.state.viewer.model[t.id].model.isVerticalOnly
                                }
                            }), e(En, {
                                attrs: {
                                    chapters: t.$store.state.viewer.model[t.id].model.chapters
                                }
                            })])
                    }(), e("template", {
                        attrs: {
                            id: "banner-page"
                        }
                    }, [e("div", {
                        class: "wrapper " + pn.a.bannerContainer
                    })]), e("template", {
                        attrs: {
                            id: "last-page"
                        }
                    }, [e("div", {
                        class: "wrapper",
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        }
                    })])])])
                }
                ,
                t = n = c["b"]([r()({
                    components: {
                        Modal: Tn,
                        SideMenu: En,
                        Navigation: wn
                    },
                    metaInfo: function () {
                        var e = this.$store.state.viewer.model[this.$route.params["chapterId"]]
                            , t = e ? "[" + e.model.chapterName + "] " + e.model.titleName : "MANGA Plus by SHUEISHA";
                        return {
                            title: t,
                            titleTemplate: "%s | MANGA Plus",
                            meta: [{
                                name: "robots",
                                content: "noindex"
                            }]
                        }
                    }
                })], t),
                t
        }(u["c"]), jn = Hn, Gn = n("8e4e"), Wn = n.n(Gn), Fn = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return c["c"](t, e),
                t.prototype.render = function (e) {
                    return e("div", {
                        class: Wn.a.container
                    }, [e("img", {
                        attrs: {
                            src: n("16f4"),
                            alt: ""
                        },
                        class: Wn.a.img
                    })])
                }
                ,
                t = c["b"]([r.a], t),
                t
        }(u["c"]), Yn = Fn, zn = n("d775"), Qn = n.n(zn), $n = n("2c12"), qn = n.n($n), Kn = n("c8e1"), Xn = n.n(Kn), Jn = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return c["c"](t, e),
                t.prototype.render = function (e) {
                    var t = this;
                    return e("div", {
                        class: qn.a.commentItem
                    }, [e("img", {
                        attrs: {
                            src: this.comment.iconUrl,
                            alt: ""
                        },
                        class: qn.a.icon
                    }), e("p", {
                        class: qn.a.userName
                    }, [this.comment.userName]), e("p", {
                        class: qn.a.body
                    }, [this.comment.body]), e("div", {
                        class: qn.a.wrapper
                    }, [e("p", {
                        class: qn.a.date
                    }, [new Date(1e3 * this.comment.created).toLocaleString(navigator.language, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    })]), e("p", {
                        class: qn.a.like
                    }, [e("img", {
                        attrs: {
                            src: Xn.a,
                            alt: ""
                        },
                        class: qn.a.likeIcon
                    }), e("span", {
                        class: qn.a.numberOfLikes
                    }, [this.comment.numberOfLikes.toLocaleString()])])]), e("p", {
                        class: qn.a.likeBtn,
                        style: {
                            color: this.comment.alreadyLiked ? "rgb(255,214,0)" : "#ffffff",
                            opacity: this.comment.alreadyLiked ? 1 : .6
                        },
                        on: {
                            click: function () {
                                t.$emit("click", t.comment.id)
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: Xn.a,
                            alt: ""
                        },
                        class: qn.a.likeIcon
                    }), e("p", {
                        class: qn.a.likeText
                    }, [this.$t("LIKE")])])])
                }
                ,
                c["b"]([Object(u["b"])()], t.prototype, "comment", void 0),
                t = c["b"]([r.a], t),
                t
        }(u["c"]), Zn = Jn, ea = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return c["c"](t, e),
                t.prototype.created = function () {
                    var e = this;
                    this.id = this.$route.params["id"],
                        this.$store.state.comments.model[this.id] || this.$store.dispatch("comments/fetchData", this.id).catch(function (t) {
                            D(e.$router, t)
                        })
                }
                ,
                t.prototype.render = function (e) {
                    var t = this;
                    return e("div", {
                        class: Qn.a.commentsContainer
                    }, [function () {
                        if (t.$store.state.comments.model[t.id])
                            return e("div", [e(S, {
                                class: Qn.a.title
                            }, [t.$t("COMMENTS")]), e("div", {
                                class: Qn.a.commentsHeader
                            }, [e("a", {
                                attrs: {
                                    href: function () {
                                        return "iPhone" === navigator.platform || "iPod" === navigator.platform || "iPad" === navigator.platform ? "https://itunes.apple.com/app/id1442476536" : "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus"
                                    }()
                                }
                            }, [e("p", {
                                class: Qn.a.leaveBtn
                            }, [t.$t("INSTALL_APP")])])]), e("div", {
                                class: Qn.a.comments
                            }, [t.$store.state.comments.model[t.id].comments.map(function (n) {
                                var a = {
                                    attrs: {
                                        comment: n
                                    }
                                };
                                return e(Zn, ge()([a, {
                                    on: {
                                        click: function (e) {
                                            n.alreadyLiked ? t.$store.dispatch("comments/unlike", {
                                                chapterId: t.id,
                                                commentId: e
                                            }) : t.$store.dispatch("comments/like", {
                                                chapterId: t.id,
                                                commentId: e
                                            })
                                        }
                                    }
                                }]))
                            })])])
                    }()])
                }
                ,
                t = c["b"]([r()({
                    components: {
                        CommentItem: Zn
                    }
                })], t),
                t
        }(u["c"]), ta = ea, na = {
            en: {
                UPDATES: "Updates",
                FEATURED: "Featured",
                MANGALIST: "Manga List",
                FAVORITED: "Favorited",
                language: "English",
                New: "UP",
                ALL: "All",
                HOTTEST: "Hottest",
                addFAVORITED: "Favorite",
                doneFAVORITED: "Favorited",
                REMOVE: "Remove",
                UNDO: "Undo",
                REMOVED: "Title removed",
                RECOMMEND: "YOU MAY ALSO LIKE",
                UPDATE_SCHEDULE: "UPDATE SCHEDULE",
                OVERVIEW: "OVERVIEW",
                SHARE: "Share",
                TWEET: "Tweet",
                ABOUT_US: "About Us",
                NEWS_AND_EVENTS: "News and Events",
                HELP_FAQS: "Help / FAQs",
                FEEDBACK: "Feedback",
                TERMS_OF_SERVICES: "Terms of Services",
                SERVICE_ANNOUNCEMENT: "Service Announcements",
                PRIVACY_POLICY: "Privacy Policy",
                COPYRIGHTS: "Copyrights",
                VIEW_ALL: "View All",
                READING_DIRECTION: "Reading Direction",
                COMMENTS: "Comments",
                TO_CHAPTER: "To Chapter",
                LATER_VOLUME_AHEAD: "LATER VOLUMES AHEAD! BE AWARE OF SPOILERS.",
                CHANGE_LANGUAGE: "CHANGE LANGUAGE: ",
                SERVICE_LANGUAGE: "Service Language",
                CONTENTS_LANGUAGE: "Contents Language",
                READ_LATEST: "READ LATEST",
                NEW_CHAPTER_ARRIVES: "New chapter arrives",
                EVERY: "every",
                EVERY_DAY: "every day",
                NEW_CHAPTER_ARRIVES_ON: "New chapter arrives on",
                YOU_MAY_ALSO_LIKE: "YOU MAY ALSO LIKE",
                CHAPTERS_NOT_AVAILABLE: "Chapters between are not viewable in this service right now.",
                DOWNLOAD_APP: "Download the app and read it anytime!",
                INSTALL_APP: "Install the app now and leave a comment behind!",
                ABJ: "ABJ Mark is a registered trademark (Registration No.10921042) indicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder. For more information check ",
                FOLLOW_US: "Follow Us!",
                VIEW_COMMENTS: "View posted comments",
                LIKE: "Like",
                LANG: "eng",
                SEARCH: "Search by title or author",
                NO_RESULT: "Sorry, no results were found. Try searching for something else."
            },
            es: {
                UPDATES: "Reciente",
                FEATURED: "Destacados",
                MANGALIST: "Descubrir",
                FAVORITED: "Favoritos",
                language: "Español",
                New: "Nuevo",
                ALL: "Todo",
                HOTTEST: "Lo Más Visto",
                addFAVORITED: "Enviar a Favoritos",
                doneFAVORITED: "Enviado a Favoritos",
                REMOVE: "Retirar",
                UNDO: "Deshacer",
                REMOVED: "Título retirado",
                RECOMMEND: "También Te Puede Interesar",
                UPDATE_SCHEDULE: "Programa De Actualización",
                OVERVIEW: "Argumento",
                ABOUT_US: "Sobre nosotros",
                NEWS_AND_EVENTS: "Noticias y Eventos",
                SHARE: "Compartir",
                TWEET: "Tweet",
                HELP_FAQS: "Asistencia",
                FEEDBACK: "Comentario",
                TERMS_OF_SERVICES: "Términos de uso",
                PRIVACY_POLICY: "Política de privacidad",
                COPYRIGHTS: "Derechos de autor",
                VIEW_ALL: "Ver Todo",
                READING_DIRECTION: "Dirección de lectura",
                COMMENTS: "Comentarios",
                TO_CHAPTER: "Al Capítulo",
                LATER_VOLUME_AHEAD: "¡VIENEN MÁS CAPÍTULOS! CUIDADO CON LOS DESTRIPES.",
                SERVICE_ANNOUNCEMENT: "Anuncios sobre el servicio",
                CHANGE_LANGUAGE: "CAMBIAR IDIOMA: ",
                SERVICE_LANGUAGE: "Idioma del servicio",
                CONTENTS_LANGUAGE: "Idioma del contenido",
                READ_LATEST: "Leer el último capítulo",
                NEW_CHAPTER_ARRIVES: "El próximo capítulo llega",
                EVERY: "todos los",
                EVERY_DAY: "todos los días",
                NEW_CHAPTER_ARRIVES_ON: "El próximo capítulo llega el",
                YOU_MAY_ALSO_LIKE: "TAMBIÉN LE PUEDE INTERESAR",
                CHAPTERS_NOT_AVAILABLE: "Actualmente los capítulos entre no estan disponibles en este servicio.",
                DOWNLOAD_APP: "¡Descarga la app ahora!",
                INSTALL_APP: "Install the app now and leave a comment behind!",
                ABJ: "ABJ Mark is a registered trademark (Registration No.10921042) indicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder. For more information check ",
                FOLLOW_US: "Síguenos en!",
                VIEW_COMMENTS: "Ver comentarios",
                LIKE: "Me gusta",
                LANG: "esp",
                SEARCH: "Buscar por serie o autor",
                NO_RESULT: "Lo sentimos, no se encontraron resultados."
            }
        }, aa = n("2f62"), ia = n("842b"), ra = n.n(ia), oa = u["c"].extend({
            functional: !0,
            render: function (e, t) {
                return e("div", [e("img", {
                    attrs: {
                        src: n("be59"),
                        alt: "logo"
                    },
                    class: ra.a.logo + " " + t.data.attrs.class
                })])
            }
        }), sa = (n("8449"),
            n("6762"),
            n("2fdb"),
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        return e("router-link", {
                            attrs: {
                                to: this.$attrs.to
                            }
                        }, [this.$slots.default])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])), la = sa, ca = n("ad6e"), ua = n.n(ca), da = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        return e(pa, {
                            attrs: this.$attrs
                        })
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"]), pa = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        var t = this.$attrs.to.includes("static") ? "https://mangaplus.shueisha.co.jp" + this.$attrs.to + "/" + this.$t("LANG") : this.$attrs.to;
                        return this.$attrs.to.includes("static") ? e("a", {
                            attrs: {
                                href: t
                            },
                            class: ua.a.anchor
                        }, [e("p", [this.$t(this.$attrs.name)])]) : e(la, {
                            attrs: {
                                to: t
                            },
                            class: ua.a.anchor
                        }, [e("p", [this.$t(this.$attrs.name)])])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"]), ma = function (e, t) {
                return u["c"].extend({
                    functional: !0,
                    render: function (n, a) {
                        return n(da, ge()([{
                            class: a.data.class,
                            attrs: {
                                to: e,
                                name: t
                            }
                        }, {
                            style: a.data.style
                        }]))
                    }
                })
            }, ha = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        return e("a", {
                            attrs: {
                                href: "https://www.shonenjump.com/mangaplus/whatismangaplus/"
                            },
                            class: ua.a.anchor
                        }, [this.$t("ABOUT_US")])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"]), ga = ma("/updates", "UPDATES"), fa = ma("/featured", "FEATURED"), ba = ma("/manga_list", "MANGALIST"), ya = ma("/favorited", "FAVORITED"), va = ma("/static/faq", "HELP_FAQS"), wa = ma("/announcement", "NEWS_AND_EVENTS"), Aa = ma("/feedback", "FEEDBACK"), _a = (ma("/search_result", "SEARCH_RESULT"),
                ma("/static/terms", "TERMS_OF_SERVICES")), ka = ma("/static/privacypolicy", "PRIVACY_POLICY"), Ta = ma("/static/copyright", "COPYRIGHTS"), Sa = n("c72d"), Pa = n.n(Sa), Ca = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c["c"](t, e),
                        t.prototype.render = function (e) {
                            return e("div", {
                                class: Pa.a.navigation
                            }, [e(ga, {
                                class: Pa.a.navigationItem
                            }), e(fa, {
                                class: Pa.a.navigationItem
                            }), e(ba, {
                                class: Pa.a.navigationItem
                            }), e(ya, {
                                class: Pa.a.navigationItem
                            }), e(ha, {
                                class: Pa.a.navigationItem
                            })])
                        }
                        ,
                        t = c["b"]([r.a], t),
                        t
                }(u["c"]), Oa = Ca, Ia = n("01aa"), La = n.n(Ia), Ea = function (e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inputText = "",
                            t
                    }
                    return c["c"](t, e),
                        t.prototype.render = function (e) {
                            var t = this;
                            return e("form", {
                                class: La.a.searchContainer,
                                on: {
                                    submit: function (e) {
                                        e.stopPropagation(),
                                            e.preventDefault(),
                                            t.$router.push("/search_result?keyword=" + t.inputText)
                                    }
                                }
                            }, [e("router-link", {
                                class: La.a.iconWhiteContainer,
                                attrs: {
                                    to: {
                                        path: "/search_result",
                                        query: {
                                            keyword: this.inputText
                                        }
                                    }
                                }
                            }, [e("img", {
                                class: La.a.iconWhite,
                                attrs: {
                                    src: n("6e75d")
                                }
                            })]), e("div", {
                                class: La.a.input
                            }, [e("router-link", {
                                class: La.a.iconGrey,
                                attrs: {
                                    to: {
                                        path: "/search_result",
                                        query: {
                                            keyword: this.inputText
                                        }
                                    }
                                }
                            }, [e("img", {
                                attrs: {
                                    src: n("77b0"),
                                    type: "button"
                                },
                                class: La.a.iconGrey
                            })]), e("input", {
                                class: La.a.searchForm,
                                attrs: {
                                    type: "text",
                                    placeholder: this.$t("SEARCH")
                                },
                                on: {
                                    input: function (e) {
                                        var n = e.target;
                                        n.value && (t.inputText = n.value)
                                    }
                                }
                            })])])
                        }
                        ,
                        t = c["b"]([r.a], t),
                        t
                }(u["c"]), Da = Ea, Na = n("4a6a"), Va = n.n(Na), Ra = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c["c"](t, e),
                        t.prototype.render = function (e) {
                            var t = "m";
                            this.$attrs._size && (t = this.$attrs._size);
                            var n, a = "p";
                            switch (this.$attrs.element && (a = this.$attrs.element),
                            a) {
                                case "p":
                                    n = e("p", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break;
                                case "h1":
                                    n = e("h1", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break;
                                case "h2":
                                    n = e("h2", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break;
                                case "h3":
                                    n = e("h3", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break;
                                case "h4":
                                    n = e("h4", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break;
                                case "h5":
                                    n = e("h5", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break;
                                case "h6":
                                    n = e("h6", {
                                        class: Va.a[t]
                                    }, [this.$slots.default]);
                                    break
                            }
                            return n
                        }
                        ,
                        t = c["b"]([r.a], t),
                        t
                }(u["c"]), xa = Ra, Ua = n("1fc0"), Ba = n.n(Ua), Ma = n("dd7f"), Ha = n.n(Ma), ja = u["c"].extend({
                    functional: !0,
                    render: function (e, t) {
                        return e("div", ge()([{
                            class: Ha.a.triangle
                        }, {
                            style: t.data.style
                        }]))
                    }
                }), Ga = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c["c"](t, e),
                        t.prototype.render = function (e) {
                            var t = this;
                            return e("div", {
                                class: Ba.a.languageSettingBtn,
                                on: {
                                    click: function () {
                                        t.$emit("click")
                                    }
                                }
                            }, [e(xa, {
                                attrs: {
                                    _size: "s",
                                    class: Ba.a.text
                                }
                            }, [this.$t("CHANGE_LANGUAGE"), this.$t("language")]), e(ja)])
                        }
                        ,
                        t = c["b"]([r.a], t),
                        t
                }(u["c"]), Wa = Ga, Fa = n("3df2"), Ya = n.n(Fa), za = n("753f"), Qa = n.n(za), $a = function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c["c"](t, e),
                        t.prototype.render = function (e) {
                            var t = this;
                            return e("img", {
                                attrs: {
                                    src: n("99de")
                                },
                                on: {
                                    click: function () {
                                        t.$emit("click")
                                    }
                                },
                                class: Qa.a.hamburger
                            })
                        }
                        ,
                        t = c["b"]([r.a], t),
                        t
                }(u["c"]), qa = $a, Ka = u["c"].extend({
                    functional: !0,
                    render: function (e, t) {
                        return e("div", [e("div", {
                            class: Ya.a.header
                        }, [e(la, {
                            attrs: {
                                to: "/updates"
                            }
                        }, [e(oa, {
                            attrs: {
                                class: Ya.a.logo
                            }
                        })]), e(Oa, {
                            class: Ya.a.navigation
                        }), function () {
                            return "/search_result" !== t.data.attrs.path ? e(Da, {
                                class: Ya.a.searchForm
                            }) : e(Da, {
                                class: Ya.a.invisibleSearchForm
                            })
                        }(), e("div", {
                            class: Ya.a.settingBtn,
                            style: {
                                display: t.data.attrs.hideLanguageSettings ? "none" : ""
                            }
                        }, [e(Wa, {
                            on: {
                                click: t.data.on.toggleShowingSettings
                            },
                            attrs: {
                                hidden: t.data.attrs.hideLanguageSettings
                            }
                        })]), e("div", {
                            class: Ya.a.hamburger
                        }, [e(qa, {
                            on: {
                                click: t.data.on.toggleShowingSettings
                            },
                            class: Ya.a.hamburger
                        })])])])
                    }
                }), Xa = (n("6b54"),
                    n("f751"),
                    n("c544")), Ja = n.n(Xa), Za = n("63e4"), ei = n.n(Za), ti = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", [e("input", {
                                    attrs: {
                                        type: "radio",
                                        name: this.$attrs._name,
                                        id: this.$attrs._id,
                                        disabled: !1
                                    },
                                    class: ei.a.input,
                                    domProps: {
                                        checked: this.$attrs._checked
                                    },
                                    on: {
                                        change: function (e) {
                                            return t.$emit("change", e)
                                        }
                                    }
                                }), e("label", {
                                    attrs: {
                                        for: this.$attrs._id
                                    },
                                    class: ei.a.radio
                                })])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), ni = ti, ai = n("a7ed"), ii = n.n(ai), ri = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: ii.a.wrapper
                                }, [e("input", {
                                    attrs: {
                                        type: "checkbox",
                                        disabled: this.$attrs._disabled,
                                        name: this.$attrs._name,
                                        id: this.$attrs._id
                                    },
                                    class: ii.a.input,
                                    domProps: {
                                        checked: this.$attrs._checked
                                    },
                                    on: {
                                        change: function (e) {
                                            t.$emit("change", e.target)
                                        }
                                    }
                                }), e("label", {
                                    attrs: {
                                        for: this.$attrs._id
                                    },
                                    class: ii.a.checkbox
                                })])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), oi = ri, si = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: Ja.a.wrapper
                                }, [function () {
                                    var e = t.$slots.input[0]
                                        , n = Object.assign({}, t.$attrs);
                                    return n._id = t.$attrs._name + "-" + t.$attrs._id,
                                        e.data.attrs = n,
                                        e.data.on = {
                                            change: function (e) {
                                                t.$emit("change", e)
                                            }
                                        },
                                        e
                                }(), e("label", {
                                    attrs: {
                                        for: this.$attrs._name + "-" + this.$attrs._id
                                    },
                                    class: Ja.a.label + " " + (this.$attrs._disabled ? Ja.a.disabled : "")
                                }, [e("txt", {
                                    attrs: {
                                        size: "l"
                                    }
                                }, [this.$slots.label])])])
                            }
                            ,
                            t = c["b"]([r()({
                                components: {
                                    txt: xa
                                }
                            })], t),
                            t
                    }(u["c"]), li = u["c"].extend({
                        functional: !0,
                        name: "service-language-item",
                        render: function (e, t) {
                            return e(si, {
                                attrs: {
                                    _name: t.data.attrs._name,
                                    _id: t.data.attrs._id,
                                    _checked: t.data.attrs._checked,
                                    _disabled: t.data.attrs._disabled
                                },
                                on: {
                                    change: t.data.on.change
                                },
                                class: t.data.class
                            }, [e("template", {
                                slot: "input"
                            }, [e(ni, {
                                attrs: {
                                    disabled: t.data.attrs._disabled
                                }
                            })]), e("template", {
                                slot: "label"
                            }, [t.slots().default])])
                        }
                    }), ci = u["c"].extend({
                        functional: !0,
                        name: "contents-language-item",
                        render: function (e, t) {
                            return e(si, {
                                attrs: {
                                    _name: "contents",
                                    _id: t.data.attrs._id,
                                    _checked: t.data.attrs._checked,
                                    _disabled: t.data.attrs._disabled
                                },
                                on: {
                                    change: t.data.on.change
                                }
                            }, [e("template", {
                                slot: "input"
                            }, [e(oi)]), e("template", {
                                slot: "label",
                                class: t.data.attrs._disabled ? Ja.a.disabled : ""
                            }, [t.slots().default])])
                        }
                    }), ui = n("8ce6"), di = n.n(ui), pi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", [e(xa, {
                                attrs: {
                                    element: "h3",
                                    _size: "l",
                                    class: di.a.text
                                }
                            }, [t.slots().default[0].children]), e("div", {
                                class: di.a.items
                            }, [function () {
                                return t.slots().default[1].children.map(function (e) {
                                    return e.data.class = di.a.item,
                                        e
                                })
                            }()])])
                        }
                    }), mi = u["c"].extend({
                        functional: !0,
                        name: "service-language",
                        render: function (e, t) {
                            var n = Math.random().toString(30).slice(-8);
                            return e(pi, [e("template", {
                                slot: "title"
                            }, [t.data.attrs.headerName]), e("template", {
                                slot: "items"
                            }, [e(li, {
                                attrs: {
                                    _name: n,
                                    _id: "en",
                                    _checked: "en" === t.data.attrs.status
                                },
                                on: {
                                    change: t.data.on.change
                                }
                            }, ["ENGLISH"]), e(li, {
                                attrs: {
                                    _name: n,
                                    _id: "es",
                                    _checked: "es" === t.data.attrs.status,
                                    _disabled: !1
                                },
                                on: {
                                    change: t.data.on.change
                                }
                            }, ["ESPAÑOL"])])])
                        }
                    }), hi = u["c"].extend({
                        functional: !0,
                        name: "contents-language",
                        render: function (e, t) {
                            return e(pi, [e("template", {
                                slot: "title"
                            }, [t.data.attrs.contentsLanguageHeader]), e("template", {
                                slot: "items"
                            }, [e(ci, {
                                attrs: {
                                    _id: "en",
                                    _checked: t.data.attrs.status.en,
                                    _disabled: function () {
                                        return !!t.data.attrs.priority && "en" === t.data.attrs.priority
                                    }()
                                },
                                on: {
                                    change: t.data.on.change
                                }
                            }, ["ENGLISH"]), e(ci, {
                                attrs: {
                                    _id: "es",
                                    _checked: t.data.attrs.status.es,
                                    _disabled: function () {
                                        return !!t.data.attrs.priority && "es" === t.data.attrs.priority
                                    }()
                                },
                                on: {
                                    change: t.data.on.change
                                }
                            }, ["ESPAÑOL"])])])
                        }
                    }), gi = n("8514"), fi = n.n(gi), bi = n("3e97"), yi = n.n(bi), vi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: yi.a.divider + " " + t.data.class,
                                style: t.data.style
                            })
                        }
                    }), wi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: fi.a.container + " " + t.data.class,
                                on: {
                                    click: function (e) {
                                        e.stopPropagation()
                                    }
                                }
                            }, [e(mi, {
                                attrs: {
                                    status: t.data.attrs.serviceStatus,
                                    headerName: t.data.attrs.headerName
                                },
                                on: {
                                    change: t.data.on.serviceLanguageChange
                                }
                            }), e(vi, {
                                class: fi.a.divider
                            }), e(hi, {
                                attrs: {
                                    status: t.data.attrs.contentsStatus,
                                    contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                                    priority: t.data.attrs.serviceStatus
                                },
                                on: {
                                    change: t.data.on.contentsLanguageChange
                                }
                            })])
                        }
                    }), Ai = n("8c4f"), _i = n.n(Ai), ki = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: _i.a.wrapper + " " + t.data.class
                            }, [e(ga, {
                                class: _i.a.item + " " + _i.a.main
                            }), e(fa, {
                                class: _i.a.item + " " + _i.a.main
                            }), e(ba, {
                                class: _i.a.item + " " + _i.a.main
                            }), e(ya, {
                                class: _i.a.main + " " + _i.a.item
                            }), e(ha, {
                                class: _i.a.main + " " + _i.a.item
                            }), e(vi, {
                                class: _i.a.divider
                            }), e(xa, {
                                attrs: {
                                    _size: "m"
                                },
                                class: _i.a.languageSetting
                            }, [t.data.attrs.userSettingsHeaderName]), e("div", {
                                class: _i.a.languageSettingContainer
                            }, [e(mi, {
                                attrs: {
                                    status: t.data.attrs.serviceStatus
                                },
                                on: {
                                    change: t.data.on.serviceLanguageChange
                                }
                            })]), e(xa, {
                                attrs: {
                                    _size: "m"
                                },
                                class: _i.a.languageSetting
                            }, [t.data.attrs.contentsLanguageHeader]), e("div", {
                                class: _i.a.languageSettingContainer
                            }, [e(hi, {
                                attrs: {
                                    status: t.data.attrs.contentsStatus,
                                    priority: t.data.attrs.serviceStatus
                                },
                                on: {
                                    change: t.data.on.contentsLanguageChange
                                }
                            })]), e(vi, {
                                class: _i.a.item
                            }), e(wa, {
                                class: _i.a.item
                            }), e(va, {
                                class: _i.a.item
                            }), e(Aa, {
                                class: _i.a.item
                            }), e(_a, {
                                class: _i.a.item
                            }), e(ka, {
                                class: _i.a.item
                            }), e(Ta, {
                                class: _i.a.item
                            })])
                        }
                    }), Ti = n("4f3c"), Si = n.n(Ti), Pi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", [e(Ka, {
                                attrs: {
                                    path: t.data.attrs.path,
                                    isShowingSettings: t.data.attrs.isShowingSettings,
                                    hideLanguageSettings: t.data.attrs.hideLanguageSettings
                                },
                                on: {
                                    toggleShowingSettings: t.data.on.toggleShowingSettings
                                }
                            }), function () {
                                if (t.data.attrs.isShowingSettings)
                                    return e(wi, {
                                        class: Si.a.setting,
                                        attrs: {
                                            serviceStatus: t.data.attrs.serviceStatus,
                                            contentsStatus: t.data.attrs.contentsStatus,
                                            contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                                            headerName: t.data.attrs.userSettingsHeaderName
                                        },
                                        on: {
                                            serviceLanguageChange: t.data.on.serviceLanguageChange,
                                            contentsLanguageChange: t.data.on.contentsLanguageChange
                                        }
                                    })
                            }(), e("div", {
                                directives: [{
                                    name: "show",
                                    value: t.data.attrs.isShowingSettings
                                }]
                            }, [e(ki, {
                                attrs: {
                                    serviceStatus: t.data.attrs.serviceStatus,
                                    contentsStatus: t.data.attrs.contentsStatus,
                                    contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                                    userSettingsHeaderName: t.data.attrs.userSettingsHeaderName
                                },
                                on: {
                                    serviceLanguageChange: t.data.on.serviceLanguageChange,
                                    contentsLanguageChange: t.data.on.contentsLanguageChange
                                },
                                class: Si.a.menu
                            })])])
                        }
                    }), Ci = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                var e = this;
                                this.$router.beforeEach(function (t, n, a) {
                                    e.$store.commit("hideSettingModal"),
                                        a()
                                })
                            }
                            ,
                            t.prototype.render = function (e) {
                                var t = this;
                                return e(Pi, {
                                    attrs: {
                                        path: this.$route.path,
                                        isShowingSettings: this.$store.state.language.isShowSetting,
                                        serviceStatus: this.$store.state.language.serviceStatus,
                                        contentsStatus: this.$store.state.language.contentsStatus,
                                        hideLanguageSettings: this.$route.path.indexOf("titles") > 0,
                                        userSettingsHeaderName: this.$t("SERVICE_LANGUAGE"),
                                        contentsLanguageHeader: this.$t("CONTENTS_LANGUAGE")
                                    },
                                    on: {
                                        toggleShowingSettings: function (e) {
                                            return t.$store.commit("toggleSettingModal")
                                        },
                                        serviceLanguageChange: function (e) {
                                            var n = e.target.id.slice(-2);
                                            t.$i18n.locale = n,
                                                t.$store.dispatch("updateServiceLanguage", n)
                                        },
                                        contentsLanguageChange: function (e) {
                                            var n = e.target.id.slice(-2);
                                            t.$store.commit("setContentsStatus", n)
                                        }
                                    }
                                })
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Oi = Ci, Ii = n("b5b6"), Li = n.n(Ii), Ei = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: Li.a.container + " " + t.data.class,
                                style: t.data.style
                            }, [e("img", {
                                attrs: {
                                    src: n("5185"),
                                    alt: "app_icon",
                                    width: "80",
                                    height: "80"
                                },
                                class: Li.a.appIcon
                            }), e("div", {
                                class: Li.a.vertical
                            }, [e(xa, {
                                attrs: {
                                    _size: "m"
                                },
                                class: Li.a.text
                            }, [t.data.attrs.letsDownloadApp]), e("div", {
                                class: Li.a.horizontal
                            }, [e("a", {
                                attrs: {
                                    href: "https://itunes.apple.com/app/id1442476536"
                                }
                            }, [e("img", {
                                attrs: {
                                    src: n("34ae"),
                                    alt: "AppStoreIcon",
                                    width: "120",
                                    height: "40"
                                },
                                class: Li.a.appStoreIcon
                            })]), e("a", {
                                attrs: {
                                    href: "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus"
                                },
                                class: Li.a.playStore
                            }, [e("img", {
                                attrs: {
                                    src: n("be22"),
                                    alt: "PlayStoreIcon",
                                    width: "134",
                                    height: "40"
                                },
                                class: Li.a.playStoreIcon
                            })])])])])
                        }
                    }), Di = n("d630"), Ni = n.n(Di), Vi = n("04ef"), Ri = n.n(Vi), xi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e(la, {
                                attrs: {
                                    to: t.data.attrs.to
                                },
                                class: t.data.class
                            }, [e(xa, {
                                attrs: {
                                    _size: "s"
                                },
                                class: Ri.a.text
                            }, [t.slots().default])])
                        }
                    }), Ui = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", {
                                    class: Ni.a.container
                                }, [e("div", {
                                    class: Ni.a.flexContainer
                                }, [e(xi, {
                                    class: Ni.a.item,
                                    attrs: {
                                        to: "/announcement"
                                    }
                                }, [this.$t("NEWS_AND_EVENTS")]), e("a", {
                                    class: Ni.a.item,
                                    attrs: {
                                        href: function () {
                                            return "en" == t.$store.state.language.serviceStatus ? "https://mangaplus.shueisha.co.jp/static/faq/eng/" : "https://mangaplus.shueisha.co.jp/static/faq/esp/"
                                        }()
                                    }
                                }, [this.$t("HELP_FAQS")]), e(xi, {
                                    class: Ni.a.item,
                                    attrs: {
                                        to: "/feedback"
                                    }
                                }, [this.$t("FEEDBACK")])]), e("div", {
                                    class: Ni.a.flexContainer
                                }, [e("a", {
                                    class: Ni.a.item,
                                    attrs: {
                                        href: function () {
                                            return "en" == t.$store.state.language.serviceStatus ? "https://mangaplus.shueisha.co.jp/static/terms/eng/" : "https://mangaplus.shueisha.co.jp/static/terms/esp/"
                                        }()
                                    }
                                }, [this.$t("TERMS_OF_SERVICES")]), e("a", {
                                    class: Ni.a.item,
                                    attrs: {
                                        href: function () {
                                            return "en" == t.$store.state.language.serviceStatus ? "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/" : "https://mangaplus.shueisha.co.jp/static/privacypolicy/esp/"
                                        }()
                                    }
                                }, [this.$t("PRIVACY_POLICY")]), e("a", {
                                    class: Ni.a.item,
                                    attrs: {
                                        href: function () {
                                            return "en" == t.$store.state.language.serviceStatus ? "https://mangaplus.shueisha.co.jp/static/copyright/eng/" : "https://mangaplus.shueisha.co.jp/static/copyright/esp/"
                                        }()
                                    }
                                }, [this.$t("COPYRIGHTS")])])])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Bi = Ui, Mi = n("720a"), Hi = n.n(Mi), ji = n("809d"), Gi = n.n(ji), Wi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: Gi.a.container + " " + t.data.class
                            }, [e(xa, {
                                class: Gi.a.message,
                                attrs: {
                                    _size: "m"
                                }
                            }, [t.data.attrs.followUs]), e("a", {
                                attrs: {
                                    href: "en" === t.data.attrs.language ? "https://www.facebook.com/mangaplus.en/" : "https://www.facebook.com/mangaplus.es/"
                                }
                            }, [e("img", {
                                attrs: {
                                    src: n("a177"),
                                    alt: "",
                                    width: "40"
                                },
                                class: Gi.a.icon
                            })])])
                        }
                    }), Fi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: Hi.a.container + " " + t.data.class
                            }, [e("div", {
                                class: Hi.a.toggle
                            }, [e(Ei, {
                                attrs: {
                                    letsDownloadApp: t.data.attrs.letsDownloadApp,
                                    abjInformation: t.data.attrs.abjInformation
                                },
                                class: Hi.a.appInfo
                            }), e("div", {
                                class: Hi.a.abj
                            }, [e("img", {
                                attrs: {
                                    src: n("5225"),
                                    alt: "ABJLogo",
                                    width: "80",
                                    height: "75"
                                },
                                class: Hi.a.abjLogo
                            }), e(xa, {
                                attrs: {
                                    _size: "s"
                                },
                                class: Hi.a.abjText
                            }, [t.data.attrs.abjInformation, e("a", {
                                attrs: {
                                    href: "https://aebs.or.jp/"
                                }
                            }, ["https://aebs.or.jp/"]), "."])])]), e("div", {
                                class: Hi.a.vertical
                            }, [e("div", {
                                class: Hi.a.horizontal
                            }, [e(Bi, {
                                class: Hi.a.footerNavigation,
                                attrs: {
                                    language: t.data.attrs.language
                                }
                            }), e(Wi, {
                                class: Hi.a.sns,
                                attrs: {
                                    language: t.data.attrs.language,
                                    followUs: t.data.attrs.followUs
                                }
                            })]), e(xa, {
                                attrs: {
                                    _size: "s"
                                },
                                class: Hi.a.copyright
                            }, [" ", "@2019 Shueisha Inc. All rights reserved."])])])
                        }
                    }), Yi = n("7e1c"), zi = n.n(Yi), Qi = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", [e(Un), e("div", {
                                class: zi.a.container
                            }, [e(Oi), e("div", {
                                class: zi.a.mainContainer
                            }, [e("router-view")]), e(Fi, {
                                class: zi.a.footer,
                                attrs: {
                                    language: t.data.attrs.language,
                                    followUs: t.data.attrs.followUs,
                                    letsDownloadApp: t.data.attrs.letsDownloadApp,
                                    abjInformation: t.data.attrs.abjInformation
                                }
                            })])])
                        }
                    }), $i = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                return e(Qi, {
                                    attrs: {
                                        isMain: this.$route.path.indexOf("static") < 0,
                                        language: this.$store.state.language.serviceStatus,
                                        followUs: this.$t("FOLLOW_US"),
                                        letsDownloadApp: this.$t("DOWNLOAD_APP"),
                                        abjInformation: this.$t("ABJ")
                                    }
                                })
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), qi = $i, Ki = n("bc8e"), Xi = n.n(Ki), Ji = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", [e(S, ["FAQ"]), e("div", {
                                class: Xi.a.wrapper
                            }, [t.slots().default.map(function (t) {
                                return e("div", [t])
                            })])])
                        }
                    }), Zi = n("eb35"), er = n.n(Zi), tr = n("35f6"), nr = n.n(tr), ar = n("89c2"), ir = n.n(ar), rr = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", [e("input", {
                                    attrs: {
                                        type: "checkbox",
                                        id: this.$attrs._id
                                    },
                                    class: ir.a.input,
                                    on: {
                                        change: function (e) {
                                            t.$emit("change")
                                        }
                                    }
                                }), e("label", {
                                    attrs: {
                                        for: this.$attrs._id
                                    },
                                    class: ir.a.arrow,
                                    style: this.color ? {
                                        borderLeft: "1px solid " + this.color,
                                        borderBottom: "1px solid " + this.color
                                    } : {}
                                })])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "color", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), or = rr, sr = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.isShowBody = !1,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e("div", [e("label", {
                                    attrs: {
                                        for: this._id
                                    },
                                    class: nr.a.titleBox + " " + (this.isShowBody ? this.titleClassWithShown : this.titleClass)
                                }, [this.$slots.title, e(or, {
                                    attrs: {
                                        _id: this._id,
                                        beforeColor: this.beforeColor,
                                        color: this.color ? this.color : ""
                                    },
                                    on: {
                                        change: function () {
                                            t.isShowBody = !t.isShowBody,
                                                t.$emit("toggle")
                                        }
                                    },
                                    class: nr.a.arrow
                                })]), e("transition", {
                                    attrs: {
                                        name: "fade",
                                        "enter-active-class": nr.a.fadeEnterActive,
                                        "leave-active-class": nr.a.fadeLeaveActive
                                    }
                                }, [e("div", {
                                    directives: [{
                                        name: "show",
                                        value: this.isShowBody
                                    }],
                                    class: nr.a.body
                                }, [this.$slots.body])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "_id", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "titleClass", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "titleClassWithShown", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "beforeColor", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "color", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), lr = sr, cr = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.isShowBody = !1,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e(lr, {
                                    attrs: {
                                        _id: "accordion-" + Math.random().toString(30).slice(-8),
                                        titleClass: er.a.title,
                                        titleClassWithShown: er.a.title
                                    },
                                    on: {
                                        toggle: function () {
                                            t.isShowBody = !t.isShowBody
                                        }
                                    }
                                }, [e("template", {
                                    slot: "title"
                                }, [e(xa, {
                                    attrs: {
                                        element: "h3",
                                        _size: "m"
                                    },
                                    class: er.a.titleText + " " + (this.isShowBody ? er.a.titleChecked : er.a.titleNoCheck)
                                }, [this.title])]), e("template", {
                                    slot: "body"
                                }, [e("div", {
                                    class: er.a.body
                                }, [this.$slots.default])])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), ur = cr, dr = n("35e3"), pr = n.n(dr), mr = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.isShowBody = !1,
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e(lr, {
                                    on: {
                                        toggle: function () {
                                            t.isShowBody = !t.isShowBody
                                        }
                                    },
                                    attrs: {
                                        titleClass: pr.a.title,
                                        titleClassWithShown: pr.a.titleWithShown,
                                        color: "white"
                                    },
                                    class: pr.a.wrapper
                                }, [e("template", {
                                    slot: "title"
                                }, [e(xa, {
                                    attrs: {
                                        element: "h3",
                                        _size: "l"
                                    },
                                    class: pr.a.titleText + " " + (this.isShowBody ? pr.a.titleChecked : pr.a.titleNoCheck)
                                }, [this.title])]), e("template", {
                                    slot: "body"
                                }, [this.$slots.default.map(function (t, n) {
                                    return e("div", [e("div", {
                                        class: pr.a.border
                                    }), t])
                                })])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), hr = mr, gr = function (e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.lang = "en",
                                t
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                this.$route.params.language ? this.lang = this.$route.params.language : this.lang = this.$i18n.locale
                            }
                            ,
                            t.prototype.render = function (e) {
                                return e(Ji, [e(hr, {
                                    attrs: {
                                        title: "title1"
                                    }
                                }, [e(ur, {
                                    attrs: {
                                        title: "item-title"
                                    }
                                }, [this.$route.params.language ? this.$route.params.language : this.$i18n.locale])]), e(hr, {
                                    attrs: {
                                        title: "title1"
                                    }
                                }, [e(ur, {
                                    attrs: {
                                        title: "item-title"
                                    }
                                }, ["body-title1"]), e(ur, {
                                    attrs: {
                                        title: "item-title"
                                    }
                                }, ["body-title2"])]), e(hr, {
                                    attrs: {
                                        title: "title3"
                                    }
                                }, [e(ur, {
                                    attrs: {
                                        title: "item-title"
                                    }
                                }, ["body-title1"]), e(ur, {
                                    attrs: {
                                        title: "item-title"
                                    }
                                }, ["body-title2"])])])
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), fr = gr, br = n("785d"), yr = n.n(br), vr = n("cd08"), wr = n.n(vr), Ar = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.render = function (e) {
                                var t = this;
                                return e(lr, {
                                    attrs: {
                                        _id: "accordion-" + Math.random().toString(30).slice(-8),
                                        titleClass: wr.a.title,
                                        titleClassWithShown: wr.a.title,
                                        color: "white"
                                    },
                                    on: {
                                        toggle: function () {
                                            t.isShowBody = !t.isShowBody
                                        }
                                    }
                                }, [e("template", {
                                    slot: "title"
                                }, [e("div", {
                                    class: wr.a.contentsWrapper
                                }, [e("div", {
                                    class: wr.a.contents
                                }, [this.title]), e("div", {
                                    class: wr.a.date
                                }, [new Date(1e3 * this.date).toLocaleString(navigator.language, {
                                    weekday: "short",
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric"
                                })])])]), e("template", {
                                    slot: "body"
                                }, [e("div", {
                                    class: wr.a.body,
                                    domProps: {
                                        innerHTML: this.html
                                    }
                                })])])
                            }
                            ,
                            c["b"]([Object(u["b"])()], t.prototype, "title", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "date", void 0),
                            c["b"]([Object(u["b"])()], t.prototype, "html", void 0),
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), _r = Ar, kr = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: yr.a.wrapper
                            }, [e(S, {
                                class: yr.a.title
                            }, [t.data.attrs.titleName]), e("div", {
                                class: yr.a.container
                            }, [function () {
                                return t.data.attrs.list.map(function (t) {
                                    return e("div", [e(_r, {
                                        attrs: {
                                            title: t.title,
                                            date: t.date,
                                            html: t.body
                                        }
                                    }), e("div", {
                                        class: yr.a.border
                                    })])
                                })
                            }()])])
                        }
                    }), Tr = function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return c["c"](t, e),
                            t.prototype.created = function () {
                                0 === this.$store.state.announcements.model.serviceAnnouncements.length && (this.language ? this.$store.dispatch("announcements/fetchWebviewData", this.language) : this.$store.dispatch("announcements/fetchData"))
                            }
                            ,
                            Object.defineProperty(t.prototype, "language", {
                                get: function () {
                                    return this.$route.params.language
                                },
                                enumerable: !0,
                                configurable: !0
                            }),
                            t.prototype.render = function (e) {
                                return e(kr, {
                                    attrs: {
                                        list: this.$store.state.announcements.model.serviceAnnouncements,
                                        titleName: this.$t("SERVICE_ANNOUNCEMENT")
                                    }
                                })
                            }
                            ,
                            t = c["b"]([r.a], t),
                            t
                    }(u["c"]), Sr = Tr, Pr = n("5764"), Cr = n.n(Pr), Or = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", [e("div", {
                                class: Cr.a.label
                            }, [t.slots().default[0]]), t.slots().default[1]])
                        }
                    }), Ir = n("2f51"), Lr = n.n(Ir), Er = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("textarea", {
                                class: Lr.a.textarea + " " + t.data.class,
                                attrs: {
                                    name: "undefined" === t.data.attrs.name ? "textarea" : t.data.attrs.name,
                                    id: "undefined" === t.data.attrs._id ? Math.random().toString(30).slice(-8) : t.data.attrs._id,
                                    cols: "undefined" === t.data.attrs.cols ? 30 : t.data.attrs.cols,
                                    rows: "undefined" === t.data.attrs.rows ? 10 : t.data.attrs.rows,
                                    maxlength: "undefined" === t.data.attrs.maxLength ? 500 : t.data.attrs.maxLength
                                },
                                on: {
                                    keyup: t.data.on.change
                                }
                            }, [t.slots().default])
                        }
                    }), Dr = n("b9f1"), Nr = n.n(Dr), Vr = n("72f4"), Rr = n.n(Vr), xr = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("select", {
                                attrs: {
                                    name: "select",
                                    id: "select"
                                },
                                class: Rr.a.form + " " + t.data.class,
                                on: {
                                    change: t.data.on.change
                                }
                            }, [e("option", {
                                attrs: {
                                    value: "suggestion"
                                },
                                domProps: {
                                    selected: "suggestion" === t.data.attrs.value
                                }
                            }, ["Suggestion"]), e("option", {
                                attrs: {
                                    value: "report"
                                },
                                domProps: {
                                    selected: "report" === t.data.attrs.value
                                }
                            }, ["Report"])])
                        }
                    }), Ur = u["c"].extend({
                        functional: !0,
                        render: function (e, t) {
                            return e("div", {
                                class: Nr.a.container
                            }, [e(S, ["FEEDBACK"]), function () {
                                return t.data.attrs.isSubmitted ? e("p", ["Your feedback was successfully sent."]) : e("div", [e(Or, [e("span", ["Type of feedback"]), e(xr, {
                                    on: {
                                        change: t.data.on.changeType
                                    },
                                    class: Nr.a.type,
                                    attrs: {
                                        value: t.data.attrs.type
                                    }
                                })]), e(Er, {
                                    attrs: {
                                        cols: 10,
                                        rows: 10
                                    },
                                    class: Nr.a.body,
                                    on: {
                                        change: t.data.on.changeMessage
                                    }
                                }, [t.data.attrs.message]), e("p", {
                                    class: Nr.a.btn + " " + (t.data.attrs.disabled ? Nr.a.disabled : Nr.a.enable),
                                    on: {
                                        click: function () {
                                            return t.data.attrs.disabled ? function () { }
                                                : t.data.on.submit
                                        }()
                                    }
                                }, ["SEND"])])
                            }()])
                        }
                    }), Br = (n("34ef"),
                        n("bc3a")), Mr = n.n(Br), Hr = (n("1c4c"),
                            n("94db")), jr = n.n(Hr);
        (function (e) {
            e[e["banner"] = 0] = "banner",
                e[e["image"] = 1] = "image",
                e[e["webview"] = 2] = "webview",
                e[e["last"] = 3] = "last",
                e[e["ad"] = 4] = "ad"
        }
        )(Mn || (Mn = {}));
        var Gr = function () {
            function e() { }
            return e.setStub = function (t) {
                var n = new jr.a(t, {
                    delayResponse: 500
                });
                n.onGet("/title_list/bookmark").reply(200, E.Response.encode(e.getSubscribeListStub()).finish()),
                    n.onDelete("/title_list/bookmark").reply(200, E.Response.encode(e.unSubscribeStub()).finish()),
                    n.onPut("/title_list/bookmark").reply(200, E.Response.encode(e.subscribeTitleStub()).finish()),
                    n.onGet("/title_list/all").reply(200, E.Response.encode(e.getAllTitlesStub()).finish()),
                    n.onGet("/featured").reply(200, E.Response.encode(e.fetchFeaturedListStub()).finish()),
                    n.onGet("/title_detail").reply(200, E.Response.encode(e.titleDetail()).finish()),
                    n.onGet("/web/web_home").reply(200, E.Response.encode(e.fetchTopData()).finish()),
                    n.onGet("/manga_viewer").reply(200, E.Response.encode(e.fetchViewerData()).finish()),
                    n.onGet("/comment").reply(200, E.Response.encode(e.fetchCommentData()).finish()),
                    n.onGet("/web/announcement").reply(200, E.Response.encode(e.fetchServiceAnnouncementData()).finish()),
                    n.onGet("/title_list/ranking").reply(200, E.Response.encode(e.fetchRanking()).finish()),
                    n.onPost("/feedback").reply(200, E.Response.encode(e.feedback()).finish()),
                    n.onPut("/comment_like").reply(200, E.Response.encode({}).finish()),
                    n.onDelete("/comment_like").reply(200, E.Response.encode({}).finish())
            }
                ,
                e.errorResponse = function () {
                    var t = new E.Response;
                    return t.error = e.createErrorResponse(),
                        t.error.action = E.ErrorResult.Action.GEOIP_BLOCKING,
                        t
                }
                ,
                e.createErrorResponse = function () {
                    var e = new E.ErrorResult;
                    return e.action = E.ErrorResult.Action.MAINTENANCE,
                        e
                }
                ,
                e.feedback = function () {
                    return this.successResult(function (e) { })
                }
                ,
                e.fetchRanking = function () {
                    return this.successResult(function (t) {
                        var n = new E.TitleRankingView;
                        n.titles = Array.from(Array(100).keys()).map(function (t) {
                            return e.createTitle(t)
                        }),
                            t.titleRankingView = n
                    })
                }
                ,
                e.fetchServiceAnnouncementData = function () {
                    return this.successResult(function (t) {
                        var n = new E.ServiceAnnouncementsView;
                        n.serviceAnnouncements = Array.from(Array(10).keys()).map(function (t) {
                            return e.createServiceAnnouncement(t)
                        }),
                            t.serviceAnnouncementsView = n
                    })
                }
                ,
                e.createServiceAnnouncement = function (e) {
                    var t = new E.ServiceAnnouncement;
                    return t.body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos ducimus ea earum enim, exercitationem fugiat id ipsum iure, minus odit optio quibusdam quo, recusandae sed tempora tenetur voluptatem voluptates?",
                        t.date = 1539917362,
                        t.title = "AnnouncementTitle",
                        t
                }
                ,
                e.fetchCommentData = function () {
                    return this.successResult(function (t) {
                        var n = new E.CommentListView;
                        n.comments = Array.from(Array(10).keys()).map(function (t) {
                            return e.createComment(t)
                        }),
                            t.commentListView = n
                    })
                }
                ,
                e.createComment = function (e) {
                    var t = new E.Comment;
                    return t.id = e,
                        t.index = e,
                        t.userName = "text" + e,
                        t.iconUrl = "http://via.placeholder.com/20x20",
                        t.isMyComment = !1,
                        t.alreadyLiked = e % 2 === 0,
                        t.numberOfLikes = 1e3 * Math.random(),
                        t.body = e % 2 === 0 ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque enim maiores molestiae nemo optio qui quibusdam quo recusandae vero. Beatae consequatur deleniti dicta maiores mollitia neque quaerat quo quos." : "test",
                        t.created = 1539917362,
                        t
                }
                ,
                e.fetchViewerData = function () {
                    return this.successResult(function (t) {
                        var n = new E.MangaViewer;
                        n.titleId = 1,
                            n.sns = e.createSns(),
                            n.chapterId = 0,
                            n.chapters = Array.from(Array(3).keys()).map(function (t) {
                                return e.createChapter(t)
                            }),
                            n.pages = Array.from(Array(30).keys()).map(function (t) {
                                return e.createPage(t, Mn.image)
                            }),
                            n.pages.push(e.createPage(0, Mn.banner)),
                            n.pages.push(e.createPage(0, Mn.ad)),
                            n.pages.push(e.createPage(0, Mn.ad)),
                            n.pages.push(e.createPage(0, Mn.last)),
                            n.titleName = "MUHYO & ROJI'S BUREAU OF SUPERNATURAL INVESTIGATION",
                            n.chapterName = "#000",
                            n.isVerticalOnly = !1,
                            n.startFromRight = !1,
                            t.mangaViewer = n
                    })
                }
                ,
                e.createPage = function (t, n) {
                    var a = new E.Page;
                    switch (n) {
                        case Mn.image:
                            var i = new E.Page.MangaPage;
                            i.type = 5 === t ? E.Page.PageType.RIGHT : 6 === t ? E.Page.PageType.LEFT : E.Page.PageType.SINGLE,
                                i.imageUrl = this.imageOf(1440, 2407, t),
                                a.mangaPage = i;
                            break;
                        case Mn.webview:
                            break;
                        case Mn.ad:
                            a.advertisement = new E.AdNetworkList({
                                adNetworks: [new E.AdNetwork({
                                    adsense: new E.AdNetwork.Adsense({
                                        unitID: "6996570260"
                                    })
                                })]
                            });
                            break;
                        case Mn.last:
                            a.lastPage = e.createLastPage();
                            break;
                        case Mn.banner:
                            a.bannerList = e.createBannerList();
                            break
                    }
                    return a
                }
                ,
                e.createLastPage = function () {
                    var t = new E.Page.LastPage;
                    return t.chapterType = E.Page.ChapterType.NOSEQUENCE,
                        t.currentChapter = e.createChapter(0),
                        t.isSubscribed = !0,
                        t.nextChapter = e.createChapter(0),
                        t.topComments = null,
                        t.nextTimeStamp = 1539917362,
                        t
                }
                ,
                e.createBannerList = function () {
                    var t = new E.Page.BannerList;
                    return t.banners = Array.from(Array(3).keys()).map(function (t) {
                        switch (t % 4) {
                            case 0:
                                return e.createBanner(320, 100, "viewer");
                            case 1:
                                return e.createBanner(320, 100, "detail");
                            case 2:
                                return e.createBanner(320, 100, "webview");
                            case 3:
                                return e.createBanner(320, 100, "web")
                        }
                    }),
                        t
                }
                ,
                e.getSubscribeListStub = function () {
                    return this.successResult(function (t) {
                        var n = new E.SubscribedTitlesView;
                        n.titles = Array.from(Array(27).keys()).map(function (t) {
                            return e.createTitle(t)
                        }),
                            t.subscribedTitlesView = n
                    })
                }
                ,
                e.titleDetail = function () {
                    var e = this;
                    return this.successResult(function (t) {
                        var n = new E.TitleDetailView;
                        n.title = e.createTitle(1),
                            n.title.portraitImageUrl = e.imageOf(165, 250),
                            n.title.landscapeImageUrl = e.imageOf(520, 390),
                            n.titleImageUrl = e.imageOf(520, 390),
                            n.sns = e.createSns(),
                            n.nonAppearanceInfo = "non appearance info",
                            n.numberOfViews = 1e5,
                            n.isSubscribed = !0,
                            n.banners = [],
                            n.updateTiming = E.TitleDetailView.UpdateTiming.NOT_REGULARLY;
                        for (var a = 0; a < 5; a++)
                            n.banners.push(e.createBanner(160, 50));
                        for (a = 10; a >= 0; a--)
                            n.firstChapterList.push(e.createChapter(a + 10));
                        for (a = 10; a >= 0; a--)
                            n.lastChapterList.push(e.createChapter(a));
                        n.recommendedTitleList = Array.from(Array(3).keys()).map(function (t) {
                            return e.createTitle(t)
                        }),
                            n.nextTimeStamp = 1539917362,
                            n.viewingPeriodDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi blanditiis dignissimos dolorem ea eaque error eum facilis fugit id ipsum itaque nobis praesentium rerum soluta, ullam velit voluptate. Ut?",
                            n.overview = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi blanditiis dignissimos dolorem ea eaque error eum facilis fugit id ipsum itaque nobis praesentium rerum soluta, ullam velit voluptate. Ut?",
                            n.isSimulReleased = !0,
                            n.isSubscribed = !0,
                            n.rating = E.TitleDetailView.Rating.ALLAGE,
                            t.titleDetailView = n
                    })
                }
                ,
                e.unSubscribeStub = function () {
                    return this.successResult(function (e) { })
                }
                ,
                e.subscribeTitleStub = function () {
                    return this.successResult(function (e) { })
                }
                ,
                e.getAllTitlesStub = function () {
                    return this.successResult(function (t) {
                        var n = new E.AllTitlesView;
                        n.titles = Array.from(Array(80).keys()).map(function (t) {
                            return e.createTitle(t)
                        }),
                            t.allTitlesView = n
                    })
                }
                ,
                e.createTitleList = function () {
                    var t = new E.TitleList;
                    return t.listName = "Featured This Week | SAMPLE",
                        t.featuredTitles = Array.from(Array(27).keys()).map(function (t) {
                            return e.createTitle(t)
                        }),
                        t
                }
                ,
                e.createTitle = function (e) {
                    var t = new E.Title;
                    return t.author = "Eiichiro Oda",
                        t.portraitImageUrl = this.imageOf(165, 250, e),
                        t.landscapeImageUrl = this.imageOf(520, 390, e),
                        t.language = e % 2 ? E.Title.Language.ENGLISH : E.Title.Language.SPANISH,
                        t.name = "MUHYO & ROJI'S BUREAU OF SUPERNATURAL INVESTIGATION " + e,
                        t.titleId = e,
                        t.viewCount = 1e4 * e * Math.random(),
                        t
                }
                ,
                e.fetchFeaturedListStub = function () {
                    return this.successResult(function (t) {
                        var n = new E.FeaturedTitlesView;
                        n.mainBanner = e.createBanner(200, 100, "viewer"),
                            n.subBanner_1 = e.createBanner(),
                            n.subBanner_2 = e.createBanner();
                        var a = new E.FeaturedTitlesView.Contents;
                        a.banner = e.createContentsBanner();
                        var i = new E.FeaturedTitlesView.Contents;
                        i.titleList = e.createTitleList(),
                            n.contents = [i, a, i, i, a],
                            t.featuredTitlesView = n
                    })
                }
                ,
                e.createBanner = function (t, n, a) {
                    void 0 === t && (t = 200),
                        void 0 === n && (n = 100),
                        void 0 === a && (a = "web");
                    var i = new E.Banner;
                    return i.imageUrl = this.imageOf(t, n),
                        i.action = e.createTransitionAction(a),
                        i
                }
                ,
                e.createContentsBanner = function () {
                    var t = new E.Banner;
                    return t.imageUrl = this.imageOf(896, 280),
                        t.action = e.createTransitionAction("web"),
                        t
                }
                ,
                e.createTransitionAction = function (e) {
                    var t = new E.TransitionAction;
                    switch (t.method = E.TransitionAction.PresentationMethod.PUSH,
                    e) {
                        case "viewer":
                            t.url = "mangaplus://open/viewer?id=1";
                            break;
                        case "detail":
                            t.url = "mangaplus://open/detail?id=1";
                            break;
                        case "webview":
                            t.url = "mangaplus://open/webview?url=http://www.google.com";
                            break;
                        case "web":
                            t.url = "http://www.google.com"
                    }
                    return t
                }
                ,
                e.createChapter = function (e) {
                    var t = new E.Chapter;
                    return t.alreadyViewed = Math.random() > .5,
                        t.chapterId = e,
                        t.name = "#00" + e,
                        t.subTitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda beatae cumque, doloremque eligendi error eveniet facilis magni maiores minus molestiae nesciunt optio porro rerum sint temporibus ullam voluptate! Reprehenderit.",
                        t.startTimeStamp = 1539917362,
                        t.thumbnailUrl = this.imageOf(160, 100),
                        t.endTimeStamp = 1548860400,
                        t
                }
                ,
                e.createSns = function () {
                    var e = new E.Sns;
                    return e.body = "シェア文章",
                        e.url = "https://www.google.com/",
                        e
                }
                ,
                e.imageOf = function (e, t, n) {
                    return void 0 === n && (n = 0),
                        "http://via.placeholder.com/" + e + "x" + t + "?text=" + n
                }
                ,
                e.successResult = function (e) {
                    var t = new E.Response
                        , n = new E.SuccessResult;
                    return e(n),
                        t.success = n,
                        t
                }
                ,
                e.fetchTopData = function () {
                    return this.successResult(function (t) {
                        var n = new E.WebHomeView;
                        n.topBanners = Array.from(Array(5).keys()).map(function (t) {
                            switch (t % 4) {
                                case 0:
                                    return e.createBanner(320, 120, "viewer");
                                case 1:
                                    return e.createBanner(320, 120, "detail");
                                case 2:
                                    return e.createBanner(320, 120, "webview");
                                case 3:
                                    return e.createBanner(320, 120, "web")
                            }
                        }),
                            n.ranking = Array.from(Array(10).keys()).map(function (t) {
                                return e.createTitle(t)
                            }),
                            n.groups = Array.from(Array(5).keys()).map(function (t) {
                                return e.createUpdatedTitleGroup()
                            }),
                            t.webHomeView = n
                    })
                }
                ,
                e.createUpdatedTitleGroup = function () {
                    var t = new E.UpdatedTitleGroup;
                    return t.groupName = "UPDATED PAST 2 DAYS",
                        t.titles = Array.from(Array(7).keys()).map(function (t) {
                            return e.createUpdatedTitle(t)
                        }),
                        t
                }
                ,
                e.createUpdatedTitle = function (t) {
                    var n = new E.UpdatedTitle;
                    return n.title = e.createTitle(t),
                        n.chapterId = 0,
                        n.chapterName = "#000",
                        n.chapterSubTitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos ducimus ea earum enim, exercitationem fugiat id ipsum iure, minus odit optio quibusdam quo, recusandae sed tempora tenetur voluptatem voluptates?",
                        n.isLatest = t % 3 === 0,
                        n
                }
                ,
                e
        }()
            , Wr = Gr
            , Fr = n("9490")
            , Yr = n("24f8")
            , zr = n("c437")
            , Qr = "SESSION_ID_KEY"
            , $r = function () {
                function e() {
                    this.axios = Mr.a.create({
                        transformResponse: [function (e) {
                            return E.Response.decode(new Uint8Array(e))
                        }
                        ],
                        timeout: 1e4,
                        responseType: "arraybuffer",
                        withCredentials: !0,
                        httpAgent: new Fr["Agent"]({
                            keepAlive: !0
                        }),
                        httpsAgent: new Yr["Agent"]({
                            keepAlive: !0
                        }),
                        headers: {
                            "SESSION-TOKEN": e.getSessionId()
                        }
                    }),
                        this.axios.interceptors.response.use(function (e) {
                            return e.data.error ? Promise.reject(e.data) : e
                        }),
                        "stg" === Object({
                            NODE_ENV: "production",
                            BASE_URL: "/"
                        }).VUE_APP_ENVIRONMENT ? this.axios.defaults.baseURL = "https://jumpg-webapi-dev.tokyo-cdn.com/api" : "pre" === Object({
                            NODE_ENV: "production",
                            BASE_URL: "/"
                        }).VUE_APP_ENVIRONMENT ? this.axios.defaults.baseURL = "https://jumpg-webapi-pre.tokyo-cdn.com/api" : "stub" === Object({
                            NODE_ENV: "production",
                            BASE_URL: "/"
                        }).VUE_APP_ENVIRONMENT ? (this.axios.defaults.baseURL = "http://localhost:3000",
                            Wr.setStub(this.axios)) : this.axios.defaults.baseURL = "https://jumpg-webapi.tokyo-cdn.com/api"
                }
                return e.instance = function () {
                    return this._instance || (this._instance = new e),
                        this._instance
                }
                    ,
                    e.getSessionId = function () {
                        if (localStorage.getItem(Qr))
                            return localStorage.getItem(Qr);
                        var e = zr();
                        return localStorage.setItem(Qr, e),
                            e
                    }
                    ,
                    e.prototype.fetchCommentList = function (e) {
                        return this.get("/comment", {
                            chapter_id: e
                        })
                    }
                    ,
                    e.prototype.fetchSubscribeList = function () {
                        return this.get("/title_list/bookmark")
                    }
                    ,
                    e.prototype.unSubscribeTitle = function (e) {
                        return this.delete("/title_list/bookmark", {
                            title_id: e
                        })
                    }
                    ,
                    e.prototype.subscribeTitle = function (e) {
                        return this.put("/title_list/bookmark", {
                            title_id: e
                        })
                    }
                    ,
                    e.prototype.fetchAllTitles = function () {
                        return this.get("/title_list/all")
                    }
                    ,
                    e.prototype.fetchTitleDetail = function (e) {
                        return this.get("/title_detail", {
                            title_id: e
                        })
                    }
                    ,
                    e.prototype.fetchTopData = function (e) {
                        return this.get("/web/web_home", {
                            lang: e
                        })
                    }
                    ,
                    e.prototype.fetchViewerData = function (e) {
                        return this.get("/manga_viewer", {
                            chapter_id: e,
                            split: "yes",
                            img_quality: "high"
                        })
                    }
                    ,
                    e.prototype.fetchServiceAnnouncementsData = function (e) {
                        return this.get("/web/announcement", {
                            lang: e
                        })
                    }
                    ,
                    e.prototype.fetchRanking = function () {
                        return this.get("/title_list/ranking")
                    }
                    ,
                    e.prototype.feedback = function (e, t) {
                        return this.post("/web/contact", {
                            subject: e,
                            body: t
                        })
                    }
                    ,
                    e.prototype.likeComments = function (e) {
                        return this.put("/comment_like", {
                            comment_id: e
                        })
                    }
                    ,
                    e.prototype.unlikeComments = function (e) {
                        return this.delete("/comment_like", {
                            comment_id: e
                        })
                    }
                    ,
                    e.prototype.post = function (e, t) {
                        return void 0 === t && (t = {}),
                            this.axios.post(e, {}, {
                                params: t
                            })
                    }
                    ,
                    e.prototype.get = function (e, t) {
                        return void 0 === t && (t = {}),
                            this.axios.get(e, {
                                params: t
                            })
                    }
                    ,
                    e.prototype.delete = function (e, t) {
                        return void 0 === t && (t = {}),
                            this.axios.delete(e, {
                                params: t
                            })
                    }
                    ,
                    e.prototype.put = function (e, t) {
                        return void 0 === t && (t = {}),
                            this.axios.put(e, {}, {
                                params: t
                            })
                    }
                    ,
                    e.prototype.fetchFeaturedList = function (e) {
                        return this.get("/featured", {
                            lang: e
                        })
                    }
                    ,
                    e
            }()
            , qr = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.message = "",
                        t.type = "report",
                        t.isSubmitted = !1,
                        t
                }
                return c["c"](t, e),
                    Object.defineProperty(t.prototype, "validation", {
                        get: function () {
                            return !(this.message.length <= 0 || this.messageCount > 500)
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "messageCount", {
                        get: function () {
                            return this.message.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.render = function (e) {
                        var t = this;
                        return e(Ur, {
                            attrs: {
                                type: this.type,
                                message: this.message,
                                isSubmitted: this.isSubmitted,
                                disabled: !this.validation
                            },
                            on: {
                                changeType: function (e) {
                                    t.type = e.target.value
                                },
                                changeMessage: function (e) {
                                    t.message = e.target.value
                                },
                                submit: function (e) {
                                    $r.instance().feedback(t.type, t.message).then(function (e) {
                                        t.isSubmitted = !0
                                    }).catch(function (e) {
                                        alert("Error! Please wait a moment")
                                    })
                                }
                            }
                        })
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , Kr = qr
            , Xr = n("2a28")
            , Jr = n.n(Xr)
            , Zr = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.titles = [],
                        t.inputText = "",
                        t
                }
                return c["c"](t, e),
                    t.prototype.created = function () {
                        var e = this;
                        this.inputText = this.$route.query.keyword,
                            0 === this.$store.state.mangaList.model.titles.length && this.$store.dispatch("mangaList/fetchData").catch(function (t) {
                                D(e.$router, t)
                            })
                    }
                    ,
                    t.prototype.mounted = function () {
                        this.$el.querySelector("." + Jr.a.searchForm).focus()
                    }
                    ,
                    Object.defineProperty(t.prototype, "currentTitles", {
                        get: function () {
                            var e = this;
                            return this.$store.state.mangaList.model.titles.filter(function (t) {
                                return t.language === E.Title.Language.ENGLISH ? e.$store.state.language.contentsStatus.en : t.language === E.Title.Language.SPANISH ? e.$store.state.language.contentsStatus.es : void 0
                            }).filter(function (t) {
                                return t.name.toLowerCase().includes(e.inputText.toLowerCase()) || t.author.toLowerCase().includes(e.inputText.toLowerCase())
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.render = function (e) {
                        var t = this;
                        return e("div", [e("div", {
                            class: Jr.a.searchContainer
                        }, [e("input", {
                            class: Jr.a.searchForm,
                            attrs: {
                                placeholder: this.$t("SEARCH")
                            },
                            domProps: {
                                value: this.inputText
                            },
                            on: {
                                input: function (e) {
                                    var n = e.target;
                                    t.inputText = n.value
                                }
                            }
                        }), e("img", {
                            class: Jr.a.icon,
                            attrs: {
                                src: n("77b0")
                            }
                        })]), e("div", {
                            class: Jr.a.divider
                        }), function () {
                            return 0 !== t.currentTitles.length ? e("div", {
                                class: Jr.a.allTitles
                            }, [t.currentTitles.map(function (t) {
                                return e(gt, {
                                    attrs: {
                                        title: t
                                    }
                                })
                            })]) : e("p", {
                                class: Jr.a.nothingMatched
                            }, [t.$t("NO_RESULT")])
                        }()])
                    }
                    ,
                    t = c["b"]([r()({
                        components: {
                            AllTitle: gt
                        }
                    })], t),
                    t
            }(u["c"])
            , eo = Zr
            , to = n("92b0")
            , no = n.n(to)
            , ao = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        return e("div", {
                            class: no.a.wrapper
                        }, [e("router-view")])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , io = ao
            , ro = function () {
                if (!localStorage)
                    return "en";
                var e = localStorage.getItem("service");
                return e && "es" === e ? "es" : "en" === navigator.language ? "en" : "es" === navigator.language ? "es" : "en"
            }()
            , oo = function () {
                if (!localStorage)
                    return {
                        en: !0,
                        es: !1
                    };
                var e = localStorage.getItem("contents");
                if (!e)
                    return "en" === navigator.language ? {
                        en: !0,
                        es: !1
                    } : "es" === navigator.language ? {
                        en: !1,
                        es: !0
                    } : {
                                en: !0,
                                es: "es"
                            };
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return {
                        en: !0,
                        es: !1
                    }
                }
            }()
            , so = {
                state: {
                    serviceStatus: ro,
                    contentsStatus: oo,
                    isShowSetting: !1
                },
                mutations: {
                    toggleSettingModal: function (e) {
                        e.isShowSetting = !e.isShowSetting
                    },
                    setServiceStatus: function (e, t) {
                        e.serviceStatus = t,
                            e.contentsStatus = {
                                en: "en" === t,
                                es: "es" === t
                            },
                            localStorage.setItem("service", e.serviceStatus),
                            localStorage.setItem("contents", JSON.stringify(e.contentsStatus))
                    },
                    setContentsStatus: function (e, t) {
                        e.contentsStatus = {
                            en: "en" === t ? !e.contentsStatus.en : e.contentsStatus.en,
                            es: "es" === t ? !e.contentsStatus.es : e.contentsStatus.es
                        },
                            localStorage.setItem("contents", JSON.stringify(e.contentsStatus))
                    },
                    hideSettingModal: function (e) {
                        e.isShowSetting = !1
                    }
                },
                actions: {
                    updateServiceLanguage: function (e, t) {
                        var n = e.commit
                            , a = e.dispatch;
                        n("setServiceStatus", t),
                            a("home/fetchData"),
                            a("featured/fetchData")
                    }
                }
            }
            , lo = so
            , co = E.WebHomeView
            , uo = {
                namespaced: !0,
                state: {
                    model: new co({
                        topBanners: [],
                        ranking: [],
                        groups: []
                    })
                },
                mutations: {
                    setModel: function (e, t) {
                        e.model = t
                    }
                },
                actions: {
                    fetchData: function (e) {
                        e.dispatch;
                        var t = e.commit
                            , n = (e.getters,
                                e.rootState);
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, $r.instance().fetchTopData("en" === n.language.serviceStatus ? "eng" : "esp")];
                                    case 1:
                                        return e = a.sent(),
                                            t("setModel", e.data.success.webHomeView),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , po = uo
            , mo = function (e) {
                function t(t, n) {
                    void 0 === n && (n = !1);
                    var a = e.call(this, t) || this;
                    return a.isRemoved = n,
                        a
                }
                return c["c"](t, e),
                    t
            }(E.Title)
            , ho = mo
            , go = {
                namespaced: !0,
                state: {
                    titles: [],
                    loading: !0,
                    shouldUpdate: !0
                },
                mutations: {
                    setModel: function (e, t) {
                        e.titles = t,
                            e.shouldUpdate = !1
                    },
                    finished: function (e) {
                        e.loading = !1
                    },
                    remove: function (e, t) {
                        e.titles[t].isRemoved = !0
                    },
                    undo: function (e, t) {
                        e.titles[t].isRemoved = !1
                    },
                    shouldUpdate: function (e) {
                        e.shouldUpdate = !0
                    },
                    start: function (e) {
                        e.loading = !0
                    }
                },
                actions: {
                    fetchData: function (e) {
                        e.dispatch;
                        var t = e.commit;
                        e.getters,
                            e.rootGetters;
                        return c["a"](this, void 0, void 0, function () {
                            var e, n;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return t("start"),
                                            [4, $r.instance().fetchSubscribeList()];
                                    case 1:
                                        return e = a.sent(),
                                            n = e.data.success.subscribedTitlesView.titles.map(function (e) {
                                                return new ho(e)
                                            }),
                                            t("setModel", n),
                                            t("finished"),
                                            [2]
                                }
                            })
                        })
                    },
                    subscribe: function (e, t) {
                        var n = e.commit
                            , a = e.state;
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, $r.instance().subscribeTitle(a.titles[t].titleId)];
                                    case 1:
                                        return e.sent(),
                                            n("undo", t),
                                            n("shouldUpdate"),
                                            [2]
                                }
                            })
                        })
                    },
                    unsubscribe: function (e, t) {
                        var n = e.commit
                            , a = e.state;
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, $r.instance().unSubscribeTitle(a.titles[t].titleId)];
                                    case 1:
                                        return e.sent(),
                                            n("remove", t),
                                            n("shouldUpdate"),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , fo = go
            , bo = E.FeaturedTitlesView
            , yo = {
                namespaced: !0,
                state: {
                    model: new bo({
                        contents: []
                    })
                },
                mutations: {
                    setModel: function (e, t) {
                        e.model = t
                    }
                },
                actions: {
                    fetchData: function (e) {
                        e.dispatch;
                        var t = e.commit
                            , n = (e.getters,
                                e.rootState);
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, $r.instance().fetchFeaturedList("en" === n.language.serviceStatus ? "eng" : "esp")];
                                    case 1:
                                        return e = a.sent(),
                                            t("setModel", e.data.success.featuredTitlesView),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , vo = yo
            , wo = E.AllTitlesView
            , Ao = {
                namespaced: !0,
                state: {
                    model: new wo({
                        titles: []
                    })
                },
                mutations: {
                    setModel: function (e, t) {
                        e.model = t
                    }
                },
                actions: {
                    fetchData: function (e) {
                        e.dispatch;
                        var t = e.commit;
                        e.getters,
                            e.rootGetters;
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, $r.instance().fetchAllTitles()];
                                    case 1:
                                        return e = n.sent(),
                                            t("setModel", e.data.success.allTitlesView),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , _o = Ao
            , ko = E.TitleRankingView
            , To = {
                namespaced: !0,
                state: {
                    model: new ko({
                        titles: []
                    })
                },
                mutations: {
                    setModel: function (e, t) {
                        e.model = t
                    }
                },
                actions: {
                    fetchData: function (e) {
                        e.dispatch;
                        var t = e.commit;
                        e.getters,
                            e.rootGetters;
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, $r.instance().fetchRanking()];
                                    case 1:
                                        return e = n.sent(),
                                            t("setModel", e.data.success.titleRankingView),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , So = To
            , Po = E.ServiceAnnouncementsView
            , Co = {
                namespaced: !0,
                state: {
                    model: new Po({
                        serviceAnnouncements: []
                    })
                },
                mutations: {
                    setModel: function (e, t) {
                        e.model = t
                    }
                },
                actions: {
                    fetchData: function (e) {
                        e.dispatch;
                        var t = e.commit
                            , n = (e.getters,
                                e.rootState);
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, $r.instance().fetchServiceAnnouncementsData("en" === n.language.serviceStatus ? "eng" : "esp")];
                                    case 1:
                                        return e = a.sent(),
                                            t("setModel", e.data.success.serviceAnnouncementsView),
                                            [2]
                                }
                            })
                        })
                    },
                    fetchWebviewData: function (e, t) {
                        e.dispatch;
                        var n = e.commit;
                        e.getters,
                            e.rootState;
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, $r.instance().fetchServiceAnnouncementsData(t)];
                                    case 1:
                                        return e = a.sent(),
                                            n("setModel", e.data.success.serviceAnnouncementsView),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , Oo = Co
            , Io = (n("7514"),
                {
                    namespaced: !0,
                    state: {
                        model: {}
                    },
                    mutations: {
                        setModel: function (e, t) {
                            a["default"].set(e.model, t.id, t.model)
                        },
                        like: function (e, t) {
                            if (e.model) {
                                var n = e.model[t.chapterId].comments.find(function (e) {
                                    return e.id === t.commentId
                                });
                                n.alreadyLiked = !0,
                                    n.numberOfLikes += 1
                            }
                        },
                        unlike: function (e, t) {
                            if (e.model) {
                                var n = e.model[t.chapterId].comments.find(function (e) {
                                    return e.id === t.commentId
                                });
                                n.alreadyLiked = !1,
                                    n.numberOfLikes -= 1
                            }
                        }
                    },
                    actions: {
                        fetchData: function (e, t) {
                            e.dispatch;
                            var n = e.commit;
                            e.getters,
                                e.rootGetters;
                            return c["a"](this, void 0, void 0, function () {
                                var e;
                                return c["d"](this, function (a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, $r.instance().fetchCommentList(t)];
                                        case 1:
                                            return e = a.sent(),
                                                n("setModel", {
                                                    id: t,
                                                    model: e.data.success.commentListView
                                                }),
                                                [2]
                                    }
                                })
                            })
                        },
                        like: function (e, t) {
                            var n = e.commit;
                            return c["a"](this, void 0, void 0, function () {
                                return c["d"](this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, $r.instance().likeComments(t.commentId)];
                                        case 1:
                                            return e.sent(),
                                                n("like", {
                                                    chapterId: t.chapterId,
                                                    commentId: t.commentId
                                                }),
                                                [2]
                                    }
                                })
                            })
                        },
                        unlike: function (e, t) {
                            var n = e.commit;
                            return c["a"](this, void 0, void 0, function () {
                                return c["d"](this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, $r.instance().unlikeComments(t.commentId)];
                                        case 1:
                                            return e.sent(),
                                                n("unlike", {
                                                    chapterId: t.chapterId,
                                                    commentId: t.commentId
                                                }),
                                                [2]
                                    }
                                })
                            })
                        }
                    }
                })
            , Lo = Io
            , Eo = {
                namespaced: !0,
                state: {
                    model: {},
                    isLoading: !1
                },
                mutations: {
                    setModel: function (e, t) {
                        u["c"].set(e.model, t.id, t.model)
                    },
                    subscribe: function (e, t) {
                        var n = e.model[t];
                        n.isSubscribed = !0,
                            u["c"].set(e.model, t, n)
                    },
                    unsubscribe: function (e, t) {
                        var n = e.model[t];
                        n.isSubscribed = !1,
                            u["c"].set(e.model, t, n)
                    },
                    setLoadingState: function (e, t) {
                        e.isLoading = t
                    }
                },
                actions: {
                    fetchData: function (e, t) {
                        e.dispatch;
                        var n = e.commit;
                        e.getters,
                            e.rootGetters;
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, $r.instance().fetchTitleDetail(t)];
                                    case 1:
                                        return e = a.sent(),
                                            n("setModel", {
                                                id: t,
                                                model: e.data.success.titleDetailView
                                            }),
                                            [2]
                                }
                            })
                        })
                    },
                    subscribe: function (e, t) {
                        var n = e.commit;
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return n("setLoadingState", !0),
                                            [4, $r.instance().subscribeTitle(t)];
                                    case 1:
                                        return e.sent(),
                                            n("subscribe", t),
                                            n("favorited/shouldUpdate", null, {
                                                root: !0
                                            }),
                                            n("setLoadingState", !1),
                                            [2]
                                }
                            })
                        })
                    },
                    unsubscribe: function (e, t) {
                        var n = e.commit;
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return n("setLoadingState", !0),
                                            [4, $r.instance().unSubscribeTitle(t)];
                                    case 1:
                                        return e.sent(),
                                            n("unsubscribe", t),
                                            n("favorited/shouldUpdate", null, {
                                                root: !0
                                            }),
                                            n("setLoadingState", !1),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , Do = Eo
            , No = {
                namespaced: !0,
                state: {
                    model: {}
                },
                mutations: {
                    setModel: function (e, t) {
                        var n = t.model.pages[t.model.pages.length - 1].lastPage
                            , a = {
                                model: t.model,
                                lastPage: n,
                                isSubscribed: n.isSubscribed
                            };
                        u["c"].set(e.model, t.id, a)
                    },
                    subscribe: function (e, t) {
                        var n = e.model[t];
                        n.isSubscribed = !0,
                            u["c"].set(e.model, t, n)
                    },
                    unsubscribe: function (e, t) {
                        var n = e.model[t];
                        n.isSubscribed = !1,
                            u["c"].set(e.model, t, n)
                    }
                },
                actions: {
                    fetchData: function (e, t) {
                        e.dispatch;
                        var n = e.commit;
                        e.getters,
                            e.rootGetters;
                        return c["a"](this, void 0, void 0, function () {
                            var e;
                            return c["d"](this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, $r.instance().fetchViewerData(t)];
                                    case 1:
                                        return e = a.sent(),
                                            n("setModel", {
                                                id: t,
                                                model: e.data.success.mangaViewer
                                            }),
                                            [2]
                                }
                            })
                        })
                    },
                    subscribe: function (e, t) {
                        e.dispatch;
                        var n = e.commit;
                        e.getters,
                            e.rooteGetters;
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, $r.instance().subscribeTitle(t.titleId)];
                                    case 1:
                                        return e.sent(),
                                            n("subscribe", t.chapterId),
                                            [2]
                                }
                            })
                        })
                    },
                    unsubscribe: function (e, t) {
                        e.dispatch;
                        var n = e.commit;
                        e.getters,
                            e.rooteGetters;
                        return c["a"](this, void 0, void 0, function () {
                            return c["d"](this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, $r.instance().unSubscribeTitle(t.titleId)];
                                    case 1:
                                        return e.sent(),
                                            n("unsubscribe", t.chapterId),
                                            [2]
                                }
                            })
                        })
                    }
                }
            }
            , Vo = No;
        u["c"].use(aa["a"]);
        var Ro = new aa["a"].Store({
            modules: {
                language: lo,
                home: po,
                favorited: fo,
                featured: vo,
                mangaList: _o,
                ranking: So,
                announcements: Oo,
                comments: Lo,
                detail: Do,
                viewer: Vo
            }
        })
            , xo = Ro
            , Uo = n("7090")
            , Bo = n.n(Uo)
            , Mo = u["c"].extend({
                functional: !0,
                render: function (e) {
                    return e("div", {
                        class: Bo.a.container
                    }, [e("img", {
                        attrs: {
                            src: n("b3d2"),
                            alt: ""
                        },
                        class: Bo.a.img
                    })])
                }
            })
            , Ho = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        return e(Mo)
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , jo = Ho
            , Go = n("283e")
            , Wo = n.n(Go)
            , Fo = n("d937")
            , Yo = n.n(Fo)
            , zo = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.lang = "en",
                        t
                }
                return c["c"](t, e),
                    t.prototype.created = function () {
                        this.$route.params.language ? this.lang = this.$route.params.language : this.lang = this.$i18n.locale
                    }
                    ,
                    t.prototype.render = function (e) {
                        return e("div", {
                            class: Yo.a.wrapper
                        }, [e("img", {
                            attrs: {
                                src: n("01c3"),
                                alt: "about"
                            },
                            class: Yo.a.item
                        })])
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , Qo = zo
            , $o = n("0284")
            , qo = n.n($o)
            , Ko = n("1c78")
            , Xo = n.n(Ko)
            , Jo = u["c"].extend({
                functional: !0,
                render: function (e) {
                    return e("div", {
                        class: Xo.a.container
                    }, [e("img", {
                        attrs: {
                            src: n("77bc"),
                            alt: ""
                        },
                        class: Xo.a.img
                    })])
                }
            })
            , Zo = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c["c"](t, e),
                    t.prototype.render = function (e) {
                        return e(Jo)
                    }
                    ,
                    t = c["b"]([r.a], t),
                    t
            }(u["c"])
            , es = Zo
            , ts = n("58ca")
            , ns = n("9483");
        Object(ns["a"])("/service-worker.js", {
            ready: function () {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered: function () {
                console.log("Service worker has been registered.")
            },
            cached: function () {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function () {
                console.log("New content is downloading.")
            },
            updated: function () {
                console.log("New content is available; please refresh.")
            },
            offline: function () {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function (e) {
                console.error("Error during service worker registration:", e)
            }
        }),
            a["default"].use(ts["a"]),
            a["default"].use(Wo.a),
            a["default"].use(o["a"]),
            a["default"].use(kt.a),
            a["default"].use(aa["a"]),
            a["default"].use(Zt["a"]);
        var as = [{
            path: "",
            redirect: "/main"
        }, {
            path: "/main",
            component: qi,
            children: [{
                path: "",
                redirect: "/updates"
            }, {
                path: "/error",
                component: Yn
            }, {
                path: "/updates",
                component: Jt
            }, {
                path: "/favorited",
                component: B
            }, {
                path: "/manga_list",
                component: At,
                children: [{
                    path: "",
                    redirect: "all"
                }, {
                    path: "all",
                    component: bt
                }, {
                    path: "hot",
                    component: ne
                }]
            }, {
                path: "/featured",
                component: me
            }, {
                path: "/titles/:id",
                component: ct
            }, {
                path: "/comments/:id",
                component: ta
            }, {
                path: "/faq",
                component: fr
            }, {
                path: "/announcement",
                component: Sr
            }, {
                path: "/feedback",
                component: Kr
            }, {
                path: "/maintenance",
                component: jo
            }, {
                path: "/about_us",
                component: Qo
            }, {
                path: "/search_result",
                component: eo
            }]
        }, {
            path: "/blocking",
            component: es
        }, {
            path: "/viewer/:chapterId",
            component: jn
        }, {
            path: "/webview",
            component: io,
            children: [{
                path: "/webview/announcement/:language",
                component: Sr
            }, {
                path: "/webview/faq/:language",
                component: fr
            }]
        }, {
            path: "*",
            redirect: "/error"
        }]
            , is = new o["a"]({
                mode: "history",
                routes: as,
                scrollBehavior: function (e, t, n) {
                    return n || {
                        x: 0,
                        y: 0
                    }
                }
            });
        is.beforeEach(function (e, t, n) {
            e.hash ? n(e.hash.split("#")[1]) : n()
        }),
            a["default"].use(qo.a, {
                id: "UA-132849856-1",
                router: is
            });
        var rs = na
            , os = new Zt["a"]({
                locale: ro,
                fallbackLocale: ro,
                messages: rs
            });
        a["default"].config.productionTip = !1,
            new a["default"]({
                i18n: os,
                store: xo,
                render: function (e) {
                    return e(f)
                },
                router: is,
                components: {
                    App: f
                }
            }).$mount("#app")
    },
    d630: function (e, t, n) {
        e.exports = {
            container: "styles-module_container_3Ng4k",
            flexContainer: "styles-module_flexContainer_2BcQU",
            item: "styles-module_item_19Jr0"
        }
    },
    d682: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAArlBMVEUAAAD/3AD/4gD/2AD/2AD/2AD/3AD/2AD/2AD/4wD/2AD/4QD/3AD/2AD/3QD/2AD/2AD/2AD/2gD/4wD/2AD/2AD/2QD/2QD/2AD/2AD/2QD/2QD/2gD/2AD/2AD/2AD/2AD/2AD/2AD/2AD/2QD/2AD/2QD/2AD/2QD/2AD/2QD/2AD/2AD/2AD/2AD/2AD/2AD/2gD/2QD/3AD/2AD/2AD/2QD/2QD/1wD/1wAJyLz3AAAAOXRSTlMAAwadjFYV/PQM+RAlgRnw2cUrCeCGXErovHlwNtGrpeTKt3RrZiHdQLNR1WGwn5HsRDEdwJY8fc2yGc0OAAAHOUlEQVR42uzZ6WKiMBQF4IMboAjivrY67ktr7X7e/8WmMy0I5dIQtdM/8/2m99Qkl8SI//7T4dzj5/Sr+DmTLX7MA1nHTxmQL/gWhgEVnxxByYC+5xUUXJOkA4XhAfr2eyjM+GYKhVYe+ppjKPT4ZgKFWteAriH5jC+VTP7xgC/VyRV0tciClHg041/90hGSquQeumpkE0mHLlPddZC0JcfQVOebe+mj/2KKnoskh1TMnzxaZAuSQZkCs29A0OebAvRs+aYG0X2NCcshRK9804QWh3/VIbJv+cm1DdGCfw2htCqGbj9qFkMHRBU9Rli7tDp5oY7M7THV4wNiFmOGuk72Ov4CKYy+SZH5YiCuYTFUruCTaZkis2og3XBJQTPZKxtGtDPWGSvedZVrJlxVkBB77AYJtlDnpgKVncUYa46knPc+4OX3R2wktT3GlGfIwHllxKgOQeejuT9avijWmTBiW0cmuSVDzQYk+ffmDlr+Sq5TY2gs1pH3yiMXAuOOtHbHlrfE0pVonQWymTNiBsGBfHXClvfJDQQ7RkyRTY8RjxA8sZBDyGiZtxCsGeFDJo9W833mzRISjFEHMattDgl2+b1OTZ4/2e6juT9adS78e4lC0iGmHdS5TZ0/ebSsXdjyPZzoJnxJtD15/uTRGjnHljcrOIltHV8Si4k4f+Jo7XNhqxbIHU5SJJ8a0TpzqF3Fz4Gd7hoidZ1N/OTZg1Jj7SLGXdsQqOs8IKaUYV9pGPgsPdy2deucz36eF9bbsWeS9MbbdWG+quBfaBxavskEc9I6NPC9VrceU1nXBwPfpVRtUmHcKuE7uAWLGVj7B1yaXSgzo/JTBRfVHlNDd4fLWfSoyXdwIRuP2qw2LiG350nyDZyt4lNg+fnpZjV0nPvVZpp/9Ch4dXGmhy0T/JfnHGKMYd9nwtLBWeqJVd6sOhAtXpaJVX+PMzhdxm3bBlIZxRHjvDpO5jYZMy4aqsb4/BcLnKgyYpRZsKHUaJUZVSvhJEZPuPJRq9cY5edwiqrwJV2g+mpewAlWJiOq0NBnVAfaSl0emTNo2Zk8unOh65YRbWjaRNOvoOmZEVNom58x8Mbo3CXzwqNaDjpmPOoZOMWaR31oyEXvF12cpNJk6K5x4ox1INBdNgNkZiwzLdXF9a+AWDzP0DiHrIoMeS7SzC2G8hCU7hjaaawV9VJxf5GKcAwYeoT+PZxnQ9b2qA5vdPXv4QbKV3rphswQjql+t/kMlEuQbLrMFm5bDGwz38MFbhS34qpwRB51kUWHoQ0EPWYPP+huTnsGvBwEE41woxt7RG3EwBpfhj9eyZXlcV8iA6MsvBSFcGuGgjp8zpANNYeh+y/CHxcQwhXVNNabmUsNtwZApnBYDBShNmWghrRw30HW8FetM+hesd4wsQYGModfi8+oT45PEO0dIHt4S+sceeyfFlLohPcZ+AW141bZv0T4jAFfa1uZXSJ8x8BI67elqU64+i0zgdqN1BvqcHXn9iCTe6NwifBqZH9We2Lgd/v22psoEAVg+IBWEMQiCigFW8Vbbb1UtPb8/z+2yW52BljtMBdtsuH5jm+iHAwzsFURpx/3DBR7MHsq4vQU2gFbQP/OVcQHueFhi5HoysfbSHwAm43EWj7+gUQGFQzpxV0+Ts8gE4Br0F35+ISOOe+9eUc2nhmcdw0eEr5sPEIiBuD70Qey8Tc6txpU0kAilIuvkHjmX1LoycWnAgscSyRWMvEYiaEmsOrak4lPRZbTFhYS7+LxBySMjtDa594WjbdfxFZAOwbzOHa8gdQBOIyRmovFA6RegUfHQsI6XJ3Jp78+oMwzkTAOwMUv7NJI7g3tgE9/ILVLYydIvbSBU4g5SRe4tCaY8wDcTuI7k5mLOc/Ar59gzvATKotfMMdtg4COiTlGBBewnwK3PBCyNjBvuoAKuhssCEDQHAvMSAcGLTWxIAVhZyxy3/Vv04GLRU2Q0MSSwcyGK+zZEktOICXCMmu8bl+YjXBsYZkDkujOJGX1nLCjkS+7EzpHUi7sgUoL93iR5U5Gm81o4lp40eMaFMh6KGCyACU0H7ntdFAl/kIuyScopM0esTIz1UCtll8xbza7oJ593iPTo9+C2+gHUwO/YYyCNtxQ92lk4kXWKM3g5vSV8+oamGMsp85Kh7vRvTCYp46TzoLQ0+F/pYkfIt/eOzZwsaOhripOrhwc1yOFcUTrdIBKvJ2JqDL+h+t7zLLzhohq44TrxDpcoR9IWXGcspLGLO6XuvG88WUhoTZeZgyS42a7O5+b280xGRhIqI8z1fE6XsfreB2v4wriZpSaPxV/XQBk4x+JD9bwW7i8Z7z8gkPft+4b73mQ4x3vGN/PoSQY3iu+bcE/7NNd4m8ruChObh43I5254qw+Tkf7umx8izgdbYZwqTzO9+6S6jgdbTbvqDxOR5stGKqNb1vAwT4pjJPRrixOdFBVh1pNkV/Sglg88IeFvgAAAABJRU5ErkJggg=="
    },
    d72e: function (e, t, n) {
        e.exports = {
            badge: "styles-module_badge_2AnR1"
        }
    },
    d775: function (e, t, n) {
        e.exports = {
            title: "Comments-module_title_2liw6",
            commentsHeader: "Comments-module_commentsHeader_2DY3D",
            leaveBtn: "Comments-module_leaveBtn_1hM8H",
            message: "Comments-module_message_5Jt9x",
            comments: "Comments-module_comments_3IVW0"
        }
    },
    d937: function (e, t, n) {
        e.exports = {
            item: "styles-module_item_30DgJ",
            wrapper: "styles-module_wrapper_1Ic9M"
        }
    },
    dd7f: function (e, t, n) {
        e.exports = {
            triangle: "styles-module_triangle_2e2tQ"
        }
    },
    eb35: function (e, t, n) {
        e.exports = {
            titleNoCheck: "styles-module_titleNoCheck_1RSbO",
            titleChecked: "styles-module_titleChecked_BQXwk",
            titleText: "styles-module_titleText_2lpJn",
            title: "styles-module_title_25DO8",
            body: "styles-module_body_ZM_f-"
        }
    },
    ec71: function (e, t, n) {
        e.exports = {
            contents: "SubscribedTitle-module_contents_2S_dW",
            imgWrapper: "SubscribedTitle-module_imgWrapper_usHUo",
            image: "SubscribedTitle-module_image_2U_La",
            removedMessage: "SubscribedTitle-module_removedMessage_3DigS",
            btn: "SubscribedTitle-module_btn_22S2b",
            removed: "SubscribedTitle-module_removed_2Alyi"
        }
    },
    eda8: function (e, t, n) {
        e.exports = {
            title: "UpdatedTitle-module_title_2KlMr",
            titleImage: "UpdatedTitle-module_titleImage_3DBmi",
            titleDescription: "UpdatedTitle-module_titleDescription_Cf0hO",
            titleName: "UpdatedTitle-module_titleName_1QO_s",
            author: "UpdatedTitle-module_author_1ltec",
            titleWrapper: "UpdatedTitle-module_titleWrapper_2EQIT",
            chapter: "UpdatedTitle-module_chapter_XrLgd",
            chapterTitleWrapper: "UpdatedTitle-module_chapterTitleWrapper_3rnA_",
            chapterTitle: "UpdatedTitle-module_chapterTitle_kZUrz",
            chapterDescription: "UpdatedTitle-module_chapterDescription_riZF7",
            latest: "UpdatedTitle-module_latest_2HLFG"
        }
    },
    f0e0: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA+/j9gI4oBPPUkbqI6Mu2f/2BYUcAAAC8SURBVGje7dhLCkMhEETR6nT8vvzc/2YzlKDwAumCDOrOBKmDU6GU+iynVseP1ZYy9pVkIyTrZbv/HGEdO+E2AutYyhYJWOY8YJYW4BELtAW4xwJ1AS4jNgECBAgQIEBAFDAvnZ0FxAAm4C+BbxMgQIAAAQIExAEeu1/ZQGMDiQxYJgMdXOAoVMB6AQeY3/vnwBXROXkfTt6Hk/fh5H04eR9O3oeT98HeB3sf7H2w98HeB3sf7H28oJRi9QZxXUh+1+m78QAAAABJRU5ErkJggg=="
    },
    f6a5: function (e, t, n) {
        e.exports = {
            title: "HorizontalTitleList-module_title_1nID2",
            horizontalList: "HorizontalTitleList-module_horizontalList_3eVz7",
            rightCursor: "HorizontalTitleList-module_rightCursor_o5OUq",
            leftCursor: "HorizontalTitleList-module_leftCursor_B1px5",
            image: "HorizontalTitleList-module_image_3C1HQ",
            item: "HorizontalTitleList-module_item_2s8up",
            itemListWrapper: "HorizontalTitleList-module_itemListWrapper_23ST9",
            itemList: "HorizontalTitleList-module_itemList_1kB_K"
        }
    },
    f6ca: function (e, t, n) {
        e.exports = {
            outerWrapper: "Viewer-module_outerWrapper_1_nd2",
            viewerContainer: "Viewer-module_viewerContainer_iCeeB",
            wrapper: "Viewer-module_wrapper_11OpA",
            slider: "Viewer-module_slider_3iqpi",
            footer: "Viewer-module_footer_22XOt",
            appear: "Viewer-module_appear_1BZwO",
            hidden: "Viewer-module_hidden_2BlF7",
            pageNumber: "Viewer-module_pageNumber_2Ma3Q",
            chapterContainer: "Viewer-module_chapterContainer_2FTyl",
            thumbnailContainer: "Viewer-module_thumbnailContainer_fu9iS",
            nextChapterBtn: "Viewer-module_nextChapterBtn_MLwVx",
            nextChapterContainer: "Viewer-module_nextChapterContainer_yobGl",
            nextChapterThumbnail: "Viewer-module_nextChapterThumbnail_31VQc",
            btn: "Viewer-module_btn_2Qqqj",
            subscribeBtn: "Viewer-module_subscribeBtn_1P5jq",
            default: "Viewer-module_default_2Db0r",
            done: "Viewer-module_done_2ijww",
            commentsBtn: "Viewer-module_commentsBtn_12WKC",
            cautionContainer: "Viewer-module_cautionContainer_1laqP",
            cautionImage: "Viewer-module_cautionImage_1sZwu",
            bannerContainer: "Viewer-module_bannerContainer_rSJE0",
            bannerImg: "Viewer-module_bannerImg_29B42",
            banner: "Viewer-module_banner_2iWA8",
            announce: "Viewer-module_announce_14wJs",
            comming: "Viewer-module_comming_3yiP2",
            date: "Viewer-module_date_22SZp",
            mayChange: "Viewer-module_mayChange_3eVrK",
            latestWrapper: "Viewer-module_latestWrapper_29vEt",
            toastHorizontal: "Viewer-module_toastHorizontal_zcLMp",
            fadeIn: "Viewer-module_fadeIn_B8Q8y",
            toastVertical: "Viewer-module_toastVertical_3zUwQ",
            toastHidden: "Viewer-module_toastHidden_3spzt",
            toast: "Viewer-module_toast_80iPl",
            modeIcon: "Viewer-module_modeIcon_1le6x",
            mode: "Viewer-module_mode_2ePS_",
            appBannerWrapper: "Viewer-module_appBannerWrapper_3Zl3L",
            appBanner: "Viewer-module_appBanner_pZHQm"
        }
    },
    f877: function (e, t, n) {
        e.exports = {
            gridContainer: "UpdatedTitles-module_gridContainer_mw8H9"
        }
    },
    fd5c: function (e, t, n) {
        e.exports = n.p + "img/img_simulrelease@2x.6f450e50.png"
    }
});
