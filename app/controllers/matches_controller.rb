class MatchessController < ApplicationController
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

    def create
        match = Match.create!(match_params)
        render json: match
    rescue ActiveRecord::RecordInvalid => e
        render json: {error: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    
    def destroy
        user = User.find(session[:user_id])
        type = user.user_type
        if type == 'Rapper'
            match = user.producer_matches.where(producer_id: params[:id]).first
        else
            match = user.rapper_matches.where(rapper_id: params[:id]).first
        end
        match.destroy
        head :no_content
    end

    private


    def match_params
        params.permit(:rapper_id, :producer_id)
    end

    def render_not_found
        render json: {error: "Not Found"}, status: 404
    end
end
