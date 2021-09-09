class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    skip_before_action :authorize, only: :create

    # wrap_parameters :user, include: [:username, :password, :age, :bio, :password_confirmation]

    def index
        users = []
        if @current_user.user_type == "Rapper"
            users = User.producers
        else
            users = User.rappers
        end
        likees = []
        @current_user.liked_users.each do |liked|
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
        render json: @current_user
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @current_user.update(user_params)
        # byebug
        if @current_user.valid?
            render json: @current_user
        else
            render json: { errors: @current_user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @current_user.destroy
        # head :no_content
    end

    private

    def user_params
        params.permit(:username, :user_type, :age, :bio, :password, :image_url)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end


end
