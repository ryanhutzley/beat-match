class User < ApplicationRecord
    has_secure_password

    has_many :rapper_matches, foreign_key: :producer_id, class_name: "Match", dependent: :destroy
    has_many :rappers, through: :rapper_matches

    has_many :producer_matches, foreign_key: :rapper_id, class_name: "Match", dependent: :destroy
    has_many :producers, through: :producer_matches

    has_many :liked_users, dependent: :destroy

    has_many :tracks, dependent: :destroy

    vaidates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true

    def self.rappers
        self.where(user_type: "Rapper")
    end

    def self.producers
        self.where(user_type: "Producer")
    end
end