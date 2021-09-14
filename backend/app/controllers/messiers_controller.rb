class MessiersController < ApplicationController
  def index
    @messiers = Messier.all
    render json: @messiers
  end
end
