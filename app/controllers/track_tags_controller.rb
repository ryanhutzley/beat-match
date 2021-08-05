class TrackTagsController < ApplicationController

    def create
        track_tag = TrackTag.create(track_tag_params)
        if track_tag.valid?
            render json: track_tag, status: :created
        else
            render json: { errors: track_tag.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def track_tag_params
        params.permit(:track_id, :tag_id)
    end

end
