class Match < ApplicationRecord
  belongs_to :rapper, class_name: "User"
  belongs_to :producer, class_name: "User"
end
