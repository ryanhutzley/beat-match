class User < ApplicationRecord
    has_secure_password

    has_many :rapper_matches, foreign_key: :producer_id, class_name: "Match"
    has_many :rappers, through: :rapper_matches

    has_many :producer_matches, foreign_key: :rapper_id, class_name: "Match"
    has_many :producers, through: :producer_matches

    has_many :tracks
end
