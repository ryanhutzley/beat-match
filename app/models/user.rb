class User < ApplicationRecord
    has_secure_password

    has_many :liked_users

    has_many :tracks

    def get_matches
        if self.user_type == "Rapper"
            producers = self.producers
            matches = producers.select do |prod|
                prod.rappers.each do |rapper|
                    if rapper.id == self.id
                        return true
                    end
                end
                return false
            end
            return matches
    
        else
            rappers = self.rappers
            matches = rappers.select do |rapper|
                rapper.producers.each do |prod|
                    if prod.id == self.id
                        return true
                    end
                end
                return false
            end
            return matches
        end
    end
end

  # has_many :requestees, foreign_key: :requestee_id, class_name: "LikedUser"
    # # has_many :rappers, through: :requestees

    # # has_many :requesters, foreign_key: :requester_id, class_name: "LikedUser"
    # # has_many :producers, through: :liked_producers

    # has_one :requester, foreign_key: :requester_id, class_name: "LikedUser"