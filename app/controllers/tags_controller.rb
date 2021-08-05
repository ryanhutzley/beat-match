class TagsController < ApplicationController

    def index
        tags = Tag.all
        render json: tags
    end

    def create
        tag = Tag.create(tag_params)
        if tag.valid?
            render json: tag, status: :created
        else
            render json: { error: tag.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        tag = Tag.find(params[:id])
        tag.destroy
        head :no_content
    end

    private

    def tag_params
        params.permit(:genre)
    end

end
