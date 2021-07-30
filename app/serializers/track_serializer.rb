class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :song_url, :genres
  has_one :user
end
