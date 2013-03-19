class App.Views.Shows extends App.Views.View
  el: '.shows-container'
  template: JST['shows']
  initialize: ->
    return @render() unless @options.folder

    @folder = new App.Models.Folder id: @options.folder
    @listenTo @folder, 'change', @render
    @folder.fetch()
  render: ->
    App.router.clearActive()
    @$el.html @template
      shows: if @folder then @folder.toJSON() else shows

    @