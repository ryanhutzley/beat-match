class LikedUsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def get_all
        likes = LikedUser.all
        render json: likes
    end

    def index
        liker = @current_user
        if liker.user_type == "Rapper"
            liked_users = LikedUser.where(user_id: liker.id)
            likees = []
            liked_users.each do |u|
                likee_liked_users = LikedUser.where(user_id: u.liked_user_id)
                likee_liked_users.each do |user|
                    if user.liked_user_id == liker.id
                        match = Match.create(rapper_id: liker.id, producer_id: user.user_id)
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
        liked_user = LikedUser.create(user_id: @current_user.id, liked_user_id: params[:liked_user_id])
        if liked_user.valid?
            user2 = User.find_by(id: params[:liked_user_id])
            
            if user2.liked_users.any?{|u| u.liked_user_id == @current_user.id}
                # values_at(:liked_user_id).include?(user.id)
                render json: {response: "match"}, status: :created
            else
                render json: {response: "no match"}, status: :created
            end
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

end