/* 
 * Copyright 2015 Erik Nijenhuis <erik@xerdi.com>.
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

var Card = function (list) {
    for(var i = 0; i < list.length; i++) {
        if($(list[i]).hasClass("active-card"))
            this.index = i;
    }
    this.choices = list;
};
Card.prototype.setCard = function (index) {
    var cur = $(this.choices[index]);
    var old = $(this.choices[this.index]);
    old.addClass("flip-out");
    setTimeout(function() {
        old.removeClass("active-card");
        old.removeClass("flip-out");
        cur.addClass("active-card");
        cur.addClass("flip-in");
        setTimeout(function() {
            cur.removeClass("flip-in");
        }, 1000);
    }, 999);
    this.index = index;
};


var Flipper = function (row) {
    this.cards = [];
    var fullcards = row.getElementsByClassName("full-card");
    for (var x in fullcards) {
        if (!fullcards[x].childNodes)
            continue;
        this.cards.push(new Card(fullcards[x].getElementsByClassName("flip-card")));
    }
};
Flipper.prototype.setCards = function (list) {
    for (var x in list) {
        if(!list[x]) continue;
        this.cards[list[x].cardIndex].setCard(list[x].activeIndex);
    }
};