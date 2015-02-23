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

Modal = function (kwargs) {
    this.dialog = document.createElement("div");
    this.dialog.className = "modal";
    var md = document.createElement("form");
    md.className = "modal-dialog";
    if(kwargs.url)
        md.setAttribute("action", kwargs.url);
    md.setAttribute("method", (kwargs.method) ? kwargs.method : "post");
    if(kwargs.process) {
        var proc = kwargs.process;
        md.addEventListener("submit", function ( e ) {
            e.preventDefault();
            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                type: form.attr("method").toUpperCase(),
                beforeSend: proc
            });
        }, true);
    }
    var mc = document.createElement("div");
    mc.className = "modal-content";    
    this.dialog.appendChild(md);
    md.appendChild(mc);
    
    var mh = document.createElement("div");
    mh.className = "modal-header";
    var c = document.createElement("button");
    c.className = "close";
    c.setAttribute("type", "button");
    c.setAttribute("data-dismiss","modal");
    c.setAttribute("aria-hidden", "true");
    c.innerHTML = "×";
    mh.appendChild(c);
    var ht = document.createElement("h4");
    ht.className = "modal-title";
    ht.innerHTML = (kwargs.title) ? kwargs.title : "Title...";
    mh.appendChild(ht);
    mc.appendChild(mh);
    
    var mb = document.createElement("div");
    mb.className = "modal-body";
    mb.appendChild(kwargs.body);
    mc.appendChild(mb);
    
    var mf = document.createElement("div");
    mf.className = "modal-footer";
    var cl = document.createElement("button");
    cl.className = "btn btn-default";
    cl.setAttribute("type", "button");
    cl.setAttribute("data-dismiss", "modal");
    cl.innerHTML = "Close";
    mf.appendChild(cl);
    var s = document.createElement("button");
    s.className = "btn btn-primary";
    s.setAttribute("type", "submit");
    s.innerHTML = (kwargs.success) ? kwargs.success : "Save Changes";
    mf.appendChild(s);    
    mc.appendChild(mf);
};
Modal.prototype.show = function () {
    document.body.appendChild(this.dialog);
    $(this.dialog).modal();
};
Modal.prototype.close = function () {
    $(this.dialog).modal('hide');
    document.body.removeChild(this.dialog);
};