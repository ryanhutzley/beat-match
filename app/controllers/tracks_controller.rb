class TracksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        user = User.find(session[:user_id])
        tracks = Track.where(user_id: user.id)
        render json: tracks
    end

    def show
        user = User.find(params[:id])
        tracks = Track.where(user_id: user.id)
        render json: tracks
    end

    def create
        track = Track.create(track_params)
        if track.valid?
            render json: track, status: :created
        else
            render json: { errors: track.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        track = Track.find_by(id: params[:id])
        track.update?
        if track.valid?
            render json: track
        else
            render json: { errors: track.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        track = Track.find_by(id: params[:id])
        track.destroy
        head :no_content
    end

    private

    def track_params
        params.permit(:id, :user_id, :title, :song_url)
    end
    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end

end
