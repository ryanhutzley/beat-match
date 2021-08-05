class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :song_url, :user_id
  # has_one :user
  has_many :tags
end
