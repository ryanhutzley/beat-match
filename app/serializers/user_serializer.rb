class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :user_type, :bio, :password_digest
end
