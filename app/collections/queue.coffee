class App.Collections.Queue extends App.Collections.Collection
  localStorage: new Backbone.LocalStorage "Queue"
  model: App.Models.Song
  idx: 0
  playing: false
  initialize: ->
    @on 'add', => @play() if (@length is 1) || (@idx is @length - 1 and !@playing)
    @on 'reset', =>
      @idx = 0
      @play() if @length > 0
  play: (song, ms) =>
    if song
      @idx = @indexOf App.song if App.song
    else
      return App.footer.pause() if @idx is @length
      App.song = @at @idx

    return false unless App.song
    @invoke 'set', active: ''
    App.song.set 'active', 'active'

    App.player.play ms
    @playing = true
    App.queueView.render()
    ++@idx
  playLast: ->
    @idx = @idx - 2
    @idx = 0 if @idx < 0
    @play()
