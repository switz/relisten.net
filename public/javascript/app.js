this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Welcome to yet another internet experiment.</p>\n\n<p>Peruse the various bands and enjoy their extensive live catalogues for <strong>free</strong>.</p>\n\n<p>This site is powered by Archive.org and Alec Gorge's <a href=\"https://github.com/alecgorge/iguana\" target=\"_blank\">Iguana</a>. The Phish collection is hosted and provided by <a href=\"http://phish.in\" target=\"_blank\">Phish.in</a>.</p>\n\n<p>- Daniel Saewitz, <a href=\"mailto:admin@relisten.net\">admin@relisten.net</a></p>\n\n<br><br>\n\n<p>This site complies with Archive.org's <a href=\"https://archive.org/post/261115/hotlinking-allowed\">policy</a>.</p>\n\n\n<br>\n<p><i>\nThe Grateful Dead and our managing organizations have long encouraged the purely non-commercial exchange of music taped at our concerts and those of our individual members. That a new medium of distribution has arisen - digital audio files being traded over the Internet - does not change our policy in this regard. Our stipulations regarding digital distribution are merely extensions of those long-standing principles and they are as follow:\n\nNo commercial gain may be sought by websites offering digital files of our music, whether through advertising, exploiting databases compiled from their traffic, or any other means.\nAll participants in such digital exchange acknowledge and respect the copyrights of the performers, writers and publishers of the music.\n\nThis notice should be clearly posted on all sites engaged in this activity.\nWe reserve the ability to withdraw our sanction of non-commercial digital music should circumstances arise that compromise our ability to protect and steward the integrity of our work.\n</i>\n</p>";
  });

this["JST"]["chat"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"pre\">\n  <h4>Chat Rules</h4>\n\n  <p>1) There are plenty of places on the internet to act immaturely. This is not one of those places.</p>\n\n  <br>\n  <br>\n\n  <div id=\"tlkio\" data-channel=\"relisten\" style=\"width:100%;height:400px;\"></div>\n</div>\n";
  });

this["JST"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=progress-bar></div>\n<div class=position-bar></div>\n";
  });

this["JST"]["gapless"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "DISABLE";
  }

function program3(depth0,data) {
  
  
  return "ENABLE";
  }

  buffer += "<p>Hello there –</p>\n\n<p>This is an alpha feature. The queue probably won't work so well, what will work [in a modern browser] is clicking on a song and listening to the entirety of that tape. That's how most of you use the site anyway.</p>\n\n<p>It's worth it.</p>\n\n<p style=\"text-align: center;\"><button class=enable-gapless>";
  stack1 = helpers['if'].call(depth0, depth0.enabled, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " GAPLESS PLAYBACK</button></p>\n\n<p>You must be using a browser that is <a href=\"http://caniuse.com/#feat=audio-api\">listed here</a>. If something breaks, just try refreshing.</p>\n";
  return buffer;
  });

this["JST"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <a class=\"band\" href=\"/";
  if (stack1 = helpers.slug) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slug; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  stack1 = helpers['if'].call(depth0, depth0.the, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (stack1 = helpers.bandName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bandName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n      <span class=\"tip\">&nbsp;&nbsp;&lt;- click here for a random show! ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, depth0.bandName, "Phish", options) : helperMissing.call(depth0, "if_eq", depth0.bandName, "Phish", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "the ";
  }

function program4(depth0,data) {
  
  
  return "(Powered by phish.in)";
  }

function program6(depth0,data) {
  
  
  return "\n      <div class=\"info\" href=\"/about\">\n        1,028,334 songs from 58,302 tapes of 97 bands\n      </div>\n    ";
  }

  buffer += "<ul class=\"left\">\n  <li class=\"home-container\">\n    <a class=\"home\" href=\"/\">Relisten</a>\n    <span> to </span>\n    ";
  stack1 = helpers['if'].call(depth0, depth0.bandName, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"clear\"></div>\n  </li>\n</ul>\n\n<ul class=\"right\">\n    <li><a class=\"about header-link\" href=\"/about\">ABOUT</a></li>\n    <li><a class=\"live header-link\" href=\"/live\">LIVE</a></li>\n    <li><a class=\"today header-link\" href=\"/today\">TODAY</a></li>\n    <li><a class=\"gapless header-link\" href=\"/gapless\">GAPLESS</a></li>\n    <li><a class=\"ios header-link\" href=\"https://itunes.apple.com/us/app/relisten-formerly-listen-to/id715886886?mt=8\" target=\"_blank\">iOS app</a></li>\n</ul>\n";
  return buffer;
  });

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=row-fluid>\n  <div class=\"span4 years-container\">\n  </div>\n\n  <div class=\"span4 shows-container\">\n  </div>\n\n  <div class=\"span4 songs-container\">\n  </div>\n</div>";
  });

this["JST"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n   ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n   <thead>\n    <tr>\n      <th><a href=\"/grateful-dead\">Grateful Dead</a></th>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.bands),stack1 == null || stack1 === false ? stack1 : stack1['grateful-dead'])),stack1 == null || stack1 === false ? stack1 : stack1.shows)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n   </thead>\n   <thead>\n    <tr>\n      <th><a href=\"/phish\">Phish</a></th>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.bands),stack1 == null || stack1 === false ? stack1 : stack1.phish)),stack1 == null || stack1 === false ? stack1 : stack1.shows)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n   </thead>\n   <thead>\n    <tr>\n      <th>&nbsp;</th>\n      <td>&nbsp;</td>\n    </tr>\n   </thead>\n   ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n   <tbody>\n      <tr>\n        <th>\n          <a href=\"/"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n        </th>\n        <td>";
  if (stack2 = helpers.shows) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.shows; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n      </tr>\n   </tbody>\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "<button class=enable-notifications>ENABLE NOTIFICATIONS</button>";
  }

  buffer += "<table>\n   <thead>\n      <tr>\n         <th class=\"heading\">Band</th>\n         <th class=\"heading\">Tapes</th>\n      </tr>\n   </thead>\n   ";
  stack1 = helpers['if'].call(depth0, depth0.realMusic, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n   ";
  stack1 = helpers.each.call(depth0, depth0.bands, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n\n";
  stack1 = helpers['if'].call(depth0, depth0['default'], {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["live"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li class=";
  stack1 = helpers['if'].call(depth0, depth0.listed, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-id=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n        "
    + escapeExpression(((stack1 = depth1.pla),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        <a href=\"/";
  if (stack2 = helpers.band) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.band; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.showVersion), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "/";
  if (stack2 = helpers.slug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.slug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n        from\n        <a href=\"/";
  if (stack2 = helpers.band) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.band; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.showVersion), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a> by <a href=\"/";
  if (stack2 = helpers.band) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.band; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.bandName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.bandName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n      </li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "listed";
  }

function program4(depth0,data) {
  
  
  return "fresh";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-";
  if (stack1 = helpers.showVersion) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.showVersion; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

  buffer += "<div style=\"margin: 0 auto; max-width: 800px; text-align: center;\">\n  <h2>What are people listening to?</h2>\n  <ul>\n    ";
  stack1 = helpers.each.call(depth0, depth0.plays, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n";
  return buffer;
  });

this["JST"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\"/login\" method=\"post\">\n  <input type=hidden value=";
  if (stack1 = helpers.csrf) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csrf; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " name=_csrf />\n  <div>\n    <label for=email>Email:</label>\n    <input class=email type=\"text\" placeholder=\"Email\" name=\"email\"/>\n  </div>\n  <div>\n    <label for=password>Password:</label>\n    <input class=password type=\"password\" placeholder=\"Password\" name=\"password\"/>\n  </div>\n  <div class=forbutton>\n    <input type=\"submit\" value=\"Login\"/>\n  </div>\n</form>\n";
  return buffer;
  });

this["JST"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " alt='' />";
  return buffer;
  }

  buffer += "<div>\n  <a>×</a>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.img, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n  <p>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["JST"]["oops"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<pre>\nYesterday I realized that my relisten.net email has been broken for the past 4+ months. I thought it was weird that I didn't hear from <i>any</i> of you after <a href=\"/gapless\">Gapless Playback</a> was launched. Turns out it was due to my own stupidity.\n\nIf I didn't respond to any of your emails, I truly do apologize. It bums me out to know that there are quite a few emails that I'll never get to read. I love hearing from you - so if you sent something and never heard back, please forward it along to <a href=\"mailto:admin@relisten.net\">admin@relisten.net</a>.\n\nEven if you never wrote me an email, I would love it if you took the opportunity to reach out. Whether you have a suggestion, need help moving, or just want to say hi and introduce yourself.\n\nThanks for your patronage.\n\n– Daniel Saewitz, <a href=\"mailto:admin@relisten.net\">admin@relisten.net</a>\n\n</pre>";
  });

this["JST"]["player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=player>\n  <div class=info>\n    <h3 class=title></h3>\n    <h4 class=album></h4>\n    <div class=time>\n      <div class=seconds>00:00</div>/<div class=total>00:00</div>\n    </div>\n  </div>\n  <div class=volume-container>\n    <div class=volume></div>\n  </div>\n</div>\n";
  });

this["JST"]["playlist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=/playlist/"
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/edit>Edit playlist</a>";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <tr>\n      <td><p>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.blurb || depth1.blurb),stack1 ? stack1.call(depth0, ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options) : helperMissing.call(depth0, "blurb", ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p></td>\n      <td class=second><a data-id=\"";
  if (stack2 = helpers._id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"/playlist/"
    + escapeExpression(((stack1 = ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longDay) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longDay; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longSlug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longSlug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a> - ";
  if (stack2 = helpers.album) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.album; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n    </tr>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3> ";
  options = {hash:{
    'compare': (((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._user))
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, depth0.userId, options) : helperMissing.call(depth0, "if_eq", depth0.userId, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<table>\n  ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._songs), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</table>\n";
  return buffer;
  });

this["JST"]["playlists-edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <tr>\n        <td><textarea name=blurb[text]>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.blurb || depth1.blurb),stack1 ? stack1.call(depth0, ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options) : helperMissing.call(depth0, "blurb", ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</textarea><input type=hidden name=blurb[id] value=";
  if (stack2 = helpers._id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " /></td>\n        <td class=second><a href=\"/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longDay) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longDay; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longSlug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longSlug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a> - ";
  if (stack2 = helpers.album) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.album; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n      </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<h3>Edit Playlist</h3>\n\n\n<form action=PUT action=/ name=playlist>\n  <div class=name-container>\n    <input name=name class=name value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /> - <a href=\"/playlist/"
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">View Playlist</a>\n  </div>\n\n  <table>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._songs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </table>\n\n  <button type=submit class=save>Save</button>\n  </form>";
  return buffer;
  });

this["JST"]["playlists"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <li><a href=\"/playlist/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a><div class=count>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length || depth0.length),stack1 ? stack1.call(depth0, depth0._songs, options) : helperMissing.call(depth0, "length", depth0._songs, options)))
    + "</div></li>\n  ";
  return buffer;
  }

  buffer += "<header>\n  <ul>\n    <li><a href=\"/playlist/new\">nothing atm</a></li>\n  </ul>\n</header>\n\n<ul class=playlists>\n  ";
  stack1 = helpers.each.call(depth0, depth0.playlists, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["queue"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <li class=\"";
  if (stack1 = helpers.active) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.active; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      <span>[\n        <a href=\"javascript:\" class=delete>x</a>\n      ]</span>\n      <a class=\"song\" href=\"/";
  if (stack1 = helpers.band) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.band; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, depth0.showVersion, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (stack1 = helpers.showVersion) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.showVersion; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.slug) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slug; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n      <span class=\"right\">\n        <span>\n          [";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.len || depth0.len),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "len", depth0, options)))
    + "]\n        </span>\n        <span>\n          [<a href=\"/";
  if (stack2 = helpers.band) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.band; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  stack2 = helpers['if'].call(depth0, depth0.showVersion, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.showVersion) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.showVersion; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>]\n        </span>\n      </span>\n    </li>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "-";
  }

function program4(depth0,data) {
  
  
  return "\n  <button class=save>Save Queue</button>\n";
  }

  buffer += "<ul>\n  ";
  stack1 = helpers.each.call(depth0, depth0.queue, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<button class=clear>Clear Queue</button>\n";
  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\"/register\" method=\"post\">\n  <input type=hidden value=\"";
  if (stack1 = helpers.csrf) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csrf; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" name=\"_csrf\" />\n  <div>\n    <label for=email>Email:</label>\n    <input class=email type=\"text\" placeholder=\"Email\" name=\"email\"/>\n    <div class=invalid>✘</div>\n  </div>\n  <div>\n    <label for=password>Password:</label>\n    <input class=password type=\"password\" placeholder=\"Password\" name=\"password\"/>\n    <div class=invalid>✘</div>\n  </div>\n  <div class=forbutton>\n    <sup>Password must be at least 6 characters</sup>\n    <br>\n    <input type=\"submit\" value=\"Register\"/>\n  </div>\n</form>\n";
  return buffer;
  });

this["JST"]["shows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <a class=\"show-";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"/"
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n      <span class=date>";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.addZero || depth0.addZero),stack1 ? stack1.call(depth0, depth0.day, options) : helperMissing.call(depth0, "addZero", depth0.day, options)))
    + "</span>\n      <span class=venue>";
  if (stack2 = helpers.venue_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.venue_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n    </a>\n  </li>\n";
  return buffer;
  }

  buffer += "<div class=ul-header>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<ul>\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.shows), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["songs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"current-source select-source\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0.taper, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.transferer, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.source, {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.lineage, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.description, {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.average_rating, {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Taper:</span> ";
  if (stack1 = helpers.taper) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.taper; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Transferer:</span> ";
  if (stack1 = helpers.transferer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transferer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Source:</span> ";
  if (stack1 = helpers.source) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, depth0.is_soundboard, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "<p><span class=\"field\">Source:</span> Soundboard</p>";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Lineage:</span> ";
  if (stack1 = helpers.lineage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lineage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "<p title=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.newLine || depth0.newLine),stack1 ? stack1.call(depth0, depth0.description, options) : helperMissing.call(depth0, "newLine", depth0.description, options)))
    + "\" class=\"description\"><span class=\"field\">Description:</span> Hover</p>";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p><span class=\"field\">Rating:</span> ";
  if (stack1 = helpers.average_rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.average_rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.reviews_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.reviews_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " reviews</p>\n      ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"select-source multiple-sources\">Select another source <span class=total-sources>(";
  if (stack1 = helpers.totalSources) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.totalSources; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></li>\n    ";
  stack1 = helpers.each.call(depth0, depth0.sources, {hash:{},inverse:self.noop,fn:self.programWithDepth(18, program18, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program18(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.hidden, {hash:{},inverse:self.programWithDepth(21, program21, data, depth1),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program19(depth0,data) {
  
  
  return "\n      ";
  }

function program21(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <li class=source>\n          <a href=/"
    + escapeExpression(((stack1 = depth2.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.year),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.month),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.day),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n            ";
  stack2 = helpers['if'].call(depth0, depth0.taper, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.transferer, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.source, {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.lineage, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.description, {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.average_rating, {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </a>\n        </li>\n      ";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Source:</span> ";
  if (stack1 = helpers.source) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n            ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  stack1 = helpers['if'].call(depth0, depth0.is_soundboard, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <p><span class=\"field\">Rating:</span> ";
  if (stack1 = helpers.average_rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.average_rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.reviews_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.reviews_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " reviews</p>\n            ";
  return buffer;
  }

function program30(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <li data-idx="
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " data-song=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n      <a class=\"song "
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = depth1.year),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = depth1.month),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = depth1.day),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack2 = helpers['if'].call(depth0, depth1.showVersion, {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = depth1.showVersion),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-";
  if (stack2 = helpers.slug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.slug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"/"
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.year),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.month),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.day),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack2 = helpers['if'].call(depth0, depth1.showVersion, {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = depth1.showVersion),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.slug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.slug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " <span class=time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.len || depth0.len),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "len", depth0, options)))
    + "</span></a>\n      <div class=play>ᐅ</div>\n      <div title=\"Add To Queue\" class=add>+</div>\n    </li>\n  ";
  return buffer;
  }
function program31(depth0,data) {
  
  
  return "-";
  }

function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><a class=archive href=\"http://phish.net/setlists/?d="
    + escapeExpression(((stack1 = ((stack1 = depth0.songs),stack1 == null || stack1 === false ? stack1 : stack1.display_date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=_blank>View on Phish.net</a></li>\n    <li><a class=archive href=\"http://phish.in/"
    + escapeExpression(((stack1 = ((stack1 = depth0.songs),stack1 == null || stack1 === false ? stack1 : stack1.display_date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=_blank>View on Phish.in</a></li>\n  ";
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><a class=archive href=\"https://archive.org/details/"
    + escapeExpression(((stack1 = ((stack1 = depth0.songs),stack1 == null || stack1 === false ? stack1 : stack1.archive_identifier)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=_blank>View on Archive.org</a></li>\n  ";
  return buffer;
  }

  buffer += "<div class=ul-header>";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<ul>\n  ";
  stack1 = helpers['with'].call(depth0, depth0.songs, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0.multipleSources, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.songs),stack1 == null || stack1 === false ? stack1 : stack1.tracks), {hash:{},inverse:self.noop,fn:self.programWithDepth(30, program30, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  <li><a class=add-all href=\"javascript:\">Add All To Queue</a></li>\n  ";
  options = {hash:{},inverse:self.program(35, program35, data),fn:self.program(33, program33, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, depth0.band, "phish", options) : helperMissing.call(depth0, "if_eq", depth0.band, "phish", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["today"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <ul>\n      ";
  stack1 = helpers.each.call(depth0, depth0.shows, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <li>\n        <a href=\"/"
    + escapeExpression(((stack1 = depth1.slug),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.addZero || depth0.addZero),stack1 ? stack1.call(depth0, depth0.month, options) : helperMissing.call(depth0, "addZero", depth0.month, options)))
    + "/";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.addZero || depth0.addZero),stack1 ? stack1.call(depth0, depth0.day, options) : helperMissing.call(depth0, "addZero", depth0.day, options)))
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n      </li>\n      ";
  return buffer;
  }

  buffer += "<div style=\"margin: 0 auto; max-width: 800px; text-align: center;\">\n\n  <h2>Today in History</h2>\n  ";
  stack1 = helpers.each.call(depth0, depth0.tih, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</pre>\n";
  return buffer;
  });

this["JST"]["years"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <li>\n    <a href=\"/"
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"year-";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n  </li>\n";
  return buffer;
  }

  buffer += "<div class=ul-header>Choose a year</div>\n<ul>\n";
  stack1 = helpers.each.call(depth0, depth0.years, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
var Notification, addZero, band, bands, bandsWithThe, name, resize, timeToMS, toHHMMSS;

if (!Notification) {
  Notification = function() {
    return 0;
  };
  Notification.permission = false;
}

bandsWithThe = ["duo", "bernie-worrell", "disco-biscuits", "drive-by-truckers", "g-nome", "grateful-dead", "jazz-mandolin-project", "phish", "sci", "smashing-pumpkins", "steve-kimock-band", "stringdusters", "tedeschi-trucks"];

bands = {
  "akron-family": {
    "name": "Akron/Family",
    "shows": "37"
  },
  "american-babies": {
    "name": "American Babies",
    "shows": "62"
  },
  "andrew-bird": {
    "name": "Andrew Bird",
    "shows": "103"
  },
  "animal-collective": {
    "name": "Animal Collective",
    "shows": "26"
  },
  "aru": {
    "name": "Aquarium Rescue Unit",
    "shows": "171"
  },
  "aqueous": {
    "name": "Aqueous",
    "shows": "120"
  },
  "assembly-of-dust": {
    "name": "Assembly of Dust",
    "shows": "358"
  },
  "bela-fleck": {
    "name": "Bela Fleck and the Flecktones",
    "shows": "416"
  },
  "ben-kweller": {
    "name": "Ben Kweller",
    "shows": "29"
  },
  "duo": {
    "name": "Benevento Russo Duo",
    "shows": "352"
  },
  "bernie-worrell": {
    "name": "Bernie Worrell Orchestra",
    "shows": "27"
  },
  "the-big-wu": {
    "name": "The Big Wu",
    "shows": "345"
  },
  "blues-traveler": {
    "name": "Blues Traveler",
    "shows": "1,141"
  },
  "weir": {
    "name": "Bob Weir",
    "shows": "95"
  },
  "the-breakfast": {
    "name": "The Breakfast",
    "shows": "512"
  },
  "brothers-past": {
    "name": "Brothers Past",
    "shows": "551"
  },
  "cabinet": {
    "name": "Cabinet",
    "shows": "582"
  },
  "club-d-elf": {
    "name": "Club d'Elf",
    "shows": "623"
  },
  "dark-star": {
    "name": "Dark Star Orchestra",
    "shows": "638"
  },
  "the-dead": {
    "name": "The Dead",
    "shows": "370"
  },
  "dead-and-company": {
    "name": "Dead & Company",
    "shows": "77"
  },
  "the-decemberists": {
    "name": "The Decemberists",
    "shows": "79"
  },
  "disco-biscuits": {
    "name": "Disco Biscuits",
    "shows": "1,389"
  },
  "dispatch": {
    "name": "Dispatch",
    "shows": "35"
  },
  "donna-the-buffalo": {
    "name": "Donna the Buffalo",
    "shows": "843"
  },
  "dopapod": {
    "name": "Dopapod",
    "shows": "560"
  },
  "drive-by-truckers": {
    "name": "Drive-By Truckers",
    "shows": "806"
  },
  "egi": {
    "name": "EGi",
    "shows": "35"
  },
  "elliott-smith": {
    "name": "Elliott Smith",
    "shows": "96"
  },
  "everyone-orchestra": {
    "name": "Everyone Orchestra",
    "shows": "161"
  },
  "fugazi": {
    "name": "Fugazi",
    "shows": "18"
  },
  "furthur": {
    "name": "Furthur",
    "shows": "1,026"
  },
  "g-nome": {
    "name": "G-Nome Project",
    "shows": "6"
  },
  "g-love": {
    "name": "G. Love and Special Sauce",
    "shows": "172"
  },
  "garage-a-trois": {
    "name": "Garage A Trois",
    "shows": "83"
  },
  "god-street-wine": {
    "name": "God Street Wine",
    "shows": "261"
  },
  "grace-potter": {
    "name": "Grace Potter",
    "shows": "547"
  },
  "grateful-dead": {
    "name": "Grateful Dead",
    "shows": "10,535"
  },
  "greensky-bluegrass": {
    "name": "Greensky Bluegrass",
    "shows": "676"
  },
  "guster": {
    "name": "Guster",
    "shows": "584"
  },
  "the-heavy-pets": {
    "name": "The Heavy Pets",
    "shows": "188"
  },
  "stringdusters": {
    "name": "Infamous Stringdusters",
    "shows": "533"
  },
  "jack-johnson": {
    "name": "Jack Johnson",
    "shows": "158"
  },
  "jauntee": {
    "name": "The Jauntee",
    "shows": "322"
  },
  "jazz-mandolin-project": {
    "name": "Jazz Mandolin Project",
    "shows": "171"
  },
  "jerry-joseph": {
    "name": "Jerry Joseph and the Jackmormons",
    "shows": "790"
  },
  "joe-russos-almost-dead": {
    "name": "Joe Russo's Almost Dead",
    "shows": "175"
  },
  "john-kadlecik": {
    "name": "John Kadlecik",
    "shows": "241"
  },
  "john-popper": {
    "name": "John Popper",
    "shows": "73"
  },
  "keller-williams": {
    "name": "Keller Williams",
    "shows": "948"
  },
  "kung-fu": {
    "name": "Kung Fu",
    "shows": "310"
  },
  "kvhw": {
    "name": "KVHW",
    "shows": "116"
  },
  "leftover-salmon": {
    "name": "Leftover Salmon",
    "shows": "723"
  },
  "lettuce": {
    "name": "Lettuce",
    "shows": "286"
  },
  "little-feat": {
    "name": "Little Feat",
    "shows": "643"
  },
  "lotus": {
    "name": "Lotus",
    "shows": "481"
  },
  "marco": {
    "name": "Marco Benevento",
    "shows": "164"
  },
  "matisyahu": {
    "name": "Matisyahu",
    "shows": "358"
  },
  "matt-pond-pa": {
    "name": "Matt Pond PA",
    "shows": "15"
  },
  "max-creek": {
    "name": "Max Creek",
    "shows": "2,044"
  },
  "moe": {
    "name": "moe.",
    "shows": "3,170"
  },
  "mogwai": {
    "name": "Mogwai",
    "shows": "221"
  },
  "the-motet": {
    "name": "The Motet",
    "shows": "219"
  },
  "mmj": {
    "name": "My Morning Jacket",
    "shows": "348"
  },
  "the-new-deal": {
    "name": "The New Deal",
    "shows": "294"
  },
  "new-mastersounds": {
    "name": "The New Mastersounds",
    "shows": "291"
  },
  "percy-hill": {
    "name": "Percy Hill",
    "shows": "119"
  },
  "phil-lesh": {
    "name": "Phil Lesh and Friends",
    "shows": "2,039"
  },
  "phish": {
    "name": "Phish",
    "shows": "1,478"
  },
  "radiators": {
    "name": "The Radiators",
    "shows": "1,273"
  },
  "railroad-earth": {
    "name": "Railroad Earth",
    "shows": "1,465"
  },
  "raq": {
    "name": "Raq",
    "shows": "361"
  },
  "ratdog": {
    "name": "Ratdog",
    "shows": "927"
  },
  "ryan-adams": {
    "name": "Ryan Adams",
    "shows": "545"
  },
  "smashing-pumpkins": {
    "name": "Smashing Pumpkins",
    "shows": "1,109"
  },
  "sts9": {
    "name": "Sound Tribe Sector 9",
    "shows": "664"
  },
  "spafford": {
    "name": "Spafford",
    "shows": "101"
  },
  "spoon": {
    "name": "Spoon",
    "shows": "62"
  },
  "steve-kimock": {
    "name": "Steve Kimock",
    "shows": "328"
  },
  "steve-kimock-band": {
    "name": "Steve Kimock Band",
    "shows": "510"
  },
  "strangefolk": {
    "name": "Strangefolk",
    "shows": "786"
  },
  "sci": {
    "name": "String Cheese Incident",
    "shows": "1,552"
  },
  "tea-leaf-green": {
    "name": "Tea Leaf Green",
    "shows": "1,069"
  },
  "ted-leo": {
    "name": "Ted Leo and the Pharmacists",
    "shows": "21"
  },
  "tedeschi-trucks": {
    "name": "Tedeschi Trucks Band",
    "shows": "390"
  },
  "tenacious-d": {
    "name": "Tenacious D",
    "shows": "41"
  },
  "twiddle": {
    "name": "Twiddle",
    "shows": "301"
  },
  "umphreys": {
    "name": "Umphrey's McGee",
    "shows": "2,515"
  },
  "vulfpeck": {
    "name": "Vulfpeck",
    "shows": "8"
  },
  "the-walkmen": {
    "name": "The Walkmen",
    "shows": "18"
  },
  "war-on-drugs": {
    "name": "The War on Drugs",
    "shows": "43"
  },
  "warren-zevon": {
    "name": "Warren Zevon",
    "shows": "112"
  },
  "ween": {
    "name": "Ween",
    "shows": "530"
  },
  "the-werks": {
    "name": "The Werks",
    "shows": "151"
  },
  "white-denim": {
    "name": "White Denim",
    "shows": "27"
  },
  "yonder": {
    "name": "Yonder Mountain String Band",
    "shows": "1,657"
  },
  "zebu": {
    "name": "Zebu",
    "shows": "7"
  },
  "zero": {
    "name": "Zero",
    "shows": "454"
  }
};

for (name in bands) {
  band = bands[name];
  if (bandsWithThe.indexOf(name) !== -1) {
    bands[name].the = true;
  }
}

window.App = {
  "Models": {},
  "Collections": {},
  "Views": {},
  "Controllers": {},
  "Router": {},
  "utils": {},
  "bands": bands,
  "realMusic": {
    "akron-family": {
      "name": "Akron/Family",
      "shows": 35
    },
    "animal-collective": {
      "name": "Animal Collective",
      "shows": 23
    },
    "bela-fleck": {
      "name": "Béla Fleck and the Flecktones",
      "shows": 321
    },
    "ben-kweller": {
      "name": "Ben Kweller",
      "shows": 18
    },
    "bernie-worrell": {
      "name": "Bernie Worrell Orchestra",
      "the": true,
      "shows": 27
    },
    "club-d-elf": {
      "name": "Club d'Elf",
      "shows": 523
    },
    "the-decemberists": {
      "name": "The Decemberists",
      "shows": 74
    },
    "dispatch": {
      "name": "Dispatch",
      "shows": 32
    },
    "drive-by-truckers": {
      "name": "Drive-By Truckers",
      "the": true,
      "shows": 680
    },
    "elliott-smith": {
      "name": "Elliott Smith",
      "shows": 81
    },
    "fugazi": {
      "name": "Fugazi",
      "shows": 18
    },
    "g-love": {
      "name": "G. Love and Special Sauce",
      "shows": 124
    },
    "garage-a-trois": {
      "name": "Garage A Trois",
      "shows": 74
    },
    "grace-potter": {
      "name": "Grace Potter",
      "the": true,
      "shows": 488
    },
    "guster": {
      "name": "Guster",
      "shows": 484
    },
    "jack-johnson": {
      "name": "Jack Johnson",
      "shows": 146
    },
    "jerry-joseph": {
      "name": "Jerry Joseph and the Jackmormons",
      "shows": 604
    },
    "john-popper": {
      "name": "John Popper",
      "shows": 67
    },
    "little-feat": {
      "name": "Little Feat",
      "shows": 567
    },
    "matisyahu": {
      "name": "Matisyahu",
      "shows": 296
    },
    "matt-pond-pa": {
      "name": "Matt Pond PA",
      "shows": 8
    },
    "mmj": {
      "name": "My Morning Jacket",
      "shows": 253
    },
    "mogwai": {
      "name": "Mogwai",
      "shows": 164
    },
    "new-mastersounds": {
      "name": "The New Mastersounds",
      "shows": 197
    },
    "radiators": {
      "name": "The Radiators",
      "shows": "1,163"
    },
    "ryan-adams": {
      "name": "Ryan Adams",
      "shows": 409
    },
    "smashing-pumpkins": {
      "name": "Smashing Pumpkins",
      "the": true,
      "shows": "1,005"
    },
    "spoon": {
      "name": "Spoon",
      "shows": 51
    },
    "ted-leo": {
      "name": "Ted Leo and the Pharmacists",
      "shows": 20
    },
    "tenacious-d": {
      "name": "Tenacious D",
      "shows": 31
    },
    "the-walkmen": {
      "name": "The Walkmen",
      "shows": 18
    },
    "war-on-drugs": {
      "name": "The War on Drugs",
      "shows": 30
    },
    "warren-zevon": {
      "name": "Warren Zevon",
      "shows": 104
    },
    "ween": {
      "name": "Ween",
      "shows": 447
    },
    "white-denim": {
      "name": "White Denim",
      "shows": 24
    }
  },
  "root": "http://iguana.app.alecgorge.com",
  isGapless: function() {
    return cookie("gapless") && gapless5AudioContext;
  }
};

$(function() {
  var Tweezer;
  Tweezer = new Application().initialize();
  $(window).resize(resize);
  return $(window).keydown(function(e) {
    var _ref, _ref1;
    if ($("input,textarea").is(":focus")) {
      return;
    }
    if (e.keyCode === 32) {
      if (App.player.get('playing')) {
        if ((_ref = App.footer) != null) {
          _ref.pause();
        }
      } else {
        if ((_ref1 = App.footer) != null) {
          _ref1.playButton();
        }
      }
    } else if (e.keyCode === 37) {
      App.footer.playLast();
    } else if (e.keyCode === 39) {
      App.footer.playNext();
    } else {
      return true;
    }
    return e.preventDefault();
  });
});

$(document).ajaxSend(function(e, xhr, options) {
  var token;
  token = csrf;
  if (token && !_.isEmpty(user)) {
    return xhr.setRequestHeader("X-CSRF-Token", token);
  }
});

resize = function() {
  return $('.page-container').height($(window).height() - $('footer').height()).css('overflow', 'auto');
};

toHHMMSS = function(seconds) {
  var hourStr, hours, minutes, sec_numb, time;
  sec_numb = parseInt(seconds);
  hours = Math.floor(sec_numb / 3600);
  minutes = Math.floor((sec_numb - (hours * 3600)) / 60);
  seconds = sec_numb - (hours * 3600) - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  hourStr = hours ? hours + ":" : "";
  time = hourStr + minutes + ":" + seconds;
  return time;
};

addZero = function(num) {
  if (String(num).length < 2) {
    return String("0" + num);
  }
  return String(num);
};

timeToMS = function(time) {
  var min, sec;
  if (!/m/.test(time)) {
    return 0;
  }
  time = time.replace(/s$/, '');
  time = time.split('m');
  min = +time[0];
  sec = +time[1];
  return ((min * 60) + sec) * 1000;
};

App.utils.ordinal_suffix = function(i) {
  var j, k;
  j = i % 10;
  k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
};

Handlebars.registerHelper("toHHMMSS", function() {
  return new Handlebars.SafeString(toHHMMSS(this.duration));
});

Handlebars.registerHelper("len", function() {
  return new Handlebars.SafeString(toHHMMSS(this.length));
});

Handlebars.registerHelper("length", function(arr) {
  if (!arr) {
    return 0;
  }
  return new Handlebars.SafeString(arr.length);
});

Handlebars.registerHelper("addZero", function(num) {
  return new Handlebars.SafeString(addZero(num));
});

Handlebars.registerHelper("addOne", function(num) {
  return new Handlebars.SafeString(num + 1);
});

Handlebars.registerHelper("newLine", function(str) {
  return new Handlebars.SafeString($('<div/>').text(str.replace(/\n/g, '<br />')).html());
});

Handlebars.registerHelper("if_eq", function(a, b, opts) {
  if (a === b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});

Handlebars.registerHelper("blurb", function(arr, id) {
  var blurb;
  if (arr) {
    blurb = _.findWhere(arr, {
      _song: id
    });
  }
  return new Handlebars.SafeString((blurb != null ? blurb.text : void 0) ? blurb.text : '');
});

var Application;

Application = (function() {
  function Application() {}

  Application.prototype.title = 'Tweezer';

  Application.prototype.initialize = function() {
    App.user = new App.Models.User(user);
    if (window.csrf) {
      App.csrf = csrf;
    }
    App.initial = true;
    this.initViews();
    App.router = new App.Router();
    Backbone.history.start({
      pushState: true
    });
    return this.pushAnchors();
  };

  Application.prototype.initViews = function() {
    App.notify = new App.Views.Notifications();
    App.header = new App.Views.Header();
    App.queueView = new App.Views.Queue();
    App.footer = new App.Views.Footer();
    App.player = new App.Models.Player();
    return App.playerView = new App.Views.Player();
  };

  Application.prototype.pushAnchors = function() {
    return $(document).on("click", "a[href^='/']", function(event) {
      var $el, bypass, href, passThrough, url;
      $el = $(event.currentTarget);
      href = $el.attr('href');
      bypass = $el.attr('data-bypass');
      passThrough = /logout|auth/.test(href);
      if (!bypass && !passThrough && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        event.preventDefault();
        url = href.replace(/^\//, '').replace('\#\!\/', '');
        App.router.navigate(url, {
          trigger: true
        });
        return false;
      }
    });
  };

  return Application;

})();

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Router = (function(_super) {
  __extends(Router, _super);

  function Router() {
    this.changeView = __bind(this.changeView, this);
    this.finishSong = __bind(this.finishSong, this);
    _ref = Router.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Router.prototype.routes = {
    '': 'index'
  };

  Router.prototype.initialize = function() {
    this.route(/^([a-z]+(?:-[a-z]+)*)\/?$/, 'band');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/?$/, 'year');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})\/?$/, 'day');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})-?([0-9]{1,2})?\/?$/, 'show');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})-?([0-9]{1,2})?\/([a-zA-Z0-9\-]*)\/?([0-9]{1,2})?\:?\:?([0-9]{1,2}m[0-9]{1,2})?s?\/?$/, 'song');
    this.route(/^about\/?$/, 'about');
    this.route(/^gapless\/?$/, 'gapless');
    this.route(/^oops\/?$/, 'oops');
    this.route(/^today\/?$/, 'today');
    this.route(/^live\/?$/, 'live');
    this.route(/^chat\/?$/, 'chat');
    this.route(/^real-music\/?$/, 'realMusic');
    this.$container = $('#page-container');
    return this.bind('all', this._trackPageview);
  };

  Router.prototype.index = function() {
    this.band = '';
    this.changeView(new App.Views.IndexPage());
    return document.title = 'Relisten';
  };

  Router.prototype.realMusic = function() {
    this.band = '';
    this.changeView(new App.Views.IndexPage({
      realMusic: true
    }));
    return document.title = 'Real Music | Relisten';
  };

  Router.prototype.band = function(band, year, month, day) {
    var _this = this;
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    App.router.updateDescription("Relisten to " + App.bands[this.band].shows + " " + App.bands[this.band].name + " recordings");
    this.changeView(new App.Views.HomePage());
    this.randomShow = new App.Models.RandomShow({
      band: this.band
    });
    this.randomShow.fetch({
      success: function() {
        var _ref1;
        _ref1 = _this.randomShow.toJSON(), _this.year = _ref1.year, _this.month = _ref1.month, _this.day = _ref1.day;
        App.years = new App.Views.Years({
          band: _this.band
        });
        App.shows = new App.Views.Shows({
          band: _this.band,
          year: _this.year
        });
        return App.songs = new App.Views.Songs({
          band: _this.band,
          year: _this.year,
          month: _this.month,
          day: _this.day,
          showVersion: _this.showVersion
        });
      }
    });
    App.header.render();
    return document.title = "Relisten to " + (App.bands[this.band].the ? "the " : "") + App.bands[this.band].name;
  };

  Router.prototype.year = function(band, year, month, day) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    App.router.updateDescription("Relisten to " + App.bands[this.band].name + " concerts from " + this.year);
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: band
      });
    }
    App.shows = new App.Views.Shows({
      band: band,
      year: year
    });
    if (App.songs) {
      App.songs.$el.empty();
    }
    App.header.render();
    return document.title = "" + year + " | " + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.day = function(band, year, month, day) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    if (App.songs) {
      App.songs.undelegateEvents();
    }
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: band
      });
    }
    if (!(App.shows && App.shows.shows && App.shows.shows.get('year') === +this.year)) {
      App.shows = new App.Views.Shows({
        band: this.band,
        year: this.year
      });
    }
    App.songs = new App.Views.Songs({
      band: this.band,
      year: this.year,
      month: this.month,
      day: this.day
    });
    App.header.render();
    return document.title = "" + this.year + "/" + this.month + "/" + this.day + " | " + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.show = function(band, year, month, day, showVersion) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    this.showVersion = showVersion;
    if (App.songs) {
      App.songs.undelegateEvents();
    }
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: this.band
      });
    }
    if (!(App.shows && App.shows.shows && App.shows.shows.get('year') === +this.year)) {
      App.shows = new App.Views.Shows({
        band: this.band,
        year: this.year
      });
    }
    App.songs = new App.Views.Songs({
      band: this.band,
      year: this.year,
      month: this.month,
      day: this.day,
      showVersion: this.showVersion
    });
    App.header.render();
    return document.title = "" + this.year + "/" + this.month + "/" + this.day + " | " + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.song = function(band, year, month, day, showVersion, slug, version, time) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    this.showVersion = showVersion;
    this.slug = slug;
    this.version = version;
    this.time = time;
    if (this.version) {
      this.slug += '-' + this.version;
    }
    if (App.initial) {
      if (!/m/.test(this.time)) {
        this.time = this.getParameterByName('t');
      }
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: this.band
      });
      App.shows = new App.Views.Shows({
        band: this.band,
        year: this.year
      });
      App.songs = new App.Views.Songs({
        band: this.band,
        year: this.year,
        month: this.month,
        day: this.day,
        showVersion: this.showVersion
      });
      App.header.render();
      return App.songs.listenToOnce(App.songs.folder, 'change', this.finishSong);
    }
    if (!(App.shows && App.shows.shows && App.shows.shows.year === +this.year)) {
      App.shows = new App.Views.Shows({
        year: this.year
      });
    }
    return this.finishSong();
  };

  Router.prototype.finishSong = function() {
    var self;
    self = this;
    App.queue.on('reset', function() {
      var ms, track, tracks, _i, _len;
      tracks = this.pluck("file").map(function(track) {
        return track.replace('_vbr', '');
      });
      if (App.isGapless()) {
        if (this.gaplessPlayer) {
          this.gaplessPlayer.stop();
          this.gaplessPlayer.removeAllTracks();
          for (_i = 0, _len = tracks.length; _i < _len; _i++) {
            track = tracks[_i];
            track = track.replace('_vbr', '');
            this.gaplessPlayer.addTrack(track);
          }
        } else {
          this.gaplessPlayer = new Gapless5("gapless-block", {
            tracks: tracks,
            playOnLoad: true
          });
          this.gaplessPlayer.onnext = function() {
            return App.queue.play(null, 0);
          };
        }
        $("footer .buttons > div, footer .progress-container, .player .time, .player .volume-container").hide();
        $("#gapless-block").show();
        $("footer .buttons").css({
          margin: "0 auto auto auto",
          width: "225px"
        });
        $("footer").css({
          borderTop: "2px solid #888"
        });
      }
      ms = timeToMS(self.time);
      App.song = App.queue.findWhere({
        slug: self.slug
      });
      document.title = "" + (App.song.get('title')) + " | " + self.year + "/" + self.month + "/" + self.day + " | " + App.bands[self.band].name + " | Relisten";
      App.queue.play(App.song, ms);
      return App.queue.off('reset');
    });
    return App.queue.reset(App.songs.songs.tracks);
  };

  Router.prototype.about = function() {
    this.changeView(new App.Views.AboutPage());
    return document.title = 'About | Relisten';
  };

  Router.prototype.gapless = function() {
    this.changeView(new App.Views.GaplessPage());
    return document.title = 'Gapless | Relisten';
  };

  Router.prototype.oops = function() {
    this.changeView(new App.Views.OopsPage());
    return document.title = 'Oops | Relisten';
  };

  Router.prototype.today = function() {
    this.changeView(new App.Views.TodayPage(), false);
    document.title = 'Today | Relisten';
    this.band = 'today';
    return App.header.render();
  };

  Router.prototype.chat = function() {
    this.changeView(new App.Views.ChatPage());
    document.title = 'Chat | Relisten';
    this.band = 'chat';
    return App.header.render();
  };

  Router.prototype.live = function() {
    this.changeView(new App.Views.LivePage(), false);
    document.title = 'Live | Relisten';
    this.band = '';
    return App.header.render();
  };

  Router.prototype.login = function() {
    this.changeView(new App.Views.LoginPage());
    return document.title = 'Login | Relisten';
  };

  Router.prototype.register = function() {
    this.changeView(new App.Views.RegisterPage());
    return document.title = 'Register | Relisten';
  };

  Router.prototype.playlist = function(id) {
    this.changeView(new App.Views.PlaylistPage({
      playlistId: id
    }));
    return document.title = 'Playlist | Relisten';
  };

  Router.prototype.playlists = function() {
    this.changeView(new App.Views.PlaylistsPage(), false);
    return document.title = 'Playlists | Relisten';
  };

  Router.prototype.playlistSong = function(id, year, month, day, showVersion, slug, version, time) {
    var _this = this;
    this.year = year;
    this.month = month;
    this.day = day;
    this.showVersion = showVersion;
    this.slug = slug;
    this.version = version;
    this.time = time;
    if (App.initial) {
      this.changeView(new App.Views.PlaylistPage({
        playlistId: id
      }));
      return App.playlist.on('change', function() {
        _this.finishPlaylistSong({
          year: +_this.year,
          month: +_this.month,
          day: +_this.day,
          showVersion: +_this.showVersion,
          slug: _this.slug,
          version: +_this.version
        }, _this.time);
        return App.playlist.off('change');
      });
    }
    return this.finishPlaylistSong({
      year: +this.year,
      month: +this.month,
      day: +this.day,
      showVersion: +this.showVersion,
      slug: this.slug,
      version: +this.version
    }, this.time);
  };

  Router.prototype.finishPlaylistSong = function(obj, time) {
    var _this = this;
    App.queue.on('reset', function() {
      var ms;
      ms = timeToMS(time);
      App.song = App.queue.findWhere(obj);
      App.queue.play(App.song, ms);
      return App.queue.off('reset');
    });
    return App.queue.reset(App.playlist.get('_songs'));
  };

  Router.prototype.editPlaylist = function(id) {
    return this.changeView(new App.Views.PlaylistsEdit({
      playlistId: id
    }), false);
  };

  Router.prototype.clearActive = function($current) {
    $('header ul.right a').removeClass('active');
    if ($current) {
      return $current.addClass('active');
    }
  };

  Router.prototype.changeView = function(view, render) {
    if (render == null) {
      render = true;
    }
    this.$container.hide();
    if (this.currentView) {
      this.currentView.close();
    }
    if (render) {
      view.render();
      resize();
    }
    this.currentView = view;
    return this.$container.html(view.el).fadeIn('fast');
  };

  Router.prototype.notFound = function() {
    return this.navigate('/', {
      trigger: true
    });
  };

  Router.prototype._trackPageview = function() {
    var url;
    if (App.initial) {
      App.initial = false;
    }
    url = Backbone.history.getFragment();
    if (this.lastUrl === url) {
      return;
    }
    this.lastUrl = url;
    return ga('send', 'pageview', "/" + url);
  };

  Router.prototype.getParameterByName = function(name) {
    var regex, results;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);
    if (results == null) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  };

  Router.prototype.updateDescription = function(desc) {
    if (!this.$meta) {
      this.$meta = $('meta[name=description]');
    }
    return this.$meta.attr('content', desc);
  };

  return Router;

})(Backbone.Router);

var cookie, createCookie, deleteCookie, readCookie;

cookie = function(name, value, days) {
  if (value) {
    return createCookie(name, value, days);
  } else {
    return readCookie(name);
  }
};

createCookie = function(name, value, days) {
  var date, expires;
  if (days == null) {
    days = 7;
  }
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  return document.cookie = name + "=" + value + expires + "; path=/";
};

readCookie = function(name) {
  var c, ca, nameEQ, result, _i, _len;
  nameEQ = name + "=";
  ca = document.cookie.split(';');
  for (_i = 0, _len = ca.length; _i < _len; _i++) {
    c = ca[_i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      result = c.substring(nameEQ.length, c.length);
    }
  }
  return result;
};

deleteCookie = function(name) {
  return createCookie(name, "", -1);
};

App.utils.cookie = {
  cookie: cookie,
  createCookie: createCookie,
  readCookie: readCookie,
  deleteCookie: deleteCookie
};

$.fn.getCursorPosition = function() {
  var input, sel, selLen;
  input = this.get(0);
  if (!input) {
    return;
  }
  if ("selectionStart" in input) {
    return input.selectionStart;
  } else if (document.selection) {
    input.focus();
    sel = document.selection.createRange();
    selLen = document.selection.createRange().text.length;
    sel.moveStart("character", -input.value.length);
    return sel.text.length - selLen;
  }
};

$.fn.setCursorPosition = function(pos) {
  var range;
  if ($(this).get(0).setSelectionRange) {
    return $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    return range.select();
  }
};

$.fn.setCursorRange = function(start, end) {
  return this.each(function() {
    var range;
    if (this.setSelectionRange) {
      this.focus();
      return this.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      range = this.createTextRange();
      range.collapse(true);
      range.moveEnd("character", end);
      range.moveStart("character", start);
      return range.select();
    }
  });
};

App.utils.getURLParameters = function(url) {
  var obj;
  obj = {};
  _.each(url.split('?')[1].split('&'), function(param) {
    var split;
    split = param.split('=');
    return obj[split[0]] = split[1];
  });
  return obj;
};

var EMAIL_REGEX, validateEmail;

EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

validateEmail = function(email) {
  return EMAIL_REGEX.test(email);
};

App.utils.validate = {
  validateEmail: validateEmail
};

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Model = (function(_super) {
  __extends(Model, _super);

  function Model() {
    _ref = Model.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Model;

})(Backbone.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Folder = (function(_super) {
  __extends(Folder, _super);

  function Folder() {
    _ref = Folder.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Folder.prototype.url = function() {
    return '/api/v1/folder/' + this.get('id');
  };

  return Folder;

})(App.Models.Model);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Player = (function(_super) {
  __extends(Player, _super);

  function Player() {
    this.play = __bind(this.play, this);
    _ref = Player.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Player.prototype.initialize = function() {
    this.times = 0;
    return this.on('change:playing', function(player, playing) {
      if (playing) {
        return $('footer .play').removeClass('play').addClass('pause');
      } else {
        return $('footer .pause').removeClass('pause').addClass('play');
      }
    });
  };

  Player.prototype.play = function(ms) {
    var canPlayOgg, id, self, url, volume,
      _this = this;
    if (ms == null) {
      ms = 0;
    }
    if (this.times > 4) {
      return this.times = 0;
    }
    if (this.sound) {
      volume = this.sound.volume;
      this.sound.destruct();
    }
    this.set('id', id = App.song.get('id'));
    App.playerView.played.push(id);
    canPlayOgg = soundManager.canPlayMIME('audio/ogg');
    if (!(canPlayOgg && (url = App.song.get('oggUrl')))) {
      url = App.song.get('file');
    }
    self = this;
    if (App.isGapless() && App.queue.gaplessPlayer) {
      App.queue.gaplessPlayer.gotoTrack(App.queue.idx, true);
      this.updateText();
      return this.slideDown();
    } else {
      return soundManager.onready(function() {
        _this.sound = soundManager.createSound({
          id: "phish" + id,
          url: url,
          position: ms
        });
        return _this.sound.play({
          ondataerror: function() {
            if (console) {
              return console.log('error mate');
            }
          },
          whileloading: function() {
            if (self.times > 0) {
              self.times = 0;
            }
            return App.footer.updateProgress(this.bytesLoaded, this.bytesTotal);
          },
          whileplaying: function() {
            return App.footer.updatePlaying(this.position, this.duration);
          },
          onplay: function() {
            _this.sound.setVolume(volume || 100);
            _this.updateText();
            return _this.slideDown();
          },
          onfinish: function() {
            this.stop();
            App.footer.playNext();
            if (App.queue.idx === App.queue.length) {
              return App.player.set('playing', false);
            }
          },
          onload: function() {
            if (this.readyState === 2 && self.times++ < 5) {
              return self.play();
            }
          }
        });
      });
    }
  };

  Player.prototype.updateText = function() {
    var title, _ref1;
    if (title = (_ref1 = App.song) != null ? _ref1.get('title') : void 0) {
      return App.playerView.updateText({
        title: title,
        album: App.song.get('show_title'),
        length: App.song.get('length')
      });
    }
  };

  Player.prototype.slideDown = function() {
    var $container, $footer;
    $footer = $('footer');
    if ($footer.height() !== 100) {
      $footer.animate({
        'height': 100
      }, 1000);
      return $container = $('.page-container').animate({
        'height': $(window).height() - 100
      }, 1000, function() {
        return $container.css('overflow', 'auto');
      });
    }
  };

  return Player;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Playlist = (function(_super) {
  __extends(Playlist, _super);

  function Playlist() {
    _ref = Playlist.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Playlist.prototype.idAttribute = '_id';

  Playlist.prototype.url = function() {
    var id;
    id = this.get('_id');
    return '/api/v1/playlist' + (id ? "/" + id : '');
  };

  Playlist.prototype.defaults = {
    _songs: [],
    name: 'Untitled Playlist'
  };

  return Playlist;

})(App.Models.Model);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Plays = (function(_super) {
  __extends(Plays, _super);

  function Plays() {
    this.onFetch = __bind(this.onFetch, this);
    this.executeLongPolling = __bind(this.executeLongPolling, this);
    this.stopLongPolling = __bind(this.stopLongPolling, this);
    this.startLongPolling = __bind(this.startLongPolling, this);
    _ref = Plays.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Plays.prototype.longPolling = false;

  Plays.prototype.lastPoll = 0;

  Plays.prototype.intervalSeconds = 7;

  Plays.prototype.first = true;

  Plays.prototype.responses = 0;

  Plays.prototype.url = function() {
    return "" + App.root + "/api/poll?since=" + this.lastPoll;
  };

  Plays.prototype.parse = function(response) {
    this.lastPoll = response.now;
    return response;
  };

  Plays.prototype.startLongPolling = function() {
    this.longPolling = true;
    return this.executeLongPolling();
  };

  Plays.prototype.stopLongPolling = function() {
    return this.longPolling = false;
  };

  Plays.prototype.executeLongPolling = function() {
    return this.fetch({
      success: this.onFetch
    });
  };

  Plays.prototype.onFetch = function() {
    this.responses++;
    if (this.longPolling) {
      return setTimeout(this.executeLongPolling, 1000 * this.intervalSeconds);
    }
  };

  return Plays;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.RandomShow = (function(_super) {
  __extends(RandomShow, _super);

  function RandomShow() {
    _ref = RandomShow.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  RandomShow.prototype.url = function() {
    var band;
    band = this.get('band');
    return "" + App.root + "/api/artists/" + band + "/random_date";
  };

  RandomShow.prototype.parse = function(response) {
    var date, day, month, year, _ref1;
    if (!(response != null ? response.data : void 0)) {
      return {};
    }
    date = response.data;
    _ref1 = date.split('-'), year = _ref1[0], month = _ref1[1], day = _ref1[2];
    year = +year;
    month = +month;
    day = +day;
    return {
      year: year,
      month: month,
      day: day
    };
  };

  return RandomShow;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Shows = (function(_super) {
  __extends(Shows, _super);

  function Shows() {
    _ref = Shows.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Shows.prototype.url = function() {
    var band, year;
    year = this.get('year');
    band = this.get('band');
    return "" + App.root + "/api/artists/" + band + "/years/" + year;
  };

  Shows.prototype.parse = function(response) {
    response.data.shows.map(function(show) {
      var day, month, year, _ref1;
      _ref1 = show.display_date.split('-'), year = _ref1[0], month = _ref1[1], day = _ref1[2];
      show.year = +year;
      show.month = +month;
      show.day = +day;
      if (!show.day) {
        show.day = +day.split(' ')[0];
      }
      return show;
    });
    return response.data;
  };

  return Shows;

})(App.Models.Model);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Song = (function(_super) {
  __extends(Song, _super);

  function Song() {
    this.change = __bind(this.change, this);
    _ref = Song.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Song.prototype.url = function() {
    var day, id, month, showVersion, slug, year;
    id = this.get('_id');
    if (id) {
      return "/api/v1/song/" + id;
    }
    year = this.get('year');
    month = this.get('month');
    day = this.get('day');
    showVersion = this.get('showVersion') || 0;
    slug = this.get('longSlug');
    return "/api/v1/" + year + "/" + month + "/" + day + "-" + showVersion + "/" + slug;
  };

  Song.prototype.change = function() {
    return App.queue.push(this);
  };

  return Song;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Songs = (function(_super) {
  __extends(Songs, _super);

  function Songs() {
    _ref = Songs.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Songs.prototype.url = function() {
    var band, day, month, year;
    band = this.get('band');
    year = this.get('year');
    month = addZero(this.get('month'));
    day = addZero(this.get('day'));
    return "" + App.root + "/api/artists/" + band + "/years/" + year + "/shows/" + year + "-" + month + "-" + day;
  };

  Songs.prototype.parse = function(response) {
    return response;
  };

  return Songs;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Today = (function(_super) {
  __extends(Today, _super);

  function Today() {
    _ref = Today.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Today.prototype.url = function() {
    return "" + App.root + "/api/today";
  };

  Today.prototype.initialize = function() {
    return this.fetch();
  };

  return Today;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.User = (function(_super) {
  __extends(User, _super);

  function User() {
    _ref = User.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  User.prototype.url = '/api/v1/me';

  User.prototype.loggedIn = function() {
    return !!this.get('email');
  };

  User.prototype.reset = function() {
    if (this.loggedIn()) {
      return App.router.navigate('/', {
        trigger: true
      });
    }
  };

  return User;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Years = (function(_super) {
  __extends(Years, _super);

  function Years() {
    _ref = Years.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Years.prototype.url = function() {
    var band;
    band = this.get('band');
    return "" + App.root + "/api/artists/" + band + "/years";
  };

  return Years;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Collections.Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection() {
    _ref = Collection.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Collection;

})(Backbone.Collection);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Collections.Playlists = (function(_super) {
  __extends(Playlists, _super);

  function Playlists() {
    _ref = Playlists.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Playlists.prototype.url = '/api/v1/playlists';

  Playlists.prototype.model = App.Models.Playlist;

  return Playlists;

})(App.Collections.Collection);

var gapless5AudioContext, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

gapless5AudioContext = (window.hasWebKit ? new webkitAudioContext() : (typeof AudioContext !== "undefined" ? new AudioContext() : null));

App.Collections.Queue = (function(_super) {
  __extends(Queue, _super);

  function Queue() {
    this.play = __bind(this.play, this);
    _ref = Queue.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Queue.prototype.model = App.Models.Song;

  Queue.prototype.idx = 0;

  Queue.prototype.initialize = function() {
    var _this = this;
    this.on('add', function() {
      if ((_this.length === 1) || (_this.idx === _this.length - 1 && !App.player.get('playing'))) {
        return _this.play();
      }
    });
    return this.on('reset', function() {
      return _this.idx = 0;
    });
  };

  Queue.prototype.play = function(song, ms) {
    var band, day, month, showVersion, showVersionStr, slug, title, url, year, _ref1;
    if (song) {
      if (App.song) {
        this.idx = this.indexOf(App.song);
      }
    } else {
      if (this.idx === this.length) {
        return App.footer.pause();
      }
      App.song = this.at(this.idx);
    }
    if (!App.song) {
      return false;
    }
    this.invoke('set', {
      active: ''
    });
    App.song.set('active', 'active');
    App.player.play(ms);
    App.player.set('playing', true);
    _ref1 = App.song.toJSON(), slug = _ref1.slug, title = _ref1.title, year = _ref1.year, month = _ref1.month, day = _ref1.day, showVersion = _ref1.showVersion, band = _ref1.band;
    App.router.updateDescription("Relisten to " + (App.bands[band].the ? "the " : void 0) + App.bands[band].name + " playing " + title + " on " + months[month - 1] + " " + (App.utils.ordinal_suffix(day)) + ", " + year + " at " + App.songs.songs.venue.name + " in " + App.songs.songs.venue.city);
    this.notify(title, "" + App.bands[band].name + "\n" + year + "/" + month + "/" + day);
    $.ajax({
      type: "POST",
      url: "" + App.root + "/api/play",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        song: App.song.toJSON()
      }),
      success: function() {
        return 0;
      }
    });
    showVersionStr = showVersion ? '-' + showVersion : '';
    if (!window.location.pathname.match("/" + band + "/" + year + "/" + month + "/" + day + showVersionStr + "/" + slug)) {
      url = "/" + band + "/" + year + "/" + month + "/" + day + showVersionStr + "/" + slug;
      document.title = "" + title + " | " + year + "/" + month + "/" + day + " | " + App.bands[band].name + "| Relisten";
      Backbone.history.navigate(url, {
        trigger: false
      });
      ga('send', 'pageview', "" + url);
    }
    App.queueView.render(App.queueView.$el.find('ul').scrollTop());
    $('.song').removeClass('active');
    $("." + band + "-" + year + "-" + month + "-" + day + showVersionStr + "-" + slug).addClass('active');
    return ++this.idx;
  };

  Queue.prototype.playLast = function() {
    if (App.player.sound.position > 10000) {
      return App.player.sound.setPosition(0);
    }
    this.idx -= 2;
    if (this.idx < 0) {
      this.idx = 0;
    }
    return this.play(null, 0);
  };

  Queue.prototype.notify = function(title, body) {
    var notification;
    if (!window.Notification) {
      return;
    }
    if (Notification.permission === "granted") {
      notification = new Notification(title, {
        body: body
      });
      return setTimeout(function() {
        return notification.close();
      }, 2500);
    }
  };

  return Queue;

})(App.Collections.Collection);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.View = (function(_super) {
  __extends(View, _super);

  function View() {
    _ref = View.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  View.prototype.initialize = function() {
    if (this.autoRender) {
      return this.render();
    }
  };

  View.prototype.render = function() {
    if (this.$el && this.template) {
      return this.$el.html(this.template());
    }
  };

  View.prototype.close = function() {
    this.remove();
    return this.undelegateEvents();
  };

  return View;

})(Backbone.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.AboutPage = (function(_super) {
  __extends(AboutPage, _super);

  function AboutPage() {
    _ref = AboutPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  AboutPage.prototype.className = 'about-page';

  AboutPage.prototype.template = JST['about'];

  AboutPage.prototype.initialize = function() {
    return App.router.clearActive($('header .about'));
  };

  AboutPage.prototype.render = function() {
    this.$el.html(this.template());
    return this;
  };

  return AboutPage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.ChatPage = (function(_super) {
  __extends(ChatPage, _super);

  function ChatPage() {
    _ref = ChatPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  ChatPage.prototype.className = 'chat-page';

  ChatPage.prototype.template = JST['chat'];

  ChatPage.prototype.initialize = function() {
    return App.router.clearActive($('header .chat'));
  };

  ChatPage.prototype.render = function() {
    this.$el.html(this.template({}));
    return _.defer(function() {
      var channel_name, current_style, custom_css_path, iframe, iframe_query, iframe_src, nickname, target_element;
      target_element = document.getElementById("tlkio");
      channel_name = target_element.getAttribute("data-channel");
      custom_css_path = target_element.getAttribute("data-theme");
      nickname = target_element.getAttribute("data-nickname");
      iframe = document.createElement("iframe");
      iframe_src = "//embed.tlk.io/" + channel_name;
      iframe_query = [];
      if (custom_css_path && custom_css_path.length > 0) {
        iframe_query.push("custom_css_path=" + custom_css_path);
      }
      if (nickname && nickname.length > 0) {
        iframe_query.push("nickname=" + nickname);
      }
      if (iframe_query.length > 0) {
        iframe_src += "?" + iframe_query.join("&");
      }
      iframe.setAttribute("src", iframe_src);
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "100%");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("style", "margin-bottom: -8px;");
      current_style = target_element.getAttribute("style");
      target_element.setAttribute("style", "overflow: auto; -webkit-overflow-scrolling: touch;" + current_style);
      return target_element.appendChild(iframe);
    });
  };

  return ChatPage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Footer = (function(_super) {
  __extends(Footer, _super);

  function Footer() {
    this.mouseUp = __bind(this.mouseUp, this);
    _ref = Footer.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Footer.prototype.el = 'footer';

  Footer.prototype.template = JST['footer'];

  Footer.prototype.events = {
    'mouseenter .progress-container': 'hoverBar',
    'mousemove .progress-container': 'moveBar',
    'mouseleave .progress-container': 'leaveBar',
    'mousedown .progress-container': 'seekDown',
    'mouseup': 'mouseUp',
    'click .pause': 'pause',
    'click .play': 'playButton',
    'click .next': 'playNext',
    'click .last': 'playLast'
  };

  Footer.prototype.initialize = function() {
    this.$progress = this.$el.find('.progress-bar');
    this.$container = this.$el.find('.progress-container');
    this.$position = this.$el.find('.position-bar');
    return this.$window = $(window);
  };

  Footer.prototype.hoverBar = function(e) {
    this.$progress.stop().animate({
      height: '10px'
    }, 300);
    this.$container.stop().animate({
      height: '10px'
    }, 300);
    return this.$position.stop().animate({
      height: '10px'
    }, 300);
  };

  Footer.prototype.moveBar = function(e) {
    var time;
    time = toHHMMSS(this._clickToMs(e.pageX) / 1000);
    App.playerView.$seconds.html(time);
    if (this.dragging) {
      return this.seek(e.pageX);
    }
  };

  Footer.prototype.leaveBar = function() {
    this.$progress.stop().animate({
      height: '8px'
    }, 300);
    this.$position.stop().animate({
      height: '8px'
    }, 300);
    this.$container.stop().animate({
      height: '8px'
    }, 300);
    return this.$container.off('mousemove');
  };

  Footer.prototype.updateProgress = function(loaded, total) {
    return this.$progress.width("" + ((loaded / total) * 100) + "%");
  };

  Footer.prototype.updatePlaying = function(position, duration) {
    if (!this.$container.is(":hover")) {
      App.playerView.$seconds.html(toHHMMSS(position / 1000));
    }
    return this.$position.css('left', "" + ((position / duration) * 100) + "%");
  };

  Footer.prototype.seekDown = function(e) {
    this.seek(e.pageX);
    return this.dragging = true;
  };

  Footer.prototype.mouseUp = function(e) {
    var coord;
    if (!this.dragging) {
      return;
    }
    coord = e.pageX / this.$window.width();
    if (App.player.sound && App.player.sound.bytesLoaded / App.player.sound.bytesTotal < coord) {
      App.player.sound.destruct();
      App.player.play(this._clickToMs(e.pageX));
    }
    return this.dragging = false;
  };

  Footer.prototype.seek = function(pageX) {
    var coord;
    coord = pageX / this.$window.width();
    if (App.player.sound && App.player.sound.bytesLoaded / App.player.sound.bytesTotal < coord) {
      App.player.sound.destruct();
      return App.player.play(this._clickToMs(pageX));
    }
    return App.player.sound.setPosition(coord * App.song.get('length') * 1000);
  };

  Footer.prototype.pause = function() {
    if (App.isGapless() && App.queue.gaplessPlayer) {
      App.queue.gaplessPlayer.pause();
    } else {
      soundManager.pause("phish" + App.player.get('id'));
    }
    return App.player.set('playing', false);
  };

  Footer.prototype.playButton = function() {
    var id;
    id = App.player.get('id');
    App.player.set('playing', true);
    if (App.isGapless() && App.queue.gaplessPlayer && App.playerView.played.indexOf(id >= 0)) {
      App.queue.gaplessPlayer.play();
    }
    if (App.playerView.played.indexOf(id >= 0)) {
      return soundManager.resume("phish" + id);
    }
    return App.player.play();
  };

  Footer.prototype.playNext = function() {
    return App.queue.play(null, 0);
  };

  Footer.prototype.playLast = function() {
    return App.queue.playLast();
  };

  Footer.prototype._clickToMs = function(pageX) {
    var coord;
    coord = pageX / this.$window.width();
    return coord * App.song.get('length') * 1000;
  };

  return Footer;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.GaplessPage = (function(_super) {
  __extends(GaplessPage, _super);

  function GaplessPage() {
    _ref = GaplessPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  GaplessPage.prototype.className = 'gapless-page';

  GaplessPage.prototype.template = JST['gapless'];

  GaplessPage.prototype.initialize = function() {
    return App.router.clearActive($('header .gapless'));
  };

  GaplessPage.prototype.events = {
    'click .enable-gapless': 'gapless'
  };

  GaplessPage.prototype.render = function() {
    this.$el.html(this.template({
      enabled: cookie("gapless")
    }));
    return this;
  };

  GaplessPage.prototype.gapless = function() {
    var enabled;
    enabled = cookie("gapless");
    deleteCookie("gapless");
    cookie("gapless", !enabled, 1024);
    ga('send', 'event', 'gapless', 'enable', 'button', !enabled ? 1 : 0);
    this.render();
    return location.reload();
  };

  return GaplessPage;

})(App.Views.View);

var otherPages, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

otherPages = {
  today: {
    name: "Today in History"
  },
  chat: {
    name: "People wax poetic about Jerry"
  }
};

App.Views.Header = (function(_super) {
  __extends(Header, _super);

  function Header() {
    this.render = __bind(this.render, this);
    _ref = Header.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Header.prototype.autoRender = true;

  Header.prototype.el = 'header';

  Header.prototype.template = JST['header'];

  Header.prototype.events = {
    'click .band': 'refreshBand'
  };

  Header.prototype.initialize = function() {
    return Header.__super__.initialize.apply(this, arguments);
  };

  Header.prototype.render = function(playlist) {
    var _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
    return this.$el.html(this.template({
      loggedIn: App.user.loggedIn(),
      slug: (_ref1 = App.router) != null ? _ref1.band : void 0,
      bandName: ((_ref2 = App.bands[(_ref3 = App.router) != null ? _ref3.band : void 0]) != null ? _ref2.name : void 0) || ((_ref4 = otherPages[(_ref5 = App.router) != null ? _ref5.band : void 0]) != null ? _ref4.name : void 0),
      the: (_ref6 = App.bands[(_ref7 = App.router) != null ? _ref7.band : void 0]) != null ? _ref6.the : void 0
    }));
  };

  Header.prototype.refreshBand = function() {
    var _ref1, _ref2, _ref3;
    if (Backbone.history.fragment === ((_ref1 = App.router) != null ? _ref1.band : void 0)) {
      return Backbone.history.loadUrl('/' + ((_ref2 = App.router) != null ? _ref2.band : void 0));
    } else {
      return App.router.navigate('/' + ((_ref3 = App.router) != null ? _ref3.band : void 0), {
        trigger: true
      });
    }
  };

  return Header;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.HomePage = (function(_super) {
  __extends(HomePage, _super);

  function HomePage() {
    this.render = __bind(this.render, this);
    _ref = HomePage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  HomePage.prototype.className = 'home-page';

  HomePage.prototype.template = JST['home'];

  HomePage.prototype.render = function() {
    this.checkErr();
    App.router.clearActive();
    App.header.render();
    this.$el.html(this.template({
      loggedIn: App.user.loggedIn()
    }));
    resize();
    return this;
  };

  HomePage.prototype.checkErr = function() {
    var params;
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case "maxProviders":
          return App.notify.send('Error', "This is how you send an error notification.", false, 4000);
      }
    }
  };

  return HomePage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.IndexPage = (function(_super) {
  __extends(IndexPage, _super);

  function IndexPage() {
    this.render = __bind(this.render, this);
    _ref = IndexPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  IndexPage.prototype.className = 'index-page';

  IndexPage.prototype.template = JST['index'];

  IndexPage.prototype.initialize = function(options) {
    this.options = options;
    return IndexPage.__super__.initialize.apply(this, arguments);
  };

  IndexPage.prototype.render = function() {
    var _ref1, _ref2;
    App.header.render();
    this.$el.html(this.template({
      bands: ((_ref1 = this.options) != null ? _ref1.realMusic : void 0) ? App.realMusic : App.bands,
      "default": Notification.permission === "default",
      realMusic: (_ref2 = this.options) != null ? _ref2.realMusic : void 0
    }));
    if (Notification.permission === "default") {
      return this.$el.find('.enable-notifications')[0].addEventListener('click', function(e) {
        if (Notification.permission === "default") {
          return Notification.requestPermission(function(permission) {
            $(e.target).fadeOut();
            return ga('send', 'event', 'notifications', 'enable', 'index button', permission === "granted" ? 1 : 0);
          });
        }
      });
    }
  };

  return IndexPage;

})(App.Views.View);

var listedPlays, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

listedPlays = {};

App.Views.LivePage = (function(_super) {
  __extends(LivePage, _super);

  function LivePage() {
    this.fresh = __bind(this.fresh, this);
    this.render = __bind(this.render, this);
    _ref = LivePage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  LivePage.prototype.className = 'live-page';

  LivePage.prototype.template = JST['live'];

  LivePage.prototype.events = {
    'click a': 'clickA'
  };

  LivePage.prototype.initialize = function() {
    this.model = new App.Models.Plays();
    this.model.startLongPolling(this.render);
    this.model.on('change', this.render);
    App.router.clearActive($('header .live'));
    return this.fresh();
  };

  LivePage.prototype.render = function() {
    var plays, total,
      _this = this;
    if (this.$el) {
      total = 0;
      plays = this.model.get('plays') || [];
      plays = plays.map(function(play) {
        var listed, _ref1;
        if (_this.model.responses === 0 && ++total > 5) {
          listedPlays[play.id] = true;
        }
        listed = listedPlays[play.id] || false;
        return _.extend(play, {
          bandName: (_ref1 = App.bands[play.band]) != null ? _ref1.name : void 0,
          listed: listed
        });
      });
      return this.$el.html(this.template({
        plays: plays,
        listedPlays: listedPlays
      }));
    }
  };

  LivePage.prototype.fresh = function() {
    var $el, id,
      _this = this;
    $el = this.$('.fresh:last');
    id = $el.attr('data-id');
    listedPlays[id] = true;
    $el.slideDown(function() {
      return $el.removeClass('fresh');
    });
    if (this.model.longPolling) {
      return setTimeout(function() {
        return _this.fresh();
      }, Math.floor(Math.random() * 3000) + 350);
    }
  };

  LivePage.prototype.remove = function() {
    this.model.stopLongPolling();
    return LivePage.__super__.remove.apply(this, arguments);
  };

  LivePage.prototype.clickA = function() {
    return App.initial = true;
  };

  return LivePage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.LoginPage = (function(_super) {
  __extends(LoginPage, _super);

  function LoginPage() {
    _ref = LoginPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  LoginPage.prototype.className = 'login-page';

  LoginPage.prototype.template = JST['login'];

  LoginPage.prototype.render = function() {
    this.checkErr();
    this.$el.html(this.template({
      csrf: App.csrf
    }));
    return App.router.clearActive($('header .login'));
  };

  LoginPage.prototype.checkErr = function() {
    var params;
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case "0":
          return App.notify.send('Error', "No User Found", false, 4000);
        case "1":
          return App.notify.send('Error', "Password Incorrect", false, 4000);
        case "2":
          return App.notify.send('Error', "Logged in too many times, try again later.", false, 4000);
      }
    }
  };

  return LoginPage;

})(App.Views.View);

var _ref, _ref1,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Notification = (function(_super) {
  __extends(Notification, _super);

  function Notification() {
    this.close = __bind(this.close, this);
    _ref = Notification.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Notification.prototype.autoRender = true;

  Notification.prototype.tagName = "li";

  Notification.prototype.events = {
    "click a": "close"
  };

  Notification.prototype.template = JST['notification'];

  Notification.prototype.initialize = function(_arg) {
    this.message = _arg.message, this.title = _arg.title, this.type = _arg.type, this.sticky = _arg.sticky, this.time = _arg.time, this.img = _arg.img;
    Notification.__super__.initialize.apply(this, arguments);
    return this;
  };

  Notification.prototype.render = function() {
    this.$el.hide().html(this.template({
      message: this.message,
      title: this.title,
      img: this.img
    })).addClass(this.type).show().attr("data-view", "App.Views.Notification");
    if (!this.sticky) {
      setTimeout(this.close, this.time);
    }
    return this;
  };

  Notification.prototype.close = function() {
    return $(this.el).slideUp("slow");
  };

  return Notification;

})(App.Views.View);

App.Views.Notifications = (function(_super) {
  __extends(Notifications, _super);

  function Notifications() {
    this.send = __bind(this.send, this);
    _ref1 = Notifications.__super__.constructor.apply(this, arguments);
    return _ref1;
  }

  Notifications.prototype.el = '#notifications';

  Notifications.prototype.send = function(title, message, sticky, time, img) {
    var notificationEl, type;
    if (sticky == null) {
      sticky = false;
    }
    if (time == null) {
      time = 3000;
    }
    type = "notify";
    notificationEl = new App.Views.Notification({
      title: title,
      message: message,
      type: type,
      sticky: sticky,
      time: time,
      img: img
    }).el;
    this.$el.append(notificationEl);
    return notificationEl;
  };

  Notifications.prototype.render = function() {
    this.$el.attr("data-view", "App.Views.Notifications");
    return this;
  };

  return Notifications;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.OopsPage = (function(_super) {
  __extends(OopsPage, _super);

  function OopsPage() {
    _ref = OopsPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  OopsPage.prototype.className = 'oops-page';

  OopsPage.prototype.template = JST['oops'];

  OopsPage.prototype.initialize = function() {
    return App.router.clearActive($('header .fucked-up'));
  };

  OopsPage.prototype.render = function() {
    this.$el.html(this.template({
      enabled: cookie("oops")
    }));
    return this;
  };

  return OopsPage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Player = (function(_super) {
  __extends(Player, _super);

  function Player() {
    this.setVolume = __bind(this.setVolume, this);
    this.volumeMove = __bind(this.volumeMove, this);
    this.clickUp = __bind(this.clickUp, this);
    this.volume = __bind(this.volume, this);
    _ref = Player.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Player.prototype.el = '.player-container';

  Player.prototype.template = JST['player'];

  Player.prototype.played = [];

  Player.prototype.events = {
    'mousedown .volume-container': 'volume',
    'mouseup': 'clickUp',
    'mousemove .volume-container': 'volumeMove'
  };

  Player.prototype.initialize = function() {
    soundManager.setup({
      url: "/swf",
      useHTML5Audio: true,
      preferFlash: false,
      debugMode: false
    });
    return this.render();
  };

  Player.prototype.render = function() {
    this.$el.html(this.template());
    App.player.updateText();
    this.$seconds = this.$el.find('.seconds');
    this.$volumeContainer = this.$el.find('.volume-container');
    return this.$volume = this.$volumeContainer.find('.volume');
  };

  Player.prototype.updateText = function(obj) {
    var album, length, title;
    title = obj.title, album = obj.album, length = obj.length;
    this.$el.find('h3').html(title || '');
    this.$el.find('h4').html(album || '');
    return this.$el.find('.total').html(length ? toHHMMSS(length) : "0:00");
  };

  Player.prototype.volume = function(e) {
    this.setVolume(e.pageY);
    return this.dragging = true;
  };

  Player.prototype.clickUp = function(e) {
    return this.dragging = false;
  };

  Player.prototype.volumeMove = function(e) {
    if (this.dragging) {
      return this.setVolume(e.pageY);
    }
  };

  Player.prototype.setVolume = function(pageY) {
    var vol;
    vol = 100 - (pageY - this.$volumeContainer.offset().top) / this.$volumeContainer.height() * 100;
    App.player.sound.setVolume(vol);
    return this.$volume.height("" + vol + "%");
  };

  return Player;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.PlaylistPage = (function(_super) {
  __extends(PlaylistPage, _super);

  function PlaylistPage() {
    _ref = PlaylistPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PlaylistPage.prototype.className = 'playlist-page';

  PlaylistPage.prototype.template = JST['playlist'];

  PlaylistPage.prototype.events = {
    'click .song': 'play'
  };

  PlaylistPage.prototype.initialize = function() {
    App.playlist = new App.Models.Playlist({
      _id: this.options.playlistId
    });
    this.listenTo(App.playlist, 'change', this.render);
    return App.playlist.fetch();
  };

  PlaylistPage.prototype.render = function() {
    this.$el.html(this.template({
      playlist: App.playlist.toJSON(),
      userId: App.user.get('_id')
    }));
    return this;
  };

  return PlaylistPage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.PlaylistsEdit = (function(_super) {
  __extends(PlaylistsEdit, _super);

  function PlaylistsEdit() {
    _ref = PlaylistsEdit.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PlaylistsEdit.prototype.className = 'playlists-edit-page';

  PlaylistsEdit.prototype.template = JST['playlists-edit'];

  PlaylistsEdit.prototype.events = {
    'submit form': 'saveBlurbs'
  };

  PlaylistsEdit.prototype.initialize = function() {
    App.playlist = new App.Models.Playlist({
      _id: this.options.playlistId
    });
    App.playlist.fetch();
    this.listenToOnce(App.playlist, 'change', this.render);
    return App.header.render(false);
  };

  PlaylistsEdit.prototype.render = function() {
    this.$el.html(this.template({
      playlist: App.playlist.toJSON()
    }));
    return this;
  };

  PlaylistsEdit.prototype.saveBlurbs = function(e) {
    var $textarea, PUT, data, playlistId, title;
    e.preventDefault();
    playlistId = App.playlist.get('_id');
    title = this.$el.find('input.name').val();
    data = {
      playlistId: playlistId,
      title: title,
      arr: []
    };
    PUT = this.PUT;
    $textarea = $('textarea');
    $textarea.each(function(idx) {
      var $text, val;
      $text = $(this);
      val = typeof $text.val() === 'string' ? $text.val() : '';
      data.arr.push({
        text: val,
        songId: $text.siblings('input').val()
      });
      if (idx === $textarea.length - 1) {
        return PUT(data);
      }
    });
    return false;
  };

  PlaylistsEdit.prototype.PUT = function(data) {
    return $.ajax({
      type: 'PUT',
      url: '/api/v1/blurbs',
      data: data,
      success: function(json) {
        if (json) {
          return App.notify.send('Saved', 'Your playlist has been saved');
        }
      }
    });
  };

  return PlaylistsEdit;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.PlaylistsPage = (function(_super) {
  __extends(PlaylistsPage, _super);

  function PlaylistsPage() {
    _ref = PlaylistsPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PlaylistsPage.prototype.className = 'playlists-page';

  PlaylistsPage.prototype.template = JST['playlists'];

  PlaylistsPage.prototype.initialize = function() {
    App.router.clearActive($('header .playlists'));
    this.playlists || (this.playlists = new App.Collections.Playlists());
    this.listenTo(this.playlists, 'reset', this.render);
    return this.playlists.fetch({
      reset: true
    });
  };

  PlaylistsPage.prototype.render = function() {
    this.$el.html(this.template({
      playlists: this.playlists.toJSON()
    }));
    return this;
  };

  return PlaylistsPage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Queue = (function(_super) {
  __extends(Queue, _super);

  function Queue() {
    _ref = Queue.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Queue.prototype.el = '.queue-container';

  Queue.prototype.template = JST['queue'];

  Queue.prototype.events = {
    'click .save': 'savePlaylist',
    'click .song': 'play',
    'click .delete': 'removeFromQueue',
    'click .clear': 'clearQueue'
  };

  Queue.prototype.initialize = function() {
    App.queue = new App.Collections.Queue();
    this.listenTo(App.queue, 'add', this.render);
    this.listenTo(App.queue, 'reset', this.render);
    return this.render();
  };

  Queue.prototype.render = function(scrollTop, dontAnimateScroll) {
    var $active, song, top, _ref1, _ref2, _ref3, _ref4, _ref5;
    song = App.queue.at(App.queue.idx - 1);
    this.$el.html(this.template({
      queue: App.queue.toJSON(),
      loggedIn: App.user.loggedIn(),
      activeSlug: App.queue ? song != null ? song.get('slug') : void 0 : false,
      year: (_ref1 = App.router) != null ? _ref1.year : void 0,
      month: (_ref2 = App.router) != null ? _ref2.month : void 0,
      day: (_ref3 = App.router) != null ? _ref3.day : void 0,
      showVersion: (_ref4 = App.router) != null ? _ref4.showVersion : void 0,
      band: (_ref5 = App.router) != null ? _ref5.band : void 0
    }));
    this.$ul = this.$el.find('ul');
    if (scrollTop) {
      this.$ul.scrollTop(scrollTop);
    }
    if (dontAnimateScroll) {
      return;
    }
    $active = this.$ul.find('.active');
    if (!$active.length) {
      return;
    }
    top = $active.position().top;
    return this.$ul.animate({
      scrollTop: top + this.$ul.scrollTop() - 30
    }, 1250);
  };

  Queue.prototype.savePlaylist = function() {
    var playlist;
    playlist = new App.Models.Playlist({
      _songs: _.pluck(App.queue.toJSON(), '_id')
    });
    playlist.save();
    return this.listenToOnce(playlist, 'change', function() {
      return Backbone.history.navigate("/playlist/" + (playlist.get('_id')) + "/edit", {
        trigger: true
      });
    });
  };

  Queue.prototype.play = function(e) {
    e.preventDefault();
    App.queue.idx = this.$el.find('li').index($(e.target).parent());
    return App.queue.play();
  };

  Queue.prototype.removeFromQueue = function(e) {
    var idx;
    idx = this.$el.find('.delete').index($(e.target));
    App.queue.remove(App.queue.at(idx));
    if (idx < App.queue.idx) {
      App.queue.idx--;
    }
    return this.render(this.$ul.scrollTop(), true);
  };

  Queue.prototype.clearQueue = function() {
    App.queue.reset();
    return this.render();
  };

  return Queue;

})(App.Views.View);

var validateEmail, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

validateEmail = App.utils.validate.validateEmail;

App.Views.RegisterPage = (function(_super) {
  __extends(RegisterPage, _super);

  function RegisterPage() {
    _ref = RegisterPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  RegisterPage.prototype.className = 'register-page';

  RegisterPage.prototype.template = JST['register'];

  RegisterPage.prototype.events = {
    'keyup input.email': 'email',
    'keyup input.password': 'password'
  };

  RegisterPage.prototype.render = function() {
    var params;
    App.router.clearActive($('header .register'));
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case 'emailexists':
          App.notify.send('Error', "This email is already in use. But you knew that already, didn't you?");
          break;
        case 'pleaseregister':
          App.notify.send('Please Register', "Or don't. I don't care.");
      }
    }
    this.$el.html(this.template({
      csrf: App.csrf
    }));
    this.$email = this.$el.find('.email');
    this.$password = this.$el.find('.password');
    return this.submitButton = this.$el.find('form input[type="submit"]');
  };

  RegisterPage.prototype.email = function(e) {
    if (!validateEmail(this.$email.val())) {
      this.button(true);
      return this.$email.siblings('.invalid').show();
    }
    this.button();
    return this.$email.siblings('.invalid').hide();
  };

  RegisterPage.prototype.password = function(e) {
    if (this.$password.val().length < 6) {
      this.button(true);
      return this.$password.siblings('.invalid').show();
    }
    this.button();
    return this.$password.siblings('.invalid').hide();
  };

  RegisterPage.prototype.button = function(hide) {
    var disabled;
    disabled = 'disabled';
    if (!hide) {
      disabled = false;
    }
    return this.submitButton.attr('disabled', disabled);
  };

  return RegisterPage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Shows = (function(_super) {
  __extends(Shows, _super);

  function Shows() {
    this.activate = __bind(this.activate, this);
    _ref = Shows.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Shows.prototype.el = '.shows-container';

  Shows.prototype.template = JST['shows'];

  Shows.prototype.events = {
    'click a': 'activate'
  };

  Shows.prototype.initialize = function() {
    if (!this.options.band) {
      return;
    }
    if (!this.options.year) {
      this.shows = new App.Models.Shows(this.options.band, shows);
      return this.render();
    }
    this.shows = new App.Models.Shows({
      band: this.options.band,
      year: this.options.year
    });
    this.listenTo(this.shows, 'change', this.render);
    return this.shows.fetch();
  };

  Shows.prototype.render = function() {
    App.router.clearActive();
    this.$el.html(this.template({
      data: this.shows ? this.shows.toJSON() : shows,
      band: this.options.band
    }));
    this.$a = this.$el.find('a');
    this.$a.filter(".show-" + App.router.year + "-" + App.router.month + "-" + App.router.day).addClass('active');
    return this;
  };

  Shows.prototype.activate = function(e) {
    if (!this.$a) {
      this.$a = this.$el.find('a');
    }
    this.$a.removeClass('active');
    return $(e.target).addClass('active');
  };

  return Shows;

})(App.Views.View);

var months, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

App.Views.Songs = (function(_super) {
  __extends(Songs, _super);

  function Songs() {
    this.showSources = __bind(this.showSources, this);
    _ref = Songs.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Songs.prototype.el = '.songs-container';

  Songs.prototype.template = JST['songs'];

  Songs.prototype.events = {
    'click .add': 'addToPlaylist',
    'click .play': 'play',
    'click .add-all': 'addAll',
    'click .select-source': 'showSources'
  };

  Songs.prototype.initialize = function() {
    if (!(this.options.year || this.options.month || this.options.day)) {
      this.folder = new App.Models.Songs(songs);
      return this.render();
    }
    this.folder = new App.Models.Songs({
      band: this.options.band,
      year: this.options.year,
      month: this.options.month,
      day: this.options.day,
      version: this.options.showVersion
    });
    this.listenTo(this.folder, 'change', this.render);
    return this.folder.fetch();
  };

  Songs.prototype.render = function() {
    var $description, band, day, month, showVersion, sources, year, _ref1,
      _this = this;
    App.router.clearActive();
    if (this.folder) {
      sources = this.folder.get('data');
    }
    if (!(sources != null ? sources.length : void 0)) {
      return;
    }
    this.songs = sources[this.options.showVersion || 0];
    sources[this.options.showVersion || 0].hidden = true;
    _ref1 = App.router, band = _ref1.band, year = _ref1.year, month = _ref1.month, day = _ref1.day, showVersion = _ref1.showVersion;
    this.songs.tracks.map(function(track) {
      return _.extend(track, {
        band: band,
        year: year,
        month: month,
        day: day,
        showVersion: showVersion,
        show_title: _this.songs.title
      });
    });
    if (window.location.pathname.match(/\//g).length > 2) {
      App.router.updateDescription("Relisten to " + (App.bands[band].the ? "the " : void 0) + App.bands[band].name + " playing on " + months[month - 1] + " " + (App.utils.ordinal_suffix(day)) + ", " + year + " at " + (this._the(this.songs.venue.name)) + " in " + this.songs.venue.city);
    }
    this.$el.html(this.template({
      songs: this.songs,
      sources: sources || [],
      year: this.options.year,
      month: this.options.month,
      day: this.options.day,
      band: this.options.band,
      showVersion: this.options.showVersion || '',
      multipleSources: sources.length > 1,
      totalSources: sources.length
    }));
    $description = this.$el.find('.description');
    $description.powerTip({
      placement: 'sw'
    });
    this.$sources = this.$el.find('.source');
    return this;
  };

  Songs.prototype.play = function(e) {
    var id, song;
    id = $(e.target).parent().attr('data-id');
    song = new App.Models.Song({
      _id: id
    });
    return song.fetch({
      success: function() {
        return App.queue.reset(song);
      }
    });
  };

  Songs.prototype.addAll = function() {
    if (App.queue.length === 0) {
      App.queue.reset(this.songs.tracks);
    }
    return App.queue.add(this.songs.tracks);
  };

  Songs.prototype.addShowToPlaylist = function(e) {
    var $li, id;
    $li = $(e.target).parent();
    id = $li.attr('data-id');
    App.song = new App.Models.Song(_.findWhere(this.songs._songs, {
      _id: id
    }));
    App.queue.reset(songs);
    return this.playing = !!"in the band";
  };

  Songs.prototype.addToPlaylist = function(e) {
    var $li, idx, song;
    $li = $(e.target).parent();
    idx = $li.attr('data-idx');
    song = _.extend(this.songs.tracks[+idx], {
      band: this.options.band,
      year: this.options.year,
      month: this.options.month,
      day: this.options.day,
      showVersion: this.options.showVersion
    });
    App.queue.push(song);
    return false;
  };

  Songs.prototype.showSources = function() {
    if (this.$sources.is(':hidden')) {
      return this.$sources.slideDown();
    }
    return this.$sources.slideUp();
  };

  Songs.prototype._the = function(str) {
    if (!/^the/i.test(str)) {
      return "the " + str;
    }
    return str;
  };

  return Songs;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.TodayPage = (function(_super) {
  __extends(TodayPage, _super);

  function TodayPage() {
    this.render = __bind(this.render, this);
    _ref = TodayPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  TodayPage.prototype.className = 'today-page';

  TodayPage.prototype.template = JST['today'];

  TodayPage.prototype.events = {
    'click a': 'clickA'
  };

  TodayPage.prototype.initialize = function() {
    this.model = new App.Models.Today();
    this.model.on('change', this.render);
    return App.router.clearActive($('header .today'));
  };

  TodayPage.prototype.render = function() {
    if (this.$el) {
      return this.$el.html(this.template(this.model.toJSON()));
    }
  };

  TodayPage.prototype.clickA = function() {
    return App.initial = true;
  };

  return TodayPage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Years = (function(_super) {
  __extends(Years, _super);

  function Years() {
    this.activate = __bind(this.activate, this);
    _ref = Years.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Years.prototype.el = '.years-container';

  Years.prototype.template = JST['years'];

  Years.prototype.events = {
    'click a': 'activate'
  };

  Years.prototype.initialize = function() {
    if (!this.options.band) {
      return;
    }
    this.years = new App.Models.Years({
      band: this.options.band
    });
    this.listenTo(this.years, 'change', this.render);
    return this.years.fetch();
  };

  Years.prototype.render = function() {
    App.router.clearActive();
    this.$el.html(this.template({
      years: this.years.get('data'),
      band: this.options.band
    }));
    this.$a = this.$el.find('a');
    this.$a.filter('.year-' + App.router.year).addClass('active');
    return this;
  };

  Years.prototype.activate = function(e) {
    this.$a.removeClass('active');
    return $(e.target).addClass('active');
  };

  return Years;

})(App.Views.View);
