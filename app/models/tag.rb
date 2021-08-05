class Tag < ApplicationRecord
    has_many :track_tags, dependent: :destroy
    has_many :tracks, through: :track_tags

    validates :genre, uniqueness: true
end
