class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :age, :user_type, :bio, :password_digest
  has_many :tracks
end
