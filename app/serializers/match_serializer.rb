class MatchSerializer < ActiveModel::Serializer
  attributes :id, :rapper_id, :producer_id
  belongs_to :rapper
  belongs_to :producer
end
