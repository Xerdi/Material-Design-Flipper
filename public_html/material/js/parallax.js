/* 
 * Copyright 2015 erik.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(function () {
    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function () {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                            
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% ' + yPos + 'px';

            // move the background
            $scroll.css({backgroundPosition: coords});
        }); // end window scroll
    });  // end section function
}); // close out script
