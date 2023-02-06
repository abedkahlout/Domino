var ua = navigator.userAgent,
    $win = $(window),
    $doc = $(document),
    $html = $("html"),
    $body = $("body"),
    $res = 950,
    $g = gsap,
    $gs = ScrollTrigger,
    nn = Linear.easeNone,
    exo = Expo.easeOut,
    exi = Expo.easeInOut,
    $y = 0,
    $x = 0,
    $scrollTo = false,
    $ifScrollH = $("[data-horizontal]").length,
    yApp = 0;

    // toggleActions
 




function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}
class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
    transformDelta(delta, fromEvent) {
        if (!/wheel/.test(fromEvent.type)) {
            return delta;
        }
        const { x, y } = delta;
        return { y: 0, x: Math.abs(x) > Math.abs(y) ? x : y };
    }
}
_defineProperty(HorizontalScrollPlugin, "pluginName", "horizontalScroll");

if ($ifScrollH) {
    if ($win.width() > $res) {
        Scrollbar.use(HorizontalScrollPlugin);
        $html.addClass("horiz");
        var $vertical = false;
        $gs.defaults({ horizontal: true });
    } else {
        Scrollbar.use();
        $html.addClass("verti");
        var $vertical = true;
    }
} else {
    Scrollbar.use();
    $html.addClass("verti");
    var $vertical = true;
}

// point on mouse cursor
$cursor = {
    cur: $("[data-cursor]"),
    cur1: $("[data-cursor] .cur1"),
    cur2: $("[data-cursor] .cur2"),
    classCursor: function () {
        $("[data-cc]").each(function () {
            var $t = $(this);
            var c = $t.data("cc");
            $t.on({
                mouseover: function () {
                    $body.addClass(c);
                },
                mouseleave: function () {
                    $body.removeClass(c);
                },
            });
        });
    },
    init: function () {
        var t = this;
        t.classCursor();
        $doc.on({
            mousemove: function (e) {
                var cx = e.pageX;
                var cy = e.pageY;
                $g.to(t.cur1, 0, { left: cx, top: cy });
                $g.to(t.cur2, 0.15, { left: cx, top: cy });
            },
        });
    },
};


var $s = Scrollbar.init(document.querySelector("#app"), {  alwaysShowTracks: false, delegateTo: document });
if ($("#crea").length && $("#crea .rc").length) {
    $("#crea .rc").each(function () {
        $screa = Scrollbar.init(this, {  alwaysShowTracks: false });
    });
}
$("#smooth-scrollbar-style").remove();


$gs.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            $s.scrollTop = value;
        }
        return $s.scrollTop;
    },
    scrollLeft(value) {
        if (arguments.length) {
            $s.scrollLeft = value;
        }
        return $s.scrollLeft;
    },
});
$s.addListener($gs.update);
$g.defaults({ ease: nn });
$s.addListener(function (status) {
    $y = status.offset.y;
    $x = status.offset.x;
});
















// screen laptop k and m ainmation
var nwe = $(".wew > div").length;
var we = $g.timeline({ paused: true, repeat: -1 });
we.staggerFrom(".wew > div:not(.active)", 1, { y: "100%", ease: exi, yoyo: true }, 1, "a");
we.staggerTo(".wew > div", 1, { y: "-100%", ease: exi, yoyo: true }, 1, "a");
we.to(".wew > div:first-child", 0, { y: "100%", delay: nwe - 1, yoyo: true }, "a");
we.to(".wew > div:first-child", 1, { y: "0%", delay: nwe - 1, ease: exi, yoyo: true }, "a");


// items in screen laptop
// items in screen laptop
var an = $g.timeline({ paused: true, repeat: -1 });
an.to(".itemScreenCon", 15, { y: "-140%", delay: 2 }, "a");
an.from(".itemHeader", 2, { width: "0%" }, "a");
an.staggerFrom(".itemScreenCon .itemPart1 div", 0.5, { autoAlpha: 0, delay: 0.3, ease: exo }, 0.2, "a");
an.staggerFrom(".itemScreenCon .itemLinks div", 1.5, { width: "0%", delay: 0.5, ease: exo }, 0.2, "a");
an.from(".itemScreenCon .itemSubTitle", 1.5, { width: "0%", delay: 0.8, ease: exo }, "a");
an.staggerFrom(".itemScreenCon .itemTitle", 1.5, { width: "0%", delay: 1, ease: exo }, 0.2, "a");
an.from(".itemScreenCon .sideSection", 1.5, { height: "0%", delay: 1.5, ease: exo }, "a");
an.staggerFrom(".itemScreenCon .sideSectionC li", 1.3, { width: "0%", delay: 1.9, ease: exo }, 0.2, "a");
an.to(".itemScreenCon .sideSection", 1.5, { left: "80%", delay: 2.5, ease: exo }, "a");
an.to(".itemScreenCon .sideSectionC", 1.5, { left: "81%", delay: 2.6, ease: exo }, "a");
an.from(".itemScreenCon .img1", 1.7, { width: "0%", delay: 2.8, ease: exo }, "a");
an.from(".itemScreenCon .part1", 1.5, { height: "0%", delay: 4, ease: exo }, "a");
an.staggerFrom(".itemScreenCon .articleBlock div", 1.3, { width: "0%", delay: 4.3, ease: exo }, 0.2, "a");
an.staggerTo(".itemScreenCon .articleBlock .lastLine ~ div", 1.1, { left: "110%", delay: 9.5, ease: exo }, 0.05, "a");
an.from(".itemScreenCon .img2", 1.2, { width: "0%", delay: 10.5, ease: exo }, "a");
an.to(".itemScreenCon", 1, { opacity: 0, delay: 15 }, "a");
an.timeScale(1);

function $afterLoad() {
    if ($html.data("load") != true) {

        // trigger form screen with item
        if ($("#welcomeSection").length) {
            var t = $g.timeline({
                onComplete: function () {
                    we.play();
                    an.play();
                },
            });
            t.staggerFromTo(".wem > div > div", 1.3, { y: "100%" }, { y: "0%", ease: exi }, 0.2, "a");
            t.fromTo("#welcomeSection .tc", 2, { scale: 0, rotation: 0, autoAlpha: 0 }, { scale: 1, rotation: -180, autoAlpha: 1, ease: exi }, "a");
            t.fromTo("#welcomeSection .h1", 2, { autoAlpha: 0 }, { autoAlpha: 1, ease: exi }, "a");
            var t = $g.timeline({
                scrollTrigger: {
                    trigger: "#welcomeSection",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                    onLeave: function () {
                        we.pause();
                        an.pause();
                    },
                    onEnterBack: function () {
                        we.play();
                        an.play();
                    },
                },
            });
            t.to("#welcomeSection .wec", 1, { y: "-25%" }, "a");
            t.to("#welcomeSection .screen-c", 1, { x: "25%" }, "a");
            // t.to("#welcomeSection .kb", 1, { x: "-100%", y: "30%" }, "a");
            // t.to("#welcomeSection .ms", 1, { x: "-200%", y: "-50%" }, "a");
            t.to("#welcomeSection .kb", 1, { x: "-100%", y: "30%" }, "a");
            t.to("#welcomeSection .ms", 1, { x: "-200%", y: "-50%" }, "a");
            t.to("#welcomeSection .wec, #welcomeSection .screen-c", 1, { opacity: 0, delay: 0.4 }, "a");
        }


        // seconde screen
        
        if ($("#serviceSection").length) {
            $g.from("#serviceSection .circ", 1, { rotation: 90, scrollTrigger: {
                trigger: "#serviceSection",
                start: "top bottom",
                end: "top top",
                scrub: true }
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#serviceSection",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onEnter: function () {
                        $("#serviceSection .circlePart").removeClass("fx");
                    },
                    onLeaveBack: function () {
                        $("#serviceSection .circlePart").addClass("fx");
                    },
                },
            });
            
            // icon
            $tl.to("#serviceSection .containerCircles", 1, { rotation: -450 }, "a");
            $tl.to('#serviceSection .round svg',1,{rotation:450},'a')
            
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#serviceSection",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true }
                });
            $tl.staggerTo("#serviceSection .round > div > div", 0.25, { width: "100%", height: "100%" }, 0.25, "a");

            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#serviceSection",
                    start: "top top",
                    end: "bottom top",
                    scrub: true }
                });
            $tl.staggerTo("#serviceSection .round > div > div", 0.25, { width: "5%", height: "5%" }, 0.25, "a");
            $tl.staggerTo("#serviceSection .round svg", 0.25, { opacity: 0, scale: 0 }, 0.25, "a");

            var $tl = $g.timeline({ scrollTrigger: { trigger: ".PlatformSection", start: "top bottom", end: "bottom bottom", scrub: true } });
            if ($win.width() > 950) {
                $tl.to("#serviceSection .circlePart", 0.25, { paddingLeft: "50%" }, "a");
                $tl.to("#serviceSection .circlePart > div", 0.25, { y: "0%" }, "a");
                $tl.to("#serviceSection .cir", 0.25, { rotation: -150, x: "-50%" }, "a");
            } 
            else {
                $tl.to("#serviceSection .circlePart", 0.25, { paddingLeft: "0" }, "a");
                $tl.to("#serviceSection .circlePart > div", 0.25, { y: $win.outerHeight() / 2 - $("#serviceSection .circlePart").outerHeight() / 2 }, "a");
                $tl.to("#serviceSection .cir", 0.25, { rotation: -150, x: "0" }, "a");
            }
            $tl.to("#serviceSection .blockCircle:nth-child(2) > div, #serviceSection .blockCircle:nth-child(4) > div", 0.25, { height: "0%" }, "a");
            $tl.to("#serviceSection .blockCircle:nth-child(1) > div, #serviceSection .blockCircle:nth-child(3) > div", 0.25, { width: "0%" }, "a");
            // seconde screen


            // third screen
            $g.to("#serviceSection .blockCircle > div", 1, { scale: 0, scrollTrigger: {
                trigger: ".PlatformSection",
                start: "top top",
                end: "bottom top",
                scrub: true }
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".PlatformSection",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onEnter: function () {
                        $(".PlatformSection .contentPlatform").removeClass("fx");
                    },
                    onLeaveBack: function () {
                        $(".PlatformSection .contentPlatform").addClass("fx");
                    },
                },
            });
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".PlatformSection",
                    start: "bottom center",
                    scrub: true }
                });
            $tl.to(".contentPlatform", 1, {top: "22%"}, "a");
            $tl.from(".PlatformSection h2", 1, { opacity: 0}, "a");
            // third screen

            // icon in foruth screen
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: ".sp-5",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true }
                });
            $tl.to("#serviceSection .cir", 1, { scale: 0, opacity: 0 }, "a");
            $tl.to(".IconCenter .cirbr", 1, { width: "100%", height: "100%" }, "a");
            
//top icon
            $(".Feature").each(function () {
                var n = $(this).data("lg-st");
                var $tl = $g.timeline({ scrollTrigger: {
                    trigger: this,
                    start: "center bottom",
                    end: "top center",
                    scrub: true }
                });
                $tl.to(".IconCenter .svgP.n" + n, 1, { opacity: 1 }, "a");
                var $tl = $g.timeline({ scrollTrigger: {
                    trigger: this,
                    start: "top 20%",
                    end: "top -20%",
                    scrub: true }
                });
                $tl.to(this, 1, { opacity: 0 }, "a");
                $tl.to(".IconCenter .svgP.n" + n, 1, { opacity: 0, scale: 0 }, "a");
            });


            var $tl = $g.timeline({ scrollTrigger: {
                trigger: ".sp-3",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true }
            });
            $tl.to(".IconCenter .cirbr", 1, { backgroundColor: "#e9eef0" }, "a");
            $tl.to(".PlatformSection", 1, { opacity: 0 }, "a");
            $tl.to(".IconCenter svg", 1, { scale: 0 }, "a");
            $("#serviceSection .service > div").each(function () {
                $tl.fromTo(this, 1, { opacity: 0 }, { opacity: 1, scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "bottom 80%",
                    scrub: true }
                });
            });
            // icon in foruth screen
        }


        // contact screen
        if ($("#contactSection").length) {
            var $tl = $g.timeline({
                scrollTrigger: {
                    trigger: "#contactSection h2",
                    start: "top bottom" }
                });
            $tl.from("#contactSection h2 span", 1.5, { y: "100%", ease: exo }, "a");
            $tl.from("#contactSection h2 small", 1.5, { autoAlpha: 0, delay: 0.3, ease: exo }, "a");
        }
        if ($(".bt").length) {
            $(".bt").each(function () {
                $g.from(this, 1.5, { autoAlpha: 0, ease: exo, scrollTrigger: { trigger: this, start: "top 95%" } });
            });
        }
        // features page
        if ($(".hspan").length) {
            $g.set(".hspan > span > span", { y: "105%" });
            $gs.batch(".hspan > span > span", {
                onEnter: function (batch) {
                    $g.to(batch, 1.3, { y: "0%", ease: exo, stagger: { each: 0.2 } });
                },
            });
        }
        if ($(".features").length) {
            var $tl = $g.timeline();
            $tl.from(".heroImg .sub", 2, { y: -100, opacity: 0, delay: 0.5, ease: exo }, "a");
            $tl.from(".heroImg .h1 span", 2, { y: "105%", ease: exi }, "a");
            $tl.fromTo(".heroImg .svgCir", 2, { scale: 0, rotation: 180 }, { scale: 1, rotation: 0, ease: exi }, "a");
            $g.from(".line-ec, .line-p", 0.2, { y: "100%", opacity: 0, scrollTrigger: { trigger: ".heroImg", start: "right left", toggleActions: "play none none reverse" } });
            
            if ($win.width() > $res) {
                $g.to(".heroImg .bg", 1, { x: "25%", scrollTrigger: { trigger: ".heroImg", start: "left", scrub: true } });
                $g.to(".Plat .cont", 1, { x: "-15%", scrollTrigger: { trigger: ".Plat", start: "left", scrub: true } });
                $(".mck:not(.mckn)").each(function () {
                    $g.fromTo(this, 1, { x: "-15%" }, { x: "15%", scrollTrigger: { trigger: this, start: "left right", end: "right", scrub: true } });
                });
                var $tl = $g.timeline({ scrollTrigger: { trigger: ".mck-1", start: "left right", scrub: true } });
                $tl.fromTo(".mck-1 .m2", 1, { y: "10%" }, { y: "0%" }, "a");
                $tl.fromTo(".mck-1 .m3", 1, { y: "-20%", x: "30%" }, { y: "0%", x: "0%" }, "a");
                $g.fromTo(".mck-2 .m2", 1, { y: "-10%", x: "-20%" }, { y: "20%", x: "10%", scrollTrigger: { trigger: ".mck-2", start: "left right", scrub: true } });
                $g.set(".p > *, .txt, .list-s > *", { y: 200, opacity: 0 });
                $gs.batch(".p > *, .txt, .list-s > *", {
                    onEnter: function (batch) {
                        $g.to(batch, 1.3, { y: 0, opacity: 1, ease: exo, stagger: { each: 0.2 } });
                    },
                });
                $g.set(".sb", { y: -50, opacity: 0 });
                $gs.batch(".sb", {
                    onEnter: function (batch) {
                        $g.to(batch, 1.3, { y: 0, opacity: 1, ease: exo, stagger: { each: 0.2 } });
                    },
                });
                $(".bga").each(function () {
                    $g.to($(this).find("div"), 1, { x: "-25%", scrollTrigger: { trigger: this, start: "left right", end: "right", scrub: true } });
                });
                $g.fromTo(".line-ec .ln", 1, { width: "0%" }, { width: "100%", scrollTrigger: { trigger: ".features", start: "left left", end: "right right", scrub: true } }); 
            }
            

            
        }


        if ($("#sc").length) {
            $g.fromTo("#sc .tc", 2, { scale: 0, rotation: 0, autoAlpha: 0 }, { scale: 1, rotation: -180, autoAlpha: 1, ease: exi }, "a");
            $gs.batch("#sc .ls svg", {
                onEnter: function (batch) {
                    var $tl = $g.timeline();
                    $tl.to(batch, 1, { opacity: 1, stagger: { each: 0.2 } }, "a");
                },
            });
            $g.set("#sc .p > *, #sc h3, #sc h4, [data-projet-id]", { opacity: 0, y: 100 });
            $gs.batch("#sc .p > *, #sc h3, #sc h4, [data-projet-id]", {
                onEnter: function (batch) {
                    $g.to(batch, 1.5, { opacity: 1, y: 0, ease: exo, stagger: { each: 0.2 } }, "a");
                },
            });
            $("[data-projet-id] img").each(function () {
                var $t = $(this);
                var $tl = $g.timeline({ scrollTrigger: { trigger: this, start: "top bottom", end: "top 50%", scrub: true, toggleActions: "play none none reverse" } });
                $tl.fromTo(this, 1, { y: "25%" }, { y: "0%" });
            });
            $(".ls > li").each(function () {
                var $t = $(this);
                var $tl = $g.timeline({ scrollTrigger: { trigger: this,toggleActions: "play none none reverse" } });
                $tl.from($t.find("i"), 1, { rotation: 90, scale: 0, ease: Back.easeOut }, "a");
                $tl.staggerFrom($t.find("h4 > *, .bta, .p"), 1.3, { y: 80, opacity: 0, ease: exi }, 0.2, "a");
            });
        }
    
        
    }
    $html.attr("data-load", true);
}
// for paltform
$("[data-etude]").on("click", function (e) {
    e.preventDefault();
    $html.addClass("stop");
    var $t = $(this);
    var $h = $t.find("a").attr("href");
    $ct = $t.offset().top;
    $cl = $t.offset().left;
    $("main").addClass("upMain");
    $(".bn").addClass("closH");
    $("#header").addClass("mixb").removeClass("blck-1");
    var $tl = $g.timeline();
    $tl.to($t.parents("section"), 0.1, { zIndex: 9500 }, "a");
    $tl.to($t.find(".txt"), 0.8, { autoAlpha: 0, y: 200 }, "a");
    $tl.to(this, 1, { ease: exi, top: -$ct, left: -$cl, height: $win.height(), width: $win.width() }, "a");
    $tl.to(
        $t.find(".bg"),
        1,
        {
            ease: exi,
            height: "100%",
            y: "0%",
            onComplete: function () {
                document.location.href = $h;
            },
        },
        "a"
    );
});
// for paltform


// for svg circle
$("[data-etude-next]").on("click", function (e) {
    e.preventDefault();
    $html.addClass("stop");
    var $t = $(this);
    var $h = $t.find("a").attr("href");
    $g.to("[data-etude-next] .tc", 1, { opacity: 0 });
    if ($win.width() > $res) {
        $s.scrollTo(999999, 0, 1000);
    } else {
        $s.scrollTo(0, 999999, 1000);
    }
    setTimeout(function () {
        document.location.href = $h;
    }, 1000);
});
// for svg circle




// load screen
var ld = $g.timeline({ paused: true });
ld.to("#ld .logo", 1.5, { y: "120%", ease: exi }, "a");
ld.to("#ld .bg", 1.5, { height: "0%", ease: exi }, "a");
if ($("#cl").length) {
    ld.to("#ld .bg", 1.5, { height: "0%", ease: exi }, "a");
} else {
    ld.to("#ld .bg", 1.5, { height: "0%", ease: exi, onStart: $afterLoad }, "a");
}
ld.to("#ld", 0, { pointerEvents: "none", delay: 1 }, "a");
ld.to("#ld .bg", 0, { top: "0", bottom: "auto" }, "b");
ld.to("#ld .logo", 0, { y: "-120%", display: "none", opacity: 0, ease: exi }, "=-.8");
if ($("#cl").length) {
    ld.progress(1);
} else {
    ld.timeScale(1);
    ld.play();
}
// load screen


// navbar
var nv = $g.timeline({ paused: true });
nv.to("#navbar", 0, { display: "flex" });
nv.to("#navbar .bg", 1, { height: "100%", ease: exi }, "a");
nv.to("#navbar .ms", 1.5, { y: 0, opacity: 1, ease: exi }, "a");
nv.staggerFrom("#navbar nav a", 1.8, { y: "110%", ease: exi }, 0.1, "a");
nv.from("#navbar .tc", 1.5, { scale: 0, rotation: 0, autoAlpha: 0, delay: 0.2, ease: exi }, "a");
nv.staggerFrom("#navbar .Blog a span", 1.8, { y: "110%", ease: exi }, 0.1, "a");
nv.staggerFrom("#navbar .Blog li", 1.5, { opacity: 0, x: 200, ease: exo, delay: 0.3 }, 0.2, "a");
nv.staggerFrom("#navbar .rs li", 1.5, { opacity: 0, ease: exi, delay: 0.3 }, 0.2, "a");
var $nav = {
    open: function () {
        $body.addClass("onav fonav");
        nv.timeScale(1);
        nv.play();
    },
    close: function () {
        $body.removeClass("onav fonav");
        nv.timeScale(2);
        nv.reverse();
    },
    init: function () {
        var t = this;
        $("[data-nav]").on({
            click: function () {
                if ($html.hasClass("creaOpen")) {
                    $pr = $("[data-projet].open");
                    $("[data-projet]").removeClass("open");
                    $html.removeClass("stop creaOpen");
                    $tl = $g.timeline();
                    $tl.fromTo($pr.find(".bg"), 1.5, { height: "100%" }, { height: "0%", ease: exi }, "a");
                    $tl.staggerFromTo($pr.find(".lct > *, img"), 1.5, { opacity: 1 }, { opacity: 0, ease: exo }, 0, "a");
                } else {
                    if ($body.hasClass("onav")) {
                        t.close();
                    } else {
                        t.open();
                    }
                }
            },
            mouseleave: function () {
                $body.removeClass("fonav");
            },
        });
    },
};
$nav.init();
// navbar

$s.addListener(function (status) {
    xApp = status.offset.x;
    sessionStorage.setItem("x", xApp);
    if (!$ifScrollH) {
        yApp = status.offset.y;
        if (yApp > 0) {
            $body.addClass("fix");
        } else {
            $body.removeClass("fix");
        }
        if ($html.hasClass("stop")) {
            $s.setPosition(0, sessionStorage.getItem("y"));
        } else {
            sessionStorage.setItem("y", yApp);
        }
        // fix services scetion
        if ($("#serviceSection").length) {
            var svy = $("#serviceSection").offset().top;
            $("#serviceSection .circlePart").css({ marginTop: -svy });
        }
        // for third screen
        if ($(".PlatformSection").length) {
            var eav = $(".PlatformSection").offset().top;
            $(".PlatformSection .contentPlatform").css({ marginTop: -eav });
        }
        $cursor.classCursor();
    }
});
$cursor.init();




const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const toggles = document.querySelectorAll(".toggle");

let isModalOpen = false;

const modalTL = new gsap.timeline({
  paused: true
});

modalTL
  .from(overlay, {opacity: 0}).from(modal,{y: 50,opacity: 0,ease: "back.out(2)"},"<");

const handleModal = (modalStatus) => {
  if (modalStatus) {
    modalTL.reverse();
    setTimeout(() => {
      overlay.classList.remove("overlay--active");
    }, modalTL.duration() * 1000);
  } else {
    modalTL.play();
    overlay.classList.add("overlay--active");
  }
};

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    handleModal(isModalOpen);
    isModalOpen = !isModalOpen;
  });
});









// const form = document.getElementById("form");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   const formData = new FormData(form);
//   e.preventDefault();
//   var object = {};
//   formData.forEach((value, key) => {
//     object[key] = value;
//   });

//   var json = JSON.stringify(object);
//   result.innerHTML = "الرجاء الإنتظار";
//   console.log(json)
//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: json
//   })
//     .then(async (response) => {
//       let json = await response.json();
//       if (response.status == 200) {
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-green-500");
//       } else {
//         console.log(response);
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-red-500");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//       form.reset();
//       setTimeout(() => {
//         result.style.display = "none";
//       }, 5000);
//     });
// });




