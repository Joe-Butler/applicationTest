/*
 * Copyright (C) 2011 Netgem SA
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, version 2, as published by
 * the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; see the file COPYING.  If not, write to the Free
 * Software Foundation, 59 Temple Place - Suite 330, Boston, MA
 * 02111-1307, USA.
 * 
 * SDK:
 *     - Version '1.5.00'
 *     - Release date 'November 04, 2016'
 *     - Base    'branches/nsv-tangox Relative URL: ^/branches/nsv-tangox'
 * 
*/
FormWidget.registerTypeStandard("MyFormWidget");


function MyFormWidget(_json, _options)
{
    this.super(_json, _options);
    this._userData = _options.userData; // use UserData as you want
}
MyFormWidget.inherits(FormWidget);


MyFormWidget.prototype.onEnter = function onEnter(_data)
{
/*
 * In the onEnter function, you create canvas object and initialize graphic buffer:
 * width = 320height = 240Buffer count = 1background = black
 */
    var canvas = new Canvas.JSCanvas();
    canvas.init(320, 240, 1, "black");

/*
 * Get the drawing context, clear it and set pen color to white, then draw text at x = 50, y = 40.
 */
    var ctx = canvas.getContext("2d");
    ctx.clear();
    ctx.fillStyle = "white";
    ctx.fillText(50, 40, "Hello world");

/*
 * Canvas is disable and hidden by default.
 * You have to enable your canvas and place it on screen.
 */
    canvas.animation.setEnable().move(320, 240).start();

/*
 * You can show the buffer with fade effect, here lasting 1s.
 */
    canvas.animation.show(1000).start();

/*
 * Canvas is a JavaScript object, which implies that no more reference on it will cause destruction!
 */
    this._canvas = canvas;
}


MyFormWidget.prototype.onExit = function onExit()
{
}


MyFormWidget.prototype.onKeyPress = function onKeyPress(_key)
{
    NGM.trace("myForm received a key: " + _key);
    return false;
}

