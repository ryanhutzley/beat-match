class MatchesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # skip_before_action :authorize, only: [:index]
    def index
        type = @current_user.user_type
        if type == 'Rapper'
            matches = @current_user.producer_matches
            render json: matches
        else
            matches = @current_user.rapper_matches
            render json: matches
        end
    end

    def show
        match = Match.find(params[:id])
        render json: match
    end
    
    def destroy
        if @current_user.user_type == "Rapper"
            match = Match.find_by(rapper_id: @current_user.id, producer_id: params[:id])
            liked_user = LikedUser.find_by(liked_user_id: params[:id], user_id: @current_user.id)
            match.destroy
            liked_user.destroy
            head :no_content
        else
            match = Match.find_by(rapper_id: params[:id], producer_id: @current_user.id)
            liked_user = LikedUser.find_by(liked_user_id: params[:id], user_id: @current_user.id)
            match.destroy
            liked_user.destroy
            head :no_content
        end
    end

    private


    def match_params
        params.permit(:rapper_id, :producer_id)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end
end
