'use strict'

$.fn.extend({
    animateCss: async function(animationName) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
        /* Return Resolve Promise  */
        return Promise.resolve(this)
      });
    },
  });

  /* メニューのリンク関数 */
async function linkTo(link) {
    await $('div#content').animateCss('fadeInDown');
    //await $('div#content').animateCss('fadeOut');
    location.href = '#' + link;
};
