class MatchProducerSerializer < ActiveModel::Serializer
  attributes :id, :rapper_id, :producer_id
  # belongs_to :rapper
end
