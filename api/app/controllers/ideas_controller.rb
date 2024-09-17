class IdeasController < ApplicationController
  def index
    @ideas = Idea.all
    render json: @ideas
  end

  def show
  end

  def new
    @idea = Idea.new
  end

  def create
    idea = Idea.new(idea_params)
    idea.save!
  end

  def edit
  end

  private

  def idea_params
    params.require(:idea).permit(:name, :description)
  end
end
