class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :bio, :password_digest
end
