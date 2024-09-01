class IdeasController < ApplicationController
  def index
    @ideas = Idea.all
    render json: @ideas
  end

  def show
  end

  def new
  end

  def edit
  end
end
