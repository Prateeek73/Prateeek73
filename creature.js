/* Original creature — a round, tufted forager. Drawn from scratch;
   deliberately not modelled on any existing character. */

(function () {
    var CREATURE =
    '<svg class="creature" viewBox="0 0 60 60" aria-hidden="true" focusable="false">' +
      '<g class="creature-hop">' +
        // ears
        '<path class="ear ear-l" d="M18 20 C14 10, 20 5, 24 14 Z" fill="#6B2FBF"/>' +
        '<path class="ear ear-r" d="M42 20 C46 10, 40 5, 36 14 Z" fill="#6B2FBF"/>' +
        // body
        '<ellipse cx="30" cy="35" rx="17" ry="19" fill="#6B2FBF"/>' +
        // belly
        '<ellipse cx="30" cy="39" rx="11" ry="13" fill="#E8963B" opacity="0.92"/>' +
        // belly markings
        '<circle cx="30" cy="33" r="1.5" fill="#6B2FBF" opacity="0.55"/>' +
        '<circle cx="26" cy="38" r="1.2" fill="#6B2FBF" opacity="0.45"/>' +
        '<circle cx="34" cy="38" r="1.2" fill="#6B2FBF" opacity="0.45"/>' +
        // eyes
        '<g class="blink">' +
          '<circle cx="24" cy="27" r="2.6" fill="#241531"/>' +
          '<circle cx="36" cy="27" r="2.6" fill="#241531"/>' +
          '<circle cx="24.9" cy="26.1" r="0.9" fill="#F7F2FC"/>' +
          '<circle cx="36.9" cy="26.1" r="0.9" fill="#F7F2FC"/>' +
        '</g>' +
        // nose + whiskers
        '<path d="M28.4 31 L31.6 31 L30 32.9 Z" fill="#241531"/>' +
        '<path d="M14 30 L21 31 M14 34 L21 33.5 M46 30 L39 31 M46 34 L39 33.5" ' +
              'stroke="#6B2FBF" stroke-width="1" stroke-linecap="round" opacity="0.5"/>' +
        // feet
        '<ellipse cx="23" cy="53" rx="5" ry="2.6" fill="#3A1868"/>' +
        '<ellipse cx="37" cy="53" rx="5" ry="2.6" fill="#3A1868"/>' +
      '</g>' +
    '</svg>';

    function init() {
        var panel = document.querySelector('.panel');
        if (panel) panel.insertAdjacentHTML('beforeend', CREATURE);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
