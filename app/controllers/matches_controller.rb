class MatchesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # skip_before_action :authorize, only: [:index]
    def index
        user = User.find(session[:user_id])
        type = user.user_type
        if type == 'Rapper'
            matches = user.producer_matches
        else
            matches = user.rapper_matches
        end
        render json: matches
    end

    def show
        match = Match.find(params[:id])
        render json: match
    end
    
    def destroy
        user = User.find(session[:user_id])
        if user.user_type == "Rapper"
            match = Match.find_by(rapper_id: user.id, producer_id: params[:producer_id])
            liked_user = LikedUser.find_by(liked_user_id: params[:producer_id], user_id: user.id)
            match.destroy
            liked_user.destroy
            head :no_content
        else
            match = Match.find_by(rapper_id: params[:rapper_id], producer_id: user.id)
            liked_user = LikedUser.find_by(liked_user_id: params[:rapper_id], user_id: user.id)
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
