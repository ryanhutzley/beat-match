class LikedUser < ApplicationRecord
    belongs_to :user
    validates :liked_user_id, uniqueness: { scope: :id, message: "already liked"}
    # def rapper
    # end
    # def producer
    # end
end
