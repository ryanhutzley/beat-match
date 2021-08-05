class LikedUsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        liker = User.find_by(id: session[:user_id])
        if liker.user_type == "Rapper"
            liked_users = LikedUser.where(user_id: liker.id)
            likees = []
            liked_users.each do |u|
                likee_liked_users = LikedUser.where(user_id: u.liked_user_id)
                likee_liked_users.each do |user|
                    if user.liked_user_id == liker.id
                        Match.create(rapper_id: liker.id, producer_id: user.user_id)
                        displayed_user = User.find_by(id: user.user_id)
                        likees << displayed_user
                    end
                end
            end
            render json: likees
        else
            liked_users = LikedUser.where(user_id: liker.id)
            likees = []
            liked_users.each do |u|
                likee_liked_users = LikedUser.where(user_id: u.liked_user_id)
                likee_liked_users.each do |user|
                    if user.liked_user_id == liker.id
                        Match.create(rapper_id: user.user_id, producer_id: liker.id)
                        displayed_user = User.find_by(id: user.user_id)
                        likees << displayed_user
                    end
                end
            end
            render json: likees
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        liked_user = LikedUser.create(liked_user_params)
        if liked_user.valid?
            render json: liked_user, status: :created
        else
            render json: { errors: liked_user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def liked_user_params
        params.permit(:user_id, :liked_user_id)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end

    def render_invalid
        render json: {error: "invalid"}, status: :unprocessable_entity
    end

        # rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    # def index
    #     users = User.all
    #     users.each do |user|
    #         if user.user_type == 'Rapper'
    #             user.liked_users.each do |liked_user|
    #                 liked = User.find(liked_user.liked_user_id)
    #                 if (liked.liked_users.include?(user.id) && !Match.exists(rapper_id: user.id, producer_id: liked.id))
    #                     Match.create!(rapper_id: user.id, producer_id: liked.id)
    #                 end
    #             end
    #         else
    #             user.liked_users.each do |liked_user|
    #                 liked = User.find(liked_user.liked_user_id)
    #                 if (liked.liked_users.include?(user.id) && !Match.exists(rapper_id: liked.id, producer_id: user.id))
    #                     Match.create!(rapper_id: liked.id, producer_id: user.id)
    #                 end
    #             end
    #         end
    #     end
    # end

end