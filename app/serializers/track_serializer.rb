class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :song_url
  has_one :user
  has_many :tags
end
