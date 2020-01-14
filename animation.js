StarWars = (function() {

  function StarWars(args) {
    // context wrapper
    this.el = $(args.el);
    
    // audio to play the opening crawl!
    this.audio = this.el.find('audio').get(0);
    
    // starting the animation
    this.start = this.el.find('.start');
    
    // the animation wrapper
    this.animation = this.el.find('.animation');
    
    //remove animation and shows the start screen
    this.reset();

    // start the animation on click
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      // this.reset();
      window.location.replace('http://kimtran.art/merrychristmas.html');
    }, this));
  }
  
   // testing
  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});