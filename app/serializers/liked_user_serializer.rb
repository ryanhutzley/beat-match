class LikedUserSerializer < ActiveModel::Serializer
  attributes :id
  has_one :rapper
  has_one :producer
end
