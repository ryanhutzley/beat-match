class MatchSerializer < ActiveModel::Serializer
  attributes :id
  has_one :rapper
  has_one :producer
end
