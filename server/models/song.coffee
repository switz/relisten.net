{ Schema } = mongoose = require 'mongoose'

songSchema = new Schema
  genre: String
  albumId: Number
  album: String
  track: Number
  parent: Number
  contentType: String
  isDir: Boolean
  type: String
  suffix: String
  isVideo: Boolean
  size: Number
  transcodedSuffix: String
  id: Number
  transcodedContentType: String
  title: String
  duration: Number
  artistId: Number
  created: String
  path: String
  year: Number
  artist: String
  bitRate: Number
  month: Number
  day: Number
  year: Number

Song = mongoose.model 'Song', songSchema
