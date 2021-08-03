class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # skip_before_action :authorize, only: [:create]

    # wrap_parameters :user, include: [:username, :password, :age, :bio, :password_confirmation]

    def index
        users = User.all
        render json: users
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
        byebug
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
        user.session.delete
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :user_type, :age, :bio, :password)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end


end
