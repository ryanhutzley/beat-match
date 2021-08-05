class Match < ApplicationRecord
  belongs_to :rapper, class_name: "User"
  belongs_to :producer, class_name: "User"

  validates :rapper_id, uniqueness: { scope: :producer_id, message: "Match already exists"}
end
