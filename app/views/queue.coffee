class App.Views.Queue extends App.Views.View
  el: '.queue-container'
  template: JST['queue']
  events:
    'click .save': 'savePlaylist'
    'click .song': 'play'
    'click .delete': 'removeFromQueue'
  initialize: ->
    App.queue = new App.Collections.Queue()
    @listenTo App.queue, 'add', @render
    @listenTo App.queue, 'reset', @render
    @render()
  render: ->
    @$el.html @template
      queue: App.queue.toJSON()
      loggedIn: App.user.loggedIn()
      activeSlug: if App.queue then App.queue.at(App.queue.idx - 1)?.get 'longSlug' else false
  savePlaylist: ->
    playlist = new App.Models.Playlist _songs: _.pluck(App.queue.toJSON(), '_id')
    playlist.save()
    @listenToOnce playlist, 'change', ->
      Backbone.history.navigate "/playlist/#{playlist.get('_id')}/edit", trigger: true
  play: (e) ->
    e.preventDefault()
    App.queue.idx = @$el.find('li').index $(e.target).parent()
    App.queue.play()
  removeFromQueue: (e) ->
     idx = @$el.find('.delete').index $(e.target)
     App.queue.remove App.queue.at(idx)
     App.queue.idx-- if idx < App.queue.idx
     @render()

