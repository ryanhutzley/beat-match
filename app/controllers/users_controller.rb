class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # skip_before_action :authorize, only: [:index]

    # wrap_parameters :user, include: [:username, :password, :age, :bio, :password_confirmation]

    def index
        user = User.find_by(id: session[:user_id])
        users = []
        if user.user_type == "Rapper"
            users = User.producers
        else
            users = User.rappers
        end
        likees = []
        user.liked_users.each do |liked|
            likee = User.find_by(id: liked.liked_user_id)
            likees << likee
        end
        displayed_users = users.select do |u|
            truthy = true
            likees.each do |l|
                if l.id == u.id
                    truthy = false
                end
            end
            truthy
        end
        render json: displayed_users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        user.update(user_params)
        if user.valid?
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        user.destroy
        head :no_content
    end

    # def matches
    #     user = User.find_by(id: session[:user_id])
    #     connections = user.get_matches
    #     render json: connections
    # end

    private

    def user_params
        params.permit(:username, :user_type, :age, :bio, :password, :image_url)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end


end
