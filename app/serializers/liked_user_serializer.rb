class LikedUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :liked_user_id
  # has_one :rapper
  # has_one :producer
end
