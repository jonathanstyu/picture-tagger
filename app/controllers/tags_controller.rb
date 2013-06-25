class TagsController < ApplicationController

  def create
    @tag = Tag.new(params[:tag])
    p @tag
    @tag.photo_id = params[:photo_id]
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors
    end
  end
end
