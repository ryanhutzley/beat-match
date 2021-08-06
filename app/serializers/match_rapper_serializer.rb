class MatchRapperSerializer < ActiveModel::Serializer
  attributes :id, :rapper_id, :producer_id
  # belongs_to :producer
end
